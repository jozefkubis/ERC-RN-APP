import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Hemodialysis() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Špeciálna skupina pacientov"
        title="Zastavenie krvného obehu pri hemodialýze"
        description="Pokračujte podľa štandardného ALS algoritmu a súčasne bezpečne ukončite dialýzu."
        urgent
      />

      <HeroCard
        eyebrow="Bezodkladná priorita"
        title="Zastavte dialýzu"
        description="Vráťte pacientovi objem krvi spolu s bolusom tekutín."
        iconName="stop-circle-outline"
        danger
      />

      <ContentCard
        title="Zaistite vyškolenú obsluhu"
        iconName="people-outline"
        items={[
          "Priraďte vyškolenú dialyzačnú sestru alebo technika na obsluhu dialyzačného prístroja.",
        ]}
      />

      <ContentCard
        title="Defibrilujte bezpečne"
        iconName="flash-outline"
        tone="warning"
        items={[
          "Odpojte pacienta od dialyzačného prístroja, ak prístroj nie je odolný voči defibrilácii.",
          "Dávajte pozor na mokré povrchy.",
        ]}
      />

      <ContentCard
        title="Zachovajte dialyzačný vstup"
        iconName="medkit-outline"
        tone="info"
        items={[
          "Nechajte dialyzačný vstup otvorený a použite ho na podávanie liekov.",
        ]}
      />

      <ContentCard
        title="Po návrate spontánneho obehu"
        iconName="pulse-outline"
        items={[
          "Dialýza môže byť potrebná v skorom poresuscitačnom období.",
        ]}
      />
    </AlgorithmScreen>
  );
}
