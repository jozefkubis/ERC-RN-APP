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
    title: "Stabilná tachykardia",
    description:
      "Ak pacient nemá život ohrozujúce príznaky, zhodnoťte šírku QRS komplexu a pokračujte podľa výsledku.",
    panelTitle: "STABILNÝ",
    qrsText: "Zhodnoťte QRS komplex",
    wideTitle: "Široký",
    wideDescription: "≥ 0,12 s",
    narrowTitle: "Úzky",
    narrowDescription: "< 0,12 s",
    infoTitle: "Pripomienka",
    infoDescription:
      "Pri akomkoľvek zhoršení stavu sa vráťte k hodnoteniu život ohrozujúcich príznakov a postupujte ako pri nestabilnej tachykardii.",
  },
  en: {
    badge: "Step 2",
    title: "Stable tachycardia",
    description:
      "If there are no life-threatening features, assess QRS width and continue according to the result.",
    panelTitle: "STABLE",
    qrsText: "Assess QRS complex",
    wideTitle: "Broad",
    wideDescription: "≥ 0.12 s",
    narrowTitle: "Narrow",
    narrowDescription: "< 0.12 s",
    infoTitle: "Reminder",
    infoDescription:
      "If the patient's condition deteriorates at any time, reassess for life-threatening features and manage as unstable tachycardia.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#D7F2F5",
    panelBorder: "#B6E3EA",
    cardBackground: "#FFFFFF",
    cardBorder: "#075296",
    primary: "#075296",
    danger: "#ED1C24",
    text: "#10243C",
    iconBackground: "#E4EFFD",
  },
  dark: {
    panelBackground: "#102A2E",
    panelBorder: "#2D626A",
    cardBackground: "#101B2B",
    cardBorder: "#2F7FBE",
    primary: "#B9DDFF",
    danger: "#D33B41",
    text: "#F5F8FC",
    iconBackground: "#164C80",
  },
};

export default function Step2TachyStable() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = cardColors[themeMode];

  function handleWideQrsPress() {
    router.push("/algorithms/adult-resuscitation/tachycardia/step3wide");
  }

  function handleNarrowQrsPress() {
    router.push("/algorithms/adult-resuscitation/tachycardia/step3narrow");
  }

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
        <Text style={[styles.panelTitle, { color: colors.primary }]}>
          {text.panelTitle}
        </Text>

        <View
          style={[
            styles.qrsCard,
            {
              borderColor: colors.cardBorder,
              backgroundColor: colors.cardBackground,
            },
          ]}
        >
          <View
            style={[
              styles.monitorIcon,
              { backgroundColor: colors.iconBackground },
            ]}
          >
            <Ionicons name="pulse" size={28} color={colors.danger} />
          </View>
          <Text style={[styles.qrsText, { color: colors.primary }]}>
            {text.qrsText}
          </Text>
        </View>

        <View style={styles.choiceRow}>
          <Pressable
            onPress={handleWideQrsPress}
            style={({ pressed }) => [
              styles.choiceCard,
              styles.choiceCardLeft,
              {
                borderColor: colors.cardBorder,
                backgroundColor: colors.cardBackground,
              },
              pressed && styles.pressed,
            ]}
          >
            <View
              style={[
                styles.choiceIcon,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Ionicons name="resize" size={23} color={colors.primary} />
            </View>
            <View style={styles.choiceTextContainer}>
              <Text style={[styles.choiceTitle, { color: colors.text }]}>
                {text.wideTitle}
              </Text>
              <Text
                style={[styles.choiceDescription, { color: colors.primary }]}
              >
                {text.wideDescription}
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={22} color={colors.primary} />
          </Pressable>

          <Pressable
            onPress={handleNarrowQrsPress}
            style={({ pressed }) => [
              styles.choiceCard,
              styles.choiceCardRight,
              {
                borderColor: colors.cardBorder,
                backgroundColor: colors.cardBackground,
              },
              pressed && styles.pressed,
            ]}
          >
            <View
              style={[
                styles.choiceIcon,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Ionicons name="contract" size={23} color={colors.primary} />
            </View>
            <View style={styles.choiceTextContainer}>
              <Text style={[styles.choiceTitle, { color: colors.text }]}>
                {text.narrowTitle}
              </Text>
              <Text
                style={[styles.choiceDescription, { color: colors.primary }]}
              >
                {text.narrowDescription}
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={22} color={colors.primary} />
          </Pressable>
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
  stablePanel: {
    width: "100%",
    gap: 16,
    padding: 18,
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  panelTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  qrsCard: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 320,
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 14,
    borderCurve: "continuous",
  },
  monitorIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  qrsText: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
    textAlign: "center",
  },
  choiceRow: {
    width: "100%",
    gap: 10,
  },
  choiceCard: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  choiceCardLeft: {
    borderLeftWidth: 5,
  },
  choiceCardRight: {
    borderRightWidth: 5,
  },
  choiceIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  choiceTextContainer: {
    flex: 1,
    gap: 4,
  },
  choiceTitle: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  choiceDescription: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
