import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import InfoCard from "../../ui/info-card";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Bezpečnosť a reakcia",
    description:
      "Zaistite bezpečnosť seba aj dieťaťa a zhodnoťte reakciu slovným a jemným dotykovým podnetom.",
    question: "Reaguje dieťa?",
    yesTitle: "Áno",
    yesDescription:
      "Nechajte dieťa v bezpečí, sledujte stav a postupujte podľa ABCDE.",
    noTitle: "Nie",
    noDescription: "Privolajte pomoc a zhodnoťte dýchanie.",
    infoTitle: "Dôležité",
    infoDescription:
      "Nepoužívajte bolestivé podnety. Ak je možné, volajte tiesňovú linku cez hlasný odposluch a riaďte sa pokynmi operátora.",
  },
  en: {
    badge: "Step 1",
    title: "Safety and response",
    description:
      "Ensure safety for yourself and the child, then assess response using voice and gentle touch.",
    question: "Is the child responsive?",
    yesTitle: "Yes",
    yesDescription:
      "Leave the child in a safe position, monitor their condition, and continue using the ABCDE approach.",
    noTitle: "No",
    noDescription: "Call for help and assess breathing.",
    infoTitle: "Important",
    infoDescription:
      "Do not use painful stimuli. If possible, call emergency services on speakerphone and follow the dispatcher's instructions.",
  },
};

const cardColors = {
  light: {
    questionBackground: "#D7EDFD",
    questionBorder: "#8EC3F0",
    questionIcon: "#0877D1",
    questionText: "#0877D1",
    primaryBackground: "#075296",
    primaryBorder: "#075296",
    primaryText: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    dangerIcon: "#ED1C24",
    lightBackground: "#FFFFFF",
    lightBorder: "#CBD3DF",
    lightIconBackground: "#E4EFFD",
    lightIcon: "#075296",
    lightTitle: "#10243C",
    lightDescription: "#5C6574",
  },
  dark: {
    questionBackground: "#102A3F",
    questionBorder: "#2F7FBE",
    questionIcon: "#164C80",
    questionText: "#B9DDFF",
    primaryBackground: "#0E4A80",
    primaryBorder: "#2F7FBE",
    primaryText: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    dangerIcon: "#B7151B",
    lightBackground: "#101B2B",
    lightBorder: "#31435A",
    lightIconBackground: "#164C80",
    lightIcon: "#B9DDFF",
    lightTitle: "#F5F8FC",
    lightDescription: "#AAB6C7",
  },
};

export default function Step1Pbls() {
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
            styles.answerCard,
            {
              borderColor: colors.lightBorder,
              backgroundColor: colors.lightBackground,
            },
          ]}
        >
          <View
            style={[
              styles.answerIconLight,
              { backgroundColor: colors.lightIconBackground },
            ]}
          >
            <Ionicons name="checkmark" size={24} color={colors.lightIcon} />
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={[styles.answerTitle, { color: colors.lightTitle }]}>
              {text.yesTitle}
            </Text>
            <Text
              style={[
                styles.answerDescription,
                { color: colors.lightDescription },
              ]}
            >
              {text.yesDescription}
            </Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pbls/step2")}
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
              { backgroundColor: colors.dangerIcon },
            ]}
          >
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={[styles.answerTitle, { color: colors.primaryText }]}>
              {text.noTitle}
            </Text>
            <Text
              style={[
                styles.answerDescription,
                { color: colors.primaryDescription },
              ]}
            >
              {text.noDescription}
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
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
  questionCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 1,
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
  answerIconPrimary: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
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
  answerTitle: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  answerDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
