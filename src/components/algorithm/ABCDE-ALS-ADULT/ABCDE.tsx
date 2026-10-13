import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type AbcdeSection = {
  letter: string;
  title: string;
  iconName: IconName;
  color: "blue" | "red";
  route?:
    | "/algorithms/abcde-als-adult/airway"
    | "/algorithms/abcde-als-adult/breathing"
    | "/algorithms/abcde-als-adult/circulation"
    | "/algorithms/abcde-als-adult/disability"
    | "/algorithms/abcde-als-adult/exposure";
};

const pageText = {
  sk: {
    open: "Otvoriť",
    comingSoon: "Pripravujeme",
    sections: [
      {
        letter: "A",
        title: "Dýchacie cesty",
        iconName: "medkit-outline",
        color: "blue",
        route: "/algorithms/abcde-als-adult/airway",
      },
      {
        letter: "B",
        title: "Dýchanie",
        iconName: "fitness-outline",
        color: "red",
        route: "/algorithms/abcde-als-adult/breathing",
      },
      {
        letter: "C",
        title: "Krvný obeh",
        iconName: "heart-outline",
        color: "blue",
        route: "/algorithms/abcde-als-adult/circulation",
      },
      {
        letter: "D",
        title: "Neurologický stav",
        iconName: "body-outline",
        color: "red",
        route: "/algorithms/abcde-als-adult/disability",
      },
      {
        letter: "E",
        title: "Expozícia",
        iconName: "scan-outline",
        color: "blue",
        route: "/algorithms/abcde-als-adult/exposure",
      },
    ] satisfies AbcdeSection[],
  },
  en: {
    open: "Open",
    comingSoon: "Coming soon",
    sections: [
      {
        letter: "A",
        title: "Airway",
        iconName: "medkit-outline",
        color: "blue",
        route: "/algorithms/abcde-als-adult/airway",
      },
      {
        letter: "B",
        title: "Breathing",
        iconName: "fitness-outline",
        color: "red",
        route: "/algorithms/abcde-als-adult/breathing",
      },
      {
        letter: "C",
        title: "Circulation",
        iconName: "heart-outline",
        color: "blue",
        route: "/algorithms/abcde-als-adult/circulation",
      },
      {
        letter: "D",
        title: "Disability",
        iconName: "body-outline",
        color: "red",
        route: "/algorithms/abcde-als-adult/disability",
      },
      {
        letter: "E",
        title: "Exposure",
        iconName: "scan-outline",
        color: "blue",
        route: "/algorithms/abcde-als-adult/exposure",
      },
    ] satisfies AbcdeSection[],
  },
};

const cardColors = {
  light: {
    background: "#FFFFFF",
    border: "#CBD3DF",
    title: "#10243C",
    status: "#5C6574",
    blue: "#075296",
    red: "#C8141B",
  },
  dark: {
    background: "#101B2B",
    border: "#31435A",
    title: "#F5F8FC",
    status: "#AAB6C7",
    blue: "#0E4A80",
    red: "#9F151B",
  },
};

export default function ABCDE() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = cardColors[themeMode];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      {text.sections.map((section) => {
        const isAvailable = Boolean(section.route);
        const accentColor = colors[section.color];

        return (
          <Pressable
            key={section.letter}
            accessibilityRole="button"
            accessibilityState={{ disabled: !isAvailable }}
            disabled={!isAvailable}
            onPress={() => {
              if (section.route) {
                router.push(section.route);
              }
            }}
            style={({ pressed }) => [
              styles.card,
              {
                backgroundColor: colors.background,
                borderColor: colors.border,
              },
              pressed && styles.cardPressed,
            ]}
          >
            <View
              style={[styles.letterPanel, { backgroundColor: accentColor }]}
            >
              <Text style={styles.letter}>{section.letter}</Text>
              <Ionicons name={section.iconName} size={25} color="#FFFFFF" />
            </View>

            <View style={styles.content}>
              <Text selectable style={[styles.title, { color: colors.title }]}>
                {section.title}
              </Text>
              <Text
                selectable
                style={[styles.status, { color: colors.status }]}
              >
                {isAvailable ? text.open : text.comingSoon}
              </Text>
            </View>

            <Ionicons
              name={isAvailable ? "arrow-forward" : "lock-closed-outline"}
              size={22}
              color={isAvailable ? accentColor : colors.status}
            />
          </Pressable>
        );
      })}
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 108,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingRight: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
  letterPanel: {
    width: 78,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  },
  letter: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "300",
    lineHeight: 53,
  },
  content: {
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  status: {
    fontSize: 13,
    fontWeight: "600",
  },
});
