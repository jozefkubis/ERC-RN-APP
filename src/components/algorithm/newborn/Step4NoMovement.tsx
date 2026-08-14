import { useSettings } from "@/src/context/settings-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 4",
    title: "Hrudník sa nehýbe",
    description:
      "Najprv opravte ventiláciu. Bez pohybu hrudníka nemajú inflačné vdychy očakávaný efekt.",
    fixTitle: "Korekcia ventilácie",
    ventilationFixes: [
      "Skontrolujte masku",
      "Upravte polohu hlavy",
      "Predsuňte sánku",
      "Vyskúšajte inú techniku spriechodnenia dýchacích ciest",
      "Zvážte vyšší inflačný tlak",
    ],
    repeatText: "Opakujte 5 inflačných vdychov",
    questionEyebrow: "Po opakovaných vdychoch:",
    questionText: "Pohyb hrudníka?",
    yesTitle: "Áno",
    noTitle: "Nie",
  },
  en: {
    badge: "Step 4",
    title: "Chest is not moving",
    description:
      "Correct ventilation first. Without chest movement, inflation breaths will not have the expected effect.",
    fixTitle: "Correct ventilation",
    ventilationFixes: [
      "Check mask seal",
      "Reposition the head",
      "Perform jaw thrust",
      "Try another airway-opening technique",
      "Consider higher inflation pressure",
    ],
    repeatText: "Repeat 5 inflation breaths",
    questionEyebrow: "After repeated breaths:",
    questionText: "Chest movement?",
    yesTitle: "Yes",
    noTitle: "No",
  },
};

const cardColors = {
  light: {
    cardBackground: "#FFFFFF",
    cardBorder: "#075296",
    icon: "#075296",
    primaryText: "#075296",
    bodyText: "#10243C",
    mutedText: "#24425F",
    divider: "#E1E6ED",
    repeatBackground: "#D7EDFD",
    repeatIcon: "#0877D1",
    questionBackground: "#D7EDFD",
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
    cardBackground: "#101B2B",
    cardBorder: "#2F7FBE",
    icon: "#164C80",
    primaryText: "#B9DDFF",
    bodyText: "#F5F8FC",
    mutedText: "#D7E2F0",
    divider: "#31435A",
    repeatBackground: "#102A3F",
    repeatIcon: "#164C80",
    questionBackground: "#102A3F",
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

export default function Step4NoMovement() {
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
          styles.fixCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <View style={[styles.fixHeader, { borderBottomColor: colors.divider }]}>
          <View style={[styles.fixIcon, { backgroundColor: colors.icon }]}>
            <Ionicons name="alert" size={23} color="#FFFFFF" />
          </View>
          <View style={styles.cardText}>
            <Text selectable style={[styles.fixTitle, { color: colors.primaryText }]}>
              {text.fixTitle}
            </Text>
          </View>
        </View>

        <View style={styles.fixList}>
          {text.ventilationFixes.map((fix) => (
            <View key={fix} style={styles.fixRow}>
              <View style={[styles.fixBullet, { backgroundColor: colors.icon }]} />
              <Text selectable style={[styles.fixText, { color: colors.bodyText }]}>
                {fix}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.repeatCard,
          { backgroundColor: colors.repeatBackground },
        ]}
      >
        <View style={[styles.repeatIcon, { backgroundColor: colors.repeatIcon }]}>
          <MaterialCommunityIcons name="lungs" size={27} color="#FFFFFF" />
        </View>
        <Text selectable style={[styles.repeatText, { color: colors.primaryText }]}>
          {text.repeatText}
        </Text>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.questionCard,
          { backgroundColor: colors.questionBackground },
        ]}
      >
        <View style={[styles.questionIcon, { backgroundColor: colors.repeatIcon }]}>
          <Ionicons name="help" size={27} color="#FFFFFF" />
        </View>
        <View style={styles.cardText}>
          <Text
            selectable
            style={[styles.questionEyebrow, { color: colors.mutedText }]}
          >
            {text.questionEyebrow}
          </Text>
          <Text selectable style={[styles.questionText, { color: colors.primaryText }]}>
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
          onPress={() => router.replace("/algorithms/newborn/step4-no-movement")}
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
  fixCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  fixHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  fixIcon: {
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
  fixTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  fixList: {
    width: "100%",
    gap: 9,
  },
  fixRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  fixBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  fixText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  repeatCard: {
    width: "100%",
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    padding: 16,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  repeatIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  repeatText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  questionCard: {
    width: "100%",
    minHeight: 104,
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
