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
          <Text style={styles.titleText}>Pľúcna embólia</Text>
          <Text style={styles.descriptionText}>
            Vyberte postup podľa toho, či má pacient zachovaný krvný obeh,
            alebo došlo k zastaveniu krvného obehu v dôsledku pľúcnej embólie.
          </Text>
        </View>

        <AlgorithmCard
          title="Pľúcna embólia"
          subtitle="Náhla dušnosť a hemodynamická nestabilita"
          description="Pri náhlej progresívnej dušnosti zhodnoťte hemodynamickú stabilitu, vykonajte EKG a echokardiografiu a začnite diagnostiku a antikoaguláciu."
          iconFamily="material-community"
          iconName="lungs"
          onPress={() => router.push("/algorithms/special/embolia/PE/step1")}
        />

        <AlgorithmCard
          title="PE so zastavením obehu"
          subtitle="Predpokladaná alebo potvrdená príčina ZO"
          description="Pri podozrení použite fibrinolytiká; pri potvrdenej PE zvážte aj chirurgickú embolektómiu, mechanickú trombektómiu alebo eKPR."
          iconFamily="material-community"
          iconName="heart-off"
          onPress={() =>
            router.push("/algorithms/special/embolia/PEresuscitacia/step1")
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
