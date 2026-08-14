import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import InfoCard from "../../ui/info-card";
import StepHeader from "../../ui/StepHeader";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Dieťa je v bezvedomí",
    description:
      "Opatrne uložte dieťa na pevný povrch, privolajte pomoc a začnite resuscitáciu bez zbytočného odkladu.",
    cprTitle: "Začnite KPR",
    routes: [
      {
        title: "Základná resuscitácia",
        description: "PBLS: 5 záchranných vdychov, potom KPR podľa výcviku.",
        iconName: "heart" as const,
        href: "/algorithms/epals/pbls/step1" as const,
        variant: "primary" as const,
      },
      {
        title: "Rozšírená resuscitácia",
        description: "PALS: tímová resuscitácia, monitor/defibrilátor a lieky.",
        iconName: "pulse" as const,
        href: "/algorithms/epals/pals/step1" as const,
        variant: "light" as const,
      },
    ],
    infoTitle: "Dôležité",
    infoDescription:
      "Pri FBAO nevykonávajte slepé vyberanie prstami. Predmet odstráňte iba vtedy, keď je jasne viditeľný.",
  },
  en: {
    badge: "Step 3",
    title: "Child is unconscious",
    description:
      "Carefully place the child on a firm surface, call for help, and start resuscitation without unnecessary delay.",
    cprTitle: "Start CPR",
    routes: [
      {
        title: "Basic life support",
        description:
          "PBLS: 5 rescue breaths, then CPR according to your training.",
        iconName: "heart" as const,
        href: "/algorithms/epals/pbls/step1" as const,
        variant: "primary" as const,
      },
      {
        title: "Advanced life support",
        description:
          "PALS: team resuscitation, monitor/defibrillator, and medicines.",
        iconName: "pulse" as const,
        href: "/algorithms/epals/pals/step1" as const,
        variant: "light" as const,
      },
    ],
    infoTitle: "Important",
    infoDescription:
      "In FBAO, do not perform blind finger sweeps. Remove an object only if it is clearly visible.",
  },
};

const cardColors = {
  light: {
    cprBackground: "#D7EDFD",
    cprBorder: "#075296",
    cprText: "#075296",
    primaryBackground: "#075296",
    primaryBorder: "#075296",
    primaryIconBackground: "#ED1C24",
    primaryIcon: "#FFFFFF",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    lightBackground: "#FFFFFF",
    lightBorder: "#CBD3DF",
    lightIconBackground: "#E4EFFD",
    lightIcon: "#075296",
    lightTitle: "#10243C",
    lightDescription: "#5C6574",
    lightArrow: "#075296",
  },
  dark: {
    cprBackground: "#102A3F",
    cprBorder: "#2F7FBE",
    cprText: "#B9DDFF",
    primaryBackground: "#0E4A80",
    primaryBorder: "#2F7FBE",
    primaryIconBackground: "#B7151B",
    primaryIcon: "#FFFFFF",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    lightBackground: "#101B2B",
    lightBorder: "#31435A",
    lightIconBackground: "#17375B",
    lightIcon: "#8BC4FA",
    lightTitle: "#F5F8FC",
    lightDescription: "#AAB6C7",
    lightArrow: "#8BC4FA",
  },
};

export default function Step3Unconscious() {
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

      <View
        style={[
          styles.cprCard,
          {
            borderColor: colors.cprBorder,
            backgroundColor: colors.cprBackground,
          },
        ]}
      >
        <Text style={[styles.cprTitle, { color: colors.cprText }]}>
          {text.cprTitle}
        </Text>
      </View>

      <View style={styles.linkList}>
        {text.routes.map((route) => {
          const isPrimary = route.variant === "primary";

          return (
            <Pressable
              key={route.href}
              accessibilityRole="button"
              onPress={() => router.push(route.href)}
              style={({ pressed }) => [
                styles.linkCard,
                {
                  borderColor: isPrimary
                    ? colors.primaryBorder
                    : colors.lightBorder,
                  backgroundColor: isPrimary
                    ? colors.primaryBackground
                    : colors.lightBackground,
                },
                pressed && styles.pressed,
              ]}
            >
              <View
                style={[
                  styles.linkIcon,
                  {
                    backgroundColor: isPrimary
                      ? colors.primaryIconBackground
                      : colors.lightIconBackground,
                  },
                ]}
              >
                <Ionicons
                  name={route.iconName}
                  size={23}
                  color={isPrimary ? colors.primaryIcon : colors.lightIcon}
                />
              </View>

              <View style={styles.linkTextContainer}>
                <Text
                  style={[
                    styles.linkTitle,
                    {
                      color: isPrimary
                        ? colors.primaryTitle
                        : colors.lightTitle,
                    },
                  ]}
                >
                  {route.title}
                </Text>
                <Text
                  style={[
                    styles.linkDescription,
                    {
                      color: isPrimary
                        ? colors.primaryDescription
                        : colors.lightDescription,
                    },
                  ]}
                >
                  {route.description}
                </Text>
              </View>

              <Ionicons
                name="arrow-forward"
                size={22}
                color={isPrimary ? colors.primaryTitle : colors.lightArrow}
              />
            </Pressable>
          );
        })}
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="warning-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  cprCard: {
    width: "100%",
    minHeight: 102,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 22,
    borderWidth: 2,
    borderRadius: 999,
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cprTitle: {
    fontSize: 27,
    fontWeight: "900",
    lineHeight: 34,
    textAlign: "center",
  },
  linkList: {
    width: "100%",
    gap: 10,
  },
  linkCard: {
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
  linkIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  linkTextContainer: {
    flex: 1,
    gap: 4,
  },
  linkTitle: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  linkDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
