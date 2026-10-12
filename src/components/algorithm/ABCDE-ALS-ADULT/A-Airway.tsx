import React from "react";
import { Text, View } from "react-native";

const pageText = {
    sk: {
        badge: "A",
        title: "Spriechodnenie a zabezpečenie dýchacích ciest",
        diagnosis: [
            "Zvukové fenomény",
            "Poloha hlavy",
            "Cudzie telesá",
            "Opuch",
            "Trauma",
            "Paradoxné dýchanie"
        ],
        intervention: [
            "Manévre",
            "Vyduchovod",
            "Odsatie",
            "Otočenie na bok",
            "Zaistenie (SGA, OTI)",
            "Oxygenoterapia 15 l/min"
        ],
        goal: [
            "Priechodné dýchacie cesty"
        ]
        
    },
    en: {
        badge: "A",
        diagnosis: [
            "Audible phenomena",
            "Head position",
            "Foreign bodies",
            "Swelling",
            "Trauma",
            "Paradoxical breathing"
        ],
        intervention: [
            "Maneuvers",
            "Airway adjunct",
            "Suction",
            "Turning to the side",
            "Securing (SGA, OTI)",
            "Oxygen therapy 15 l/min"
        ],
        goal: [
            "Patent airway"
        ],
        title: "Airway management",
    }
}

export default function AAirway() {
  return (
    <View>
      <Text>A-Airway</Text>
    </View>
  );
}
