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
        title="Zastavenie krvného obehu na operačnej sále"
        description="Perioperačné zastavenie obehu vyžaduje okamžitú tímovú komunikáciu, kontrolu dýchacích ciest a cielené hľadanie reverzibilnej príčiny."
        urgent
      />

      <HeroCard
        eyebrow="Spúšťač KPR"
        title="Začnite kompresie pri SBP < 50 mmHg"
        description="Ak systolický tlak náhle klesne pod 50 mmHg spolu s poklesom ETCO2 napriek adekvátnemu zásahu, začnite kompresie hrudníka."
        iconName="pulse"
        danger
      />

      <ContentCard
        title="Predchádzajte riziku"
        iconName="shield-checkmark-outline"
        tone="info"
        items={[
          "Použite predoperačný skríning a identifikujte pacientov s vysokým rizikom.",
          "Komunikujte jasne o potenciálne kritických chirurgických krokoch.",
          "Pri nestabilite pacienta zabezpečte pokročilé monitorovanie a nepretržitú prítomnosť anestéziológa.",
        ]}
      />

      <ContentCard
        title="Okamžite informujte tím"
        iconName="people-outline"
        tone="danger"
        items={[
          "Informujte chirurga a celý tím na operačnej sále o zastavení obehu.",
          "Začnite s kvalitnými kompresiami hrudníka.",
          "Upravte výšku operačného stola, aby boli kompresie účinné.",
        ]}
      />

      <ContentCard
        title="Skontrolujte ventiláciu"
        iconName="medical-outline"
        tone="warning"
        items={[
          "Uistite sa, že dýchacie cesty sú zabezpečené.",
          "Skontrolujte hodnoty ETCO2 a poskytujte účinnú ventiláciu 100 % kyslíkom.",
          "Vylúčte nerozpoznanú ezofageálnu intubáciu.",
        ]}
      />

      <ContentCard
        title="Hľadajte reverzibilné príčiny"
        iconName="search-outline"
        items={[
          "Použite ultrazvuk na identifikáciu reverzibilných príčin zastavenia srdca.",
          "Zamerajte resuscitačné intervencie podľa zistenej príčiny.",
          "Vylúčte tenzný pneumotorax.",
        ]}
      />

      <ContentCard
        title="Keď konvenčná KPR zlyháva"
        iconName="git-branch-outline"
        tone="info"
        items={[
          "Zvážte skoré eKPR u vybraných pacientov.",
          "Ak eKPR nie je k dispozícii, vyškolení zdravotníci môžu v špecifických prípadoch zvážiť priame kompresie srdca ako alternatívu.",
        ]}
      />

      <ContentCard
        title="Ľudské faktory"
        iconName="list-outline"
        items={[
          "Zabezpečte oboznámenie tímu s vybavením na operačnej sále.",
          "Vopred rozdeľte stratégie a úlohy počas porád chirurgického tímu.",
          "Zahrňte perioperačné zastavenie obehu do tímového tréningu, in-situ simulácií a kurzov ALS.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť dospelý ALS"
        description="Použiť všeobecný algoritmus rozšírenej resuscitácie"
        iconName="pulse-outline"
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
    </AlgorithmScreen>
  );
}
