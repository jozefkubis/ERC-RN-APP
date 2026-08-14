import BaseCard from "@/src/components/ui/BaseCard";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

const algorithmsText = {
  sk: {
    badge: "Algoritmus",
    adultTitle: "Resuscitácia dospelých",
    adultDescription: "ALS, BLS, post-resuscitačná starostlivosť",
    childTitle: "Resuscitácia detí",
    childDescription: "EPALS, PBLS",
    newbornTitle: "Resuscitácia novorodencov",
    newbornDescription: "NLS algoritmy",
    specialTitle: "Špeciálne okolnosti",
    specialDescription: "Anafylaxia, hypotermia, toxické látky...",
  },
  en: {
    badge: "Algorithm",
    adultTitle: "Adult resuscitation",
    adultDescription: "ALS, BLS, post-resuscitation care",
    childTitle: "Paediatric resuscitation",
    childDescription: "EPALS, PBLS",
    newbornTitle: "Newborn resuscitation",
    newbornDescription: "NLS algorithms",
    specialTitle: "Special circumstances",
    specialDescription: "Anaphylaxis, hypothermia, toxic agents...",
  },
};

const screenColors = {
  light: {
    background: "#F7F8FC",
    statusBar: "dark-content" as const,
    specialIcon: "#CC6238",
  },
  dark: {
    background: "#07111F",
    statusBar: "light-content" as const,
    specialIcon: "#F09A72",
  },
};

export default function AlgorithmsScreen() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = algorithmsText[language];
  const colors = screenColors[themeMode];

  return (
    <>
      <StatusBar barStyle={colors.statusBar} />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <BaseCard
          topText={text.badge}
          title={text.adultTitle}
          description={text.adultDescription}
          iconName="pulse"
          iconSize={44}
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/adult-resuscitation")}
        />

        <BaseCard
          topText={text.badge}
          title={text.childTitle}
          description={text.childDescription}
          iconName="happy-outline"
          iconSize={50}
          variant="light"
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/epals")}
        />

        <BaseCard
          topText={text.badge}
          title={text.newbornTitle}
          description={text.newbornDescription}
          iconName="medical-outline"
          variant="light"
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/newborn/step1")}
        />

        <BaseCard
          topText={text.badge}
          title={text.specialTitle}
          description={text.specialDescription}
          iconName="warning-outline"
          iconColor={colors.specialIcon}
          variant="light"
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/special")}
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
});
