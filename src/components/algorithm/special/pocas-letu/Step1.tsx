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
        title="Zastavenie krvného obehu počas letu"
        description="V lietadle prispôsobte KPR obmedzenému priestoru, dostupnému vybaveniu a rozhodnutiam posádky o prípadnom odklone letu."
        urgent
      />

      <HeroCard
        eyebrow="Okamžite"
        title="Vyhľadajte zdravotníka na palube"
        description="Požiadajte o pomoc zdravotníckych pracovníkov cez oznámenie počas letu a začnite resuscitáciu s dostupným vybavením."
        iconName="airplane"
        danger
      />

      <ContentCard
        title="Kompresie v obmedzenom priestore"
        iconName="body-outline"
        tone="warning"
        items={[
          "Záchranca si môže kľaknúť do priestoru pre nohy pred sedadlami v uličke.",
          "Ak pacienta nie je možné v priebehu niekoľkých sekúnd presunúť, začnite kompresie tam, kde je.",
          "Ak je to možné, presuňte pacienta na miesto s dostatočným priestorom na podlahe, napríklad do kuchynky.",
          "KPR spoza hlavy je možnou voľbou v prostrediach s obmedzeným priestorom.",
        ]}
      />

      <ContentCard
        title="Dýchacie cesty a vybavenie"
        iconName="medical-outline"
        tone="info"
        items={[
          "Zabezpečenie dýchacích ciest založte na dostupnom vybavení.",
          "Používajte len postupy, na ktoré má záchranca dostatočnú odbornosť.",
          "Ak je dostupné AED alebo kyslík, použite ich podľa možností paluby.",
        ]}
      />

      <ContentCard
        title="Rozhodnutie o odklone letu"
        iconName="navigate-outline"
        items={[
          "Ak plánovaná trasa vedie cez oblasť bez dosiahnuteľného letiska a počas KPR je vysoká pravdepodobnosť ROSC, zvážte skorý odklon.",
          "Pri nízkej pravdepodobnosti ROSC zvážte riziká odklonu a poskytnite vhodné odporúčania posádke lietadla.",
          "Ak je KPR ukončená bez ROSC, odklonenie letu za účelom ďalšej liečby nie je potrebné; riaďte sa politikou leteckej spoločnosti.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý BLS"
        description="Základná resuscitácia a použitie AED"
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
