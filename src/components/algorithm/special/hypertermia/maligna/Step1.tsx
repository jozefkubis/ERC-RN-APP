import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Malígna hypertermia"
        title="Zastavte spúšťač a podajte dantrolén"
        description="Konajte okamžite pri podozrení na malígnu hypertermiu počas anestézie alebo krátko po nej. Súbežne riešte oxygenáciu, ventiláciu a aktívne chladenie."
        urgent
      />

      <HeroCard
        eyebrow="Čo najskôr i.v."
        title="Dantrolén 2,5 mg/kg"
        description="Podajte úvodnú dávku dantrolénu i.v. čo najskôr a pokračujte podľa klinickej odpovede a lokálneho protokolu."
        iconName="medical"
        danger
      />

      <ContentCard
        title="Okamžité kroky"
        iconName="close-circle-outline"
        tone="danger"
        items={[
          "Ihneď zastavte vyvolávajúce faktory vrátane prchavých anestetík a sukcinylcholínu.",
          "Vypnite a odstráňte vaporizér a vymeňte okruh ventilátora.",
          "Ak nie je možné vymeniť ventilátor, vymeňte uhlíkové filtre.",
        ]}
      />

      <ContentCard
        title="Podporná liečba"
        iconName="thermometer-outline"
        tone="info"
        items={[
          "Začnite aktívne chladenie.",
          "Podajte 100 % kyslík a snažte sa o normokapniu pomocou hyperventilácie.",
          "Kontrolujte a liečte komplikácie podľa stavu pacienta, najmä acidózu a hyperkaliémiu.",
        ]}
      />

      <ContentCard
        title="Privolajte expertnú pomoc"
        iconName="call-outline"
        items={[
          "Kontaktujte centrum pre malígnu hypertermiu kvôli poradeniu a následnej starostlivosti.",
          "Po stabilizácii pokračujte v monitorovaní a odovzdajte informáciu o podozrení na malígnu hypertermiu.",
        ]}
      />
    </AlgorithmScreen>
  );
}
