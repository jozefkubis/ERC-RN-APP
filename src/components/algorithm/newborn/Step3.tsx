import { useSettings } from "@/src/context/settings-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Prehodnotenie ventilácie",
    description:
      "Po 5 inflačných vdychoch prehodnoťte srdcovú frekvenciu a sledujte, či sa hrudník pohybuje.",
    reassessmentText: "Prehodnoťte",
    questionEyebrow: "Ak sa srdcová frekvencia nezvýši:",
    questionText: "Pohyb hrudníka?",
    yesTitle: "Áno",
    noTitle: "Nie",
  },
  en: {
    badge: "Step 3",
    title: "Reassess ventilation",
    description:
      "After 5 inflation breaths, reassess the heart rate and check whether the chest is moving.",
    reassessmentText: "Reassess",
    questionEyebrow: "If the heart rate does not increase:",
    questionText: "Chest movement?",
    yesTitle: "Yes",
    noTitle: "No",
  },
};

const cardColors = {
  light: {
    reassessmentBackground: "#FFFFFF",
    reassessmentBorder: "#0877D1",
    reassessmentIcon: "#ED1C24",
    reassessmentText: "#075296",
    questionBackground: "#D7EDFD",
    questionIcon: "#0877D1",
    questionEyebrow: "#24425F",
    questionText: "#075296",
    yesBackground: "#075296",
    yesBorder: "#075296",
    yesIconBackground: "#ED1C24",
    yesText: "#FFFFFF",
    noBackground: "#FFFFFF",
    noBorder: "#CBD3DF",
    noIconBackground: "#E4EFFD",
    noIcon: "#075296",
    noText: "#10243C",
    noArrow: "#7A8492",
  },
  dark: {
    reassessmentBackground: "#101B2B",
    reassessmentBorder: "#2F7FBE",
    reassessmentIcon: "#B7151B",
    reassessmentText: "#B9DDFF",
    questionBackground: "#102A3F",
    questionIcon: "#164C80",
    questionEyebrow: "#D7E2F0",
    questionText: "#B9DDFF",
    yesBackground: "#0E4A80",
    yesBorder: "#2F7FBE",
    yesIconBackground: "#B7151B",
    yesText: "#FFFFFF",
    noBackground: "#101B2B",
    noBorder: "#31435A",
    noIconBackground: "#17375B",
    noIcon: "#8BC4FA",
    noText: "#F5F8FC",
    noArrow: "#AAB6C7",
  },
};

export default function Step3() {
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
          styles.reassessmentCard,
          {
            borderColor: colors.reassessmentBorder,
            backgroundColor: colors.reassessmentBackground,
          },
        ]}
      >
        <View
          style={[
            styles.reassessmentIcon,
            { backgroundColor: colors.reassessmentIcon },
          ]}
        >
          <MaterialCommunityIcons
            name="heart-pulse"
            size={29}
            color="#FFFFFF"
          />
        </View>
        <Text
          selectable
          style={[
            styles.reassessmentText,
            { color: colors.reassessmentText },
          ]}
        >
          {text.reassessmentText}
        </Text>
      </View>

      <FlowConnector />

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
          <Ionicons name="help" size={27} color="#FFFFFF" />
        </View>
        <View style={styles.cardText}>
          <Text
            selectable
            style={[styles.questionEyebrow, { color: colors.questionEyebrow }]}
          >
            {text.questionEyebrow}
          </Text>
          <Text
            selectable
            style={[styles.questionText, { color: colors.questionText }]}
          >
            {text.questionText}
          </Text>
        </View>
      </View>

      <View style={styles.answersContainer}>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/newborn/step4-with-movement")}
          style={({ pressed }) => [
            styles.answerCard,
            {
              borderColor: colors.yesBorder,
              backgroundColor: colors.yesBackground,
            },
            pressed && styles.pressed,
          ]}
        >
          <View
            style={[
              styles.answerIcon,
              { backgroundColor: colors.yesIconBackground },
            ]}
          >
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={[styles.answerTitle, { color: colors.yesText }]}>
              {text.yesTitle}
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color={colors.yesText} />
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/newborn/step4-no-movement")}
          style={({ pressed }) => [
            styles.answerCard,
            {
              borderColor: colors.noBorder,
              backgroundColor: colors.noBackground,
            },
            pressed && styles.pressed,
          ]}
        >
          <View
            style={[
              styles.answerIcon,
              { backgroundColor: colors.noIconBackground },
            ]}
          >
            <Ionicons name="close" size={24} color={colors.noIcon} />
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={[styles.answerTitle, { color: colors.noText }]}>
              {text.noTitle}
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color={colors.noArrow} />
        </Pressable>
      </View>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  reassessmentCard: {
    width: "100%",
    minHeight: 92,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 2,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  reassessmentIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  reassessmentText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
    textAlign: "left",
  },
  questionCard: {
    width: "100%",
    minHeight: 110,
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
  cardText: {
    flex: 1,
    gap: 4,
  },
  questionEyebrow: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  questionText: {
    fontSize: 21,
    fontWeight: "900",
    lineHeight: 27,
  },
  answersContainer: {
    width: "100%",
    gap: 10,
  },
  answerCard: {
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
  answerIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  answerTextContainer: {
    flex: 1,
    gap: 3,
  },
  answerTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
