import BaseCard from "@/src/components/ui/BaseCard";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function AlgorithmsScreen() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.primaryOptionsContainer}>
          <Ionicons name="git-network" size={24} color="#075296" />
          <Text style={styles.primaryOption}>Algoritmy</Text>
        </View>

        <BaseCard
          topText="Algoritmus"
          title="Resuscitácia dospelých"
          description="ALS, BLS, Post-resuscitačná starostlivosť"
          iconName="pulse"
          iconSize={44}
          onPress={() => router.push("/algorithms/adult-resuscitation")}
        />

        <BaseCard
          topText="Algoritmus"
          title="Resuscitácia detí"
          description="EPALS, PBLS"
          iconName="happy-outline"
          iconSize={50}
          variant="light"
          onPress={() => router.push("/algorithms/epals")}
        />

        <BaseCard
          topText="Algoritmus"
          title="Resuscitácia novorodencov"
          description="NLS algoritmy"
          iconName="medical-outline"
          variant="light"
        />

        <BaseCard
          topText="Algoritmus"
          title="Špeciálne okolnosti"
          description="Anafylaxia, Hypotermia, Toxické látky..."
          iconName="warning-outline"
          iconColor="#CC6238"
          variant="light"
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
});
