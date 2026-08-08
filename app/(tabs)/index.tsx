import BaseCard from "@/src/components/ui/BaseCard";
import Input from "@/src/components/ui/Input";
import SmallCard from "@/src/components/ui/SmallCard";
import {
  loadViewingHistory,
  type HistoryItem,
} from "@/src/components/utils/History";
import { algorithmSearchItems } from "@/src/data/algorithm-search";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter, type Href } from "expo-router";
import { useCallback, useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Upraví text do jednoduchej podoby, aby vyhľadávanie fungovalo
// bez ohľadu na veľké písmená a diakritiku.
function normalizeText(text: string) {
  return (
    text
      // Rozdelí napríklad "ľ" alebo "á" na písmeno a diakritickú značku.
      .normalize("NFD")
      // Odstráni oddelené diakritické značky.
      .replace(/[\u0300-\u036f]/g, "")
      // Prevedie celý text na malé písmená.
      .toLowerCase()
  );
}

export default function HomeScreen() {
  const router = useRouter();

  const [filterValue, setFilterValue] = useState("");
  const [viewingHistory, setViewingHistory] = useState<HistoryItem[]>([]);
  const [showAllHistory, setShowAllHistory] = useState(false);

  // Odstránime medzery na okrajoch a pripravíme text na porovnávanie.
  const searchText = normalizeText(filterValue.trim());

  // Vyhľadávanie sa spustí až po zadaní aspoň dvoch znakov.
  const isSearching = searchText.length >= 2;

  // Z katalógu ponecháme iba algoritmy, ktoré obsahujú hľadaný text.
  const filteredAlgorithms = isSearching
    ? algorithmSearchItems.filter((algorithm) => {
        // Názov, kategóriu a kľúčové slová spojíme do jedného textu.
        const algorithmText = [
          algorithm.title,
          algorithm.category,
          ...algorithm.keywords,
        ].join(" ");

        // includes() overí, či sa hľadaný text nachádza v algoritme.
        return normalizeText(algorithmText).includes(searchText);
      })
    : // Ak používateľ ešte nehľadá, výsledky ostanú prázdne.
      [];

  const visibleHistory = showAllHistory
    ? viewingHistory
    : viewingHistory.slice(0, 2);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      async function refreshHistory() {
        const latestHistory = await loadViewingHistory();

        if (isActive) {
          setViewingHistory(latestHistory);
        }
      }

      refreshHistory();

      return () => {
        isActive = false;
      };
    }, []),
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Input
          clearable
          placeholder="Vyhľadaj postup, algoritmus..."
          onChangeText={setFilterValue}
          value={filterValue}
        />

        {/* Pri vyhľadávaní zobrazíme výsledky, inak obsah domovskej stránky. */}
        {isSearching ? (
          <View style={styles.searchResults}>
            <Text style={styles.resultsTitle}>
              Výsledky ({filteredAlgorithms.length})
            </Text>

            {filteredAlgorithms.length > 0 ? (
              // Pre každý nájdený algoritmus vytvoríme jednu kartu.
              filteredAlgorithms.map((algorithm) => (
                <SmallCard
                  key={`${algorithm.title}-${algorithm.category}`}
                  title={algorithm.title}
                  subtitle={algorithm.category}
                  iconName="git-network-sharp"
                  iconBackgroundColor="#0868C4"
                  trailingIcon="chevron-forward"
                  trailingIconColor="#7A8492"
                  onPress={() => router.push(algorithm.route)}
                />
              ))
            ) : (
              <Text style={styles.emptyText}>
                Nenašli sa žiadne algoritmy. Skúste iný výraz.
              </Text>
            )}
          </View>
        ) : (
          <>
            <View style={styles.primaryOptionsContainer}>
              <Ionicons name="heart-circle" size={24} color="#075296" />
              <Text style={styles.primaryOption}>Odporúčania</Text>
            </View>

            <BaseCard
              topText="Aktuálne"
              title="ERC 2025"
              description="European Resuscitation Council"
              iconName="pulse"
              iconSize={44}
              onPress={() => router.push("/algorithms")}
            />

            <View style={styles.listSection}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                  <Ionicons name="time-outline" size={22} color="#6B7483" />
                  <Text style={styles.sectionTitle}>História</Text>
                </View>

                {viewingHistory.length > 2 ? (
                  <Pressable
                    onPress={() => setShowAllHistory((current) => !current)}
                    style={({ pressed }) =>
                      pressed && styles.sectionActionPressed
                    }
                  >
                    <Text style={styles.sectionAction}>
                      {showAllHistory ? "Zobraziť menej" : "Zobraziť všetko"}
                    </Text>
                  </Pressable>
                ) : null}
              </View>

              {visibleHistory.length > 0 ? (
                visibleHistory.map((historyItem) => (
                  <SmallCard
                    key={historyItem.route}
                    title={historyItem.title}
                    subtitle={`ERC 2025 · ${historyItem.category}`}
                    iconName="git-network-sharp"
                    iconBackgroundColor="#0868C4"
                    trailingIcon="chevron-forward"
                    trailingIconColor="#7A8492"
                    onPress={() => router.push(historyItem.route as Href)}
                  />
                ))
              ) : (
                <Text style={styles.emptyText}>História je zatiaľ prázdna.</Text>
              )}
            </View>
          </>
        )}
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
  searchResults: {
    gap: 8,
  },
  resultsTitle: {
    paddingVertical: 6,
    color: "#10243C",
    fontSize: 18,
    fontWeight: "800",
  },
  emptyText: {
    paddingVertical: 30,
    color: "#6B7483",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
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
  sectionActionPressed: {
    opacity: 0.7,
  },
});
