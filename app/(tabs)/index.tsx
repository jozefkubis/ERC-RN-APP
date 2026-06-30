import BaseCard from "@/src/components/ui/BaseCard";
import Input from "@/src/components/ui/Input";
import SmallCard from "@/src/components/ui/SmallCard";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  function handleCardPress(route: string) {
    router.push(route);
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        {/* Vyhľadávanie */}
        <Input placeholder="Vyhľadaj postup, algoritmus..." />

        {/* Nadpis sekcie primárnych možností */}
        <View style={styles.primaryOptionsContainer}>
          <Ionicons name="shapes" size={24} color="#075296" />
          <Text style={styles.primaryOption}>Primárne možnosti</Text>
        </View>

        {/* Primárna karta: resuscitácia dospelých */}
        <BaseCard
          topText="Algoritmus"
          title="Resuscitácia dospelých"
          description="ALS, BLS, Post-resuscitačná starostlivosť"
          iconName="pulse"
          iconSize={44}
          onPress={() => handleCardPress("/algorithms/adult-resuscitation")}
        />

        {/* Primárna karta: pediatrická resuscitácia */}
        <BaseCard
          topText="Algoritmus"
          title="Resuscitácia detí"
          description="EPALS, PBLS"
          iconName="happy-outline"
          iconSize={50}
          variant="light"
          onPress={() => handleCardPress("/algorithms/epals")}
        />

        {/* Primárna karta: resuscitácia novorodencov */}
        <BaseCard
          topText="Algoritmus"
          title="Resuscitácia novorodencov"
          description="NLS algoritmy"
          iconName="medical-outline"
          variant="light"
        />

        {/* Primárna karta: špeciálne okolnosti */}
        <BaseCard
          topText="Algoritmus"
          title="Špeciálne okolnosti"
          description="Anafylaxia, Hypotermia, Toxické látky..."
          iconName="warning-outline"
          iconColor="#CC6238"
          variant="light"
        />

        {/* Sekcia nedávnych algoritmov */}
        <View style={styles.listSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="time-outline" size={22} color="#6B7483" />
              <Text style={styles.sectionTitle}>História</Text>
            </View>
            <Text style={styles.sectionAction}>Zobraziť všetko</Text>
          </View>

          <SmallCard
            title="ALS náhle zastavenie obehu"
            subtitle="Resuscitácia dospelých"
            iconName="git-network"
            iconBackgroundColor="#0868C4"
            trailingIcon="chevron-forward"
            trailingIconColor="#7A8492"
          />
          <SmallCard
            title="Algoritmus anafylaxie"
            subtitle="Špeciálne okolnosti"
            iconName="git-network"
            iconBackgroundColor="#0868C4"
            trailingIcon="chevron-forward"
            trailingIconColor="#7A8492"
          />
        </View>

        {/* Sekcia obľúbených položiek */}
        <View style={styles.listSection}>
          <View style={styles.sectionTitleRow}>
            <Ionicons name="star" size={22} color="#FFB000" />
            <Text style={styles.sectionTitle}>Obľúbené</Text>
          </View>

          <SmallCard
            title="Dávkovanie adrenalínu"
            subtitle="Databáza liekov"
            iconName="medkit"
            iconBackgroundColor="#8B6500"
            trailingIcon="star"
            trailingIconColor="#FFB000"
          />
          <SmallCard
            title="KPR metronóm"
            subtitle="Časovače"
            iconName="timer"
            iconBackgroundColor="#ED1C24"
            trailingIcon="star"
            trailingIconColor="#FFB000"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Bezpečná oblasť obrazovky
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    gap: 15,
  },

  // Nadpis primárnych možností
  primaryOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  primaryOption: {
    padding: 15,
    fontSize: 20,
    color: "#10243C",
    fontWeight: "bold",
  },

  // Sekcie nedávnych a obľúbených položiek
  listSection: {
    width: "100%",
    gap: 8,
    paddingTop: 14,
  },
  sectionHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sectionTitle: {
    color: "#10243C",
    fontSize: 20,
    fontWeight: "800",
  },
  sectionAction: {
    color: "#075296",
    fontSize: 13,
    fontWeight: "700",
  },
});
