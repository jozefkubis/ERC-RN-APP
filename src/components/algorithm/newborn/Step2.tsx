import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import FlowConnector from "../../ui/FlowConnector";
import NextStepButton from "../../ui/NextStepButton";

const prematureSupportActions = [
  "Ak dýcha: podpora s CPAP 6 cm H₂O, O₂ ≥ 30 %",
  "Pri inflačných vdychoch začnite s 25 cm H₂O, O₂ ≥ 30 %",
];

export default function Step2() {
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
              Krok 2
            </Text>
          </View>
          <Text selectable style={styles.stepTitle}>
            Dýchanie a srdcová frekvencia
          </Text>
          <Text selectable style={styles.stepDescription}>
            Rýchlo zhodnoťte dýchanie a srdcovú frekvenciu. Pri nedostatočnom
            dýchaní ihneď spriechodnite dýchacie cesty.
          </Text>
        </View>

        <View style={styles.assessmentCard}>
          <View style={styles.assessmentIcon}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={29}
              color="#FFFFFF"
            />
          </View>
          <Text selectable style={styles.assessmentText}>
            Zhodnoťte dýchanie a srdcovú frekvenciu
          </Text>
        </View>

        <FlowConnector />

        <View style={styles.airwayCard}>
          <View style={styles.airwayIcon}>
            <Ionicons name="alert" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.cardText}>
            <Text selectable style={styles.airwayEyebrow}>
              Nedostatočné dýchanie
            </Text>
            <Text selectable style={styles.airwayTitle}>
              Spriechodnite dýchacie cesty
            </Text>
          </View>
        </View>

        <FlowConnector />

        <View style={styles.breathsCard}>
          <Text selectable style={styles.breathsCondition}>
            Ak nedýcha alebo dýcha lapavo:
          </Text>

          <View style={styles.breathsAction}>
            <View style={styles.breathsIcon}>
              <MaterialCommunityIcons name="lungs" size={27} color="#FFFFFF" />
            </View>
            <Text selectable style={styles.breathsTitle}>
              5 inflačných vdychov
            </Text>
          </View>

          <View style={styles.breathsDetails}>
            <View style={styles.detailRow}>
              <View style={styles.detailBullet} />
              <Text selectable style={styles.detailText}>
                Začnite s 30 cm H₂O, PEEP 6 cm H₂O, 21 % O₂
              </Text>
            </View>
            <View style={styles.detailRow}>
              <View style={styles.detailBullet} />
              <Text selectable style={styles.detailText}>
                Zvážte SpO₂ ± EKG
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.prematureCard}>
          <View style={styles.prematureHeader}>
            <View style={styles.prematureIcon}>
              <Ionicons name="warning-outline" size={22} color="#CC6238" />
            </View>
            <Text selectable style={styles.prematureTitle}>
              Predčasný pôrod &lt; 32 týždňov
            </Text>
          </View>

          <View style={styles.prematureList}>
            {prematureSupportActions.map((action) => (
              <View key={action} style={styles.prematureRow}>
                <View style={styles.prematureBullet} />
                <Text selectable style={styles.prematureText}>
                  {action}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <NextStepButton
          onPress={() => router.push("/algorithms/newborn/step3")}
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
  assessmentCard: {
    width: "100%",
    minHeight: 96,
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
  assessmentIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#ED1C24",
  },
  assessmentText: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },

  airwayCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  airwayIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#075296",
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  airwayEyebrow: {
    color: "#5C6574",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
  },
  airwayTitle: {
    color: "#075296",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
  },
  breathsCard: {
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
  breathsCondition: {
    color: "#24425F",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
  },
  breathsAction: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E6ED",
  },
  breathsIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  breathsTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  breathsDetails: {
    width: "100%",
    gap: 9,
  },
  detailRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  detailBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 8,
  },
  detailText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  prematureCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0DEB4",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFF6DC",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  prematureHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  prematureIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#CC6238",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },
  prematureTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
    textDecorationLine: "underline",
  },
  prematureList: {
    width: "100%",
    gap: 9,
  },
  prematureRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  prematureBullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 8,
  },
  prematureText: {
    flex: 1,
    color: "#24425F",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
});
