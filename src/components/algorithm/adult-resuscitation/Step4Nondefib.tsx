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

const actionItems = [
  {
    title: "KPR 2 minúty",
    description: "Pokračujte bez zbytočného prerušenia kompresií.",
    iconName: "heart-pulse" as const,
    iconFamily: "material" as const,
  },
  {
    title: "Adrenalín 1 mg",
    description: "Podajte čo najskôr a opakujte každé 3-5 minút.",
    iconName: "medical-outline" as const,
    iconFamily: "ion" as const,
  },
];

export default function Step4Nondefib() {
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
          <Text style={styles.stepTitle}>Nedefibrilovateľný rytmus</Text>
          <Text style={styles.stepDescription}>
            Pri BEA alebo asystólii nepodávajte výboj. Okamžite pokračujte v
            kvalitnej KPR a riešte príčinu zastavenia obehu.
          </Text>
        </View>

        <View style={styles.noShockCard}>
          <View style={styles.noShockIcon}>
            <Ionicons name="flash-off-sharp" size={30} color="#FFFFFF" />
          </View>
          <View style={styles.noShockTextContainer}>
            <Text style={styles.noShockLabel}>Okamžitý postup</Text>
            <Text style={styles.noShockTitle}>Bez výboja</Text>
            <Text style={styles.noShockDescription}>
              Defibrilácia nie je indikovaná. Minimalizujte prestávky a hneď sa
              vráťte ku kompresiám.
            </Text>
          </View>
        </View>

        <View style={styles.actionList}>
          {actionItems.map((item) => (
            <View key={item.title} style={styles.actionCard}>
              <View style={styles.actionIcon}>
                {item.iconFamily === "material" ? (
                  <MaterialCommunityIcons
                    name={item.iconName}
                    size={24}
                    color="#075296"
                  />
                ) : (
                  <Ionicons name={item.iconName} size={22} color="#075296" />
                )}
              </View>
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>{item.title}</Text>
                <Text style={styles.actionDescription}>{item.description}</Text>
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
          description="Pri asystólii nie je potrebné prerušiť kompresie iba kvôli kontrole rytmu. Pokračujte v KPR a kontrolujte rytmus v pravidelných cykloch."
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
  noShockCard: {
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
  noShockIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
    backgroundColor: "#ED1C24",
  },
  noShockTextContainer: {
    flex: 1,
    gap: 4,
  },
  noShockLabel: {
    color: "#B9DDFF",
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  noShockTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  noShockDescription: {
    color: "#D7E9F8",
    fontSize: 13,
    lineHeight: 19,
  },
  actionList: {
    width: "100%",
    gap: 10,
  },
  actionCard: {
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
  actionIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  actionTextContainer: {
    flex: 1,
    gap: 4,
  },
  actionTitle: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  actionDescription: {
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
  noteCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 16,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  noteIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  noteTextContainer: {
    flex: 1,
    gap: 4,
  },
  noteTitle: {
    color: "#0877D1",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  noteDescription: {
    color: "#28506F",
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
