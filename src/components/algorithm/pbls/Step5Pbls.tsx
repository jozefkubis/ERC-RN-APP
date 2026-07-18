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

const aedItems = [
  "Pripojte AED hneď, ako je dostupný.",
  "Nalepte elektródy s minimálnym prerušením KPR.",
  "Použite pediatrický režim, ak je dostupný pre dieťa do 25 kg.",
  "Nedotýkajte sa dieťaťa počas analýzy rytmu.",
  "Po výboji alebo pokyne AED okamžite pokračujte v KPR.",
];

export default function Step5Pbls() {
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
            <Text style={styles.stepBadgeText}>Krok 5</Text>
          </View>
          <Text style={styles.stepTitle}>Pripojte AED</Text>
          <Text style={styles.stepDescription}>
            Defibrilátor použite čo najskôr, ale bez zbytočného prerušenia
            kompresií a ventilácie.
          </Text>
        </View>

        <View style={styles.aedCard}>
          <View style={styles.aedIcon}>
            <Ionicons name="flash" size={28} color="#FFFFFF" />
          </View>
          <View style={styles.aedTextContainer}>
            <Text style={styles.aedTitle}>AED čo najskôr</Text>
            <Text style={styles.aedDescription}>
              Postupujte podľa hlasových a vizuálnych pokynov.
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          {aedItems.map((item) => (
            <View key={item} style={styles.infoRow}>
              <View style={styles.bullet} />
              <Text style={styles.infoText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.finalCard}>
          <Text style={styles.finalText}>
            Pokračujte v KPR, kým dieťa nejaví jasné známky života alebo kým
            neprevezme starostlivosť ZZS / resuscitačný tím.
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pbls/step4")}
          style={({ pressed }) => [styles.backCard, pressed && styles.pressed]}
        >
          <View style={styles.backIcon}>
            <Ionicons name="arrow-back" size={22} color="#075296" />
          </View>
          <View style={styles.backTextContainer}>
            <Text style={styles.backTitle}>Späť na KPR</Text>
            <Text style={styles.backDescription}>Pokračovať v cykloch 15:2</Text>
          </View>
        </Pressable>

        <InfoCard
          title="Ak ste nevyškolený v PBLS"
          description="Operátor tiesňovej linky môže viesť pomer 30:2 s 5 počiatočnými vdychmi, alebo iba kompresie, ak vdychy nie sú možné."
          iconName="call-outline"
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
  aedCard: {
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
  aedIcon: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#19A85B",
  },
  aedTextContainer: {
    flex: 1,
    gap: 4,
  },
  aedTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  aedDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  infoCard: {
    width: "100%",
    gap: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0DEB4",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFF6DC",
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
    color: "#24425F",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  finalCard: {
    width: "100%",
    minHeight: 84,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 999,
    backgroundColor: "#D7EDFD",
  },
  finalText: {
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "center",
  },
  backCard: {
    width: "100%",
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  backIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  backTextContainer: {
    flex: 1,
    gap: 4,
  },
  backTitle: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  backDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
