import { useSettings } from "@/src/context/settings-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import InfoCard from "../../ui/info-card";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Okamžitá resuscitácia",
    description:
      "Minimalizujte prerušenia stláčania hrudníka a čo najskôr pripojte monitor alebo defibrilátor.",
    actions: [
      "Začnite KPR 30:2",
      "Pripojte defibrilátor / monitor",
      "Privolajte ZZS / resuscitačný tím",
    ],
    rhythmTitle: "ZHODNOŤTE RYTMUS",
    rhythmDescription:
      "Zastavte stláčanie len na nevyhnutný čas a rozhodnite, či je rytmus defibrilovateľný.",
    infoTitle: "Princíp",
    infoDescription:
      "Analýza rytmu má byť krátka. Po rozhodnutí sa okamžite vráťte ku kvalitnej KPR alebo podajte výboj podľa algoritmu.",
  },
  en: {
    badge: "Step 2",
    title: "Immediate resuscitation",
    description:
      "Minimise interruptions to chest compressions and attach a monitor or defibrillator as soon as possible.",
    actions: [
      "Start CPR 30:2",
      "Attach defibrillator / monitor",
      "Call EMS / resuscitation team",
    ],
    rhythmTitle: "ASSESS RHYTHM",
    rhythmDescription:
      "Pause compressions only for the shortest necessary time and decide whether the rhythm is shockable.",
    infoTitle: "Principle",
    infoDescription:
      "Rhythm analysis should be brief. After the decision, immediately return to high-quality CPR or deliver a shock according to the algorithm.",
  },
};

const cardColors = {
  light: {
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    primary: "#075296",
    primaryIcon: "#075296",
    actionText: "#10243C",
    rhythmIcon: "#ED1C24",
    rhythmTitle: "#075296",
    rhythmDescription: "#5C6574",
    arrow: "#075296",
  },
  dark: {
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    primary: "#77B7F2",
    primaryIcon: "#164C80",
    actionText: "#F5F8FC",
    rhythmIcon: "#B7151B",
    rhythmTitle: "#B9DDFF",
    rhythmDescription: "#AAB6C7",
    arrow: "#77B7F2",
  },
};

export default function Step2() {
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
          styles.actionCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        {text.actions.map((action) => (
          <View key={action} style={styles.actionRow}>
            <View
              style={[
                styles.actionIcon,
                { backgroundColor: colors.primaryIcon },
              ]}
            >
              <Ionicons name="checkmark" size={18} color="#FFFFFF" />
            </View>
            <Text style={[styles.actionText, { color: colors.actionText }]}>
              {action}
            </Text>
          </View>
        ))}
      </View>

      <Pressable
        style={({ pressed }) => [pressed && styles.pressed]}
        onPress={() => router.push("/algorithms/adult-resuscitation/als/step3")}
      >
        <View
          style={[
            styles.rhythmCard,
            {
              borderColor: colors.cardBorder,
              backgroundColor: colors.cardBackground,
            },
          ]}
        >
          <View
            style={[styles.flowLine, { backgroundColor: colors.primary }]}
          />
          <View
            style={[
              styles.rhythmIcon,
              { backgroundColor: colors.rhythmIcon },
            ]}
          >
            <MaterialCommunityIcons
              name="heart-pulse"
              size={30}
              color="#FFFFFF"
            />
          </View>
          <Text style={[styles.rhythmTitle, { color: colors.rhythmTitle }]}>
            {text.rhythmTitle}
          </Text>
          <Text
            style={[
              styles.rhythmDescription,
              { color: colors.rhythmDescription },
            ]}
          >
            {text.rhythmDescription}
          </Text>
          <Ionicons name="arrow-forward" size={22} color={colors.arrow} />
        </View>
      </Pressable>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  actionCard: {
    width: "100%",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  actionRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  actionIcon: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
  },
  rhythmCard: {
    width: "100%",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingTop: 0,
    paddingBottom: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  flowLine: {
    width: 3,
    height: 32,
  },
  rhythmIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    marginTop: -2,
  },
  rhythmTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "center",
  },
  rhythmDescription: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
