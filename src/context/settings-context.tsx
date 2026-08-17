import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Jazyky, ktore bude appka podporovat.
// Typ nam zabrani omylom nastavit iny jazyk, napriklad "cz" alebo "de".
export type AppLanguage = "sk" | "en";

// Rezimy zobrazenia, ktore bude appka podporovat.
export type AppThemeMode = "light" | "dark";

// Vsetky nastavenia, ktore budeme neskor ukladat do AsyncStorage spolu.
export type AppSettings = {
  language: AppLanguage;
  themeMode: AppThemeMode;
};

// Hodnoty, ktore appka pouzije pri prvom spusteni.
export const DEFAULT_SETTINGS: AppSettings = {
  language: "sk",
  themeMode: "light",
};

// Samostatny kluc, aby sa nastavenia nemiesali s historiou aplikacie.
export const SETTINGS_STORAGE_KEY = "app_settings";

function areSettingsValid(settings: AppSettings | null) {
  if (!settings) {
    return false;
  }

  const languageIsValid =
    settings.language === "sk" || settings.language === "en";
  const themeIsValid =
    settings.themeMode === "light" || settings.themeMode === "dark";

  return languageIsValid && themeIsValid;
}

async function saveSettings(settings: AppSettings) {
  try {
    const settingsAsText = JSON.stringify(settings);
    await AsyncStorage.setItem(SETTINGS_STORAGE_KEY, settingsAsText);
  } catch {
    // Ak ulozenie zlyha, appka bude dalej fungovat s hodnotami v pamati.
  }
}

type SettingsContextValue = {
  language: AppLanguage;
  themeMode: AppThemeMode;
  isSettingsReady: boolean;
  setLanguage: (language: AppLanguage) => void;
  setThemeMode: (themeMode: AppThemeMode) => void;
};

type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined,
);

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [language, setLanguageState] = useState<AppLanguage>(
    DEFAULT_SETTINGS.language,
  );
  const [themeMode, setThemeModeState] = useState<AppThemeMode>(
    DEFAULT_SETTINGS.themeMode,
  );
  const [isSettingsReady, setIsSettingsReady] = useState(false);

  useEffect(() => {
    async function loadSettings() {
      try {
        const savedSettings = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);

        if (savedSettings === null) {
          return;
        }

        const parsedSettings = JSON.parse(savedSettings) as AppSettings;

        if (!areSettingsValid(parsedSettings)) {
          return;
        }

        setLanguageState(parsedSettings.language);
        setThemeModeState(parsedSettings.themeMode);
      } catch {
        // Pri chybe zostanu nastavene bezpecne predvolene hodnoty.
      } finally {
        setIsSettingsReady(true);
      }
    }

    loadSettings();
  }, []);

  async function setLanguage(language: AppLanguage) {
    setLanguageState(language);
    await saveSettings({ language, themeMode });
  }

  async function setThemeMode(themeMode: AppThemeMode) {
    setThemeModeState(themeMode);
    await saveSettings({ language, themeMode });
  }

  return (
    <SettingsContext.Provider
      value={{
        language,
        themeMode,
        isSettingsReady,
        setLanguage,
        setThemeMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const settings = useContext(SettingsContext);

  // Ak by sme hook pouzili mimo SettingsProvider, hned dostaneme citatelnu chybu.
  // Je to lepsie ako tichy pad na undefined hodnote.
  if (!settings) {
    throw new Error("useSettings must be used inside SettingsProvider");
  }

  return settings;
}
