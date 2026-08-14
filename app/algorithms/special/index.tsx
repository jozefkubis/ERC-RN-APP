import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";
import type { ComponentProps } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

type SpecialAlgorithm = ComponentProps<typeof AlgorithmCard> & {
  route:
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
    | "/algorithms/special/pectus-excavatum/step1"
    | "/algorithms/special/pregnet/step1"
    | "/algorithms/special/katetrizacne-pracovisko/step1"
    | "/algorithms/special/topenie/step1"
    | "/algorithms/special/operacna-sala/step1"
    | "/algorithms/special/lokalne-anestetika/step1"
    | "/algorithms/special/kardiochirurgia/step1"
    | "/algorithms/special/lvad/step1"
    | "/algorithms/special/sport/step1"
    | "/algorithms/special/zzs-transport/step1"
    | "/algorithms/special/pocas-letu/step1"
    | "/algorithms/special/mikrogravitacia/step1"
    | "/algorithms/special/vyletna-lod/step1";
};

const specialText = {
  sk: {
    title: "Špeciálne okolnosti",
    description:
      "Úpravy ALS pri reverzibilných príčinách, špeciálnych prostrediach a vybraných skupinách pacientov.",
    algorithms: [
      {
        badgeText: "Príčina",
        title: "Anafylaxia",
        subtitle: "Anafylaktický šok a zastavenie obehu",
        description:
          "Rýchle rozpoznanie, odstránenie spúšťača, i.m. adrenalín a tekutinová resuscitácia.",
        iconFamily: "material-community",
        iconName: "allergy",
        route: "/algorithms/special/anafylaxia/step1",
      },
      {
        badgeText: "Príčina",
        title: "Poruchy draslíka",
        subtitle: "Hyperkaliémia a hypokaliémia",
        description:
          "Liečte poruchu elektrolytov ako reverzibilnú príčinu vrátane kalcia, inzulínu s glukózou...",
        iconFamily: "material-community",
        iconName: "atom-variant",
        route: "/algorithms/special/kalium/intro",
      },
      {
        badgeText: "Príčina",
        title: "Hypertermia",
        subtitle: "Tepelný úpal, malígna hypertermia...",
        description:
          "Merajte teplotu jadra, začnite aktívne chladenie a pri malígnej hypertermii podajte dantrolén.",
        iconFamily: "material-community",
        iconName: "thermometer-high",
        route: "/algorithms/special/hypertermia/intro",
      },
      {
        badgeText: "Príčina",
        title: "Hypotermia",
        subtitle: "Náhodné podchladenie a ZO",
        description:
          "Predĺžene hodnoťte životné funkcie, zmerajte teplotu jadra a rizikových pacientov smerujte do centra eKPR.",
        iconFamily: "material-community",
        iconName: "snowflake-thermometer",
        route: "/algorithms/special/hypotermia/intro",
      },
      {
        badgeText: "Príčina",
        title: "Pľúcna embólia",
        subtitle: "Vysokoriziková PE a zastavenie obehu",
        description:
          "Hľadajte zaťaženie pravej komory, nízke ETCO2 a zvážte fibrinolýzu...",
        iconFamily: "material-community",
        iconName: "lungs",
        route: "/algorithms/special/embolia/intro",
      },
      {
        badgeText: "Príčina",
        title: "Koronárna trombóza",
        subtitle: "AKS, STEMI, akútna koronárna oklúzia",
        description:
          "Aktivujte STEMI sieť, smerujte pacienta do PCI centra a pri pretrvávajúcej KPR...",
        iconFamily: "material-community",
        iconName: "heart-pulse",
        route: "/algorithms/special/koronarnatromboza/step1",
      },
      {
        badgeText: "Príčina",
        title: "Toxické látky",
        subtitle: "Intoxikácia ako reverzibilná príčina",
        description:
          "Chráňte záchrancov, znížte absorpciu toxínu, podajte antidotá...",
        iconFamily: "material-community",
        iconName: "bottle-tonic-skull",
        route: "/algorithms/special/toxic/step1",
      },
      {
        badgeText: "Príčina",
        title: "Trauma",
        subtitle: "Traumatické zastavenie krvného obehu",
        description:
          "Prioritou je okamžitá kontrola krvácania, zabezpečenie dýchacích ciest...",
        iconFamily: "fontawesome6",
        iconName: "kit-medical",
        route: "/algorithms/special/trauma/step1",
      },
      {
        badgeText: "Pacient",
        title: "Tehotenstvo",
        subtitle: "Zastavenie obehu v tehotnosti...",
        description:
          "Posun maternice doľava, privolať pôrodníka a neonatológa, pripraviť hysterotómiu.",
        iconFamily: "material-community",
        iconName: "human-pregnant",
        route: "/algorithms/special/pregnet/step1",
      },
      {
        badgeText: "Pacient",
        title: "Astma a CHOCHP",
        subtitle: "Obštrukčné ochorenie pľúc",
        description:
          "Liečte život ohrozujúcu hypoxiu 100 % kyslíkom, hľadajte tenzný pneumotorax...",
        iconFamily: "material-community",
        iconName: "lungs",
        route: "/algorithms/special/astma-chochp/step1",
      },
      {
        badgeText: "Pacient",
        title: "Hemodialýza",
        subtitle: "Zastavenie obehu počas dialýzy",
        description:
          "Zastavte dialýzu, vráťte objem krvi, odpojte pacienta pri defibrilácii...",
        iconFamily: "material-community",
        iconName: "water-pump",
        route: "/algorithms/special/hemodialyza/step1",
      },
      {
        badgeText: "Pacient",
        title: "Obezita",
        subtitle: "Resuscitácia obézneho pacienta",
        description:
          "Podľa odporúčaní nie je potrebná odchýlka od štandardného BLS a ALS postupu.",
        iconFamily: "material-community",
        iconName: "human-male-height-variant",
        route: "/algorithms/special/obezita/step1",
      },
      {
        badgeText: "Pacient",
        title: "Pectus excavatum",
        subtitle: "Deformita hrudníka...",
        description:
          "Zvážte menšiu hĺbku kompresií, predo-zadné elektródy a skoré eKPR...",
        iconFamily: "material-community",
        iconName: "bone",
        route: "/algorithms/special/pectus-excavatum/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Katetrizačné pracovisko",
        subtitle: "ZO počas koronárnej intervencie",
        description:
          "Použite ALS s úpravami: tri rýchle výboje pri defibrilovateľnom rytme...",
        iconFamily: "material-community",
        iconName: "stethoscope",
        route: "/algorithms/special/katetrizacne-pracovisko/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Topenie",
        subtitle: "Asfyxia, voda, hypotermia",
        description:
          "Dbajte na bezpečnosť záchrancu, začnite piatimi vdychmi so 100 % kyslíkom...",
        iconFamily: "material-community",
        iconName: "waves",
        route: "/algorithms/special/topenie/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Operačná sála",
        subtitle: "Perioperačné zastavenie obehu",
        description:
          "Informujte chirurgický tím, overte dýchacie cesty a ETCO2, použite ultrazvuk...",
        iconFamily: "material-community",
        iconName: "hospital-box",
        route: "/algorithms/special/operacna-sala/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Toxicita lokálnych anestetík",
        subtitle: "LAST počas regionálnej anestézie",
        description: "Zastavte lokálne anestetikum...",
        iconFamily: "material-community",
        iconName: "needle",
        route: "/algorithms/special/lokalne-anestetika/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Po kardiochirurgii",
        subtitle: "Zastavenie obehu po operácii srdca",
        description:
          "Potvrďte zastavenie na arteriálnej krivke, podajte až tri výboje...",
        iconFamily: "material-community",
        iconName: "heart-cog",
        route: "/algorithms/special/kardiochirurgia/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Pacient s LVAD",
        subtitle: "Neodpovedajúce zariadenie na podporu ľavej komory",
        description: "Aktivujte špecializovaný tím...",
        iconFamily: "material-community",
        iconName: "pump",
        route: "/algorithms/special/lvad/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Šport",
        subtitle: "Náhle zastavenie obehu pri športe",
        description:
          "Športoviská majú mať hodnotenie rizika, rýchly prístup na plochu, AED...",
        iconFamily: "fontawesome6",
        iconName: "person-running",
        route: "/algorithms/special/sport/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "ZZS a transport",
        subtitle: "Prednemocničná resuscitácia",
        description:
          "Resuscitujte primárne na mieste; transport počas KPR má mať jasnú indikáciu...",
        iconFamily: "fontawesome6",
        iconName: "truck-medical",
        route: "/algorithms/special/zzs-transport/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Počas letu",
        subtitle: "Zastavenie obehu v lietadle",
        description:
          "Vyhľadajte zdravotníka na palube, prispôsobte kompresie priestoru a zvážte odklon...",
        iconFamily: "ionicons",
        iconName: "airplane-outline",
        route: "/algorithms/special/pocas-letu/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Mikrogravitácia",
        subtitle: "Resuscitácia mimo bežnej gravitácie",
        description: "Najprv zabezpečte pacienta, zvážte mechanické kompresie...",
        iconFamily: "ionicons",
        iconName: "planet-outline",
        route: "/algorithms/special/mikrogravitacia/step1",
      },
      {
        badgeText: "Prostredie",
        badgeVariant: "warning",
        title: "Výletná loď",
        subtitle: "ALS na palube lode",
        description:
          "Aktivujte palubné zdravotnícke zdroje, požiadajte o ďalší personál...",
        iconFamily: "ionicons",
        iconName: "boat-outline",
        route: "/algorithms/special/vyletna-lod/step1",
      },
    ] satisfies SpecialAlgorithm[],
  },
  en: {
    title: "Special Circumstances",
    description:
      "ALS modifications for reversible causes, special environments, and selected patient groups.",
    algorithms: [
      {
        badgeText: "Cause",
        title: "Anaphylaxis",
        subtitle: "Anaphylactic shock and cardiac arrest",
        description:
          "Rapid recognition, remove the trigger, give IM adrenaline, and start fluid resuscitation.",
        iconFamily: "material-community",
        iconName: "allergy",
        route: "/algorithms/special/anafylaxia/step1",
      },
      {
        badgeText: "Cause",
        title: "Potassium disorders",
        subtitle: "Hyperkalaemia and hypokalaemia",
        description:
          "Treat the electrolyte disorder as a reversible cause, including calcium and insulin with glucose...",
        iconFamily: "material-community",
        iconName: "atom-variant",
        route: "/algorithms/special/kalium/intro",
      },
      {
        badgeText: "Cause",
        title: "Hyperthermia",
        subtitle: "Heat stroke, malignant hyperthermia...",
        description:
          "Measure core temperature, start active cooling, and give dantrolene in malignant hyperthermia.",
        iconFamily: "material-community",
        iconName: "thermometer-high",
        route: "/algorithms/special/hypertermia/intro",
      },
      {
        badgeText: "Cause",
        title: "Hypothermia",
        subtitle: "Accidental hypothermia and cardiac arrest",
        description:
          "Assess vital signs for longer, measure core temperature, and transfer high-risk patients to an ECPR centre.",
        iconFamily: "material-community",
        iconName: "snowflake-thermometer",
        route: "/algorithms/special/hypotermia/intro",
      },
      {
        badgeText: "Cause",
        title: "Pulmonary embolism",
        subtitle: "High-risk PE and cardiac arrest",
        description:
          "Look for right ventricular strain, low ETCO2, and consider fibrinolysis...",
        iconFamily: "material-community",
        iconName: "lungs",
        route: "/algorithms/special/embolia/intro",
      },
      {
        badgeText: "Cause",
        title: "Coronary thrombosis",
        subtitle: "ACS, STEMI, acute coronary occlusion",
        description:
          "Activate the STEMI network, transfer to a PCI centre, and consider options during ongoing CPR...",
        iconFamily: "material-community",
        iconName: "heart-pulse",
        route: "/algorithms/special/koronarnatromboza/step1",
      },
      {
        badgeText: "Cause",
        title: "Toxic agents",
        subtitle: "Poisoning as a reversible cause",
        description:
          "Protect rescuers, reduce toxin absorption, and give antidotes where indicated...",
        iconFamily: "material-community",
        iconName: "bottle-tonic-skull",
        route: "/algorithms/special/toxic/step1",
      },
      {
        badgeText: "Cause",
        title: "Trauma",
        subtitle: "Traumatic cardiac arrest",
        description:
          "Prioritise immediate haemorrhage control, airway management, and reversible causes...",
        iconFamily: "fontawesome6",
        iconName: "kit-medical",
        route: "/algorithms/special/trauma/step1",
      },
      {
        badgeText: "Patient",
        title: "Pregnancy",
        subtitle: "Cardiac arrest in pregnancy...",
        description:
          "Displace the uterus to the left, call obstetrics and neonatology, and prepare hysterotomy.",
        iconFamily: "material-community",
        iconName: "human-pregnant",
        route: "/algorithms/special/pregnet/step1",
      },
      {
        badgeText: "Patient",
        title: "Asthma and COPD",
        subtitle: "Obstructive lung disease",
        description:
          "Treat life-threatening hypoxia with 100 % oxygen and look for tension pneumothorax...",
        iconFamily: "material-community",
        iconName: "lungs",
        route: "/algorithms/special/astma-chochp/step1",
      },
      {
        badgeText: "Patient",
        title: "Haemodialysis",
        subtitle: "Cardiac arrest during dialysis",
        description:
          "Stop dialysis, return blood volume, and disconnect the patient during defibrillation...",
        iconFamily: "material-community",
        iconName: "water-pump",
        route: "/algorithms/special/hemodialyza/step1",
      },
      {
        badgeText: "Patient",
        title: "Obesity",
        subtitle: "Resuscitation of a patient with obesity",
        description:
          "Current guidance does not require deviation from standard BLS and ALS algorithms.",
        iconFamily: "material-community",
        iconName: "human-male-height-variant",
        route: "/algorithms/special/obezita/step1",
      },
      {
        badgeText: "Patient",
        title: "Pectus excavatum",
        subtitle: "Chest wall deformity...",
        description:
          "Consider reduced compression depth, anteroposterior pads, and early ECPR...",
        iconFamily: "material-community",
        iconName: "bone",
        route: "/algorithms/special/pectus-excavatum/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "Catheterisation laboratory",
        subtitle: "Cardiac arrest during coronary intervention",
        description:
          "Use ALS modifications: three quick shocks for shockable rhythms...",
        iconFamily: "material-community",
        iconName: "stethoscope",
        route: "/algorithms/special/katetrizacne-pracovisko/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "Drowning",
        subtitle: "Asphyxia, water, hypothermia",
        description:
          "Prioritise rescuer safety and start with five rescue breaths using 100 % oxygen...",
        iconFamily: "material-community",
        iconName: "waves",
        route: "/algorithms/special/topenie/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "Operating room",
        subtitle: "Perioperative cardiac arrest",
        description:
          "Inform the surgical team, check the airway and ETCO2, and use ultrasound...",
        iconFamily: "material-community",
        iconName: "hospital-box",
        route: "/algorithms/special/operacna-sala/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "Local anaesthetic toxicity",
        subtitle: "LAST during regional anaesthesia",
        description: "Stop local anaesthetic administration...",
        iconFamily: "material-community",
        iconName: "needle",
        route: "/algorithms/special/lokalne-anestetika/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "Post cardiac surgery",
        subtitle: "Cardiac arrest after heart surgery",
        description:
          "Confirm arrest on the arterial trace and give up to three shocks...",
        iconFamily: "material-community",
        iconName: "heart-cog",
        route: "/algorithms/special/kardiochirurgia/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "Patient with LVAD",
        subtitle: "Unresponsive left ventricular assist device",
        description: "Activate the specialist team...",
        iconFamily: "material-community",
        iconName: "pump",
        route: "/algorithms/special/lvad/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "Sport",
        subtitle: "Sudden cardiac arrest during sport",
        description:
          "Sports venues should have risk assessment, rapid access to the field, AED availability...",
        iconFamily: "fontawesome6",
        iconName: "person-running",
        route: "/algorithms/special/sport/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "EMS and transport",
        subtitle: "Prehospital resuscitation",
        description:
          "Resuscitate primarily on scene; transport during CPR should have a clear indication...",
        iconFamily: "fontawesome6",
        iconName: "truck-medical",
        route: "/algorithms/special/zzs-transport/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "In-flight",
        subtitle: "Cardiac arrest on an aircraft",
        description:
          "Look for a healthcare professional on board, adapt compressions to the space, and consider diversion...",
        iconFamily: "ionicons",
        iconName: "airplane-outline",
        route: "/algorithms/special/pocas-letu/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "Microgravity",
        subtitle: "Resuscitation outside normal gravity",
        description: "Secure the patient first and consider mechanical compressions...",
        iconFamily: "ionicons",
        iconName: "planet-outline",
        route: "/algorithms/special/mikrogravitacia/step1",
      },
      {
        badgeText: "Environment",
        badgeVariant: "warning",
        title: "Cruise ship",
        subtitle: "ALS on board a ship",
        description:
          "Activate onboard medical resources and request additional personnel...",
        iconFamily: "ionicons",
        iconName: "boat-outline",
        route: "/algorithms/special/vyletna-lod/step1",
      },
    ] satisfies SpecialAlgorithm[],
  },
};

const screenColors = {
  light: {
    background: "#F7F8FC",
    statusBar: "dark-content" as const,
    title: "#10243C",
    description: "#5C6574",
  },
  dark: {
    background: "#07111F",
    statusBar: "light-content" as const,
    title: "#F5F8FC",
    description: "#AAB6C7",
  },
};

export default function SpecialAlgorithms() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = specialText[language];
  const colors = screenColors[themeMode];

  return (
    <>
      <StatusBar barStyle={colors.statusBar} />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleTextContainer}>
          <Text selectable style={[styles.titleText, { color: colors.title }]}>
            {text.title}
          </Text>
          <Text
            selectable
            style={[styles.descriptionText, { color: colors.description }]}
          >
            {text.description}
          </Text>
        </View>

        {text.algorithms.map((algorithm) => {
          const { route, ...cardProps } = algorithm;

          return (
            <AlgorithmCard
              key={route}
              {...cardProps}
              themeMode={themeMode}
              onPress={() => router.push(route)}
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
    gap: 5,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 14,
  },
});
