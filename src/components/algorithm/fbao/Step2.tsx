import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import InfoCard from "../../ui/info-card";
import NoButton from "../../ui/NoButton";
import YesButton from "../../ui/YesButton";

export default function Step2() {
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
            <Text style={styles.stepBadgeText}>Krok 2</Text>
          </View>
          <Text style={styles.stepTitle}>Privolajte pomoc</Text>
          <Text style={styles.stepDescription}>
            Pri neúčinnom kašli bezodkladne aktivujte záchrannú zdravotnú službu
            a zhodnoťte stav vedomia dieťaťa.
          </Text>
        </View>

        <View style={styles.emergencyCard}>
          <View style={styles.emergencyIcon}>
            <Ionicons name="call" size={25} color="#FFFFFF" />
          </View>
          <View style={styles.emergencyTextContainer}>
            <Text style={styles.emergencyTitle}>
              Privolajte záchrannú službu
            </Text>
            <Text style={styles.emergencyDescription}>
              Druhý záchranca alebo hlasný odposluch
            </Text>
          </View>
          <View style={styles.emergencyNumber}>
            <Text style={styles.emergencyNumberText}>112</Text>
          </View>
        </View>

        <View style={styles.flowConnector}>
          <Ionicons name="arrow-down" size={24} color="#075296" />
        </View>

        <View style={styles.questionCard}>
          <View style={styles.questionIcon}>
            <Ionicons name="help" size={28} color="#FFFFFF" />
          </View>
          <Text style={styles.questionText}>Je dieťa pri vedomí?</Text>
        </View>

        <View style={styles.answersContainer}>
          <YesButton
            onPress={() => router.push("/algorithms/epals/fbao/step3conscious")}
          />
          <NoButton
            onPress={() =>
              router.push("/algorithms/epals/fbao/step3uncnscious")
            }
          />
        </View>

        <InfoCard
          title="Dôležité"
          description="Nevykonávajte opakované ani slepé vyberanie prstami. Predmet odstráňte iba vtedy, keď je v ústach jasne viditeľný."
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
  emergencyCard: {
    width: "100%",
    minHeight: 104,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 17,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  emergencyIcon: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 23,
    backgroundColor: "#ED1C24",
  },
  emergencyTextContainer: {
    flex: 1,
    gap: 4,
  },
  emergencyTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  emergencyDescription: {
    color: "#5C6574",
    fontSize: 12,
    lineHeight: 17,
  },
  emergencyNumber: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "#ED1C24",
    borderRadius: 7,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
  },
  emergencyNumberText: {
    color: "#ED1C24",
    fontSize: 15,
    fontWeight: "900",
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
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 29,
  },
  answersContainer: {
    width: "100%",
    gap: 10,
  },
});
