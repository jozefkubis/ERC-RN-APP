import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.stepHeader}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>Krok 2</Text>
          </View>
          <Text style={styles.stepTitle}>Privolajte pomoc</Text>
          <Text style={styles.stepDescription}>
            Spustite poplach a čo najskôr zapojte ďalších ľudí alebo
            resuscitačný tím.
          </Text>
        </View>

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
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    gap: 15,
  },
  stepHeader: {
    width: "100%",
    gap: 7,
    paddingTop: 6,
    paddingBottom: 4,
  },
  stepBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#E4EFFD",
  },
  stepBadgeText: {
    color: "#075296",
    fontSize: 20,
    fontWeight: "800",
  },
  stepTitle: {
    color: "#10243C",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 30,
  },
  stepDescription: {
    color: "#5C6574",
    fontSize: 14,
    lineHeight: 21,
  },
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
