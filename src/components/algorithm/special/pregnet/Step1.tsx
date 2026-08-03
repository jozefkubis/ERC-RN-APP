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
        badge="Tehotenstvo"
        title="Zastavenie obehu u tehotnej"
        description="Zvážte tehotenstvo u každej skolabovanej ženy v plodnom veku. Začnite štandardný ALS a súčasne pridajte úpravy pre tehotnú."
        urgent
      />

      <HeroCard
        eyebrow="Bezodkladne"
        title="KPR + posun maternice doľava"
        description="Uvoľnite aortokaválnu kompresiu čo najskôr a udržujte manuálny posun maternice doľava počas celej resuscitácie."
        iconName="body"
        danger
      />

      <ContentCard
        title="Privolajte správny tím"
        iconName="people-outline"
        tone="danger"
        items={[
          "Aktivujte resuscitačný tím pre tehotnú pacientku.",
          "Privolajte pôrodníka, anestéziológa a neonatológa.",
          "Pripravujte tím aj vybavenie na urgentný pôrodnícky výkon už počas KPR.",
        ]}
      />

      <ContentCard
        title="ALS ostáva základ"
        iconName="heart-outline"
        items={[
          "Kvalita kompresií, pomer kompresií a ventilácie a dávkovanie adrenalínu, amiodarónu a lidokaínu sú bez zmeny.",
          "Defibrilujte štandardnou energiou; elektródy umiestnite pod zväčšené prsníkové tkanivo.",
          "Pred defibriláciou odstráňte vnútorné aj vonkajšie fetálne monitory.",
        ]}
      />

      <FlowActionButton
        title="Pokračovať v algoritme tehotnej"
        description="Skontrolovať graviditu >20 týždňov alebo fundus nad pupkom"
        iconName="arrow-forward-outline"
        onPress={() => router.push("/algorithms/special/pregnet/step2")}
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS"
        description="Použiť všeobecný algoritmus rozšírenej resuscitácie"
        iconName="arrow-redo-outline"
        variant="light"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
