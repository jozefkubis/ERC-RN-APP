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

const rhythmOptions = [
  {
    title: "Defibrilovateľný rytmus",
    subtitle: "KF / bKT",
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
];

export default function Step2Pals() {
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
            <Text style={styles.stepBadgeText}>Krok 2</Text>
          </View>
          <Text style={styles.stepTitle}>Zhodnotenie rytmu</Text>
          <Text style={styles.stepDescription}>
            Prerušte stláčanie iba na nevyhnutný čas a zvoľte ďalší postup podľa
            rytmu alebo klinického výsledku.
          </Text>
        </View>

        <View style={styles.rhythmList}>
          {rhythmOptions.map((option) => {
            const isLight = option.variant === "light";

            return (
              <Pressable
                key={option.title}
                accessibilityRole="button"
                onPress={() => router.push(option.route)}
                style={({ pressed }) => [
                  styles.rhythmCard,
                  isLight ? styles.rhythmCardLight : styles.rhythmCardPrimary,
                  pressed && styles.pressed,
                ]}
              >
                <View
                  style={[styles.rhythmIcon, isLight && styles.rhythmIconLight]}
                >
                  <Ionicons
                    name={option.iconName}
                    size={24}
                    color={isLight ? "#075296" : "#FFFFFF"}
                  />
                </View>

                <View style={styles.rhythmTextContainer}>
                  <Text
                    style={[
                      styles.rhythmTitle,
                      isLight && styles.rhythmTitleLight,
                    ]}
                  >
                    {option.title}
                  </Text>
                  <Text
                    style={[
                      styles.rhythmSubtitle,
                      isLight && styles.rhythmSubtitleLight,
                    ]}
                  >
                    {option.subtitle}
                  </Text>
                </View>

                <Ionicons
                  name="arrow-forward"
                  size={22}
                  color={isLight ? "#7A8492" : "#FFFFFF"}
                />
              </Pressable>
            );
          })}
        </View>

        <View style={styles.outcomeList}>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/algorithms/epals/pals/termination")}
            style={({ pressed }) => [
              styles.outcomeCard,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.terminationIcon}>
              <Ionicons name="stop" size={22} color="#FFFFFF" />
            </View>
            <View style={styles.outcomeTextContainer}>
              <Text style={styles.outcomeTitle}>Ukončenie resuscitácie</Text>
              <Text style={styles.outcomeDescription}>
                Prejdite na ukončenie resuscitácie.
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={22} color="#7A8492" />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/algorithms/epals/pals/rosc")}
            style={({ pressed }) => [
              styles.roscCard,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.roscIcon}>
              <Ionicons name="checkmark" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.outcomeTextContainer}>
              <Text style={styles.roscTitle}>ROSC</Text>
              <Text style={styles.roscDescription}>
                Obnovenie spontánneho krvného obehu.
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={22} color="#075296" />
          </Pressable>
        </View>
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
  rhythmCardPrimary: {
    borderColor: "#075296",
    backgroundColor: "#075296",
  },
  rhythmCardLight: {
    borderColor: "#CBD3DF",
    backgroundColor: "#FFFFFF",
  },
  rhythmIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#ED1C24",
  },
  rhythmIconLight: {
    backgroundColor: "#E4EFFD",
  },
  rhythmTextContainer: {
    flex: 1,
    gap: 4,
  },
  rhythmTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
  },
  rhythmTitleLight: {
    color: "#10243C",
  },
  rhythmSubtitle: {
    color: "#D7E9F8",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 19,
  },
  rhythmSubtitleLight: {
    color: "#075296",
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
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  terminationIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#7A8492",
  },
  outcomeTextContainer: {
    flex: 1,
    gap: 4,
  },
  outcomeTitle: {
    color: "#10243C",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  outcomeDescription: {
    color: "#5C6574",
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
    borderColor: "#8EC3F0",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
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
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  roscDescription: {
    color: "#28506F",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
