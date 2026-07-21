import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import InfoCard from "../../ui/info-card";

const routes = [
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
];

export default function Step3Unconscious() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.stepHeader}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>Krok 3</Text>
          </View>
          <Text style={styles.stepTitle}>Dieťa je v bezvedomí</Text>
          <Text style={styles.stepDescription}>
            Opatrne uložte dieťa na pevný povrch, privolajte pomoc a začnite
            resuscitáciu bez zbytočného odkladu.
          </Text>
        </View>

        <View style={styles.cprCard}>
          <Text style={styles.cprTitle}>Začnite KPR</Text>
        </View>

        <View style={styles.linkList}>
          {routes.map((route) => {
            const isPrimary = route.variant === "primary";

            return (
              <Pressable
                key={route.href}
                accessibilityRole="button"
                onPress={() => router.push(route.href)}
                style={({ pressed }) => [
                  styles.linkCard,
                  isPrimary ? styles.linkCardPrimary : styles.linkCardLight,
                  pressed && styles.pressed,
                ]}
              >
                <View
                  style={[
                    styles.linkIcon,
                    isPrimary ? styles.linkIconPrimary : styles.linkIconLight,
                  ]}
                >
                  <Ionicons
                    name={route.iconName}
                    size={23}
                    color={isPrimary ? "#FFFFFF" : "#075296"}
                  />
                </View>

                <View style={styles.linkTextContainer}>
                  <Text
                    style={
                      isPrimary ? styles.linkTitlePrimary : styles.linkTitleLight
                    }
                  >
                    {route.title}
                  </Text>
                  <Text
                    style={
                      isPrimary
                        ? styles.linkDescriptionPrimary
                        : styles.linkDescriptionLight
                    }
                  >
                    {route.description}
                  </Text>
                </View>

                <Ionicons
                  name="arrow-forward"
                  size={22}
                  color={isPrimary ? "#FFFFFF" : "#075296"}
                />
              </Pressable>
            );
          })}
        </View>

        <InfoCard
          title="Dôležité"
          description="Pri FBAO nevykonávajte slepé vyberanie prstami. Predmet odstráňte iba vtedy, keď je jasne viditeľný."
          iconName="warning-outline"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    gap: 15,
  },
  stepHeader: {
    width: "100%",
    gap: 7,
    paddingTop: 6,
    paddingBottom: 4,
  },
  stepBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#E4EFFD",
  },
  stepBadgeText: {
    color: "#075296",
    fontSize: 20,
    fontWeight: "800",
  },
  stepTitle: {
    color: "#10243C",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 30,
  },
  stepDescription: {
    color: "#5C6574",
    fontSize: 14,
    lineHeight: 21,
  },
  cprCard: {
    width: "100%",
    minHeight: 102,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 22,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 999,
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cprTitle: {
    color: "#075296",
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
  linkCardPrimary: {
    borderColor: "#075296",
    backgroundColor: "#075296",
  },
  linkCardLight: {
    borderColor: "#CBD3DF",
    backgroundColor: "#FFFFFF",
  },
  linkIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  linkIconPrimary: {
    backgroundColor: "#ED1C24",
  },
  linkIconLight: {
    backgroundColor: "#E4EFFD",
  },
  linkTextContainer: {
    flex: 1,
    gap: 4,
  },
  linkTitlePrimary: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  linkTitleLight: {
    color: "#10243C",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  linkDescriptionPrimary: {
    color: "#D7E9F8",
    fontSize: 13,
    lineHeight: 19,
  },
  linkDescriptionLight: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
