import { useSettings } from "@/src/context/settings-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import FlowConnector from "../../ui/FlowConnector";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 5",
    title: "Lieky, tekutiny a príčiny",
    description:
      "Pri pretrvávajúcej srdcovej frekvencii pod 60/min pokračujte v resuscitácii, zaistite prístup a hľadajte reverzibilné príčiny.",
    reassessmentText: "Prehodnoťte každých 30 sekúnd",
    conditionText: "Ak srdcová frekvencia zostáva < 60/min:",
    escalationActions: [
      "Cievny prístup (umbilikálny katéter / IO)",
      "Zvážte lieky a tekutiny",
      "Zvážte ďalšie faktory",
    ],
    medicationTitle: "Lieky a tekutiny",
    medicationActions: [
      "Adrenalín: 10-30 mikrogramov/kg každé 4 minúty",
      "Intravaskulárny objem (krv / tekutiny): 10 ml/kg",
      "Glukóza 10 % (ak je hladina glukózy v krvi nízka): 2 ml/kg",
    ],
    causesTitle: "Faktory na zváženie",
    reversibleCauses: [
      "Pneumotorax",
      "Hypovolémia",
      "Vrodená abnormalita",
      "Porucha vybavenia",
    ],
    finalTitle: "Informujte rodičov",
    finalDescription: "Debriefing tímu",
  },
  en: {
    badge: "Step 5",
    title: "Medicines, fluids, and causes",
    description:
      "If the heart rate remains below 60/min, continue resuscitation, secure access, and look for reversible causes.",
    reassessmentText: "Reassess every 30 seconds",
    conditionText: "If the heart rate remains < 60/min:",
    escalationActions: [
      "Vascular access (umbilical catheter / IO)",
      "Consider medicines and fluids",
      "Consider other factors",
    ],
    medicationTitle: "Medicines and fluids",
    medicationActions: [
      "Adrenaline: 10-30 micrograms/kg every 4 minutes",
      "Intravascular volume (blood / fluids): 10 ml/kg",
      "Glucose 10 % (if blood glucose is low): 2 ml/kg",
    ],
    causesTitle: "Factors to consider",
    reversibleCauses: [
      "Pneumothorax",
      "Hypovolaemia",
      "Congenital abnormality",
      "Equipment failure",
    ],
    finalTitle: "Inform parents",
    finalDescription: "Team debriefing",
  },
};

const cardColors = {
  light: {
    mainBackground: "#FFFFFF",
    mainBorder: "#0877D1",
    dangerIcon: "#ED1C24",
    primaryText: "#075296",
    bodyText: "#10243C",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    divider: "#E1E6ED",
    iconBackground: "#E4EFFD",
    icon: "#075296",
    bullet: "#075296",
    finalBackground: "#D7EDFD",
    finalBorder: "#075296",
    finalIconBackground: "#FFFFFF",
  },
  dark: {
    mainBackground: "#101B2B",
    mainBorder: "#2F7FBE",
    dangerIcon: "#B7151B",
    primaryText: "#B9DDFF",
    bodyText: "#F5F8FC",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    divider: "#31435A",
    iconBackground: "#17375B",
    icon: "#8BC4FA",
    bullet: "#8BC4FA",
    finalBackground: "#102A3F",
    finalBorder: "#2F7FBE",
    finalIconBackground: "#101B2B",
  },
};

type BulletListProps = {
  items: string[];
  bulletColor: string;
  textColor: string;
};

function BulletList({ items, bulletColor, textColor }: BulletListProps) {
  return (
    <View style={styles.list}>
      {items.map((item) => (
        <View key={item} style={styles.row}>
          <View style={[styles.bullet, { backgroundColor: bulletColor }]} />
          <Text selectable style={[styles.rowText, { color: textColor }]}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default function Step5() {
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
          styles.reassessmentCard,
          {
            borderColor: colors.mainBorder,
            backgroundColor: colors.mainBackground,
          },
        ]}
      >
        <View
          style={[
            styles.reassessmentIcon,
            { backgroundColor: colors.dangerIcon },
          ]}
        >
          <MaterialCommunityIcons
            name="heart-pulse"
            size={29}
            color="#FFFFFF"
          />
        </View>
        <Text
          selectable
          style={[styles.reassessmentText, { color: colors.primaryText }]}
        >
          {text.reassessmentText}
        </Text>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.escalationCard,
          {
            borderColor: colors.mainBorder,
            backgroundColor: colors.mainBackground,
          },
        ]}
      >
        <Text selectable style={[styles.conditionText, { color: colors.bodyText }]}>
          {text.conditionText}
        </Text>
        <BulletList
          items={text.escalationActions}
          bulletColor={colors.bullet}
          textColor={colors.bodyText}
        />
      </View>

      <View style={styles.sideCards}>
        <View
          style={[
            styles.infoCard,
            {
              borderColor: colors.cardBorder,
              backgroundColor: colors.cardBackground,
            },
          ]}
        >
          <View style={[styles.infoHeader, { borderBottomColor: colors.divider }]}>
            <View
              style={[
                styles.infoIcon,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <MaterialCommunityIcons
                name="needle"
                size={22}
                color={colors.icon}
              />
            </View>
            <Text selectable style={[styles.infoTitle, { color: colors.primaryText }]}>
              {text.medicationTitle}
            </Text>
          </View>
          <BulletList
            items={text.medicationActions}
            bulletColor={colors.bullet}
            textColor={colors.bodyText}
          />
        </View>

        <View
          style={[
            styles.infoCard,
            {
              borderColor: colors.cardBorder,
              backgroundColor: colors.cardBackground,
            },
          ]}
        >
          <View style={[styles.infoHeader, { borderBottomColor: colors.divider }]}>
            <View
              style={[
                styles.infoIcon,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Ionicons name="search" size={21} color={colors.icon} />
            </View>
            <Text selectable style={[styles.infoTitle, { color: colors.primaryText }]}>
              {text.causesTitle}
            </Text>
          </View>
          <BulletList
            items={text.reversibleCauses}
            bulletColor={colors.bullet}
            textColor={colors.bodyText}
          />
        </View>
      </View>

      <FlowConnector />

      <View
        style={[
          styles.finalCard,
          {
            borderColor: colors.finalBorder,
            backgroundColor: colors.finalBackground,
          },
        ]}
      >
        <View
          style={[
            styles.finalIcon,
            { backgroundColor: colors.finalIconBackground },
          ]}
        >
          <Ionicons name="people" size={24} color={colors.icon} />
        </View>
        <View style={styles.cardText}>
          <Text selectable style={[styles.finalTitle, { color: colors.primaryText }]}>
            {text.finalTitle}
          </Text>
          <Text
            selectable
            style={[styles.finalDescription, { color: colors.primaryText }]}
          >
            {text.finalDescription}
          </Text>
        </View>
      </View>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  reassessmentCard: {
    width: "100%",
    minHeight: 92,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 2,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  reassessmentIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  reassessmentText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
    textAlign: "left",
  },
  escalationCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  conditionText: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
    textAlign: "center",
  },
  sideCards: {
    width: "100%",
    gap: 12,
  },
  infoCard: {
    width: "100%",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  infoHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 11,
    borderBottomWidth: 1,
  },
  infoIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  infoTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  list: {
    width: "100%",
    gap: 9,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  rowText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  finalCard: {
    width: "100%",
    minHeight: 98,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 18,
    borderWidth: 1,
    borderRadius: 49,
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  finalIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  finalTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
    textAlign: "center",
  },
  finalDescription: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "center",
  },
});
