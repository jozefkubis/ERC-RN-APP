import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 5",
    title: "Pripojte AED",
    description:
      "Defibrilátor použite čo najskôr, ale bez zbytočného prerušenia kompresií a ventilácie.",
    aedTitle: "AED čo najskôr",
    aedDescription: "Postupujte podľa hlasových a vizuálnych pokynov.",
    aedItems: [
      "Pripojte AED hneď, ako je dostupný.",
      "Nalepte elektródy s minimálnym prerušením KPR.",
      "Použite pediatrický režim, ak je dostupný pre dieťa do 25 kg.",
      "Nedotýkajte sa dieťaťa počas analýzy rytmu.",
      "Po výboji alebo pokyne AED okamžite pokračujte v KPR.",
    ],
    finalText:
      "Pokračujte v KPR, kým dieťa nejaví jasné známky života alebo kým neprevezme starostlivosť ZZS / resuscitačný tím.",
    backTitle: "Späť na KPR",
    backDescription: "Pokračovať v cykloch 15:2",
    infoTitle: "Ak ste nevyškolený v PBLS",
    infoDescription:
      "Operátor tiesňovej linky môže viesť pomer 30:2 s 5 počiatočnými vdychmi, alebo iba kompresie, ak vdychy nie sú možné.",
  },
  en: {
    badge: "Step 5",
    title: "Attach AED",
    description:
      "Use a defibrillator as soon as possible, but avoid unnecessary interruption of compressions and ventilation.",
    aedTitle: "AED as soon as possible",
    aedDescription: "Follow the voice and visual prompts.",
    aedItems: [
      "Attach the AED as soon as it is available.",
      "Apply pads with minimal interruption to CPR.",
      "Use paediatric mode if available for a child under 25 kg.",
      "Do not touch the child during rhythm analysis.",
      "After a shock or AED prompt, immediately continue CPR.",
    ],
    finalText:
      "Continue CPR until the child shows clear signs of life or EMS / the resuscitation team takes over.",
    backTitle: "Back to CPR",
    backDescription: "Continue cycles of 15:2",
    infoTitle: "If you are not trained in PBLS",
    infoDescription:
      "The emergency dispatcher may guide a 30:2 ratio with 5 initial rescue breaths, or compressions only if breaths are not possible.",
  },
};

const cardColors = {
  light: {
    aedBackground: "#FFFFFF",
    aedBorder: "#075296",
    aedIcon: "#19A85B",
    aedTitle: "#075296",
    aedDescription: "#5C6574",
    listBackground: "#FFF6DC",
    listBorder: "#F0DEB4",
    bullet: "#075296",
    itemText: "#24425F",
    finalBackground: "#D7EDFD",
    finalBorder: "#075296",
    finalText: "#075296",
    backBackground: "#FFFFFF",
    backBorder: "#CBD3DF",
    backIconBackground: "#E4EFFD",
    backIcon: "#075296",
    backTitle: "#10243C",
    backDescription: "#5C6574",
  },
  dark: {
    aedBackground: "#101B2B",
    aedBorder: "#2F7FBE",
    aedIcon: "#137A43",
    aedTitle: "#B9DDFF",
    aedDescription: "#AAB6C7",
    listBackground: "#2B2414",
    listBorder: "#6A5727",
    bullet: "#F6D38A",
    itemText: "#E7D7A8",
    finalBackground: "#102A3F",
    finalBorder: "#2F7FBE",
    finalText: "#B9DDFF",
    backBackground: "#101B2B",
    backBorder: "#31435A",
    backIconBackground: "#17375B",
    backIcon: "#8BC4FA",
    backTitle: "#F5F8FC",
    backDescription: "#AAB6C7",
  },
};

export default function Step5Pbls() {
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
          styles.aedCard,
          {
            borderColor: colors.aedBorder,
            backgroundColor: colors.aedBackground,
          },
        ]}
      >
        <View style={[styles.aedIcon, { backgroundColor: colors.aedIcon }]}>
          <Ionicons name="flash" size={28} color="#FFFFFF" />
        </View>
        <View style={styles.aedTextContainer}>
          <Text style={[styles.aedTitle, { color: colors.aedTitle }]}>
            {text.aedTitle}
          </Text>
          <Text
            style={[styles.aedDescription, { color: colors.aedDescription }]}
          >
            {text.aedDescription}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.infoCard,
          {
            borderColor: colors.listBorder,
            backgroundColor: colors.listBackground,
          },
        ]}
      >
        {text.aedItems.map((item) => (
          <View key={item} style={styles.infoRow}>
            <View style={[styles.bullet, { backgroundColor: colors.bullet }]} />
            <Text style={[styles.infoText, { color: colors.itemText }]}>
              {item}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={[
          styles.finalCard,
          {
            borderColor: colors.finalBorder,
            backgroundColor: colors.finalBackground,
          },
        ]}
      >
        <Text style={[styles.finalText, { color: colors.finalText }]}>
          {text.finalText}
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/algorithms/epals/pbls/step4")}
        style={({ pressed }) => [
          styles.backCard,
          {
            borderColor: colors.backBorder,
            backgroundColor: colors.backBackground,
          },
          pressed && styles.pressed,
        ]}
      >
        <View
          style={[
            styles.backIcon,
            { backgroundColor: colors.backIconBackground },
          ]}
        >
          <Ionicons name="arrow-back" size={22} color={colors.backIcon} />
        </View>
        <View style={styles.backTextContainer}>
          <Text style={[styles.backTitle, { color: colors.backTitle }]}>
            {text.backTitle}
          </Text>
          <Text
            style={[styles.backDescription, { color: colors.backDescription }]}
          >
            {text.backDescription}
          </Text>
        </View>
      </Pressable>

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
  aedCard: {
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
  aedIcon: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  aedTextContainer: {
    flex: 1,
    gap: 4,
  },
  aedTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  aedDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  infoCard: {
    width: "100%",
    gap: 10,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  finalCard: {
    width: "100%",
    minHeight: 84,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 1,
    borderRadius: 999,
  },
  finalText: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "center",
  },
  backCard: {
    width: "100%",
    minHeight: 82,
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
  backIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  backTextContainer: {
    flex: 1,
    gap: 4,
  },
  backTitle: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  backDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
