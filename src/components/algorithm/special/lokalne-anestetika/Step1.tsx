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
        badge="Toxické látky"
        title="Systémová toxicita lokálnych anestetík"
        description="Pri podozrení na LAST okamžite zastavte lokálne anestetikum, liečte hypoxiu a acidózu a začnite lipidovú liečbu."
        urgent
      />

      <HeroCard
        eyebrow="Bezodkladne"
        title="Zastavte lokálne anestetikum"
        description="Ak je to možné, okamžite ukončite podávanie lokálnej anestézie a pripravte 20 % lipidovú emulziu."
        iconName="ban"
        danger
      />

      <ContentCard
        title="Stabilizujte pacienta"
        iconName="medical-outline"
        tone="danger"
        items={[
          "Hyperventilujte pacienta, aby ste zvýšili pH plazmy, ak je prítomná metabolická acidóza.",
          "Liečte záchvaty podávaním benzodiazepínov.",
          "Pri zastavení obehu pokračujte v resuscitácii a zvážte jej predĺženie nad 1 hodinu.",
        ]}
      />

      <ContentCard
        title="Upravte adrenalín"
        iconName="pulse-outline"
        tone="warning"
        items={[
          "Podajte nižšiu dávku adrenalínu.",
          "Použite dávku najviac 1 mikrogram/kg namiesto 1 mg i.v. bolusu.",
        ]}
      />

      <ContentCard
        title="Podajte 20 % lipidovú emulziu"
        iconName="water-outline"
        tone="info"
        items={[
          "Počiatočný bolus: 1,5 ml/kg i.v. počas 1 minúty.",
          "Potom pokračujte infúziou 0,25 ml/kg/min.",
          "Neprekročte maximálnu kumulatívnu dávku 12 ml/kg i.v. 20 % lipidovej emulzie.",
        ]}
      />

      <ContentCard
        title="Ak nie je ROSC do 5 minút"
        iconName="time-outline"
        tone="warning"
        items={[
          "Zdvojnásobte rýchlosť infúzie lipidov.",
          "Podajte maximálne dva ďalšie lipidové bolusy.",
          "Ďalšie bolusy podávajte v 5-minútových intervaloch, kým nedôjde k ROSC.",
        ]}
      />

      <ContentCard
        title="Pri refraktérnom priebehu"
        iconName="git-branch-outline"
        tone="info"
        items={[
          "Zvážte eKPR podľa dostupnosti a miestnych protokolov.",
          "Pokračujte v cielenej liečbe hypoxie, acidózy a záchvatov.",
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
