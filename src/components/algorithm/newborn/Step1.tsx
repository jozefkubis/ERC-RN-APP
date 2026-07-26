import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import NextStepButton from "../../ui/NextStepButton";
import StepHeader from "../../ui/StepHeader";

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
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 1"
        title="Príprava a prvé opatrenia"
        description="Pripravte tím a vybavenie ešte pred narodením. Po narodení spustite stopky a udržujte novorodenca v teple."
      />

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

      <NextStepButton onPress={() => router.push("/algorithms/newborn/step2")} />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
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
});
