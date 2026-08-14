import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Stabilná bradykardia",
    description:
      "Ak pacient nemá život ohrozujúce príznaky, zhodnoťte riziko asystólie a pokračujte podľa odpovede.",
    panelTitle: "STABILNÁ",
    question: "Riziko asystólie?",
    asystoleRiskSigns: [
      "Nedávna asystólia",
      "AV blokáda Mobitz II",
      "Kompletná srdcová blokáda so širokým QRS",
      "Komorová pauza > 3 s",
    ],
    yesTitle: "Áno",
    yesDescription: "Pokračujte ďalším krokom liečby.",
    observationText: "Ak nie, pozorujte pacienta",
    infoTitle: "Pripomienka",
    infoDescription:
      "Pokračujte v monitorovaní EKG, tlaku krvi a SpO2. Pri zhoršení stavu sa vráťte k hodnoteniu život ohrozujúcich príznakov.",
  },
  en: {
    badge: "Step 2",
    title: "Stable bradycardia",
    description:
      "If the patient has no life-threatening features, assess the risk of asystole and continue according to the answer.",
    panelTitle: "STABLE",
    question: "Risk of asystole?",
    asystoleRiskSigns: [
      "Recent asystole",
      "Mobitz II AV block",
      "Complete heart block with broad QRS",
      "Ventricular pause > 3 s",
    ],
    yesTitle: "Yes",
    yesDescription: "Continue to the next treatment step.",
    observationText: "If no, observe the patient",
    infoTitle: "Reminder",
    infoDescription:
      "Continue monitoring ECG, blood pressure and SpO2. If the patient deteriorates, reassess for life-threatening features.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#D7F2F5",
    panelBorder: "#B6E3EA",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    questionBorder: "#0877D1",
    primary: "#075296",
    primaryIcon: "#0877D1",
    text: "#10243C",
    mutedText: "#5C6574",
    observationBackground: "#D7EDFD",
    observationBorder: "#075296",
    lightIconBackground: "#FFFFFF",
    yesBackground: "#075296",
    yesBorder: "#075296",
    yesText: "#FFFFFF",
    yesMutedText: "#D7E9F8",
  },
  dark: {
    panelBackground: "#102A2E",
    panelBorder: "#2D626A",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    questionBorder: "#2F7FBE",
    primary: "#B9DDFF",
    primaryIcon: "#164C80",
    text: "#F5F8FC",
    mutedText: "#AAB6C7",
    observationBackground: "#102A3F",
    observationBorder: "#2F7FBE",
    lightIconBackground: "#164C80",
    yesBackground: "#0E4A80",
    yesBorder: "#2F7FBE",
    yesText: "#FFFFFF",
    yesMutedText: "#D7E9F8",
  },
};

export default function Step2BradyStable() {
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
          styles.stablePanel,
          {
            borderColor: colors.panelBorder,
            backgroundColor: colors.panelBackground,
          },
        ]}
      >
        <View style={styles.panelTitleRow}>
          <View
            style={[
              styles.panelIcon,
              { backgroundColor: colors.lightIconBackground },
            ]}
          >
            <Ionicons name="shield-checkmark" size={24} color={colors.primary} />
          </View>
          <Text style={[styles.panelTitle, { color: colors.primary }]}>
            {text.panelTitle}
          </Text>
        </View>

        <View style={styles.flowContainer}>
          <View
            style={[
              styles.questionCard,
              {
                borderColor: colors.questionBorder,
                backgroundColor: colors.cardBackground,
              },
            ]}
          >
            <View style={styles.questionHeader}>
              <View
                style={[
                  styles.questionIcon,
                  { backgroundColor: colors.primaryIcon },
                ]}
              >
                <Ionicons name="help" size={26} color="#FFFFFF" />
              </View>
              <Text style={[styles.questionText, { color: colors.primary }]}>
                {text.question}
              </Text>
            </View>
            <View style={styles.list}>
              {text.asystoleRiskSigns.map((item) => (
                <View key={item} style={styles.listItem}>
                  <View
                    style={[styles.dot, { backgroundColor: colors.primary }]}
                  />
                  <Text style={[styles.listText, { color: colors.text }]}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.answersContainer}>
            <Pressable
              onPress={() =>
                router.push(
                  "/algorithms/adult-resuscitation/bradycardia/step3unstable",
                )
              }
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
                  styles.answerIconPrimary,
                  { backgroundColor: colors.primaryIcon },
                ]}
              >
                <Ionicons name="checkmark" size={24} color="#FFFFFF" />
              </View>
              <View style={styles.answerTextContainer}>
                <Text style={[styles.answerTitle, { color: colors.yesText }]}>
                  {text.yesTitle}
                </Text>
                <Text
                  style={[
                    styles.answerDescription,
                    { color: colors.yesMutedText },
                  ]}
                >
                  {text.yesDescription}
                </Text>
              </View>
              <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
            </Pressable>

            <View
              style={[
                styles.observationCard,
                {
                  borderColor: colors.observationBorder,
                  backgroundColor: colors.observationBackground,
                },
              ]}
            >
              <View
                style={[
                  styles.observationIcon,
                  { backgroundColor: colors.lightIconBackground },
                ]}
              >
                <Ionicons name="eye" size={24} color={colors.primary} />
              </View>
              <Text style={[styles.observationText, { color: colors.primary }]}>
                {text.observationText}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="pulse-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  stablePanel: {
    width: "100%",
    gap: 18,
    padding: 18,
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  panelTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  panelIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  panelTitle: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  flowContainer: {
    width: "100%",
    gap: 12,
  },
  questionCard: {
    width: "100%",
    gap: 12,
    padding: 18,
    borderWidth: 2,
    borderRadius: 12,
    borderCurve: "continuous",
  },
  questionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  questionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  questionText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 27,
  },
  list: {
    gap: 9,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  dot: {
    width: 7,
    height: 7,
    marginTop: 7,
    borderRadius: 4,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
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
  answerTitle: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  answerDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  observationCard: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 2,
    borderRadius: 28,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  observationIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  observationText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 23,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
