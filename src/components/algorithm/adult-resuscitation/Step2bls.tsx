import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const helpOptions = [
  {
    title: "Mimo nemocnice",
    items: [
      "Telefón na hlasný odposluch",
      "Skontrolujte dýchanie",
      "Ak si nie ste istí, operátor vám pomôže",
      "Riaďte sa pokynmi operátora",
    ],
  },
  {
    title: "V nemocnici",
    items: [
      "Skontrolujte dýchanie a známky života",
      "Požiadajte o AED alebo defibrilátor",
      "Privolajte resuscitačný tím",
    ],
  },
];

export default function Step2bls() {
  const router = useRouter();

  return (
    <AlgorithmScreen>
        <StepHeader
        badge={"Krok 2"}
        title={"Privolajte pomoc"}
        description={"Spustite poplach a čo najskôr zapojte ďalších ľudí alebo resuscitačný tím."}
      />

        <Pressable
          onPress={() => router.push("/algorithms/adult-resuscitation/bls/step3")}
          style={({ pressed }) => [styles.callCard, pressed && styles.pressed]}
        >
          <View style={styles.callIcon}>
            <Ionicons name="call" size={26} color="#FFFFFF" />
          </View>
          <View style={styles.callTextContainer}>
            <Text style={styles.callTitle}>Privolajte pomoc</Text>
            <Text style={styles.callDescription}>Spustite poplach</Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#075296" />
        </Pressable>

        <View style={styles.helpCard}>
          <Text style={styles.helpCardTitle}>Bezodkladne privolajte pomoc</Text>
          <View style={styles.helpColumns}>
            {helpOptions.map((option) => (
              <View key={option.title} style={styles.helpColumn}>
                <Text style={styles.helpColumnTitle}>{option.title}</Text>
                {option.items.map((item) => (
                  <View key={item} style={styles.helpItem}>
                    <View style={styles.helpBullet} />
                    <Text style={styles.helpItemText}>{item}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>

        <InfoCard
          title="Po privolaní pomoci"
          description="Počas čakania na spojenie alebo príchod pomoci zhodnoťte dýchanie. Pri pochybnostiach pokračujte ako pri zastavení obehu."
          iconName="call-outline"
        />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  callCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  callIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#ED1C24",
  },
  callTextContainer: {
    flex: 1,
    gap: 4,
  },
  callTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  callDescription: {
    color: "#10243C",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 19,
  },
  helpCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5D7AC",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#F8EFCF",
  },
  helpCardTitle: {
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
    textAlign: "center",
  },
  helpColumns: {
    width: "100%",
    flexDirection: "row",
    gap: 14,
  },
  helpColumn: {
    flex: 1,
    gap: 8,
  },
  helpColumnTitle: {
    color: "#075296",
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 19,
  },
  helpItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  helpBullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 7,
  },
  helpItemText: {
    flex: 1,
    color: "#10243C",
    fontSize: 12,
    lineHeight: 17,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
