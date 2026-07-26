import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const treatmentSteps = [
  "EF > 40 %: kontrolujte frekvenciu srdca pomocou betablokátora, verapamilu, diltiazemu alebo digoxínu",
  "EF < 40 %: zvážte betablokátor alebo digoxín",
  "Antikoagulačná liečba, ak arytmia trvá > 24 hodín",
];

export default function Step4NarrowIrregular() {
  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 4"}
        title={"Nepravidelný úzky QRS komplex"}
        description={"Pri nepravidelnej úzkokomplexovej tachykardii myslite najmä na fibriláciu predsiení a kontrolu frekvencie srdca."}
      />

        <View style={styles.stablePanel}>
          <Text style={styles.panelTitle}>NEPRAVIDELNÝ</Text>

          <View style={styles.decisionCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIcon}>
                <Ionicons name="git-branch" size={23} color="#FFFFFF" />
              </View>
              <Text style={styles.cardTitle}>
                Pravdepodobná fibrilácia predsiení
              </Text>
            </View>

            <View style={styles.list}>
              {treatmentSteps.map((item) => (
                <View key={item} style={styles.listItem}>
                  <View style={styles.dot} />
                  <Text style={styles.listText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <InfoCard
          title="Pripomienka"
          description="Pri zhoršení stavu alebo výskyte život ohrozujúcich príznakov postupujte ako pri nestabilnej tachykardii."
          iconName="information-circle-outline"
        />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
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
  decisionCard: {
    width: "100%",
    gap: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 28,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
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
    gap: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 12,
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#F5FAFF",
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
});
