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
    title: "Resuscitácia v mikrogravitácii",
    description:
      "V mikrogravitácii najprv zabezpečte pacienta. Postupy ALS sú podobné ako na Zemi až po stabilizácii jeho polohy.",
    secureEyebrow: "Prvý krok",
    secureTitle: "Zabezpečte pacienta",
    secureDescription:
      "Zabezpečenie dýchacích ciest, defibrilácia a i.v./i.o. prístup sú podobné ako pri ALS na Zemi, ale vykonajte ich až po zabezpečení pacienta.",
    techniqueTitle: "Kompresie a technika",
    techniqueItems: [
      "Zvážte mechanickú KPR.",
      "Pred rozšírenými výkonmi stabilizujte polohu pacienta aj záchrancu.",
      "Defibriláciu, zabezpečenie dýchacích ciest a cievny vstup prispôsobte dostupnému vybaveniu a výcviku posádky.",
    ],
    telemedicineTitle: "Telemedicína",
    telemedicineItems: [
      "Pri zastavení obehu na nízkej obežnej dráhe Zeme zvážte podporu prostredníctvom telemedicíny.",
      "Telemedicínu využite, ak je uskutočniteľná a dovoľujú to personálne kapacity.",
    ],
    terminationTitle: "Ukončenie resuscitácie",
    terminationItems: [
      "O ukončení resuscitácie má rozhodnúť člen posádky s najvyššou zdravotníckou kvalifikáciou.",
      "Pri rozhodovaní konzultujte telemedicínsku podporu.",
    ],
    alsTitle: "Otvoriť dospelý ALS",
    alsDescription:
      "Použiť pozemský ALS algoritmus ako základ po zabezpečení pacienta",
  },
  en: {
    badge: "Special setting",
    title: "Resuscitation in microgravity",
    description:
      "In microgravity, secure the patient first. ALS procedures are similar to those on Earth only after the patient's position is stabilised.",
    secureEyebrow: "First step",
    secureTitle: "Secure the patient",
    secureDescription:
      "Airway management, defibrillation and IV/IO access are similar to terrestrial ALS, but perform them only once the patient is secured.",
    techniqueTitle: "Compressions and technique",
    techniqueItems: [
      "Consider mechanical CPR.",
      "Stabilise both the patient and rescuer before advanced procedures.",
      "Adapt defibrillation, airway management and vascular access to the available equipment and crew training.",
    ],
    telemedicineTitle: "Telemedicine",
    telemedicineItems: [
      "Consider telemedicine support during cardiac arrest in low Earth orbit.",
      "Use telemedicine if feasible and staffing allows.",
    ],
    terminationTitle: "Termination of resuscitation",
    terminationItems: [
      "The crew member with the highest medical qualification should decide on termination of resuscitation.",
      "Consult telemedicine support when making the decision.",
    ],
    alsTitle: "Open adult ALS",
    alsDescription:
      "Use the terrestrial ALS algorithm as the basis once the patient is secured",
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
        eyebrow={text.secureEyebrow}
        title={text.secureTitle}
        description={text.secureDescription}
        iconName="planet"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.techniqueTitle}
        iconName="construct-outline"
        tone="warning"
        items={text.techniqueItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.telemedicineTitle}
        iconName="call-outline"
        tone="info"
        items={text.telemedicineItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.terminationTitle}
        iconName="person-outline"
        items={text.terminationItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.alsTitle}
        description={text.alsDescription}
        iconName="pulse-outline"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
