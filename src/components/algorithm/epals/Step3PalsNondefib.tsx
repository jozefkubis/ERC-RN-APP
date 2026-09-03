import { useSettings } from "@/src/context/settings-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import H4T4Button from "../../ui/H4T4Button";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";
import ParalelThinkingALS from "../adult-resuscitation/ParalelThinkingALS";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Nedefibrilovateľný rytmus",
    description:
      "Pri bradykardii so slabou perfúziou, asystólii alebo BEA nepodávajte výboj. Okamžite pokračujte v KPR a podajte adrenalín.",
    adrenalineLabel: "Okamžitý postup",
    adrenalineTitle: "IV / IO adrenalín čo najskôr",
    adrenalineDescription:
      "10 mcg/kg, max. 1 mg. Po podaní prepláchnite vstup a neprerušujte kompresie zbytočne.",
    cprTitle: "Ihneď pokračujte v KPR 2 minúty",
    cprDescription:
      "Pokračujte v kompresiách a ventilácii 15:2. Súbežne hľadajte a riešte reverzibilné príčiny.",
    nonDefibInfoTitle: "Pre nedefibrilovateľné rytmy",
    nonDefibRhythmItems: [
      "Nedefibrilovateľné rytmy: bradykardia so slabou perfúziou, asystólia, BEA.",
      "Zabezpečte IV/IO vstup; ak je IV vstup ťažký, prejdite včas na IO.",
      "Adrenalín 10 mcg/kg IV/IO, max. 1 mg, podajte čo najskôr.",
      "Adrenalín opakujte každé 4 minúty, teda každý druhý 2-minútový cyklus.",
      "Rytmus zhodnoťte každé 2 minúty, prerušenie má trvať menej ako 5 sekúnd.",
    ],
    nextTitle: "Po 2 minútach",
    nextDescription: "Znovu zhodnoťte rytmus",
    infoTitle: "Dôležité",
    infoDescription:
      "Pri nedefibrilovateľnom rytme nepodávajte výboj. Prioritou je kvalitná KPR, čo najskorší adrenalín, ventilácia kyslíkom a liečba reverzibilných príčin.",
    calculatorButton: "Kalkulačka dávok/i-gel",
  },
  en: {
    badge: "Step 3",
    title: "Non-shockable rhythm",
    description:
      "For bradycardia with poor perfusion, asystole, or PEA, do not shock. Immediately continue CPR and give adrenaline.",
    adrenalineLabel: "Immediate action",
    adrenalineTitle: "IV / IO adrenaline as soon as possible",
    adrenalineDescription:
      "10 mcg/kg, max. 1 mg. Flush the line after administration and avoid unnecessary interruption to compressions.",
    cprTitle: "Immediately resume CPR for 2 minutes",
    cprDescription:
      "Continue compressions and ventilation 15:2. Search for and treat reversible causes in parallel.",
    nonDefibInfoTitle: "For non-shockable rhythms",
    nonDefibRhythmItems: [
      "Non-shockable rhythms: bradycardia with poor perfusion, asystole, PEA.",
      "Establish IV/IO access; if IV access is difficult, move early to IO.",
      "Give adrenaline 10 mcg/kg IV/IO, max. 1 mg, as soon as possible.",
      "Repeat adrenaline every 4 minutes, meaning every second 2-minute cycle.",
      "Reassess rhythm every 2 minutes; interruption should be less than 5 seconds.",
    ],
    nextTitle: "After 2 minutes",
    nextDescription: "Reassess the rhythm",
    infoTitle: "Important",
    infoDescription:
      "Do not deliver a shock for a non-shockable rhythm. Prioritise high-quality CPR, early adrenaline, oxygen ventilation, and treatment of reversible causes.",
    calculatorButton: "Dose/i-gel size calculator",
  },
};

const cardColors = {
  light: {
    actionBackground: "#FFFFFF",
    actionBorder: "#075296",
    actionIconBackground: "#E4EFFD",
    actionIcon: "#075296",
    actionLabel: "#075296",
    actionTitle: "#10243C",
    actionDescription: "#5C6574",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    cardTitle: "#10243C",
    cardDescription: "#5C6574",
    cprIcon: "#ED1C24",
    infoBackground: "#FFF6DC",
    infoBorder: "#F0DEB4",
    infoIconBackground: "#FFFFFF",
    infoTitle: "#075296",
    infoText: "#24425F",
    bullet: "#075296",
    primaryBackground: "#075296",
    primaryBorder: "#075296",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    calculatorBackground: "#075296",
    calculatorBorder: "#075296",
    calculatorText: "#FFFFFF",
    nextIcon: "#0877D1",
  },
  dark: {
    actionBackground: "#101B2B",
    actionBorder: "#2F7FBE",
    actionIconBackground: "#164C80",
    actionIcon: "#B9DDFF",
    actionLabel: "#B9DDFF",
    actionTitle: "#F5F8FC",
    actionDescription: "#AAB6C7",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    cardTitle: "#F5F8FC",
    cardDescription: "#AAB6C7",
    cprIcon: "#B7151B",
    infoBackground: "#2B2414",
    infoBorder: "#6A5727",
    infoIconBackground: "#101B2B",
    infoTitle: "#F6D38A",
    infoText: "#E7D7A8",
    bullet: "#F6D38A",
    primaryBackground: "#0E4A80",
    primaryBorder: "#2F7FBE",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    calculatorBackground: "#0E4A80",
    calculatorBorder: "#2F7FBE",
    calculatorText: "#FFFFFF",
    nextIcon: "#164C80",
  },
};

export default function Step3PalsNondefib() {
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
          styles.adrenalineCard,
          {
            borderColor: colors.actionBorder,
            backgroundColor: colors.actionBackground,
          },
        ]}
      >
        <View
          style={[
            styles.adrenalineIcon,
            {
              borderColor: colors.actionBorder,
              backgroundColor: colors.actionIconBackground,
            },
          ]}
        >
          <Ionicons
            name="flash-off-sharp"
            size={28}
            color={colors.actionIcon}
          />
        </View>
        <View style={styles.adrenalineTextContainer}>
          <Text style={[styles.adrenalineLabel, { color: colors.actionLabel }]}>
            {text.adrenalineLabel}
          </Text>
          <Text style={[styles.adrenalineTitle, { color: colors.actionTitle }]}>
            {text.adrenalineTitle}
          </Text>
          <Text
            style={[
              styles.adrenalineDescription,
              { color: colors.actionDescription },
            ]}
          >
            {text.adrenalineDescription}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.cprCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <View style={[styles.cprIcon, { backgroundColor: colors.cprIcon }]}>
          <MaterialCommunityIcons
            name="heart-pulse"
            size={28}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.cprTextContainer}>
          <Text style={[styles.cprTitle, { color: colors.cardTitle }]}>
            {text.cprTitle}
          </Text>
          <Text
            style={[styles.cprDescription, { color: colors.cardDescription }]}
          >
            {text.cprDescription}
          </Text>
        </View>
      </View>

      <ParalelThinkingALS />

      <View
        style={[
          styles.nonDefibInfoCard,
          {
            borderColor: colors.infoBorder,
            backgroundColor: colors.infoBackground,
          },
        ]}
      >
        <View style={styles.nonDefibInfoHeader}>
          <View
            style={[
              styles.nonDefibInfoIcon,
              { backgroundColor: colors.infoIconBackground },
            ]}
          >
            <Ionicons name="flash-off-sharp" size={18} color="#075296" />
          </View>
          <Text style={[styles.nonDefibInfoTitle, { color: colors.infoTitle }]}>
            {text.nonDefibInfoTitle}
          </Text>
        </View>

        <View style={styles.nonDefibInfoList}>
          {text.nonDefibRhythmItems.map((item) => (
            <View key={item} style={styles.nonDefibInfoRow}>
              <View
                style={[styles.bullet, { backgroundColor: colors.bullet }]}
              />
              <Text
                style={[styles.nonDefibInfoText, { color: colors.infoText }]}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pals/calculatorPals")}
          style={({ pressed }) => [
            styles.calculatorButton,
            {
              backgroundColor: colors.calculatorBackground,
              borderColor: colors.calculatorBorder,
            },
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name="calculator-outline"
            size={18}
            color={colors.calculatorText}
          />
          <Text
            style={[
              styles.calculatorButtonText,
              { color: colors.calculatorText },
            ]}
          >
            {text.calculatorButton}
          </Text>
        </Pressable>
      </View>

      <H4T4Button />

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/algorithms/epals/pals/step2")}
        style={({ pressed }) => [
          styles.nextCard,
          {
            borderColor: colors.primaryBorder,
            backgroundColor: colors.primaryBackground,
          },
          pressed && styles.pressed,
        ]}
      >
        <View style={[styles.nextIcon, { backgroundColor: colors.nextIcon }]}>
          <Ionicons name="timer-outline" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.nextTextContainer}>
          <Text style={[styles.nextTitle, { color: colors.primaryTitle }]}>
            {text.nextTitle}
          </Text>
          <Text
            style={[
              styles.nextDescription,
              { color: colors.primaryDescription },
            ]}
          >
            {text.nextDescription}
          </Text>
        </View>
        <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
      </Pressable>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="alert-circle-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  adrenalineCard: {
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
  adrenalineIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 27,
  },
  adrenalineTextContainer: {
    flex: 1,
    gap: 4,
  },
  adrenalineLabel: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  adrenalineTitle: {
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 28,
  },
  adrenalineDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  cprCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cprIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  cprTextContainer: {
    flex: 1,
    gap: 4,
  },
  cprTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  cprDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  nonDefibInfoCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },

  calculatorButton: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 8,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  calculatorButtonText: {
    fontSize: 14,
    fontWeight: "800",
  },
  nonDefibInfoHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  nonDefibInfoIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 17,
  },
  nonDefibInfoTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  nonDefibInfoList: {
    width: "100%",
    gap: 9,
  },
  nonDefibInfoRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 8,
  },
  nonDefibInfoText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "700",
  },
  nextCard: {
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
  nextIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  nextTextContainer: {
    flex: 1,
    gap: 3,
  },
  nextTitle: {
    fontSize: 18,
    fontWeight: "800",
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
