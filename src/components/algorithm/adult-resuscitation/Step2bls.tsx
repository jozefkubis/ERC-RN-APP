import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Privolajte pomoc",
    description:
      "Spustite poplach a čo najskôr zapojte ďalších ľudí alebo resuscitačný tím.",
    callTitle: "Privolajte pomoc",
    callDescription: "Spustite poplach",
    helpTitle: "Bezodkladne privolajte pomoc",
    helpOptions: [
      {
        title: "Mimo nemocnice",
        items: [
          "Telefón na hlasný odposluch",
          "Skontrolujte dýchanie",
          "Ak si nie ste istí, operátor vám pomôže",
          "Riaďte sa pokynmi operátora",
        ],
      },
      {
        title: "V nemocnici",
        items: [
          "Skontrolujte dýchanie a známky života",
          "Požiadajte o AED alebo defibrilátor",
          "Privolajte resuscitačný tím",
        ],
      },
    ],
    infoTitle: "Po privolaní pomoci",
    infoDescription:
      "Počas čakania na spojenie alebo príchod pomoci zhodnoťte dýchanie. Pri pochybnostiach pokračujte ako pri zastavení obehu.",
  },
  en: {
    badge: "Step 2",
    title: "Call for help",
    description:
      "Activate the emergency response and involve other people or the resuscitation team as soon as possible.",
    callTitle: "Call for help",
    callDescription: "Activate emergency response",
    helpTitle: "Call for help immediately",
    helpOptions: [
      {
        title: "Out of hospital",
        items: [
          "Put the phone on speaker",
          "Check breathing",
          "If you are unsure, the dispatcher will help",
          "Follow the dispatcher's instructions",
        ],
      },
      {
        title: "In hospital",
        items: [
          "Check breathing and signs of life",
          "Ask for an AED or defibrillator",
          "Call the resuscitation team",
        ],
      },
    ],
    infoTitle: "After calling for help",
    infoDescription:
      "While waiting for connection or help to arrive, assess breathing. If in doubt, continue as for cardiac arrest.",
  },
};

const cardColors = {
  light: {
    callBackground: "#FFFFFF",
    callBorder: "#075296",
    callIcon: "#ED1C24",
    callTitle: "#075296",
    callDescription: "#10243C",
    callArrow: "#075296",
    helpBackground: "#F8EFCF",
    helpBorder: "#E5D7AC",
    helpTitle: "#075296",
    helpItem: "#10243C",
    helpBullet: "#075296",
  },
  dark: {
    callBackground: "#101B2B",
    callBorder: "#2F7FBE",
    callIcon: "#B7151B",
    callTitle: "#B9DDFF",
    callDescription: "#F5F8FC",
    callArrow: "#B9DDFF",
    helpBackground: "#252312",
    helpBorder: "#5B5124",
    helpTitle: "#B9DDFF",
    helpItem: "#F5F8FC",
    helpBullet: "#B9DDFF",
  },
};

export default function Step2bls() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = cardColors[themeMode];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
      />

      <Pressable
        onPress={() => router.push("/algorithms/adult-resuscitation/bls/step3")}
        style={({ pressed }) => [
          styles.callCard,
          {
            borderColor: colors.callBorder,
            backgroundColor: colors.callBackground,
          },
          pressed && styles.pressed,
        ]}
      >
        <View style={[styles.callIcon, { backgroundColor: colors.callIcon }]}>
          <Ionicons name="call" size={26} color="#FFFFFF" />
        </View>
        <View style={styles.callTextContainer}>
          <Text style={[styles.callTitle, { color: colors.callTitle }]}>
            {text.callTitle}
          </Text>
          <Text
            style={[styles.callDescription, { color: colors.callDescription }]}
          >
            {text.callDescription}
          </Text>
        </View>
        <Ionicons name="arrow-forward" size={22} color={colors.callArrow} />
      </Pressable>

      <View
        style={[
          styles.helpCard,
          {
            borderColor: colors.helpBorder,
            backgroundColor: colors.helpBackground,
          },
        ]}
      >
        <Text style={[styles.helpCardTitle, { color: colors.helpTitle }]}>
          {text.helpTitle}
        </Text>
        <View style={styles.helpColumns}>
          {text.helpOptions.map((option) => (
            <View key={option.title} style={styles.helpColumn}>
              <Text style={[styles.helpColumnTitle, { color: colors.helpTitle }]}>
                {option.title}
              </Text>
              {option.items.map((item) => (
                <View key={item} style={styles.helpItem}>
                  <View
                    style={[
                      styles.helpBullet,
                      { backgroundColor: colors.helpBullet },
                    ]}
                  />
                  <Text style={[styles.helpItemText, { color: colors.helpItem }]}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="call-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  callCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  callIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  callTextContainer: {
    flex: 1,
    gap: 4,
  },
  callTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  callDescription: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 19,
  },
  helpCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  helpCardTitle: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
    textAlign: "center",
  },
  helpColumns: {
    width: "100%",
    flexDirection: "row",
    gap: 14,
  },
  helpColumn: {
    flex: 1,
    gap: 8,
  },
  helpColumnTitle: {
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 19,
  },
  helpItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  helpBullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 7,
  },
  helpItemText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
