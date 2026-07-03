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

export default function Step1bls() {
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
            <Text style={styles.stepBadgeText}>Krok 1</Text>
          </View>
          <Text style={styles.stepTitle}>Základná resuscitácia dospelého</Text>
          <Text style={styles.stepDescription}>
            Najprv overte bezpečnosť a skontrolujte, či osoba reaguje.
          </Text>
        </View>

        <View style={styles.questionCard}>
          <View style={styles.questionIcon}>
            <Ionicons name="help" size={28} color="#FFFFFF" />
          </View>
          <Text style={styles.questionText}>Reaguje osoba?</Text>
        </View>

        <View style={styles.answersContainer}>
          <View style={[styles.answerCard, styles.answerCardLight]}>
            <View style={styles.answerIconLight}>
              <Ionicons name="checkmark" size={24} color="#075296" />
            </View>
            <View style={styles.answerTextContainer}>
              <Text style={styles.answerTitleLight}>Áno</Text>
              <Text style={styles.answerDescriptionLight}>
                Ponechajte ju v bezpečí, sledujte stav a pokračujte podľa
                prístupu ABCDE.
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() =>
              router.push("/algorithms/adult-resuscitation/bls/step2")
            }
            style={({ pressed }) => [
              styles.answerCard,
              styles.answerCardPrimary,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.answerIconPrimary}>
              <Ionicons name="close" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.answerTextContainer}>
              <Text style={styles.answerTitlePrimary}>Nie</Text>
              <Text style={styles.answerDescriptionPrimary}>
                Privolajte záchrannú zdravotnú službu a zhodnoťte dýchanie.
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
          </Pressable>
        </View>

        <InfoCard
          title="Skôr než začnete"
          description="Zaistite bezpečnosť seba, osoby so zastavením krvného obehu a všetkých okolostojacich."
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
  answersContainer: {
    width: "100%",
    gap: 10,
  },
  answerCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  answerCardPrimary: {
    borderColor: "#075296",
    backgroundColor: "#075296",
  },
  answerCardLight: {
    borderColor: "#CBD3DF",
    backgroundColor: "#FFFFFF",
  },
  answerIconPrimary: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#ED1C24",
  },
  answerIconLight: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  answerTextContainer: {
    flex: 1,
    gap: 4,
  },
  answerTitlePrimary: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  answerTitleLight: {
    color: "#10243C",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  answerDescriptionPrimary: {
    color: "#D7E9F8",
    fontSize: 13,
    lineHeight: 19,
  },
  answerDescriptionLight: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
