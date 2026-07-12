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
import InfoCard from "../../ui/info-card";
import ParalelThinkingALS from "./ParalelThinkingALS";

const medicationItems = [
  {
    title: "Adrenalín 1 mg",
    description: "Prvú dávku podajte po 3. výboji, potom každé 3-5 minút.",
    iconName: "medical-outline" as const,
  },
  {
    title: "Amiodarón",
    description: "300 mg po 3. výboji, ďalších 150 mg po 5. výboji.",
    iconName: "flask-outline" as const,
  },
];

export default function Step4Defib() {
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
          <Text style={styles.stepTitle}>Defibrilovateľný rytmus</Text>
          <Text style={styles.stepDescription}>
            Pri KF alebo bezpulzovej KT podajte výboj s čo najkratším prerušením
            kompresií.
          </Text>
        </View>

        <View style={styles.shockCard}>
          <View style={styles.shockIcon}>
            <Ionicons name="flash-sharp" size={30} color="#FFFFFF" />
          </View>
          <View style={styles.shockTextContainer}>
            <Text style={styles.shockLabel}>Okamžitý postup</Text>
            <Text style={styles.shockTitle}>1 výboj</Text>
            <Text style={styles.shockDescription}>
              Nabite defibrilátor počas KPR, všetkých upozornite a výboj podajte
              s minimálnou pauzou.
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
            <Text style={styles.cprTitle}>Ihneď pokračujte v KPR</Text>
            <Text style={styles.cprDescription}>
              Po výboji nečakajte na kontrolu pulzu. Pokračujte v kompresiách 2
              minúty a až potom znovu zhodnoťte rytmus.
            </Text>
          </View>
        </View>

        <View style={styles.medicationList}>
          {medicationItems.map((item) => (
            <View key={item.title} style={styles.medicationCard}>
              <View style={styles.medicationIcon}>
                <Ionicons name={item.iconName} size={22} color="#075296" />
              </View>
              <View style={styles.medicationTextContainer}>
                <Text style={styles.medicationTitle}>{item.title}</Text>
                <Text style={styles.medicationDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <ParalelThinkingALS />

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

        <Pressable
          style={({ pressed }) => [styles.nextCard, pressed && styles.pressed]}
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/als/step3")
          }
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
          description="Defibrilačné výboje podávajte po jednom. Po každom výboji okamžite obnovte kompresie hrudníka."
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
  medicationList: {
    width: "100%",
    gap: 10,
  },
  medicationCard: {
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
  medicationIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  medicationTextContainer: {
    flex: 1,
    gap: 4,
  },
  medicationTitle: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  medicationDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
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
