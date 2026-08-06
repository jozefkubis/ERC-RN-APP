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
        title="Resuscitácia v mikrogravitácii"
        description="V mikrogravitácii najprv zabezpečte pacienta a záchrancu; ALS postupy sú podobné ako na zemi až po stabilizácii polohy pacienta."
        urgent
      />

      <HeroCard
        eyebrow="Prvý krok"
        title="Zabezpečte pacienta"
        description="Dýchacie cesty, defibrilácia a i.v./i.o. prístup sú podobné ALS na zemi, ale iba vtedy, keď je pacient zabezpečený."
        iconName="planet"
        danger
      />

      <ContentCard
        title="Kompresie a technika"
        iconName="construct-outline"
        tone="warning"
        items={[
          "Zvážte použitie prístroja na mechanické kompresie hrudníka.",
          "Pred pokusom o rozšírené výkony stabilizujte polohu pacienta aj poskytovateľa.",
          "Defibriláciu, zabezpečenie dýchacích ciest a vstup vykonajte podľa dostupného vybavenia a výcviku posádky.",
        ]}
      />

      <ContentCard
        title="Telemedicína"
        iconName="call-outline"
        tone="info"
        items={[
          "Počas zastavenia srdca na nízkej zemskej obežnej dráhe zvážte konzultáciu prostredníctvom telemedicíny.",
          "Telemedicínu využite, ak je to uskutočniteľné a dovoľujú to personálne kapacity.",
        ]}
      />

      <ContentCard
        title="Ukončenie resuscitácie"
        iconName="person-outline"
        items={[
          "O ukončení resuscitácie by mal rozhodnúť člen posádky s najvyššou zdravotníckou kvalifikáciou.",
          "Pri rozhodovaní využite konzultáciu prostredníctvom telemedicíny, ak je dostupná.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS"
        description="Pozemský ALS algoritmus ako základ po zabezpečení pacienta"
        iconName="pulse-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
