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

export default function Step4WideRegular() {
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
            <Text style={styles.stepBadgeText}>Krok 4</Text>
          </View>
          <Text style={styles.stepTitle}>Pravidelný široký QRS komplex</Text>
          <Text style={styles.stepDescription}>
            Pri pravidelnej širokokomplexovej tachykardii zhodnoťte mechanizmus
            arytmie, riziko sedácie a pridružené ochorenie srdca.
          </Text>
        </View>

        <View style={styles.stablePanel}>
          <Text style={styles.panelTitle}>PRAVIDELNÝ</Text>

          <View style={styles.decisionCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIcon}>
                <Ionicons name="heart" size={23} color="#FFFFFF" />
              </View>
              <Text style={styles.cardTitle}>
                Známa KT, vagové manévre a zlyhanie adenozínu, neistý
                mechanizmus arytmie alebo známe alebo predpokladané ochorenie
                srdca
              </Text>
            </View>

            <View style={styles.recommendationBlock}>
              <View style={styles.recommendationIcon}>
                <Ionicons name="medkit" size={22} color="#075296" />
              </View>
              <Text style={styles.recommendationText}>
                Pri vysokom riziku sedácie / anestézie podajte prokaínamid 10 -
                15 mg kg⁻¹ počas 20 minút.
              </Text>
            </View>

            <View style={styles.recommendationBlock}>
              <View style={styles.recommendationIcon}>
                <Ionicons name="alert-circle" size={22} color="#075296" />
              </View>
              <Text style={styles.recommendationText}>
                Ak je prokaínamid nedostupný alebo kontraindikovaný (napr.
                závažné srdcové zlyhávanie, akútny IM alebo terminálne štádium
                ochorenia obličiek), podajte amiodarón 300 mg intravenózne
                počas 10 - 60 minút, následne 900 mg počas 24 hodín.
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() =>
              router.push(
                "/algorithms/adult-resuscitation/tachycardia/synccardioversion",
              )
            }
            style={({ pressed }) => [
              styles.syncCard,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.syncIcon}>
              <Ionicons name="flash" size={23} color="#FFFFFF" />
            </View>
            <View style={styles.syncTextContainer}>
              <Text style={styles.syncTitle}>Synchronizovaná kardioverzia</Text>
              <Text style={styles.syncDescription}>
                Pri zlyhaní liečby alebo zhoršení stavu
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={24} color="#075296" />
          </Pressable>
        </View>

        <InfoCard
          title="Pripomienka"
          description="Počas podávania antiarytmika pokračujte v monitorovaní EKG, tlaku krvi a klinického stavu pacienta."
          iconName="pulse-outline"
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
  stablePanel: {
    width: "100%",
    gap: 16,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7F2F5",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  panelTitle: {
    alignSelf: "center",
    color: "#075296",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  decisionCard: {
    width: "100%",
    gap: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  cardIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#075296",
  },
  cardTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 23,
  },
  recommendationBlock: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    padding: 14,
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#F5FAFF",
  },
  recommendationIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "#E4EFFD",
  },
  recommendationText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  syncCard: {
    width: "100%",
    minHeight: 86,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 28,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  syncIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#075296",
  },
  syncTextContainer: {
    flex: 1,
    gap: 4,
  },
  syncTitle: {
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  syncDescription: {
    color: "#5C6574",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
