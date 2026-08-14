import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { useSettings } from "@/src/context/settings-context";

const connectorColors = {
  light: "#075296",
  dark: "#77B7F2",
};

export default function FlowConnector() {
  const { themeMode } = useSettings();

  return (
    <View style={styles.flowConnector}>
      <Ionicons name="arrow-down" size={24} color={connectorColors[themeMode]} />
    </View>
  );
}

const styles = StyleSheet.create({
  flowConnector: {
    alignItems: "center",
    marginVertical: -4,
  },
});
