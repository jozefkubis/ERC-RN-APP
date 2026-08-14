import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Nestabilná bradykardia",
    description:
      "Pri prítomnosti život ohrozujúcich príznakov začnite atropínom a priebežne prehodnocujte klinickú odpoveď.",
    panelTitle: "NESTABILNÁ",
    atropineTitle: "Atropín",
    atropineSteps: [
      "Atropín 0,5 mg intravenózne",
      "Opakujte každých 3 - 5 minút podľa odpovede",
      "Maximálna dávka 3 mg",
    ],
    question: "Dostatočná reakcia?",
    yesTitle: "Áno",
    yesDescription: "Pokračujte ako pri stabilnej bradykardii.",
    noTitle: "Nie",
    noDescription: "Pokračujte ďalším krokom liečby.",
    infoTitle: "Pripomienka",
    infoDescription:
      "Počas celého postupu monitorujte EKG, tlak krvi a SpO2. Liečte reverzibilné príčiny bradykardie.",
  },
  en: {
    badge: "Step 2",
    title: "Unstable bradycardia",
    description:
      "If life-threatening features are present, start atropine and reassess the clinical response continuously.",
    panelTitle: "UNSTABLE",
    atropineTitle: "Atropine",
    atropineSteps: [
      "Atropine 0.5 mg intravenously",
      "Repeat every 3 - 5 minutes according to response",
      "Maximum dose 3 mg",
    ],
    question: "Adequate response?",
    yesTitle: "Yes",
    yesDescription: "Continue as stable bradycardia.",
    noTitle: "No",
    noDescription: "Continue to the next treatment step.",
    infoTitle: "Reminder",
    infoDescription:
      "Throughout the pathway, monitor ECG, blood pressure and SpO2. Treat reversible causes of bradycardia.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#FDE3E4",
    panelBorder: "#F5B6BA",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    questionBorder: "#0877D1",
    primary: "#075296",
    primaryIcon: "#075296",
    danger: "#ED1C24",
    dangerDark: "#B7151B",
    text: "#10243C",
    mutedText: "#5C6574",
    lightIconBackground: "#E4EFFD",
    yesBackground: "#075296",
    yesBorder: "#075296",
    yesText: "#FFFFFF",
    yesMutedText: "#D7E9F8",
    arrowLight: "#7A8492",
  },
  dark: {
    panelBackground: "#341719",
    panelBorder: "#783136",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    questionBorder: "#2F7FBE",
    primary: "#B9DDFF",
    primaryIcon: "#164C80",
    danger: "#F17C83",
    dangerDark: "#B7151B",
    text: "#F5F8FC",
    mutedText: "#AAB6C7",
    lightIconBackground: "#164C80",
    yesBackground: "#0E4A80",
    yesBorder: "#2F7FBE",
    yesText: "#FFFFFF",
    yesMutedText: "#D7E9F8",
    arrowLight: "#AAB6C7",
  },
};

export default function Step2BradyUnstable() {
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
          styles.urgentPanel,
          {
            borderColor: colors.panelBorder,
            backgroundColor: colors.panelBackground,
          },
        ]}
      >
        <View style={styles.panelTitleRow}>
          <View style={[styles.panelIcon, { backgroundColor: colors.dangerDark }]}>
            <Ionicons name="warning" size={24} color="#FFFFFF" />
          </View>
          <Text style={[styles.panelTitle, { color: colors.danger }]}>
            {text.panelTitle}
          </Text>
        </View>

        <View style={styles.flowContainer}>
          <View
            style={[
              styles.actionCard,
              {
                borderColor: colors.questionBorder,
                backgroundColor: colors.cardBackground,
              },
            ]}
          >
            <View style={styles.cardHeader}>
              <View
                style={[
                  styles.cardIcon,
                  { backgroundColor: colors.primaryIcon },
                ]}
              >
                <Ionicons name="medkit" size={22} color="#FFFFFF" />
              </View>
              <Text style={[styles.cardTitle, { color: colors.primary }]}>
                {text.atropineTitle}
              </Text>
            </View>

            <View style={styles.list}>
              {text.atropineSteps.map((item) => (
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

          <FlowConnector />

          <View
            style={[
              styles.questionCard,
              {
                borderColor: colors.questionBorder,
                backgroundColor: colors.cardBackground,
              },
            ]}
          >
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

          <View style={styles.answersContainer}>
            <Pressable
              onPress={() =>
                router.push(
                  "/algorithms/adult-resuscitation/bradycardia/step2stable",
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
                  { backgroundColor: colors.dangerDark },
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

            <Pressable
              onPress={() =>
                router.push(
                  "/algorithms/adult-resuscitation/bradycardia/step3unstable",
                )
              }
              style={({ pressed }) => [
                styles.answerCard,
                {
                  borderColor: colors.cardBorder,
                  backgroundColor: colors.cardBackground,
                },
                pressed && styles.pressed,
              ]}
            >
              <View
                style={[
                  styles.answerIconLight,
                  { backgroundColor: colors.lightIconBackground },
                ]}
              >
                <Ionicons name="close" size={24} color={colors.primary} />
              </View>
              <View style={styles.answerTextContainer}>
                <Text style={[styles.answerTitle, { color: colors.text }]}>
                  {text.noTitle}
                </Text>
                <Text
                  style={[styles.answerDescription, { color: colors.mutedText }]}
                >
                  {text.noDescription}
                </Text>
              </View>
              <Ionicons name="arrow-forward" size={22} color={colors.arrowLight} />
            </Pressable>
          </View>
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="information-circle-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  urgentPanel: {
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
  actionCard: {
    width: "100%",
    gap: 15,
    padding: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
  },
  list: {
    gap: 10,
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
  questionCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
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
