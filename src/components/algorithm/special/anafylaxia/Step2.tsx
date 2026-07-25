import NoButton from "@/src/components/ui/NoButton";
import YesButton from "@/src/components/ui/YesButton";
import { useRouter } from "expo-router";
import {
  AlgorithmScreen,
  ContentCard,
  DecisionCard,
  HeroCard,
  StepHeader,
} from "./anaphylaxis-ui";

export default function Step2() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Krok 2"
        title="Okamžitá liečba"
        description="Liečbu neodkladajte. I.m. adrenalín je liekom prvej voľby a podáva sa pri prvom podozrení na anafylaxiu."
        urgent
      />

      <HeroCard
        eyebrow="Ihneď intramuskulárne"
        title="Adrenalín 500 mikrogramov"
        description="0,5 ml roztoku 1 mg/ml (1 : 1 000) do anterolaterálnej strany strednej tretiny stehna. Dávka pre dospelého a dieťa nad 12 rokov."
        iconName="medical"
      />

      <ContentCard
        title="Dávka pre deti"
        iconName="people-outline"
        tone="info"
        lead="Adrenalín 1 mg/ml (1 : 1 000), intramuskulárne do stehna:"
        items={[
          "6 – 12 rokov: 300 mikrogramov (0,3 ml)",
          "6 mes. – 6 rokov: 150 mikrogramov (0,15 ml)",
          "Menej ako 6 mesiacov: 100 – 150 mikrogramov (0,1 – 0,15 ml)",
          "Hmotnostná dávka: 0,01 mg/kg, maximálne 0,5 mg",
          "Uvedené dávky platia iba pre i.m. podanie",
        ]}
      />

      <ContentCard
        title="Súbežné kroky"
        iconName="people"
        tone="info"
        items={[
          "Privolajte resuscitačný tím alebo ZZS",
          "Odstráňte alebo zastavte spúšťač, ak je to okamžite možné",
          "Pacienta uložte naplocho; pri dychovej tiesni môže sedieť, tehotnú uložte na ľavý bok",
          "Zabezpečte dýchacie cesty, podajte vysokoprietokový kyslík a zaistite i.v./i.o. vstup",
          "Monitorujte SpO₂, EKG a krvný tlak",
        ]}
      />

      <ContentCard
        title="Tekutinová resuscitácia"
        iconName="water-outline"
        items={[
          "Podajte včas bolus i.v. kryštaloidu a sledujte odpoveď",
          "Dospelý: 500 – 1 000 ml",
          "Dieťa: 10 ml/kg",
        ]}
      />

      <DecisionCard
        question="Zlepšenie do 5 minút?"
        description="Znovu posúďte najmä pretrvávanie problémov s dýchaním alebo obehom."
      />

      <YesButton
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/aftercare")
        }
      />
      <NoButton
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/step3")
        }
      />
    </AlgorithmScreen>
  );
}
