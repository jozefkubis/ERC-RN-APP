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

const qualityItems = [
  "Pomer 15 kompresií : 2 vdychy, ak ste vyškolení v PBLS.",
  "Frekvencia 100-120 min⁻¹.",
  "Hĺbka aspoň 1/3 predozadného rozmeru hrudníka.",
  "Úplné uvoľnenie hrudníka a minimálne prestávky.",
];

export default function Step4Pbls() {
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
            <Text style={styles.stepBadgeText}>Krok 4</Text>
          </View>
          <Text style={styles.stepTitle}>KPR 15:2</Text>
          <Text style={styles.stepDescription}>
            Po 5 úvodných vdychoch okamžite pokračujte kompresiami hrudníka.
          </Text>
        </View>

        <View style={styles.cprCard}>
          <View style={styles.cprHeader}>
            <View style={styles.cprIcon}>
              <Ionicons name="heart" size={26} color="#FFFFFF" />
            </View>
            <Text style={styles.cprTitle}>15 : 2</Text>
          </View>

          <View style={styles.itemList}>
            {qualityItems.map((item) => (
              <View key={item} style={styles.itemRow}>
                <View style={styles.bullet} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.techniqueCard}>
          <Text style={styles.techniqueTitle}>Technika</Text>
          <Text style={styles.techniqueText}>
            Dojča: dva palce s obopnutím hrudníka. Dieťa nad 1 rok: jedna alebo
            dve ruky podľa veľkosti dieťaťa a kvality kompresií.
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pbls/step5")}
          style={({ pressed }) => [styles.nextCard, pressed && styles.pressed]}
        >
          <View style={styles.nextTextContainer}>
            {/* <Text style={styles.nextTitle}></Text> */}
            <Text style={styles.nextDescription}>Ďalší krok - AED</Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
        </Pressable>

        <InfoCard
          title="Jeden záchranca"
          description="Ak ste sami bez mobilu, vykonávajte KPR približne 1 minútu pred odchodom hľadať pomoc."
          iconName="person-outline"
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
  cprCard: {
    width: "100%",
    gap: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0DEB4",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFF6DC",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cprHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  cprIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#ED1C24",
  },
  cprTitle: {
    color: "#075296",
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  itemList: {
    gap: 9,
  },
  itemRow: {
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
  itemText: {
    flex: 1,
    color: "#24425F",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  techniqueCard: {
    width: "100%",
    gap: 6,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  techniqueTitle: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  techniqueText: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  nextCard: {
    width: "100%",
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nextTextContainer: {
    alignItems: "center",
    gap: 2,
  },
  nextTitle: {
    color: "#D7E9F8",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 16,
    textTransform: "uppercase",
  },
  nextDescription: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
