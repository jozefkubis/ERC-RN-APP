import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Zhodnotenie rytmu",
    description:
      "Prerušte stláčanie iba na nevyhnutný čas a zvoľte ďalší postup podľa rytmu alebo klinického výsledku.",
    rhythmOptions: [
      {
        title: "Defibrilovateľný rytmus",
        subtitle: "KF / bezpulzová KT",
        iconName: "flash-sharp" as const,
        route: "/algorithms/epals/pals/step3defib" as const,
        variant: "primary" as const,
      },
      {
        title: "Nedefibrilovateľný rytmus",
        subtitle: "Bradykardia, asystólia, BEA",
        iconName: "flash-off-sharp" as const,
        route: "/algorithms/epals/pals/step3nondefib" as const,
        variant: "light" as const,
      },
    ],
    roscTitle: "ROSC",
    roscDescription: "Obnovenie spontánneho krvného obehu.",
    terminationTitle: "Ukončenie resuscitácie",
    terminationDescription: "Prejdite na ukončenie resuscitácie.",
  },
  en: {
    badge: "Step 2",
    title: "Rhythm assessment",
    description:
      "Interrupt compressions only for the minimum time needed and choose the next action based on rhythm or clinical outcome.",
    rhythmOptions: [
      {
        title: "Shockable rhythm",
        subtitle: "VF / pulseless VT",
        iconName: "flash-sharp" as const,
        route: "/algorithms/epals/pals/step3defib" as const,
        variant: "primary" as const,
      },
      {
        title: "Non-shockable rhythm",
        subtitle: "Bradycardia, asystole, PEA",
        iconName: "flash-off-sharp" as const,
        route: "/algorithms/epals/pals/step3nondefib" as const,
        variant: "light" as const,
      },
    ],
    roscTitle: "ROSC",
    roscDescription: "Return of spontaneous circulation.",
    terminationTitle: "Termination of resuscitation",
    terminationDescription: "Continue to termination of resuscitation.",
  },
};

const cardColors = {
  light: {
    primaryCardBackground: "#075296",
    primaryCardBorder: "#075296",
    primaryText: "#FFFFFF",
    primaryMutedText: "#D7E9F8",
    lightCardBackground: "#FFFFFF",
    lightCardBorder: "#CBD3DF",
    lightTitle: "#10243C",
    lightSubtitle: "#075296",
    lightIconBackground: "#E4EFFD",
    roscBackground: "#D7EDFD",
    roscBorder: "#8EC3F0",
    roscTitle: "#075296",
    roscDescription: "#28506F",
    outcomeBackground: "#FFFFFF",
    outcomeBorder: "#CBD3DF",
    outcomeIcon: "#7A8492",
    outcomeTitle: "#10243C",
    outcomeDescription: "#5C6574",
    arrowLight: "#7A8492",
    arrowRosc: "#075296",
  },
  dark: {
    primaryCardBackground: "#0E4A80",
    primaryCardBorder: "#2F7FBE",
    primaryText: "#FFFFFF",
    primaryMutedText: "#D7E9F8",
    lightCardBackground: "#101B2B",
    lightCardBorder: "#31435A",
    lightTitle: "#F5F8FC",
    lightSubtitle: "#B9DDFF",
    lightIconBackground: "#164C80",
    roscBackground: "#102A3F",
    roscBorder: "#2F7FBE",
    roscTitle: "#B9DDFF",
    roscDescription: "#AAB6C7",
    outcomeBackground: "#101B2B",
    outcomeBorder: "#31435A",
    outcomeIcon: "#586678",
    outcomeTitle: "#F5F8FC",
    outcomeDescription: "#AAB6C7",
    arrowLight: "#AAB6C7",
    arrowRosc: "#77B7F2",
  },
};

export default function Step2Pals() {
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

      <View style={styles.rhythmList}>
        {text.rhythmOptions.map((option) => {
          const isLight = option.variant === "light";

          return (
            <Pressable
              key={option.title}
              accessibilityRole="button"
              onPress={() => router.push(option.route)}
              style={({ pressed }) => [
                styles.rhythmCard,
                {
                  borderColor: isLight
                    ? colors.lightCardBorder
                    : colors.primaryCardBorder,
                  backgroundColor: isLight
                    ? colors.lightCardBackground
                    : colors.primaryCardBackground,
                },
                pressed && styles.pressed,
              ]}
            >
              <View
                style={[
                  styles.rhythmIcon,
                  {
                    backgroundColor: isLight
                      ? colors.lightIconBackground
                      : "#ED1C24",
                  },
                ]}
              >
                <Ionicons
                  name={option.iconName}
                  size={24}
                  color={isLight ? colors.lightSubtitle : "#FFFFFF"}
                />
              </View>

              <View style={styles.rhythmTextContainer}>
                <Text
                  style={[
                    styles.rhythmTitle,
                    {
                      color: isLight ? colors.lightTitle : colors.primaryText,
                    },
                  ]}
                >
                  {option.title}
                </Text>
                <Text
                  style={[
                    styles.rhythmSubtitle,
                    {
                      color: isLight
                        ? colors.lightSubtitle
                        : colors.primaryMutedText,
                    },
                  ]}
                >
                  {option.subtitle}
                </Text>
              </View>

              <Ionicons
                name="arrow-forward"
                size={22}
                color={isLight ? colors.arrowLight : "#FFFFFF"}
              />
            </Pressable>
          );
        })}
      </View>

      <View style={styles.outcomeList}>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pals/roscpals")}
          style={({ pressed }) => [
            styles.roscCard,
            {
              borderColor: colors.roscBorder,
              backgroundColor: colors.roscBackground,
            },
            pressed && styles.pressed,
          ]}
        >
          <View style={styles.roscIcon}>
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.outcomeTextContainer}>
            <Text style={[styles.roscTitle, { color: colors.roscTitle }]}>
              {text.roscTitle}
            </Text>
            <Text
              style={[
                styles.roscDescription,
                { color: colors.roscDescription },
              ]}
            >
              {text.roscDescription}
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color={colors.arrowRosc} />
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/algorithms/epals/pals/termination")}
          style={({ pressed }) => [
            styles.outcomeCard,
            {
              borderColor: colors.outcomeBorder,
              backgroundColor: colors.outcomeBackground,
            },
            pressed && styles.pressed,
          ]}
        >
          <View
            style={[
              styles.terminationIcon,
              { backgroundColor: colors.outcomeIcon },
            ]}
          >
            <Ionicons name="stop" size={22} color="#FFFFFF" />
          </View>
          <View style={styles.outcomeTextContainer}>
            <Text style={[styles.outcomeTitle, { color: colors.outcomeTitle }]}>
              {text.terminationTitle}
            </Text>
            <Text
              style={[
                styles.outcomeDescription,
                { color: colors.outcomeDescription },
              ]}
            >
              {text.terminationDescription}
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color={colors.arrowLight} />
        </Pressable>
      </View>
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  rhythmList: {
    width: "100%",
    gap: 10,
  },
  rhythmCard: {
    width: "100%",
    minHeight: 104,
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
  rhythmIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  rhythmTextContainer: {
    flex: 1,
    gap: 4,
  },
  rhythmTitle: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  rhythmSubtitle: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 19,
  },
  outcomeList: {
    width: "100%",
    gap: 10,
  },
  outcomeCard: {
    width: "100%",
    minHeight: 88,
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
  terminationIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  outcomeTextContainer: {
    flex: 1,
    gap: 4,
  },
  outcomeTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  outcomeDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  roscCard: {
    width: "100%",
    minHeight: 88,
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
  roscIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#19A85B",
  },
  roscTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  roscDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
