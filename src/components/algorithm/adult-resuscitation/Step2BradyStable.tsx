import InfoCard from "@/src/components/ui/info-card";
import YesButton from "@/src/components/ui/YesButton";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";

const asystoleRiskSigns = [
  "Nedávna asystólia",
  "AV blokáda Mobitz II",
  "Kompletná srdcová blokáda so širokým QRS",
  "Komorová pauza > 3 s",
];

export default function Step2BradyStable() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 2"}
        title={"Stabilná bradykardia"}
        description={"Ak pacient nemá život ohrozujúce príznaky, zhodnoťte riziko asystólie a pokračujte podľa odpovede."}
      />

        <View style={styles.stablePanel}>
          <View style={styles.panelTitleRow}>
            <View style={styles.panelIcon}>
              <Ionicons name="shield-checkmark" size={24} color="#075296" />
            </View>
            <Text style={styles.panelTitle}>STABILNÁ</Text>
          </View>

          <View style={styles.flowContainer}>
            <View style={styles.questionCard}>
              <View style={styles.questionHeader}>
                <View style={styles.questionIcon}>
                  <Ionicons name="help" size={26} color="#FFFFFF" />
                </View>
                <Text style={styles.questionText}>Riziko asystólie?</Text>
              </View>
              <View style={styles.list}>
                {asystoleRiskSigns.map((item) => (
                  <View key={item} style={styles.listItem}>
                    <View style={styles.dot} />
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
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
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
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
    gap: 12,
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
  questionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  questionText: {
    flex: 1,
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
