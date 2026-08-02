import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Toxické látky"
        title="Chráňte seba a liečte reverzibilnú príčinu"
        description="Zvažujte intoxikáciu ako príčinu zastavenia krvného obehu u všetkých pacientov a súčasne pokračujte v štandardnej resuscitácii."
        urgent
      />

      <HeroCard
        eyebrow="Najprv bezpečnosť záchrancu"
        title="Zaistite svoju osobnú bezpečnosť"
        description="Pri priamom kontakte s pokožkou, napríklad pri dýchaní z úst do úst, môže dôjsť k prenosu toxickej látky."
        iconName="shield-checkmark"
        danger
      />

      <ContentCard
        title="Znížte expozíciu a absorpciu"
        iconName="shield-outline"
        tone="danger"
        items={[
          "Znížte ďalšiu absorpciu toxickej látky.",
          "Zvážte špecifické opatrenia, ako sú antidotá, dekontaminácia a zvýšené vylučovanie.",
          "Ak je antidotum dostupné, podajte ho čo najskôr.",
        ]}
      />

      <ContentCard
        title="Buďte pripravení na predĺženú resuscitáciu"
        iconName="time-outline"
        tone="info"
        items={[
          "Pokračujte v resuscitácii dlhšie, pretože koncentrácia toxínu môže počas metabolizácie alebo vylučovania postupne klesať.",
        ]}
      />

      <ContentCard
        title="Konzultujte toxikologické centrum"
        iconName="call-outline"
        items={[
          "Kontaktujte regionálne alebo národné toxikologické centrum pre informácie o liečbe otráveného pacienta.",
        ]}
      />
    </AlgorithmScreen>
  );
}
