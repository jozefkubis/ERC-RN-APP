import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const breathingSteps = [
  "Spriechodnite dýchacie cesty záklonom hlavy a zdvihnutím brady.",
  "Pozrite, počujte a cíťte dýchanie.",
  "Hľadajte známky života najviac 10 sekúnd.",
  "Ak máte pochybnosti, konajte ako pri abnormálnom dýchaní.",
];

export default function Step2Pbls() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 2"}
        title={"Dýchacie cesty a dýchanie"}
        description={"Skontrolujte dýchanie rýchlo, bez zbytočného odkladu začiatku KPR."}
      />

        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <View style={styles.infoIcon}>
              <Ionicons name="body" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.infoTitle}>Zhodnotenie do 10 sekúnd</Text>
          </View>

          <View style={styles.infoList}>
            {breathingSteps.map((step) => (
              <View key={step} style={styles.infoRow}>
                <View style={styles.bullet} />
                <Text style={styles.infoText}>{step}</Text>
              </View>
            ))}
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pbls/step3")}
          style={({ pressed }) => [styles.nextCard, pressed && styles.pressed]}
        >
          <View style={styles.nextIcon}>
            <Ionicons name="fitness" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.nextTextContainer}>
            <Text style={styles.nextTitle}>Nedýcha normálne</Text>
            <Text style={styles.nextDescription}>
              Dajte 5 úvodných záchranných vdychov.
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#075296" />
        </Pressable>

        <InfoCard
          title="Ak dieťa dýcha"
          description="Udržujte priechodné dýchacie cesty, sledujte dýchanie nepretržite alebo aspoň každú minútu a privolajte pomoc."
          iconName="information-circle-outline"
        />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  infoCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  infoIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#075296",
  },
  infoTitle: {
    flex: 1,
    color: "#10243C",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  infoList: {
    gap: 9,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 7,
  },
  infoText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    lineHeight: 20,
  },
  nextCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nextIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#ED1C24",
  },
  nextTextContainer: {
    flex: 1,
    gap: 4,
  },
  nextTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  nextDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
