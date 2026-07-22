import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import FlowConnector from "../../ui/FlowConnector";
import NextStepButton from "../../ui/NextStepButton";

const firstCareActions = [
  "Oneskorené podviazanie pupočníka",
  "Šetrná stimulácia",
  "Osušiť, zabaliť, čiapočka",
];

const prematureBirthActions = [
  "Vložte neosušené telo do plastového sáčku, nasaďte čiapočku",
  "Použite externý zdroj tepla",
];

export default function Step1() {
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
              Krok 1
            </Text>
          </View>
          <Text selectable style={styles.stepTitle}>
            Príprava a prvé opatrenia
          </Text>
          <Text selectable style={styles.stepDescription}>
            Pripravte tím a vybavenie ešte pred narodením. Po narodení spustite
            stopky a udržujte novorodenca v teple.
          </Text>
        </View>

        <View style={styles.preparationCard}>
          <View style={styles.preparationIcon}>
            <Ionicons name="people" size={25} color="#FFFFFF" />
          </View>
          <View style={styles.cardText}>
            <Text selectable style={styles.preparationTitle}>
              Prenatálne poradenstvo
            </Text>
            <Text selectable style={styles.preparationDescription}>
              Brífing tímu a kontrola vybavenia
            </Text>
          </View>
        </View>

        <FlowConnector />

        <View style={styles.birthCard}>
          <View style={styles.birthIcon}>
            <Ionicons name="timer-outline" size={25} color="#075296" />
          </View>
          <View style={styles.cardText}>
            <Text selectable style={styles.birthTitle}>
              Narodenie
            </Text>
            <Text selectable style={styles.birthDescription}>
              Spustite stopky
            </Text>
          </View>
        </View>

        <FlowConnector />

        <View style={styles.careCard}>
          {firstCareActions.map((action) => (
            <View key={action} style={styles.actionRow}>
              <View style={styles.actionIcon}>
                <Ionicons name="checkmark" size={18} color="#FFFFFF" />
              </View>
              <Text selectable style={styles.actionText}>
                {action}
              </Text>
            </View>
          ))}
          <View style={styles.warmthRow}>
            <Ionicons name="thermometer-outline" size={22} color="#075296" />
            <Text selectable style={styles.warmthText}>
              Udržiavajte v teple
            </Text>
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
            {prematureBirthActions.map((action) => (
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
          onPress={() => router.push("/algorithms/newborn/step2")}
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
  preparationCard: {
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
  preparationIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#0877D1",
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  preparationTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  preparationDescription: {
    color: "#24425F",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  birthCard: {
    width: "100%",
    minHeight: 86,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 16,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  birthIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#E4EFFD",
  },
  birthTitle: {
    color: "#10243C",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  birthDescription: {
    color: "#075296",
    fontSize: 16,
    lineHeight: 22,
  },
  careCard: {
    width: "100%",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  actionRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  actionIcon: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#075296",
  },
  actionText: {
    flex: 1,
    color: "#10243C",
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
    paddingTop: 4,
  },
  warmthRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E1E6ED",
  },
  warmthText: {
    color: "#075296",
    fontSize: 14,
    fontWeight: "800",
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
  nextStepButton: {
    width: "100%",
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nextStepText: {
    flex: 1,
    gap: 3,
  },
  nextStepIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#ED1C24",
  },
  nextStepEyebrow: {
    color: "#B9DDFF",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 17,
  },
  nextStepTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
