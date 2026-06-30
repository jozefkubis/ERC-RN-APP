import { defaultHeaderOptions } from "@/src/navigation/screenOptions";
import { Stack } from "expo-router";
import React from "react";

export default function AlgorithmsLayout() {
  return (
    <Stack
      screenOptions={{
        ...defaultHeaderOptions,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="adult-resuscitation/index"
        options={{ title: "Resuscitácia dospelých" }}
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
    </Stack>
  );
}
