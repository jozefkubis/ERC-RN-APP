import BaseCard from "@/src/components/ui/BaseCard";
import Input from "@/src/components/ui/Input";
import SmallCard from "@/src/components/ui/SmallCard";
import {
  loadHistory,
  type HistoryItem,
} from "@/src/components/utils/History";
import { useSettings } from "@/src/context/settings-context";
import {
  getAlgorithmSearchCategory,
  getAlgorithmSearchItems,
} from "@/src/data/algorithm-search";
import { getAlgorithmScreenTitle } from "@/src/navigation/algorithmScreenTitle";
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

const homeText = {
  sk: {
    searchPlaceholder: "Vyhľadaj postup, algoritmus...",
    clearSearch: "Vymazať text",
    resultsTitle: "Výsledky",
    noResults: "Nenašli sa žiadne algoritmy. Skúste iný výraz.",
    recommendations: "Odporúčania",
    currentBadge: "Aktuálne",
    ercDescription: "European Resuscitation Council",
    historyTitle: "História",
    showAll: "Zobraziť všetko",
    showLess: "Zobraziť menej",
    emptyHistory: "História je zatiaľ prázdna.",
  },
  en: {
    searchPlaceholder: "Search procedure, algorithm...",
    clearSearch: "Clear text",
    resultsTitle: "Results",
    noResults: "No algorithms found. Try another search term.",
    recommendations: "Recommendations",
    currentBadge: "Current",
    ercDescription: "European Resuscitation Council",
    historyTitle: "History",
    showAll: "Show all",
    showLess: "Show less",
    emptyHistory: "History is empty for now.",
  },
};

const homeColors = {
  light: {
    background: "#F7F8FC",
    statusBar: "dark-content" as const,
    title: "#10243C",
    muted: "#6B7483",
    primary: "#075296",
    historyIcon: "#6B7483",
    trailingIcon: "#7A8492",
    cardIcon: "#0868C4",
  },
  dark: {
    background: "#07111F",
    statusBar: "light-content" as const,
    title: "#F5F8FC",
    muted: "#AAB6C7",
    primary: "#77B7F2",
    historyIcon: "#AAB6C7",
    trailingIcon: "#AAB6C7",
    cardIcon: "#0B5EA8",
  },
};

function normalizeText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function HomeScreen() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = homeText[language];
  const colors = homeColors[themeMode];
  const algorithmSearchItems = getAlgorithmSearchItems(language);

  const [filterValue, setFilterValue] = useState("");
  const [viewingHistory, setViewingHistory] = useState<HistoryItem[]>([]);
  const [showAllHistory, setShowAllHistory] = useState(false);

  const searchText = normalizeText(filterValue.trim());
  const isSearching = searchText.length >= 2;

  const filteredAlgorithms = isSearching
    ? algorithmSearchItems.filter((algorithm) => {
        const algorithmText = [
          algorithm.title,
          algorithm.category,
          ...algorithm.keywords,
        ].join(" ");

        return normalizeText(algorithmText).includes(searchText);
      })
    : [];

  const localizedHistory = viewingHistory.map((historyItem) => {
    const algorithm = algorithmSearchItems.find(
      (item) => item.route === historyItem.route,
    );

    return {
      ...historyItem,
      title:
        algorithm?.title ??
        getAlgorithmScreenTitle(historyItem.route.replace(/^\//, ""), language),
      category: getAlgorithmSearchCategory(historyItem.route, language),
    };
  });

  const visibleHistory = showAllHistory
    ? localizedHistory
    : localizedHistory.slice(0, 2);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      async function refreshHistory() {
        const latestHistory = await loadHistory();

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
      <StatusBar barStyle={colors.statusBar} />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Input
          clearable
          clearAccessibilityLabel={text.clearSearch}
          placeholder={text.searchPlaceholder}
          onChangeText={setFilterValue}
          value={filterValue}
          themeMode={themeMode}
        />

        {isSearching ? (
          <View style={styles.searchResults}>
            <Text style={[styles.resultsTitle, { color: colors.title }]}>
              {text.resultsTitle} ({filteredAlgorithms.length})
            </Text>

            {filteredAlgorithms.length > 0 ? (
              filteredAlgorithms.map((algorithm) => (
                <SmallCard
                  key={`${algorithm.title}-${algorithm.category}`}
                  title={algorithm.title}
                  subtitle={algorithm.category}
                  iconName="git-network-sharp"
                  iconBackgroundColor={colors.cardIcon}
                  trailingIcon="chevron-forward"
                  trailingIconColor={colors.trailingIcon}
                  themeMode={themeMode}
                  onPress={() => router.push(algorithm.route)}
                />
              ))
            ) : (
              <Text style={[styles.emptyText, { color: colors.muted }]}>
                {text.noResults}
              </Text>
            )}
          </View>
        ) : (
          <>
            <View style={styles.primaryOptionsContainer}>
              <Ionicons name="heart-circle" size={24} color={colors.primary} />
              <Text style={[styles.primaryOption, { color: colors.title }]}>
                {text.recommendations}
              </Text>
            </View>

            <BaseCard
              topText={text.currentBadge}
              title="ERC 2025"
              description={text.ercDescription}
              iconName="pulse"
              iconSize={44}
              themeMode={themeMode}
              onPress={() => router.push("/algorithms")}
            />

            <View style={styles.listSection}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                  <Ionicons
                    name="time-outline"
                    size={22}
                    color={colors.historyIcon}
                  />
                  <Text style={[styles.sectionTitle, { color: colors.title }]}>
                    {text.historyTitle}
                  </Text>
                </View>

                {viewingHistory.length > 2 ? (
                  <Pressable
                    onPress={() => setShowAllHistory((current) => !current)}
                    style={({ pressed }) =>
                      pressed && styles.sectionActionPressed
                    }
                  >
                    <Text style={[styles.sectionAction, { color: colors.primary }]}>
                      {showAllHistory ? text.showLess : text.showAll}
                    </Text>
                  </Pressable>
                ) : null}
              </View>

              {visibleHistory.length > 0 ? (
                visibleHistory.map((historyItem) => (
                  <SmallCard
                    key={historyItem.route}
                    title={historyItem.title}
                    subtitle={`ERC 2025 - ${historyItem.category}`}
                    iconName="git-network-sharp"
                    iconBackgroundColor={colors.cardIcon}
                    trailingIcon="chevron-forward"
                    trailingIconColor={colors.trailingIcon}
                    themeMode={themeMode}
                    onPress={() => router.push(historyItem.route as Href)}
                  />
                ))
              ) : (
                <Text style={[styles.emptyText, { color: colors.muted }]}>
                  {text.emptyHistory}
                </Text>
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
    fontSize: 18,
    fontWeight: "800",
  },
  emptyText: {
    paddingVertical: 30,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  primaryOptionsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  primaryOption: {
    padding: 15,
    fontSize: 20,
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
    fontSize: 20,
    fontWeight: "800",
  },
  sectionAction: {
    fontSize: 13,
    fontWeight: "700",
  },
  sectionActionPressed: {
    opacity: 0.7,
  },
});
