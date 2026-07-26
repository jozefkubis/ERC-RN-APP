import InfoCard from "@/src/components/ui/info-card";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import YesButton from "@/src/components/ui/YesButton";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";

const atropineSteps = [
  "Atropín 0,5 mg intravenózne",
  "Opakujte každých 3 - 5 minút podľa odpovede",
  "Maximálna dávka 3 mg",
];

export default function Step2BradyUnstable() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 2"}
        title={"Nestabilná bradykardia"}
        description={"Pri prítomnosti život ohrozujúcich príznakov začnite atropínom a priebežne prehodnocujte klinickú odpoveď."}
      />

        <View style={styles.urgentPanel}>
          <View style={styles.panelTitleRow}>
            <View style={styles.panelIcon}>
              <Ionicons name="warning" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.panelTitle}>NESTABILNÁ</Text>
          </View>

          <View style={styles.flowContainer}>
            <View style={styles.actionCard}>
              <View style={styles.cardHeader}>
                <View style={styles.cardIcon}>
                  <Ionicons name="medkit" size={22} color="#FFFFFF" />
                </View>
                <Text style={styles.cardTitle}>Atropín</Text>
              </View>

              <View style={styles.list}>
                {atropineSteps.map((item) => (
                  <View key={item} style={styles.listItem}>
                    <View style={styles.dot} />
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>

            <FlowConnector />

            <View style={styles.questionCard}>
              <View style={styles.questionIcon}>
                <Ionicons name="help" size={26} color="#FFFFFF" />
              </View>
              <Text style={styles.questionText}>Dostatočná reakcia?</Text>
            </View>

            <View style={styles.answersContainer}>
              <YesButton
                onPress={() =>
                  router.push(
                    "/algorithms/adult-resuscitation/bradycardia/step2stable",
                  )
                }
              />
              <NoButton
                onPress={() =>
                  router.push(
                    "/algorithms/adult-resuscitation/bradycardia/step3unstable",
                  )
                }
              />
            </View>
          </View>
        </View>

        <InfoCard
          title="Pripomienka"
          description="Počas celého postupu monitorujte EKG, tlak krvi a SpO2. Liečte reverzibilné príčiny bradykardie."
          iconName="information-circle-outline"
        />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  urgentPanel: {
    width: "100%",
    gap: 18,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#FDE3E4",
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
    backgroundColor: "#ED1C24",
  },
  panelTitle: {
    color: "#ED1C24",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  flowContainer: {
    width: "100%",
    gap: 12,
  },
  actionCard: {
    width: "100%",
    gap: 15,
    padding: 16,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
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
    backgroundColor: "#075296",
  },
  cardTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "800",
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
  questionCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
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
  questionText: {
    flex: 1,
    color: "#075296",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 27,
  },
  answersContainer: {
    width: "100%",
    gap: 10,
  },
  responseCard: {
    width: "100%",
    gap: 15,
    padding: 16,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 28,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
  },
  responseIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
    backgroundColor: "#E4EFFD",
  },
  responseTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
  },
});
