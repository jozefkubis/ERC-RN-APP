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

const airwaySteps = [
  "Položte osobu na chrbát.",
  "Jednu ruku položte na čelo a jemne zakloňte hlavu.",
  "Končekmi prstov druhej ruky zdvihnite bradu.",
  "Skontrolujte, či dýcha normálne.",
];

export default function Step3bls() {
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
          <Text style={styles.stepTitle}>Spriechodnite dýchacie cesty</Text>
          <Text style={styles.stepDescription}>
            Použite jednoduché laické techniky na uvoľnenie dýchacích ciest a
            potom zhodnoťte dýchanie.
          </Text>
        </View>

        <View style={styles.airwayCard}>
          <View style={styles.airwayHeader}>
            <View style={styles.airwayIcon}>
              <Ionicons name="body" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.airwayTitle}>Základné techniky</Text>
          </View>
          <View style={styles.airwayList}>
            {airwaySteps.map((step) => (
              <View key={step} style={styles.airwayRow}>
                <View style={styles.airwayBullet} />
                <Text style={styles.airwayText}>{step}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.questionCard}>
          <View style={styles.questionIcon}>
            <Ionicons name="fitness" size={28} color="#FFFFFF" />
          </View>
          <Text style={styles.questionText}>
            Nedýcha alebo dýcha abnormálne?
          </Text>
        </View>

        <Pressable
          onPress={() => router.push("/algorithms/adult-resuscitation/bls/step4")}
          style={({ pressed }) => [styles.nextCard, pressed && styles.pressed]}
        >
          <View style={styles.nextIcon}>
            <Ionicons name="heart" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.nextTextContainer}>
            <Text style={styles.nextTitle}>Začnite KPR</Text>
            <Text style={styles.nextDescription}>
              Ak osoba nereaguje a nedýcha normálne, pokračujte ďalším krokom.
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#075296" />
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
  questionCard: {
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
  questionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  questionText: {
    flex: 1,
    color: "#0877D1",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 27,
  },
  airwayCard: {
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
  airwayHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  airwayIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#075296",
  },
  airwayTitle: {
    flex: 1,
    color: "#10243C",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  airwayList: {
    gap: 9,
  },
  airwayRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  airwayBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 7,
  },
  airwayText: {
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
