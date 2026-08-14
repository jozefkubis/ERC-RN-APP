import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 4",
    title: "Nepravidelný úzky QRS komplex",
    description:
      "Pri nepravidelnej úzkokomplexovej tachykardii myslite najmä na fibriláciu predsiení a kontrolu frekvencie srdca.",
    panelTitle: "NEPRAVIDELNÝ",
    cardTitle: "Pravdepodobná fibrilácia predsiení",
    treatmentSteps: [
      "EF > 40 %: kontrolujte frekvenciu srdca pomocou betablokátora, verapamilu, diltiazemu alebo digoxínu",
      "EF < 40 %: zvážte betablokátor alebo digoxín",
      "Antikoagulačná liečba, ak arytmia trvá > 24 hodín",
    ],
    infoTitle: "Pripomienka",
    infoDescription:
      "Pri zhoršení stavu alebo výskyte život ohrozujúcich príznakov postupujte ako pri nestabilnej tachykardii.",
  },
  en: {
    badge: "Step 4",
    title: "Irregular narrow QRS complex",
    description:
      "In irregular narrow-complex tachycardia, consider atrial fibrillation and heart rate control.",
    panelTitle: "IRREGULAR",
    cardTitle: "Likely atrial fibrillation",
    treatmentSteps: [
      "EF > 40%: control heart rate with a beta-blocker, verapamil, diltiazem or digoxin",
      "EF < 40%: consider a beta-blocker or digoxin",
      "Anticoagulation if the arrhythmia has lasted > 24 hours",
    ],
    infoTitle: "Reminder",
    infoDescription:
      "If the patient deteriorates or life-threatening features appear, manage as unstable tachycardia.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#D7F2F5",
    panelBorder: "#B6E3EA",
    cardBackground: "#FFFFFF",
    listBackground: "#F5FAFF",
    cardBorder: "#075296",
    primary: "#075296",
    text: "#10243C",
  },
  dark: {
    panelBackground: "#102A2E",
    panelBorder: "#2D626A",
    cardBackground: "#101B2B",
    listBackground: "#16263B",
    cardBorder: "#2F7FBE",
    primary: "#B9DDFF",
    text: "#F5F8FC",
  },
};

export default function Step4NarrowIrregular() {
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
            styles.decisionCard,
            {
              borderColor: colors.cardBorder,
              backgroundColor: colors.cardBackground,
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <View
              style={[styles.cardIcon, { backgroundColor: colors.cardBorder }]}
            >
              <Ionicons name="git-branch" size={23} color="#FFFFFF" />
            </View>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              {text.cardTitle}
            </Text>
          </View>

          <View style={styles.list}>
            {text.treatmentSteps.map((item) => (
              <View
                key={item}
                style={[
                  styles.listItem,
                  { backgroundColor: colors.listBackground },
                ]}
              >
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
  decisionCard: {
    width: "100%",
    gap: 16,
    padding: 16,
    borderWidth: 2,
    borderRadius: 28,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
  },
  list: {
    gap: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 12,
    borderRadius: 10,
    borderCurve: "continuous",
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
});
