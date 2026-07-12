import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ParalelThinkingALS() {
  return (
    <View style={styles.noteCard}>
      <View style={styles.noteIcon}>
        <Ionicons name="git-branch-outline" size={24} color="#FFFFFF" />
      </View>
      <View style={styles.noteTextContainer}>
        <Text style={styles.noteTitle}>Myslite paralelne</Text>
        <Text style={styles.noteDescription}>
          Počas KPR zabezpečte i.v./i.o. vstup, manažment dýchacích ciest,
          rozdelenie úloh v tíme a liečbu príčiny.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 16,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  noteIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  noteTextContainer: {
    flex: 1,
    gap: 4,
  },
  noteTitle: {
    color: "#0877D1",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  noteDescription: {
    color: "#28506F",
    fontSize: 13,
    lineHeight: 19,
  },
});
