import { useSettings } from "@/src/context/settings-context";
import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    header: {
      badge: "Špeciálne prostredie",
      title: "Zastavenie obehu na operačnej sále",
      description:
        "Perioperačné zastavenie obehu vyžaduje okamžitú tímovú komunikáciu, kontrolu dýchacích ciest a cielené hľadanie reverzibilnej príčiny.",
    },
    hero: {
      eyebrow: "Spúšťač KPR",
      title: "Začnite kompresie pri SBP < 50 mmHg",
      description:
        "Ak systolický tlak náhle klesne pod 50 mmHg spolu s poklesom ETCO2 napriek adekvátnemu zásahu, začnite kompresie hrudníka.",
    },
    prevention: {
      title: "Predchádzajte riziku",
      items: [
        "Použite predoperačný skríning a identifikujte pacientov s vysokým rizikom.",
        "Komunikujte jasne o potenciálne kritických chirurgických krokoch.",
        "Pri nestabilite pacienta zabezpečte pokročilé monitorovanie a nepretržitú prítomnosť anestéziológa.",
      ],
    },
    readiness: {
      title: "Pripravte lieky a defibrilátor",
      items: [
        "Pri vysokej pravdepodobnosti zastavenia obehu majte defibrilátor v pohotovostnom režime a nalepte defibrilačné elektródy pred úvodom do anestézie.",
        "U pacienta pred zastavením obehu so SBP < 50 mmHg zvážte opakované IV bolusy adrenalínu 50-100 mikrogramov namiesto úvodného bolusu 1 mg.",
        "Ak nízka dávka adrenalínu nezaberie, podajte štandardný IV adrenalín 1 mg.",
      ],
    },
    team: {
      title: "Okamžite informujte tím",
      items: [
        "Informujte chirurga a celý tím na operačnej sále o zastavení obehu.",
        "Začnite s kvalitnými kompresiami hrudníka.",
        "Upravte výšku operačného stola, aby boli kompresie účinné.",
      ],
    },
    ventilation: {
      title: "Skontrolujte ventiláciu",
      items: [
        "Uistite sa, že dýchacie cesty sú zabezpečené.",
        "Skontrolujte hodnoty ETCO2 a poskytujte účinnú ventiláciu 100 % kyslíkom.",
        "Vylúčte nerozpoznanú ezofageálnu intubáciu.",
      ],
    },
    causes: {
      title: "Hľadajte reverzibilné príčiny",
      items: [
        "Použite ultrazvuk na identifikáciu reverzibilných príčin zastavenia srdca.",
        "Zamerajte resuscitačné intervencie podľa zistenej príčiny.",
        "Vylúčte tenzný pneumotorax.",
      ],
    },
    refractory: {
      title: "Keď konvenčná KPR zlyháva",
      items: [
        "Zvážte skoré eKPR u vybraných pacientov.",
        "Ak eKPR nie je k dispozícii, vyškolení zdravotníci môžu v špecifických prípadoch zvážiť priame kompresie srdca ako alternatívu.",
      ],
    },
    humanFactors: {
      title: "Ľudské faktory",
      items: [
        "Zabezpečte oboznámenie tímu s vybavením na operačnej sále.",
        "Vopred rozdeľte stratégie a úlohy počas porád chirurgického tímu.",
        "Zahrňte perioperačné zastavenie obehu do tímového tréningu, in-situ simulácií a kurzov ALS.",
      ],
    },
    alsButton: {
      title: "Otvoriť dospelý ALS",
      description: "Použiť všeobecný algoritmus rozšírenej resuscitácie",
    },
  },
  en: {
    header: {
      badge: "Special environment",
      title: "Cardiac arrest in the operating room",
      description:
        "Perioperative cardiac arrest requires immediate team communication, airway control, and focused search for a reversible cause.",
    },
    hero: {
      eyebrow: "CPR trigger",
      title: "Start compressions if SBP < 50 mmHg",
      description:
        "If systolic blood pressure suddenly falls below 50 mmHg together with falling ETCO2 despite appropriate intervention, start chest compressions.",
    },
    prevention: {
      title: "Prevent risk",
      items: [
        "Use pre-operative screening to identify high-risk patients.",
        "Communicate clearly about potentially critical surgical steps.",
        "If the patient is unstable, provide advanced monitoring and continuous presence of an anaesthesiologist.",
      ],
    },
    readiness: {
      title: "Prepare drugs and defibrillator",
      items: [
        "When cardiac arrest is likely, keep the defibrillator in standby mode and apply self-adhesive defibrillation pads before induction of anaesthesia.",
        "In a pre-arrest patient with SBP < 50 mmHg, consider repeated IV adrenaline boluses of 50-100 micrograms instead of an initial 1 mg bolus.",
        "If low-dose adrenaline fails, give standard IV adrenaline 1 mg.",
      ],
    },
    team: {
      title: "Inform the team immediately",
      items: [
        "Inform the surgeon and the full operating room team about the cardiac arrest.",
        "Start high-quality chest compressions.",
        "Adjust the operating table height so compressions are effective.",
      ],
    },
    ventilation: {
      title: "Check ventilation",
      items: [
        "Make sure the airway is secured.",
        "Check ETCO2 values and provide effective ventilation with 100% oxygen.",
        "Exclude unrecognised oesophageal intubation.",
      ],
    },
    causes: {
      title: "Search for reversible causes",
      items: [
        "Use ultrasound to identify reversible causes of cardiac arrest.",
        "Target resuscitation interventions according to the identified cause.",
        "Exclude tension pneumothorax.",
      ],
    },
    refractory: {
      title: "When conventional CPR fails",
      items: [
        "Consider early eCPR in selected patients.",
        "If eCPR is not available, trained healthcare professionals may consider direct cardiac compressions as an alternative in specific cases.",
      ],
    },
    humanFactors: {
      title: "Human factors",
      items: [
        "Ensure the team is familiar with operating room equipment.",
        "Assign strategies and roles in advance during surgical team briefings.",
        "Include perioperative cardiac arrest in team training, in-situ simulation, and ALS courses.",
      ],
    },
    alsButton: {
      title: "Open adult ALS",
      description: "Use the general advanced life support algorithm",
    },
  },
};

export default function Step1() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.header.badge}
        title={text.header.title}
        description={text.header.description}
        themeMode={themeMode}
        urgent
      />

      <HeroCard
        eyebrow={text.hero.eyebrow}
        title={text.hero.title}
        description={text.hero.description}
        iconName="pulse"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.prevention.title}
        iconName="shield-checkmark-outline"
        tone="info"
        items={text.prevention.items}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.readiness.title}
        iconName="flash-outline"
        tone="warning"
        items={text.readiness.items}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.team.title}
        iconName="people-outline"
        tone="danger"
        items={text.team.items}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.ventilation.title}
        iconName="medical-outline"
        tone="warning"
        items={text.ventilation.items}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.causes.title}
        iconName="search-outline"
        items={text.causes.items}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.refractory.title}
        iconName="git-branch-outline"
        tone="info"
        items={text.refractory.items}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.humanFactors.title}
        iconName="list-outline"
        items={text.humanFactors.items}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.alsButton.title}
        description={text.alsButton.description}
        iconName="pulse-outline"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
