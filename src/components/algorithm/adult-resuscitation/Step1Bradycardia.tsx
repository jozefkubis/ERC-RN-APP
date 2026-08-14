import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Bradykardia",
    description:
      "Zhodnoťte stav pacienta s využitím ABCDE prístupu a rozhodnite, či sú prítomné život ohrozujúce príznaky.",
    assessmentTitle: "Úvodné zhodnotenie",
    abcdeSteps: [
      "Zhodnoťte stav pacienta s využitím ABCDE prístupu",
      "Monitorujte SpO2, EKG, TK",
      "Podajte kyslík, ak je SpO2 < 94 % a zabezpečte intravenózny prístup",
      "Zaznamenajte 12-zvodové EKG",
      "Identifikujte a liečte reverzibilné príčiny, napr. infarkt myokardu alebo abnormality elektrolytov",
    ],
    question: "Život ohrozujúce príznaky?",
    lifeThreateningSigns: [
      "Šok",
      "Synkopa",
      "Ischémia myokardu",
      "Závažné srdcové zlyhávanie",
      "Alebo ihneď po ROSC",
    ],
    yesTitle: "Áno",
    yesDescription: "Pokračujte ako pri nestabilnej bradykardii.",
    noTitle: "Nie",
    noDescription: "Pokračujte ako pri stabilnej bradykardii.",
    infoTitle: "Poznámka",
    infoDescription:
      "Pri akomkoľvek zhoršení stavu sa vráťte k hodnoteniu ABCDE a postupujte ako pri nestabilnej bradykardii.",
  },
  en: {
    badge: "Step 1",
    title: "Bradycardia",
    description:
      "Assess the patient using the ABCDE approach and decide whether life-threatening features are present.",
    assessmentTitle: "Initial assessment",
    abcdeSteps: [
      "Assess the patient using the ABCDE approach",
      "Monitor SpO2, ECG, and blood pressure",
      "Give oxygen if SpO2 < 94 % and secure intravenous access",
      "Record a 12-lead ECG",
      "Identify and treat reversible causes, for example myocardial infarction or electrolyte abnormalities",
    ],
    question: "Life-threatening features?",
    lifeThreateningSigns: [
      "Shock",
      "Syncope",
      "Myocardial ischaemia",
      "Severe heart failure",
      "Or immediately after ROSC",
    ],
    yesTitle: "Yes",
    yesDescription: "Continue as unstable bradycardia.",
    noTitle: "No",
    noDescription: "Continue as stable bradycardia.",
    infoTitle: "Note",
    infoDescription:
      "If the patient's condition deteriorates at any time, return to ABCDE assessment and manage as unstable bradycardia.",
  },
};

const cardColors = {
  light: {
    softBackground: "#D7EDFD",
    softBorder: "#8EC3F0",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    questionBorder: "#0877D1",
    primary: "#075296",
    primaryIcon: "#0877D1",
    dangerIcon: "#ED1C24",
    text: "#10243C",
    mutedText: "#5C6574",
    primaryBackground: "#075296",
    primaryBorder: "#075296",
    primaryText: "#FFFFFF",
    primaryMutedText: "#D7E9F8",
    lightIconBackground: "#E4EFFD",
    arrowLight: "#7A8492",
  },
  dark: {
    softBackground: "#102A3F",
    softBorder: "#2F7FBE",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    questionBorder: "#2F7FBE",
    primary: "#B9DDFF",
    primaryIcon: "#164C80",
    dangerIcon: "#B7151B",
    text: "#F5F8FC",
    mutedText: "#AAB6C7",
    primaryBackground: "#0E4A80",
    primaryBorder: "#2F7FBE",
    primaryText: "#FFFFFF",
    primaryMutedText: "#D7E9F8",
    lightIconBackground: "#164C80",
    arrowLight: "#AAB6C7",
  },
};

export default function Step1Bradycardia() {
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
          styles.assessmentCard,
          {
            borderColor: colors.softBorder,
            backgroundColor: colors.softBackground,
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <View style={[styles.cardIcon, { backgroundColor: colors.primaryIcon }]}>
            <Ionicons name="pulse" size={25} color="#FFFFFF" />
          </View>
          <Text style={[styles.cardTitle, { color: colors.primary }]}>
            {text.assessmentTitle}
          </Text>
        </View>

        <View style={styles.list}>
          {text.abcdeSteps.map((item) => (
            <View key={item} style={styles.listItem}>
              <View style={[styles.bullet, { backgroundColor: colors.primary }]} />
              <Text style={[styles.listText, { color: colors.text }]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

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
            style={[styles.questionIcon, { backgroundColor: colors.dangerIcon }]}
          >
            <Ionicons name="warning" size={27} color="#FFFFFF" />
          </View>
          <Text style={[styles.questionText, { color: colors.primary }]}>
            {text.question}
          </Text>
        </View>

        <View style={styles.warningList}>
          {text.lifeThreateningSigns.map((item) => (
            <View key={item} style={styles.warningItem}>
              <View
                style={[styles.warningDot, { backgroundColor: colors.primary }]}
              />
              <Text style={[styles.warningText, { color: colors.text }]}>
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
              "/algorithms/adult-resuscitation/bradycardia/step2unstable",
            )
          }
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
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={[styles.answerTitle, { color: colors.primaryText }]}>
              {text.yesTitle}
            </Text>
            <Text
              style={[
                styles.answerDescription,
                { color: colors.primaryMutedText },
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
              "/algorithms/adult-resuscitation/bradycardia/step2stable",
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
            <Text style={[styles.answerDescription, { color: colors.mutedText }]}>
              {text.noDescription}
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color={colors.arrowLight} />
        </Pressable>
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
  assessmentCard: {
    width: "100%",
    gap: 16,
    padding: 18,
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  cardIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
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
  bullet: {
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
    gap: 12,
    padding: 18,
    borderWidth: 2,
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
  warningList: {
    gap: 7,
  },
  warningItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  warningDot: {
    width: 6,
    height: 6,
    marginTop: 7,
    borderRadius: 3,
  },
  warningText: {
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
