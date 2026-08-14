import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import InfoCard from "@/src/components/ui/info-card";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Stabilizácia",
    title: "Po klinickom zlepšení",
    description:
      "Anafylaxia sa môže znovu zhoršiť. Pokračujte v monitorovaní a zaistite bezpečnú následnú starostlivosť.",
    heroEyebrow: "Pokračujte v ABCDE",
    heroTitle: "Sledujte klinickú odpoveď",
    heroDescription:
      "Udržiavajte monitorovanie, liečte pretrvávajúce problémy a rozhodnite o ďalšom sledovaní podľa rizika.",
    beforeTitle: "Pred ukončením akútnej starostlivosti",
    beforeItems: [
      "Zaznamenajte spúšťač, čas príznakov a všetky dávky adrenalínu",
      "Zvážte odber tryptázy podľa lokálneho protokolu bez odkladu urgentnej liečby",
      "Dĺžku monitorovania určte podľa závažnosti, odpovede a rizika bifázickej reakcie",
      "Zaistite alergologické vyšetrenie a písomný núdzový plán",
      "Ak je indikovaný autoinjektor, zabezpečte predpis aj praktické poučenie",
    ],
    importantTitle: "Dôležité",
    importantDescription:
      "Antihistaminiká ani kortikosteroidy nenahrádzajú adrenalín a nesmú oddialiť liečbu problémov A, B alebo C.",
    backTitle: "Späť na špeciálne okolnosti",
    backDescription: "Ukončiť tento algoritmus",
  },
  en: {
    badge: "Stabilisation",
    title: "After clinical improvement",
    description:
      "Anaphylaxis can deteriorate again. Continue monitoring and arrange safe aftercare.",
    heroEyebrow: "Continue ABCDE",
    heroTitle: "Monitor clinical response",
    heroDescription:
      "Maintain monitoring, treat ongoing problems, and decide further observation based on risk.",
    beforeTitle: "Before ending acute care",
    beforeItems: [
      "Record the trigger, time of symptoms, and all adrenaline doses",
      "Consider tryptase sampling according to local protocol without delaying urgent treatment",
      "Set the monitoring duration according to severity, response, and risk of biphasic reaction",
      "Arrange allergy follow-up and a written emergency plan",
      "If an autoinjector is indicated, arrange prescription and practical teaching",
    ],
    importantTitle: "Important",
    importantDescription:
      "Antihistamines and corticosteroids do not replace adrenaline and must not delay treatment of A, B, or C problems.",
    backTitle: "Back to special circumstances",
    backDescription: "Finish this algorithm",
  },
};

export default function Aftercare() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
      />

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="pulse"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.beforeTitle}
        iconName="clipboard-outline"
        items={text.beforeItems}
        themeMode={themeMode}
      />

      <InfoCard
        title={text.importantTitle}
        description={text.importantDescription}
        iconName="alert-circle-outline"
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.backTitle}
        description={text.backDescription}
        iconName="grid-outline"
        variant="light"
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special")}
      />
    </AlgorithmScreen>
  );
}
