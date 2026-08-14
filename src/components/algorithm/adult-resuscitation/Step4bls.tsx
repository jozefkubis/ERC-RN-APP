import { useSettings } from "@/src/context/settings-context";
import FlowConnector from "@/src/components/ui/FlowConnector";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 4",
    title: "Začnite KPR",
    description:
      "Zvoľte postup podľa veku osoby a vašej úrovne výcviku.",
    cardTitle: "Začnite KPR",
    adultTitle: "Dospelý",
    childTitle: "Dieťa",
    adultSections: [
      {
        title: "Ak nie ste vyškolený v BLS",
        items: ["KPR iba s kompresiami hrudníka"],
      },
      {
        title: "Ak ste vyškolený v BLS",
        items: ["KPR 30:2"],
      },
    ],
    childSections: [
      {
        title: "Ak nie ste vyškolený v PBLS",
        items: ["5 záchranných vdychov", "KPR 30:2"],
      },
      {
        title: "Ak ste vyškolený v PBLS",
        items: ["5 záchranných vdychov", "KPR 15:2"],
      },
    ],
    nextTitle: "Ďalší krok",
    nextDescription: "AED",
  },
  en: {
    badge: "Step 4",
    title: "Start CPR",
    description:
      "Choose the approach according to the person's age and your training level.",
    cardTitle: "Start CPR",
    adultTitle: "Adult",
    childTitle: "Child",
    adultSections: [
      {
        title: "If you are not trained in BLS",
        items: ["Compression-only CPR"],
      },
      {
        title: "If you are trained in BLS",
        items: ["CPR 30:2"],
      },
    ],
    childSections: [
      {
        title: "If you are not trained in PBLS",
        items: ["5 rescue breaths", "CPR 30:2"],
      },
      {
        title: "If you are trained in PBLS",
        items: ["5 rescue breaths", "CPR 15:2"],
      },
    ],
    nextTitle: "Next step",
    nextDescription: "AED",
  },
};

const cardColors = {
  light: {
    cprBackground: "#F8EFCF",
    cprBorder: "#E5D7AC",
    icon: "#ED1C24",
    primary: "#075296",
    text: "#10243C",
    divider: "#075296",
    nextBackground: "#075296",
    nextBorder: "#075296",
    nextTitle: "#D7E9F8",
    nextDescription: "#FFFFFF",
  },
  dark: {
    cprBackground: "#252312",
    cprBorder: "#5B5124",
    icon: "#B7151B",
    primary: "#B9DDFF",
    text: "#F5F8FC",
    divider: "#77B7F2",
    nextBackground: "#0E4A80",
    nextBorder: "#2F7FBE",
    nextTitle: "#D7E9F8",
    nextDescription: "#FFFFFF",
  },
};

export default function Step4bls() {
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
          styles.cprCard,
          {
            borderColor: colors.cprBorder,
            backgroundColor: colors.cprBackground,
          },
        ]}
      >
        <View style={styles.cprHeader}>
          <View style={[styles.cprIcon, { backgroundColor: colors.icon }]}>
            <Ionicons name="heart" size={24} color="#FFFFFF" />
          </View>
          <Text style={[styles.cprHeaderText, { color: colors.primary }]}>
            {text.cardTitle}
          </Text>
        </View>

        <View style={styles.columns}>
          <View style={styles.column}>
            <Text style={[styles.columnTitle, { color: colors.primary }]}>
              {text.adultTitle}
            </Text>
            {text.adultSections.map((section) => (
              <View key={section.title} style={styles.section}>
                <Text style={[styles.sectionTitle, { color: colors.primary }]}>
                  {section.title}
                </Text>
                {section.items.map((item) => (
                  <View key={item} style={styles.itemRow}>
                    <View
                      style={[
                        styles.bullet,
                        { backgroundColor: colors.primary },
                      ]}
                    />
                    <Text style={[styles.itemText, { color: colors.text }]}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={[styles.divider, { backgroundColor: colors.divider }]} />

          <View style={styles.column}>
            <Text style={[styles.columnTitle, { color: colors.primary }]}>
              {text.childTitle}
            </Text>
            {text.childSections.map((section) => (
              <View key={section.title} style={styles.section}>
                <Text style={[styles.sectionTitle, { color: colors.primary }]}>
                  {section.title}
                </Text>
                {section.items.map((item) => (
                  <View key={item} style={styles.itemRow}>
                    <View
                      style={[
                        styles.bullet,
                        { backgroundColor: colors.primary },
                      ]}
                    />
                    <Text style={[styles.itemText, { color: colors.text }]}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>

      <FlowConnector />

      <Pressable
        onPress={() => router.push("/algorithms/adult-resuscitation/bls/step5")}
        style={({ pressed }) => [
          styles.nextCard,
          {
            borderColor: colors.nextBorder,
            backgroundColor: colors.nextBackground,
          },
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.nextTextContainer}>
          <Text style={[styles.nextTitle, { color: colors.nextTitle }]}>
            {text.nextTitle}
          </Text>
          <Text
            style={[
              styles.nextDescription,
              { color: colors.nextDescription },
            ]}
          >
            {text.nextDescription}
          </Text>
        </View>
        <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
      </Pressable>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  cprCard: {
    width: "100%",
    gap: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  cprHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  cprIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
  },
  cprHeaderText: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  columns: {
    width: "100%",
    flexDirection: "column",
    gap: 14,
  },
  column: {
    flex: 1,
    gap: 12,
  },
  divider: {
    height: 1,
    alignSelf: "stretch",
    opacity: 0.35,
  },
  columnTitle: {
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 20,
    textAlign: "left",
  },
  section: {
    gap: 7,
  },
  sectionTitle: {
    fontSize: 13,
    fontStyle: "italic",
    fontWeight: "900",
    lineHeight: 18,
    textAlign: "left",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    gap: 8,
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 7,
  },
  itemText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
  },
  nextCard: {
    width: "100%",
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nextTextContainer: {
    alignItems: "center",
    gap: 2,
  },
  nextTitle: {
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 16,
    textTransform: "uppercase",
  },
  nextDescription: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
