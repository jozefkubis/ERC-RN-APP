import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const pageText = {
  sk: {
    title: "Pľúcna embólia",
    description:
      "Vyberte postup podľa toho, či má pacient zachovaný krvný obeh, alebo došlo k zastaveniu krvného obehu v dôsledku pľúcnej embólie.",
    circulationTitle: "Pľúcna embólia",
    circulationSubtitle: "Náhla dušnosť a hemodynamická nestabilita",
    circulationDescription:
      "Pri náhlej progresívnej dušnosti zhodnoťte hemodynamickú stabilitu, vykonajte EKG a echokardiografiu a začnite diagnostiku a antikoaguláciu.",
    arrestTitle: "PE so zastavením obehu",
    arrestSubtitle: "Predpokladaná alebo potvrdená príčina ZO",
    arrestDescription:
      "Pri podozrení použite fibrinolytiká; pri potvrdenej PE zvážte aj chirurgickú embolektómiu, mechanickú trombektómiu alebo eKPR.",
  },
  en: {
    title: "Pulmonary embolism",
    description:
      "Choose the pathway according to whether the patient has a circulation or has developed cardiac arrest due to pulmonary embolism.",
    circulationTitle: "Pulmonary embolism",
    circulationSubtitle: "Sudden dyspnoea and haemodynamic instability",
    circulationDescription:
      "With sudden progressive dyspnoea, assess haemodynamic stability, perform ECG and echocardiography, and begin diagnosis and anticoagulation.",
    arrestTitle: "PE with cardiac arrest",
    arrestSubtitle: "Suspected or confirmed cause of cardiac arrest",
    arrestDescription:
      "For suspected PE, use fibrinolytic drugs; for confirmed PE, also consider surgical embolectomy, mechanical thrombectomy, or ECPR.",
  },
};

const screenColors = {
  light: {
    background: "#F7F8FC",
    statusBar: "dark-content" as const,
    title: "#10243C",
    description: "#5C6574",
  },
  dark: {
    background: "#07111F",
    statusBar: "light-content" as const,
    title: "#F5F8FC",
    description: "#AAB6C7",
  },
};

export default function Intro() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = screenColors[themeMode];

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <StatusBar barStyle={colors.statusBar} />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleTextContainer}>
          <Text selectable style={[styles.titleText, { color: colors.title }]}>
            {text.title}
          </Text>
          <Text
            selectable
            style={[styles.descriptionText, { color: colors.description }]}
          >
            {text.description}
          </Text>
        </View>

        <AlgorithmCard
          title={text.circulationTitle}
          subtitle={text.circulationSubtitle}
          description={text.circulationDescription}
          iconFamily="material-community"
          iconName="lungs"
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/special/embolia/PE/step1")}
        />

        <AlgorithmCard
          title={text.arrestTitle}
          subtitle={text.arrestSubtitle}
          description={text.arrestDescription}
          iconFamily="material-community"
          iconName="heart-off"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/special/embolia/PEresuscitacia/step1")
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    gap: 15,
  },
  titleTextContainer: {
    gap: 5,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 14,
  },
});
