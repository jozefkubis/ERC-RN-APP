import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Kardioverzia",
    title: "Synchronizovaná kardioverzia",
    description:
      "Použite synchronizovaný režim defibrilátora a priebežne kontrolujte klinický stav pacienta.",
    cardTitle: "Synchronizovaná kardioverzia",
    sedation: "Sedácia / anestézia u pacienta pri vedomí",
    energyLevels: [
      {
        rhythm: "Pravidelná úzkokomplexová tachykardia / flutter",
        energy: "70 - 120 J bifázicky",
      },
      {
        rhythm: "Pravidelná širokokomplexová tachykardia",
        energy: "120 - 150 J bifázicky",
      },
      {
        rhythm: "Fibrilácia predsiení",
        energy: "120 - 150 J bifázicky",
      },
      {
        rhythm: "Ak je výboj neúspešný",
        energy: "Eskalujte energiu podľa prístroja a lokálneho protokolu",
      },
    ],
    infoTitle: "Pripomienka",
    infoDescription:
      "Ak synchronizácia nie je možná pri polymorfnej alebo veľmi nepravidelnej tachykardii, postupujte podľa lokálneho protokolu pre defibriláciu.",
  },
  en: {
    badge: "Cardioversion",
    title: "Synchronised cardioversion",
    description:
      "Use the synchronised mode on the defibrillator and reassess the patient's clinical condition continuously.",
    cardTitle: "Synchronised cardioversion",
    sedation: "Sedation / anaesthesia if the patient is conscious",
    energyLevels: [
      {
        rhythm: "Regular narrow-complex tachycardia / flutter",
        energy: "70 - 120 J biphasic",
      },
      {
        rhythm: "Regular broad-complex tachycardia",
        energy: "120 - 150 J biphasic",
      },
      {
        rhythm: "Atrial fibrillation",
        energy: "120 - 150 J biphasic",
      },
      {
        rhythm: "If the shock is unsuccessful",
        energy:
          "Escalate energy according to the device and local protocol",
      },
    ],
    infoTitle: "Reminder",
    infoDescription:
      "If synchronisation is not possible in polymorphic or very irregular tachycardia, follow the local protocol for defibrillation.",
  },
};

const cardColors = {
  light: {
    panelBackground: "#FFFFFF",
    panelBorder: "#075296",
    primary: "#075296",
    text: "#10243C",
    softBackground: "#F5FAFF",
    itemBackground: "#F8FBFF",
    itemBorder: "#D2D9E6",
  },
  dark: {
    panelBackground: "#101B2B",
    panelBorder: "#2F7FBE",
    primary: "#B9DDFF",
    text: "#F5F8FC",
    softBackground: "#102A3F",
    itemBackground: "#0D1725",
    itemBorder: "#31435A",
  },
};

export default function SyncCardioversion() {
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
          styles.cardioversionPanel,
          {
            borderColor: colors.panelBorder,
            backgroundColor: colors.panelBackground,
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <View style={[styles.cardIcon, { backgroundColor: colors.primary }]}>
            <Ionicons name="flash" size={24} color="#FFFFFF" />
          </View>
          <Text style={[styles.cardTitle, { color: colors.primary }]}>
            {text.cardTitle}
          </Text>
        </View>

        <View
          style={[
            styles.sedationCard,
            { backgroundColor: colors.softBackground },
          ]}
        >
          <Ionicons name="medkit" size={22} color={colors.primary} />
          <Text style={[styles.sedationText, { color: colors.text }]}>
            {text.sedation}
          </Text>
        </View>

        <View style={styles.energyList}>
          {text.energyLevels.map((item) => (
            <View
              key={item.rhythm}
              style={[
                styles.energyItem,
                {
                  borderColor: colors.itemBorder,
                  backgroundColor: colors.itemBackground,
                },
              ]}
            >
              <Text style={[styles.energyRhythm, { color: colors.text }]}>
                {item.rhythm}
              </Text>
              <Text style={[styles.energyValue, { color: colors.primary }]}>
                {item.energy}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="information-circle-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  cardioversionPanel: {
    width: "100%",
    gap: 16,
    padding: 18,
    borderWidth: 2,
    borderRadius: 28,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  cardTitle: {
    flex: 1,
    fontSize: 19,
    fontWeight: "900",
    lineHeight: 25,
  },
  sedationCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  sedationText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },
  energyList: {
    gap: 10,
  },
  energyItem: {
    gap: 5,
    padding: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  energyRhythm: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },
  energyValue: {
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 20,
  },
});
