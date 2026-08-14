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
    badge: "Krok 3",
    title: "Dieťa je pri vedomí",
    description:
      "Pri neúčinnej kašli postupujte podľa veku dieťaťa a po každom cykle zhodnoťte, či sa obštrukcia uvoľnila.",
    answerLabel: "ÁNO",
    actionSections: [
      {
        title: "Dojča",
        items: ["5 úderov do chrbta", "striedajte s 5 stlačeniami hrudníka"],
      },
      {
        title: "Dieťa a dospievajúci",
        items: ["5 úderov do chrbta", "striedajte s 5 stlačeniami brucha"],
      },
    ],
    question: "Je obštrukcia uvoľnená?",
    noTitle: "NIE",
    noDescription:
      "Vráťte sa na posúdenie vedomia a pokračujte podľa stavu dieťaťa.",
    yesLabel: "ÁNO",
    examTitle: "Je potrebné bezodkladné zdravotné vyšetrenie",
    infoTitle: "Dôležité",
    infoDescription:
      "Ak dieťa kedykoľvek stratí vedomie, začnite KPR a prejdite na vetvu bezvedomia.",
  },
  en: {
    badge: "Step 3",
    title: "Child is conscious",
    description:
      "If the cough is ineffective, act according to the child's age and reassess after each cycle whether the obstruction has cleared.",
    answerLabel: "YES",
    actionSections: [
      {
        title: "Infant",
        items: ["5 back blows", "alternate with 5 chest thrusts"],
      },
      {
        title: "Child and adolescent",
        items: ["5 back blows", "alternate with 5 abdominal thrusts"],
      },
    ],
    question: "Has the obstruction cleared?",
    noTitle: "NO",
    noDescription:
      "Return to assessment of consciousness and continue according to the child's condition.",
    yesLabel: "YES",
    examTitle: "Urgent medical assessment is required",
    infoTitle: "Important",
    infoDescription:
      "If the child loses consciousness at any time, start CPR and move to the unconscious branch.",
  },
};

const cardColors = {
  light: {
    label: "#075296",
    actionBackground: "#FFFFFF",
    actionBorder: "#075296",
    actionText: "#075296",
    questionBackground: "#FFFFFF",
    questionBorder: "#075296",
    questionIcon: "#0877D1",
    questionText: "#075296",
    primaryBackground: "#075296",
    primaryBorder: "#075296",
    primaryIcon: "#ED1C24",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    examBackground: "#D7EDFD",
    examBorder: "#075296",
    examIconBackground: "#FFFFFF",
    examIconBorder: "#ED1C24",
    examIconText: "#ED1C24",
    examText: "#075296",
  },
  dark: {
    label: "#B9DDFF",
    actionBackground: "#101B2B",
    actionBorder: "#2F7FBE",
    actionText: "#B9DDFF",
    questionBackground: "#101B2B",
    questionBorder: "#2F7FBE",
    questionIcon: "#164C80",
    questionText: "#B9DDFF",
    primaryBackground: "#0E4A80",
    primaryBorder: "#2F7FBE",
    primaryIcon: "#B7151B",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    examBackground: "#102A3F",
    examBorder: "#2F7FBE",
    examIconBackground: "#101B2B",
    examIconBorder: "#FF8A90",
    examIconText: "#FF8A90",
    examText: "#B9DDFF",
  },
};

export default function Step3Conscious() {
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

      <View style={styles.answerLabel}>
        <Text style={[styles.answerLabelText, { color: colors.label }]}>
          {text.answerLabel}
        </Text>
      </View>

      <View
        style={[
          styles.actionCard,
          {
            borderColor: colors.actionBorder,
            backgroundColor: colors.actionBackground,
          },
        ]}
      >
        {text.actionSections.map((section) => (
          <View key={section.title} style={styles.actionSection}>
            <Text style={[styles.actionTitle, { color: colors.actionText }]}>
              {section.title}
            </Text>
            {section.items.map((item) => (
              <Text key={item} style={[styles.actionText, { color: colors.actionText }]}>
                {item}
              </Text>
            ))}
          </View>
        ))}
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
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/fbao/step2")}
          style={({ pressed }) => [
            styles.answerCard,
            {
              borderColor: colors.primaryBorder,
              backgroundColor: colors.primaryBackground,
            },
            pressed && styles.pressed,
          ]}
        >
          <View
            style={[
              styles.answerIconPrimary,
              { backgroundColor: colors.primaryIcon },
            ]}
          >
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.answerTextContainer}>
            <Text
              style={[styles.answerTitlePrimary, { color: colors.primaryTitle }]}
            >
              {text.noTitle}
            </Text>
            <Text
              style={[
                styles.answerDescriptionPrimary,
                { color: colors.primaryDescription },
              ]}
            >
              {text.noDescription}
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
        </Pressable>

        <View
          style={[
            styles.examAlert,
            {
              borderColor: colors.examBorder,
              backgroundColor: colors.examBackground,
            },
          ]}
        >
          <View
            style={[
              styles.examIcon,
              {
                borderColor: colors.examIconBorder,
                backgroundColor: colors.examIconBackground,
              },
            ]}
          >
            <Text style={[styles.examIconText, { color: colors.examIconText }]}>
              !
            </Text>
          </View>
          <View style={styles.examTextContainer}>
            <Text style={[styles.examLabel, { color: colors.examText }]}>
              {text.yesLabel}
            </Text>
            <Text style={[styles.examTitle, { color: colors.examText }]}>
              {text.examTitle}
            </Text>
          </View>
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="warning-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  answerLabel: {
    width: "100%",
    alignItems: "center",
    marginBottom: -8,
  },
  answerLabelText: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 25,
  },
  actionCard: {
    width: "100%",
    gap: 18,
    padding: 18,
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  actionSection: {
    width: "100%",
    gap: 5,
    alignItems: "center",
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "center",
  },
  actionText: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: "center",
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
  answerIconPrimary: {
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
  answerTitlePrimary: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  answerDescriptionPrimary: {
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
    borderRadius: 999,
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  examIcon: {
    width: 58,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 29,
  },
  examIconText: {
    fontSize: 38,
    fontWeight: "900",
    lineHeight: 48,
  },
  examTextContainer: {
    flex: 1,
    gap: 3,
  },
  examLabel: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 16,
  },
  examTitle: {
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 23,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
