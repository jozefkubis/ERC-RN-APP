import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 3",
    title: "Zhodnotenie rytmu",
    description:
      "Prerušte stláčanie iba na najkratší nevyhnutný čas. Rozhodnite, či ide o defibrilovateľný rytmus, nedefibrilovateľný rytmus alebo ROSC.",
    rhythmOptions: [
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
          "Výboj nepodávajte. Ihneď pokračujte v KPR a riešte reverzibilné príčiny.",
        iconName: "flash-off-sharp" as const,
        route: "/algorithms/adult-resuscitation/als/step4nondefib" as const,
        variant: "light" as const,
      },
    ],
    roscTitle: "ROSC",
    roscDescription:
      "Obnovenie spontánneho obehu. Prejdite na poresuscitačnú starostlivosť.",
    noteTitle: "Kontrola má byť krátka",
    noteDescription:
      "Manuálny defibrilátor používajte iba vtedy, keď viete rytmus spoľahlivo rozpoznať do 5 sekúnd.",
    infoTitle: "Po rozhodnutí",
    infoDescription:
      "Po výboji aj pri rytme bez indikácie výboja okamžite pokračujte v kompresiách hrudníka. Pri ROSC prejdite na poresuscitačnú starostlivosť.",
  },
  en: {
    badge: "Step 3",
    title: "Rhythm assessment",
    description:
      "Interrupt compressions only for the shortest necessary time. Decide whether the rhythm is shockable, non-shockable, or ROSC.",
    rhythmOptions: [
      {
        title: "Shockable rhythm",
        subtitle: "VF / pulseless VT",
        description:
          "Deliver a shock as soon as possible and immediately resume high-quality CPR.",
        iconName: "flash-sharp" as const,
        route: "/algorithms/adult-resuscitation/als/step4defib" as const,
        variant: "primary" as const,
      },
      {
        title: "Non-shockable rhythm",
        subtitle: "PEA / asystole",
        description:
          "Do not shock. Immediately resume CPR and treat reversible causes.",
        iconName: "flash-off-sharp" as const,
        route: "/algorithms/adult-resuscitation/als/step4nondefib" as const,
        variant: "light" as const,
      },
    ],
    roscTitle: "ROSC",
    roscDescription:
      "Return of spontaneous circulation. Continue with post-resuscitation care.",
    noteTitle: "Check should be brief",
    noteDescription:
      "Use a manual defibrillator only when the rhythm can be reliably recognised within 5 seconds.",
    infoTitle: "After the decision",
    infoDescription:
      "After a shock or a no-shock decision, immediately continue chest compressions. If ROSC is present, continue with post-resuscitation care.",
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
    lightDescription: "#5C6574",
    lightIconBackground: "#E4EFFD",
    roscBackground: "#D7EDFD",
    roscBorder: "#8EC3F0",
    roscTitle: "#075296",
    roscDescription: "#28506F",
    noteBackground: "#D7EDFD",
    noteTitle: "#0877D1",
    noteDescription: "#28506F",
    noteIcon: "#0877D1",
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
    lightDescription: "#AAB6C7",
    lightIconBackground: "#164C80",
    roscBackground: "#102A3F",
    roscBorder: "#2F7FBE",
    roscTitle: "#B9DDFF",
    roscDescription: "#AAB6C7",
    noteBackground: "#102A3F",
    noteTitle: "#B9DDFF",
    noteDescription: "#AAB6C7",
    noteIcon: "#164C80",
    arrowLight: "#AAB6C7",
    arrowRosc: "#77B7F2",
  },
};

export default function Step3() {
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
                <Text
                  style={[
                    styles.rhythmDescription,
                    {
                      color: isLight
                        ? colors.lightDescription
                        : colors.primaryMutedText,
                    },
                  ]}
                >
                  {option.description}
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

      <Pressable
        onPress={() => router.push("/algorithms/adult-resuscitation/als/rosc")}
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
        <View style={styles.roscTextContainer}>
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

      <View
        style={[
          styles.noteCard,
          { backgroundColor: colors.noteBackground },
        ]}
      >
        <View
          style={[styles.noteIcon, { backgroundColor: colors.noteIcon }]}
        >
          <Ionicons name="timer-outline" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.noteTextContainer}>
          <Text style={[styles.noteTitle, { color: colors.noteTitle }]}>
            {text.noteTitle}
          </Text>
          <Text
            style={[styles.noteDescription, { color: colors.noteDescription }]}
          >
            {text.noteDescription}
          </Text>
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="pulse-outline"
        themeMode={themeMode}
      />
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
  rhythmDescription: {
    fontSize: 12,
    lineHeight: 18,
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
  roscTextContainer: {
    flex: 1,
    gap: 4,
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
  noteCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 16,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  noteIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  noteTextContainer: {
    flex: 1,
    gap: 4,
  },
  noteTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  noteDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
