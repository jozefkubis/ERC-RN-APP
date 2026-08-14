import { useSettings } from "@/src/context/settings-context";
import FlowConnector from "@/src/components/ui/FlowConnector";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 5",
    title: "Pripojte AED",
    description:
      "AED použite hneď, ako je dostupný, a riaďte sa jeho pokynmi.",
    aedTitle: "Pripojte AED čo najskôr",
    aedDescription: "Postupujte podľa pokynov AED",
    finalText:
      "Pokračujte v KPR, kým príde záchranná služba / resuscitačný tím",
  },
  en: {
    badge: "Step 5",
    title: "Attach the AED",
    description:
      "Use the AED as soon as it is available and follow its prompts.",
    aedTitle: "Attach the AED as soon as possible",
    aedDescription: "Follow the AED prompts",
    finalText:
      "Continue CPR until emergency medical services / the resuscitation team arrives",
  },
};

const cardColors = {
  light: {
    cardBackground: "#FFFFFF",
    cardBorder: "#075296",
    success: "#1BA058",
    primary: "#075296",
    finalBackground: "#D7EDFD",
    finalBorder: "#075296",
    finalText: "#075296",
  },
  dark: {
    cardBackground: "#101B2B",
    cardBorder: "#2F7FBE",
    success: "#157A45",
    primary: "#B9DDFF",
    finalBackground: "#102A3F",
    finalBorder: "#2F7FBE",
    finalText: "#B9DDFF",
  },
};

export default function Step5bls() {
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
          styles.aedCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <View style={[styles.aedIcon, { backgroundColor: colors.success }]}>
          <Ionicons name="flash" size={28} color="#FFFFFF" />
        </View>
        <View style={styles.aedTextContainer}>
          <Text style={[styles.aedTitle, { color: colors.primary }]}>
            {text.aedTitle}
          </Text>
          <Text style={[styles.aedDescription, { color: colors.primary }]}>
            {text.aedDescription}
          </Text>
        </View>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.finalCard,
          {
            borderColor: colors.finalBorder,
            backgroundColor: colors.finalBackground,
          },
        ]}
      >
        <Text style={[styles.finalText, { color: colors.finalText }]}>
          {text.finalText}
        </Text>
      </View>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  aedCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  aedIcon: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  aedTextContainer: {
    flex: 1,
    gap: 4,
  },
  aedTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  aedDescription: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  finalCard: {
    width: "100%",
    minHeight: 84,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 1,
    borderRadius: 999,
  },
  finalText: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 24,
    textAlign: "center",
  },
});
