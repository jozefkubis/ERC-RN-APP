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

const immediateCareItems = [
  "ABCDE",
  "Kontrolovaná oxygenácia (SpO₂ 94-98 %) a ventilácia (PaCO₂ 4,6-6 kPa / 35-45 mmHg)",
  "Udržiavajte systolický a priemerný krvný tlak > 10. percentil pre daný vek",
  "Vyhnite sa / liečte hypertermiu",
  "Kontrola glykémie (cieľom je dosiahnuť normoglykémiu)",
  "Liečte vyvolávajúcu príčinu",
];

export default function ROSCPals() {
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
            <Text style={styles.stepBadgeText}>ROSC</Text>
          </View>
          <Text style={styles.stepTitle}>Starostlivosť po obnovení obehu</Text>
          <Text style={styles.stepDescription}>
            Po návrate spontánneho obehu dieťa stabilizujte, sledujte
            ventiláciu, perfúziu a aktívne riešte vyvolávajúcu príčinu.
          </Text>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <Ionicons name="checkmark" size={28} color="#FFFFFF" />
          </View>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroLabel}>Ihneď po obnovení obehu</Text>
            <Text style={styles.heroTitle}>ROSC</Text>
            <Text style={styles.heroDescription}>
              Prejdite na poresuscitačnú starostlivosť a pokračujte
              systematicky podľa ABCDE.
            </Text>
          </View>
        </View>

        <View style={styles.careCard}>
          <View style={styles.careHeader}>
            <View style={styles.careIcon}>
              <Ionicons name="checkmark" size={24} color="#008F4B" />
            </View>
            <Text style={styles.careTitle}>Okamžite po ROSC</Text>
          </View>

          <View style={styles.careList}>
            {immediateCareItems.map((item) => (
              <View key={item} style={styles.careRow}>
                <View style={styles.bullet} />
                <Text style={styles.careText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <InfoCard
          title="Cieľ"
          description="Udržať oxygenáciu, ventiláciu, perfúziu, teplotu a glykémiu v bezpečnom rozsahu, kým sa rieši príčina zastavenia obehu."
          iconName="pulse-outline"
        />

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pals/step2")}
          style={({ pressed }) => [styles.backCard, pressed && styles.pressed]}
        >
          <View style={styles.backIcon}>
            <Ionicons name="arrow-back" size={22} color="#075296" />
          </View>
          <View style={styles.backTextContainer}>
            <Text style={styles.backTitle}>Späť na rytmus</Text>
            <Text style={styles.backDescription}>
              Vrátiť sa na zhodnotenie rytmu
            </Text>
          </View>
        </Pressable>
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
    backgroundColor: "#19A85B",
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
  careCard: {
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
  careHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  careIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#008F4B",
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
  },
  careTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  careList: {
    width: "100%",
    gap: 9,
  },
  careRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 8,
  },
  careText: {
    flex: 1,
    color: "#24425F",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
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
