import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "TOR",
    title: "Ukončenie resuscitácie",
    description:
      "Rozhodnutie má byť plánované, tímové a zasadené do klinického, právneho a etického kontextu.",
    heroLabel: "Tímové rozhodnutie",
    heroTitle: "Nepoužívajte automaticky",
    heroDescription:
      "Pri deťoch ERC neodporúča používať TOR pravidlá ako samostatnú stratégiu pre ukončenie resuscitácie.",
    decisionTitle: "Pred ukončením zhodnoťte",
    decisionItems: [
      "Ukončenie resuscitácie je tímové rozhodnutie založené na komplexnom posúdení.",
      "Zohľadnite dĺžku resuscitácie, reverzibilné príčiny a reakciu na resuscitačné úsilie.",
      "Všetci členovia tímu majú dostať príležitosť vyjadriť sa pred ukončením.",
      "Po ukončení vykonajte tímový debriefing.",
    ],
    warningTitle: "Nepostačuje izolovane",
    cautionItems: [
      "TOR pravidlá nepoužívajte pri pediatrických pacientoch ako samostatné rozhodovacie kritérium.",
      "Nízke ETCO2 môže podporiť rozhodovanie, ale nesmie byť jediným dôvodom.",
      "Echokardiografia, krvné plyny ani reaktivita zreníc nie sú samostatne platné dôvody na ukončenie KPR.",
    ],
    infoTitle: "Po ukončení",
    infoDescription:
      "Komunikujte jasne s tímom a rodinou, zachovajte dôstojnosť pacienta a podľa lokálneho protokolu pokračujte v následných krokoch.",
    backTitle: "Späť na rytmus",
    backDescription: "Vrátiť sa na zhodnotenie rytmu",
  },
  en: {
    badge: "TOR",
    title: "Termination of resuscitation",
    description:
      "The decision should be planned, team-based, and placed in the clinical, legal, and ethical context.",
    heroLabel: "Team decision",
    heroTitle: "Do not use automatically",
    heroDescription:
      "For children, ERC does not recommend TOR rules as a standalone strategy for stopping resuscitation.",
    decisionTitle: "Before stopping, assess",
    decisionItems: [
      "Termination of resuscitation is a team decision based on comprehensive assessment.",
      "Consider resuscitation duration, reversible causes, and response to resuscitation efforts.",
      "All team members should have an opportunity to speak before resuscitation is stopped.",
      "After stopping, perform a team debriefing.",
    ],
    warningTitle: "Not enough in isolation",
    cautionItems: [
      "Do not use TOR rules in paediatric patients as a standalone decision criterion.",
      "Low ETCO2 may support decision-making, but it must not be the only reason.",
      "Echocardiography, blood gases, and pupil reactivity are not valid standalone reasons to stop CPR.",
    ],
    infoTitle: "After stopping",
    infoDescription:
      "Communicate clearly with the team and family, preserve the patient's dignity, and continue according to the local protocol.",
    backTitle: "Back to rhythm",
    backDescription: "Return to rhythm assessment",
  },
};

const cardColors = {
  light: {
    heroBackground: "#F1F4F8",
    heroBorder: "#CBD3DF",
    heroIcon: "#7A8492",
    heroLabel: "#075296",
    heroTitle: "#10243C",
    heroDescription: "#5C6574",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    warningBackground: "#FFF6DC",
    warningBorder: "#F0DEB4",
    iconBackground: "#E4EFFD",
    iconBorder: "#075296",
    warningIconBackground: "#FFFFFF",
    warningIconBorder: "#ED1C24",
    title: "#10243C",
    warningTitle: "#075296",
    text: "#24425F",
    bullet: "#075296",
    warningBullet: "#ED1C24",
    backIconBackground: "#E4EFFD",
    backIcon: "#075296",
  },
  dark: {
    heroBackground: "#151D29",
    heroBorder: "#31435A",
    heroIcon: "#586678",
    heroLabel: "#B9DDFF",
    heroTitle: "#F5F8FC",
    heroDescription: "#AAB6C7",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    warningBackground: "#2B2414",
    warningBorder: "#6A5727",
    iconBackground: "#164C80",
    iconBorder: "#2F7FBE",
    warningIconBackground: "#101B2B",
    warningIconBorder: "#B7151B",
    title: "#F5F8FC",
    warningTitle: "#F6D38A",
    text: "#AAB6C7",
    bullet: "#77B7F2",
    warningBullet: "#F6D38A",
    backIconBackground: "#164C80",
    backIcon: "#B9DDFF",
  },
};

export default function Termination() {
  const router = useRouter();
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
          styles.heroCard,
          {
            borderColor: colors.heroBorder,
            backgroundColor: colors.heroBackground,
          },
        ]}
      >
        <View style={[styles.heroIcon, { backgroundColor: colors.heroIcon }]}>
          <Ionicons name="people" size={28} color="#FFFFFF" />
        </View>
        <View style={styles.heroTextContainer}>
          <Text style={[styles.heroLabel, { color: colors.heroLabel }]}>
            {text.heroLabel}
          </Text>
          <Text style={[styles.heroTitle, { color: colors.heroTitle }]}>
            {text.heroTitle}
          </Text>
          <Text
            style={[
              styles.heroDescription,
              { color: colors.heroDescription },
            ]}
          >
            {text.heroDescription}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.decisionCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <View
            style={[
              styles.decisionIcon,
              {
                borderColor: colors.iconBorder,
                backgroundColor: colors.iconBackground,
              },
            ]}
          >
            <Ionicons name="clipboard-outline" size={22} color="#075296" />
          </View>
          <Text style={[styles.cardTitle, { color: colors.title }]}>
            {text.decisionTitle}
          </Text>
        </View>

        <View style={styles.itemList}>
          {text.decisionItems.map((item) => (
            <View key={item} style={styles.itemRow}>
              <View style={[styles.bullet, { backgroundColor: colors.bullet }]} />
              <Text style={[styles.itemText, { color: colors.text }]}>
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
          <View
            style={[
              styles.warningIcon,
              {
                borderColor: colors.warningIconBorder,
                backgroundColor: colors.warningIconBackground,
              },
            ]}
          >
            <Ionicons name="warning-outline" size={22} color="#ED1C24" />
          </View>
          <Text style={[styles.warningTitle, { color: colors.warningTitle }]}>
            {text.warningTitle}
          </Text>
        </View>

        <View style={styles.itemList}>
          {text.cautionItems.map((item) => (
            <View key={item} style={styles.itemRow}>
              <View
                style={[
                  styles.warningBullet,
                  { backgroundColor: colors.warningBullet },
                ]}
              />
              <Text style={[styles.itemText, { color: colors.text }]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="chatbox-ellipses-outline"
        themeMode={themeMode}
      />

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/algorithms/epals/pals/step2")}
        style={({ pressed }) => [
          styles.backCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
          pressed && styles.pressed,
        ]}
      >
        <View
          style={[
            styles.backIcon,
            { backgroundColor: colors.backIconBackground },
          ]}
        >
          <Ionicons name="arrow-back" size={22} color={colors.backIcon} />
        </View>
        <View style={styles.backTextContainer}>
          <Text style={[styles.backTitle, { color: colors.title }]}>
            {text.backTitle}
          </Text>
          <Text style={[styles.backDescription, { color: colors.text }]}>
            {text.backDescription}
          </Text>
        </View>
      </Pressable>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  heroIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
  },
  heroTextContainer: {
    flex: 1,
    gap: 4,
  },
  heroLabel: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 28,
  },
  heroDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  decisionCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  warningCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  decisionIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 17,
  },
  warningIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 17,
  },
  cardTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  warningTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  itemList: {
    width: "100%",
    gap: 9,
  },
  itemRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 8,
  },
  warningBullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 8,
  },
  itemText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  backCard: {
    width: "100%",
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  backIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  backTextContainer: {
    flex: 1,
    gap: 4,
  },
  backTitle: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  backDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
