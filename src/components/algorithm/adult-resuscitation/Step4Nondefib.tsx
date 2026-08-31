import { useSettings } from "@/src/context/settings-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import H4T4Button from "../../ui/H4T4Button";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";
import ParalelThinkingALS from "./ParalelThinkingALS";

const pageText = {
  sk: {
    badge: "Krok 4",
    title: "Nedefibrilovateľný rytmus",
    description:
      "Pri BEA alebo asystólii nepodávajte výboj. Okamžite pokračujte v kvalitnej KPR a riešte príčinu zastavenia obehu.",
    noShockLabel: "Okamžitý postup",
    noShockTitle: "Bez výboja",
    noShockDescription:
      "Defibrilácia nie je indikovaná. Minimalizujte prestávky a hneď sa vráťte ku kompresiám.",
    actionItems: [
      {
        title: "KPR 2 minúty",
        description: "Pokračujte bez zbytočného prerušenia kompresií.",
        iconName: "heart-pulse" as const,
        iconFamily: "material" as const,
      },
      {
        title: "Adrenalín 1 mg",
        description: "Podajte čo najskôr a opakujte každé 3-5 minút.",
        iconName: "medical-outline" as const,
        iconFamily: "ion" as const,
      },
    ],
    actionTitle: "Čo urobiť počas cyklu",
    nextTitle: "Po 2 minútach",
    nextDescription: "Znovu zhodnoťte rytmus",
    infoTitle: "Dôležité",
    infoDescription:
      "Pri asystólii nie je potrebné prerušiť kompresie iba kvôli kontrole rytmu. Pokračujte v KPR a kontrolujte rytmus v pravidelných cykloch.",
  },
  en: {
    badge: "Step 4",
    title: "Non-shockable rhythm",
    description:
      "For PEA or asystole, do not shock. Immediately continue high-quality CPR and treat the cause of cardiac arrest.",
    noShockLabel: "Immediate action",
    noShockTitle: "No shock",
    noShockDescription:
      "Defibrillation is not indicated. Minimise pauses and return to compressions immediately.",
    actionItems: [
      {
        title: "CPR for 2 minutes",
        description: "Continue without unnecessary interruption to compressions.",
        iconName: "heart-pulse" as const,
        iconFamily: "material" as const,
      },
      {
        title: "Adrenaline 1 mg",
        description: "Give as soon as possible and repeat every 3-5 minutes.",
        iconName: "medical-outline" as const,
        iconFamily: "ion" as const,
      },
    ],
    actionTitle: "What to do during the cycle",
    nextTitle: "After 2 minutes",
    nextDescription: "Reassess the rhythm",
    infoTitle: "Important",
    infoDescription:
      "In asystole, do not interrupt compressions only to check the rhythm. Continue CPR and check the rhythm in regular cycles.",
  },
};

const cardColors = {
  light: {
    primaryBackground: "#075296",
    primaryBorder: "#075296",
    primaryLabel: "#B9DDFF",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    warningIcon: "#ED1C24",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    cardTitle: "#10243C",
    cardDescription: "#5C6574",
    softIcon: "#E4EFFD",
    softIconText: "#075296",
    nextIcon: "#0877D1",
  },
  dark: {
    primaryBackground: "#0E4A80",
    primaryBorder: "#2F7FBE",
    primaryLabel: "#B9DDFF",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    warningIcon: "#B7151B",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    cardTitle: "#F5F8FC",
    cardDescription: "#AAB6C7",
    softIcon: "#164C80",
    softIconText: "#B9DDFF",
    nextIcon: "#164C80",
  },
};

export default function Step4Nondefib() {
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
          styles.noShockCard,
          {
            borderColor: colors.primaryBorder,
            backgroundColor: colors.primaryBackground,
          },
        ]}
      >
        <View
          style={[styles.noShockIcon, { backgroundColor: colors.warningIcon }]}
        >
          <Ionicons name="flash-off-sharp" size={30} color="#FFFFFF" />
        </View>
        <View style={styles.noShockTextContainer}>
          <Text style={[styles.noShockLabel, { color: colors.primaryLabel }]}>
            {text.noShockLabel}
          </Text>
          <Text style={[styles.noShockTitle, { color: colors.primaryTitle }]}>
            {text.noShockTitle}
          </Text>
          <Text
            style={[
              styles.noShockDescription,
              { color: colors.primaryDescription },
            ]}
          >
            {text.noShockDescription}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.actionSummaryCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <View style={styles.actionSummaryHeader}>
          <View
            style={[styles.actionIcon, { backgroundColor: colors.softIcon }]}
          >
            <MaterialCommunityIcons
              name="heart-pulse"
              size={24}
              color={colors.softIconText}
            />
          </View>
          <Text
            style={[styles.actionSummaryTitle, { color: colors.cardTitle }]}
          >
            {text.actionTitle}
          </Text>
        </View>

        <View style={styles.actionList}>
          {text.actionItems.map((item) => (
            <View key={item.title} style={styles.actionRow}>
              {item.iconFamily === "material" ? (
                <MaterialCommunityIcons
                  name={item.iconName}
                  size={18}
                  color={colors.softIconText}
                />
              ) : (
                <Ionicons
                  name={item.iconName}
                  size={18}
                  color={colors.softIconText}
                />
              )}
              <View style={styles.actionTextContainer}>
                <Text style={[styles.actionTitle, { color: colors.cardTitle }]}>
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.actionDescription,
                    { color: colors.cardDescription },
                  ]}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.nextCard,
          {
            borderColor: colors.primaryBorder,
            backgroundColor: colors.primaryBackground,
          },
          pressed && styles.pressed,
        ]}
        onPress={() => router.push("/algorithms/adult-resuscitation/als/step3")}
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

      <H4T4Button />
      <ParalelThinkingALS />

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
  noShockCard: {
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
  noShockIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
  },
  noShockTextContainer: {
    flex: 1,
    gap: 4,
  },
  noShockLabel: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  noShockTitle: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  noShockDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  actionList: {
    width: "100%",
    gap: 12,
  },
  actionSummaryCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  actionSummaryHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  actionIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  actionSummaryTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  actionRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  actionTextContainer: {
    flex: 1,
    gap: 4,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  actionDescription: {
    fontSize: 13,
    lineHeight: 19,
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
