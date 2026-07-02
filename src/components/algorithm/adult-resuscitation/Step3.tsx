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

const rhythmOptions = [
  {
    title: "Defibrilovateľný rytmus",
    subtitle: "KF / bezpulzová KT",
    description:
      "Podajte výboj čo najskôr a ihneď pokračujte v kvalitnej KPR.",
    iconName: "flash-sharp" as const,
    route: "/algorithms/adult-resuscitation/als/step4defib" as const,
    variant: "primary" as const,
  },
  {
    title: "Nedefibrilovateľný rytmus",
    subtitle: "BEA / asystólia",
    description:
      "Bez výboja sa okamžite vráťte ku KPR a riešte reverzibilné príčiny.",
    iconName: "flash-off-sharp" as const,
    route: "/algorithms/adult-resuscitation/als/step4nondefib" as const,
    variant: "light" as const,
  },
];

export default function Step3() {
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
          <Text style={styles.stepTitle}>Zhodnotenie rytmu</Text>
          <Text style={styles.stepDescription}>
            Prerušte stláčanie iba na nevyhnutný čas. Rozhodnite, či ide o
            defibrilovateľný rytmus, nedefibrilovateľný rytmus alebo ROSC.
          </Text>
        </View>

        <View style={styles.rhythmList}>
          {rhythmOptions.map((option) => {
            const isLight = option.variant === "light";

            return (
              <Pressable
                key={option.title}
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
                  <Text
                    style={[
                      styles.rhythmDescription,
                      isLight && styles.rhythmDescriptionLight,
                    ]}
                  >
                    {option.description}
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

        <Pressable
          onPress={() => router.push("/algorithms/adult-resuscitation/als/rosc")}
          style={({ pressed }) => [styles.roscCard, pressed && styles.pressed]}
        >
          <View style={styles.roscIcon}>
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.roscTextContainer}>
            <Text style={styles.roscTitle}>ROSC</Text>
            <Text style={styles.roscDescription}>
              Obnovenie spontánneho obehu. Prejdite na starostlivosť po
              resuscitácii.
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#075296" />
        </Pressable>

        <View style={styles.noteCard}>
          <View style={styles.noteIcon}>
            <Ionicons name="timer-outline" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.noteTextContainer}>
            <Text style={styles.noteTitle}>Kontrola má byť krátka</Text>
            <Text style={styles.noteDescription}>
              Manuálny defibrilátor používajte iba vtedy, keď viete rytmus
              spoľahlivo rozpoznať do 5 sekúnd.
            </Text>
          </View>
        </View>

        <InfoCard
          title="Po rozhodnutí"
          description="Po výboji aj pri rytme bez indikácie výboja okamžite pokračujte v kompresiách hrudníka. Pri ROSC prejdite na poresuscitačnú starostlivosť."
          iconName="pulse-outline"
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
  rhythmList: {
    width: "100%",
    gap: 10,
  },
  rhythmCard: {
    width: "100%",
    minHeight: 126,
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
  rhythmDescription: {
    color: "#D7E9F8",
    fontSize: 12,
    lineHeight: 18,
  },
  rhythmDescriptionLight: {
    color: "#5C6574",
  },
  roscCard: {
    width: "100%",
    minHeight: 94,
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
  roscTextContainer: {
    flex: 1,
    gap: 4,
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
  noteCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 16,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  noteIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  noteTextContainer: {
    flex: 1,
    gap: 4,
  },
  noteTitle: {
    color: "#0877D1",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  noteDescription: {
    color: "#28506F",
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
