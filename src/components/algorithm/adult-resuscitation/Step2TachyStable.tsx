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

export default function Step2TachyStable() {
  const router = useRouter();

  function handleWideQrsPress() {
    router.push("/algorithms/adult-resuscitation/tachycardia/step3wide");
  }
  function handleNarrowQrsPress() {
    router.push("/algorithms/adult-resuscitation/tachycardia/step3narrow");
  }

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
          <Text style={styles.stepTitle}>Stabilná tachykardia</Text>
          <Text style={styles.stepDescription}>
            Ak pacient nemá život ohrozujúce príznaky, zhodnoťte šírku QRS
            komplexu a pokračujte podľa výsledku.
          </Text>
        </View>

        <View style={styles.stablePanel}>
          <Text style={styles.panelTitle}>STABILNÝ</Text>

          <View style={styles.qrsCard}>
            <View style={styles.monitorIcon}>
              <Ionicons name="pulse" size={28} color="#ED1C24" />
            </View>
            <Text style={styles.qrsText}>Zhodnoťte QRS komplex</Text>
          </View>

          <View style={styles.choiceRow}>
            <Pressable
              onPress={handleWideQrsPress}
              style={({ pressed }) => [
                styles.choiceCard,
                styles.choiceCardLeft,
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.choiceIcon}>
                <Ionicons name="resize" size={23} color="#075296" />
              </View>
              <View style={styles.choiceTextContainer}>
                <Text style={styles.choiceTitle}>Široký</Text>
                <Text style={styles.choiceDescription}>≥ 0,12 s</Text>
              </View>
              <Ionicons name="arrow-forward" size={22} color="#075296" />
            </Pressable>

            <Pressable
              onPress={handleNarrowQrsPress}
              style={({ pressed }) => [
                styles.choiceCard,
                styles.choiceCardRight,
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.choiceIcon}>
                <Ionicons name="contract" size={23} color="#075296" />
              </View>
              <View style={styles.choiceTextContainer}>
                <Text style={styles.choiceTitle}>Úzky</Text>
                <Text style={styles.choiceDescription}>{"< 0,12 s"}</Text>
              </View>
              <Ionicons name="arrow-forward" size={22} color="#075296" />
            </Pressable>
          </View>
        </View>

        <InfoCard
          title="Pripomienka"
          description="Pri akomkoľvek zhoršení stavu sa vráťte k hodnoteniu život ohrozujúcich príznakov a postupujte ako pri nestabilnej tachykardii."
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
  qrsCard: {
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
  monitorIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#E4EFFD",
  },
  qrsText: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
    textAlign: "center",
  },
  choiceRow: {
    width: "100%",
    gap: 10,
  },
  choiceCard: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  choiceCardLeft: {
    borderLeftWidth: 5,
  },
  choiceCardRight: {
    borderRightWidth: 5,
  },
  choiceIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  choiceTextContainer: {
    flex: 1,
    gap: 4,
  },
  choiceTitle: {
    color: "#10243C",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  choiceDescription: {
    color: "#075296",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
