import type { AppThemeMode } from "@/src/context/settings-context";

export const navigationColors = {
  light: {
    background: "#F7F8FC",
    primaryText: "#10243C",
    primary: "#075296",
    muted: "#6B7483",
    border: "#CBD3DF",
  },
  dark: {
    background: "#0B1828",
    primaryText: "#F5F8FC",
    primary: "#77B7F2",
    muted: "#AAB6C7",
    border: "#31435A",
  },
};

export function getHeaderOptions(themeMode: AppThemeMode) {
  const colors = navigationColors[themeMode];

  return {
    headerStyle: { backgroundColor: colors.background },
    headerTintColor: colors.primaryText,
    headerTitleStyle: {
      color: colors.primaryText,
      fontWeight: "bold" as const,
    },
    headerTitleAlign: "center" as const,
  };
}

export const defaultHeaderOptions = getHeaderOptions("light");
