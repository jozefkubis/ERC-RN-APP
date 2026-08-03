import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TraumaStep2() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 2"
        title="Riešte reverzibilné príčiny súčasne"
        description="Vykonajte intervencie podľa klinickej priority, nie postupne."
        urgent
      />

      <HeroCard
        eyebrow="Traumatické zastavenie krvného obehu"
        title="Začnite KPR"
        description="Prioritizujte terapiu reverzibilných príčin pred kompresiami hrudníka."
        iconName="warning"
        danger
      />

      <ContentCard
        title="Reverzibilné príčiny"
        iconName="search-outline"
        tone="info"
        items={[
          "Hypovolémia",
          "Hypoxia",
          "Tenzný pneumotorax",
          "Tamponáda",
        ]}
      />

      <ContentCard
        title="Kontrola krvácania a obehu"
        iconName="water-outline"
        tone="danger"
        items={[
          "Zastavte katastrofické vonkajšie krvácanie.",
          "Aplikujte panvový pás.",
          "Podajte krvné deriváty a aktivujte masívny transfúzny protokol.",
        ]}
      />

      <ContentCard
        title="Dýchacie cesty a hrudník"
        iconName="body-outline"
        items={[
          "Zabezpečte dýchacie cesty a maximalizujte oxygenáciu.",
          "Vykonajte bilaterálnu dekompresiu hrudníka (torakostómiu).",
        ]}
      />

      <ContentCard
        title="Špecializované intervencie"
        iconName="medkit-outline"
        items={[
          "Uvoľnite tamponádu pri penetrujúcom poranení hrudníka.",
          "Zvážte kontrolu proximálnej cievy vrátane manuálnej kompresie aorty.",
        ]}
      />

      <ContentCard
        title="Resuscitatívna torakotómia"
        iconName="alert-outline"
        tone="warning"
        lead="Zvážte ju len pri splnení podmienok:"
        items={[
          "Dostupná expertíza a potrebné vybavenie.",
          "Vhodné prostredie na vykonanie výkonu.",
          "Od zastavenia obehu uplynulo menej ako 15 minút.",
        ]}
      />

      <FlowConnector />

      <DecisionCard question="Dosiahol pacient ROSC?" />

      <FlowActionButton
        title="Áno – pokračovať na krok 3"
        description="Pacient dosiahol návrat spontánneho obehu"
        iconName="checkmark"
        onPress={() => router.push("/algorithms/special/trauma/step3")}
      />

      <View style={styles.noOutcomeCard}>
        <View style={styles.noOutcomeIcon}>
          <Ionicons name="close" size={24} color="#075296" />
        </View>
        <View style={styles.noOutcomeTextContainer}>
          <Text selectable style={styles.noOutcomeLabel}>
            Nie
          </Text>
          <Text selectable style={styles.noOutcomeTitle}>
            Zvážte ukončenie resuscitácie
          </Text>
        </View>
      </View>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  noOutcomeCard: {
    width: "100%",
    minHeight: 88,
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
  noOutcomeIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  noOutcomeTextContainer: {
    flex: 1,
    gap: 3,
  },
  noOutcomeLabel: {
    color: "#5C6574",
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  noOutcomeTitle: {
    color: "#10243C",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
  },
});
