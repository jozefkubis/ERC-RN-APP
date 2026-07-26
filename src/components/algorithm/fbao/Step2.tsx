import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import FlowConnector from "../../ui/FlowConnector";
import InfoCard from "../../ui/info-card";
import NoButton from "../../ui/NoButton";
import YesButton from "../../ui/YesButton";

export default function Step2() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 2"}
        title={"Privolajte pomoc"}
        description={"Pri neúčinnom kašli bezodkladne aktivujte záchrannú zdravotnú službu a zhodnoťte stav vedomia dieťaťa."}
      />

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
            <Text style={styles.emergencyNumberText}>155</Text>
            <View style={styles.emergencyNumberDivider} />
            <Text style={styles.emergencyNumberText}>112</Text>
          </View>
        </View>

        <FlowConnector />

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
              router.push("/algorithms/epals/fbao/step3unconscious")
            }
          />
        </View>

        <InfoCard
          title="Dôležité"
          description="Nevykonávajte opakované ani slepé vyberanie prstami. Predmet odstráňte iba vtedy, keď je v ústach jasne viditeľný."
          iconName="warning-outline"
        />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
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
   emergencyNumberDivider: {
    width: "100%",
    height: 1.5,
    backgroundColor: "#ED1C24",
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
