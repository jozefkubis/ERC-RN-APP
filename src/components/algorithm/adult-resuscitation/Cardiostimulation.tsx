import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const indications = [
  "Nestabilná symptomatická bradykardia rezistentná na farmakologickú liečbu",
  "Dočasné preklenutie do zavedenia transvenóznej kardiostimulácie",
  "Nestabilná symptomatická bradykardia, keď transvenózna kardiostimulácia nie je okamžite dostupná",
];

const preparationSteps = [
  "Zhodnoťte pacienta podľa ABCDE, zabezpečte žilový prístup a liečte reverzibilné príčiny bradykardie",
  "Pacientovi pri vedomí vysvetlite výkon a pripravte primeranú analgéziu a podľa potreby sedáciu; neodkladajte však urgentnú stimuláciu",
  "Pripojte monitor-defibrilátor a zabezpečte spoľahlivé zobrazenie EKG rytmu",
  "Monitorujte krvný tlak, SpO2 a klinické známky orgánovej perfúzie",
  "Nalepte multifunkčné stimulačné/defibrilačné elektródy podľa odporúčania výrobcu, najčastejšie v predo-zadnej polohe",
  "Skontrolujte správne pripojenie terapeutického kábla a dostatočný kontakt elektród s kožou",
];

const pacingSteps = [
  "Zapnite monitor-defibrilátor a zvoľte režim transkutánnej kardiostimulácie",
  "Skontrolujte, či prístroj správne sníma vlastnú elektrickú aktivitu pacienta",
  "Ak prístroj umožňuje voľbu, použite demand režim. Pri nespoľahlivom snímaní zvážte fixed režim podľa situácie",
  "Nastavte stimulačnú frekvenciu, zvyčajne 60–80/min, podľa klinického stavu pacienta",
  "Začnite nízkou intenzitou prúdu a postupne zvyšujte výstup v mA, až kým po každom stimulačnom impulze nevznikne elektrický záchyt",
  "Po dosiahnutí elektrického záchytu bezodkladne potvrďte mechanický záchyt",
  "Mechanický záchyt overte palpáciou pulzu, meraním krvného tlaku, pletyzmografickou krivkou SpO2 alebo zlepšením klinických známok perfúzie",
  "Po určení prahu záchytu nastavte výstup približne 10 mA nad prah záchytu",
  "Priebežne kontrolujte elektrický aj mechanický záchyt a stav pacienta",
  "Pri strate záchytu skontrolujte polohu elektród, kontakt s kožou, káble a podľa potreby zvýšte stimulačný prúd",
];

const captureChecks = [
  "Elektrický záchyt: po každom stimulačnom impulze nasleduje široký QRS komplex, spravidla s následnou repolarizačnou vlnou",
  "Mechanický záchyt: každý stimulovaný QRS komplex je sprevádzaný pulzovou vlnou alebo merateľným krvným tlakom",
  "Svalové kontrakcie hrudníka ani samotný obraz QRS na monitore nepotvrdzujú účinnú perfúziu",
  "Pulz hodnotte súčasne s elektrickou aktivitou; dávajte pozor, aby ste si svalové zášklby nepomýlili s pulzom",
];

const safetyNotes = [
  "Transkutánna kardiostimulácia je bolestivá; pri pacientovi pri vedomí zabezpečte analgéziu a podľa stavu aj sedáciu",
  "Analgézia alebo sedácia nesmie oddialiť urgentnú stimuláciu u hemodynamicky nestabilného pacienta",
  "Transkutánna stimulácia je dočasné riešenie; pri pretrvávajúcej indikácii zabezpečte čo najskôr transvenóznu kardiostimuláciu",
  "Súčasne pokračujte v liečbe reverzibilných príčin bradykardie a v príprave na transport alebo definitívnu liečbu",
  "Pri diagnostikovanej asystólii dôkladne skontrolujte EKG na prítomnosť P vĺn, ktoré môžu predstavovať komorovú zástavu reagujúcu na stimuláciu",
];

export default function Cardiostimulation() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.stepHeader}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>Doplnok</Text>
          </View>
          <Text style={styles.stepTitle}>Transkutánna kardiostimulácia</Text>
          <Text style={styles.stepDescription}>
            Univerzálny postup pre externý defibrilátor/monitor s funkciou
            neinvazívnej stimulácie pri nestabilnej symptomatickej bradykardii.
          </Text>
        </View>

        <View style={styles.pacingPanel}>
          <View style={styles.panelTitleRow}>
            <View style={styles.panelIcon}>
              <Ionicons name="flash" size={22} color="#FFFFFF" />
            </View>
            <Text style={styles.panelTitle}>EXTERNÝ MONITOR</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIcon}>
                <Ionicons name="alert-circle" size={20} color="#075296" />
              </View>
              <Text style={styles.cardTitle}>Kedy ju zvážiť</Text>
            </View>
            <View style={styles.list}>
              {indications.map((item) => (
                <View key={item} style={styles.listItem}>
                  <View style={styles.dot} />
                  <Text style={styles.listText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIcon}>
                <Ionicons name="construct" size={20} color="#075296" />
              </View>
              <Text style={styles.cardTitle}>Príprava</Text>
            </View>
            <View style={styles.numberedList}>
              {preparationSteps.map((item, index) => (
                <View key={item} style={styles.numberedItem}>
                  <View style={styles.numberBadgeLight}>
                    <Text style={styles.numberTextLight}>{index + 1}</Text>
                  </View>
                  <Text style={styles.listText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIconPrimary}>
                <Ionicons name="pulse" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.cardTitle}>Postup stimulácie</Text>
            </View>
            <View style={styles.numberedList}>
              {pacingSteps.map((item, index) => (
                <View key={item} style={styles.numberedItem}>
                  <View style={styles.numberBadge}>
                    <Text style={styles.numberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.listText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIcon}>
                <Ionicons name="checkmark-circle" size={20} color="#075296" />
              </View>
              <Text style={styles.cardTitle}>Overenie záchytu</Text>
            </View>
            <View style={styles.list}>
              {captureChecks.map((item) => (
                <View key={item} style={styles.listItem}>
                  <View style={styles.dot} />
                  <Text style={styles.listText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.warningCard}>
            <View style={styles.cardHeader}>
              <View style={styles.warningIcon}>
                <Ionicons name="warning" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.warningTitle}>Pozor</Text>
            </View>
            <View style={styles.list}>
              {safetyNotes.map((item) => (
                <View key={item} style={styles.listItem}>
                  <View style={styles.warningDot} />
                  <Text style={styles.listText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* <InfoCard
          title="Zdroj"
          description="Medicínsky rámec: ERCSRR Odporúčania 2025, strana 39. Praktické kroky sú formulované univerzálne pre externý defibrilátor/monitor s funkciou stimulácie."
          iconName="document-text-outline"
        /> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 14,
    gap: 13,
  },
  stepHeader: {
    width: "100%",
    gap: 5,
    paddingTop: 6,
    paddingBottom: 4,
  },
  stepBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 11,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#E4EFFD",
  },
  stepBadgeText: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "800",
  },
  stepTitle: {
    color: "#10243C",
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 28,
  },
  stepDescription: {
    color: "#5C6574",
    fontSize: 12,
    lineHeight: 19,
  },
  pacingPanel: {
    width: "100%",
    gap: 12,
    padding: 16,
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
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
    backgroundColor: "#075296",
  },
  panelTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  card: {
    width: "100%",
    gap: 12,
    padding: 14,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 8,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
  },
  warningCard: {
    width: "100%",
    gap: 12,
    padding: 14,
    borderWidth: 2,
    borderColor: "#ED1C24",
    borderRadius: 8,
    borderCurve: "continuous",
    backgroundColor: "#FFF5F5",
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
    backgroundColor: "#E4EFFD",
  },
  cardIconPrimary: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "#075296",
  },
  warningIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "#ED1C24",
  },
  cardTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
  },
  warningTitle: {
    flex: 1,
    color: "#ED1C24",
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
    backgroundColor: "#075296",
  },
  warningDot: {
    width: 5,
    height: 5,
    marginTop: 6,
    borderRadius: 3,
    backgroundColor: "#ED1C24",
  },
  listText: {
    flex: 1,
    color: "#10243C",
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
    backgroundColor: "#075296",
  },
  numberBadgeLight: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 11,
    backgroundColor: "#E4EFFD",
  },
  numberText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
  },
  numberTextLight: {
    color: "#075296",
    fontSize: 10,
    fontWeight: "900",
  },
});
