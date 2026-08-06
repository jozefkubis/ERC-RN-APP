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
};

export default function Input({
  iconName = "search",
  iconSize = 22,
  iconColor = "#6B7483",
  containerStyle,
  clearable = false,
  style,
  value,
  onChangeText,
  ...textInputProps
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[styles.container, containerStyle, isFocused && styles.focused]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Ionicons
        name={iconName}
        size={iconSize}
        color={isFocused ? "#0877D1" : iconColor}
      />
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
        placeholderTextColor={textInputProps.placeholderTextColor ?? "#7A8492"}
        selectionColor={textInputProps.selectionColor ?? "#0877D1"}
      />
      {clearable && value ? (
        <Pressable
          accessibilityLabel="Vymazať text"
          accessibilityRole="button"
          hitSlop={10}
          onPress={() => onChangeText?.("")}
          style={({ pressed }) => [
            styles.clearButton,
            pressed && styles.clearButtonPressed,
          ]}
        >
          <Ionicons name="close-circle" size={22} color="#7A8492" />
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
    borderColor: "#D7DEE8",
    borderRadius: 18,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 5px 18px rgba(15, 35, 60, 0.08)",
  },
  input: {
    flex: 1,
    height: "100%",
    color: "#10243C",
    fontSize: 16,
    fontWeight: "500",
  },
  focused: {
    borderColor: "#0877D1",
    boxShadow: "0 5px 18px rgba(8, 119, 209, 0.14)",
  },
  clearButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#EEF2F6",
  },
  clearButtonPressed: {
    opacity: 0.65,
    transform: [{ scale: 0.94 }],
  },
});
