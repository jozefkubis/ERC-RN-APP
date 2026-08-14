import SettingsPreferences from "@/src/components/ui/settings-preferences";
import { useSettings } from "@/src/context/settings-context";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

const screenColors = {
  light: {
    background: "#F7F8FC",
    statusBar: "dark-content" as const,
  },
  dark: {
    background: "#07111F",
    statusBar: "light-content" as const,
  },
};

export default function Settings() {
  const { themeMode } = useSettings();
  const colors = screenColors[themeMode];

  return (
    <>
      <StatusBar barStyle={colors.statusBar} />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <SettingsPreferences />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
});
