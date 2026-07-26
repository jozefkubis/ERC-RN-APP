import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import InfoCard from "../../ui/info-card";
import StepHeader from "../../ui/StepHeader";
import YesButton from "../../ui/YesButton";

export default function Step1() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 1"
        title="Prvotné rozpoznanie"
        description="Rýchlo vyhodnoťte reakciu a dýchanie. Pri pochybnostiach postupujte ako pri zastavení obehu."
      />

      <View style={styles.questionCard}>
        <View style={styles.questionIcon}>
          <Ionicons name="help" size={28} color="#FFFFFF" />
        </View>
        <Text style={styles.questionText}>
          Nereaguje a nedýcha alebo dýcha abnormálne?
        </Text>
      </View>

      <View style={styles.answersContainer}>
        <YesButton
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/als/step2")
          }
        />
        <View style={[styles.answerCard, styles.answerCardLight]}>
          <View style={styles.answerIconLight}>
            <Ionicons name="checkmark" size={24} color="#075296" />
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={styles.answerTitleLight}>Nie</Text>
            <Text style={styles.answerDescriptionLight}>
              Ponechajte osobu v bezpečí, sledujte stav a pokračujte podľa
              prístupu ABCDE.
            </Text>
          </View>
        </View>
      </View>
      <InfoCard
        title="Skôr než začnete"
        description="Zaistite bezpečnosť seba, osoby so zastavením krvného obehu a všetkých okolostojacich."
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
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
  answerCardLight: {
    borderColor: "#CBD3DF",
    backgroundColor: "#FFFFFF",
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
  answerTitleLight: {
    color: "#10243C",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  answerDescriptionLight: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
});
