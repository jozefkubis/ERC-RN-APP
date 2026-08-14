import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";
import TachyRegularityButtons from "../../ui/TachyRegularityButtons";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Široký QRS komplex",
    description:
      "Pri širokom QRS komplexe zhodnoťte, či je rytmus pravidelný alebo nepravidelný.",
    panelTitle: "STABILNÝ",
    rhythmText: "Zhodnoťte pravidelnosť rytmu",
    infoTitle: "Pripomienka",
    infoDescription:
      "Ak sa stav pacienta zhorší alebo sa objavia život ohrozujúce príznaky, postupujte ako pri nestabilnej tachykardii.",
  },
  en: {
    badge: "Step 3",
    title: "Broad QRS complex",
    description:
      "For a broad QRS complex, assess whether the rhythm is regular or irregular.",
    panelTitle: "STABLE",
    rhythmText: "Assess rhythm regularity",
    infoTitle: "Reminder",
    infoDescription:
      "If the patient's condition deteriorates or life-threatening features appear, manage as unstable tachycardia.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#D7F2F5",
    panelBorder: "#B6E3EA",
    cardBackground: "#FFFFFF",
    cardBorder: "#0877D1",
    primary: "#075296",
    danger: "#ED1C24",
    iconBackground: "#E4EFFD",
  },
  dark: {
    panelBackground: "#102A2E",
    panelBorder: "#2D626A",
    cardBackground: "#101B2B",
    cardBorder: "#2F7FBE",
    primary: "#B9DDFF",
    danger: "#D33B41",
    iconBackground: "#164C80",
  },
};

export default function Step3TachyWide() {
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
        <Text style={[styles.panelTitle, { color: colors.primary }]}>
          {text.panelTitle}
        </Text>

        <View
          style={[
            styles.rhythmCard,
            {
              borderColor: colors.cardBorder,
              backgroundColor: colors.cardBackground,
            },
          ]}
        >
          <View
            style={[
              styles.rhythmIcon,
              { backgroundColor: colors.iconBackground },
            ]}
          >
            <Ionicons name="pulse" size={28} color={colors.danger} />
          </View>
          <Text style={[styles.rhythmText, { color: colors.primary }]}>
            {text.rhythmText}
          </Text>
        </View>

        <TachyRegularityButtons
          onIrregularPress={() =>
            router.push(
              "/algorithms/adult-resuscitation/tachycardia/step4wideirregular",
            )
          }
          onRegularPress={() =>
            router.push(
              "/algorithms/adult-resuscitation/tachycardia/step4wideregular",
            )
          }
        />
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
  rhythmCard: {
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
  rhythmIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  rhythmText: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
    textAlign: "center",
  },
});
