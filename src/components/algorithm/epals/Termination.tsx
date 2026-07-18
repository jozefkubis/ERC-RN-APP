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

const decisionItems = [
  "Ukončenie resuscitácie je tímové rozhodnutie založené na komplexnom posúdení.",
  "Zohľadnite dĺžku resuscitácie, reverzibilné príčiny a reakciu na resuscitačné úsilie.",
  "Všetci členovia tímu majú dostať príležitosť vyjadriť sa pred ukončením.",
  "Po ukončení vykonajte tímový debriefing.",
];

const cautionItems = [
  "TOR pravidlá nepoužívajte pri pediatrických pacientoch ako samostatné rozhodovacie kritérium.",
  "Nízke ETCO₂ môže podporiť rozhodovanie, ale nesmie byť jediným dôvodom.",
  "Echokardiografia, krvné plyny ani reaktivita zreníc nie sú samostatne platné dôvody na ukončenie KPR.",
];

export default function Termination() {
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
            <Text style={styles.stepBadgeText}>TOR</Text>
          </View>
          <Text style={styles.stepTitle}>Ukončenie resuscitácie</Text>
          <Text style={styles.stepDescription}>
            Rozhodnutie má byť plánované, tímové a zasadené do klinického,
            právneho a etického kontextu.
          </Text>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <Ionicons name="people" size={28} color="#FFFFFF" />
          </View>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroLabel}>Tímové rozhodnutie</Text>
            <Text style={styles.heroTitle}>Nepoužívajte automaticky</Text>
            <Text style={styles.heroDescription}>
              Pri deťoch ERC neodporúča používať TOR pravidlá ako samostatnú
              stratégiu pre ukončenie resuscitácie.
            </Text>
          </View>
        </View>

        <View style={styles.decisionCard}>
          <View style={styles.cardHeader}>
            <View style={styles.decisionIcon}>
              <Ionicons name="clipboard-outline" size={22} color="#075296" />
            </View>
            <Text style={styles.cardTitle}>Pred ukončením zhodnoťte</Text>
          </View>

          <View style={styles.itemList}>
            {decisionItems.map((item) => (
              <View key={item} style={styles.itemRow}>
                <View style={styles.bullet} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.warningCard}>
          <View style={styles.cardHeader}>
            <View style={styles.warningIcon}>
              <Ionicons name="warning-outline" size={22} color="#ED1C24" />
            </View>
            <Text style={styles.warningTitle}>Nepostačuje izolovane</Text>
          </View>

          <View style={styles.itemList}>
            {cautionItems.map((item) => (
              <View key={item} style={styles.itemRow}>
                <View style={styles.warningBullet} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <InfoCard
          title="Po ukončení"
          description="Komunikujte jasne s tímom a rodinou, zachovajte dôstojnosť pacienta a podľa lokálneho protokolu pokračujte v následných krokoch."
          iconName="chatbox-ellipses-outline"
        />

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pals/step2")}
          style={({ pressed }) => [styles.backCard, pressed && styles.pressed]}
        >
          <View style={styles.backIcon}>
            <Ionicons name="arrow-back" size={22} color="#075296" />
          </View>
          <View style={styles.backTextContainer}>
            <Text style={styles.backTitle}>Späť na rytmus</Text>
            <Text style={styles.backDescription}>
              Vrátiť sa na zhodnotenie rytmu
            </Text>
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
  heroCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#F1F4F8",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  heroIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
    backgroundColor: "#7A8492",
  },
  heroTextContainer: {
    flex: 1,
    gap: 4,
  },
  heroLabel: {
    color: "#075296",
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  heroTitle: {
    color: "#10243C",
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 28,
  },
  heroDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  decisionCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  warningCard: {
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
    borderColor: "#075296",
    borderRadius: 17,
    backgroundColor: "#E4EFFD",
  },
  warningIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#ED1C24",
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
  },
  cardTitle: {
    flex: 1,
    color: "#10243C",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  warningTitle: {
    flex: 1,
    color: "#075296",
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
    backgroundColor: "#075296",
    marginTop: 8,
  },
  warningBullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#ED1C24",
    marginTop: 8,
  },
  itemText: {
    flex: 1,
    color: "#24425F",
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
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  backIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  backTextContainer: {
    flex: 1,
    gap: 4,
  },
  backTitle: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  backDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
