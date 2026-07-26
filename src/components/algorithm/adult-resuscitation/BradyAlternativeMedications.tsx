import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";

const alternatives = [
  "Aminofylín",
  "Dopamín",
  "Glukagón (ak je bradykardia spôsobená betablokátorom alebo blokátorom kalciových kanálov)",
  "Glykopyrolát (môže byť použitý namiesto atropínu)",
];

export default function BradyAlternativeMedications() {
  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Doplnok"}
        title={"Alternatívne lieky"}
        description={"Prehľad možností, ktoré možno zvážiť pri nedostatočnej reakcii na atropín."}
      />

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
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
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
