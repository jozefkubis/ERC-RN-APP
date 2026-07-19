import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
import H4T4Button from "../../ui/H4T4Button";
import InfoCard from "../../ui/info-card";
import ParalelThinkingALS from "../adult-resuscitation/ParalelThinkingALS";

const defibRhythmItems = [
  "Pokračujte s výbojmi 4 J kg⁻¹ každé 2 minúty.",
  "Pri refraktérnej KF/bKT od 5. výboja zvážte zvýšenie až na 8 J kg⁻¹, max. 360 J.",
  "Adrenalín 10 µg kg⁻¹ IV/IO, max. 1 mg, po 4 minútach a potom každé 4 minúty.",
  "Amiodarón 5 mg kg⁻¹ IV/IO, max. 300 mg, po 3. výboji; 5 mg kg⁻¹, max. 150 mg, po 5. výboji.",
];

export default function Step3PalsDefib() {
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
            <Text style={styles.stepBadgeText}>Krok 3</Text>
          </View>
          <Text style={styles.stepTitle}>Defibrilovateľný rytmus</Text>
          <Text style={styles.stepDescription}>
            Pri KF alebo bezpulzovej KT podajte výboj s minimálnym prerušením
            kompresií.
          </Text>
        </View>

        <View style={styles.shockCard}>
          <View style={styles.shockIcon}>
            <Ionicons name="flash-sharp" size={30} color="#FFFFFF" />
          </View>
          <View style={styles.shockTextContainer}>
            <Text style={styles.shockLabel}>Okamžitý postup</Text>
            <Text style={styles.shockTitle}>1 výboj 4 J kg⁻¹</Text>
            <Text style={styles.shockDescription}>
              Nabite defibrilátor počas KPR, všetkých upozornite a výboj podajte
              s čo najkratšou pauzou.
            </Text>
          </View>
        </View>

        <View style={styles.cprCard}>
          <View style={styles.cprIcon}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={28}
              color="#FFFFFF"
            />
          </View>
          <View style={styles.cprTextContainer}>
            <Text style={styles.cprTitle}>Ihneď pokračujte v KPR 2 minúty</Text>
            <Text style={styles.cprDescription}>
              Po výboji nekontrolujte pulz ani rytmus. Okamžite obnovte
              kompresie a ventiláciu 15:2.
            </Text>
          </View>
        </View>

        <View style={styles.defibInfoCard}>
          <View style={styles.defibInfoHeader}>
            <View style={styles.defibInfoIcon}>
              <Ionicons name="flash-sharp" size={19} color="#075296" />
            </View>
            <Text style={styles.defibInfoTitle}>
              Pre defibrilovateľné rytmy
            </Text>
          </View>

          <View style={styles.defibInfoList}>
            {defibRhythmItems.map((item) => (
              <View key={item} style={styles.defibInfoRow}>
                <View style={styles.bullet} />
                <Text style={styles.defibInfoText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <ParalelThinkingALS />
        <H4T4Button />

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pals/step2")}
          style={({ pressed }) => [styles.nextCard, pressed && styles.pressed]}
        >
          <View style={styles.nextIcon}>
            <Ionicons name="timer-outline" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.nextTextContainer}>
            <Text style={styles.nextTitle}>Po 2 minútach</Text>
            <Text style={styles.nextDescription}>Znovu zhodnoťte rytmus</Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
        </Pressable>

        <InfoCard
          title="Dôležité"
          description="Výboje podávajte jednotlivo. Po každom výboji okamžite pokračujte v KPR a reverzibilné príčiny riešte bez zbytočného prerušenia kompresií."
          iconName="alert-circle-outline"
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
  shockCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  shockIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
    backgroundColor: "#ED1C24",
  },
  shockTextContainer: {
    flex: 1,
    gap: 4,
  },
  shockLabel: {
    color: "#B9DDFF",
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  shockTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  shockDescription: {
    color: "#D7E9F8",
    fontSize: 13,
    lineHeight: 19,
  },
  cprCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cprIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#ED1C24",
  },
  cprTextContainer: {
    flex: 1,
    gap: 4,
  },
  cprTitle: {
    color: "#10243C",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  cprDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  defibInfoCard: {
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
  defibInfoHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  defibInfoIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
  },
  defibInfoTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  defibInfoList: {
    width: "100%",
    gap: 9,
  },
  defibInfoRow: {
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
  defibInfoText: {
    flex: 1,
    color: "#24425F",
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "700",
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
    backgroundColor: "#0877D1",
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
