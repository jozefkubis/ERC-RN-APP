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
    badge: "Krok 2",
    title: "Privolajte pomoc",
    description:
      "Pri neúčinnom kašli bezodkladne aktivujte záchrannú zdravotnú službu a zhodnoťte stav vedomia dieťaťa.",
    emergencyTitle: "Privolajte záchrannú službu",
    emergencyDescription: "Druhý záchranca alebo hlasný odposluch",
    question: "Je dieťa pri vedomí?",
    yesTitle: "Áno",
    noTitle: "Nie",
    infoTitle: "Dôležité",
    infoDescription:
      "Nevykonávajte opakované ani slepé vyberanie prstami. Predmet odstráňte iba vtedy, keď je v ústach jasne viditeľný.",
  },
  en: {
    badge: "Step 2",
    title: "Call for help",
    description:
      "If the cough is ineffective, activate emergency medical services immediately and assess the child's level of consciousness.",
    emergencyTitle: "Call emergency services",
    emergencyDescription: "Second rescuer or speakerphone",
    question: "Is the child conscious?",
    yesTitle: "Yes",
    noTitle: "No",
    infoTitle: "Important",
    infoDescription:
      "Do not perform repeated or blind finger sweeps. Remove an object only if it is clearly visible in the mouth.",
  },
};

const cardColors = {
  light: {
    emergencyBackground: "#FFFFFF",
    emergencyBorder: "#075296",
    emergencyIcon: "#ED1C24",
    emergencyTitle: "#075296",
    emergencyDescription: "#5C6574",
    emergencyNumberBackground: "#FFFFFF",
    emergencyNumberBorder: "#ED1C24",
    emergencyNumberText: "#ED1C24",
    questionBackground: "#FFFFFF",
    questionBorder: "#075296",
    questionIcon: "#0877D1",
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
    emergencyBackground: "#101B2B",
    emergencyBorder: "#2F7FBE",
    emergencyIcon: "#B7151B",
    emergencyTitle: "#B9DDFF",
    emergencyDescription: "#AAB6C7",
    emergencyNumberBackground: "#101B2B",
    emergencyNumberBorder: "#FF8A90",
    emergencyNumberText: "#FF8A90",
    questionBackground: "#101B2B",
    questionBorder: "#2F7FBE",
    questionIcon: "#164C80",
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

export default function Step2() {
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
          styles.emergencyCard,
          {
            borderColor: colors.emergencyBorder,
            backgroundColor: colors.emergencyBackground,
          },
        ]}
      >
        <View
          style={[
            styles.emergencyIcon,
            { backgroundColor: colors.emergencyIcon },
          ]}
        >
          <Ionicons name="call" size={25} color="#FFFFFF" />
        </View>
        <View style={styles.emergencyTextContainer}>
          <Text
            style={[styles.emergencyTitle, { color: colors.emergencyTitle }]}
          >
            {text.emergencyTitle}
          </Text>
          <Text
            style={[
              styles.emergencyDescription,
              { color: colors.emergencyDescription },
            ]}
          >
            {text.emergencyDescription}
          </Text>
        </View>
        <View
          style={[
            styles.emergencyNumber,
            {
              borderColor: colors.emergencyNumberBorder,
              backgroundColor: colors.emergencyNumberBackground,
            },
          ]}
        >
          <Text
            style={[
              styles.emergencyNumberText,
              { color: colors.emergencyNumberText },
            ]}
          >
            155
          </Text>
          <View
            style={[
              styles.emergencyNumberDivider,
              { backgroundColor: colors.emergencyNumberBorder },
            ]}
          />
          <Text
            style={[
              styles.emergencyNumberText,
              { color: colors.emergencyNumberText },
            ]}
          >
            112
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
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/fbao/step3conscious")}
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
          onPress={() =>
            router.push("/algorithms/epals/fbao/step3unconscious")
          }
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
  emergencyCard: {
    width: "100%",
    minHeight: 104,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 17,
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  emergencyIcon: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 23,
  },
  emergencyTextContainer: {
    flex: 1,
    gap: 4,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  emergencyDescription: {
    fontSize: 12,
    lineHeight: 17,
  },
  emergencyNumber: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 7,
    borderCurve: "continuous",
  },
  emergencyNumberText: {
    fontSize: 15,
    fontWeight: "900",
  },
  emergencyNumberDivider: {
    width: "100%",
    height: 1.5,
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
