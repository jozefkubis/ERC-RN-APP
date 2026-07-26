import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const hItems = [
  {
    title: "Hypoxia",
    description: "Skontrolujte oxygenáciu, ventiláciu a polohu pomôcok v dýchacích cestách.",
  },
  {
    title: "Hypovolémia",
    description: "Hľadajte krvácanie alebo straty tekutín a zvážte cielenú objemovú liečbu.",
  },
  {
    title: "Hyper-/hypokaliémia / metabolické príčiny",
    description: "Myslite na poruchy iónov, acidózu, renálne zlyhanie a dostupnú liečbu.",
  },
  {
    title: "Hypotermia, hypertermia",
    description: "Zmerajte teplotu a začnite cielený manažment teploty.",
  },
];

const tItems = [
  {
    title: "Toxíny",
    description: "Zistite lieky, intoxikácie alebo expozície a zvážte špecifickú liečbu.",
  },
  {
    title: "Tamponáda (srdca)",
    description: "Hľadajte klinické známky, využite POCUS, ak je dostupný, a riešte príčinu.",
  },
  {
    title: "Tenzný pneumotorax",
    description: "Pri podozrení liečte okamžite podľa lokálneho postupu.",
  },
  {
    title: "Trombóza (koronárna / pľúcna)",
    description: "Zvážte koronárnu príčinu alebo pľúcnu embóliu a dostupnú reperfúznu liečbu.",
  },
];

export default function FourHFourT() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"4H / 4T"}
        title={"Reverzibilné príčiny"}
        description={"Počas každej vetvy ALS aktívne hľadajte a liečte príčinu zastavenia obehu. Tento checklist patrí k defibrilovateľným aj nedefibrilovateľným rytmom."}
      />

        <CauseSection title="4H" items={hItems} iconName="water-outline" />
        <CauseSection title="4T" items={tItems} iconName="git-branch-outline" />

        <InfoCard
          title="Počas KPR"
          description="Reverzibilné príčiny riešte paralelne s kvalitnou KPR, defibriláciou alebo liekmi podľa aktuálnej vetvy algoritmu."
          iconName="information-circle-outline"
        />

        <Pressable
          style={({ pressed }) => [
            styles.backCard,
            pressed && styles.pressed,
          ]}
          onPress={() => router.back()}
        >
          <View style={styles.backIcon}>
            <Ionicons name="arrow-back" size={22} color="#075296" />
          </View>
          <View style={styles.backTextContainer}>
            <Text style={styles.backTitle}>Späť</Text>
            <Text style={styles.backDescription}>Vrátiť sa na predchádzajúci krok</Text>
          </View>
        </Pressable>
    </AlgorithmScreen>
  );
}

type CauseSectionProps = {
  title: string;
  items: typeof hItems;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
};

function CauseSection({ title, items, iconName }: CauseSectionProps) {
  return (
    <View style={styles.sectionCard}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionIcon}>
          <Ionicons name={iconName} size={22} color="#FFFFFF" />
        </View>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>

      <View style={styles.causeList}>
        {items.map((item) => (
          <View key={item.title} style={styles.causeRow}>
            <View style={styles.causeBullet}>
              <Ionicons name="checkmark" size={14} color="#FFFFFF" />
            </View>
            <View style={styles.causeTextContainer}>
              <Text style={styles.causeTitle}>{item.title}</Text>
              <Text style={styles.causeDescription}>{item.description}</Text>
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
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
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
    backgroundColor: "#075296",
  },
  sectionTitle: {
    color: "#075296",
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
    backgroundColor: "#19A85B",
  },
  causeTextContainer: {
    flex: 1,
    gap: 3,
  },
  causeTitle: {
    color: "#10243C",
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 20,
  },
  causeDescription: {
    color: "#5C6574",
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
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  backIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  backTextContainer: {
    flex: 1,
    gap: 4,
  },
  backTitle: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  backDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
