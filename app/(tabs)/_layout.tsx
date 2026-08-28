import { useSettings } from "@/src/context/settings-context";
import {
  getHeaderOptions,
  navigationColors,
} from "@/src/navigation/screenOptions";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type { ComponentProps } from "react";

type TabIconName = ComponentProps<typeof Ionicons>["name"];

const icons: Record<string, TabIconName> = {
  index: "home",
  algorithms: "git-network-sharp",
  settings: "settings",
};

export default function TabsLayout() {
  const { language, themeMode } = useSettings();
  const colors = navigationColors[themeMode];
  const text = tabText[language];

  return (
    <Tabs
      screenOptions={({ route }) => ({
        ...getHeaderOptions(themeMode),
        animation: "shift",
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={icons[route.name] ?? "ellipse"}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: text.home,
          tabBarLabel: text.home,
        }}
      />
      <Tabs.Screen
        name="algorithms"
        options={{
          title: text.algorithms,
          tabBarLabel: text.algorithms,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: text.settings,
          tabBarLabel: text.settings,
          // href: null, // Disable navigation to this tab
        }}
      />
    </Tabs>
  );
}

const tabText = {
  sk: {
    home: "Domov",
    algorithms: "Algoritmy",
    settings: "Nastavenia",
  },
  en: {
    home: "Home",
    algorithms: "Algorithms",
    settings: "Settings",
  },
};
