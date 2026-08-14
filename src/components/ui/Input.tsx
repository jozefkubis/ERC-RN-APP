import type { AppThemeMode } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useState, type ComponentProps } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

type InputProps = TextInputProps & {
  iconName?: ComponentProps<typeof Ionicons>["name"];
  iconSize?: number;
  iconColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  clearable?: boolean;
  clearAccessibilityLabel?: string;
  themeMode?: AppThemeMode;
};

const inputColors = {
  light: {
    background: "#FFFFFF",
    border: "#D7DEE8",
    focusedBorder: "#0877D1",
    icon: "#6B7483",
    focusedIcon: "#0877D1",
    text: "#10243C",
    placeholder: "#7A8492",
    clearBackground: "#EEF2F6",
    clearIcon: "#7A8492",
  },
  dark: {
    background: "#101B2B",
    border: "#31435A",
    focusedBorder: "#77B7F2",
    icon: "#AAB6C7",
    focusedIcon: "#77B7F2",
    text: "#F5F8FC",
    placeholder: "#7F8EA3",
    clearBackground: "#20334C",
    clearIcon: "#AAB6C7",
  },
};

export default function Input({
  iconName = "search",
  iconSize = 22,
  iconColor,
  containerStyle,
  clearable = false,
  clearAccessibilityLabel = "Vymazať text",
  themeMode = "light",
  style,
  value,
  onChangeText,
  ...textInputProps
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const colors = inputColors[themeMode];

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: isFocused ? colors.focusedBorder : colors.border,
          backgroundColor: colors.background,
        },
        containerStyle,
      ]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Ionicons
        name={iconName}
        size={iconSize}
        color={isFocused ? colors.focusedIcon : (iconColor ?? colors.icon)}
      />
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, { color: colors.text }, style]}
        placeholderTextColor={
          textInputProps.placeholderTextColor ?? colors.placeholder
        }
        selectionColor={textInputProps.selectionColor ?? colors.focusedIcon}
      />
      {clearable && value ? (
        <Pressable
          accessibilityLabel={clearAccessibilityLabel}
          accessibilityRole="button"
          hitSlop={10}
          onPress={() => onChangeText?.("")}
          style={({ pressed }) => [
            styles.clearButton,
            { backgroundColor: colors.clearBackground },
            pressed && styles.clearButtonPressed,
          ]}
        >
          <Ionicons name="close-circle" size={22} color={colors.clearIcon} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 18,
    borderCurve: "continuous",
    boxShadow: "0 5px 18px rgba(15, 35, 60, 0.08)",
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    fontWeight: "500",
  },
  clearButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  clearButtonPressed: {
    opacity: 0.65,
    transform: [{ scale: 0.94 }],
  },
});
