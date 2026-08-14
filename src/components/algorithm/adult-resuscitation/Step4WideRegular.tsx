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
    title: "Pravidelný široký QRS komplex",
    description:
      "Pri pravidelnej širokokomplexovej tachykardii zhodnoťte mechanizmus arytmie, riziko sedácie a pridružené ochorenie srdca.",
    panelTitle: "PRAVIDELNÝ",
    cardTitle:
      "Známa KT, vagové manévre a zlyhanie adenozínu, neistý mechanizmus arytmie alebo známe alebo predpokladané ochorenie srdca",
    procainamide:
      "Pri vysokom riziku sedácie / anestézie podajte prokaínamid 10 - 15 mg kg⁻¹ počas 20 minút.",
    amiodarone:
      "Ak je prokaínamid nedostupný alebo kontraindikovaný (napr. závažné srdcové zlyhávanie, akútny IM alebo terminálne štádium ochorenia obličiek), podajte amiodarón 300 mg intravenózne počas 10 - 60 minút, následne 900 mg počas 24 hodín.",
    syncTitle: "Synchronizovaná kardioverzia",
    syncDescription: "Pri zlyhaní liečby alebo zhoršení stavu",
    infoTitle: "Pripomienka",
    infoDescription:
      "Počas podávania antiarytmika pokračujte v monitorovaní EKG, tlaku krvi a klinického stavu pacienta.",
  },
  en: {
    badge: "Step 4",
    title: "Regular broad QRS complex",
    description:
      "In regular broad-complex tachycardia, assess the arrhythmia mechanism, sedation risk and associated structural heart disease.",
    panelTitle: "REGULAR",
    cardTitle:
      "Known VT, vagal manoeuvres and adenosine failure, uncertain arrhythmia mechanism, or known or suspected structural heart disease",
    procainamide:
      "If sedation / anaesthesia is high risk, give procainamide 10 - 15 mg kg⁻¹ over 20 minutes.",
    amiodarone:
      "If procainamide is unavailable or contraindicated (for example severe heart failure, acute MI or end-stage kidney disease), give amiodarone 300 mg IV over 10 - 60 minutes, then 900 mg over 24 hours.",
    syncTitle: "Synchronized cardioversion",
    syncDescription: "If treatment fails or the patient deteriorates",
    infoTitle: "Reminder",
    infoDescription:
      "During antiarrhythmic administration, continue monitoring ECG, blood pressure and the patient's clinical condition.",
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
    mutedText: "#5C6574",
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
    mutedText: "#B8C4D6",
    iconBackground: "#164C80",
  },
};

export default function Step4WideRegular() {
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
              <Ionicons name="heart" size={23} color="#FFFFFF" />
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
            <View
              style={[
                styles.recommendationIcon,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Ionicons name="medkit" size={22} color={colors.primary} />
            </View>
            <Text style={[styles.recommendationText, { color: colors.text }]}>
              {text.procainamide}
            </Text>
          </View>

          <View
            style={[
              styles.recommendationBlock,
              { backgroundColor: colors.blockBackground },
            ]}
          >
            <View
              style={[
                styles.recommendationIcon,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Ionicons name="alert-circle" size={22} color={colors.primary} />
            </View>
            <Text style={[styles.recommendationText, { color: colors.text }]}>
              {text.amiodarone}
            </Text>
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
        iconName="pulse-outline"
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
    alignItems: "flex-start",
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
  recommendationBlock: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
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
  recommendationText: {
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
