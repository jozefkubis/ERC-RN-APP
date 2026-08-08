import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePathname } from "expo-router";
import { useEffect } from "react";

import { algorithmSearchItems } from "@/src/data/algorithm-search";
import { getAlgorithmScreenTitle } from "@/src/navigation/algorithmScreenTitle";

// Nazov kluca, pod ktorym bude historia ulozena v AsyncStorage.
export const HISTORY_KEY = "viewing_history";

// Drzime iba poslednych par poloziek, aby historia zbytocne nerastla donekonecna.
const MAX_HISTORY_ITEMS = 10;

// Tvar jednej ulozenej polozky historie.
export type HistoryItem = {
  title: string;
  category: string;
  route: string;
  viewedAt: string;
};

// Skusi najst citatelny nazov a kategoriu pre aktualnu route.
function getAlgorithmForPathname(pathname: string) {
  return algorithmSearchItems.find((algorithm) => algorithm.route === pathname);
}

function getTitleForPathname(pathname: string) {
  const routeName = pathname.replace(/^\//, "");
  return getAlgorithmScreenTitle(routeName);
}

export async function loadViewingHistory() {
  try {
    const savedHistory = await AsyncStorage.getItem(HISTORY_KEY);
    return savedHistory ? (JSON.parse(savedHistory) as HistoryItem[]) : [];
  } catch {
    return [];
  }
}

export default function History() {
  // usePathname sa zmeni vzdy, ked Expo Router prejde na inu obrazovku.
  const pathname = usePathname();

  useEffect(() => {
    async function updateHistory() {
      // Historii teraz sledujeme iba pre konkretne algoritmove obrazovky.
      if (!pathname.startsWith("/algorithms/")) {
        return;
      }

      const algorithm = getAlgorithmForPathname(pathname);

      // Najprv nacitame doteraz ulozenu historiu zo zariadenia.
      const parsedHistory = await loadViewingHistory();

      // Vytvorime novu polozku pre aktualne otvorenu obrazovku.
      const historyItem: HistoryItem = {
        title: algorithm?.title ?? getTitleForPathname(pathname),
        category: algorithm?.category ?? "ERC 2025",
        route: pathname,
        viewedAt: new Date().toISOString(),
      };

      // Aktualnu obrazovku dame na zaciatok a odstranime jej starsi duplikat.
      const nextHistory = [
        historyItem,
        ...parsedHistory.filter((item) => item.route !== pathname),
      ].slice(0, MAX_HISTORY_ITEMS);

      // Ulozime novu historiu do zariadenia.
      await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory));
    }

    updateHistory();
  }, [pathname]);

  return null;
}
