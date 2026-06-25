import { Ionicons } from "@expo/vector-icons";
import { useState, type ComponentProps } from "react";
import {
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
};

export default function Input({
  iconName = "search",
  iconSize = 24,
  iconColor = "#AAACB0",
  containerStyle,
  style,
  ...textInputProps
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[styles.container, containerStyle, isFocused && styles.focused]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
      <TextInput
        {...textInputProps}
        style={[styles.input, style]}
        placeholderTextColor={textInputProps.placeholderTextColor ?? "#7A8492"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#C4C6CB",
    borderRadius: 10,
    borderCurve: "continuous",
  },
  input: {
    flex: 1,
    height: "100%",
    color: "#10243C",
    fontSize: 16,
  },
  focused: {
    borderColor: "#0877D1",
    borderWidth: 3,
  },
});
