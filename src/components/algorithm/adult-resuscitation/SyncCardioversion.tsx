import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
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
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.stepHeader}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>Kardioverzia</Text>
          </View>
          <Text style={styles.stepTitle}>Synchronizovaná kardioverzia</Text>
          <Text style={styles.stepDescription}>
            Použite synchronizovaný režim defibrilátora a priebežne kontrolujte
            klinický stav pacienta.
          </Text>
        </View>

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
