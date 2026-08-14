import {
  AppLanguage,
  AppThemeMode,
  useSettings,
} from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Option<T extends string> = {
  labels: Record<AppLanguage, string>;
  value: T;
  iconName: keyof typeof Ionicons.glyphMap;
};

const languageOptions: Option<AppLanguage>[] = [
  {
    labels: { sk: "Anglicky", en: "English" },
    value: "en",
    iconName: "language-outline",
  },
  {
    labels: { sk: "Slovensky", en: "Slovak" },
    value: "sk",
    iconName: "chatbubble-ellipses-outline",
  },
];

const modeOptions: Option<AppThemeMode>[] = [
  {
    labels: { sk: "Svetlý", en: "Light" },
    value: "light",
    iconName: "sunny-outline",
  },
  {
    labels: { sk: "Tmavý", en: "Dark" },
    value: "dark",
    iconName: "moon-outline",
  },
];

// Zatiaľ jednoduché texty priamo pri settings obrazovke.
// Keď budeme prekladať celú appku, presunieme ich do spoločného miesta.
const settingsText = {
  sk: {
    title: "Nastavenia aplikácie",
    subtitle: "Výber jazyka a režimu zobrazenia.",
    languageTitle: "Jazyk",
    modeTitle: "Režim zobrazenia",
  },
  en: {
    title: "App settings",
    subtitle: "Choose language and display mode.",
    languageTitle: "Language",
    modeTitle: "Display mode",
  },
};

const settingsColors = {
  light: {
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    title: "#10243C",
    subtitle: "#5C6574",
    primary: "#075296",
    iconBackground: "#075296",
    optionBackground: "#F9FAFE",
    selectedOptionBackground: "#E4EFFD",
    optionBorder: "#D7DEE8",
    optionText: "#24425F",
    mutedIcon: "#A4ADBA",
    optionIconBackground: "#EAF2FC",
    selectedIconColor: "#FFFFFF",
  },
  dark: {
    cardBackground: "#101B2B",
    cardBorder: "#26364C",
    title: "#F5F8FC",
    subtitle: "#AAB6C7",
    primary: "#77B7F2",
    iconBackground: "#075296",
    optionBackground: "#152236",
    selectedOptionBackground: "#183B5E",
    optionBorder: "#31435A",
    optionText: "#E7EEF8",
    mutedIcon: "#6F8096",
    optionIconBackground: "#20334C",
    selectedIconColor: "#FFFFFF",
  },
};

export default function SettingsPreferences() {
  const { language, themeMode, setLanguage, setThemeMode } = useSettings();
  const text = settingsText[language];
  const colors = settingsColors[themeMode];

  function handleLanguagePress(value: AppLanguage) {
    setLanguage(value);
    console.log(`settings language clicked: ${value}`);
  }

  function handleModePress(value: AppThemeMode) {
    setThemeMode(value);
    console.log(`settings mode clicked: ${value}`);
  }

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.cardBorder,
          backgroundColor: colors.cardBackground,
        },
      ]}
    >
      <View style={styles.header}>
        <View
          style={[
            styles.headerIcon,
            { backgroundColor: colors.iconBackground },
          ]}
        >
          <Ionicons name="settings-outline" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.headerText}>
          <Text style={[styles.title, { color: colors.title }]}>
            {text.title}
          </Text>
          <Text style={[styles.subtitle, { color: colors.subtitle }]}>
            {text.subtitle}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.title }]}>
          {text.languageTitle}
        </Text>
        <View style={styles.optionGroup}>
          {languageOptions.map((option) => (
            <PreferenceOption
              key={option.value}
              label={option.labels[language]}
              iconName={option.iconName}
              selected={language === option.value}
              colors={colors}
              onPress={() => handleLanguagePress(option.value)}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.title }]}>
          {text.modeTitle}
        </Text>
        <View style={styles.optionGroup}>
          {modeOptions.map((option) => (
            <PreferenceOption
              key={option.value}
              label={option.labels[language]}
              iconName={option.iconName}
              selected={themeMode === option.value}
              colors={colors}
              onPress={() => handleModePress(option.value)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

type PreferenceOptionProps = {
  label: string;
  iconName: keyof typeof Ionicons.glyphMap;
  selected: boolean;
  colors: (typeof settingsColors)[AppThemeMode];
  onPress: () => void;
};

function PreferenceOption({
  label,
  iconName,
  selected,
  colors,
  onPress,
}: PreferenceOptionProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.option,
        {
          borderColor: selected ? colors.primary : colors.optionBorder,
          backgroundColor: selected
            ? colors.selectedOptionBackground
            : colors.optionBackground,
        },
        pressed && styles.pressedOption,
      ]}
    >
      <View
        style={[
          styles.optionIcon,
          {
            backgroundColor: selected
              ? colors.iconBackground
              : colors.optionIconBackground,
          },
        ]}
      >
        <Ionicons
          name={iconName}
          size={22}
          color={selected ? colors.selectedIconColor : colors.primary}
        />
      </View>
      <Text
        style={[
          styles.optionLabel,
          { color: selected ? colors.primary : colors.optionText },
        ]}
      >
        {label}
      </Text>
      <Ionicons
        name={selected ? "checkmark-circle" : "ellipse-outline"}
        size={22}
        color={selected ? colors.primary : colors.mutedIcon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 24,
    padding: 18,
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  headerIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  headerText: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "900",
  },
  optionGroup: {
    gap: 9,
  },
  option: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  pressedOption: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
  optionIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
  },
  optionLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
  },
});
