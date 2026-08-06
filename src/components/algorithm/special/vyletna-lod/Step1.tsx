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
        title="Výletná loď"
        description="Pri zastavení obehu na výletnej lodi okamžite využite palubné zdravotnícke zdroje a podľa polohy lode zapojte externú pomoc."
        urgent
      />

      <HeroCard
        eyebrow="Okamžite"
        title="Využite všetky palubné zdroje"
        description="Zapojte dostupný zdravotnícky personál, vybavenie a organizáciu lode tak, aby sa ALS začal bez zdržania."
        iconName="boat"
        danger
      />

      <ContentCard
        title="Aktivujte pomoc"
        iconName="people-outline"
        tone="danger"
        items={[
          "Okamžite využite všetky zdravotnícke zdroje na palube, vrátane personálu a vybavenia.",
          "Pri nedostatočnom počte zdravotníckych pracovníkov vyzvite ďalší zdravotnícky personál prostredníctvom hlásenia na palube.",
          "Majte na palube k dispozícii všetko potrebné vybavenie pre ALS.",
        ]}
      />

      <ContentCard
        title="Externá podpora"
        iconName="call-outline"
        tone="info"
        items={[
          "Ak ste blízko pobrežia, aktivujte vrtuľníkovú záchrannú zdravotnú službu.",
          "Zvážte skorú konzultáciu prostredníctvom telemedicíny.",
          "Koordinujte ďalší postup podľa polohy lode, dostupnosti evakuácie a klinického stavu pacienta.",
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
