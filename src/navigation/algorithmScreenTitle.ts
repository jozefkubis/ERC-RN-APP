const exactTitles: Record<string, string> = {
  "adult-resuscitation": "Resuscitácia dospelých",
  "adult-resuscitation/index": "Resuscitácia dospelých",
  "adult-resuscitation/als/4h4t": "4H / 4T",
  "adult-resuscitation/als/rosc": "ROSC",
  "adult-resuscitation/bradycardia/alternative-medications":
    "Alternatívne lieky",
  "adult-resuscitation/bradycardia/altmeds": "Alternatívne lieky",
  "adult-resuscitation/bradycardia/cardiostimulationscreen":
    "Kardiostimulácia",
  epals: "Resuscitácia dieťaťa",
  "epals/index": "Resuscitácia dieťaťa",
  "epals/pals/roscpals": "Poresuscitačná starostlivosť",
  "epals/pals/termination": "Ukončenie resuscitácie",
  special: "Špeciálne okolnosti",
  "special/index": "Špeciálne okolnosti",
  "special/anafylaxia/refractory": "Refraktérna anafylaxia",
  "special/anafylaxia/cardiac-arrest": "Anafylaxia – ZO",
  "special/kalium/intro": "Poruchy draslíka",
  "special/kalium/hyper/cardiac-arrest": "Hyperkaliémia – ZO",
  "special/hypertermia/regular/step6": "Hyponatriémia",
  "special/hypertermia/regular/step8": "Rehydratácia",
  "special/hypotermia/hope-score": "HOPE skóre",
  "special/hypotermia/lavina/step1": "Záchrana z lavíny",
  "special/hypotermia/lavina/avalife": "AvaLife",
  "special/embolia/PEresuscitacia/step1": "Pľúcna embólia – ZO",
  "special/koronarnatromboza/st-elevation":
    "Koronárna trombóza – STEMI",
  "special/koronarnatromboza/ongoing-cpr": "Koronárna trombóza – KPR",
};

const prefixTitles: readonly [prefix: string, title: string][] = [
  ["adult-resuscitation/als/", "Rozšírená resuscitácia"],
  ["adult-resuscitation/bls/", "Základná resuscitácia"],
  ["adult-resuscitation/tachycardia/", "Tachykardia"],
  ["adult-resuscitation/bradycardia/", "Bradykardia"],
  ["epals/pals/", "Rozšírená resuscitácia"],
  ["epals/pbls/", "Základná resuscitácia"],
  ["epals/fbao/", "FBAO"],
  ["newborn/", "Resuscitácia novorodencov"],
  ["special/anafylaxia/", "Anafylaxia"],
  ["special/kalium/hyper/", "Hyperkaliémia"],
  ["special/kalium/hypo/", "Hypokaliémia"],
  ["special/hypertermia/maligna/", "Maligná hypertermia"],
  ["special/hypertermia/toxic/", "Hypertermia spôsobená toxínmi"],
  ["special/hypertermia/", "Hypertermia"],
  ["special/hypotermia/regular/step1", "Hypotermia"],
  ["special/hypotermia/regular/", "Náhodná hypotermia"],
  ["special/hypotermia/", "Hypotermia"],
  ["special/embolia/", "Pľúcna embólia"],
  ["special/koronarnatromboza/", "Koronárna trombóza"],
  ["special/toxic/", "Toxické látky"],
  ["special/trauma/", "Trauma"],
  ["special/astma-chochp/", "Astma a CHOCHP"],
  ["special/hemodialyza/", "Hemodialýza"],
  ["special/obezita/", "Obezita"],
  ["special/pectus-excavatum/", "Pectus excavatum"],
  ["special/pregnet/", "Tehotenstvo"],
  ["special/katetrizacne-pracovisko/", "Katetrizačné pracovisko"],
  ["special/topenie/", "Topenie"],
  ["special/operacna-sala/", "Operačná sála"],
  ["special/lokalne-anestetika/", "Toxicita lokálnych anestetík"],
  ["special/kardiochirurgia/", "Po kardiochirurgii"],
  ["special/lvad/", "Pacient s LVAD"],
  ["special/sport/", "Šport"],
  ["special/zzs-transport/", "ZZS a transport"],
  ["special/pocas-letu/", "Počas letu"],
  ["special/mikrogravitacia/", "Mikrogravitácia"],
  ["special/vyletna-lod/", "Výletná loď"],
];

export function getAlgorithmScreenTitle(routeName: string) {
  const algorithmRoute = routeName.replace(/^algorithms\//, "");
  const exactTitle = exactTitles[algorithmRoute];

  if (exactTitle) {
    return exactTitle;
  }

  return (
    prefixTitles.find(([prefix]) => algorithmRoute.startsWith(prefix))?.[1] ??
    "ERC 2025"
  );
}
