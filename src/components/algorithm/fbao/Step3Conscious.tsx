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

const actionSections = [
  {
    title: "Dojča",
    items: ["5 úderov do chrbta", "striedajte s 5 stlačeniami hrudníka"],
  },
  {
    title: "Dieťa a dospievajúci",
    items: ["5 úderov do chrbta", "striedajte s 5 stlačeniami brucha"],
  },
];

export default function Step3Conscious() {
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
          <Text style={styles.stepTitle}>Dieťa je pri vedomí</Text>
          <Text style={styles.stepDescription}>
            Pri neúčinnej kašli postupujte podľa veku dieťaťa a po každom
            cykle zhodnoťte, či sa obštrukcia uvoľnila.
          </Text>
        </View>

        <View style={styles.answerLabel}>
          <Text style={styles.answerLabelText}>ÁNO</Text>
        </View>

        <View style={styles.actionCard}>
          {actionSections.map((section) => (
            <View key={section.title} style={styles.actionSection}>
              <Text style={styles.actionTitle}>{section.title}</Text>
              {section.items.map((item) => (
                <Text key={item} style={styles.actionText}>
                  {item}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.flowConnector}>
          <Ionicons name="arrow-down" size={24} color="#075296" />
        </View>

        <View style={styles.questionCard}>
          <View style={styles.questionIcon}>
            <Ionicons name="help" size={28} color="#FFFFFF" />
          </View>
          <Text style={styles.questionText}>Je obštrukcia uvoľnená?</Text>
        </View>

        <View style={styles.answersContainer}>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/algorithms/epals/fbao/step2")}
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
              <Text style={styles.answerTitlePrimary}>NIE</Text>
              <Text style={styles.answerDescriptionPrimary}>
                Vráťte sa na posúdenie vedomia a pokračujte podľa stavu dieťaťa.
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
          </Pressable>

          <View style={styles.examAlert}>
            <View style={styles.examIcon}>
              <Text style={styles.examIconText}>!</Text>
            </View>
            <View style={styles.examTextContainer}>
              <Text style={styles.examLabel}>ÁNO</Text>
              <Text style={styles.examTitle}>
                Je potrebné bezodkladné zdravotné vyšetrenie
              </Text>
            </View>
          </View>
        </View>

        <InfoCard
          title="Dôležité"
          description="Ak dieťa kedykoľvek stratí vedomie, začnite KPR a prejdite na vetvu bezvedomia."
          iconName="warning-outline"
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
  answerLabel: {
    width: "100%",
    alignItems: "center",
    marginBottom: -8,
  },
  answerLabelText: {
    color: "#075296",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 25,
  },
  actionCard: {
    width: "100%",
    gap: 18,
    padding: 18,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  actionSection: {
    width: "100%",
    gap: 5,
    alignItems: "center",
  },
  actionTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "center",
  },
  actionText: {
    color: "#075296",
    fontSize: 18,
    lineHeight: 25,
    textAlign: "center",
  },
  flowConnector: {
    alignItems: "center",
    marginVertical: -4,
  },
  questionCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 3,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
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
    color: "#075296",
    fontSize: 21,
    fontWeight: "900",
    lineHeight: 28,
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
  answerIconPrimary: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#ED1C24",
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
  answerDescriptionPrimary: {
    color: "#D7E9F8",
    fontSize: 13,
    lineHeight: 19,
  },
  examAlert: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 999,
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  examIcon: {
    width: 58,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#ED1C24",
    borderRadius: 29,
    backgroundColor: "#FFFFFF",
  },
  examIconText: {
    color: "#ED1C24",
    fontSize: 38,
    fontWeight: "900",
    lineHeight: 48,
  },
  examTextContainer: {
    flex: 1,
    gap: 3,
  },
  examLabel: {
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 16,
  },
  examTitle: {
    color: "#075296",
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 23,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
