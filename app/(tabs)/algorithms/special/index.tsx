import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useRouter } from "expo-router";
import type { ComponentProps } from "react";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

type SpecialAlgorithm = ComponentProps<typeof AlgorithmCard> & {
  route?:
    | "/algorithms/special/anafylaxia/step1"
    | "/algorithms/special/kalium/intro"
    | "/algorithms/special/hypertermia/intro"
    | "/algorithms/special/hypotermia/intro"
    | "/algorithms/special/embolia/intro"
    | "/algorithms/special/koronarnatromboza/step1"
    | "/algorithms/special/toxic/step1"
    | "/algorithms/special/trauma/step1"
    | "/algorithms/special/astma-chochp/step1"
    | "/algorithms/special/hemodialyza/step1"
    | "/algorithms/special/obezita/step1"
    | "/algorithms/special/pectus-excavatum/step1";
};

const specialAlgorithms: SpecialAlgorithm[] = [
  {
    badgeText: "Príčina",
    title: "Anafylaxia",
    subtitle: "Anafylaktický šok a zastavenie obehu",
    description:
      "Rýchle rozpoznanie, odstránenie spúšťača, i.m. adrenalín a tekutinová resuscitácia.",
    iconFamily: "material-community" as const,
    iconName: "allergy" as const,
    route: "/algorithms/special/anafylaxia/step1" as const,
  },

  {
    badgeText: "Príčina",
    title: "Poruchy draslíka",
    subtitle: "Hyperkaliémia a hypokaliémia",
    description:
      "Liečte poruchu elektrolytov ako reverzibilnú príčinu vrátane kalcia, inzulínu s glukózou...",
    iconFamily: "material-community" as const,
    iconName: "atom-variant" as const,
    route: "/algorithms/special/kalium/intro" as const,
  },
  {
    badgeText: "Príčina",
    title: "Hypertermia",
    subtitle: "Tepelný úpal, malígna hypertermia...",
    description:
      "Merajte teplotu jadra, začnite aktívne chladenie a pri malígnej hypertermii podajte dantrolén.",
    iconFamily: "material-community" as const,
    iconName: "thermometer-high" as const,
    route: "/algorithms/special/hypertermia/intro" as const,
  },
  {
    badgeText: "Príčina",
    title: "Hypotermia",
    subtitle: "Náhodné podchladenie a ZO",
    description:
      "Predĺžene hodnoťte životné funkcie, zmerajte teplotu jadra a rizikových pacientov smerujte do centra eKPR.",
    iconFamily: "material-community" as const,
    iconName: "snowflake-thermometer" as const,
    route: "/algorithms/special/hypotermia/intro" as const,
  },
  {
    badgeText: "Príčina",
    title: "Pľúcna embólia",
    subtitle: "Vysokoriziková PE a zastavenie obehu",
    description:
      "Hľadajte zaťaženie pravej komory, nízke ETCO2 a zvážte fibrinolýzu...",
    iconFamily: "material-community" as const,
    iconName: "lungs" as const,
    route: "/algorithms/special/embolia/intro" as const,
  },
  {
    badgeText: "Príčina",
    title: "Koronárna trombóza",
    subtitle: "AKS, STEMI, akútna koronárna oklúzia",
    description:
      "Aktivujte STEMI sieť, smerujte pacienta do PCI centra a pri pretrvávajúcej KPR...",
    iconFamily: "material-community" as const,
    iconName: "heart-pulse" as const,
    route: "/algorithms/special/koronarnatromboza/step1" as const,
  },
  {
    badgeText: "Príčina",
    title: "Toxické látky",
    subtitle: "Intoxikácia ako reverzibilná príčina",
    description:
      "Chráňte záchrancov, znížte absorpciu toxínu, podajte antidotá...",
    iconFamily: "material-community" as const,
    iconName: "bottle-tonic-skull" as const,
    route: "/algorithms/special/toxic/step1" as const,
  },
  {
    badgeText: "Príčina",
    title: "Trauma",
    subtitle: "Traumatické zastavenie krvného obehu",
    description:
      "Prioritou je okamžitá kontrola krvácania, zabezpečenie dýchacích ciest...",
    iconFamily: "fontawesome6" as const,
    iconName: "kit-medical" as const,
    route: "/algorithms/special/trauma/step1" as const,
  },
  {
    badgeText: "Pacient",
    title: "Tehotenstvo",
    subtitle: "Zastavenie obehu v tehotnosti...",
    description:
      "Posun maternice doľava, privolať pôrodníka a neonatológa, pripraviť hysterotómiu.",
    iconFamily: "material-community" as const,
    iconName: "human-pregnant" as const,
  },
  {
    badgeText: "Pacient",
    title: "Astma a CHOCHP",
    subtitle: "Obštrukčné ochorenie pľúc",
    description:
      "Liečte život ohrozujúcu hypoxiu 100 % kyslíkom, hľadajte tenzný pneumotorax...",
    iconFamily: "material-community" as const,
    iconName: "lungs" as const,
    route: "/algorithms/special/astma-chochp/step1" as const,
  },
  {
    badgeText: "Pacient",
    title: "Hemodialýza",
    subtitle: "Zastavenie obehu počas dialýzy",
    description:
      "Zastavte dialýzu, vráťte objem krvi, odpojte pacienta pri defibrilácii...",
    iconFamily: "material-community" as const,
    iconName: "water-pump" as const,
    route: "/algorithms/special/hemodialyza/step1" as const,
  },
  {
    badgeText: "Pacient",
    title: "Obezita",
    subtitle: "Resuscitácia obézneho pacienta",
    description:
      "Podľa odporúčaní nie je potrebná odchýlka od štandardného BLS a ALS postupu.",
    iconFamily: "material-community" as const,
    iconName: "human-male-height-variant" as const,
    route: "/algorithms/special/obezita/step1" as const,
  },
  {
    badgeText: "Pacient",
    title: "Pectus excavatum",
    subtitle: "Deformita hrudníka...",
    description:
      "Zvážte menšiu hĺbku kompresií, predo-zadné elektródy a skoré eKPR...",
    iconFamily: "material-community" as const,
    iconName: "bone" as const,
    route: "/algorithms/special/pectus-excavatum/step1" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Katetrizačné pracovisko",
    subtitle: "ZO počas koronárnej intervencie",
    description:
      "Použite ALS s úpravami: tri rýchle výboje pri defibrilovateľnom rytme...",
    iconFamily: "material-community" as const,
    iconName: "stethoscope" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Topenie",
    subtitle: "Asfyxia, voda, hypotermia",
    description:
      "Dbajte na bezpečnosť záchrancu, začnite piatimi vdychmi so 100 % kyslíkom...",
    iconFamily: "material-community" as const,
    iconName: "waves" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Operačná sála",
    subtitle: "Perioperačné zastavenie obehu",
    description:
      "Informujte chirurgický tím, overte dýchacie cesty a ETCO2, použite ultrazvuk...",
    iconFamily: "material-community" as const,
    iconName: "hospital-box" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Toxicita lokálnych anestetík",
    subtitle: "LAST počas regionálnej anestézie",
    description: "Zastavte lokálne anestetikum...",
    iconFamily: "material-community" as const,
    iconName: "needle" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Po kardiochirurgii",
    subtitle: "Zastavenie obehu po operácii srdca",
    description:
      "Potvrďte zastavenie na arteriálnej krivke, podajte až tri výboje...",
    iconFamily: "material-community" as const,
    iconName: "heart-cog" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Pacient s LVAD",
    subtitle: "Neodpovedajúce zariadenie na podporu ľavej komory",
    description: "Aktivujte špecializovaný tím...",
    iconFamily: "material-community" as const,
    iconName: "pump" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Šport",
    subtitle: "Náhle zastavenie obehu pri športe",
    description:
      "Športoviská majú mať hodnotenie rizika, rýchly prístup na plochu, AED...",
    iconFamily: "fontawesome6" as const,
    iconName: "person-running" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "ZZS a transport",
    subtitle: "Prednemocničná resuscitácia",
    description:
      "Resuscitujte primárne na mieste; transport počas KPR má mať jasnú indikáciu...",
    iconFamily: "fontawesome6" as const,
    iconName: "truck-medical" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Počas letu",
    subtitle: "Zastavenie obehu v lietadle",
    description:
      "Vyhľadajte zdravotníka na palube, prispôsobte kompresie priestoru a zvážte odklon...",
    iconFamily: "ionicons" as const,
    iconName: "airplane-outline" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Mikrogravitácia",
    subtitle: "Resuscitácia mimo bežnej gravitácie",
    description: "Najprv zabezpečte pacienta, zvážte mechanické kompresie...",
    iconFamily: "ionicons" as const,
    iconName: "planet-outline" as const,
  },
  {
    badgeText: "Prostredie",
    badgeVariant: "warning" as const,
    title: "Výletná loď",
    subtitle: "ALS na palube lode",
    description:
      "Aktivujte palubné zdravotnícke zdroje, požiadajte o ďalší personál...",
    iconFamily: "ionicons" as const,
    iconName: "boat-outline" as const,
  },
];

export default function SpecialAlgorithms() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Špeciálne okolnosti</Text>
          <Text style={styles.descriptionText}>
            Úpravy ALS pri reverzibilných príčinách, špeciálnych prostrediach a
            vybraných skupinách pacientov.
          </Text>
        </View>

        {specialAlgorithms.map((algorithm) => {
          const { route, ...cardProps } = algorithm;

          return (
            <AlgorithmCard
              key={algorithm.title}
              {...cardProps}
              onPress={route ? () => router.push(route) : undefined}
            />
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    gap: 15,
  },
  titleTextContainer: {
    flexDirection: "column",
    gap: 5,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10243C",
  },
  descriptionText: {
    fontSize: 14,
    color: "#10243C",
  },
});
