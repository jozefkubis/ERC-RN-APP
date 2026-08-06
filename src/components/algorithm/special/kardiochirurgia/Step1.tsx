import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Špeciálne prostredie"
        title="Zastavenie obehu po kardiochirurgii"
        description="Po operácii srdca rýchlo potvrďte zastavenie obehu, využite monitorovanie a pri skorom pooperačnom zastavení pripravte re-sternotómiu."
        urgent
      />

      <HeroCard
        eyebrow="Prvých 5 minút"
        title="Re-sternotómia pri operácii do 10 dní"
        description="Ak je pacient do 10 dní po kardiochirurgii, vykonajte re-sternotómiu do 5 minút bez ohľadu na miesto, kde sa pacient nachádza."
        iconName="time"
        danger
      />

      <ContentCard
        title="Potvrďte zastavenie obehu"
        iconName="pulse-outline"
        tone="danger"
        items={[
          "Potvrďte zastavenie srdca pomocou klinických príznakov.",
          "Hľadajte absenciu pulzácií na arteriálnej krivke.",
          "Zvážte ultrazvuk na identifikáciu reverzibilných príčin.",
        ]}
      />

      <ContentCard
        title="Upravte rytmový postup"
        iconName="flash-outline"
        tone="warning"
        items={[
          "Pri VF/pVT podajte až 3 po sebe idúce defibrilačné výboje.",
          "Pri asystólii alebo extrémnej bradykardii použite epikardiálnu kardiostimuláciu na maximálny výkon.",
          "Znížte dávku adrenalínu i.v. na 0,05-0,1 mg.",
        ]}
      />

      <ContentCard
        title="Po otvorení hrudníka"
        iconName="hand-left-outline"
        items={[
          "Keď je hrudník znovu otvorený, poskytnite priame kompresie srdca.",
          "Pokračujte v cielenej liečbe reverzibilnej príčiny podľa nálezu a tímového plánu.",
        ]}
      />

      <ContentCard
        title="Pri refraktérnom priebehu"
        iconName="git-branch-outline"
        tone="info"
        items={[
          "Zvážte eKPR predĺženú resuscitáciu.",
          "eKPR zvažujte najmä pri resuscitácii alebo minimálne invazívnych prípadoch, kde môže byť opätovné otvorenie hrudníka oneskorené.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS"
        description="Použiť všeobecný algoritmus rozšírenej resuscitácie"
        iconName="pulse-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
