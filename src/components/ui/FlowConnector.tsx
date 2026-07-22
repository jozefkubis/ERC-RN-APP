import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function FlowConnector() {
  return (
    <View style={styles.flowConnector}>
      <Ionicons name="arrow-down" size={24} color="#075296" />
    </View>
  );
}

const styles = StyleSheet.create({
  flowConnector: {
    alignItems: "center",
    marginVertical: -4,
  },
});
