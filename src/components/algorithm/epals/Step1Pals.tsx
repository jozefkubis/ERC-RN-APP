import { useSettings } from "@/src/context/settings-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Rozpoznanie zastavenia krvného obehu",
    description:
      "Žiadne známky života a/alebo bradykardia < 60/min so slabou perfúziou.",
    actions: [
      "Privolajte ZZS / resuscitačný tím",
      "5 záchranných vdychov, potom KPR 15:2",
      "Pripojte defibrilátor / monitor",
    ],
    rhythmTitle: "ZHODNOŤTE RYTMUS",
    rhythmDescription:
      "Zastavte stláčanie len na nevyhnutný čas a rozhodnite, či je rytmus defibrilovateľný.",
    cprTitle: "Počas KPR",
    cprItems: [
      "Vysokokvalitné kompresie hrudníka: frekvencia, hĺbka, uvoľnenie hrudníka",
      "Ventilácia vakom a maskou so 100 % kyslíkom, ideálne technikou s dvomi osobami",
      "Po intubácii alebo zavedení supraglotickej pomôcky pokračujte v kontinuálnych kompresiách",
      "Ventilujte frekvenciou 25 (< 1 rok), 20 (1-8 rokov), 15 (8-12 rokov) alebo 10 (> 12 rokov) za minútu",
    ],
  },
  en: {
    badge: "Step 1",
    title: "Recognition of cardiac arrest",
    description:
      "No signs of life and/or bradycardia < 60/min with poor perfusion.",
    actions: [
      "Call EMS / resuscitation team",
      "Give 5 rescue breaths, then CPR 15:2",
      "Attach defibrillator / monitor",
    ],
    rhythmTitle: "ASSESS RHYTHM",
    rhythmDescription:
      "Pause compressions only for the minimum time needed and decide whether the rhythm is shockable.",
    cprTitle: "During CPR",
    cprItems: [
      "High-quality chest compressions: rate, depth, and full chest recoil",
      "Bag-mask ventilation with 100% oxygen, ideally using a two-person technique",
      "After intubation or supraglottic airway insertion, continue uninterrupted chest compressions",
      "Ventilate at 25 (< 1 year), 20 (1-8 years), 15 (8-12 years), or 10 (> 12 years) breaths per minute",
    ],
  },
};

const cardColors = {
  light: {
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    actionIcon: "#075296",
    actionText: "#10243C",
    rhythmIcon: "#ED1C24",
    rhythmTitle: "#075296",
    rhythmDescription: "#5C6574",
    rhythmArrow: "#075296",
    infoBackground: "#FFF6DC",
    infoBorder: "#F0DEB4",
    infoIconBackground: "#FFFFFF",
    infoTitle: "#075296",
    infoText: "#24425F",
    bullet: "#075296",
    flowLine: "#075296",
  },
  dark: {
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    actionIcon: "#164C80",
    actionText: "#F5F8FC",
    rhythmIcon: "#B6202A",
    rhythmTitle: "#B9DDFF",
    rhythmDescription: "#AAB6C7",
    rhythmArrow: "#77B7F2",
    infoBackground: "#2B2414",
    infoBorder: "#6A5727",
    infoIconBackground: "#101B2B",
    infoTitle: "#F6D38A",
    infoText: "#E7D7A8",
    bullet: "#F6D38A",
    flowLine: "#77B7F2",
  },
};

export default function Step1Pals() {
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
                { backgroundColor: colors.actionIcon },
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
        onPress={() => router.push("/algorithms/epals/pals/step2")}
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
            style={[styles.flowLine, { backgroundColor: colors.flowLine }]}
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
          <Ionicons
            name="arrow-forward"
            size={22}
            color={colors.rhythmArrow}
          />
        </View>
      </Pressable>

      <View
        style={[
          styles.cprInfoCard,
          {
            borderColor: colors.infoBorder,
            backgroundColor: colors.infoBackground,
          },
        ]}
      >
        <View style={styles.cprInfoHeader}>
          <View
            style={[
              styles.cprInfoIcon,
              { backgroundColor: colors.infoIconBackground },
            ]}
          >
            <Ionicons name="warning-outline" size={24} color="#ED1C24" />
          </View>
          <Text style={[styles.cprInfoTitle, { color: colors.infoTitle }]}>
            {text.cprTitle}
          </Text>
        </View>

        <View style={styles.cprInfoList}>
          {text.cprItems.map((item) => (
            <View key={item} style={styles.cprInfoRow}>
              <View
                style={[styles.cprBullet, { backgroundColor: colors.bullet }]}
              />
              <Text style={[styles.cprInfoText, { color: colors.infoText }]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>
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
  cprInfoCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cprInfoHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cprInfoIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#ED1C24",
    borderRadius: 17,
  },
  cprInfoTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  cprInfoList: {
    width: "100%",
    gap: 9,
  },
  cprInfoRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  cprBullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 8,
  },
  cprInfoText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
