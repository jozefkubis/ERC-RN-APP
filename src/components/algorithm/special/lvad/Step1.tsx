import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";

export default function Step1() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Špeciálne prostredie"
        title="Pacient so zariadením na podporu ľavej komory"
        description="Pri neodpovedajúcom LVAD okamžite aktivujte špecializovaný tím a súčasne riešte obnovu funkcie zariadenia."
        urgent
      />

      <HeroCard
        eyebrow="LVAD"
        title="Aktivujte špecializovaný tím"
        description="Okamžite privolajte tím so skúsenosťou s LVAD a postupujte podľa lokálneho protokolu pre neodpovedajúce zariadenie."
        iconName="call"
        danger
      />

      <ContentCard
        title="Ak je dostupných viac záchrancov"
        iconName="people-outline"
        tone="danger"
        items={[
          "Začnite KPR.",
          "Súčasne sa pokúste obnoviť funkciu zariadenia.",
          "Riešte problémy so zariadením ako prioritu podľa príslušných protokolov.",
        ]}
      />

      <ContentCard
        title="Ak je prítomný iba jeden záchranca"
        iconName="person-outline"
        tone="warning"
        items={[
          "Zvážte odloženie KPR až na 2 minúty.",
          "Tento čas využite na pokus o obnovenie funkcie zariadenia.",
          "Ak sa funkciu zariadenia nepodarí obnoviť, pokračujte resuscitačným postupom.",
        ]}
      />

      <ContentCard
        title="Praktická priorita"
        iconName="settings-outline"
        tone="info"
        items={[
          "Skontrolujte napájanie, káble, ovládač a alarmy zariadenia podľa lokálneho postupu.",
          "Ak je dostupný LVAD koordinátor alebo centrum, kontaktujte ho čo najskôr.",
        ]}
      />
    </AlgorithmScreen>
  );
}
