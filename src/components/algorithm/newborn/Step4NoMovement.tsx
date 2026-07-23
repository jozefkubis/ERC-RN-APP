import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import FlowConnector from "../../ui/FlowConnector";
import NoButton from "../../ui/NoButton";
import YesButton from "../../ui/YesButton";

const ventilationFixes = [
  "Skontrolujte masku",
  "Upravte polohu hlavy",
  "Predsuňte sánku",
  "Vyskúšajte inú techniku spriechodnenia dýchacích ciest",
  "Zvážte vyšší inflačný tlak",
];

export default function Step4NoMovement() {
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
              Krok 4
            </Text>
          </View>
          <Text selectable style={styles.stepTitle}>
            Hrudník sa nehýbe
          </Text>
          <Text selectable style={styles.stepDescription}>
            Najprv opravte ventiláciu. Bez pohybu hrudníka nemajú inflačné
            vdychy očakávaný efekt.
          </Text>
        </View>

        <View style={styles.fixCard}>
          <View style={styles.fixHeader}>
            <View style={styles.fixIcon}>
              <Ionicons name="alert" size={23} color="#FFFFFF" />
            </View>
            <View style={styles.cardText}>
              {/* <Text selectable style={styles.fixEyebrow}>
                Vetva NIE
              </Text> */}
              <Text selectable style={styles.fixTitle}>
                Korekcia ventilácie
              </Text>
            </View>
          </View>

          <View style={styles.fixList}>
            {ventilationFixes.map((fix) => (
              <View key={fix} style={styles.fixRow}>
                <View style={styles.fixBullet} />
                <Text selectable style={styles.fixText}>
                  {fix}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <FlowConnector />

        <View style={styles.repeatCard}>
          <View style={styles.repeatIcon}>
            <MaterialCommunityIcons name="lungs" size={27} color="#FFFFFF" />
          </View>
          <Text selectable style={styles.repeatText}>
            Opakujte 5 inflačných vdychov
          </Text>
        </View>

        <FlowConnector />

        <View style={styles.questionCard}>
          <View style={styles.questionIcon}>
            <Ionicons name="help" size={27} color="#FFFFFF" />
          </View>
          <View style={styles.cardText}>
            <Text selectable style={styles.questionEyebrow}>
              Po opakovaných vdychoch:
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
              router.replace("/algorithms/newborn/step4-no-movement")
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
  fixCard: {
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
  fixHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E6ED",
  },
  fixIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#075296",
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  fixEyebrow: {
    color: "#B3451E",
    fontSize: 13,
    fontWeight: "800",
    lineHeight: 18,
  },
  fixTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  fixList: {
    width: "100%",
    gap: 9,
  },
  fixRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  fixBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 8,
  },
  fixText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  repeatCard: {
    width: "100%",
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    padding: 16,
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  repeatIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  repeatText: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  questionCard: {
    width: "100%",
    minHeight: 104,
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
