import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const alternatives = [
  "Aminofylín",
  "Dopamín",
  "Glukagón (ak je bradykardia spôsobená betablokátorom alebo blokátorom kalciových kanálov)",
  "Glykopyrolát (môže byť použitý namiesto atropínu)",
];

export default function BradyAlternativeMedications() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.stepHeader}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>Doplnok</Text>
          </View>
          <Text style={styles.stepTitle}>Alternatívne lieky</Text>
          <Text style={styles.stepDescription}>
            Prehľad možností, ktoré možno zvážiť pri nedostatočnej reakcii na
            atropín.
          </Text>
        </View>

        <View style={styles.noteCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Ionicons name="medkit" size={23} color="#075296" />
            </View>
            <Text style={styles.cardTitle}>Alternatívy zahŕňajú</Text>
          </View>

          <View style={styles.list}>
            {alternatives.map((item) => (
              <View key={item} style={styles.listItem}>
                <View style={styles.dot} />
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    gap: 15,
  },
  stepHeader: {
    width: "100%",
    gap: 7,
    paddingTop: 6,
    paddingBottom: 4,
  },
  stepBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#FFF3D2",
  },
  stepBadgeText: {
    color: "#075296",
    fontSize: 20,
    fontWeight: "800",
  },
  stepTitle: {
    color: "#10243C",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 30,
  },
  stepDescription: {
    color: "#5C6574",
    fontSize: 14,
    lineHeight: 21,
  },
  noteCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderRadius: 8,
    borderCurve: "continuous",
    backgroundColor: "#F7EED6",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
  },
  cardTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  list: {
    gap: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  dot: {
    width: 6,
    height: 6,
    marginTop: 7,
    borderRadius: 3,
    backgroundColor: "#075296",
  },
  listText: {
    flex: 1,
    color: "#075296",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
  },
});
