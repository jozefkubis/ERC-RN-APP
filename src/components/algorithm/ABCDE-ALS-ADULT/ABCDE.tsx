import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const pageText = {
  sk: {
    airway: "A - Dýchacie cesty",
    breathing: "B - Dýchanie",
    circulation: "C - Krovný obeh",
    disability: "D - Neurologický stav",
    exposure: "E - Expozícia",
  },
  en: {
    airway: "A - Airway",
    breathing: "B - Breathing",
    circulation: "C - Circulation",
    disability: "D - Disability",
    exposure: "E - Exposure",
  },
};

const cardColors = {
  light: {
    background: "#F7EED6",
    text: "#10243C",
    iconBackground: "#FFFFFF",
    airway: "#1215da",
    breathing: "#bd1010",
    circulation: "#1215da",
    disability: "#bd1010",
    exposure: "#1215da",
  },
  dark: {
    background: "#2B2416",
    text: "#F5F8FC",
    iconBackground: "#3A301B",
    airway: "#0a0c8a",
    breathing: "#8a0a0a",
    circulation: "#0a0c8a",
    disability: "#8a0a0a",
    exposure: "#0a0c8a",
  },
};

export default function ABCDE() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = cardColors[themeMode];

  return (
    <View>
      <Pressable
        onPress={() => router.push("algorithms/abcde-als-adult/airway")}
      >
        <Text>{text.airway}</Text>
      </Pressable>
      <Pressable onPress={() => console.log("Breathing pressed")}>
        <Text>{text.breathing}</Text>
      </Pressable>
      <Pressable onPress={() => console.log("Circulation pressed")}>
        <Text>{text.circulation}</Text>
      </Pressable>
      <Pressable onPress={() => console.log("Disability pressed")}>
        <Text>{text.disability}</Text>
      </Pressable>
      <Pressable onPress={() => console.log("Exposure pressed")}>
        <Text>{text.exposure}</Text>
      </Pressable>
    </View>
  );
}
