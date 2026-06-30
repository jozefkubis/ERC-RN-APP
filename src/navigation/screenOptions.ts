export const navigationColors = {
  background: "#F7F8FC",
  primaryText: "#10243C",
  primary: "#075296",
  muted: "#6B7483",
  border: "#CBD3DF",
};

export const defaultHeaderOptions = {
  headerStyle: { backgroundColor: navigationColors.background },
  headerTintColor: navigationColors.primaryText,
  headerTitleStyle: { fontWeight: "bold" as const },
  headerTitleAlign: "center" as const,
};
