import InfoCard from "@/src/components/ui/info-card";
import YesButton from "@/src/components/ui/YesButton";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const asystoleRiskSigns = [
  "Nedávna asystólia",
  "AV blokáda Mobitz II",
  "Kompletná srdcová blokáda so širokým QRS",
  "Komorová pauza > 3 s",
];

export default function Step2BradyStable() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.stepHeader}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>Krok 2</Text>
          </View>
          <Text style={styles.stepTitle}>Stabilná bradykardia</Text>
          <Text style={styles.stepDescription}>
            Ak pacient nemá život ohrozujúce príznaky, zhodnoťte riziko
            asystólie a pokračujte podľa odpovede.
          </Text>
        </View>

        <View style={styles.stablePanel}>
          <View style={styles.panelTitleRow}>
            <View style={styles.panelIcon}>
              <Ionicons name="shield-checkmark" size={24} color="#075296" />
            </View>
            <Text style={styles.panelTitle}>STABILNÁ</Text>
          </View>

          <View style={styles.flowContainer}>
            <View style={styles.questionCard}>
              <View style={styles.questionIcon}>
                <Ionicons name="help" size={26} color="#FFFFFF" />
              </View>
              <View style={styles.questionContent}>
                <Text style={styles.questionText}>Riziko asystólie?</Text>
                <View style={styles.list}>
                  {asystoleRiskSigns.map((item) => (
                    <View key={item} style={styles.listItem}>
                      <View style={styles.dot} />
                      <Text style={styles.listText}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.answersContainer}>
              <YesButton
                onPress={() =>
                  router.push(
                    "/algorithms/adult-resuscitation/bradycardia/step3unstable",
                  )
                }
              />
              <View style={styles.observationCard}>
                <View style={styles.observationIcon}>
                  <Ionicons name="eye" size={24} color="#075296" />
                </View>
                <Text style={styles.observationText}>Ak Nie, pozorujte pacienta</Text>
              </View>
            </View>
          </View>
        </View>

        <InfoCard
          title="Pripomienka"
          description="Pokračujte v monitorovaní EKG, tlaku krvi a SpO2. Pri zhoršení stavu sa vráťte k hodnoteniu život ohrozujúcich príznakov."
          iconName="pulse-outline"
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
    gap: 18,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7F2F5",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  panelTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  panelIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },
  panelTitle: {
    color: "#075296",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  flowContainer: {
    width: "100%",
    gap: 12,
  },
  questionCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
    padding: 18,
    borderWidth: 2,
    borderColor: "#0877D1",
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
  },
  questionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  questionContent: {
    flex: 1,
    gap: 12,
  },
  questionText: {
    color: "#075296",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 27,
  },
  list: {
    gap: 9,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  dot: {
    width: 7,
    height: 7,
    marginTop: 7,
    borderRadius: 4,
    backgroundColor: "#075296",
  },
  listText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  answersContainer: {
    width: "100%",
    gap: 10,
  },
  observationCard: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 28,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  observationIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  observationText: {
    flex: 1,
    color: "#075296",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 23,
  },
});
