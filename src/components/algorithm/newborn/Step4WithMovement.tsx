import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import FlowConnector from "../../ui/FlowConnector";
import NextStepButton from "../../ui/NextStepButton";

const compressionActions = [
  "3 stlačenia : 1 vdych",
  "100-120 stlačení min⁻¹",
  "100 % O₂",
  "Zvážte SGA alebo tracheálnu intubáciu",
];

export default function Step4WithMovement() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 4"}
        title={"Ventilácia s pohybom hrudníka"}
        description={"Ak je pohyb hrudníka prítomný, pokračujte vo ventilácii pozitívnym tlakom a po krátkom intervale znovu zhodnoťte srdcovú frekvenciu."}
      />

        <View style={styles.ventilationCard}>
          <View style={styles.ventilationIcon}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={29}
              color="#FFFFFF"
            />
          </View>
          <View style={styles.cardText}>
            <Text selectable style={styles.ventilationTitle}>
              Pokračujte vo ventilácii pozitívnym tlakom
            </Text>
            <Text selectable style={styles.ventilationSubtitle}>
              Prehodnoťte po 30 sekundách
            </Text>
          </View>
        </View>

        <FlowConnector />

        <View style={styles.compressionCard}>
          <Text selectable style={styles.compressionCondition}>
            Ak srdcová frekvencia zostáva &lt; 60 min⁻¹:
          </Text>

          <View style={styles.compressionHeader}>
            <View style={styles.compressionIcon}>
              <MaterialCommunityIcons
                name="hand-heart"
                size={25}
                color="#FFFFFF"
              />
            </View>
            <Text selectable style={styles.compressionTitle}>
              Začnite kompresie hrudníka
            </Text>
          </View>

          <View style={styles.actionList}>
            {compressionActions.map((action) => (
              <View key={action} style={styles.actionRow}>
                <View style={styles.actionBullet} />
                <Text selectable style={styles.actionText}>
                  {action}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <NextStepButton onPress={() => router.push("/algorithms/newborn/step5")} />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  ventilationCard: {
    width: "100%",
    minHeight: 104,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 2,
    borderColor: "#0877D1",
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  ventilationIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#ED1C24",
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  ventilationTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
    textAlign: "left",
  },
  ventilationSubtitle: {
    color: "#075296",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "left",
  },
  compressionCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  compressionCondition: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
    textAlign: "center",
  },
  compressionHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E6ED",
  },
  compressionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#075296",
  },
  compressionTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  actionList: {
    width: "100%",
    gap: 9,
  },
  actionRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  actionBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 8,
  },
  actionText: {
    flex: 1,
    color: "#10243C",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
  },
});
