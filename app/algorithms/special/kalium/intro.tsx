import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const pageText = {
  sk: {
    title: "Poruchy draslíka",
    description:
      "Vyberte smer liečby podľa hladiny K+, EKG zmien a klinického stavu.",
    hyperTitle: "Hyperkaliémia",
    hyperSubtitle: "K+ zvýšený, riziko arytmie a ZO",
    hyperDescription:
      "Presuňte draslík do buniek, stabilizujte myokard kalciom a odstráňte K+ z tela.",
    hypoTitle: "Hypokaliémia",
    hypoSubtitle: "K+ znížený, svalová slabosť a arytmie",
    hypoDescription:
      "Liečbu riaďte závažnosťou, EKG zmenami a súčasne korigujte deficit horčíka.",
  },
  en: {
    title: "Potassium disorders",
    description:
      "Choose the treatment pathway according to K+, ECG changes, and clinical condition.",
    hyperTitle: "Hyperkalaemia",
    hyperSubtitle: "Raised K+, risk of arrhythmia and cardiac arrest",
    hyperDescription:
      "Shift potassium into cells, stabilise the myocardium with calcium, and remove K+ from the body.",
    hypoTitle: "Hypokalaemia",
    hypoSubtitle: "Low K+, muscle weakness and arrhythmias",
    hypoDescription:
      "Guide treatment by severity, ECG changes, and correct magnesium deficit at the same time.",
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
          title={text.hyperTitle}
          subtitle={text.hyperSubtitle}
          description={text.hyperDescription}
          iconFamily="ionicons"
          iconName="add-circle-outline"
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/special/kalium/hyper/step1")}
        />

        <AlgorithmCard
          title={text.hypoTitle}
          subtitle={text.hypoSubtitle}
          description={text.hypoDescription}
          iconFamily="ionicons"
          iconName="remove-circle-outline"
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/special/kalium/hypo/step1")}
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
