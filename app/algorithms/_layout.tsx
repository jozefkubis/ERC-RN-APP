// app/algorithms/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function AlgorithmsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="adult-resuscitation/index"
        options={{
          title: "Resuscitácia dospelých",
          headerStyle: { backgroundColor: "#F7F8FC" },
          headerTintColor: "#10243C",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="epals/index"
        options={{
          title: "EPALS",
          headerStyle: { backgroundColor: "#F7F8FC" },
          headerTintColor: "#10243C",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="adult-resuscitation/als"
        options={{
          title: "Rozšírená resuscitácia",
          headerStyle: { backgroundColor: "#F7F8FC" },
          headerTintColor: "#10243C",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="adult-resuscitation/als/step1"
        options={{
          title: "Rozšírená resuscitácia",
          headerStyle: { backgroundColor: "#F7F8FC" },
          headerTintColor: "#10243C",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="adult-resuscitation/als/step2"
        options={{
          title: "Rozšírená resuscitácia",
          headerStyle: { backgroundColor: "#F7F8FC" },
          headerTintColor: "#10243C",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          animation: "slide_from_right",
        }}
      />
    </Stack>
  );
}
