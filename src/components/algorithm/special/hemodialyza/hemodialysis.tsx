import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Špeciálna skupina pacientov",
    title: "Zastavenie krvného obehu pri hemodialýze",
    description:
      "Pokračujte podľa štandardného ALS algoritmu a súčasne bezpečne ukončite dialýzu.",
    stopEyebrow: "Bezodkladná priorita",
    stopTitle: "Zastavte dialýzu",
    stopDescription: "Vráťte pacientovi objem krvi spolu s bolusom tekutín.",
    operatorTitle: "Zaistite vyškolenú obsluhu",
    operatorItems: [
      "Priraďte vyškolenú dialyzačnú sestru alebo technika na obsluhu dialyzačného prístroja.",
    ],
    defibrillationTitle: "Defibrilujte bezpečne",
    defibrillationItems: [
      "Odpojte pacienta od dialyzačného prístroja, ak prístroj nie je odolný voči defibrilácii.",
      "Dávajte pozor na mokré povrchy.",
    ],
    accessTitle: "Zachovajte dialyzačný vstup",
    accessItems: [
      "Nechajte dialyzačný vstup otvorený a použite ho na podávanie liekov.",
    ],
    roscTitle: "Po návrate spontánneho obehu",
    roscItems: ["Dialýza môže byť potrebná v skorom poresuscitačnom období."],
  },
  en: {
    badge: "Special patient group",
    title: "Cardiac arrest during haemodialysis",
    description:
      "Continue according to the standard ALS algorithm while safely stopping dialysis.",
    stopEyebrow: "Immediate priority",
    stopTitle: "Stop dialysis",
    stopDescription:
      "Return the patient's blood volume together with a fluid bolus.",
    operatorTitle: "Ensure trained assistance",
    operatorItems: [
      "Assign a trained dialysis nurse or technician to operate the dialysis machine.",
    ],
    defibrillationTitle: "Defibrillate safely",
    defibrillationItems: [
      "Disconnect the patient from the dialysis machine unless it is defibrillation-proof.",
      "Beware of wet surfaces.",
    ],
    accessTitle: "Maintain dialysis access",
    accessItems: [
      "Leave the dialysis access open and use it for drug administration.",
    ],
    roscTitle: "After return of spontaneous circulation",
    roscItems: ["Dialysis may be required in the early post-resuscitation period."],
  },
};

export default function Hemodialysis() {
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
        eyebrow={text.stopEyebrow}
        title={text.stopTitle}
        description={text.stopDescription}
        iconName="stop-circle-outline"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.operatorTitle}
        iconName="people-outline"
        items={text.operatorItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.defibrillationTitle}
        iconName="flash-outline"
        tone="warning"
        items={text.defibrillationItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.accessTitle}
        iconName="medkit-outline"
        tone="info"
        items={text.accessItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.roscTitle}
        iconName="pulse-outline"
        items={text.roscItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
