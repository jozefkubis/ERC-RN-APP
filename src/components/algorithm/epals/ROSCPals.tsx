import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "ROSC",
    title: "Starostlivosť po obnovení obehu",
    description:
      "Po návrate spontánneho obehu dieťa stabilizujte, sledujte ventiláciu, perfúziu a aktívne riešte vyvolávajúcu príčinu.",
    heroLabel: "Ihneď po obnovení obehu",
    heroTitle: "ROSC",
    heroDescription:
      "Prejdite na poresuscitačnú starostlivosť a pokračujte systematicky podľa ABCDE.",
    careTitle: "Okamžite po ROSC",
    careItems: [
      "ABCDE",
      "Kontrolovaná oxygenácia (SpO2 94-98 %) a ventilácia (PaCO2 4,6-6 kPa / 35-45 mmHg)",
      "Udržiavajte systolický a priemerný krvný tlak > 10. percentil pre daný vek",
      "Vyhnite sa hypertermii alebo ju liečte",
      "Kontrola glykémie, cieľom je normoglykémia",
      "Liečte vyvolávajúcu príčinu",
    ],
    infoTitle: "Cieľ",
    infoDescription:
      "Udržať oxygenáciu, ventiláciu, perfúziu, teplotu a glykémiu v bezpečnom rozsahu, kým sa rieši príčina zastavenia obehu.",
    backTitle: "Späť na rytmus",
    backDescription: "Vrátiť sa na zhodnotenie rytmu",
  },
  en: {
    badge: "ROSC",
    title: "Post-resuscitation care",
    description:
      "After return of spontaneous circulation, stabilise the child, monitor ventilation and perfusion, and actively treat the underlying cause.",
    heroLabel: "Immediately after circulation returns",
    heroTitle: "ROSC",
    heroDescription:
      "Move to post-resuscitation care and continue systematically using the ABCDE approach.",
    careTitle: "Immediately after ROSC",
    careItems: [
      "ABCDE",
      "Controlled oxygenation (SpO2 94-98 %) and ventilation (PaCO2 4.6-6 kPa / 35-45 mmHg)",
      "Maintain systolic and mean arterial blood pressure > 10th percentile for age",
      "Avoid or treat hyperthermia",
      "Control glucose, aiming for normoglycaemia",
      "Treat the underlying cause",
    ],
    infoTitle: "Goal",
    infoDescription:
      "Keep oxygenation, ventilation, perfusion, temperature, and glucose within a safe range while the cause of cardiac arrest is treated.",
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
    careBackground: "#FFF6DC",
    careBorder: "#F0DEB4",
    careIconBackground: "#FFFFFF",
    careTitle: "#075296",
    careText: "#24425F",
    bullet: "#075296",
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
    careBackground: "#2B2414",
    careBorder: "#6A5727",
    careIconBackground: "#101B2B",
    careTitle: "#F6D38A",
    careText: "#E7D7A8",
    bullet: "#F6D38A",
    backBackground: "#101B2B",
    backBorder: "#31435A",
    backIconBackground: "#164C80",
    backIcon: "#B9DDFF",
    backTitle: "#F5F8FC",
    backDescription: "#AAB6C7",
  },
};

export default function ROSCPals() {
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

      <View
        style={[
          styles.careCard,
          {
            borderColor: colors.careBorder,
            backgroundColor: colors.careBackground,
          },
        ]}
      >
        <View style={styles.careHeader}>
          <View
            style={[
              styles.careIcon,
              { backgroundColor: colors.careIconBackground },
            ]}
          >
            <Ionicons name="checkmark" size={24} color={colors.successIcon} />
          </View>
          <Text style={[styles.careTitle, { color: colors.careTitle }]}>
            {text.careTitle}
          </Text>
        </View>

        <View style={styles.careList}>
          {text.careItems.map((item) => (
            <View key={item} style={styles.careRow}>
              <View style={[styles.bullet, { backgroundColor: colors.bullet }]} />
              <Text style={[styles.careText, { color: colors.careText }]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="pulse-outline"
        themeMode={themeMode}
      />

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/algorithms/epals/pals/step2")}
        style={({ pressed }) => [
          styles.backCard,
          {
            borderColor: colors.backBorder,
            backgroundColor: colors.backBackground,
          },
          pressed && styles.pressed,
        ]}
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
  careCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  careHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  careIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#008F4B",
    borderRadius: 17,
  },
  careTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  careList: {
    width: "100%",
    gap: 9,
  },
  careRow: {
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
  careText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
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
