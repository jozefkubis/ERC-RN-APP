import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePathname } from "expo-router";
import { useEffect } from "react";

import { algorithmSearchItems } from "@/src/data/algorithm-search";
import { getAlgorithmScreenTitle } from "@/src/navigation/algorithmScreenTitle";

// Názov kľúča, pod ktorým je história uložená v AsyncStorage.
export const HISTORY_KEY = "viewing_history";

// História obsahuje najviac desať naposledy otvorených algoritmov.
const MAX_HISTORY_ITEMS = 10;

// Tvar jednej uloženej položky histórie.
export type HistoryItem = {
  title: string;
  category: string;
  route: string;
  viewedAt: string;
};

type AlgorithmForHistory = {
  title: string;
  category: string;
  route: string;
};

// Skúsi nájsť čitateľný názov a kategóriu pre aktuálnu route.
function getAlgorithmForPathname(pathname: string) {
  return algorithmSearchItems.find((algorithm) => algorithm.route === pathname);
}

function getTitleForPathname(pathname: string) {
  const routeName = pathname.replace(/^\//, "");
  return getAlgorithmScreenTitle(routeName);
}

export async function loadHistory(): Promise<HistoryItem[]> {
  try {
    const savedHistory = await AsyncStorage.getItem(HISTORY_KEY);

    if (savedHistory === null) {
      return [];
    }

    const parsedHistory: unknown = JSON.parse(savedHistory);

    // Poškodené alebo neplatné dáta nepoužijeme ako históriu.
    if (!Array.isArray(parsedHistory)) {
      return [];
    }

    return parsedHistory as HistoryItem[];
  } catch {
    return [];
  }
}

async function saveHistory(history: HistoryItem[]): Promise<void> {
  const serializedHistory = JSON.stringify(history);
  await AsyncStorage.setItem(HISTORY_KEY, serializedHistory);
}

function removeDuplicate(history: HistoryItem[], route: string): HistoryItem[] {
  // Starší záznam rovnakej obrazovky odstránime pred jej opätovným pridaním.
  const historyWithoutDuplicate = history.filter((item) => {
    return item.route !== route;
  });

  return historyWithoutDuplicate;
}

async function addToHistory(algorithm: AlgorithmForHistory): Promise<void> {
  const currentHistory = await loadHistory();
  const historyWithoutDuplicate = removeDuplicate(
    currentHistory,
    algorithm.route,
  );

  const newHistoryItem: HistoryItem = {
    title: algorithm.title,
    category: algorithm.category,
    route: algorithm.route,
    viewedAt: new Date().toISOString(),
  };

  // Najnovšie otvorený algoritmus patrí vždy na začiatok.
  const historyWithNewestFirst = [newHistoryItem, ...historyWithoutDuplicate];
  const limitedHistory = historyWithNewestFirst.slice(0, MAX_HISTORY_ITEMS);

  await saveHistory(limitedHistory);
}

export default function History() {
  // usePathname sa zmení vždy, keď Expo Router prejde na inú obrazovku.
  const pathname = usePathname();

  useEffect(() => {
    async function updateHistory() {
      // Históriu sledujeme iba pre konkrétne algoritmové obrazovky.
      if (!pathname.startsWith("/algorithms/")) {
        return;
      }

      const algorithm = getAlgorithmForPathname(pathname);
      const algorithmForHistory: AlgorithmForHistory = {
        title: algorithm?.title ?? getTitleForPathname(pathname),
        category: algorithm?.category ?? "ERC 2025",
        route: pathname,
      };

      await addToHistory(algorithmForHistory);
    }

    updateHistory();
  }, [pathname]);

  return null;
}
