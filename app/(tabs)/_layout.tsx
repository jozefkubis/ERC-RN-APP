import {
  defaultHeaderOptions,
  navigationColors,
} from "@/src/navigation/screenOptions";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type { ComponentProps } from "react";

type TabIconName = ComponentProps<typeof Ionicons>["name"];

const icons: Record<string, TabIconName> = {
  index: "home",
  algorithms: "git-network",
  favorites: "star",
  settings: "settings",
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        ...defaultHeaderOptions,
        animation: "shift",
        tabBarActiveTintColor: navigationColors.primary,
        tabBarInactiveTintColor: navigationColors.muted,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: navigationColors.border,
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
          title: "ERC 2025",
          tabBarLabel: "Domov",
        }}
      />
      <Tabs.Screen
        name="algorithms"
        options={{
          title: "Algoritmy",
          tabBarLabel: "Algoritmy",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Obľúbené",
          tabBarLabel: "Favorites",
          href: null, // Disable navigation to this tab
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Nastavenia",
          tabBarLabel: "Nastavenia",
          href: null, // Disable navigation to this tab
        }}
      />
    </Tabs>
  );
}
