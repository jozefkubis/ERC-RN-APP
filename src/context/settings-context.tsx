import { createContext, useContext, useState, type ReactNode } from "react";

// Jazyky, ktore bude appka podporovat.
// Typ nam zabrani omylom nastavit iny jazyk, napriklad "cz" alebo "de".
export type AppLanguage = "sk" | "en";

// Rezimy zobrazenia, ktore bude appka podporovat.
export type AppThemeMode = "light" | "dark";

type SettingsContextValue = {
  language: AppLanguage;
  themeMode: AppThemeMode;
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
  // Toto su zatial iba hodnoty v pamati pocas behu appky.
  // AsyncStorage pridame az neskor, ked overime, ze context funguje.
  const [language, setLanguage] = useState<AppLanguage>("sk");
  const [themeMode, setThemeMode] = useState<AppThemeMode>("light");

  return (
    <SettingsContext.Provider
      value={{
        language,
        themeMode,
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
