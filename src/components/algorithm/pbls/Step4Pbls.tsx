import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 4",
    title: "KPR 15:2",
    description:
      "Po 5 úvodných vdychoch okamžite pokračujte kompresiami hrudníka.",
    ratioTitle: "15 : 2",
    qualityItems: [
      "Pomer 15 kompresií : 2 vdychy, ak ste vyškolení v PBLS.",
      "Frekvencia 100-120/min.",
      "Hĺbka aspoň 1/3 predozadného rozmeru hrudníka.",
      "Úplné uvoľnenie hrudníka a minimálne prestávky.",
    ],
    techniqueTitle: "Technika",
    techniqueText:
      "Dojča: dva palce s obopnutím hrudníka. Dieťa nad 1 rok: jedna alebo dve ruky podľa veľkosti dieťaťa a kvality kompresií.",
    nextTitle: "Ďalší krok",
    nextDescription: "AED",
    infoTitle: "Jeden záchranca",
    infoDescription:
      "Ak ste sami bez mobilu, vykonávajte KPR približne 1 minútu pred odchodom hľadať pomoc.",
  },
  en: {
    badge: "Step 4",
    title: "CPR 15:2",
    description:
      "After 5 initial rescue breaths, immediately continue with chest compressions.",
    ratioTitle: "15 : 2",
    qualityItems: [
      "Ratio 15 compressions : 2 breaths if trained in PBLS.",
      "Rate 100-120/min.",
      "Depth at least one third of the anterior-posterior chest diameter.",
      "Full chest recoil and minimal interruptions.",
    ],
    techniqueTitle: "Technique",
    techniqueText:
      "Infant: two-thumb encircling technique. Child over 1 year: one or two hands depending on the child's size and compression quality.",
    nextTitle: "Next step",
    nextDescription: "AED",
    infoTitle: "Single rescuer",
    infoDescription:
      "If you are alone without a mobile phone, perform CPR for about 1 minute before leaving to get help.",
  },
};

const cardColors = {
  light: {
    cprBackground: "#FFF6DC",
    cprBorder: "#F0DEB4",
    cprIcon: "#ED1C24",
    cprTitle: "#075296",
    itemText: "#24425F",
    bullet: "#075296",
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    cardTitle: "#10243C",
    cardDescription: "#5C6574",
    nextBackground: "#075296",
    nextBorder: "#075296",
    nextTitle: "#D7E9F8",
    nextDescription: "#FFFFFF",
  },
  dark: {
    cprBackground: "#2B2414",
    cprBorder: "#6A5727",
    cprIcon: "#B7151B",
    cprTitle: "#F6D38A",
    itemText: "#E7D7A8",
    bullet: "#F6D38A",
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    cardTitle: "#F5F8FC",
    cardDescription: "#AAB6C7",
    nextBackground: "#0E4A80",
    nextBorder: "#2F7FBE",
    nextTitle: "#D7E9F8",
    nextDescription: "#FFFFFF",
  },
};

export default function Step4Pbls() {
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
          styles.cprCard,
          {
            borderColor: colors.cprBorder,
            backgroundColor: colors.cprBackground,
          },
        ]}
      >
        <View style={styles.cprHeader}>
          <View style={[styles.cprIcon, { backgroundColor: colors.cprIcon }]}>
            <Ionicons name="heart" size={26} color="#FFFFFF" />
          </View>
          <Text style={[styles.cprTitle, { color: colors.cprTitle }]}>
            {text.ratioTitle}
          </Text>
        </View>

        <View style={styles.itemList}>
          {text.qualityItems.map((item) => (
            <View key={item} style={styles.itemRow}>
              <View
                style={[styles.bullet, { backgroundColor: colors.bullet }]}
              />
              <Text style={[styles.itemText, { color: colors.itemText }]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View
        style={[
          styles.techniqueCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <Text style={[styles.techniqueTitle, { color: colors.cardTitle }]}>
          {text.techniqueTitle}
        </Text>
        <Text
          style={[styles.techniqueText, { color: colors.cardDescription }]}
        >
          {text.techniqueText}
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/algorithms/epals/pbls/step5")}
        style={({ pressed }) => [
          styles.nextCard,
          {
            borderColor: colors.nextBorder,
            backgroundColor: colors.nextBackground,
          },
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.nextTextContainer}>
          <Text style={[styles.nextTitle, { color: colors.nextTitle }]}>
            {text.nextTitle}
          </Text>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
          <Text
            style={[styles.nextDescription, { color: colors.nextDescription }]}
          >
            {text.nextDescription}
          </Text>
        </View>
        <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
      </Pressable>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="person-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  cprCard: {
    width: "100%",
    gap: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cprHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  cprIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  cprTitle: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  itemList: {
    gap: 9,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
  },
  itemText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  techniqueCard: {
    width: "100%",
    gap: 6,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  techniqueTitle: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  techniqueText: {
    fontSize: 13,
    lineHeight: 19,
  },
  nextCard: {
    width: "100%",
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nextTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  nextTitle: {
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 16,
    textTransform: "uppercase",
  },
  nextDescription: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
