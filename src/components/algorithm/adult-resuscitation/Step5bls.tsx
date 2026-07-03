import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Step5bls() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.stepHeader}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>Krok 5</Text>
          </View>
          <Text style={styles.stepTitle}>Pripojte AED</Text>
          <Text style={styles.stepDescription}>
            AED použite hneď, ako je dostupný, a riaďte sa jeho pokynmi.
          </Text>
        </View>

        <View style={styles.aedCard}>
          <View style={styles.aedIcon}>
            <Ionicons name="flash" size={28} color="#FFFFFF" />
          </View>
          <View style={styles.aedTextContainer}>
            <Text style={styles.aedTitle}>Pripojte AED čo najskôr</Text>
            <Text style={styles.aedDescription}>
              Postupujte podľa pokynov AED
            </Text>
          </View>
        </View>

        <View style={styles.flowArrow}>
          <Ionicons name="arrow-down" size={24} color="#075296" />
        </View>

        <View style={styles.finalCard}>
          <Text style={styles.finalText}>
            Pokračujte v KPR, kým príde záchranná služba / resuscitačný tím
          </Text>
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
    backgroundColor: "#E4EFFD",
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
  aedCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 8,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  aedIcon: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#1BA058",
  },
  aedTextContainer: {
    flex: 1,
    gap: 4,
  },
  aedTitle: {
    color: "#075296",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  aedDescription: {
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  flowArrow: {
    width: "100%",
    alignItems: "center",
    marginVertical: -5,
  },
  finalCard: {
    width: "100%",
    minHeight: 84,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 999,
    backgroundColor: "#D7EDFD",
  },
  finalText: {
    color: "#075296",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 24,
    textAlign: "center",
  },
});
