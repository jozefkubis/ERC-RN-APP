import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import FlowConnector from "../../ui/FlowConnector";
import NoButton from "../../ui/NoButton";
import YesButton from "../../ui/YesButton";

export default function Step3() {
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
            <Text selectable style={styles.stepBadgeText}>
              Krok 3
            </Text>
          </View>
          <Text selectable style={styles.stepTitle}>
            Prehodnotenie ventilácie
          </Text>
          <Text selectable style={styles.stepDescription}>
            Po 5 inflačných vdychoch prehodnoťte srdcovú frekvenciu a sledujte,
            či sa hrudník pohybuje.
          </Text>
        </View>

        <View style={styles.reassessmentCard}>
          <View style={styles.reassessmentIcon}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={29}
              color="#FFFFFF"
            />
          </View>
          <Text selectable style={styles.reassessmentText}>
            Prehodnoťte
          </Text>
        </View>

        <FlowConnector />

        <View style={styles.questionCard}>
          <View style={styles.questionIcon}>
            <Ionicons name="help" size={27} color="#FFFFFF" />
          </View>
          <View style={styles.cardText}>
            <Text selectable style={styles.questionEyebrow}>
              Ak sa srdcová frekvencia nezvýši:
            </Text>
            <Text selectable style={styles.questionText}>
              Pohyb hrudníka?
            </Text>
          </View>
        </View>

        <View style={styles.answersContainer}>
          <YesButton
            onPress={() =>
              router.push("/algorithms/newborn/step4-with-movement")
            }
          />
          <NoButton
            onPress={() =>
              router.push("/algorithms/newborn/step4-no-movement")
            }
          />
        </View>
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
  reassessmentCard: {
    width: "100%",
    minHeight: 92,
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
  reassessmentIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#ED1C24",
  },
  reassessmentText: {
    flex: 1,
    color: "#075296",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
    textAlign: "left",
  },
  questionCard: {
    width: "100%",
    minHeight: 110,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  questionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  questionEyebrow: {
    color: "#24425F",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  questionText: {
    color: "#075296",
    fontSize: 21,
    fontWeight: "900",
    lineHeight: 27,
  },
  answersContainer: {
    width: "100%",
    gap: 10,
  },
});
