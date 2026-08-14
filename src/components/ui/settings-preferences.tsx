import {
  AppLanguage,
  AppThemeMode,
  useSettings,
} from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Option<T extends string> = {
  label: string;
  value: T;
  iconName: keyof typeof Ionicons.glyphMap;
};

const languageOptions: Option<AppLanguage>[] = [
  { label: "English", value: "en", iconName: "language-outline" },
  { label: "Slovensky", value: "sk", iconName: "chatbubble-ellipses-outline" },
];

const modeOptions: Option<AppThemeMode>[] = [
  { label: "Svetly", value: "light", iconName: "sunny-outline" },
  { label: "Tmavy", value: "dark", iconName: "moon-outline" },
];

export default function SettingsPreferences() {
  const { language, themeMode, setLanguage, setThemeMode } = useSettings();

  function handleLanguagePress(value: AppLanguage) {
    setLanguage(value);
    console.log(`settings language clicked: ${value}`);
  }

  function handleModePress(value: AppThemeMode) {
    setThemeMode(value);
    console.log(`settings mode clicked: ${value}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="settings-outline" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>Nastavenia aplikacie</Text>
          <Text style={styles.subtitle}>
            Predvolby zatial sluzia iba ako UX ukazka.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jazyk</Text>
        <View style={styles.optionGroup}>
          {languageOptions.map((option) => (
            <PreferenceOption
              key={option.value}
              label={option.label}
              iconName={option.iconName}
              selected={language === option.value}
              onPress={() => handleLanguagePress(option.value)}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rezim zobrazenia</Text>
        <View style={styles.optionGroup}>
          {modeOptions.map((option) => (
            <PreferenceOption
              key={option.value}
              label={option.label}
              iconName={option.iconName}
              selected={themeMode === option.value}
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
  onPress: () => void;
};

function PreferenceOption({
  label,
  iconName,
  selected,
  onPress,
}: PreferenceOptionProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.option,
        selected && styles.selectedOption,
        pressed && styles.pressedOption,
      ]}
    >
      <View style={[styles.optionIcon, selected && styles.selectedOptionIcon]}>
        <Ionicons
          name={iconName}
          size={22}
          color={selected ? "#FFFFFF" : "#075296"}
        />
      </View>
      <Text style={[styles.optionLabel, selected && styles.selectedOptionLabel]}>
        {label}
      </Text>
      <Ionicons
        name={selected ? "checkmark-circle" : "ellipse-outline"}
        size={22}
        color={selected ? "#075296" : "#A4ADBA"}
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
    borderColor: "#CBD3DF",
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
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
    backgroundColor: "#075296",
  },
  headerText: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: "#10243C",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  subtitle: {
    color: "#5C6574",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    color: "#10243C",
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
    borderColor: "#D7DEE8",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#F9FAFE",
  },
  selectedOption: {
    borderColor: "#075296",
    backgroundColor: "#E4EFFD",
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
    backgroundColor: "#EAF2FC",
  },
  selectedOptionIcon: {
    backgroundColor: "#075296",
  },
  optionLabel: {
    flex: 1,
    color: "#24425F",
    fontSize: 15,
    fontWeight: "800",
  },
  selectedOptionLabel: {
    color: "#075296",
  },
});
