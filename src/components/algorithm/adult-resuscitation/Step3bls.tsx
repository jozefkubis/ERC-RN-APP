import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Spriechodnite dýchacie cesty",
    description:
      "Použite jednoduché laické techniky na uvoľnenie dýchacích ciest a potom zhodnoťte dýchanie.",
    airwayTitle: "Základné techniky",
    airwaySteps: [
      "Položte osobu na chrbát.",
      "Jednu ruku položte na čelo a jemne zakloňte hlavu.",
      "Končekmi prstov druhej ruky zdvihnite bradu.",
      "Skontrolujte, či dýcha normálne.",
    ],
    question: "Nedýcha alebo dýcha abnormálne?",
    nextTitle: "Začnite KPR",
    nextDescription:
      "Ak osoba nereaguje a nedýcha normálne, pokračujte ďalším krokom.",
  },
  en: {
    badge: "Step 3",
    title: "Open the airway",
    description:
      "Use simple basic techniques to open the airway, then assess breathing.",
    airwayTitle: "Basic techniques",
    airwaySteps: [
      "Place the person on their back.",
      "Place one hand on the forehead and gently tilt the head back.",
      "Lift the chin with the fingertips of your other hand.",
      "Check whether breathing is normal.",
    ],
    question: "Not breathing or breathing abnormally?",
    nextTitle: "Start CPR",
    nextDescription:
      "If the person is unresponsive and not breathing normally, continue to the next step.",
  },
};

const cardColors = {
  light: {
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    primary: "#075296",
    primarySoft: "#D7EDFD",
    primarySoftBorder: "#8EC3F0",
    title: "#10243C",
    text: "#10243C",
    mutedText: "#5C6574",
    questionIcon: "#0877D1",
    dangerIcon: "#ED1C24",
    arrow: "#075296",
  },
  dark: {
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    primary: "#77B7F2",
    primarySoft: "#102A3F",
    primarySoftBorder: "#2F7FBE",
    title: "#F5F8FC",
    text: "#F5F8FC",
    mutedText: "#AAB6C7",
    questionIcon: "#164C80",
    dangerIcon: "#B7151B",
    arrow: "#B9DDFF",
  },
};

export default function Step3bls() {
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
          styles.airwayCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <View style={styles.airwayHeader}>
          <View style={[styles.airwayIcon, { backgroundColor: colors.primary }]}>
            <Ionicons name="body" size={24} color="#FFFFFF" />
          </View>
          <Text style={[styles.airwayTitle, { color: colors.title }]}>
            {text.airwayTitle}
          </Text>
        </View>
        <View style={styles.airwayList}>
          {text.airwaySteps.map((step) => (
            <View key={step} style={styles.airwayRow}>
              <View
                style={[
                  styles.airwayBullet,
                  { backgroundColor: colors.primary },
                ]}
              />
              <Text style={[styles.airwayText, { color: colors.text }]}>
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View
        style={[
          styles.questionCard,
          {
            borderColor: colors.primarySoftBorder,
            backgroundColor: colors.primarySoft,
          },
        ]}
      >
        <View
          style={[
            styles.questionIcon,
            { backgroundColor: colors.questionIcon },
          ]}
        >
          <Ionicons name="fitness" size={28} color="#FFFFFF" />
        </View>
        <Text style={[styles.questionText, { color: colors.primary }]}>
          {text.question}
        </Text>
      </View>

      <Pressable
        onPress={() => router.push("/algorithms/adult-resuscitation/bls/step4")}
        style={({ pressed }) => [
          styles.nextCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
          pressed && styles.pressed,
        ]}
      >
        <View style={[styles.nextIcon, { backgroundColor: colors.dangerIcon }]}>
          <Ionicons name="heart" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.nextTextContainer}>
          <Text style={[styles.nextTitle, { color: colors.primary }]}>
            {text.nextTitle}
          </Text>
          <Text style={[styles.nextDescription, { color: colors.mutedText }]}>
            {text.nextDescription}
          </Text>
        </View>
        <Ionicons name="arrow-forward" size={22} color={colors.arrow} />
      </Pressable>
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
  airwayCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  airwayHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  airwayIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  airwayTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  airwayList: {
    gap: 9,
  },
  airwayRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  airwayBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
  },
  airwayText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  nextCard: {
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
  nextIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  nextTextContainer: {
    flex: 1,
    gap: 4,
  },
  nextTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  nextDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
