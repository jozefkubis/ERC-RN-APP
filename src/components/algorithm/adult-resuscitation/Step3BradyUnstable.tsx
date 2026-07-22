import InfoCard from "@/src/components/ui/info-card";
import FlowConnector from "@/src/components/ui/FlowConnector";
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

const temporaryMeasures = [
  "Atropín 0,5 mg IV, opakujte do maximálne 3 mg",
  "Izoprenalín 5 mcg min^-1 IV",
  "Adrenalín 2 - 10 mcg min^-1 IV",
  "Alternatívne lieky*",
  "a / alebo",
  "Transkutánna kardiostimulácia",
];

const measureLinks: Record<string, string> = {
  "Alternatívne lieky*":
    "/algorithms/adult-resuscitation/bradycardia/alternative-medications",
  "Transkutánna kardiostimulácia":
    "/algorithms/adult-resuscitation/bradycardia/cardiostimulationscreen",
};

export default function Step3BradyUnstable() {
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
            <Text style={styles.stepBadgeText}>Krok 3</Text>
          </View>
          <Text style={styles.stepTitle}>Nedostatočná reakcia</Text>
          <Text style={styles.stepDescription}>
            Ak odpoveď na atropín nie je dostatočná, začnite dočasné opatrenia a
            pripravte kardiostimuláciu.
          </Text>
        </View>

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
                <Text style={styles.cardTitle}>
                  Zvážte dočasné opatrenia
                </Text>
              </View>

              <View style={styles.list}>
                {temporaryMeasures.map((item) => {
                  const link = measureLinks[item];

                  return link ? (
                    <Pressable
                      key={item}
                      onPress={() => router.push(link)}
                      style={({ pressed }) => [
                        styles.linkItem,
                        pressed && styles.pressed,
                      ]}
                    >
                      <View style={styles.dot} />
                      <Text style={styles.linkText}>{item}</Text>
                      <View style={styles.linkIcon}>
                        <Ionicons
                          name="arrow-forward"
                          size={17}
                          color="#FFFFFF"
                        />
                      </View>
                    </Pressable>
                  ) : (
                    <View key={item} style={styles.listItem}>
                      <View style={styles.dot} />
                      <Text style={styles.listText}>{item}</Text>
                    </View>
                  );
                })}
              </View>
            </View>

            <FlowConnector />

            <View style={styles.expertCard}>
              <View style={styles.expertIcon}>
                <Ionicons name="people" size={24} color="#075296" />
              </View>
              <View style={styles.expertTextContainer}>
                <Text style={styles.expertTitle}>Vyhľadajte pomoc experta</Text>
                <Text style={styles.expertDescription}>
                  Zabezpečte transvenóznu kardiostimuláciu
                </Text>
              </View>
            </View>
          </View>
        </View>

        <InfoCard
          title="Poznámka"
          description="Alternatívne lieky voľte podľa dostupnosti, lokálneho protokolu a odporúčania experta."
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
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#E4EFFD",
  },
  linkText: {
    flex: 1,
    color: "#075296",
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 20,
  },
  linkIcon: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#075296",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
  expertCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 28,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
  },
  expertIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
  },
  expertTextContainer: {
    flex: 1,
    gap: 3,
  },
  expertTitle: {
    color: "#075296",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  expertDescription: {
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
});
