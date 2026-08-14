import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import InfoCard from "../../ui/info-card";
import StepHeader from "../../ui/StepHeader";
import YesButton from "../../ui/YesButton";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Prvotné rozpoznanie",
    description:
      "Rýchlo vyhodnoťte reakciu a dýchanie. Pri pochybnostiach postupujte ako pri zastavení obehu.",
    question: "Nereaguje a nedýcha alebo dýcha abnormálne?",
    yes: "Áno",
    no: "Nie",
    noDescription:
      "Ponechajte osobu v bezpečí, sledujte stav a pokračujte podľa prístupu ABCDE.",
    infoTitle: "Skôr než začnete",
    infoDescription:
      "Zaistite bezpečnosť seba, osoby so zastavením krvného obehu a všetkých okolostojacich.",
  },
  en: {
    badge: "Step 1",
    title: "Initial recognition",
    description:
      "Quickly assess responsiveness and breathing. If in doubt, treat the situation as cardiac arrest.",
    question: "Unresponsive and not breathing or breathing abnormally?",
    yes: "Yes",
    no: "No",
    noDescription:
      "Keep the person safe, monitor their condition, and continue with the ABCDE approach.",
    infoTitle: "Before you start",
    infoDescription:
      "Ensure the safety of yourself, the person in cardiac arrest, and all bystanders.",
  },
};

const cardColors = {
  light: {
    questionBackground: "#D7EDFD",
    questionIcon: "#0877D1",
    questionText: "#0877D1",
    answerBackground: "#FFFFFF",
    answerBorder: "#CBD3DF",
    answerIconBackground: "#E4EFFD",
    answerIcon: "#075296",
    answerTitle: "#10243C",
    answerDescription: "#5C6574",
  },
  dark: {
    questionBackground: "#102C45",
    questionIcon: "#164C80",
    questionText: "#B9DDFF",
    answerBackground: "#101B2B",
    answerBorder: "#31435A",
    answerIconBackground: "#20334C",
    answerIcon: "#77B7F2",
    answerTitle: "#F5F8FC",
    answerDescription: "#AAB6C7",
  },
};

export default function Step1() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = cardColors[themeMode];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
      />

      <View
        style={[
          styles.questionCard,
          { backgroundColor: colors.questionBackground },
        ]}
      >
        <View
          style={[
            styles.questionIcon,
            { backgroundColor: colors.questionIcon },
          ]}
        >
          <Ionicons name="help" size={28} color="#FFFFFF" />
        </View>
        <Text style={[styles.questionText, { color: colors.questionText }]}>
          {text.question}
        </Text>
      </View>

      <View style={styles.answersContainer}>
        <YesButton
          title={text.yes}
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/als/step2")
          }
        />
        <View
          style={[
            styles.answerCard,
            {
              borderColor: colors.answerBorder,
              backgroundColor: colors.answerBackground,
            },
          ]}
        >
          <View
            style={[
              styles.answerIconLight,
              { backgroundColor: colors.answerIconBackground },
            ]}
          >
            <Ionicons
              name="checkmark"
              size={24}
              color={colors.answerIcon}
            />
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={[styles.answerTitleLight, { color: colors.answerTitle }]}>
              {text.no}
            </Text>
            <Text
              style={[
                styles.answerDescriptionLight,
                { color: colors.answerDescription },
              ]}
            >
              {text.noDescription}
            </Text>
          </View>
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        themeMode={themeMode}
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
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  questionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  questionText: {
    flex: 1,
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
  answerIconLight: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  answerTextContainer: {
    flex: 1,
    gap: 4,
  },
  answerTitleLight: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  answerDescriptionLight: {
    fontSize: 13,
    lineHeight: 19,
  },
});
