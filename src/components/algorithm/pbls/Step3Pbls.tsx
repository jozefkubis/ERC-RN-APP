import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const breathItems = [
  "Udržujte dýchacie cesty priechodné.",
  "Vdychujte približne 1 sekundu.",
  "Sledujte viditeľný zdvih hrudníka.",
  "Ak sa hrudník nezdvihne, upravte polohu hlavy a skontrolujte viditeľnú prekážku.",
];

export default function Step3Pbls() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 3"}
        title={"5 záchranných vdychov"}
        description={"Pri dieťati začnite ventiláciou, pretože zástava obehu je často následkom respiračného zlyhania."}
      />

        <View style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <Ionicons name="fitness" size={30} color="#FFFFFF" />
          </View>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroLabel}>Okamžitý postup</Text>
            <Text style={styles.heroTitle}>5 vdychov</Text>
            <Text style={styles.heroDescription}>
              Ústa dieťaťa, pri dojčati ústa aj nos. Každý vdych má zdvihnúť
              hrudník.
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          {breathItems.map((item) => (
            <View key={item} style={styles.infoRow}>
              <View style={styles.bullet} />
              <Text style={styles.infoText}>{item}</Text>
            </View>
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pbls/step4")}
          style={({ pressed }) => [styles.nextCard, pressed && styles.pressed]}
        >
          <View style={styles.nextIcon}>
            <Ionicons name="heart" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.nextTextContainer}>
            <Text style={styles.nextTitle}>Pokračujte kompresiami</Text>
            <Text style={styles.nextDescription}>Začnite KPR 15:2.</Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
        </Pressable>

        <InfoCard
          title="Bezpečná alternatíva"
          description="Ak záchranné vdychy nie sú možné, začnite aspoň kompresie hrudníka a ventiláciu pridajte čo najskôr."
          iconName="alert-circle-outline"
        />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  heroIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
    backgroundColor: "#0877D1",
  },
  heroTextContainer: {
    flex: 1,
    gap: 4,
  },
  heroLabel: {
    color: "#075296",
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  heroTitle: {
    color: "#075296",
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  heroDescription: {
    color: "#28506F",
    fontSize: 13,
    lineHeight: 19,
  },
  infoCard: {
    width: "100%",
    gap: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
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
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nextIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#ED1C24",
  },
  nextTextContainer: {
    flex: 1,
    gap: 3,
  },
  nextTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  nextDescription: {
    color: "#D7E9F8",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
