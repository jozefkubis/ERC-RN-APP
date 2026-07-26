import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const energyLevels = [
  {
    rhythm: "Pravidelná úzkokomplexová tachykardia / flutter",
    energy: "70 - 120 J bifázicky",
  },
  {
    rhythm: "Pravidelná širokokomplexová tachykardia",
    energy: "120 - 150 J bifázicky",
  },
  {
    rhythm: "Fibrilácia predsiení",
    energy: "120 - 150 J bifázicky",
  },
  {
    rhythm: "Ak je výboj neúspešný",
    energy: "Eskalujte energiu podľa prístroja a lokálneho protokolu",
  },
];

export default function SyncCardioversion() {
  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Kardioverzia"}
        title={"Synchronizovaná kardioverzia"}
        description={"Použite synchronizovaný režim defibrilátora a priebežne kontrolujte klinický stav pacienta."}
      />

        <View style={styles.cardioversionPanel}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Ionicons name="flash" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.cardTitle}>Synchronizovaná kardioverzia</Text>
          </View>

          <View style={styles.sedationCard}>
            <Ionicons name="medkit" size={22} color="#075296" />
            <Text style={styles.sedationText}>
              Sedácia / anestézia u pacienta pri vedomí
            </Text>
          </View>

          <View style={styles.energyList}>
            {energyLevels.map((item) => (
              <View key={item.rhythm} style={styles.energyItem}>
                <Text style={styles.energyRhythm}>{item.rhythm}</Text>
                <Text style={styles.energyValue}>{item.energy}</Text>
              </View>
            ))}
          </View>
        </View>

        <InfoCard
          title="Pripomienka"
          description="Ak synchronizácia nie je možná pri polymorfnej alebo veľmi nepravidelnej tachykardii, postupujte podľa lokálneho protokolu pre defibriláciu."
          iconName="information-circle-outline"
        />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  cardioversionPanel: {
    width: "100%",
    gap: 16,
    padding: 18,
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
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#075296",
  },
  cardTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 19,
    fontWeight: "900",
    lineHeight: 25,
  },
  sedationCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#F5FAFF",
  },
  sedationText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },
  energyList: {
    gap: 10,
  },
  energyItem: {
    gap: 5,
    padding: 14,
    borderWidth: 1,
    borderColor: "#D2D9E6",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#F8FBFF",
  },
  energyRhythm: {
    color: "#10243C",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },
  energyValue: {
    color: "#075296",
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 20,
  },
});
