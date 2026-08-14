import SettingsPreferences from "@/src/components/ui/settings-preferences";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
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
