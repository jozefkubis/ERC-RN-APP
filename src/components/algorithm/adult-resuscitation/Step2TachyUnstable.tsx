import { Ionicons } from "@expo/vector-icons";
import FlowConnector from "@/src/components/ui/FlowConnector";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import InfoCard from "../../ui/info-card";

const cardioversionSteps = [
  "Až do 3 pokusov",
  "Sedácia / anestézia, ak je pacient pri vedomí",
];

const medicationSteps = [
  "Amiodarón 300 mg intravenózne počas 10 - 20 minút",
  "alebo prokaínamid 10 - 15 mg kg⁻¹ (max. 1 g) počas 20 minút",
  "Opakujte synchronizovanú kardioverziu",
];

export default function Step2TachyUnstable() {
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
          <Text style={styles.stepTitle}>Nestabilná tachykardia</Text>
          <Text style={styles.stepDescription}>
            Pri prítomnosti život ohrozujúcich príznakov postupujte urgentne a
            pripravte synchronizovanú kardioverziu.
          </Text>
        </View>

        <View style={styles.urgentPanel}>
          <View style={styles.panelTitleRow}>
            <View style={styles.panelIcon}>
              <Ionicons name="warning" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.panelTitle}>NESTABILNÝ</Text>
          </View>

          <Pressable
            style={styles.flowContainer}
            onPress={() =>
              router.push(
                "/algorithms/adult-resuscitation/tachycardia/synccardioversion",
              )
            }
          >
            <View style={styles.actionCard}>
              <View style={styles.cardHeader}>
                <View style={styles.cardIcon}>
                  <Ionicons name="flash" size={22} color="#FFFFFF" />
                </View>
                <Text style={styles.cardTitle}>
                  Synchronizovaná kardioverzia
                </Text>
              </View>

              <View style={styles.list}>
                {cardioversionSteps.map((item) => (
                  <View key={item} style={styles.listItem}>
                    <View style={styles.dot} />
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.actionArrow}>
                <Ionicons name="arrow-forward" size={24} color="#075296" />
              </View>
            </View>

            <View style={styles.transition}>
              <Text style={styles.transitionText}>Ak neúspešná</Text>
              <FlowConnector />
            </View>

            <View style={styles.medicationCard}>
              <View style={styles.cardHeader}>
                <View style={styles.medicationIcon}>
                  <Ionicons name="medkit" size={22} color="#075296" />
                </View>
                <Text style={styles.medicationTitle}>Antiarytmická liečba</Text>
              </View>

              <View style={styles.list}>
                {medicationSteps.map((item) => (
                  <View key={item} style={styles.listItem}>
                    <View style={styles.dot} />
                    <Text style={styles.listText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Pressable>
        </View>

        <InfoCard
          title="Pripomienka"
          description="Počas celého postupu monitorujte pacienta, zabezpečte kyslík a intravenózny prístup a priebežne prehodnocujte stav podľa ABCDE."
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
    backgroundColor: "#FDE7E8",
  },
  stepBadgeText: {
    color: "#C8141B",
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
    paddingRight: 52,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
  },
  actionArrow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 16,
    justifyContent: "center",
  },
  medicationCard: {
    width: "100%",
    gap: 15,
    padding: 16,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 28,
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
  medicationIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
    backgroundColor: "#E4EFFD",
  },
  cardTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
  },
  medicationTitle: {
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
  transition: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 4,
  },
  transitionText: {
    color: "#075296",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },
});
