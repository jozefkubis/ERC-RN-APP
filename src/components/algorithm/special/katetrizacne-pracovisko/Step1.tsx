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
        title="Zastavenie krvného obehu v katetrizačnom pracovisku"
        description="Resuscitujte podľa ALS algoritmu, ale využite možnosti katetrizačnej sály a upravte postup podľa monitorovaného rytmu, hemodynamiky a dostupnej expertízy."
        urgent
      />

      <HeroCard
        eyebrow="ALS s úpravou"
        title="3 po sebe idúce defibrilačné výboje"
        description="Pri defibrilovateľnom rytme aplikujte tri rýchle výboje. Ak rytmus pretrváva, pokračujte štandardným ALS algoritmom."
        iconName="flash"
        danger
      />

      <ContentCard
        title="Pripravenosť pracoviska"
        iconName="shield-checkmark-outline"
        tone="info"
        items={[
          "Podporujte vhodné školenie personálu v technických zručnostiach a ALS.",
          "Zvážte pravidelné simulácie urgentných situácií.",
          "Zabezpečte, aby bolo potrebné vybavenie ľahko dostupné a funkčné.",
          "Plánované zákroky pripravujte tak, aby sa minimalizovali komplikácie a podporilo používanie bezpečnostných kontrolných zoznamov.",
        ]}
      />

      <ContentCard
        title="Okamžitý postup pri ZO"
        iconName="people-outline"
        tone="danger"
        items={[
          "Vyhláste zastavenie obehu a určte vedúceho resuscitácie.",
          "Pokračujte v monitorovaní rytmu, tlaku, saturácie a kapnografie, ak je dostupná.",
          "Zaistite bezpečný priestor okolo RTG ramena, stolíka a káblov pred kompresiami alebo výbojom.",
        ]}
      />

      <ContentCard
        title="Upravte ALS podľa rytmu"
        iconName="pulse-outline"
        tone="warning"
        items={[
          "Pri defibrilovateľnom rytme aplikujte tri po sebe idúce defibrilačné výboje.",
          "Pri extrémnej bradykardii zvážte externú alebo transvenóznu kardiostimuláciu.",
          "Pri hemodynamickej nestabilite alebo podozrení na komplikáciu zvážte echokardiografiu.",
        ]}
      />

      <ContentCard
        title="Zvážte podľa klinického kontextu"
        iconName="medkit-outline"
        tone="info"
        items={[
          "Mechanické kompresie hrudníka, ak manuálne kompresie nie sú uskutočniteľné alebo bezpečné pre poskytovateľa.",
          "Extrakorporálnu KPR u vybraných pacientov s refraktérnym zastavením obehu, najmä ak umožňuje kritické zákroky na nápravu reverzibilných príčin.",
          "Zariadenia na podporu obehu u vybraných pacientov v kardiogénnom šoku po dosiahnutí ROSC.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS"
        description="Použiť všeobecný algoritmus rozšírenej resuscitácie"
        iconName="arrow-redo-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
