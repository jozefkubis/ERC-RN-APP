import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 4",
    title: "Nepravidelný široký QRS komplex",
    description:
      "Pri nepravidelnej širokokomplexovej tachykardii zhodnoťte možné príčiny a vyberte liečbu podľa najpravdepodobnejšieho mechanizmu.",
    panelTitle: "NEPRAVIDELNÝ",
    cardTitle: "Možnosti zahŕňajú:",
    preexcitedAfTitle: "Fibrilácia predsiení s preexcitáciou",
    preexcitedAfDescription: "Zvážte prokaínamid alebo kardioverziu.",
    polymorphicVtTitle: "Polymorfná KT s predĺženým QT intervalom",
    polymorphicSteps: [
      "Podajte Mg2+ 8 mmol intravenózne počas 10 minút",
      "Zvážte izoprenalín alebo dočasnú kardiostimuláciu na zvýšenie srdcovej frekvencie",
      "Vyhnite sa použitiu amiodarónu",
    ],
    infoTitle: "Pripomienka",
    infoDescription:
      "Ak je pacient nestabilný alebo sa stav zhoršuje, pripravte synchronizovanú kardioverziu a postupujte podľa nestabilnej tachykardie.",
  },
  en: {
    badge: "Step 4",
    title: "Irregular broad QRS complex",
    description:
      "In irregular broad-complex tachycardia, assess possible causes and choose treatment according to the most likely mechanism.",
    panelTitle: "IRREGULAR",
    cardTitle: "Options include:",
    preexcitedAfTitle: "Atrial fibrillation with pre-excitation",
    preexcitedAfDescription: "Consider procainamide or cardioversion.",
    polymorphicVtTitle: "Polymorphic VT with prolonged QT interval",
    polymorphicSteps: [
      "Give Mg2+ 8 mmol IV over 10 minutes",
      "Consider isoprenaline or temporary pacing to increase heart rate",
      "Avoid using amiodarone",
    ],
    infoTitle: "Reminder",
    infoDescription:
      "If the patient is unstable or deteriorating, prepare synchronized cardioversion and follow the unstable tachycardia pathway.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#D7F2F5",
    panelBorder: "#B6E3EA",
    cardBackground: "#FFFFFF",
    blockBackground: "#F5FAFF",
    cardBorder: "#075296",
    primary: "#075296",
    text: "#10243C",
    iconBackground: "#E4EFFD",
  },
  dark: {
    panelBackground: "#102A2E",
    panelBorder: "#2D626A",
    cardBackground: "#101B2B",
    blockBackground: "#16263B",
    cardBorder: "#2F7FBE",
    primary: "#B9DDFF",
    text: "#F5F8FC",
    iconBackground: "#164C80",
  },
};

export default function Step4WideIrregular() {
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

          <View
            style={[
              styles.recommendationBlock,
              { backgroundColor: colors.blockBackground },
            ]}
          >
            <View style={styles.recommendationHeader}>
              <View
                style={[
                  styles.recommendationIcon,
                  { backgroundColor: colors.iconBackground },
                ]}
              >
                <Ionicons name="flash" size={22} color={colors.primary} />
              </View>
              <Text
                style={[styles.recommendationTitle, { color: colors.primary }]}
              >
                {text.preexcitedAfTitle}
              </Text>
            </View>
            <View style={styles.listItem}>
              <View style={[styles.dot, { backgroundColor: colors.primary }]} />
              <Text
                style={[
                  styles.recommendationDescription,
                  { color: colors.text },
                ]}
              >
                {text.preexcitedAfDescription}
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.recommendationBlock,
              { backgroundColor: colors.blockBackground },
            ]}
          >
            <View style={styles.recommendationHeader}>
              <View
                style={[
                  styles.recommendationIcon,
                  { backgroundColor: colors.iconBackground },
                ]}
              >
                <Ionicons name="pulse" size={22} color={colors.primary} />
              </View>
              <Text
                style={[styles.recommendationTitle, { color: colors.primary }]}
              >
                {text.polymorphicVtTitle}
              </Text>
            </View>
            <View style={styles.list}>
              {text.polymorphicSteps.map((item) => (
                <View key={item} style={styles.listItem}>
                  <View
                    style={[styles.dot, { backgroundColor: colors.primary }]}
                  />
                  <Text style={[styles.recommendationText, { color: colors.text }]}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
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
  recommendationBlock: {
    gap: 10,
    padding: 14,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  recommendationIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  recommendationHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  recommendationTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 21,
  },
  recommendationText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  recommendationDescription: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  list: {
    gap: 8,
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
});
