import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type TachyRegularityButtonsProps = {
  onIrregularPress?: () => void;
  onRegularPress?: () => void;
};

const buttonText = {
  sk: {
    irregular: "Nepravidelný",
    regular: "Pravidelný",
  },
  en: {
    irregular: "Irregular",
    regular: "Regular",
  },
};

const buttonColors = {
  light: {
    background: "#FFFFFF",
    border: "#075296",
    text: "#10243C",
    primary: "#075296",
    iconBackground: "#E4EFFD",
  },
  dark: {
    background: "#101B2B",
    border: "#2F7FBE",
    text: "#F5F8FC",
    primary: "#B9DDFF",
    iconBackground: "#164C80",
  },
};

export default function TachyRegularityButtons({
  onIrregularPress,
  onRegularPress,
}: TachyRegularityButtonsProps) {
  const { language, themeMode } = useSettings();
  const text = buttonText[language];
  const colors = buttonColors[themeMode];

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onIrregularPress}
        style={({ pressed }) => [
          styles.button,
          {
            borderColor: colors.border,
            backgroundColor: colors.background,
          },
          pressed && styles.pressed,
        ]}
      >
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: colors.iconBackground },
          ]}
        >
          <Ionicons name="git-branch" size={24} color={colors.primary} />
        </View>
        <Text style={[styles.buttonText, { color: colors.text }]}>
          {text.irregular}
        </Text>
        <Ionicons name="arrow-forward" size={26} color={colors.primary} />
      </Pressable>

      <Pressable
        onPress={onRegularPress}
        style={({ pressed }) => [
          styles.button,
          {
            borderColor: colors.border,
            backgroundColor: colors.background,
          },
          pressed && styles.pressed,
        ]}
      >
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: colors.iconBackground },
          ]}
        >
          <Ionicons name="reorder-three" size={26} color={colors.primary} />
        </View>
        <Text style={[styles.buttonText, { color: colors.text }]}>
          {text.regular}
        </Text>
        <Ionicons name="arrow-forward" size={26} color={colors.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
  },
  button: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  buttonText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 28,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
