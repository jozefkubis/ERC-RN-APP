import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import NoButton from "../../ui/NoButton";
import YesButton from "../../ui/YesButton";

const abcdeSteps = [
  "Zhodnoťte stav pacienta s využitím ABCDE prístupu",
  "Monitorujte SpO2, EKG, TK",
  "Podajte kyslík, ak je SpO2 < 94 % a zabezpečte intravenózny prístup",
  "Zaznamenajte 12-zvodové EKG",
  "Identifikujte a liečte reverzibilné príčiny (napr. infarkt myokardu alebo abnormality elektrolytov)",
];

const lifeThreateningSigns = [
  "Šok",
  "Synkopa",
  "Ischémia myokardu",
  "Závažné srdcové zlyhávanie",
  "Alebo ihneď po ROSC",
];

export default function Step2Bradycardia() {
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
          <Text style={styles.stepTitle}>Bradykardia</Text>
          <Text style={styles.stepDescription}>
            Zhodnoťte stav pacienta a rozhodnite, či sú prítomné život
            ohrozujúce príznaky.
          </Text>
        </View>

        <View style={styles.assessmentCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Ionicons name="pulse" size={25} color="#FFFFFF" />
            </View>
            <Text style={styles.cardTitle}>Úvodné zhodnotenie</Text>
          </View>

          <View style={styles.list}>
            {abcdeSteps.map((item) => (
              <View key={item} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <View style={styles.questionIcon}>
              <Ionicons name="warning" size={27} color="#FFFFFF" />
            </View>
            <Text style={styles.questionText}>Život ohrozujúce príznaky?</Text>
          </View>
          <View style={styles.warningList}>
            {lifeThreateningSigns.map((item) => (
              <View key={item} style={styles.warningItem}>
                <View style={styles.warningDot} />
                <Text style={styles.warningText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.answersContainer}>
          <YesButton
            onPress={() =>
              router.push(
                "/algorithms/adult-resuscitation/bradycardia/step2unstable",
              )
            }
          />
          <NoButton
            onPress={() =>
              router.push(
                "/algorithms/adult-resuscitation/bradycardia/step2stable",
              )
            }
          />
        </View>
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
  assessmentCard: {
    width: "100%",
    gap: 16,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  cardIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  cardTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
  },
  list: {
    gap: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 7,
    height: 7,
    marginTop: 7,
    borderRadius: 4,
    backgroundColor: "#075296",
  },
  listText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  questionCard: {
    width: "100%",
    gap: 12,
    padding: 18,
    borderWidth: 2,
    borderColor: "#0877D1",
    borderRadius: 12,
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
    backgroundColor: "#ED1C24",
  },
  questionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  questionText: {
    flex: 1,
    color: "#075296",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 27,
  },
  warningList: {
    gap: 7,
  },
  warningItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  warningDot: {
    width: 6,
    height: 6,
    marginTop: 7,
    borderRadius: 3,
    backgroundColor: "#075296",
  },
  warningText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  answersContainer: {
    width: "100%",
    gap: 10,
  },
});
