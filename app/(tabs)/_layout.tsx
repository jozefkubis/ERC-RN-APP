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
          tabBarLabel: "Home",
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
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
        }}
      />
    </Tabs>
  );
}
