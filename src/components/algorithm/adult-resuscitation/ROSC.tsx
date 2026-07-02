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

const careItems = [
  "Použite ABCDE prístup",
  "Cieľová SpO₂ 94-98 % a normálna PaCO₂",
  "Cieľový systolický TK > 100 mmHg",
  "12-zvodové EKG",
  "Identifikujte a liečte príčinu",
  "Kontrolujte telesnú teplotu",
];

export default function ROSC() {
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
            Po návrate spontánneho obehu stabilizujte pacienta, hľadajte príčinu
            zastavenia obehu a pripravte ďalší manažment.
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
              Pokračujte systematicky podľa ABCDE a neprestávajte myslieť na
              príčinu zastavenia obehu.
            </Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [styles.causeCard, pressed && styles.pressed]}
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/als/4h4t")
          }
        >
          <View style={styles.causeIcon}>
            <Ionicons name="search-outline" size={22} color="#075296" />
          </View>
          <View style={styles.causeTextContainer}>
            <Text style={styles.causeTitle}>Reverzibilné príčiny</Text>
            <Text style={styles.causeDescription}>
              Otvoriť 4H/4T checklist počas pokračujúcej resuscitácie.
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#7A8492" />
        </Pressable>

        <View style={styles.careList}>
          {careItems.map((item) => (
            <View key={item} style={styles.careRow}>
              <View style={styles.careBullet}>
                <Ionicons name="checkmark" size={15} color="#FFFFFF" />
              </View>
              <Text style={styles.careText}>{item}</Text>
            </View>
          ))}
        </View>

        <InfoCard
          title="Cieľ"
          description="Udržať oxygenáciu, ventiláciu a perfúziu v bezpečnom rozsahu, odhaliť príčinu zastavenia obehu a predísť sekundárnemu poškodeniu."
          iconName="pulse-outline"
        />

        <Pressable
          style={({ pressed }) => [styles.backCard, pressed && styles.pressed]}
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/als/step3")
          }
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
  careList: {
    width: "100%",
    gap: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "#D2D9E6",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFF5D8",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  careRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  careBullet: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    backgroundColor: "#19A85B",
  },
  careText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 21,
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
  causeCard: {
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
  causeIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  causeTextContainer: {
    flex: 1,
    gap: 4,
  },
  causeTitle: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  causeDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
});
