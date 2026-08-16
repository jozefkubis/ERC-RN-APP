import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Riešte reverzibilné príčiny súčasne",
    description: "Vykonajte intervencie podľa klinickej priority, nie postupne.",
    cprEyebrow: "Traumatické zastavenie krvného obehu",
    cprTitle: "Začnite KPR",
    cprDescription:
      "Prioritizujte terapiu reverzibilných príčin pred kompresiami hrudníka.",
    causesTitle: "Reverzibilné príčiny",
    causesItems: ["Hypovolémia", "Hypoxia", "Tenzný pneumotorax", "Tamponáda"],
    circulationTitle: "Kontrola krvácania a obehu",
    circulationItems: [
      "Zastavte katastrofické vonkajšie krvácanie.",
      "Aplikujte panvový pás.",
      "Podajte krvné deriváty a aktivujte masívny transfúzny protokol.",
    ],
    airwayTitle: "Dýchacie cesty a hrudník",
    airwayItems: [
      "Zabezpečte dýchacie cesty a maximalizujte oxygenáciu.",
      "Vykonajte bilaterálnu dekompresiu hrudníka (torakostómiu).",
    ],
    specialisedTitle: "Špecializované intervencie",
    specialisedItems: [
      "Uvoľnite tamponádu pri penetrujúcom poranení hrudníka.",
      "Zvážte kontrolu proximálnej cievy vrátane manuálnej kompresie aorty.",
    ],
    thoracotomyTitle: "Resuscitatívna torakotómia",
    thoracotomyLead: "Zvážte ju len pri splnení podmienok:",
    thoracotomyItems: [
      "Dostupná expertíza a potrebné vybavenie.",
      "Vhodné prostredie na vykonanie výkonu.",
      "Od zastavenia obehu uplynulo menej ako 15 minút.",
    ],
    question: "Dosiahol pacient ROSC?",
    yesTitle: "Áno – pokračovať na krok 3",
    yesDescription: "Pacient dosiahol návrat spontánneho obehu",
    noLabel: "Nie",
    noTitle: "Zvážte ukončenie resuscitácie",
  },
  en: {
    badge: "Step 2",
    title: "Treat reversible causes simultaneously",
    description: "Perform interventions according to clinical priority, not sequentially.",
    cprEyebrow: "Traumatic cardiac arrest",
    cprTitle: "Start CPR",
    cprDescription:
      "Prioritise treatment of reversible causes over chest compressions.",
    causesTitle: "Reversible causes",
    causesItems: ["Hypovolaemia", "Hypoxia", "Tension pneumothorax", "Tamponade"],
    circulationTitle: "Haemorrhage and circulation control",
    circulationItems: [
      "Control catastrophic external haemorrhage.",
      "Apply a pelvic binder.",
      "Give blood products and activate the massive transfusion protocol.",
    ],
    airwayTitle: "Airway and chest",
    airwayItems: [
      "Secure the airway and maximise oxygenation.",
      "Perform bilateral chest decompression (thoracostomy).",
    ],
    specialisedTitle: "Specialised interventions",
    specialisedItems: [
      "Relieve tamponade in penetrating chest injury.",
      "Consider proximal vascular control, including manual aortic compression.",
    ],
    thoracotomyTitle: "Resuscitative thoracotomy",
    thoracotomyLead: "Consider only when the following conditions are met:",
    thoracotomyItems: [
      "Expertise and necessary equipment are available.",
      "The environment is suitable for the procedure.",
      "Less than 15 minutes have elapsed since cardiac arrest.",
    ],
    question: "Has the patient achieved ROSC?",
    yesTitle: "Yes – continue to step 3",
    yesDescription: "The patient has achieved return of spontaneous circulation",
    noLabel: "No",
    noTitle: "Consider terminating resuscitation",
  },
};

const outcomeColors = {
  light: {
    border: "#CBD3DF",
    background: "#FFFFFF",
    iconBackground: "#E4EFFD",
    icon: "#075296",
    label: "#5C6574",
    title: "#10243C",
  },
  dark: {
    border: "#31435A",
    background: "#101B2B",
    iconBackground: "#20334C",
    icon: "#77B7F2",
    label: "#AAB6C7",
    title: "#F5F8FC",
  },
};

export default function TraumaStep2() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = outcomeColors[themeMode];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
        urgent
      />

      <HeroCard
        eyebrow={text.cprEyebrow}
        title={text.cprTitle}
        description={text.cprDescription}
        iconName="warning"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.causesTitle}
        iconName="search-outline"
        tone="info"
        items={text.causesItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.circulationTitle}
        iconName="water-outline"
        tone="danger"
        items={text.circulationItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.airwayTitle}
        iconName="body-outline"
        items={text.airwayItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.specialisedTitle}
        iconName="medkit-outline"
        items={text.specialisedItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.thoracotomyTitle}
        iconName="alert-outline"
        tone="warning"
        lead={text.thoracotomyLead}
        items={text.thoracotomyItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard question={text.question} themeMode={themeMode} />

      <FlowActionButton
        title={text.yesTitle}
        description={text.yesDescription}
        iconName="checkmark"
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/trauma/step3")}
      />

      <View
        style={[
          styles.noOutcomeCard,
          { borderColor: colors.border, backgroundColor: colors.background },
        ]}
      >
        <View
          style={[
            styles.noOutcomeIcon,
            { backgroundColor: colors.iconBackground },
          ]}
        >
          <Ionicons name="close" size={24} color={colors.icon} />
        </View>
        <View style={styles.noOutcomeTextContainer}>
          <Text selectable style={[styles.noOutcomeLabel, { color: colors.label }]}>
            {text.noLabel}
          </Text>
          <Text selectable style={[styles.noOutcomeTitle, { color: colors.title }]}>
            {text.noTitle}
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
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  noOutcomeIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  noOutcomeTextContainer: {
    flex: 1,
    gap: 3,
  },
  noOutcomeLabel: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  noOutcomeTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
  },
});
