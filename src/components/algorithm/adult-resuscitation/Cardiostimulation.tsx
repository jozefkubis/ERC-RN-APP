import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Doplnok",
    title: "Transkutánna kardiostimulácia",
    description:
      "Univerzálny postup pre externý defibrilátor/monitor s funkciou neinvazívnej stimulácie pri nestabilnej symptomatickej bradykardii.",
    panelTitle: "EXTERNÝ MONITOR",
    indicationsTitle: "Kedy ju zvážiť",
    indications: [
      "Nestabilná symptomatická bradykardia rezistentná na farmakologickú liečbu",
      "Dočasné preklenutie do zavedenia transvenóznej kardiostimulácie",
      "Nestabilná symptomatická bradykardia, keď transvenózna kardiostimulácia nie je okamžite dostupná",
    ],
    preparationTitle: "Príprava",
    preparationSteps: [
      "Zhodnoťte pacienta podľa ABCDE, zabezpečte žilový prístup a liečte reverzibilné príčiny bradykardie",
      "Pacientovi pri vedomí vysvetlite výkon a pripravte primeranú analgéziu a podľa potreby sedáciu; neodkladajte však urgentnú stimuláciu",
      "Pripojte monitor-defibrilátor a zabezpečte spoľahlivé zobrazenie EKG rytmu",
      "Monitorujte krvný tlak, SpO2 a klinické známky orgánovej perfúzie",
      "Nalepte multifunkčné stimulačné/defibrilačné elektródy podľa odporúčania výrobcu, najčastejšie v predo-zadnej polohe",
      "Skontrolujte správne pripojenie terapeutického kábla a dostatočný kontakt elektród s kožou",
    ],
    pacingTitle: "Postup stimulácie",
    pacingSteps: [
      "Zapnite monitor-defibrilátor a zvoľte režim transkutánnej kardiostimulácie",
      "Skontrolujte, či prístroj správne sníma vlastnú elektrickú aktivitu pacienta",
      "Ak prístroj umožňuje voľbu, použite demand režim. Pri nespoľahlivom snímaní zvážte fixed režim podľa situácie",
      "Nastavte stimulačnú frekvenciu, zvyčajne 60-80/min, podľa klinického stavu pacienta",
      "Začnite nízkou intenzitou prúdu a postupne zvyšujte výstup v mA, až kým po každom stimulačnom impulze nevznikne elektrický záchyt",
      "Po dosiahnutí elektrického záchytu bezodkladne potvrďte mechanický záchyt",
      "Mechanický záchyt overte palpáciou pulzu, meraním krvného tlaku, pletyzmografickou krivkou SpO2 alebo zlepšením klinických známok perfúzie",
      "Po určení prahu záchytu nastavte výstup približne 10 mA nad prah záchytu",
      "Priebežne kontrolujte elektrický aj mechanický záchyt a stav pacienta",
      "Pri strate záchytu skontrolujte polohu elektród, kontakt s kožou, káble a podľa potreby zvýšte stimulačný prúd",
    ],
    captureTitle: "Overenie záchytu",
    captureChecks: [
      "Elektrický záchyt: po každom stimulačnom impulze nasleduje široký QRS komplex, spravidla s následnou repolarizačnou vlnou",
      "Mechanický záchyt: každý stimulovaný QRS komplex je sprevádzaný pulzovou vlnou alebo merateľným krvným tlakom",
      "Svalové kontrakcie hrudníka ani samotný obraz QRS na monitore nepotvrdzujú účinnú perfúziu",
      "Pulz hodnotte súčasne s elektrickou aktivitou; dávajte pozor, aby ste si svalové zášklby nepomýlili s pulzom",
    ],
    warningTitle: "Pozor",
    safetyNotes: [
      "Transkutánna kardiostimulácia je bolestivá; pri pacientovi pri vedomí zabezpečte analgéziu a podľa stavu aj sedáciu",
      "Analgézia alebo sedácia nesmie oddialiť urgentnú stimuláciu u hemodynamicky nestabilného pacienta",
      "Transkutánna stimulácia je dočasné riešenie; pri pretrvávajúcej indikácii zabezpečte čo najskôr transvenóznu kardiostimuláciu",
      "Súčasne pokračujte v liečbe reverzibilných príčin bradykardie a v príprave na transport alebo definitívnu liečbu",
      "Pri diagnostikovanej asystólii dôkladne skontrolujte EKG na prítomnosť P vĺn, ktoré môžu predstavovať komorovú zástavu reagujúcu na stimuláciu",
    ],
    infoTitle: "Zdroj",
    infoDescription:
      "Medicínsky rámec: ERC odporúčania 2025. Praktické kroky sú formulované univerzálne pre externý defibrilátor/monitor s funkciou stimulácie.",
  },
  en: {
    badge: "Supplement",
    title: "Transcutaneous pacing",
    description:
      "Universal approach for an external defibrillator/monitor with non-invasive pacing in unstable symptomatic bradycardia.",
    panelTitle: "EXTERNAL MONITOR",
    indicationsTitle: "When to consider it",
    indications: [
      "Unstable symptomatic bradycardia resistant to pharmacological treatment",
      "Temporary bridge until transvenous pacing is established",
      "Unstable symptomatic bradycardia when transvenous pacing is not immediately available",
    ],
    preparationTitle: "Preparation",
    preparationSteps: [
      "Assess the patient using ABCDE, secure venous access and treat reversible causes of bradycardia",
      "If the patient is conscious, explain the procedure and prepare appropriate analgesia and sedation as needed; do not delay urgent pacing",
      "Connect the monitor-defibrillator and ensure reliable ECG rhythm display",
      "Monitor blood pressure, SpO2 and clinical signs of organ perfusion",
      "Apply multifunction pacing/defibrillation pads according to the manufacturer's recommendation, most often in an anterior-posterior position",
      "Check correct therapy cable connection and adequate pad contact with the skin",
    ],
    pacingTitle: "Pacing procedure",
    pacingSteps: [
      "Turn on the monitor-defibrillator and select transcutaneous pacing mode",
      "Check that the device correctly senses the patient's intrinsic electrical activity",
      "If available, use demand mode. If sensing is unreliable, consider fixed mode according to the situation",
      "Set the pacing rate, usually 60-80/min, according to the patient's clinical condition",
      "Start with a low current and gradually increase the output in mA until electrical capture occurs after each pacing impulse",
      "After electrical capture is achieved, immediately confirm mechanical capture",
      "Confirm mechanical capture by pulse palpation, blood pressure measurement, SpO2 plethysmography or improved clinical signs of perfusion",
      "After determining the capture threshold, set the output approximately 10 mA above the capture threshold",
      "Continuously check both electrical and mechanical capture and the patient's condition",
      "If capture is lost, check pad position, skin contact, cables and increase pacing current if needed",
    ],
    captureTitle: "Confirming capture",
    captureChecks: [
      "Electrical capture: each pacing impulse is followed by a broad QRS complex, usually with a subsequent repolarisation wave",
      "Mechanical capture: each paced QRS complex is accompanied by a pulse wave or measurable blood pressure",
      "Chest muscle contractions or the QRS display on the monitor alone do not confirm effective perfusion",
      "Assess the pulse together with electrical activity; avoid mistaking muscle twitches for a pulse",
    ],
    warningTitle: "Caution",
    safetyNotes: [
      "Transcutaneous pacing is painful; if the patient is conscious, provide analgesia and sedation according to condition",
      "Analgesia or sedation must not delay urgent pacing in a haemodynamically unstable patient",
      "Transcutaneous pacing is a temporary measure; if the indication persists, arrange transvenous pacing as soon as possible",
      "Continue treating reversible causes of bradycardia and prepare transport or definitive treatment at the same time",
      "In diagnosed asystole, carefully check the ECG for P waves, which may represent ventricular standstill responsive to pacing",
    ],
    infoTitle: "Source",
    infoDescription:
      "Medical framework: ERC Guidelines 2025. Practical steps are written universally for an external defibrillator/monitor with pacing capability.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#D7EDFD",
    panelBorder: "#8EC3F0",
    cardBackground: "#FFFFFF",
    cardBorder: "#075296",
    warningBackground: "#FFF5F5",
    warningBorder: "#ED1C24",
    iconBackground: "#E4EFFD",
    primary: "#075296",
    danger: "#ED1C24",
    text: "#10243C",
    numberBackground: "#075296",
    numberLightBackground: "#E4EFFD",
  },
  dark: {
    panelBackground: "#102A3F",
    panelBorder: "#2F7FBE",
    cardBackground: "#101B2B",
    cardBorder: "#2F7FBE",
    warningBackground: "#341719",
    warningBorder: "#783136",
    iconBackground: "#164C80",
    primary: "#B9DDFF",
    danger: "#F17C83",
    text: "#F5F8FC",
    numberBackground: "#164C80",
    numberLightBackground: "#16263B",
  },
};

export default function Cardiostimulation() {
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = cardColors[themeMode];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
      />

      <View
        style={[
          styles.pacingPanel,
          {
            borderColor: colors.panelBorder,
            backgroundColor: colors.panelBackground,
          },
        ]}
      >
        <View style={styles.panelTitleRow}>
          <View
            style={[styles.panelIcon, { backgroundColor: colors.numberBackground }]}
          >
            <Ionicons name="flash" size={22} color="#FFFFFF" />
          </View>
          <Text style={[styles.panelTitle, { color: colors.primary }]}>
            {text.panelTitle}
          </Text>
        </View>

        <View
          style={[
            styles.card,
            { borderColor: colors.cardBorder, backgroundColor: colors.cardBackground },
          ]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, { backgroundColor: colors.iconBackground }]}>
              <Ionicons name="alert-circle" size={20} color={colors.primary} />
            </View>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              {text.indicationsTitle}
            </Text>
          </View>
          <View style={styles.list}>
            {text.indications.map((item) => (
              <View key={item} style={styles.listItem}>
                <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                <Text style={[styles.listText, { color: colors.text }]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View
          style={[
            styles.card,
            { borderColor: colors.cardBorder, backgroundColor: colors.cardBackground },
          ]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, { backgroundColor: colors.iconBackground }]}>
              <Ionicons name="construct" size={20} color={colors.primary} />
            </View>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              {text.preparationTitle}
            </Text>
          </View>
          <View style={styles.numberedList}>
            {text.preparationSteps.map((item, index) => (
              <View key={item} style={styles.numberedItem}>
                <View
                  style={[
                    styles.numberBadgeLight,
                    {
                      borderColor: colors.primary,
                      backgroundColor: colors.numberLightBackground,
                    },
                  ]}
                >
                  <Text style={[styles.numberTextLight, { color: colors.primary }]}>
                    {index + 1}
                  </Text>
                </View>
                <Text style={[styles.listText, { color: colors.text }]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View
          style={[
            styles.card,
            { borderColor: colors.cardBorder, backgroundColor: colors.cardBackground },
          ]}
        >
          <View style={styles.cardHeader}>
            <View
              style={[
                styles.cardIconPrimary,
                { backgroundColor: colors.numberBackground },
              ]}
            >
              <Ionicons name="pulse" size={20} color="#FFFFFF" />
            </View>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              {text.pacingTitle}
            </Text>
          </View>
          <View style={styles.numberedList}>
            {text.pacingSteps.map((item, index) => (
              <View key={item} style={styles.numberedItem}>
                <View
                  style={[
                    styles.numberBadge,
                    { backgroundColor: colors.numberBackground },
                  ]}
                >
                  <Text style={styles.numberText}>{index + 1}</Text>
                </View>
                <Text style={[styles.listText, { color: colors.text }]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View
          style={[
            styles.card,
            { borderColor: colors.cardBorder, backgroundColor: colors.cardBackground },
          ]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, { backgroundColor: colors.iconBackground }]}>
              <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
            </View>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              {text.captureTitle}
            </Text>
          </View>
          <View style={styles.list}>
            {text.captureChecks.map((item) => (
              <View key={item} style={styles.listItem}>
                <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                <Text style={[styles.listText, { color: colors.text }]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View
          style={[
            styles.warningCard,
            {
              borderColor: colors.warningBorder,
              backgroundColor: colors.warningBackground,
            },
          ]}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.warningIcon, { backgroundColor: colors.warningBorder }]}>
              <Ionicons name="warning" size={20} color="#FFFFFF" />
            </View>
            <Text style={[styles.warningTitle, { color: colors.danger }]}>
              {text.warningTitle}
            </Text>
          </View>
          <View style={styles.list}>
            {text.safetyNotes.map((item) => (
              <View key={item} style={styles.listItem}>
                <View style={[styles.warningDot, { backgroundColor: colors.danger }]} />
                <Text style={[styles.listText, { color: colors.text }]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="document-text-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  pacingPanel: {
    width: "100%",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  panelTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  panelIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  card: {
    width: "100%",
    gap: 12,
    padding: 14,
    borderWidth: 2,
    borderRadius: 8,
    borderCurve: "continuous",
  },
  warningCard: {
    width: "100%",
    gap: 12,
    padding: 14,
    borderWidth: 2,
    borderRadius: 8,
    borderCurve: "continuous",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  cardIconPrimary: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  warningIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  cardTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
  },
  warningTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
  },
  list: {
    gap: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  dot: {
    width: 5,
    height: 5,
    marginTop: 6,
    borderRadius: 3,
  },
  warningDot: {
    width: 5,
    height: 5,
    marginTop: 6,
    borderRadius: 3,
  },
  listText: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
  },
  numberedList: {
    gap: 9,
  },
  numberedItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  numberBadge: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  numberBadgeLight: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 11,
  },
  numberText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
  },
  numberTextLight: {
    fontSize: 10,
    fontWeight: "900",
  },
});
