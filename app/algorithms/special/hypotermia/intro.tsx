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
          <Text style={styles.titleText}>Hypotermia</Text>
          <Text style={styles.descriptionText}>
            Vyberte postup pre náhodnú hypotermiu alebo zasypanie lavínou.
            Rozhodovanie vychádza zo životných funkcií, teploty jadra, rizika
            zastavenia obehu a okolností zasypania.
          </Text>
        </View>

        <AlgorithmCard
          title="Náhodná hypotermia"
          subtitle="Predĺžené hodnotenie a riadené ohrievanie"
          description="Životné funkcie kontrolujte až 1 minútu, zmerajte teplotu jadra teplomerom schopným merať nízke teploty a rizikových pacientov smerujte do centra eKPR."
          iconFamily="material-community"
          iconName="snowflake-thermometer"
          onPress={() =>
            router.push("/algorithms/special/hypotermia/regular/step1")
          }
        />

        <AlgorithmCard
          title="Záchrana z lavíny"
          subtitle="Teplota jadra, dĺžka zasypania a dýchacie cesty"
          description="Pri začatí KPR sa riaďte teplotou jadra, dĺžkou zasypania a priechodnosťou dýchacích ciest; pri viacerých zasypaných zvážte postup AvaLife."
          iconFamily="material-community"
          iconName="landslide"
          onPress={() =>
            router.push("/algorithms/special/hypotermia/lavina/step1")
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
