import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import InfoCard from "../../ui/info-card";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Obštrukcia dýchacích ciest dieťaťa",
    description:
      "Pri príznakoch obštrukcie dýchacích ciest cudzím telesom rýchlo zhodnoťte, či dieťa dokáže účinne kašľať.",
    signsTitle: "Príznaky obštrukcie dýchacích ciest cudzím telesom",
    signsDescription:
      "Náhly vznik ťažkostí s dýchaním, kašeľ, dávivosť alebo stridor, často počas jedenia alebo hry s drobným predmetom.",
    question: "Je kašeľ účinný?",
    yesLabel: "Ak áno",
    yesDescription:
      "Povzbudzujte dieťa ku kašľu, nezasahujte do dýchacích ciest a priebežne sledujte zhoršenie stavu.",
    noTitle: "Nie",
    infoTitle: "Dôležité",
    infoDescription:
      "Ak sa stav zhoršuje alebo kašeľ nie je účinný, privolajte pomoc a pokračujte ďalším krokom algoritmu FBAO.",
  },
  en: {
    badge: "Step 1",
    title: "Foreign body airway obstruction in a child",
    description:
      "When there are signs of foreign body airway obstruction, quickly assess whether the child can cough effectively.",
    signsTitle: "Signs of foreign body airway obstruction",
    signsDescription:
      "Sudden breathing difficulty, coughing, gagging, or stridor, often during eating or playing with a small object.",
    question: "Is the cough effective?",
    yesLabel: "If yes",
    yesDescription:
      "Encourage the child to cough, do not interfere with the airway, and keep watching for deterioration.",
    noTitle: "No",
    infoTitle: "Important",
    infoDescription:
      "If the condition worsens or the cough is not effective, call for help and continue to the next step of the FBAO algorithm.",
  },
};

const cardColors = {
  light: {
    signsBackground: "#D7EDFD",
    signsIcon: "#075296",
    signsTitle: "#075296",
    signsDescription: "#10243C",
    questionBackground: "#FFFFFF",
    questionBorder: "#075296",
    questionIcon: "#0877D1",
    questionText: "#075296",
    guidanceBackground: "#FFFFFF",
    guidanceBorder: "#CBD3DF",
    guidanceLabel: "#075296",
    guidanceText: "#5C6574",
    noBackground: "#FFFFFF",
    noBorder: "#CBD3DF",
    noIconBackground: "#E4EFFD",
    noIcon: "#075296",
    noText: "#10243C",
    noArrow: "#7A8492",
  },
  dark: {
    signsBackground: "#102A3F",
    signsIcon: "#164C80",
    signsTitle: "#B9DDFF",
    signsDescription: "#D7E2F0",
    questionBackground: "#101B2B",
    questionBorder: "#2F7FBE",
    questionIcon: "#164C80",
    questionText: "#B9DDFF",
    guidanceBackground: "#101B2B",
    guidanceBorder: "#31435A",
    guidanceLabel: "#B9DDFF",
    guidanceText: "#AAB6C7",
    noBackground: "#101B2B",
    noBorder: "#31435A",
    noIconBackground: "#17375B",
    noIcon: "#8BC4FA",
    noText: "#F5F8FC",
    noArrow: "#AAB6C7",
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
          styles.signsCard,
          { backgroundColor: colors.signsBackground },
        ]}
      >
        <View style={[styles.signsIcon, { backgroundColor: colors.signsIcon }]}>
          <Ionicons name="warning" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.signsTextContainer}>
          <Text style={[styles.signsTitle, { color: colors.signsTitle }]}>
            {text.signsTitle}
          </Text>
          <Text
            style={[
              styles.signsDescription,
              { color: colors.signsDescription },
            ]}
          >
            {text.signsDescription}
          </Text>
        </View>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.questionCard,
          {
            borderColor: colors.questionBorder,
            backgroundColor: colors.questionBackground,
          },
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
        <View
          style={[
            styles.guidanceCard,
            {
              borderColor: colors.guidanceBorder,
              backgroundColor: colors.guidanceBackground,
            },
          ]}
        >
          <Text
            style={[styles.guidanceLabel, { color: colors.guidanceLabel }]}
          >
            {text.yesLabel}
          </Text>
          <Text style={[styles.guidanceText, { color: colors.guidanceText }]}>
            {text.yesDescription}
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/fbao/step2")}
          style={({ pressed }) => [
            styles.noCard,
            {
              borderColor: colors.noBorder,
              backgroundColor: colors.noBackground,
            },
            pressed && styles.pressed,
          ]}
        >
          <View
            style={[
              styles.noIconContainer,
              { backgroundColor: colors.noIconBackground },
            ]}
          >
            <Ionicons name="close" size={24} color={colors.noIcon} />
          </View>
          <View style={styles.noTextContainer}>
            <Text style={[styles.noTitle, { color: colors.noText }]}>
              {text.noTitle}
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color={colors.noArrow} />
        </Pressable>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="call-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  signsCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 18,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  signsIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  signsTextContainer: {
    flex: 1,
    gap: 5,
  },
  signsTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  signsDescription: {
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
    borderRadius: 10,
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
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 29,
  },
  answersContainer: {
    width: "100%",
    gap: 10,
  },
  guidanceCard: {
    width: "100%",
    gap: 5,
    padding: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  guidanceLabel: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  guidanceText: {
    fontSize: 13,
    lineHeight: 19,
  },
  noCard: {
    width: "100%",
    minHeight: 88,
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
  noIconContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  noTextContainer: {
    flex: 1,
    gap: 3,
  },
  noTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
