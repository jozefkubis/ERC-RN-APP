import { useSettings } from "@/src/context/settings-context";
import FlowConnector from "@/src/components/ui/FlowConnector";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Nestabilná tachykardia",
    description:
      "Pri prítomnosti život ohrozujúcich príznakov postupujte urgentne a pripravte synchronizovanú kardioverziu.",
    panelTitle: "NESTABILNÝ",
    cardioversionTitle: "Synchronizovaná kardioverzia",
    cardioversionSteps: [
      "Až do 3 pokusov",
      "Sedácia / anestézia, ak je pacient pri vedomí",
    ],
    transitionText: "Ak neúspešná",
    medicationTitle: "Antiarytmická liečba",
    medicationSteps: [
      "Amiodarón 300 mg intravenózne počas 10 - 20 minút",
      "alebo prokaínamid 10 - 15 mg kg⁻¹ (max. 1 g) počas 20 minút",
      "Opakujte synchronizovanú kardioverziu",
    ],
    infoTitle: "Pripomienka",
    infoDescription:
      "Počas celého postupu monitorujte pacienta, zabezpečte kyslík a intravenózny prístup a priebežne prehodnocujte stav podľa ABCDE.",
  },
  en: {
    badge: "Step 2",
    title: "Unstable tachycardia",
    description:
      "If life-threatening features are present, act urgently and prepare synchronised cardioversion.",
    panelTitle: "UNSTABLE",
    cardioversionTitle: "Synchronised cardioversion",
    cardioversionSteps: [
      "Up to 3 attempts",
      "Sedation / anaesthesia if the patient is conscious",
    ],
    transitionText: "If unsuccessful",
    medicationTitle: "Antiarrhythmic treatment",
    medicationSteps: [
      "Amiodarone 300 mg intravenously over 10 - 20 minutes",
      "or procainamide 10 - 15 mg kg⁻¹ (max. 1 g) over 20 minutes",
      "Repeat synchronised cardioversion",
    ],
    infoTitle: "Reminder",
    infoDescription:
      "Throughout the whole sequence, monitor the patient, provide oxygen and intravenous access, and reassess continuously using ABCDE.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#FDE3E4",
    panelBorder: "#F5B8BB",
    danger: "#ED1C24",
    cardBackground: "#FFFFFF",
    cardBorder: "#075296",
    primary: "#075296",
    text: "#10243C",
    medicationIconBackground: "#E4EFFD",
    arrow: "#075296",
  },
  dark: {
    panelBackground: "#2B1013",
    panelBorder: "#653035",
    danger: "#D33B41",
    cardBackground: "#101B2B",
    cardBorder: "#2F7FBE",
    primary: "#B9DDFF",
    text: "#F5F8FC",
    medicationIconBackground: "#164C80",
    arrow: "#B9DDFF",
  },
};

export default function Step2TachyUnstable() {
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
          <View style={[styles.panelIcon, { backgroundColor: colors.danger }]}>
            <Ionicons name="warning" size={24} color="#FFFFFF" />
          </View>
          <Text style={[styles.panelTitle, { color: colors.danger }]}>
            {text.panelTitle}
          </Text>
        </View>

        <Pressable
          style={styles.flowContainer}
          onPress={() =>
            router.push(
              "/algorithms/adult-resuscitation/tachycardia/synccardioversion",
            )
          }
        >
          <View
            style={[
              styles.actionCard,
              {
                borderColor: colors.cardBorder,
                backgroundColor: colors.cardBackground,
              },
            ]}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.cardIcon, { backgroundColor: colors.primary }]}>
                <Ionicons name="flash" size={22} color="#FFFFFF" />
              </View>
              <Text style={[styles.cardTitle, { color: colors.primary }]}>
                {text.cardioversionTitle}
              </Text>
            </View>

            <View style={styles.list}>
              {text.cardioversionSteps.map((item) => (
                <View key={item} style={styles.listItem}>
                  <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                  <Text style={[styles.listText, { color: colors.text }]}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.actionArrow}>
              <Ionicons name="arrow-forward" size={24} color={colors.arrow} />
            </View>
          </View>

          <View style={styles.transition}>
            <Text style={[styles.transitionText, { color: colors.primary }]}>
              {text.transitionText}
            </Text>
            <FlowConnector />
          </View>

          <View
            style={[
              styles.medicationCard,
              {
                borderColor: colors.cardBorder,
                backgroundColor: colors.cardBackground,
              },
            ]}
          >
            <View style={styles.cardHeader}>
              <View
                style={[
                  styles.medicationIcon,
                  { backgroundColor: colors.medicationIconBackground },
                ]}
              >
                <Ionicons name="medkit" size={22} color={colors.primary} />
              </View>
              <Text style={[styles.medicationTitle, { color: colors.primary }]}>
                {text.medicationTitle}
              </Text>
            </View>

            <View style={styles.list}>
              {text.medicationSteps.map((item) => (
                <View key={item} style={styles.listItem}>
                  <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                  <Text style={[styles.listText, { color: colors.text }]}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </Pressable>
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
    paddingRight: 52,
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  actionArrow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 16,
    justifyContent: "center",
  },
  medicationCard: {
    width: "100%",
    gap: 15,
    padding: 16,
    borderWidth: 2,
    borderRadius: 28,
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
  medicationIcon: {
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
  medicationTitle: {
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
  transition: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 4,
  },
  transitionText: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },
});
