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
    title: "Defibrilovateľný rytmus",
    description:
      "Pri KF alebo bezpulzovej KT podajte výboj s čo najkratším prerušením kompresií.",
    shockLabel: "Okamžitý postup",
    shockTitle: "1 výboj",
    shockDescription:
      "Nabite defibrilátor počas KPR, všetkých upozornite a výboj podajte s minimálnou pauzou.",
    cprTitle: "Ihneď pokračujte v KPR",
    cprDescription:
      "Po výboji nečakajte na kontrolu pulzu. Pokračujte v kompresiách 2 minúty a až potom znovu zhodnoťte rytmus.",
    medicationItems: [
      {
        title: "Adrenalín 1 mg",
        description:
          "Prvú dávku podajte po 3. výboji, potom každé 3-5 minút.",
        iconName: "medical-outline" as const,
      },
      {
        title: "Amiodarón",
        description: "300 mg po 3. výboji, ďalších 150 mg po 5. výboji.",
        iconName: "flask-outline" as const,
      },
    ],
    nextTitle: "Po 2 minútach",
    nextDescription: "Znovu zhodnoťte rytmus",
    infoTitle: "Dôležité",
    infoDescription:
      "Defibrilačné výboje podávajte po jednom. Po každom výboji okamžite obnovte kompresie hrudníka.",
  },
  en: {
    badge: "Step 4",
    title: "Shockable rhythm",
    description:
      "For VF or pulseless VT, deliver a shock with the shortest possible interruption to compressions.",
    shockLabel: "Immediate action",
    shockTitle: "1 shock",
    shockDescription:
      "Charge the defibrillator during CPR, warn everyone, and deliver the shock with a minimal pause.",
    cprTitle: "Immediately resume CPR",
    cprDescription:
      "After the shock, do not pause for a pulse check. Continue compressions for 2 minutes, then reassess the rhythm.",
    medicationItems: [
      {
        title: "Adrenaline 1 mg",
        description:
          "Give the first dose after the 3rd shock, then every 3-5 minutes.",
        iconName: "medical-outline" as const,
      },
      {
        title: "Amiodarone",
        description: "300 mg after the 3rd shock, then 150 mg after the 5th shock.",
        iconName: "flask-outline" as const,
      },
    ],
    nextTitle: "After 2 minutes",
    nextDescription: "Reassess the rhythm",
    infoTitle: "Important",
    infoDescription:
      "Deliver defibrillation shocks one at a time. After each shock, immediately resume chest compressions.",
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
    shockIcon: "#B7151B",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    cardTitle: "#F5F8FC",
    cardDescription: "#AAB6C7",
    softIcon: "#164C80",
    softIconText: "#B9DDFF",
    nextIcon: "#164C80",
  },
};

export default function Step4Defib() {
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
          <MaterialCommunityIcons name="heart-pulse" size={28} color="#FFFFFF" />
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

      <View style={styles.medicationList}>
        {text.medicationItems.map((item) => (
          <View
            key={item.title}
            style={[
              styles.medicationCard,
              {
                borderColor: colors.cardBorder,
                backgroundColor: colors.cardBackground,
              },
            ]}
          >
            <View
              style={[
                styles.medicationIcon,
                { backgroundColor: colors.softIcon },
              ]}
            >
              <Ionicons
                name={item.iconName}
                size={22}
                color={colors.softIconText}
              />
            </View>
            <View style={styles.medicationTextContainer}>
              <Text
                style={[styles.medicationTitle, { color: colors.cardTitle }]}
              >
                {item.title}
              </Text>
              <Text
                style={[
                  styles.medicationDescription,
                  { color: colors.cardDescription },
                ]}
              >
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <ParalelThinkingALS />
      <H4T4Button />

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
  medicationList: {
    width: "100%",
    gap: 10,
  },
  medicationCard: {
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
  medicationIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  medicationTextContainer: {
    flex: 1,
    gap: 4,
  },
  medicationTitle: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  medicationDescription: {
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
