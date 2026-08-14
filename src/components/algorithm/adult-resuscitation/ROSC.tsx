import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import H4T4Button from "../../ui/H4T4Button";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "ROSC",
    title: "Starostlivosť po obnovení obehu",
    description:
      "Po návrate spontánneho obehu stabilizujte pacienta, hľadajte príčinu zastavenia obehu a pripravte ďalší manažment.",
    heroLabel: "Ihneď po obnovení obehu",
    heroTitle: "ROSC",
    heroDescription:
      "Pokračujte systematicky podľa ABCDE a neprestávajte myslieť na príčinu zastavenia obehu.",
    careItems: [
      "Použite ABCDE prístup",
      "Cieľová SpO2 94-98 % a normálna PaCO2",
      "Cieľový systolický TK > 100 mmHg",
      "12-zvodové EKG",
      "Identifikujte a liečte príčinu",
      "Kontrolujte telesnú teplotu",
    ],
    infoTitle: "Cieľ",
    infoDescription:
      "Udržať oxygenáciu, ventiláciu a perfúziu v bezpečnom rozsahu, odhaliť príčinu zastavenia obehu a predísť sekundárnemu poškodeniu.",
    backTitle: "Späť na rytmus",
    backDescription: "Vrátiť sa na zhodnotenie rytmu",
  },
  en: {
    badge: "ROSC",
    title: "Post-resuscitation care",
    description:
      "After return of spontaneous circulation, stabilise the patient, identify the cause of cardiac arrest, and prepare further management.",
    heroLabel: "Immediately after circulation returns",
    heroTitle: "ROSC",
    heroDescription:
      "Continue systematically using the ABCDE approach and keep looking for the cause of cardiac arrest.",
    careItems: [
      "Use the ABCDE approach",
      "Target SpO2 94-98 % and normal PaCO2",
      "Target systolic BP > 100 mmHg",
      "12-lead ECG",
      "Identify and treat the cause",
      "Control body temperature",
    ],
    infoTitle: "Goal",
    infoDescription:
      "Maintain oxygenation, ventilation, and perfusion within a safe range, identify the cause of cardiac arrest, and prevent secondary injury.",
    backTitle: "Back to rhythm",
    backDescription: "Return to rhythm assessment",
  },
};

const cardColors = {
  light: {
    heroBackground: "#D7EDFD",
    heroBorder: "#8EC3F0",
    heroLabel: "#075296",
    heroTitle: "#075296",
    heroDescription: "#28506F",
    successIcon: "#19A85B",
    careBackground: "#FFF5D8",
    careBorder: "#D2D9E6",
    careText: "#10243C",
    backBackground: "#FFFFFF",
    backBorder: "#CBD3DF",
    backIconBackground: "#E4EFFD",
    backIcon: "#075296",
    backTitle: "#10243C",
    backDescription: "#5C6574",
  },
  dark: {
    heroBackground: "#102A3F",
    heroBorder: "#2F7FBE",
    heroLabel: "#B9DDFF",
    heroTitle: "#B9DDFF",
    heroDescription: "#AAB6C7",
    successIcon: "#157A45",
    careBackground: "#252312",
    careBorder: "#5B5124",
    careText: "#F5F8FC",
    backBackground: "#101B2B",
    backBorder: "#31435A",
    backIconBackground: "#164C80",
    backIcon: "#B9DDFF",
    backTitle: "#F5F8FC",
    backDescription: "#AAB6C7",
  },
};

export default function ROSC() {
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
          styles.heroCard,
          {
            borderColor: colors.heroBorder,
            backgroundColor: colors.heroBackground,
          },
        ]}
      >
        <View
          style={[styles.heroIcon, { backgroundColor: colors.successIcon }]}
        >
          <Ionicons name="checkmark" size={28} color="#FFFFFF" />
        </View>
        <View style={styles.heroTextContainer}>
          <Text style={[styles.heroLabel, { color: colors.heroLabel }]}>
            {text.heroLabel}
          </Text>
          <Text style={[styles.heroTitle, { color: colors.heroTitle }]}>
            {text.heroTitle}
          </Text>
          <Text
            style={[
              styles.heroDescription,
              { color: colors.heroDescription },
            ]}
          >
            {text.heroDescription}
          </Text>
        </View>
      </View>

      <H4T4Button />

      <View
        style={[
          styles.careList,
          {
            borderColor: colors.careBorder,
            backgroundColor: colors.careBackground,
          },
        ]}
      >
        {text.careItems.map((item) => (
          <View key={item} style={styles.careRow}>
            <View
              style={[styles.careBullet, { backgroundColor: colors.successIcon }]}
            >
              <Ionicons name="checkmark" size={15} color="#FFFFFF" />
            </View>
            <Text style={[styles.careText, { color: colors.careText }]}>
              {item}
            </Text>
          </View>
        ))}
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="pulse-outline"
        themeMode={themeMode}
      />

      <Pressable
        style={({ pressed }) => [
          styles.backCard,
          {
            borderColor: colors.backBorder,
            backgroundColor: colors.backBackground,
          },
          pressed && styles.pressed,
        ]}
        onPress={() => router.push("/algorithms/adult-resuscitation/als/step3")}
      >
        <View
          style={[
            styles.backIcon,
            { backgroundColor: colors.backIconBackground },
          ]}
        >
          <Ionicons name="arrow-back" size={22} color={colors.backIcon} />
        </View>
        <View style={styles.backTextContainer}>
          <Text style={[styles.backTitle, { color: colors.backTitle }]}>
            {text.backTitle}
          </Text>
          <Text
            style={[styles.backDescription, { color: colors.backDescription }]}
          >
            {text.backDescription}
          </Text>
        </View>
      </Pressable>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  heroCard: {
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
  heroIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
  },
  heroTextContainer: {
    flex: 1,
    gap: 4,
  },
  heroLabel: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  heroDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  careList: {
    width: "100%",
    gap: 10,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  careRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  careBullet: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  careText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 21,
  },
  backCard: {
    width: "100%",
    minHeight: 82,
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
  backIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  backTextContainer: {
    flex: 1,
    gap: 4,
  },
  backTitle: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  backDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
