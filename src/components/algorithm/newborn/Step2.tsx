import { useSettings } from "@/src/context/settings-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Dýchanie a srdcová frekvencia",
    description:
      "Rýchlo zhodnoťte dýchanie a srdcovú frekvenciu. Pri nedostatočnom dýchaní ihneď spriechodnite dýchacie cesty.",
    assessmentText: "Zhodnoťte dýchanie a srdcovú frekvenciu",
    airwayEyebrow: "Nedostatočné dýchanie",
    airwayTitle: "Spriechodnite dýchacie cesty",
    breathsCondition: "Ak nedýcha alebo dýcha lapavo:",
    breathsTitle: "5 inflačných vdychov",
    breathDetails: [
      "Začnite s 30 cm H2O, PEEP 6 cm H2O, 21 % O2",
      "Zvážte SpO2 ± EKG",
    ],
    prematureTitle: "Predčasný pôrod < 32 týždňov",
    prematureSupportActions: [
      "Ak dýcha: podpora s CPAP 6 cm H2O, O2 ≥ 30 %",
      "Pri inflačných vdychoch začnite s 25 cm H2O, O2 ≥ 30 %",
    ],
    nextTitle: "Ďalší krok",
  },
  en: {
    badge: "Step 2",
    title: "Breathing and heart rate",
    description:
      "Quickly assess breathing and heart rate. If breathing is inadequate, open the airway immediately.",
    assessmentText: "Assess breathing and heart rate",
    airwayEyebrow: "Inadequate breathing",
    airwayTitle: "Open the airway",
    breathsCondition: "If apnoeic or gasping:",
    breathsTitle: "5 inflation breaths",
    breathDetails: [
      "Start with 30 cm H2O, PEEP 6 cm H2O, 21 % O2",
      "Consider SpO2 ± ECG",
    ],
    prematureTitle: "Preterm birth < 32 weeks",
    prematureSupportActions: [
      "If breathing: support with CPAP 6 cm H2O, O2 ≥ 30 %",
      "For inflation breaths, start with 25 cm H2O, O2 ≥ 30 %",
    ],
    nextTitle: "Next step",
  },
};

const cardColors = {
  light: {
    assessmentBackground: "#FFFFFF",
    assessmentBorder: "#0877D1",
    assessmentIcon: "#ED1C24",
    assessmentText: "#075296",
    airwayBackground: "#FFFFFF",
    airwayBorder: "#075296",
    airwayIcon: "#075296",
    airwayEyebrow: "#5C6574",
    airwayTitle: "#075296",
    breathsBackground: "#FFFFFF",
    breathsBorder: "#075296",
    breathsCondition: "#24425F",
    breathsIcon: "#0877D1",
    breathsTitle: "#075296",
    divider: "#E1E6ED",
    bullet: "#075296",
    detailText: "#10243C",
    prematureBackground: "#FFF6DC",
    prematureBorder: "#F0DEB4",
    prematureIconBackground: "#FFFFFF",
    prematureIcon: "#CC6238",
    prematureTitle: "#075296",
    prematureBullet: "#075296",
    prematureText: "#24425F",
    nextBackground: "#075296",
    nextBorder: "#075296",
    nextIcon: "#ED1C24",
    nextText: "#FFFFFF",
  },
  dark: {
    assessmentBackground: "#101B2B",
    assessmentBorder: "#2F7FBE",
    assessmentIcon: "#B7151B",
    assessmentText: "#B9DDFF",
    airwayBackground: "#101B2B",
    airwayBorder: "#2F7FBE",
    airwayIcon: "#164C80",
    airwayEyebrow: "#AAB6C7",
    airwayTitle: "#B9DDFF",
    breathsBackground: "#101B2B",
    breathsBorder: "#2F7FBE",
    breathsCondition: "#D7E2F0",
    breathsIcon: "#164C80",
    breathsTitle: "#B9DDFF",
    divider: "#31435A",
    bullet: "#8BC4FA",
    detailText: "#F5F8FC",
    prematureBackground: "#2B2414",
    prematureBorder: "#6A5727",
    prematureIconBackground: "#101B2B",
    prematureIcon: "#E19A70",
    prematureTitle: "#F6D38A",
    prematureBullet: "#F6D38A",
    prematureText: "#E7D7A8",
    nextBackground: "#0E4A80",
    nextBorder: "#2F7FBE",
    nextIcon: "#B7151B",
    nextText: "#FFFFFF",
  },
};

export default function Step2() {
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
          styles.assessmentCard,
          {
            borderColor: colors.assessmentBorder,
            backgroundColor: colors.assessmentBackground,
          },
        ]}
      >
        <View
          style={[
            styles.assessmentIcon,
            { backgroundColor: colors.assessmentIcon },
          ]}
        >
          <MaterialCommunityIcons
            name="heart-pulse"
            size={29}
            color="#FFFFFF"
          />
        </View>
        <Text
          selectable
          style={[styles.assessmentText, { color: colors.assessmentText }]}
        >
          {text.assessmentText}
        </Text>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.airwayCard,
          {
            borderColor: colors.airwayBorder,
            backgroundColor: colors.airwayBackground,
          },
        ]}
      >
        <View style={[styles.airwayIcon, { backgroundColor: colors.airwayIcon }]}>
          <Ionicons name="alert" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.cardText}>
          <Text
            selectable
            style={[styles.airwayEyebrow, { color: colors.airwayEyebrow }]}
          >
            {text.airwayEyebrow}
          </Text>
          <Text selectable style={[styles.airwayTitle, { color: colors.airwayTitle }]}>
            {text.airwayTitle}
          </Text>
        </View>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.breathsCard,
          {
            borderColor: colors.breathsBorder,
            backgroundColor: colors.breathsBackground,
          },
        ]}
      >
        <Text
          selectable
          style={[styles.breathsCondition, { color: colors.breathsCondition }]}
        >
          {text.breathsCondition}
        </Text>

        <View style={[styles.breathsAction, { borderBottomColor: colors.divider }]}>
          <View
            style={[styles.breathsIcon, { backgroundColor: colors.breathsIcon }]}
          >
            <MaterialCommunityIcons name="lungs" size={27} color="#FFFFFF" />
          </View>
          <Text selectable style={[styles.breathsTitle, { color: colors.breathsTitle }]}>
            {text.breathsTitle}
          </Text>
        </View>

        <View style={styles.breathsDetails}>
          {text.breathDetails.map((detail) => (
            <View key={detail} style={styles.detailRow}>
              <View style={[styles.detailBullet, { backgroundColor: colors.bullet }]} />
              <Text selectable style={[styles.detailText, { color: colors.detailText }]}>
                {detail}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View
        style={[
          styles.prematureCard,
          {
            borderColor: colors.prematureBorder,
            backgroundColor: colors.prematureBackground,
          },
        ]}
      >
        <View style={styles.prematureHeader}>
          <View
            style={[
              styles.prematureIcon,
              {
                borderColor: colors.prematureIcon,
                backgroundColor: colors.prematureIconBackground,
              },
            ]}
          >
            <Ionicons
              name="warning-outline"
              size={22}
              color={colors.prematureIcon}
            />
          </View>
          <Text
            selectable
            style={[styles.prematureTitle, { color: colors.prematureTitle }]}
          >
            {text.prematureTitle}
          </Text>
        </View>

        <View style={styles.prematureList}>
          {text.prematureSupportActions.map((action) => (
            <View key={action} style={styles.prematureRow}>
              <View
                style={[
                  styles.prematureBullet,
                  { backgroundColor: colors.prematureBullet },
                ]}
              />
              <Text
                selectable
                style={[styles.prematureText, { color: colors.prematureText }]}
              >
                {action}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/algorithms/newborn/step3")}
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
          <MaterialCommunityIcons
            name="page-next-outline"
            size={24}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.nextTextContainer}>
          <Text style={[styles.nextTitle, { color: colors.nextText }]}>
            {text.nextTitle}
          </Text>
        </View>
        <Ionicons name="arrow-forward" size={22} color={colors.nextText} />
      </Pressable>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  assessmentCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 2,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  assessmentIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  assessmentText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  airwayCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  airwayIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  airwayEyebrow: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
  },
  airwayTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
  },
  breathsCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  breathsCondition: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
  },
  breathsAction: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 13,
    borderBottomWidth: 1,
  },
  breathsIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  breathsTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  breathsDetails: {
    width: "100%",
    gap: 9,
  },
  detailRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  detailBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  detailText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  prematureCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  prematureHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  prematureIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 18,
  },
  prematureTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
    textDecorationLine: "underline",
  },
  prematureList: {
    width: "100%",
    gap: 9,
  },
  prematureRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  prematureBullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 8,
  },
  prematureText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
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
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
