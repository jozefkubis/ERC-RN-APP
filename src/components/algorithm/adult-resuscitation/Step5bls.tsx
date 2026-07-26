import { Ionicons } from "@expo/vector-icons";
import FlowConnector from "@/src/components/ui/FlowConnector";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";

export default function Step5bls() {
  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 5"}
        title={"Pripojte AED"}
        description={"AED použite hneď, ako je dostupný, a riaďte sa jeho pokynmi."}
      />

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

        <FlowConnector />

        <View style={styles.finalCard}>
          <Text style={styles.finalText}>
            Pokračujte v KPR, kým príde záchranná služba / resuscitačný tím
          </Text>
        </View>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
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
