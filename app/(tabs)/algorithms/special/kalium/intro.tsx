import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Intro() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Poruchy draslíka</Text>
          <Text style={styles.descriptionText}>
            Vyberte smer liečby podľa hladiny K⁺, EKG zmien a klinického stavu.
          </Text>
        </View>

        <AlgorithmCard
          title="Hyperkaliémia"
          subtitle="K⁺ zvýšený, riziko arytmie a ZO"
          description="Presuňte draslík do buniek, stabilizujte myokard kalciom a odstráňte K⁺ z tela."
          iconFamily="ionicons"
          iconName="add-circle-outline"
          onPress={() => router.push("/algorithms/special/kalium/hyper/step1")}
        />

        <AlgorithmCard
          title="Hypokaliémia"
          subtitle="K⁺ znížený, svalová slabosť a arytmie"
          description="Liečbu riaďte závažnosťou, EKG zmenami a súčasne korigujte deficit horčíka."
          iconFamily="ionicons"
          iconName="remove-circle-outline"
          onPress={() => router.push("/algorithms/special/kalium/hypo/step1")}
        />

        {/* <InfoCard
              title="Skôr než začnete"
              description="Zaistite bezpečnosť miesta, potvrďte zastavenie obehu a privolajte pomoc pred pokračovaním v špecifických algoritmoch."
            /> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  // safeArea: {
  //   flex: 1,
  //   backgroundColor: "#F7F8FC",
  // },
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
