import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "4H / 4T",
    title: "Reverzibilné príčiny",
    description:
      "Počas každej vetvy ALS aktívne hľadajte a liečte príčinu zastavenia obehu. Tento checklist patrí k defibrilovateľným aj nedefibrilovateľným rytmom.",
    hItems: [
      {
        title: "Hypoxia",
        description:
          "Skontrolujte oxygenáciu, ventiláciu a polohu pomôcok v dýchacích cestách.",
      },
      {
        title: "Hypovolémia",
        description:
          "Hľadajte krvácanie alebo straty tekutín a zvážte cielenú objemovú liečbu.",
      },
      {
        title: "Hyper-/hypokaliémia / metabolické príčiny",
        description:
          "Myslite na poruchy iónov, acidózu, renálne zlyhanie a dostupnú liečbu.",
      },
      {
        title: "Hypotermia, hypertermia",
        description: "Zmerajte teplotu a začnite cielený manažment teploty.",
      },
    ],
    tItems: [
      {
        title: "Toxíny",
        description:
          "Zistite lieky, intoxikácie alebo expozície a zvážte špecifickú liečbu.",
      },
      {
        title: "Tamponáda srdca",
        description:
          "Hľadajte klinické známky, využite POCUS, ak je dostupný, a riešte príčinu.",
      },
      {
        title: "Tenzný pneumotorax",
        description: "Pri podozrení liečte okamžite podľa lokálneho postupu.",
      },
      {
        title: "Trombóza koronárna / pľúcna",
        description:
          "Zvážte koronárnu príčinu alebo pľúcnu embóliu a dostupnú reperfúznu liečbu.",
      },
    ],
    infoTitle: "Počas KPR",
    infoDescription:
      "Reverzibilné príčiny riešte paralelne s kvalitnou KPR, defibriláciou alebo liekmi podľa aktuálnej vetvy algoritmu.",
    backTitle: "Späť",
    backDescription: "Vrátiť sa na predchádzajúci krok",
  },
  en: {
    badge: "4H / 4T",
    title: "Reversible causes",
    description:
      "During every ALS pathway, actively search for and treat the cause of cardiac arrest. This checklist belongs with both shockable and non-shockable rhythms.",
    hItems: [
      {
        title: "Hypoxia",
        description:
          "Check oxygenation, ventilation and the position of airway devices.",
      },
      {
        title: "Hypovolaemia",
        description:
          "Look for bleeding or fluid losses and consider targeted volume treatment.",
      },
      {
        title: "Hyper-/hypokalaemia / metabolic causes",
        description:
          "Consider electrolyte disorders, acidosis, renal failure and available treatment.",
      },
      {
        title: "Hypothermia, hyperthermia",
        description:
          "Measure temperature and start targeted temperature management.",
      },
    ],
    tItems: [
      {
        title: "Toxins",
        description:
          "Identify drugs, poisoning or exposures and consider specific treatment.",
      },
      {
        title: "Tamponade, cardiac",
        description:
          "Look for clinical signs, use POCUS if available and treat the cause.",
      },
      {
        title: "Tension pneumothorax",
        description:
          "If suspected, treat immediately according to local procedure.",
      },
      {
        title: "Thrombosis, coronary / pulmonary",
        description:
          "Consider a coronary cause or pulmonary embolism and available reperfusion treatment.",
      },
    ],
    infoTitle: "During CPR",
    infoDescription:
      "Treat reversible causes in parallel with high-quality CPR, defibrillation or drugs according to the current algorithm branch.",
    backTitle: "Back",
    backDescription: "Return to the previous step",
  },
};

const cardColors = {
  light: {
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    iconBackground: "#075296",
    bulletBackground: "#19A85B",
    lightIconBackground: "#E4EFFD",
    primary: "#075296",
    title: "#10243C",
    description: "#5C6574",
    arrow: "#075296",
  },
  dark: {
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    iconBackground: "#164C80",
    bulletBackground: "#168A4B",
    lightIconBackground: "#164C80",
    primary: "#B9DDFF",
    title: "#F5F8FC",
    description: "#AAB6C7",
    arrow: "#B9DDFF",
  },
};

type CauseItem = {
  title: string;
  description: string;
};

type CauseSectionProps = {
  title: string;
  items: CauseItem[];
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  colors: (typeof cardColors)["light"];
};

export default function FourHFourT() {
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

      <CauseSection
        title="4H"
        items={text.hItems}
        iconName="water-outline"
        colors={colors}
      />
      <CauseSection
        title="4T"
        items={text.tItems}
        iconName="git-branch-outline"
        colors={colors}
      />

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="information-circle-outline"
        themeMode={themeMode}
      />

      <Pressable
        style={({ pressed }) => [
          styles.backCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
          pressed && styles.pressed,
        ]}
        onPress={() => router.back()}
      >
        <View
          style={[styles.backIcon, { backgroundColor: colors.lightIconBackground }]}
        >
          <Ionicons name="arrow-back" size={22} color={colors.arrow} />
        </View>
        <View style={styles.backTextContainer}>
          <Text style={[styles.backTitle, { color: colors.title }]}>
            {text.backTitle}
          </Text>
          <Text style={[styles.backDescription, { color: colors.description }]}>
            {text.backDescription}
          </Text>
        </View>
      </Pressable>
    </AlgorithmScreen>
  );
}

function CauseSection({ title, items, iconName, colors }: CauseSectionProps) {
  return (
    <View
      style={[
        styles.sectionCard,
        {
          borderColor: colors.cardBorder,
          backgroundColor: colors.cardBackground,
        },
      ]}
    >
      <View style={styles.sectionHeader}>
        <View
          style={[styles.sectionIcon, { backgroundColor: colors.iconBackground }]}
        >
          <Ionicons name={iconName} size={22} color="#FFFFFF" />
        </View>
        <Text style={[styles.sectionTitle, { color: colors.primary }]}>
          {title}
        </Text>
      </View>

      <View style={styles.causeList}>
        {items.map((item) => (
          <View key={item.title} style={styles.causeRow}>
            <View
              style={[
                styles.causeBullet,
                { backgroundColor: colors.bulletBackground },
              ]}
            >
              <Ionicons name="checkmark" size={14} color="#FFFFFF" />
            </View>
            <View style={styles.causeTextContainer}>
              <Text style={[styles.causeTitle, { color: colors.title }]}>
                {item.title}
              </Text>
              <Text
                style={[
                  styles.causeDescription,
                  { color: colors.description },
                ]}
              >
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  sectionIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 25,
  },
  causeList: {
    width: "100%",
    gap: 12,
  },
  causeRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  causeBullet: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  causeTextContainer: {
    flex: 1,
    gap: 3,
  },
  causeTitle: {
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 20,
  },
  causeDescription: {
    fontSize: 12,
    lineHeight: 18,
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
