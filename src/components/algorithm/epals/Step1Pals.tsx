import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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

const actions = [
  "Privolajte ZZS / resuscitačný tím",
  "5 záchranných vdychov, potom KPR 15:2",
  "Pripojte defibrilátor / monitor",
];

export default function Step1Pals() {
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
            <Text style={styles.stepBadgeText}>Krok 1</Text>
          </View>
          <Text style={styles.stepTitle}>
            Rozpoznanie zastavenia krvného obehu
          </Text>
          <Text style={styles.stepDescription}>
            Žiadne známky života a/alebo bradykardia &lt; 60 min⁻¹ so slabou
            perfúziou
          </Text>
        </View>

        <View style={styles.actionCard}>
          {actions.map((action) => (
            <View key={action} style={styles.actionRow}>
              <View style={styles.actionIcon}>
                <Ionicons name="checkmark" size={18} color="#FFFFFF" />
              </View>
              <Text style={styles.actionText}>{action}</Text>
            </View>
          ))}
        </View>

        <Pressable
          style={({ pressed }) => [pressed && styles.pressed]}
          onPress={() => router.push("/algorithms/epals/pals/step2")}
        >
          <View style={styles.rhythmCard}>
            <View style={styles.flowLine} />
            <View style={styles.rhythmIcon}>
              <MaterialCommunityIcons
                name="heart-pulse"
                size={30}
                color="#FFFFFF"
              />
            </View>
            <Text style={styles.rhythmTitle}>ZHODNOŤTE RYTMUS</Text>
            <Text style={styles.rhythmDescription}>
              Zastavte stláčanie len na nevyhnutný čas a rozhodnite, či je
              rytmus defibrilovateľný.
            </Text>
            <Ionicons name="arrow-forward" size={22} color="#075296" />
          </View>
        </Pressable>
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
  actionCard: {
    width: "100%",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
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
    backgroundColor: "#075296",
  },
  actionText: {
    flex: 1,
    color: "#10243C",
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
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  flowLine: {
    width: 3,
    height: 32,
    backgroundColor: "#075296",
  },
  rhythmIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#ED1C24",
    marginTop: -2,
  },
  rhythmTitle: {
    color: "#075296",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "center",
  },
  rhythmDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
