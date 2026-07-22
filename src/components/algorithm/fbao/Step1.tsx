import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import FlowConnector from "../../ui/FlowConnector";
import InfoCard from "../../ui/info-card";
import NoButton from "../../ui/NoButton";

export default function Step1() {
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
          <Text style={styles.stepTitle}>
            Obštrukcia dýchacích ciest dieťaťa
          </Text>
          <Text style={styles.stepDescription}>
            Pri príznakoch obštrukcie dýchacích ciest cudzím telesom rýchlo
            zhodnoťte, či dieťa dokáže účinne kašľať.
          </Text>
        </View>

        <View style={styles.signsCard}>
          <View style={styles.signsIcon}>
            <Ionicons name="warning" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.signsTextContainer}>
            <Text style={styles.signsTitle}>
              Príznaky obštrukcie dýchacích ciest cudzím telesom
            </Text>
            <Text style={styles.signsDescription}>
              Náhly vznik ťažkostí s dýchaním, kašeľ, dávivosť alebo stridor,
              často počas jedenia alebo hry s drobným predmetom.
            </Text>
          </View>
        </View>

        <FlowConnector />

        <View style={styles.questionCard}>
          <View style={styles.questionIcon}>
            <Ionicons name="help" size={28} color="#FFFFFF" />
          </View>
          <Text style={styles.questionText}>Je kašeľ účinný?</Text>
        </View>

        <View style={styles.answersContainer}>
          <View style={styles.guidanceCard}>
            <Text style={styles.guidanceLabel}>Ak áno</Text>
            <Text style={styles.guidanceText}>
              Povzbudzujte dieťa ku kašľu, nezasahujte do dýchacích ciest a
              priebežne sledujte zhoršenie stavu.
            </Text>
          </View>
          <NoButton
            onPress={() => router.push("/algorithms/epals/fbao/step2")}
          />
        </View>

        {/* <View style={styles.guidanceGrid}>
          <View style={styles.guidanceCard}>
            <Text style={styles.guidanceLabel}>Ak nie</Text>
            <Text style={styles.guidanceText}>
              Kašeľ je neúčinný pri tichom kašli, neschopnosti hovoriť alebo
              dýchať, cyanóze či slabnutí vedomia.
            </Text>
          </View>
        </View> */}

        <InfoCard
          title="Dôležité"
          description="Ak sa stav zhoršuje alebo kašeľ nie je účinný, privolajte pomoc a pokračujte ďalším krokom algoritmu FBAO."
          iconName="call-outline"
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
  signsCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 18,
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  signsIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#075296",
  },
  signsTextContainer: {
    flex: 1,
    gap: 5,
  },
  signsTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  signsDescription: {
    color: "#10243C",
    fontSize: 13,
    lineHeight: 19,
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
  guidanceGrid: {
    width: "100%",
    gap: 10,
  },
  guidanceCard: {
    width: "100%",
    gap: 5,
    padding: 14,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  guidanceLabel: {
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  guidanceText: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
});
