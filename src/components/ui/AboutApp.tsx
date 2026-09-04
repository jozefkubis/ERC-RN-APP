import {
  type AppLanguage,
  type AppThemeMode,
  useSettings,
} from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

type AboutText = {
  title: string;
  subtitle: string;
  authorTitle: string;
  authorItems: string[];
  purposeTitle: string;
  purposeItems: string[];
  sourcesTitle: string;
  sourcesItems: string[];
  limitsTitle: string;
  limitsItems: string[];
  versionTitle: string;
  versionItems: string[];
};

type AboutColors = {
  background: string;
  statusBar: "dark-content" | "light-content";
  title: string;
  subtitle: string;
  cardBackground: string;
  cardBorder: string;
  cardTitle: string;
  itemText: string;
  iconBackground: string;
  bullet: string;
  warningBackground: string;
  warningBorder: string;
  warningTitle: string;
};

const aboutText: Record<AppLanguage, AboutText> = {
  sk: {
    title: "O aplikácii a zdroje",
    subtitle:
      "Stručné informácie o účele aplikácie, autorovi, použitých zdrojoch a obmedzeniach.",
    authorTitle: "Autor",
    authorItems: [
      "Bc. Jozef Kubis",
      "zdravotnícky záchranár",
      "kontakt doplníme pred odoslaním žiadosti ERC/SRR",
    ],
    purposeTitle: "Účel aplikácie",
    purposeItems: [
      "Aplikácia slúži ako jednoduchá pomôcka na rýchle otvorenie algoritmov ERC 2025.",
      "Je pripravovaná ako prezentačná a študijná aplikácia pre Android a iOS.",
      "Cieľom je prehľadné zobrazenie krokov, vyhľadávanie, história a vybrané kalkulačky.",
    ],
    sourcesTitle: "Použité zdroje",
    sourcesItems: [
      "European Resuscitation Council Guidelines 2025",
      "Slovenská resuscitačná rada - odporúčania ERC 2025",
      "Resuscitation Journal - publikované odporúčania ERC 2025",
      "Intersurgical i-gel - údaje výrobcu pre supraglotickú pomôcku",
    ],
    limitsTitle: "Dôležité obmedzenia",
    limitsItems: [
      "Aplikácia zatiaľ nie je oficiálne schválená ERC ani SRR.",
      "Obsah aplikácie nenahrádza odborné rozhodnutie, lokálny protokol ani aktuálne odporúčania pracoviska.",
      "Pred verejným použitím je potrebná nezávislá klinická kontrola medicínskeho obsahu.",
      "Povolenie na použitie materiálov ERC/SRR nie je to isté ako odborné schválenie aplikácie.",
    ],
    versionTitle: "Verzia a kontrola",
    versionItems: [
      "Odporúčania: ERC 2025",
      "Verzia aplikácie: pracovná verzia",
      "Dátum poslednej obsahovej kontroly doplníme po finálnom audite.",
    ],
  },
  en: {
    title: "About and sources",
    subtitle:
      "A short note about the app purpose, author, sources, and limitations.",
    authorTitle: "Author",
    authorItems: [
      "Bc. Jozef Kubis",
      "paramedic",
      "contact details will be added before contacting ERC/SRR",
    ],
    purposeTitle: "App purpose",
    purposeItems: [
      "The app is intended as a simple aid for quickly opening ERC 2025 algorithms.",
      "It is being prepared as a presentation and study Android and iOS app.",
      "The goal is clear step-by-step display, search, history, and selected calculators.",
    ],
    sourcesTitle: "Sources used",
    sourcesItems: [
      "European Resuscitation Council Guidelines 2025",
      "Slovak Resuscitation Council - ERC 2025 recommendations",
      "Resuscitation Journal - published ERC 2025 recommendations",
      "Intersurgical i-gel - manufacturer information for the supraglottic airway",
    ],
    limitsTitle: "Important limitations",
    limitsItems: [
      "The app has not yet been officially approved by ERC or SRR.",
      "The app content does not replace professional judgement, local protocols, or current workplace guidance.",
      "An independent clinical review of the medical content is required before public use.",
      "Permission to use ERC/SRR materials is not the same as clinical endorsement of the app.",
    ],
    versionTitle: "Version and review",
    versionItems: [
      "Guidelines: ERC 2025",
      "App version: work in progress",
      "Date of the last content review will be added after the final audit.",
    ],
  },
};

const aboutColors: Record<AppThemeMode, AboutColors> = {
  light: {
    background: "#F7F8FC",
    statusBar: "dark-content" as const,
    title: "#10243C",
    subtitle: "#5C6574",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    cardTitle: "#075296",
    itemText: "#24425F",
    iconBackground: "#075296",
    bullet: "#075296",
    warningBackground: "#FFF6DC",
    warningBorder: "#F0DEB4",
    warningTitle: "#B45309",
  },
  dark: {
    background: "#07111F",
    statusBar: "light-content" as const,
    title: "#F5F8FC",
    subtitle: "#AAB6C7",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    cardTitle: "#77B7F2",
    itemText: "#D7E1EE",
    iconBackground: "#0E4A80",
    bullet: "#77B7F2",
    warningBackground: "#2C2516",
    warningBorder: "#6A511D",
    warningTitle: "#F7C66B",
  },
};

export default function AboutApp() {
  const { language, themeMode } = useSettings();
  const text: AboutText = aboutText[language];
  const colors = aboutColors[themeMode];

  return (
    <>
      <StatusBar barStyle={colors.statusBar} />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <View
            style={[
              styles.headerIcon,
              { backgroundColor: colors.iconBackground },
            ]}
          >
            <Ionicons
              name="information-circle-outline"
              size={28}
              color="#FFFFFF"
            />
          </View>
          <Text style={[styles.title, { color: colors.title }]}>
            {text.title}
          </Text>
          <Text style={[styles.subtitle, { color: colors.subtitle }]}>
            {text.subtitle}
          </Text>
        </View>

        <AboutSection
          title={text.authorTitle}
          items={text.authorItems}
          colors={colors}
        />
        <AboutSection
          title={text.purposeTitle}
          items={text.purposeItems}
          colors={colors}
        />
        <AboutSection
          title={text.sourcesTitle}
          items={text.sourcesItems}
          colors={colors}
        />
        <AboutSection
          title={text.limitsTitle}
          items={text.limitsItems}
          colors={colors}
          tone="warning"
        />
        <AboutSection
          title={text.versionTitle}
          items={text.versionItems}
          colors={colors}
        />
      </ScrollView>
    </>
  );
}

type AboutSectionProps = {
  title: string;
  items: string[];
  colors: AboutColors;
  tone?: "default" | "warning";
};

function AboutSection({
  title,
  items,
  colors,
  tone = "default",
}: AboutSectionProps) {
  const isWarning = tone === "warning";

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: isWarning ? colors.warningBorder : colors.cardBorder,
          backgroundColor: isWarning
            ? colors.warningBackground
            : colors.cardBackground,
        },
      ]}
    >
      <Text
        style={[
          styles.cardTitle,
          { color: isWarning ? colors.warningTitle : colors.cardTitle },
        ]}
      >
        {title}
      </Text>

      <View style={styles.itemList}>
        {items.map((item) => (
          <View key={item} style={styles.itemRow}>
            <View style={[styles.bullet, { backgroundColor: colors.bullet }]} />
            <Text style={[styles.itemText, { color: colors.itemText }]}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    paddingBottom: 40,
    gap: 14,
  },
  header: {
    width: "100%",
    alignItems: "flex-start",
    gap: 8,
    paddingBottom: 4,
  },
  headerIcon: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
  },
  card: {
    width: "100%",
    gap: 12,
    padding: 17,
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
  },
  itemList: {
    gap: 9,
  },
  itemRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    marginTop: 7,
    borderRadius: 3,
  },
  itemText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
});
