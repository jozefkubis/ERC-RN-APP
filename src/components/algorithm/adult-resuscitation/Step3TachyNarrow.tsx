import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";
import TachyRegularityButtons from "../../ui/TachyRegularityButtons";

export default function Step3TachyNarrow() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 3"}
        title={"Úzky QRS komplex"}
        description={"Pri úzkom QRS komplexe zhodnoťte, či je rytmus pravidelný alebo nepravidelný."}
      />

        <View style={styles.stablePanel}>
          <Text style={styles.panelTitle}>STABILNÝ</Text>

          <View style={styles.rhythmCard}>
            <View style={styles.rhythmIcon}>
              <Ionicons name="pulse" size={28} color="#ED1C24" />
            </View>
            <Text style={styles.rhythmText}>Zhodnoťte pravidelnosť rytmu</Text>
          </View>

          <TachyRegularityButtons
            onRegularPress={() =>
              router.push(
                "/algorithms/adult-resuscitation/tachycardia/step4narrowregular",
              )
            }
            onIrregularPress={() =>
              router.push(
                "/algorithms/adult-resuscitation/tachycardia/step4narrowirregular",
              )
            }
          />
        </View>

        <InfoCard
          title="Pripomienka"
          description="Ak sa stav pacienta zhorší alebo sa objavia život ohrozujúce príznaky, postupujte ako pri nestabilnej tachykardii."
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
