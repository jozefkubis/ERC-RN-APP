import { Ionicons } from "@expo/vector-icons";
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

const treatmentSteps = [
  "Vagové manévre",
  "Ak nie sú účinné: Adenozín (ak nie je preexcitácia) 6 mg rýchly intravenózny bolus, ak nie je účinný, podajte 12 mg, ak nie je účinný, podajte 18 mg",
  "Ak nie je účinný: Verapamil alebo betablokátor",
  "Ak nie je účinný: synchronizovaná kardioverzia",
];

export default function Step4NarrowRegular() {
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
            <Text style={styles.stepBadgeText}>Krok 4</Text>
          </View>
          <Text style={styles.stepTitle}>Pravidelný úzky QRS komplex</Text>
          <Text style={styles.stepDescription}>
            Pri pravidelnej úzkokomplexovej tachykardii postupujte od vagových
            manévrov cez liečbu až po synchronizovanú kardioverziu.
          </Text>
        </View>

        <View style={styles.stablePanel}>
          <Text style={styles.panelTitle}>PRAVIDELNÝ</Text>

          <View style={styles.decisionCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIcon}>
                <Ionicons name="pulse" size={23} color="#FFFFFF" />
              </View>
              <Text style={styles.cardTitle}>
                Liečba pravidelnej úzkokomplexovej tachykardie
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

          <Pressable
            onPress={() =>
              router.push(
                "/algorithms/adult-resuscitation/tachycardia/synccardioversion",
              )
            }
            style={({ pressed }) => [
              styles.syncCard,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.syncIcon}>
              <Ionicons name="flash" size={23} color="#FFFFFF" />
            </View>
            <View style={styles.syncTextContainer}>
              <Text style={styles.syncTitle}>Synchronizovaná kardioverzia</Text>
              <Text style={styles.syncDescription}>
                Ak vagové manévre a liečba nie sú účinné
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={24} color="#075296" />
          </Pressable>
        </View>

        <InfoCard
          title="Pripomienka"
          description="Adenozín nepodávajte pri preexcitácii. Pri zhoršení stavu postupujte ako pri nestabilnej tachykardii."
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
    borderRadius: 10,
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
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 23,
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
  syncCard: {
    width: "100%",
    minHeight: 86,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 28,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  syncIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#075296",
  },
  syncTextContainer: {
    flex: 1,
    gap: 4,
  },
  syncTitle: {
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  syncDescription: {
    color: "#5C6574",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
