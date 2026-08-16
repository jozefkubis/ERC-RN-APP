import type { Href } from "expo-router";
import type { AppLanguage } from "@/src/context/settings-context";

export type AlgorithmSearchItem = {
  title: string;
  category: string;
  keywords: readonly string[];
  route: Href;
};

const slovakAlgorithmSearchItems = [
  {
    title: "Resuscitácia dospelých",
    category: "Algoritmy ERC 2025",
    keywords: ["dospelý", "dospelí", "resuscitácia", "KPR", "zastavenie obehu"],
    route: "/algorithms/adult-resuscitation",
  },
  {
    title: "ALS",
    category: "Resuscitácia dospelých",
    keywords: [
      "advanced life support",
      "rozšírená resuscitácia",
      "zastavenie obehu",
      "defibrilácia",
      "adrenalín",
      "amiodarón",
      "KPR",
    ],
    route: "/algorithms/adult-resuscitation/als/step1",
  },
  {
    title: "BLS",
    category: "Resuscitácia dospelých",
    keywords: [
      "basic life support",
      "základná resuscitácia",
      "bezvedomie",
      "dýchanie",
      "stláčanie hrudníka",
      "AED",
      "KPR",
    ],
    route: "/algorithms/adult-resuscitation/bls/step1",
  },
  {
    title: "Tachykardia",
    category: "Resuscitácia dospelých",
    keywords: [
      "tachyarytmia",
      "rýchly pulz",
      "úzky QRS",
      "široký QRS",
      "SVT",
      "komorová tachykardia",
      "arytmia",
    ],
    route: "/algorithms/adult-resuscitation/tachycardia/step1",
  },
  {
    title: "Bradykardia",
    category: "Resuscitácia dospelých",
    keywords: [
      "pomalý pulz",
      "symptomatická bradykardia",
      "atropín",
      "kardiostimulácia",
      "arytmia",
    ],
    route: "/algorithms/adult-resuscitation/bradycardia/step1",
  },
  {
    title: "Reverzibilné príčiny 4H4T",
    category: "Resuscitácia dospelých",
    keywords: [
      "4H",
      "4T",
      "hypoxia",
      "hypovolémia",
      "hypotermia",
      "hyperkaliémia",
      "hypokaliémia",
      "tamponáda",
      "tenzný pneumotorax",
      "trombóza",
      "toxíny",
    ],
    route: "/algorithms/adult-resuscitation/als/4h4t",
  },
  {
    title: "Starostlivosť po obnovení obehu",
    category: "Resuscitácia dospelých",
    keywords: [
      "ROSC",
      "návrat spontánneho obehu",
      "postresuscitačná starostlivosť",
      "oxygenácia",
      "ventilácia",
      "perfúzia",
    ],
    route: "/algorithms/adult-resuscitation/als/rosc",
  },
  {
    title: "Synchronizovaná kardioverzia",
    category: "Resuscitácia dospelých",
    keywords: [
      "kardioverzia",
      "synchronizovaný výboj",
      "tachykardia",
      "tachyarytmia",
      "nestabilný pacient",
      "defibrilátor",
    ],
    route: "/algorithms/adult-resuscitation/tachycardia/synccardioversion",
  },
  {
    title: "Transkutánna kardiostimulácia",
    category: "Resuscitácia dospelých",
    keywords: [
      "externá stimulácia",
      "neinvazívna stimulácia",
      "pacing",
      "bradykardia",
      "kardiostimulátor",
      "defibrilátor",
    ],
    route: "/algorithms/adult-resuscitation/bradycardia/cardiostimulationscreen",
  },
  {
    title: "Alternatívne lieky pri bradykardii",
    category: "Resuscitácia dospelých",
    keywords: [
      "bradykardia",
      "atropín",
      "izoprenalín",
      "adrenalín",
      "aminofylín",
      "glukagón",
      "lieky",
    ],
    route: "/algorithms/adult-resuscitation/bradycardia/alternative-medications",
  },
  {
    title: "Resuscitácia detí",
    category: "Algoritmy ERC 2025",
    keywords: ["dieťa", "deti", "pediatria", "EPALS", "detská resuscitácia", "KPR"],
    route: "/algorithms/epals",
  },
  {
    title: "PALS",
    category: "Resuscitácia detí",
    keywords: [
      "paediatric advanced life support",
      "pediatric advanced life support",
      "rozšírená resuscitácia dieťaťa",
      "zastavenie obehu",
      "defibrilácia",
      "adrenalín",
      "KPR",
    ],
    route: "/algorithms/epals/pals/step1",
  },
  {
    title: "PBLS",
    category: "Resuscitácia detí",
    keywords: [
      "paediatric basic life support",
      "pediatric basic life support",
      "základná resuscitácia dieťaťa",
      "5 úvodných vdychov",
      "AED",
      "KPR",
    ],
    route: "/algorithms/epals/pbls/step1",
  },
  {
    title: "FBAO",
    category: "Resuscitácia detí",
    keywords: [
      "foreign body airway obstruction",
      "obštrukcia dýchacích ciest",
      "cudzie teleso",
      "dusenie",
      "kašeľ",
      "údery medzi lopatky",
    ],
    route: "/algorithms/epals/fbao/step1",
  },
  {
    title: "Starostlivosť po obnovení obehu dieťaťa",
    category: "Resuscitácia detí",
    keywords: [
      "ROSC",
      "návrat spontánneho obehu",
      "postresuscitačná starostlivosť",
      "dieťa",
      "oxygenácia",
      "ventilácia",
      "perfúzia",
    ],
    route: "/algorithms/epals/pals/roscpals",
  },
  {
    title: "Ukončenie resuscitácie dieťaťa",
    category: "Resuscitácia detí",
    keywords: [
      "ukončenie KPR",
      "zastavenie resuscitácie",
      "termination",
      "etika",
      "tímové rozhodnutie",
    ],
    route: "/algorithms/epals/pals/termination",
  },
  {
    title: "Resuscitácia novorodencov",
    category: "Algoritmy ERC 2025",
    keywords: [
      "NLS",
      "newborn life support",
      "novorodenec",
      "pôrod",
      "ventilácia",
      "pupočník",
      "resuscitácia po pôrode",
    ],
    route: "/algorithms/newborn/step1",
  },
  {
    title: "Špeciálne okolnosti",
    category: "Algoritmy ERC 2025",
    keywords: [
      "reverzibilné príčiny",
      "špeciálne prostredie",
      "osobitné skupiny pacientov",
      "upravené ALS",
    ],
    route: "/algorithms/special",
  },
  {
    title: "Anafylaxia",
    category: "Špeciálne okolnosti",
    keywords: [
      "alergia",
      "anafylaktický šok",
      "adrenalín",
      "opuch",
      "žihľavka",
      "bronchospazmus",
      "hypotenzia",
    ],
    route: "/algorithms/special/anafylaxia/step1",
  },
  {
    title: "Refraktérna anafylaxia",
    category: "Špeciálne okolnosti",
    keywords: [
      "ťažká alergia",
      "anafylaktický šok",
      "dve dávky adrenalínu",
      "infúzia adrenalínu",
      "nereaguje na adrenalín",
    ],
    route: "/algorithms/special/anafylaxia/refractory",
  },
  {
    title: "Zastavenie obehu pri anafylaxii",
    category: "Špeciálne okolnosti",
    keywords: ["anafylaxia", "alergia", "anafylaktický šok", "ALS", "KPR", "adrenalín"],
    route: "/algorithms/special/anafylaxia/cardiac-arrest",
  },
  {
    title: "Starostlivosť po anafylaxii",
    category: "Špeciálne okolnosti",
    keywords: [
      "anafylaxia",
      "po klinickom zlepšení",
      "monitorovanie",
      "bifázická reakcia",
      "následná starostlivosť",
    ],
    route: "/algorithms/special/anafylaxia/aftercare",
  },
  {
    title: "Poruchy draslíka",
    category: "Špeciálne okolnosti",
    keywords: [
      "kálium",
      "K+",
      "elektrolyty",
      "hyperkaliémia",
      "hypokaliémia",
      "arytmia",
      "EKG",
    ],
    route: "/algorithms/special/kalium/intro",
  },
  {
    title: "Hyperkaliémia",
    category: "Špeciálne okolnosti",
    keywords: [
      "vysoký draslík",
      "zvýšené K+",
      "kálium",
      "kalcium",
      "inzulín",
      "glukóza",
      "dialýza",
      "EKG",
    ],
    route: "/algorithms/special/kalium/hyper/step1",
  },
  {
    title: "Hypokaliémia",
    category: "Špeciálne okolnosti",
    keywords: [
      "nízky draslík",
      "znížené K+",
      "kálium",
      "horčík",
      "magnézium",
      "svalová slabosť",
      "arytmia",
      "EKG",
    ],
    route: "/algorithms/special/kalium/hypo/step1",
  },
  {
    title: "Hypertermia",
    category: "Špeciálne okolnosti",
    keywords: [
      "prehriatie",
      "vysoká teplota",
      "teplota jadra",
      "úpal",
      "malígna hypertermia",
      "toxíny",
      "chladenie",
    ],
    route: "/algorithms/special/hypertermia/intro",
  },
  {
    title: "Ťažká hypertermia",
    category: "Špeciálne okolnosti",
    keywords: [
      "úpal",
      "prehriatie",
      "zlyhanie termoregulácie",
      "teplota jadra",
      "aktívne chladenie",
    ],
    route: "/algorithms/special/hypertermia/regular/step1",
  },
  {
    title: "Malígna hypertermia",
    category: "Špeciálne okolnosti",
    keywords: [
      "anestetiká",
      "sukcinylcholín",
      "dantrolén",
      "hypermetabolický stav",
      "vysoká teplota",
      "chladenie",
    ],
    route: "/algorithms/special/hypertermia/maligna/step1",
  },
  {
    title: "Hypertermia spôsobená toxínmi",
    category: "Špeciálne okolnosti",
    keywords: [
      "intoxikácia",
      "sympatomimetiká",
      "MDMA",
      "extáza",
      "agitácia",
      "kŕče",
      "chladenie",
    ],
    route: "/algorithms/special/hypertermia/toxic/step1",
  },
  {
    title: "Hypotermia",
    category: "Špeciálne okolnosti",
    keywords: [
      "podchladenie",
      "nízka teplota",
      "teplota jadra",
      "ohrievanie",
      "lavína",
      "eKPR",
      "ECLS",
    ],
    route: "/algorithms/special/hypotermia/intro",
  },
  {
    title: "Náhodná hypotermia",
    category: "Špeciálne okolnosti",
    keywords: [
      "podchladenie",
      "nízka teplota",
      "teplota jadra",
      "predĺžené hodnotenie",
      "riadené ohrievanie",
      "eKPR",
      "ECLS",
    ],
    route: "/algorithms/special/hypotermia/regular/step1",
  },
  {
    title: "Záchrana z lavíny",
    category: "Špeciálne okolnosti",
    keywords: [
      "lavína",
      "zasypanie",
      "podchladenie",
      "hypotermia",
      "teplota jadra",
      "AvaLife",
      "dýchacie cesty",
    ],
    route: "/algorithms/special/hypotermia/lavina/step1",
  },
  {
    title: "AvaLife",
    category: "Špeciálne okolnosti",
    keywords: [
      "lavína",
      "zasypaný pacient",
      "triedenie",
      "triáž",
      "prvá pomoc",
      "lavínová záchrana",
    ],
    route: "/algorithms/special/hypotermia/lavina/avalife",
  },
  {
    title: "HOPE skóre",
    category: "Špeciálne okolnosti",
    keywords: [
      "Hypothermia Outcome Prediction",
      "hypotermia",
      "ECLS",
      "eKPR",
      "mimotelové ohrievanie",
      "prognóza",
      "kalkulačka",
    ],
    route: "/algorithms/special/hypotermia/hope-score",
  },
  {
    title: "Pľúcna embólia",
    category: "Špeciálne okolnosti",
    keywords: [
      "PE",
      "embólia",
      "trombóza",
      "dušnosť",
      "pravá komora",
      "hemodynamická nestabilita",
      "antikoagulácia",
      "fibrinolýza",
    ],
    route: "/algorithms/special/embolia/intro",
  },
  {
    title: "Pľúcna embólia so zachovaným obehom",
    category: "Špeciálne okolnosti",
    keywords: [
      "PE",
      "náhla dušnosť",
      "hemodynamická nestabilita",
      "EKG",
      "echokardiografia",
      "antikoagulácia",
      "trombolýza",
    ],
    route: "/algorithms/special/embolia/PE/step1",
  },
  {
    title: "Pľúcna embólia so zastavením obehu",
    category: "Špeciálne okolnosti",
    keywords: [
      "PE",
      "KPR",
      "fibrinolýza",
      "trombolýza",
      "embolektómia",
      "trombektómia",
      "eKPR",
      "ECLS",
    ],
    route: "/algorithms/special/embolia/PEresuscitacia/step1",
  },
  {
    title: "Koronárna trombóza",
    category: "Špeciálne okolnosti",
    keywords: [
      "AKS",
      "akútny koronárny syndróm",
      "infarkt",
      "STEMI",
      "NSTEMI",
      "PCI",
      "koronárna oklúzia",
      "bolesť na hrudníku",
    ],
    route: "/algorithms/special/koronarnatromboza/step1",
  },
  {
    title: "Koronárna trombóza s eleváciou ST",
    category: "Špeciálne okolnosti",
    keywords: ["STEMI", "infarkt", "elevácia ST", "AKS", "PCI", "katetrizácia", "reperfúzia"],
    route: "/algorithms/special/koronarnatromboza/st-elevation",
  },
  {
    title: "Koronárna trombóza bez elevácie ST",
    category: "Špeciálne okolnosti",
    keywords: ["NSTEMI", "NSTE-AKS", "infarkt", "AKS", "bez elevácie ST", "koronárny syndróm"],
    route: "/algorithms/special/koronarnatromboza/no-st-elevation",
  },
  {
    title: "Koronárna trombóza počas KPR",
    category: "Špeciálne okolnosti",
    keywords: [
      "prebiehajúca resuscitácia",
      "ongoing CPR",
      "zastavenie obehu",
      "PCI počas KPR",
      "eKPR",
      "koronárna oklúzia",
    ],
    route: "/algorithms/special/koronarnatromboza/ongoing-cpr",
  },
  {
    title: "Toxické látky",
    category: "Špeciálne okolnosti",
    keywords: [
      "intoxikácia",
      "otrava",
      "toxín",
      "predávkovanie",
      "antidotum",
      "dekontaminácia",
      "poisoning",
    ],
    route: "/algorithms/special/toxic/step1",
  },
  {
    title: "Trauma",
    category: "Špeciálne okolnosti",
    keywords: [
      "traumatické zastavenie obehu",
      "krvácanie",
      "hypovolémia",
      "tenzný pneumotorax",
      "tamponáda",
      "TCA",
      "úraz",
    ],
    route: "/algorithms/special/trauma/step1",
  },
  {
    title: "Tehotenstvo",
    category: "Špeciálne okolnosti",
    keywords: [
      "tehotná pacientka",
      "gravidita",
      "maternal cardiac arrest",
      "posun maternice",
      "hysterotómia",
      "perimortálny cisársky rez",
      "pôrodník",
      "neonatológ",
    ],
    route: "/algorithms/special/pregnet/step1",
  },
  {
    title: "Astma a CHOCHP",
    category: "Špeciálne okolnosti",
    keywords: [
      "astma",
      "CHOCHP",
      "COPD",
      "bronchospazmus",
      "obštrukcia",
      "hypoxia",
      "tenzný pneumotorax",
      "status asthmaticus",
    ],
    route: "/algorithms/special/astma-chochp/step1",
  },
  {
    title: "Hemodialýza",
    category: "Špeciálne okolnosti",
    keywords: [
      "dialýza",
      "dialyzovaný pacient",
      "arteriovenózna fistula",
      "AV fistula",
      "hyperkaliémia",
      "zastavenie obehu počas dialýzy",
    ],
    route: "/algorithms/special/hemodialyza/step1",
  },
  {
    title: "Obezita",
    category: "Špeciálne okolnosti",
    keywords: [
      "obézny pacient",
      "nadváha",
      "BMI",
      "resuscitácia pri obezite",
      "defibrilácia",
      "KPR",
    ],
    route: "/algorithms/special/obezita/step1",
  },
  {
    title: "Pectus excavatum",
    category: "Špeciálne okolnosti",
    keywords: [
      "vpáčený hrudník",
      "deformita hrudníka",
      "Nussova operácia",
      "kompresie hrudníka",
      "predozadné elektródy",
      "eKPR",
    ],
    route: "/algorithms/special/pectus-excavatum/step1",
  },
  {
    title: "Katetrizačné pracovisko",
    category: "Špeciálne okolnosti",
    keywords: [
      "katetrizačná sála",
      "koronárna intervencia",
      "PCI",
      "angiografia",
      "tri rýchle výboje",
      "zastavenie obehu pri PCI",
    ],
    route: "/algorithms/special/katetrizacne-pracovisko/step1",
  },
  {
    title: "Topenie",
    category: "Špeciálne okolnosti",
    keywords: [
      "utopenie",
      "voda",
      "asfyxia",
      "hypoxia",
      "päť úvodných vdychov",
      "vodná záchrana",
      "hypotermia",
    ],
    route: "/algorithms/special/topenie/step1",
  },
  {
    title: "Operačná sála",
    category: "Špeciálne okolnosti",
    keywords: [
      "perioperačné zastavenie obehu",
      "operácia",
      "anestézia",
      "ETCO2",
      "ultrazvuk",
      "chirurgický tím",
    ],
    route: "/algorithms/special/operacna-sala/step1",
  },
  {
    title: "Toxicita lokálnych anestetík",
    category: "Špeciálne okolnosti",
    keywords: [
      "LAST",
      "lokálne anestetikum",
      "regionálna anestézia",
      "lipidová emulzia",
      "intralipid",
      "kŕče",
      "arytmia",
    ],
    route: "/algorithms/special/lokalne-anestetika/step1",
  },
  {
    title: "Zastavenie obehu po kardiochirurgii",
    category: "Špeciálne okolnosti",
    keywords: [
      "po operácii srdca",
      "kardiochirurgia",
      "sternotómia",
      "resternotómia",
      "tri rýchle výboje",
      "arteriálna krivka",
    ],
    route: "/algorithms/special/kardiochirurgia/step1",
  },
  {
    title: "Pacient s LVAD",
    category: "Špeciálne okolnosti",
    keywords: [
      "left ventricular assist device",
      "podpora ľavej komory",
      "srdcová pumpa",
      "mechanická podpora obehu",
      "bez pulzu",
      "neodpovedajúci pacient",
    ],
    route: "/algorithms/special/lvad/step1",
  },
  {
    title: "Náhle zastavenie obehu pri športe",
    category: "Špeciálne okolnosti",
    keywords: [
      "šport",
      "športovec",
      "ihrisko",
      "štadión",
      "AED",
      "náhla smrť športovca",
      "commotio cordis",
    ],
    route: "/algorithms/special/sport/step1",
  },
  {
    title: "ZZS a transport počas KPR",
    category: "Špeciálne okolnosti",
    keywords: [
      "záchranná zdravotná služba",
      "sanitka",
      "prednemocničná resuscitácia",
      "transport za resuscitácie",
      "mechanické kompresie",
      "KPR počas transportu",
    ],
    route: "/algorithms/special/zzs-transport/step1",
  },
  {
    title: "Zastavenie obehu počas letu",
    category: "Špeciálne okolnosti",
    keywords: [
      "lietadlo",
      "paluba lietadla",
      "letecká doprava",
      "AED v lietadle",
      "odklon letu",
      "resuscitácia v lietadle",
    ],
    route: "/algorithms/special/pocas-letu/step1",
  },
  {
    title: "Resuscitácia v mikrogravitácii",
    category: "Špeciálne okolnosti",
    keywords: [
      "mikrogravitácia",
      "beztiažový stav",
      "vesmír",
      "kozmická loď",
      "astronaut",
      "mechanické kompresie",
    ],
    route: "/algorithms/special/mikrogravitacia/step1",
  },
  {
    title: "Resuscitácia na výletnej lodi",
    category: "Špeciálne okolnosti",
    keywords: [
      "výletná loď",
      "plavba",
      "paluba lode",
      "cruise ship",
      "námorná medicína",
      "AED na lodi",
    ],
    route: "/algorithms/special/vyletna-lod/step1",
  },
] satisfies readonly AlgorithmSearchItem[];

type EnglishSearchText = {
  title: string;
  keywords: readonly string[];
};

const englishTextByRoute: Record<string, EnglishSearchText> = {
  "/algorithms/adult-resuscitation": {
    title: "Adult resuscitation",
    keywords: ["adult", "resuscitation", "CPR", "cardiac arrest"],
  },
  "/algorithms/adult-resuscitation/als/step1": {
    title: "ALS",
    keywords: [
      "advanced life support",
      "cardiac arrest",
      "defibrillation",
      "adrenaline",
      "amiodarone",
      "CPR",
    ],
  },
  "/algorithms/adult-resuscitation/bls/step1": {
    title: "BLS",
    keywords: [
      "basic life support",
      "unconscious",
      "breathing",
      "chest compressions",
      "AED",
      "CPR",
    ],
  },
  "/algorithms/adult-resuscitation/tachycardia/step1": {
    title: "Tachycardia",
    keywords: [
      "tachyarrhythmia",
      "fast pulse",
      "narrow QRS",
      "broad QRS",
      "SVT",
      "ventricular tachycardia",
    ],
  },
  "/algorithms/adult-resuscitation/bradycardia/step1": {
    title: "Bradycardia",
    keywords: [
      "slow pulse",
      "symptomatic bradycardia",
      "atropine",
      "cardiac pacing",
      "arrhythmia",
    ],
  },
  "/algorithms/adult-resuscitation/als/4h4t": {
    title: "Reversible causes 4H4T",
    keywords: [
      "4H",
      "4T",
      "hypoxia",
      "hypovolaemia",
      "hypothermia",
      "hyperkalaemia",
      "hypokalaemia",
      "tamponade",
      "tension pneumothorax",
      "thrombosis",
      "toxins",
    ],
  },
  "/algorithms/adult-resuscitation/als/rosc": {
    title: "Post-resuscitation care",
    keywords: [
      "ROSC",
      "return of spontaneous circulation",
      "post-resuscitation care",
      "oxygenation",
      "ventilation",
      "perfusion",
    ],
  },
  "/algorithms/adult-resuscitation/tachycardia/synccardioversion": {
    title: "Synchronised cardioversion",
    keywords: [
      "cardioversion",
      "synchronised shock",
      "tachycardia",
      "unstable patient",
      "defibrillator",
    ],
  },
  "/algorithms/adult-resuscitation/bradycardia/cardiostimulationscreen": {
    title: "Transcutaneous cardiac pacing",
    keywords: [
      "external pacing",
      "non-invasive pacing",
      "bradycardia",
      "pacemaker",
      "defibrillator",
    ],
  },
  "/algorithms/adult-resuscitation/bradycardia/alternative-medications": {
    title: "Alternative medicines for bradycardia",
    keywords: [
      "bradycardia",
      "atropine",
      "isoprenaline",
      "adrenaline",
      "aminophylline",
      "glucagon",
      "medicines",
    ],
  },
  "/algorithms/epals": {
    title: "Paediatric resuscitation",
    keywords: ["child", "children", "paediatrics", "EPALS", "CPR"],
  },
  "/algorithms/epals/pals/step1": {
    title: "PALS",
    keywords: [
      "paediatric advanced life support",
      "pediatric advanced life support",
      "cardiac arrest",
      "defibrillation",
      "adrenaline",
      "CPR",
    ],
  },
  "/algorithms/epals/pbls/step1": {
    title: "PBLS",
    keywords: [
      "paediatric basic life support",
      "pediatric basic life support",
      "five initial breaths",
      "AED",
      "CPR",
    ],
  },
  "/algorithms/epals/fbao/step1": {
    title: "FBAO",
    keywords: [
      "foreign body airway obstruction",
      "choking",
      "cough",
      "back blows",
      "child",
    ],
  },
  "/algorithms/epals/pals/roscpals": {
    title: "Paediatric post-resuscitation care",
    keywords: [
      "ROSC",
      "return of spontaneous circulation",
      "post-resuscitation care",
      "child",
      "oxygenation",
      "ventilation",
    ],
  },
  "/algorithms/epals/pals/termination": {
    title: "Termination of paediatric resuscitation",
    keywords: ["termination of CPR", "ethics", "team decision", "child"],
  },
  "/algorithms/newborn/step1": {
    title: "Newborn resuscitation",
    keywords: [
      "NLS",
      "newborn life support",
      "newborn",
      "birth",
      "ventilation",
      "umbilical cord",
    ],
  },
  "/algorithms/special": {
    title: "Special circumstances",
    keywords: [
      "reversible causes",
      "special setting",
      "special patient groups",
      "modified ALS",
    ],
  },
  "/algorithms/special/anafylaxia/step1": {
    title: "Anaphylaxis",
    keywords: [
      "allergy",
      "anaphylactic shock",
      "adrenaline",
      "swelling",
      "urticaria",
      "bronchospasm",
      "hypotension",
    ],
  },
  "/algorithms/special/anafylaxia/refractory": {
    title: "Refractory anaphylaxis",
    keywords: [
      "severe allergy",
      "anaphylactic shock",
      "two doses of adrenaline",
      "adrenaline infusion",
      "unresponsive",
    ],
  },
  "/algorithms/special/anafylaxia/cardiac-arrest": {
    title: "Cardiac arrest in anaphylaxis",
    keywords: ["anaphylaxis", "allergy", "anaphylactic shock", "ALS", "CPR"],
  },
  "/algorithms/special/anafylaxia/aftercare": {
    title: "Care after anaphylaxis",
    keywords: [
      "anaphylaxis",
      "clinical improvement",
      "monitoring",
      "biphasic reaction",
      "aftercare",
    ],
  },
  "/algorithms/special/kalium/intro": {
    title: "Potassium disorders",
    keywords: [
      "potassium",
      "K+",
      "electrolytes",
      "hyperkalaemia",
      "hypokalaemia",
      "arrhythmia",
      "ECG",
    ],
  },
  "/algorithms/special/kalium/hyper/step1": {
    title: "Hyperkalaemia",
    keywords: [
      "high potassium",
      "calcium",
      "insulin",
      "glucose",
      "dialysis",
      "ECG",
    ],
  },
  "/algorithms/special/kalium/hypo/step1": {
    title: "Hypokalaemia",
    keywords: [
      "low potassium",
      "magnesium",
      "muscle weakness",
      "arrhythmia",
      "ECG",
    ],
  },
  "/algorithms/special/hypertermia/intro": {
    title: "Hyperthermia",
    keywords: [
      "overheating",
      "high temperature",
      "core temperature",
      "heat stroke",
      "malignant hyperthermia",
      "toxins",
      "cooling",
    ],
  },
  "/algorithms/special/hypertermia/regular/step1": {
    title: "Severe hyperthermia",
    keywords: [
      "heat stroke",
      "overheating",
      "thermoregulatory failure",
      "core temperature",
      "active cooling",
    ],
  },
  "/algorithms/special/hypertermia/maligna/step1": {
    title: "Malignant hyperthermia",
    keywords: [
      "anaesthetics",
      "succinylcholine",
      "dantrolene",
      "hypermetabolic state",
      "high temperature",
      "cooling",
    ],
  },
  "/algorithms/special/hypertermia/toxic/step1": {
    title: "Toxin-induced hyperthermia",
    keywords: [
      "poisoning",
      "sympathomimetics",
      "MDMA",
      "ecstasy",
      "agitation",
      "seizures",
      "cooling",
    ],
  },
  "/algorithms/special/hypotermia/intro": {
    title: "Hypothermia",
    keywords: [
      "low temperature",
      "core temperature",
      "rewarming",
      "avalanche",
      "ECPR",
      "ECLS",
    ],
  },
  "/algorithms/special/hypotermia/regular/step1": {
    title: "Accidental hypothermia",
    keywords: [
      "low temperature",
      "core temperature",
      "prolonged assessment",
      "controlled rewarming",
      "ECPR",
      "ECLS",
    ],
  },
  "/algorithms/special/hypotermia/lavina/step1": {
    title: "Avalanche rescue",
    keywords: [
      "avalanche",
      "burial",
      "hypothermia",
      "core temperature",
      "AvaLife",
      "airway",
    ],
  },
  "/algorithms/special/hypotermia/lavina/avalife": {
    title: "AvaLife",
    keywords: [
      "avalanche",
      "buried patient",
      "triage",
      "first aid",
      "avalanche rescue",
    ],
  },
  "/algorithms/special/hypotermia/hope-score": {
    title: "HOPE score",
    keywords: [
      "Hypothermia Outcome Prediction",
      "hypothermia",
      "ECLS",
      "ECPR",
      "extracorporeal rewarming",
      "prognosis",
      "calculator",
    ],
  },
  "/algorithms/special/embolia/intro": {
    title: "Pulmonary embolism",
    keywords: [
      "PE",
      "embolism",
      "thrombosis",
      "dyspnoea",
      "right ventricle",
      "haemodynamic instability",
      "anticoagulation",
      "fibrinolysis",
    ],
  },
  "/algorithms/special/embolia/PE/step1": {
    title: "Pulmonary embolism with circulation",
    keywords: [
      "PE",
      "sudden dyspnoea",
      "haemodynamic instability",
      "ECG",
      "echocardiography",
      "anticoagulation",
      "thrombolysis",
    ],
  },
  "/algorithms/special/embolia/PEresuscitacia/step1": {
    title: "Cardiac arrest due to pulmonary embolism",
    keywords: [
      "PE",
      "CPR",
      "fibrinolysis",
      "thrombolysis",
      "embolectomy",
      "thrombectomy",
      "ECPR",
      "ECLS",
    ],
  },
  "/algorithms/special/koronarnatromboza/step1": {
    title: "Coronary thrombosis",
    keywords: [
      "ACS",
      "acute coronary syndrome",
      "myocardial infarction",
      "STEMI",
      "NSTEMI",
      "PCI",
      "coronary occlusion",
      "chest pain",
    ],
  },
  "/algorithms/special/koronarnatromboza/st-elevation": {
    title: "Coronary thrombosis with ST elevation",
    keywords: [
      "STEMI",
      "myocardial infarction",
      "ST elevation",
      "ACS",
      "PCI",
      "catheterisation",
      "reperfusion",
    ],
  },
  "/algorithms/special/koronarnatromboza/no-st-elevation": {
    title: "Coronary thrombosis without ST elevation",
    keywords: [
      "NSTEMI",
      "NSTE-ACS",
      "myocardial infarction",
      "ACS",
      "without ST elevation",
    ],
  },
  "/algorithms/special/koronarnatromboza/ongoing-cpr": {
    title: "Coronary thrombosis during CPR",
    keywords: [
      "ongoing CPR",
      "cardiac arrest",
      "PCI during CPR",
      "ECPR",
      "coronary occlusion",
    ],
  },
  "/algorithms/special/toxic/step1": {
    title: "Toxic agents",
    keywords: [
      "intoxication",
      "poisoning",
      "toxin",
      "overdose",
      "antidote",
      "decontamination",
    ],
  },
  "/algorithms/special/trauma/step1": {
    title: "Trauma",
    keywords: [
      "traumatic cardiac arrest",
      "bleeding",
      "hypovolaemia",
      "tension pneumothorax",
      "tamponade",
      "TCA",
      "injury",
    ],
  },
  "/algorithms/special/pregnet/step1": {
    title: "Pregnancy",
    keywords: [
      "pregnant patient",
      "maternal cardiac arrest",
      "uterine displacement",
      "hysterotomy",
      "perimortem caesarean section",
      "obstetrician",
      "neonatologist",
    ],
  },
  "/algorithms/special/astma-chochp/step1": {
    title: "Asthma and COPD",
    keywords: [
      "asthma",
      "COPD",
      "bronchospasm",
      "obstruction",
      "hypoxia",
      "tension pneumothorax",
      "status asthmaticus",
    ],
  },
  "/algorithms/special/hemodialyza/step1": {
    title: "Haemodialysis",
    keywords: [
      "dialysis",
      "haemodialysis patient",
      "arteriovenous fistula",
      "AV fistula",
      "hyperkalaemia",
      "cardiac arrest during dialysis",
    ],
  },
  "/algorithms/special/obezita/step1": {
    title: "Obesity",
    keywords: [
      "obese patient",
      "overweight",
      "BMI",
      "resuscitation in obesity",
      "defibrillation",
      "CPR",
    ],
  },
  "/algorithms/special/pectus-excavatum/step1": {
    title: "Pectus excavatum",
    keywords: [
      "sunken chest",
      "chest deformity",
      "Nuss procedure",
      "chest compressions",
      "anteroposterior pads",
      "ECPR",
    ],
  },
  "/algorithms/special/katetrizacne-pracovisko/step1": {
    title: "Catheterisation laboratory",
    keywords: [
      "cath lab",
      "coronary intervention",
      "PCI",
      "angiography",
      "three rapid shocks",
      "cardiac arrest during PCI",
    ],
  },
  "/algorithms/special/topenie/step1": {
    title: "Drowning",
    keywords: [
      "submersion",
      "water",
      "asphyxia",
      "hypoxia",
      "five initial breaths",
      "water rescue",
      "hypothermia",
    ],
  },
  "/algorithms/special/operacna-sala/step1": {
    title: "Operating room",
    keywords: [
      "perioperative cardiac arrest",
      "surgery",
      "anaesthesia",
      "ETCO2",
      "ultrasound",
      "surgical team",
    ],
  },
  "/algorithms/special/lokalne-anestetika/step1": {
    title: "Local anaesthetic systemic toxicity",
    keywords: [
      "LAST",
      "local anaesthetic",
      "regional anaesthesia",
      "lipid emulsion",
      "Intralipid",
      "seizures",
      "arrhythmia",
    ],
  },
  "/algorithms/special/kardiochirurgia/step1": {
    title: "Cardiac arrest following cardiac surgery",
    keywords: [
      "after cardiac surgery",
      "sternotomy",
      "re-sternotomy",
      "three rapid shocks",
      "arterial waveform",
    ],
  },
  "/algorithms/special/lvad/step1": {
    title: "Patient with an LVAD",
    keywords: [
      "left ventricular assist device",
      "left ventricular support",
      "heart pump",
      "mechanical circulatory support",
      "no pulse",
      "unconscious patient",
    ],
  },
  "/algorithms/special/sport/step1": {
    title: "Cardiac arrest in sports",
    keywords: [
      "sport",
      "athlete",
      "field of play",
      "stadium",
      "AED",
      "sudden cardiac death",
      "commotio cordis",
    ],
  },
  "/algorithms/special/zzs-transport/step1": {
    title: "EMS and transport during CPR",
    keywords: [
      "emergency medical services",
      "ambulance",
      "prehospital resuscitation",
      "transport during resuscitation",
      "mechanical compressions",
      "CPR during transport",
    ],
  },
  "/algorithms/special/pocas-letu/step1": {
    title: "In-flight cardiac arrest",
    keywords: [
      "aircraft",
      "air travel",
      "AED on board",
      "flight diversion",
      "in-flight resuscitation",
    ],
  },
  "/algorithms/special/mikrogravitacia/step1": {
    title: "Resuscitation in microgravity",
    keywords: [
      "microgravity",
      "weightlessness",
      "space",
      "spacecraft",
      "astronaut",
      "mechanical compressions",
    ],
  },
  "/algorithms/special/vyletna-lod/step1": {
    title: "Resuscitation on a cruise ship",
    keywords: [
      "cruise ship",
      "voyage",
      "shipboard",
      "maritime medicine",
      "AED on board",
    ],
  },
};

const englishCategoryBySlovakCategory: Record<string, string> = {
  "Algoritmy ERC 2025": "ERC 2025 algorithms",
  "Resuscitácia dospelých": "Adult resuscitation",
  "Resuscitácia detí": "Paediatric resuscitation",
  "Špeciálne okolnosti": "Special circumstances",
};

export function getAlgorithmSearchItems(
  language: AppLanguage,
): readonly AlgorithmSearchItem[] {
  if (language === "sk") {
    return slovakAlgorithmSearchItems;
  }

  return slovakAlgorithmSearchItems.map((item) => {
    const englishText = englishTextByRoute[item.route.toString()];

    return {
      ...item,
      title: englishText?.title ?? item.title,
      category:
        englishCategoryBySlovakCategory[item.category] ?? item.category,
      keywords: englishText?.keywords ?? item.keywords,
    };
  });
}

const fallbackCategoryByLanguage = {
  sk: {
    adult: "Resuscitácia dospelých",
    paediatric: "Resuscitácia detí",
    newborn: "Resuscitácia novorodencov",
    special: "Špeciálne okolnosti",
  },
  en: {
    adult: "Adult resuscitation",
    paediatric: "Paediatric resuscitation",
    newborn: "Newborn resuscitation",
    special: "Special circumstances",
  },
};

export function getAlgorithmSearchCategory(
  route: string,
  language: AppLanguage,
) {
  const exactItem = getAlgorithmSearchItems(language).find(
    (item) => item.route === route,
  );

  if (exactItem) {
    return exactItem.category;
  }

  const categories = fallbackCategoryByLanguage[language];

  if (route.startsWith("/algorithms/adult-resuscitation/")) {
    return categories.adult;
  }

  if (route.startsWith("/algorithms/epals/")) {
    return categories.paediatric;
  }

  if (route.startsWith("/algorithms/newborn/")) {
    return categories.newborn;
  }

  if (route.startsWith("/algorithms/special/")) {
    return categories.special;
  }

  return "ERC 2025";
}
