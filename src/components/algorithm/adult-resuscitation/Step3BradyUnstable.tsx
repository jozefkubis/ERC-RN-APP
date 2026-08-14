import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Nedostatočná reakcia",
    description:
      "Ak odpoveď na atropín nie je dostatočná, začnite dočasné opatrenia a pripravte kardiostimuláciu.",
    panelTitle: "NESTABILNÁ",
    actionTitle: "Zvážte dočasné opatrenia",
    temporaryMeasures: [
      {
        label: "Atropín 0,5 mg IV, opakujte do maximálne 3 mg",
      },
      {
        label: "Izoprenalín 5 mcg min^-1 IV",
      },
      {
        label: "Adrenalín 2 - 10 mcg min^-1 IV",
      },
      {
        label: "Alternatívne lieky*",
        route: "/algorithms/adult-resuscitation/bradycardia/alternative-medications",
      },
      {
        label: "a / alebo",
      },
      {
        label: "Transkutánna kardiostimulácia",
        route: "/algorithms/adult-resuscitation/bradycardia/cardiostimulationscreen",
      },
    ],
    expertTitle: "Vyhľadajte pomoc experta",
    expertDescription: "Zabezpečte transvenóznu kardiostimuláciu",
    infoTitle: "Poznámka",
    infoDescription:
      "Alternatívne lieky voľte podľa dostupnosti, lokálneho protokolu a odporúčania experta.",
  },
  en: {
    badge: "Step 3",
    title: "Inadequate response",
    description:
      "If the response to atropine is inadequate, start temporary measures and prepare pacing.",
    panelTitle: "UNSTABLE",
    actionTitle: "Consider temporary measures",
    temporaryMeasures: [
      {
        label: "Atropine 0.5 mg IV, repeat up to a maximum of 3 mg",
      },
      {
        label: "Isoprenaline 5 mcg min^-1 IV",
      },
      {
        label: "Adrenaline 2 - 10 mcg min^-1 IV",
      },
      {
        label: "Alternative drugs*",
        route: "/algorithms/adult-resuscitation/bradycardia/alternative-medications",
      },
      {
        label: "and / or",
      },
      {
        label: "Transcutaneous pacing",
        route: "/algorithms/adult-resuscitation/bradycardia/cardiostimulationscreen",
      },
    ],
    expertTitle: "Seek expert help",
    expertDescription: "Arrange transvenous pacing",
    infoTitle: "Note",
    infoDescription:
      "Choose alternative drugs according to availability, local protocol and expert advice.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#FDE3E4",
    panelBorder: "#F5B6BA",
    cardBackground: "#FFFFFF",
    cardBorder: "#075296",
    linkBackground: "#E4EFFD",
    expertBackground: "#D7EDFD",
    expertBorder: "#075296",
    primary: "#075296",
    primaryIcon: "#075296",
    danger: "#ED1C24",
    dangerDark: "#B7151B",
    text: "#10243C",
    lightIconBackground: "#FFFFFF",
  },
  dark: {
    panelBackground: "#341719",
    panelBorder: "#783136",
    cardBackground: "#101B2B",
    cardBorder: "#2F7FBE",
    linkBackground: "#16263B",
    expertBackground: "#102A3F",
    expertBorder: "#2F7FBE",
    primary: "#B9DDFF",
    primaryIcon: "#164C80",
    danger: "#F17C83",
    dangerDark: "#B7151B",
    text: "#F5F8FC",
    lightIconBackground: "#164C80",
  },
};

export default function Step3BradyUnstable() {
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
          styles.urgentPanel,
          {
            borderColor: colors.panelBorder,
            backgroundColor: colors.panelBackground,
          },
        ]}
      >
        <View style={styles.panelTitleRow}>
          <View style={[styles.panelIcon, { backgroundColor: colors.dangerDark }]}>
            <Ionicons name="warning" size={24} color="#FFFFFF" />
          </View>
          <Text style={[styles.panelTitle, { color: colors.danger }]}>
            {text.panelTitle}
          </Text>
        </View>

        <View style={styles.flowContainer}>
          <View
            style={[
              styles.actionCard,
              {
                borderColor: colors.cardBorder,
                backgroundColor: colors.cardBackground,
              },
            ]}
          >
            <View style={styles.cardHeader}>
              <View
                style={[
                  styles.cardIcon,
                  { backgroundColor: colors.primaryIcon },
                ]}
              >
                <Ionicons name="medkit" size={22} color="#FFFFFF" />
              </View>
              <Text style={[styles.cardTitle, { color: colors.primary }]}>
                {text.actionTitle}
              </Text>
            </View>

            <View style={styles.list}>
              {text.temporaryMeasures.map((item) =>
                item.route ? (
                  <Pressable
                    key={item.label}
                    onPress={() => router.push(item.route)}
                    style={({ pressed }) => [
                      styles.linkItem,
                      {
                        borderColor: colors.cardBorder,
                        backgroundColor: colors.linkBackground,
                      },
                      pressed && styles.pressed,
                    ]}
                  >
                    <View
                      style={[styles.dot, { backgroundColor: colors.primary }]}
                    />
                    <Text style={[styles.linkText, { color: colors.primary }]}>
                      {item.label}
                    </Text>
                    <View
                      style={[
                        styles.linkIcon,
                        { backgroundColor: colors.primaryIcon },
                      ]}
                    >
                      <Ionicons
                        name="arrow-forward"
                        size={17}
                        color="#FFFFFF"
                      />
                    </View>
                  </Pressable>
                ) : (
                  <View key={item.label} style={styles.listItem}>
                    <View
                      style={[styles.dot, { backgroundColor: colors.primary }]}
                    />
                    <Text style={[styles.listText, { color: colors.text }]}>
                      {item.label}
                    </Text>
                  </View>
                ),
              )}
            </View>
          </View>

          <FlowConnector />

          <View
            style={[
              styles.expertCard,
              {
                borderColor: colors.expertBorder,
                backgroundColor: colors.expertBackground,
              },
            ]}
          >
            <View
              style={[
                styles.expertIcon,
                { backgroundColor: colors.lightIconBackground },
              ]}
            >
              <Ionicons name="people" size={24} color={colors.primary} />
            </View>
            <View style={styles.expertTextContainer}>
              <Text style={[styles.expertTitle, { color: colors.primary }]}>
                {text.expertTitle}
              </Text>
              <Text style={[styles.expertDescription, { color: colors.text }]}>
                {text.expertDescription}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="information-circle-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  urgentPanel: {
    width: "100%",
    gap: 18,
    padding: 18,
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  panelTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  panelIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  panelTitle: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  flowContainer: {
    width: "100%",
    gap: 12,
  },
  actionCard: {
    width: "100%",
    gap: 15,
    padding: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
  },
  list: {
    gap: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  dot: {
    width: 7,
    height: 7,
    marginTop: 7,
    borderRadius: 4,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  linkText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 20,
  },
  linkIcon: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
  expertCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 28,
    borderCurve: "continuous",
  },
  expertIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  expertTextContainer: {
    flex: 1,
    gap: 3,
  },
  expertTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  expertDescription: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
});
