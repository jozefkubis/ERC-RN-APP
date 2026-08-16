import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePathname } from "expo-router";
import { useEffect } from "react";

// Názov kľúča, pod ktorým je história uložená v AsyncStorage.
export const HISTORY_KEY = "viewing_history";

// História obsahuje najviac desať naposledy otvorených algoritmov.
const MAX_HISTORY_ITEMS = 10;

// Tvar jednej uloženej položky histórie.
export type HistoryItem = {
  route: string;
  viewedAt: string;
};

function isStoredHistoryItem(item: unknown): item is HistoryItem {
  if (typeof item !== "object" || item === null) {
    return false;
  }

  const storedItem = item as Record<string, unknown>;

  return (
    typeof storedItem.route === "string" &&
    typeof storedItem.viewedAt === "string"
  );
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

    // Staršie záznamy môžu obsahovať aj title a category. Pri načítaní
    // ponecháme iba stabilnú route a čas otvorenia.
    return parsedHistory.filter(isStoredHistoryItem).map((item) => ({
      route: item.route,
      viewedAt: item.viewedAt,
    }));
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

async function addToHistory(route: string): Promise<void> {
  const currentHistory = await loadHistory();
  const historyWithoutDuplicate = removeDuplicate(currentHistory, route);

  const newHistoryItem: HistoryItem = {
    route,
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

      await addToHistory(pathname);
    }

    updateHistory();
  }, [pathname]);

  return null;
}
