import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function EPALS() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Vyberte algoritmus</Text>
          <Text style={styles.descriptionText}>
            Postupujte podľa odporúčaní ERC 2025 pre resuscitáciu detí.
          </Text>
        </View>

        <AlgorithmCard
          badgeText="ZZS"
          title="PALS"
          subtitle="Rozšírená resuscitácia dieťaťa"
          description="Zhodnotenie rytmu, defibrilácia, podávanie liekov pri zastavenia obehu."
          iconFamily="fontawesome6"
          iconName="children"
          onPress={() => router.push("/algorithms/epals/pals/step1")}
        />

        <AlgorithmCard
          title="PBLS"
          subtitle="Základná resuscitácia dieťaťa"
          description="Rozpoznanie zastavenia obehu, 5 úvodných vdychov, kvalitná KPR a včasné použitie AED."
          iconFamily="ionicons"
          iconName="heart-outline"
          onPress={() => router.push("/algorithms/epals/pbls/step1")}
        />

        {/* <AlgorithmCard
          title="Kriticky choré dieťa"
          subtitle="ABCDE prístup"
          description="Rýchle rozpoznanie a liečba porúch dýchacích ciest, dýchania, krvného obehu, vedomia..."
          iconFamily="ionicons"
          iconName="medkit-outline"
        /> */}

        <AlgorithmCard
          title="FBAO"
          subtitle="Obštrukcia dýchacích ciest cudzím telesom"
          description="Postup podľa účinnosti kašľa a vedomia dieťaťa..."
          iconFamily="fontawesome6"
          iconName="lungs"
          onPress={() => router.push("/algorithms/epals/fbao/step1")}
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
