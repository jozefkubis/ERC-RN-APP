import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import InfoCard from "../../ui/info-card";
import TachyRegularityButtons from "./TachyRegularityButtons";

export default function Step3TachyNarrow() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.stepHeader}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>Krok 3</Text>
          </View>
          <Text style={styles.stepTitle}>Úzky QRS komplex</Text>
          <Text style={styles.stepDescription}>
            Pri úzkom QRS komplexe zhodnoťte, či je rytmus pravidelný alebo
            nepravidelný.
          </Text>
        </View>

        <View style={styles.stablePanel}>
          <Text style={styles.panelTitle}>STABILNÝ</Text>

          <View style={styles.rhythmCard}>
            <View style={styles.rhythmIcon}>
              <Ionicons name="pulse" size={28} color="#ED1C24" />
            </View>
            <Text style={styles.rhythmText}>Zhodnoťte pravidelnosť rytmu</Text>
          </View>

          <TachyRegularityButtons />
        </View>

        <InfoCard
          title="Pripomienka"
          description="Ak sa stav pacienta zhorší alebo sa objavia život ohrozujúce príznaky, postupujte ako pri nestabilnej tachykardii."
          iconName="information-circle-outline"
        />
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
  stablePanel: {
    width: "100%",
    gap: 16,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7F2F5",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  panelTitle: {
    alignSelf: "center",
    color: "#075296",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  rhythmCard: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 320,
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: "#0877D1",
    borderRadius: 14,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
  },
  rhythmIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#E4EFFD",
  },
  rhythmText: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
    textAlign: "center",
  },
});
