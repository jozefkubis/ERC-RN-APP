import { useSettings } from "@/src/context/settings-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 4",
    title: "Ventilácia s pohybom hrudníka",
    description:
      "Ak je pohyb hrudníka prítomný, pokračujte vo ventilácii pozitívnym tlakom a po krátkom intervale znovu zhodnoťte srdcovú frekvenciu.",
    ventilationTitle: "Pokračujte vo ventilácii pozitívnym tlakom",
    ventilationSubtitle: "Prehodnoťte po 30 sekundách",
    compressionCondition: "Ak srdcová frekvencia zostáva < 60/min:",
    compressionTitle: "Začnite kompresie hrudníka",
    compressionActions: [
      "3 stlačenia : 1 vdych",
      "100-120 stlačení/min",
      "100 % O2",
      "Zvážte SGA alebo tracheálnu intubáciu",
    ],
    nextTitle: "Ďalší krok",
    calculatorButton: "Veľkosti pomôcok",
  },
  en: {
    badge: "Step 4",
    title: "Ventilation with chest movement",
    description:
      "If chest movement is present, continue positive pressure ventilation and reassess the heart rate after a short interval.",
    ventilationTitle: "Continue positive pressure ventilation",
    ventilationSubtitle: "Reassess after 30 seconds",
    compressionCondition: "If the heart rate remains < 60/min:",
    compressionTitle: "Start chest compressions",
    compressionActions: [
      "3 compressions : 1 breath",
      "100-120 compressions/min",
      "100 % O2",
      "Consider SGA or tracheal intubation",
    ],
    nextTitle: "Next step",
    calculatorButton: "Size of equipment",
  },
};

const cardColors = {
  light: {
    cardBackground: "#FFFFFF",
    cardBorder: "#0877D1",
    iconDanger: "#ED1C24",
    primaryText: "#075296",
    bodyText: "#10243C",
    divider: "#E1E6ED",
    actionIcon: "#075296",
    bullet: "#075296",
    nextBackground: "#075296",
    nextBorder: "#075296",
    nextIcon: "#ED1C24",
    nextText: "#FFFFFF",
    calculatorBackground: "#075296",
    calculatorBorder: "#075296",
    calculatorText: "#FFFFFF",
  },
  dark: {
    cardBackground: "#101B2B",
    cardBorder: "#2F7FBE",
    iconDanger: "#B7151B",
    primaryText: "#B9DDFF",
    bodyText: "#F5F8FC",
    divider: "#31435A",
    actionIcon: "#164C80",
    bullet: "#8BC4FA",
    nextBackground: "#0E4A80",
    nextBorder: "#2F7FBE",
    nextIcon: "#B7151B",
    nextText: "#FFFFFF",
    calculatorBackground: "#0E4A80",
    calculatorBorder: "#2F7FBE",
    calculatorText: "#FFFFFF",
  },
};

export default function Step4WithMovement() {
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
          styles.ventilationCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <View
          style={[
            styles.ventilationIcon,
            { backgroundColor: colors.iconDanger },
          ]}
        >
          <MaterialCommunityIcons
            name="heart-pulse"
            size={29}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.cardText}>
          <Text
            selectable
            style={[styles.ventilationTitle, { color: colors.primaryText }]}
          >
            {text.ventilationTitle}
          </Text>
          <Text
            selectable
            style={[styles.ventilationSubtitle, { color: colors.primaryText }]}
          >
            {text.ventilationSubtitle}
          </Text>
        </View>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.compressionCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <Text
          selectable
          style={[styles.compressionCondition, { color: colors.bodyText }]}
        >
          {text.compressionCondition}
        </Text>

        <View
          style={[
            styles.compressionHeader,
            { borderBottomColor: colors.divider },
          ]}
        >
          <View
            style={[
              styles.compressionIcon,
              { backgroundColor: colors.actionIcon },
            ]}
          >
            <MaterialCommunityIcons
              name="hand-heart"
              size={25}
              color="#FFFFFF"
            />
          </View>
          <Text
            selectable
            style={[styles.compressionTitle, { color: colors.primaryText }]}
          >
            {text.compressionTitle}
          </Text>
        </View>

        <View style={styles.actionList}>
          {text.compressionActions.map((action) => (
            <View key={action} style={styles.actionRow}>
              <View
                style={[
                  styles.actionBullet,
                  { backgroundColor: colors.bullet },
                ]}
              />
              <Text
                selectable
                style={[styles.actionText, { color: colors.bodyText }]}
              >
                {action}
              </Text>
            </View>
          ))}
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/newborn/sizesNewborn")}
          style={({ pressed }) => [
            styles.calculatorButton,
            {
              backgroundColor: colors.calculatorBackground,
              borderColor: colors.calculatorBorder,
            },
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name="resize-outline"
            size={18}
            color={colors.calculatorText}
          />
          <Text
            style={[
              styles.calculatorButtonText,
              { color: colors.calculatorText },
            ]}
          >
            {text.calculatorButton}
          </Text>
        </Pressable>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/algorithms/newborn/step5")}
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
  ventilationCard: {
    width: "100%",
    minHeight: 104,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 2,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  ventilationIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  ventilationTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
    textAlign: "left",
  },
  ventilationSubtitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "left",
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
    borderRadius: 10,
    borderCurve: "continuous",
  },
  calculatorButtonText: {
    fontSize: 14,
    fontWeight: "800",
  },
  compressionCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  compressionCondition: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
    textAlign: "center",
  },
  compressionHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 13,
    borderBottomWidth: 1,
  },
  compressionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  compressionTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  actionList: {
    width: "100%",
    gap: 9,
  },
  actionRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  actionBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  actionText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
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
