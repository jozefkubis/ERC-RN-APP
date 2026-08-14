import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "5 záchranných vdychov",
    description:
      "Pri dieťati začnite ventiláciou, pretože zástava obehu je často následkom respiračného zlyhania.",
    heroLabel: "Okamžitý postup",
    heroTitle: "5 vdychov",
    heroDescription:
      "U dieťaťa vdychujte do úst, pri dojčati do úst aj nosa. Každý vdych má zdvihnúť hrudník.",
    breathItems: [
      "Udržujte dýchacie cesty priechodné.",
      "Vdychujte približne 1 sekundu.",
      "Sledujte viditeľný zdvih hrudníka.",
      "Ak sa hrudník nezdvihne, upravte polohu hlavy a skontrolujte viditeľnú prekážku.",
    ],
    nextTitle: "Pokračujte kompresiami",
    nextDescription: "Začnite KPR 15:2.",
    infoTitle: "Bezpečná alternatíva",
    infoDescription:
      "Ak záchranné vdychy nie sú možné, začnite aspoň kompresie hrudníka a ventiláciu pridajte čo najskôr.",
  },
  en: {
    badge: "Step 3",
    title: "5 rescue breaths",
    description:
      "In children, start with ventilation because cardiac arrest is often caused by respiratory failure.",
    heroLabel: "Immediate action",
    heroTitle: "5 breaths",
    heroDescription:
      "For a child, breathe into the mouth; for an infant, cover the mouth and nose. Each breath should make the chest rise.",
    breathItems: [
      "Keep the airway open.",
      "Give each breath over about 1 second.",
      "Watch for visible chest rise.",
      "If the chest does not rise, reposition the head and check for a visible obstruction.",
    ],
    nextTitle: "Continue with compressions",
    nextDescription: "Start CPR 15:2.",
    infoTitle: "Safe alternative",
    infoDescription:
      "If rescue breaths are not possible, start chest compressions at least, and add ventilation as soon as possible.",
  },
};

const cardColors = {
  light: {
    heroBackground: "#D7EDFD",
    heroBorder: "#8EC3F0",
    heroIcon: "#0877D1",
    heroLabel: "#075296",
    heroTitle: "#075296",
    heroDescription: "#28506F",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    infoText: "#10243C",
    bullet: "#075296",
    nextBackground: "#075296",
    nextBorder: "#075296",
    nextIcon: "#ED1C24",
    nextTitle: "#FFFFFF",
    nextDescription: "#D7E9F8",
  },
  dark: {
    heroBackground: "#102A3F",
    heroBorder: "#2F7FBE",
    heroIcon: "#164C80",
    heroLabel: "#B9DDFF",
    heroTitle: "#B9DDFF",
    heroDescription: "#AAB6C7",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    infoText: "#D7E2F0",
    bullet: "#77B7F2",
    nextBackground: "#0E4A80",
    nextBorder: "#2F7FBE",
    nextIcon: "#B7151B",
    nextTitle: "#FFFFFF",
    nextDescription: "#D7E9F8",
  },
};

export default function Step3Pbls() {
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
        <View style={[styles.heroIcon, { backgroundColor: colors.heroIcon }]}>
          <Ionicons name="fitness" size={30} color="#FFFFFF" />
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
          styles.infoCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        {text.breathItems.map((item) => (
          <View key={item} style={styles.infoRow}>
            <View style={[styles.bullet, { backgroundColor: colors.bullet }]} />
            <Text style={[styles.infoText, { color: colors.infoText }]}>
              {item}
            </Text>
          </View>
        ))}
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/algorithms/epals/pbls/step4")}
        style={({ pressed }) => [
          styles.nextCard,
          {
            borderColor: colors.nextBorder,
            backgroundColor: colors.nextBackground,
          },
          pressed && styles.pressed,
        ]}
      >
        <View style={[styles.nextIcon, { backgroundColor: colors.nextIcon }]}>
          <Ionicons name="heart" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.nextTextContainer}>
          <Text style={[styles.nextTitle, { color: colors.nextTitle }]}>
            {text.nextTitle}
          </Text>
          <Text
            style={[styles.nextDescription, { color: colors.nextDescription }]}
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
  infoCard: {
    width: "100%",
    gap: 10,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
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
