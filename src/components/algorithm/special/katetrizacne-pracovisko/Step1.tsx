import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Špeciálne prostredie",
    title: "Zastavenie krvného obehu v katetrizačnom pracovisku",
    description:
      "Resuscitujte podľa ALS algoritmu, ale využite možnosti katetrizačnej sály a upravte postup podľa monitorovaného rytmu, hemodynamiky a dostupnej expertízy.",
    shocksEyebrow: "ALS s úpravou",
    shocksTitle: "3 po sebe idúce defibrilačné výboje",
    shocksDescription:
      "Pri defibrilovateľnom rytme aplikujte tri rýchle výboje. Ak rytmus pretrváva, pokračujte štandardným ALS algoritmom.",
    preparednessTitle: "Pripravenosť pracoviska",
    preparednessItems: [
      "Podporujte vhodné školenie personálu v technických zručnostiach a ALS.",
      "Zvážte pravidelné simulácie urgentných situácií.",
      "Zabezpečte, aby bolo potrebné vybavenie ľahko dostupné a funkčné.",
      "Plánované zákroky pripravujte tak, aby sa minimalizovali komplikácie a podporilo používanie bezpečnostných kontrolných zoznamov.",
    ],
    immediateTitle: "Okamžitý postup pri ZO",
    immediateItems: [
      "Vyhláste zastavenie obehu a určte vedúceho resuscitácie.",
      "Pokračujte v monitorovaní rytmu, tlaku, saturácie a kapnografie, ak je dostupná.",
      "Zaistite bezpečný priestor okolo RTG ramena, stolíka a káblov pred kompresiami alebo výbojom.",
    ],
    rhythmTitle: "Upravte ALS podľa rytmu",
    rhythmItems: [
      "Pri defibrilovateľnom rytme aplikujte tri po sebe idúce defibrilačné výboje.",
      "Pri extrémnej bradykardii zvážte externú alebo transvenóznu kardiostimuláciu.",
      "Pri hemodynamickej nestabilite alebo podozrení na komplikáciu zvážte echokardiografiu.",
    ],
    contextTitle: "Zvážte podľa klinického kontextu",
    contextItems: [
      "Mechanické kompresie hrudníka, ak manuálne kompresie nie sú uskutočniteľné alebo bezpečné pre poskytovateľa.",
      "Extrakorporálnu KPR u vybraných pacientov s refraktérnym zastavením obehu, najmä ak umožňuje kritické zákroky na nápravu reverzibilných príčin.",
      "Zariadenia na podporu obehu u vybraných pacientov v kardiogénnom šoku po dosiahnutí ROSC.",
    ],
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription: "Použiť všeobecný algoritmus rozšírenej resuscitácie",
  },
  en: {
    badge: "Special setting",
    title: "Cardiac arrest in the catheterisation laboratory",
    description:
      "Resuscitate according to the ALS algorithm, while using the capabilities of the catheterisation laboratory and adapting treatment to the monitored rhythm, haemodynamics, and available expertise.",
    shocksEyebrow: "Modified ALS",
    shocksTitle: "3 consecutive defibrillation shocks",
    shocksDescription:
      "For a shockable rhythm, deliver three rapid shocks. If the rhythm persists, continue according to the standard ALS algorithm.",
    preparednessTitle: "Laboratory preparedness",
    preparednessItems: [
      "Promote appropriate staff training in technical skills and ALS.",
      "Consider regular emergency drills.",
      "Ensure the necessary equipment is readily available and functional.",
      "Plan elective procedures to minimise complications and promote the use of safety checklists.",
    ],
    immediateTitle: "Immediate actions during cardiac arrest",
    immediateItems: [
      "Declare cardiac arrest and appoint a resuscitation team leader.",
      "Continue monitoring rhythm, blood pressure, oxygen saturation, and capnography where available.",
      "Ensure a safe area around the X-ray arm, table, and cables before chest compressions or defibrillation.",
    ],
    rhythmTitle: "Adapt ALS to the rhythm",
    rhythmItems: [
      "For a shockable rhythm, deliver three consecutive defibrillation shocks.",
      "For extreme bradycardia, consider external or transvenous pacing.",
      "Consider echocardiography in haemodynamic instability or when a complication is suspected.",
    ],
    contextTitle: "Consider according to the clinical context",
    contextItems: [
      "Mechanical chest compressions if manual compressions are not feasible or safe for the provider.",
      "ECPR in selected patients with refractory cardiac arrest, especially if it enables critical procedures to correct reversible causes.",
      "Circulatory support devices for selected patients in cardiogenic shock after achieving ROSC.",
    ],
    alsTitle: "Open adult ALS",
    alsDescription: "Use the general advanced life support algorithm",
  },
};

export default function Step1() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
        urgent
      />

      <HeroCard
        eyebrow={text.shocksEyebrow}
        title={text.shocksTitle}
        description={text.shocksDescription}
        iconName="flash"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.preparednessTitle}
        iconName="shield-checkmark-outline"
        tone="info"
        items={text.preparednessItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.immediateTitle}
        iconName="people-outline"
        tone="danger"
        items={text.immediateItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.rhythmTitle}
        iconName="pulse-outline"
        tone="warning"
        items={text.rhythmItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.contextTitle}
        iconName="medkit-outline"
        tone="info"
        items={text.contextItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.alsTitle}
        description={text.alsDescription}
        iconName="arrow-redo-outline"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
