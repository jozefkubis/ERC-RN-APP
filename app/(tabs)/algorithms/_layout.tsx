import { defaultHeaderOptions } from "@/src/navigation/screenOptions";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, useRouter } from "expo-router";
import React from "react";

export default function AlgorithmsLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        ...defaultHeaderOptions,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="adult-resuscitation/index"
        options={{
          title: "Resuscitácia dospelých",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              onPress={() => router.back()}
            />
          ),
        }}
      />
      <Stack.Screen name="epals/index" options={{ title: "EPALS" }} />
      <Stack.Screen
        name="adult-resuscitation/als/index"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="adult-resuscitation/als/step1"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="adult-resuscitation/als/step2"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="adult-resuscitation/als/step3"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="adult-resuscitation/als/step4defib"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="adult-resuscitation/als/step4nondefib"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="adult-resuscitation/als/4h4t"
        options={{ title: "4H / 4T" }}
      />
      <Stack.Screen
        name="adult-resuscitation/als/rosc"
        options={{ title: "ROSC" }}
      />
    </Stack>
  );
}
