import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Toxíny"
        title="Obmedzte toxín a chlaďte aktívne"
        description="Myslite na toxínmi spôsobenú hypertermiu pri sympatomimetikách, MDMA, serotonínovom syndróme alebo inom hypermetabolickom stave."
        urgent
      />

      <HeroCard
        eyebrow="Antipyretiká nepomáhajú"
        title="Aktívne chladenie"
        description="Použite techniky aktívneho chladenia a súbežne minimalizujte ďalšie vystavenie alebo absorpciu toxínu."
        iconName="thermometer"
        danger
      />

      <ContentCard
        title="Znížte expozíciu toxínu"
        iconName="shield-checkmark-outline"
        tone="danger"
        items={[
          "Chráňte tím a pacienta pred ďalšou expozíciou toxínu.",
          "Minimalizujte vystavenie a absorpciu toxínu podľa situácie a lokálneho toxikologického protokolu.",
          "Zvážte skorú konzultáciu toxikologického centra alebo špecialistu.",
        ]}
      />

      <ContentCard
        title="Kontrolujte hypermetabolizmus"
        iconName="pulse-outline"
        tone="info"
        items={[
          "Tlmte agitáciu, svalovú aktivitu a kŕče, ktoré zvyšujú tvorbu tepla.",
          "Podajte kyslík, monitorujte vitálne funkcie, EKG, teplotu jadra a glykémiu.",
          "Antipyretiká nemajú prínos, pretože centrálne termoregulačné mechanizmy sú ovplyvnené toxínmi.",
        ]}
      />

      <ContentCard
        title="Pokračujte podľa ABCDE"
        iconName="medkit-outline"
        items={[
          "Pri zhoršovaní vitálnych funkcií postupujte podľa ABCDE a privolajte resuscitačný tím.",
          "Pri zastavení obehu pokračujte podľa ALS a neprestávajte chladiť pacienta.",
        ]}
      />
    </AlgorithmScreen>
  );
}
