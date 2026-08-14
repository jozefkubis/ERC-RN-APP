import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Príprava a prvé opatrenia",
    description:
      "Pripravte tím a vybavenie ešte pred narodením. Po narodení spustite stopky a udržujte novorodenca v teple.",
    preparationTitle: "Prenatálne poradenstvo",
    preparationDescription: "Brífing tímu a kontrola vybavenia",
    birthTitle: "Narodenie",
    birthDescription: "Spustite stopky",
    firstCareActions: [
      "Oneskorené podviazanie pupočníka",
      "Šetrná stimulácia",
      "Osušiť, zabaliť, čiapočka",
    ],
    warmthText: "Udržiavajte v teple",
    prematureTitle: "Predčasný pôrod < 32 týždňov",
    prematureBirthActions: [
      "Vložte neosušené telo do plastového sáčku, nasaďte čiapočku",
      "Použite externý zdroj tepla",
    ],
    nextTitle: "Ďalší krok",
  },
  en: {
    badge: "Step 1",
    title: "Preparation and first actions",
    description:
      "Prepare the team and equipment before birth. After birth, start the timer and keep the newborn warm.",
    preparationTitle: "Prenatal counselling",
    preparationDescription: "Team briefing and equipment check",
    birthTitle: "Birth",
    birthDescription: "Start the timer",
    firstCareActions: [
      "Delayed cord clamping",
      "Gentle stimulation",
      "Dry, wrap, and apply a hat",
    ],
    warmthText: "Keep warm",
    prematureTitle: "Preterm birth < 32 weeks",
    prematureBirthActions: [
      "Place the undried body in a plastic bag and apply a hat",
      "Use an external heat source",
    ],
    nextTitle: "Next step",
  },
};

const cardColors = {
  light: {
    preparationBackground: "#D7EDFD",
    preparationIcon: "#0877D1",
    preparationTitle: "#075296",
    preparationDescription: "#24425F",
    birthBackground: "#FFFFFF",
    birthBorder: "#075296",
    birthIconBackground: "#E4EFFD",
    birthIcon: "#075296",
    birthTitle: "#10243C",
    birthDescription: "#075296",
    careBackground: "#FFFFFF",
    careBorder: "#CBD3DF",
    actionIcon: "#075296",
    actionText: "#10243C",
    warmthIcon: "#075296",
    warmthText: "#075296",
    divider: "#E1E6ED",
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
    preparationBackground: "#102A3F",
    preparationIcon: "#164C80",
    preparationTitle: "#B9DDFF",
    preparationDescription: "#D7E2F0",
    birthBackground: "#101B2B",
    birthBorder: "#2F7FBE",
    birthIconBackground: "#17375B",
    birthIcon: "#8BC4FA",
    birthTitle: "#F5F8FC",
    birthDescription: "#B9DDFF",
    careBackground: "#101B2B",
    careBorder: "#31435A",
    actionIcon: "#164C80",
    actionText: "#F5F8FC",
    warmthIcon: "#8BC4FA",
    warmthText: "#B9DDFF",
    divider: "#31435A",
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

export default function Step1() {
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
          styles.preparationCard,
          { backgroundColor: colors.preparationBackground },
        ]}
      >
        <View
          style={[
            styles.preparationIcon,
            { backgroundColor: colors.preparationIcon },
          ]}
        >
          <Ionicons name="people" size={25} color="#FFFFFF" />
        </View>
        <View style={styles.cardText}>
          <Text
            selectable
            style={[
              styles.preparationTitle,
              { color: colors.preparationTitle },
            ]}
          >
            {text.preparationTitle}
          </Text>
          <Text
            selectable
            style={[
              styles.preparationDescription,
              { color: colors.preparationDescription },
            ]}
          >
            {text.preparationDescription}
          </Text>
        </View>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.birthCard,
          {
            borderColor: colors.birthBorder,
            backgroundColor: colors.birthBackground,
          },
        ]}
      >
        <View
          style={[
            styles.birthIcon,
            { backgroundColor: colors.birthIconBackground },
          ]}
        >
          <Ionicons
            name="timer-outline"
            size={25}
            color={colors.birthIcon}
          />
        </View>
        <View style={styles.cardText}>
          <Text selectable style={[styles.birthTitle, { color: colors.birthTitle }]}>
            {text.birthTitle}
          </Text>
          <Text
            selectable
            style={[styles.birthDescription, { color: colors.birthDescription }]}
          >
            {text.birthDescription}
          </Text>
        </View>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.careCard,
          {
            borderColor: colors.careBorder,
            backgroundColor: colors.careBackground,
          },
        ]}
      >
        {text.firstCareActions.map((action) => (
          <View key={action} style={styles.actionRow}>
            <View
              style={[styles.actionIcon, { backgroundColor: colors.actionIcon }]}
            >
              <Ionicons name="checkmark" size={18} color="#FFFFFF" />
            </View>
            <Text selectable style={[styles.actionText, { color: colors.actionText }]}>
              {action}
            </Text>
          </View>
        ))}
        <View style={[styles.warmthRow, { borderTopColor: colors.divider }]}>
          <Ionicons
            name="thermometer-outline"
            size={22}
            color={colors.warmthIcon}
          />
          <Text selectable style={[styles.warmthText, { color: colors.warmthText }]}>
            {text.warmthText}
          </Text>
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
          {text.prematureBirthActions.map((action) => (
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
        onPress={() => router.push("/algorithms/newborn/step2")}
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
  preparationCard: {
    width: "100%",
    minHeight: 104,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  preparationIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  preparationTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  preparationDescription: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  birthCard: {
    width: "100%",
    minHeight: 86,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  birthIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  birthTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  birthDescription: {
    fontSize: 16,
    lineHeight: 22,
  },
  careCard: {
    width: "100%",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  actionRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  actionIcon: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
    paddingTop: 4,
  },
  warmthRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  warmthText: {
    fontSize: 14,
    fontWeight: "800",
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
