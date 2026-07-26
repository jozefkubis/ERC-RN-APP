import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import H4T4Button from "../../ui/H4T4Button";
import InfoCard from "../../ui/info-card";
import ParalelThinkingALS from "../adult-resuscitation/ParalelThinkingALS";

const nonDefibRhythmItems = [
  "Nedefibrilovateľné rytmy: bradykardia so slabou perfúziou, asystólia, BEA.",
  "Zabezpečte IV/IO vstup; ak je IV vstup ťažký, prejdite včas na IO.",
  "Adrenalín 10 µg kg⁻¹ IV/IO, max. 1 mg, podajte čo najskôr.",
  "Adrenalín opakujte každé 4 minúty, teda každý druhý 2-minútový cyklus.",
  "Rytmus zhodnoťte každé 2 minúty, prerušenie má trvať menej ako 5 sekúnd.",
];

export default function Step3PalsNondefib() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 3"}
        title={"Nedefibrilovateľný rytmus"}
        description={"Pri bradykardii so slabou perfúziou, asystólii alebo BEA nepodávajte výboj. Okamžite pokračujte v KPR a podajte adrenalín."}
      />

        <View style={styles.adrenalineCard}>
          <View style={styles.adrenalineIcon}>
            <Ionicons name="flash-off-sharp" size={28} color="#075296" />
          </View>
          <View style={styles.adrenalineTextContainer}>
            <Text style={styles.adrenalineLabel}>Okamžitý postup</Text>
            <Text style={styles.adrenalineTitle}>
              IV / IO adrenalín čo najskôr
            </Text>
            <Text style={styles.adrenalineDescription}>
              10 µg kg⁻¹, max. 1 mg. Po podaní prepláchnite vstup a neprerušujte
              kompresie zbytočne.
            </Text>
          </View>
        </View>

        <View style={styles.cprCard}>
          <View style={styles.cprIcon}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={28}
              color="#FFFFFF"
            />
          </View>
          <View style={styles.cprTextContainer}>
            <Text style={styles.cprTitle}>Ihneď pokračujte v KPR 2 minúty</Text>
            <Text style={styles.cprDescription}>
              Pokračujte v kompresiách a ventilácii 15:2. Súbežne hľadajte a
              riešte reverzibilné príčiny.
            </Text>
          </View>
        </View>

        <ParalelThinkingALS />

        <View style={styles.nonDefibInfoCard}>
          <View style={styles.nonDefibInfoHeader}>
            <View style={styles.nonDefibInfoIcon}>
              <Ionicons name="flash-off-sharp" size={18} color="#075296" />
            </View>
            <Text style={styles.nonDefibInfoTitle}>
              Pre nedefibrilovateľné rytmy
            </Text>
          </View>

          <View style={styles.nonDefibInfoList}>
            {nonDefibRhythmItems.map((item) => (
              <View key={item} style={styles.nonDefibInfoRow}>
                <View style={styles.bullet} />
                <Text style={styles.nonDefibInfoText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <H4T4Button />

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pals/step2")}
          style={({ pressed }) => [styles.nextCard, pressed && styles.pressed]}
        >
          <View style={styles.nextIcon}>
            <Ionicons name="timer-outline" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.nextTextContainer}>
            <Text style={styles.nextTitle}>Po 2 minútach</Text>
            <Text style={styles.nextDescription}>Znovu zhodnoťte rytmus</Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
        </Pressable>

        <InfoCard
          title="Dôležité"
          description="Pri nedefibrilovateľnom rytme nepodávajte výboj. Prioritou je kvalitná KPR, čo najskorší adrenalín, ventilácia kyslíkom a liečba reverzibilných príčin."
          iconName="alert-circle-outline"
        />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  adrenalineCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  adrenalineIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 27,
    backgroundColor: "#E4EFFD",
  },
  adrenalineTextContainer: {
    flex: 1,
    gap: 4,
  },
  adrenalineLabel: {
    color: "#075296",
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  adrenalineTitle: {
    color: "#10243C",
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 28,
  },
  adrenalineDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  cprCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cprIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#ED1C24",
  },
  cprTextContainer: {
    flex: 1,
    gap: 4,
  },
  cprTitle: {
    color: "#10243C",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  cprDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  nonDefibInfoCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0DEB4",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFF6DC",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nonDefibInfoHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  nonDefibInfoIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
  },
  nonDefibInfoTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  nonDefibInfoList: {
    width: "100%",
    gap: 9,
  },
  nonDefibInfoRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 8,
  },
  nonDefibInfoText: {
    flex: 1,
    color: "#24425F",
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "700",
  },
  nextCard: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nextIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#0877D1",
  },
  nextTextContainer: {
    flex: 1,
    gap: 3,
  },
  nextTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  nextDescription: {
    color: "#D7E9F8",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
