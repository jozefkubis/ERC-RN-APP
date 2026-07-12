import BaseCard from "@/src/components/ui/BaseCard";
import Input from "@/src/components/ui/Input";
import SmallCard from "@/src/components/ui/SmallCard";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        {/* Vyhľadávanie */}
        <Input placeholder="Vyhľadaj postup, algoritmus..." />

        {/* Odporúčania odborných spoločností */}
        <View style={styles.primaryOptionsContainer}>
          <Ionicons name="heart-circle" size={24} color="#075296" />
          <Text style={styles.primaryOption}>Odporúčania</Text>
        </View>

        {/* Vstup do aktuálne dostupných ERC odporúčaní */}
        <BaseCard
          topText="Aktuálne"
          title="ERC 2025"
          description="European Resuscitation Council"
          iconName="pulse"
          iconSize={44}
          onPress={() => router.push("/algorithms")}
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
            subtitle="ERC 2025 · Resuscitácia dospelých"
            iconName="git-network"
            iconBackgroundColor="#0868C4"
            trailingIcon="chevron-forward"
            trailingIconColor="#7A8492"
          />
          <SmallCard
            title="Algoritmus anafylaxie"
            subtitle="ERC 2025 · Špeciálne okolnosti"
            iconName="git-network"
            iconBackgroundColor="#0868C4"
            trailingIcon="chevron-forward"
            trailingIconColor="#7A8492"
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  // Bezpečná oblasť obrazovky
  // safeArea: {
  //   flex: 1,
  //   backgroundColor: "#F7F8FC",
  // },
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
