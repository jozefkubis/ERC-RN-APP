import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResuscitationAdult() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Vyberte Algoritmus</Text>
          <Text style={styles.descriptionText}>
            Postupujte podľa štandardných ERC pokynov pre dospelých.
          </Text>
        </View>

        <AlgorithmCard
          badgeText="ZZS"
          title="ALS"
          subtitle="Rozšírená resuscitácia"
          description="Defibrilácia, manažment dýchacích ciest a podávanie liekov pri zastavení obehu."
          iconFamily="fontisto"
          iconName="pulse"
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/als/step1")
          }
        />

        <AlgorithmCard
          title="BLS"
          subtitle="Základná resuscitácia"
          description="Prvotné rozpoznanie, kvalitné stláčanie hrudníka a včasná defibrilácia ak AED."
          iconName="heart-outline"
        />

        <AlgorithmCard
          badgeText="S PULZOM"
          badgeVariant="warning"
          title="Tachykardia"
          description="Vyhodnotenie a liečba tachyarytmií."
          iconFamily="ionicons"
          iconName="speedometer-outline"
        />

        <AlgorithmCard
          title="Bradykardia"
          description="Manažment symptomatickej bradykardie."
          iconFamily="material-community"
          iconName="speedometer-slow"
        />

        {/* <InfoCard
          title="Skôr než začnete"
          description="Zaistite bezpečnosť miesta, potvrďte zastavenie obehu a privolajte pomoc pred pokračovaním v špecifických algoritmoch."
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    gap: 15,
  },
  titleTextContainer: {
    flexDirection: "column",
    gap: 5,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10243C",
  },
  descriptionText: {
    fontSize: 14,
    color: "#10243C",
  },
});
