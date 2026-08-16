import { useRouter } from "expo-router";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Tehotenstvo",
    title: "Zastavenie obehu u tehotnej",
    description:
      "Zvážte tehotenstvo u každej skolabovanej ženy v plodnom veku. Začnite štandardný ALS a súčasne pridajte úpravy pre tehotnú.",
    immediateEyebrow: "Bezodkladne",
    immediateTitle: "KPR + posun maternice doľava",
    immediateDescription:
      "Uvoľnite aortokaválnu kompresiu čo najskôr a udržujte manuálny posun maternice doľava počas celej resuscitácie.",
    teamTitle: "Privolajte správny tím",
    teamItems: [
      "Aktivujte resuscitačný tím pre tehotnú pacientku.",
      "Privolajte pôrodníka, anestéziológa a neonatológa.",
      "Pripravujte tím aj vybavenie na urgentný pôrodnícky výkon už počas KPR.",
    ],
    alsTitle: "ALS ostáva základ",
    alsItems: [
      "Kvalita kompresií, pomer kompresií a ventilácie a dávkovanie adrenalínu, amiodarónu a lidokaínu sú bez zmeny.",
      "Defibrilujte štandardnou energiou; elektródy umiestnite pod zväčšené prsníkové tkanivo.",
      "Pred defibriláciou odstráňte vnútorné aj vonkajšie fetálne monitory.",
    ],
    continueTitle: "Pokračovať v algoritme tehotnej",
    continueDescription:
      "Skontrolovať graviditu >20 týždňov alebo fundus nad pupkom",
    alsButtonTitle: "Otvoriť dospelý ALS",
    alsButtonDescription:
      "Použiť všeobecný algoritmus rozšírenej resuscitácie",
  },
  en: {
    badge: "Pregnancy",
    title: "Cardiac arrest in pregnancy",
    description:
      "Consider pregnancy in any collapsed woman of childbearing age. Start standard ALS and apply the modifications for pregnancy at the same time.",
    immediateEyebrow: "Immediately",
    immediateTitle: "CPR + manual left uterine displacement",
    immediateDescription:
      "Relieve aortocaval compression as early as possible and maintain manual left uterine displacement throughout resuscitation.",
    teamTitle: "Call the appropriate team",
    teamItems: [
      "Activate the maternal cardiac arrest team.",
      "Call an obstetrician, anaesthetist, and neonatologist.",
      "Prepare the team and equipment for an emergency obstetric procedure during CPR.",
    ],
    alsTitle: "ALS remains the foundation",
    alsItems: [
      "Chest compression quality, the compression-to-ventilation ratio, and doses of adrenaline, amiodarone, and lidocaine are unchanged.",
      "Defibrillate with standard energies; place the pads beneath enlarged breast tissue.",
      "Remove internal and external fetal monitors before defibrillation.",
    ],
    continueTitle: "Continue the pregnancy algorithm",
    continueDescription:
      "Check for gestation >20 weeks or uterine fundus above the umbilicus",
    alsButtonTitle: "Open adult ALS",
    alsButtonDescription: "Use the general advanced life support algorithm",
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
        eyebrow={text.immediateEyebrow}
        title={text.immediateTitle}
        description={text.immediateDescription}
        iconName="body"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.teamTitle}
        iconName="people-outline"
        tone="danger"
        items={text.teamItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.alsTitle}
        iconName="heart-outline"
        items={text.alsItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.continueTitle}
        description={text.continueDescription}
        iconName="arrow-forward-outline"
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/pregnet/step2")}
      />

      <FlowActionButton
        title={text.alsButtonTitle}
        description={text.alsButtonDescription}
        iconName="arrow-redo-outline"
        variant="light"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
