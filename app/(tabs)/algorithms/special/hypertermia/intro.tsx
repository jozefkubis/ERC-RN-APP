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
          <Text style={styles.titleText}>Hypertermia</Text>
          <Text style={styles.descriptionText}>
            Vyberte postup podľa príčiny zvýšenej teploty jadra: úpal,
            malígna hypertermia alebo toxínmi navodený hypermetabolický stav.
          </Text>
        </View>

        <AlgorithmCard
          title="Ťažká hypertermia"
          subtitle="Úpal a zlyhanie termoregulácie"
          description="Presuňte pacienta do chladu, merajte teplotu jadra a začnite okamžité aktívne chladenie."
          iconFamily="ionicons"
          iconName="thermometer-outline"
          onPress={() =>
            router.push("/algorithms/special/hypertermia/regular/step1")
          }
        />

        <AlgorithmCard
          title="Malígna hypertermia"
          subtitle="Po anestetikách alebo sukcinylcholíne"
          description="Zastavte spúšťač, podajte 100 % kyslík, začnite chladenie a čo najskôr podajte dantrolén."
          iconFamily="material-community"
          iconName="needle"
          onPress={() =>
            router.push("/algorithms/special/hypertermia/maligna/step1")
          }
        />

        <AlgorithmCard
          title="Hypertermia spôsobená toxínmi"
          subtitle="Sympatomimetiká, MDMA a iné toxíny"
          description="Myslite na intoxikáciu, chráňte tím, tlmte agitáciu alebo kŕče a pokračujte v aktívnom chladení."
          iconFamily="material-community"
          iconName="bottle-tonic-skull-outline"
          onPress={() =>
            router.push("/algorithms/special/hypertermia/toxic/step1")
          }
        />
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
