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
    title: "Defibrilovateľný rytmus",
    description:
      "Pri KF alebo bezpulzovej KT podajte výboj s minimálnym prerušením kompresií.",
    shockLabel: "Okamžitý postup",
    shockTitle: "1 výboj 4 J/kg",
    shockDescription:
      "Nabite defibrilátor počas KPR, všetkých upozornite a výboj podajte s čo najkratšou pauzou.",
    cprTitle: "Ihneď pokračujte v KPR 2 minúty",
    cprDescription:
      "Po výboji nekontrolujte pulz ani rytmus. Okamžite obnovte kompresie a ventiláciu 15:2.",
    defibInfoTitle: "Pre defibrilovateľné rytmy",
    defibRhythmItems: [
      "Pokračujte s výbojmi 4 J/kg každé 2 minúty.",
      "Pri refraktérnej KF/bezpulzovej KT od 5. výboja zvážte zvýšenie až na 8 J/kg, max. 360 J.",
      "Adrenalín 10 mcg/kg IV/IO, max. 1 mg, po 4 minútach a potom každé 4 minúty.",
      "Amiodarón 5 mg/kg IV/IO, max. 300 mg, po 3. výboji; 5 mg/kg, max. 150 mg, po 5. výboji.",
    ],
    nextTitle: "Po 2 minútach",
    nextDescription: "Znovu zhodnoťte rytmus",
    infoTitle: "Dôležité",
    infoDescription:
      "Výboje podávajte jednotlivo. Po každom výboji okamžite pokračujte v KPR a reverzibilné príčiny riešte bez zbytočného prerušenia kompresií.",
    calculatorButton: "Kalkulačka dávok",
  },
  en: {
    badge: "Step 3",
    title: "Shockable rhythm",
    description:
      "For VF or pulseless VT, deliver a shock with minimal interruption to compressions.",
    shockLabel: "Immediate action",
    shockTitle: "1 shock 4 J/kg",
    shockDescription:
      "Charge the defibrillator during CPR, warn everyone, and deliver the shock with the shortest possible pause.",
    cprTitle: "Immediately resume CPR for 2 minutes",
    cprDescription:
      "After the shock, do not check pulse or rhythm. Immediately resume compressions and ventilation 15:2.",
    defibInfoTitle: "For shockable rhythms",
    defibRhythmItems: [
      "Continue shocks at 4 J/kg every 2 minutes.",
      "For refractory VF/pulseless VT from the 5th shock, consider increasing up to 8 J/kg, max. 360 J.",
      "Adrenaline 10 mcg/kg IV/IO, max. 1 mg, after 4 minutes and then every 4 minutes.",
      "Amiodarone 5 mg/kg IV/IO, max. 300 mg, after the 3rd shock; 5 mg/kg, max. 150 mg, after the 5th shock.",
    ],
    nextTitle: "After 2 minutes",
    nextDescription: "Reassess the rhythm",
    infoTitle: "Important",
    infoDescription:
      "Deliver shocks one at a time. After each shock, immediately resume CPR and treat reversible causes without unnecessary interruption to compressions.",
    calculatorButton: "Dose calculator",
  },
};

const cardColors = {
  light: {
    primaryBackground: "#075296",
    primaryBorder: "#075296",
    primaryLabel: "#B9DDFF",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    shockIcon: "#ED1C24",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    cardTitle: "#10243C",
    cardDescription: "#5C6574",
    infoBackground: "#FFF6DC",
    infoBorder: "#F0DEB4",
    infoIconBackground: "#FFFFFF",
    infoTitle: "#075296",
    infoText: "#24425F",
    bullet: "#075296",
    nextIcon: "#0877D1",
  },
  dark: {
    primaryBackground: "#0E4A80",
    primaryBorder: "#2F7FBE",
    primaryLabel: "#B9DDFF",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    shockIcon: "#B7151B",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    cardTitle: "#F5F8FC",
    cardDescription: "#AAB6C7",
    infoBackground: "#2B2414",
    infoBorder: "#6A5727",
    infoIconBackground: "#101B2B",
    infoTitle: "#F6D38A",
    infoText: "#E7D7A8",
    bullet: "#F6D38A",
    nextIcon: "#164C80",
  },
};

export default function Step3PalsDefib() {
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
          styles.shockCard,
          {
            borderColor: colors.primaryBorder,
            backgroundColor: colors.primaryBackground,
          },
        ]}
      >
        <View style={[styles.shockIcon, { backgroundColor: colors.shockIcon }]}>
          <Ionicons name="flash-sharp" size={30} color="#FFFFFF" />
        </View>
        <View style={styles.shockTextContainer}>
          <Text style={[styles.shockLabel, { color: colors.primaryLabel }]}>
            {text.shockLabel}
          </Text>
          <Text style={[styles.shockTitle, { color: colors.primaryTitle }]}>
            {text.shockTitle}
          </Text>
          <Text
            style={[
              styles.shockDescription,
              { color: colors.primaryDescription },
            ]}
          >
            {text.shockDescription}
          </Text>
          {/* <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/algorithms/epals/pals/calculatorPals")}
            style={({ pressed }) => [
              styles.calculatorButton,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="calculator-outline" size={18} color="#FFFFFF" />
            <Text style={styles.calculatorButtonText}>
              {text.calculatorButton}
            </Text>
          </Pressable> */}
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
        <View style={[styles.cprIcon, { backgroundColor: colors.shockIcon }]}>
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

      <View
        style={[
          styles.defibInfoCard,
          {
            borderColor: colors.infoBorder,
            backgroundColor: colors.infoBackground,
          },
        ]}
      >
        <View style={styles.defibInfoHeader}>
          <View
            style={[
              styles.defibInfoIcon,
              { backgroundColor: colors.infoIconBackground },
            ]}
          >
            <Ionicons name="flash-sharp" size={19} color="#075296" />
          </View>
          <Text style={[styles.defibInfoTitle, { color: colors.infoTitle }]}>
            {text.defibInfoTitle}
          </Text>
        </View>

        <View style={styles.defibInfoList}>
          {text.defibRhythmItems.map((item) => (
            <View key={item} style={styles.defibInfoRow}>
              <View
                style={[styles.bullet, { backgroundColor: colors.bullet }]}
              />
              <Text style={[styles.defibInfoText, { color: colors.infoText }]}>
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
            pressed && styles.pressed,
          ]}
        >
          <Ionicons name="calculator-outline" size={18} color="#FFFFFF" />
          <Text style={styles.calculatorButtonText}>
            {text.calculatorButton}
          </Text>
        </Pressable>
      </View>

      <ParalelThinkingALS />
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
  shockCard: {
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
  shockIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
  },
  shockTextContainer: {
    flex: 1,
    gap: 4,
  },
  shockLabel: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  shockTitle: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  shockDescription: {
    fontSize: 13,
    lineHeight: 19,
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
    borderColor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },
  calculatorButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
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
  defibInfoCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  defibInfoHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  defibInfoIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 17,
  },
  defibInfoTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  defibInfoList: {
    width: "100%",
    gap: 9,
  },
  defibInfoRow: {
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
  defibInfoText: {
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
