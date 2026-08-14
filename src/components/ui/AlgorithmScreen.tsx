import type { AppThemeMode } from "@/src/context/settings-context";
import type { ReactNode } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

type AlgorithmScreenProps = {
  children: ReactNode;
  themeMode?: AppThemeMode;
};

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

export default function AlgorithmScreen({
  children,
  themeMode = "light",
}: AlgorithmScreenProps) {
  const colors = screenColors[themeMode];

  return (
    <>
      <StatusBar barStyle={colors.statusBar} />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        {children}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    paddingBottom: 30,
    gap: 15,
  },
});
