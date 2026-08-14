import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 4",
    title: "Pravidelný úzky QRS komplex",
    description:
      "Pri pravidelnej úzkokomplexovej tachykardii postupujte od vagových manévrov cez liečbu až po synchronizovanú kardioverziu.",
    panelTitle: "PRAVIDELNÝ",
    cardTitle: "Liečba pravidelnej úzkokomplexovej tachykardie",
    treatmentSteps: [
      "Vagové manévre",
      "Ak nie sú účinné: adenozín (ak nie je preexcitácia) 6 mg rýchly intravenózny bolus, ak nie je účinný, podajte 12 mg, ak nie je účinný, podajte 18 mg",
      "Ak nie je účinný: verapamil alebo betablokátor",
      "Ak nie je účinný: synchronizovaná kardioverzia",
    ],
    syncTitle: "Synchronizovaná kardioverzia",
    syncDescription: "Ak vagové manévre a liečba nie sú účinné",
    infoTitle: "Pripomienka",
    infoDescription:
      "Adenozín nepodávajte pri preexcitácii. Pri zhoršení stavu postupujte ako pri nestabilnej tachykardii.",
  },
  en: {
    badge: "Step 4",
    title: "Regular narrow QRS complex",
    description:
      "In regular narrow-complex tachycardia, proceed from vagal manoeuvres through drug treatment to synchronized cardioversion.",
    panelTitle: "REGULAR",
    cardTitle: "Treatment of regular narrow-complex tachycardia",
    treatmentSteps: [
      "Vagal manoeuvres",
      "If ineffective: adenosine (if there is no pre-excitation) 6 mg rapid IV bolus; if ineffective, give 12 mg; if ineffective, give 18 mg",
      "If ineffective: verapamil or a beta-blocker",
      "If ineffective: synchronized cardioversion",
    ],
    syncTitle: "Synchronized cardioversion",
    syncDescription: "If vagal manoeuvres and treatment are ineffective",
    infoTitle: "Reminder",
    infoDescription:
      "Do not give adenosine in pre-excitation. If the patient deteriorates, manage as unstable tachycardia.",
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
    mutedText: "#5C6574",
  },
  dark: {
    panelBackground: "#102A2E",
    panelBorder: "#2D626A",
    cardBackground: "#101B2B",
    listBackground: "#16263B",
    cardBorder: "#2F7FBE",
    primary: "#B9DDFF",
    text: "#F5F8FC",
    mutedText: "#B8C4D6",
  },
};

export default function Step4NarrowRegular() {
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
              <Ionicons name="pulse" size={23} color="#FFFFFF" />
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

        <Pressable
          onPress={() =>
            router.push(
              "/algorithms/adult-resuscitation/tachycardia/synccardioversion",
            )
          }
          style={({ pressed }) => [
            styles.syncCard,
            {
              borderColor: colors.cardBorder,
              backgroundColor: colors.cardBackground,
            },
            pressed && styles.pressed,
          ]}
        >
          <View style={[styles.syncIcon, { backgroundColor: colors.cardBorder }]}>
            <Ionicons name="flash" size={23} color="#FFFFFF" />
          </View>
          <View style={styles.syncTextContainer}>
            <Text style={[styles.syncTitle, { color: colors.primary }]}>
              {text.syncTitle}
            </Text>
            <Text style={[styles.syncDescription, { color: colors.mutedText }]}>
              {text.syncDescription}
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color={colors.primary} />
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
    borderRadius: 10,
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
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 23,
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
  syncCard: {
    width: "100%",
    minHeight: 86,
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
  syncIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  syncTextContainer: {
    flex: 1,
    gap: 4,
  },
  syncTitle: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  syncDescription: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
