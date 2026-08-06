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
        title="Zastavenie krvného obehu pri športe"
        description="Pri náhlom kolapse športovca je kľúčová pripravenosť športoviska, okamžitý prístup na plochu a rýchle spustenie resuscitácie."
        urgent
      />

      <HeroCard
        eyebrow="Priorita na podujatí"
        title="Zabezpečte okamžitý prístup na hraciu plochu"
        description="Záchranný tím sa musí dostať k pacientovi rýchlo a bezpečne, bez zdržania organizačnými alebo bezpečnostnými bariérami."
        iconName="walk"
        danger
      />

      <ContentCard
        title="Prevencia a riziko"
        iconName="shield-checkmark-outline"
        tone="info"
        items={[
          "Skríning ako primárna prevencia zohráva dôležitú úlohu, ale zostáva kontroverzný.",
          "Všetky športy a športoviská by mali vykonať hodnotenie rizika náhleho zastavenia obehu.",
          "Hodnotenie rizika má zohľadniť pravdepodobnosť udalosti aj jej následky.",
        ]}
      />

      <ContentCard
        title="Pripravenosť športoviska"
        iconName="map-outline"
        tone="warning"
        items={[
          "Zaveďte stratégie zmiernenia rizika podľa typu športu a priestoru.",
          "Vopred určte prístupové cesty pre záchranný tím.",
          "Udržujte plán tak, aby bol použiteľný aj počas zápasu alebo hromadného podujatia.",
        ]}
      />

      <ContentCard
        title="Zvyšujte povedomie"
        iconName="megaphone-outline"
        items={[
          "Programy zvyšovania povedomia na športových podujatiach sú uskutočniteľné.",
          "Zamerajte ich aj na skupiny, ktoré ešte nie sú zapojené do problematiky zastavenia obehu.",
          "Cieľom je rýchle rozpoznanie kolapsu, privolanie pomoci a začatie KPR.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý BLS"
        description="Začať základnú resuscitáciu a použiť AED"
        iconName="heart-outline"
        variant="light"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/bls/step1")
        }
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS"
        description="Rozšírená resuscitácia pri dostupnom profesionálnom tíme"
        iconName="pulse-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
