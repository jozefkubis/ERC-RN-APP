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

const adultSections = [
  {
    title: "Ak nie ste vyškolený v BLS",
    items: ["KPR iba s kompresiami hrudníka"],
  },
  {
    title: "Ak ste vyškolený v BLS",
    items: ["KPR 30:2"],
  },
];

const childSections = [
  {
    title: "Ak nie ste vyškolený v PBLS",
    items: ["5 záchranných vdychov", "KPR 30:2"],
  },
  {
    title: "Ak ste vyškolený v PBLS",
    items: ["5 záchranných vdychov", "KPR 15:2"],
  },
];

export default function Step4bls() {
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
            <Text style={styles.stepBadgeText}>Krok 4</Text>
          </View>
          <Text style={styles.stepTitle}>Začnite KPR</Text>
          <Text style={styles.stepDescription}>
            Zvoľte postup podľa veku osoby a vašej úrovne výcviku.
          </Text>
        </View>

        <View style={styles.cprCard}>
          <View style={styles.cprHeader}>
            <View style={styles.cprIcon}>
              <Ionicons name="heart" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.cprHeaderText}>Začnite KPR</Text>
          </View>

          <View style={styles.columns}>
            <View style={styles.column}>
              <Text style={styles.columnTitle}>Dospelý</Text>
              {adultSections.map((section) => (
                <View key={section.title} style={styles.section}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                  {section.items.map((item) => (
                    <View key={item} style={styles.itemRow}>
                      <View style={styles.bullet} />
                      <Text style={styles.itemText}>{item}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>

            <View style={styles.divider} />

            <View style={styles.column}>
              <Text style={styles.columnTitle}>Dieťa</Text>
              {childSections.map((section) => (
                <View key={section.title} style={styles.section}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                  {section.items.map((item) => (
                    <View key={item} style={styles.itemRow}>
                      <View style={styles.bullet} />
                      <Text style={styles.itemText}>{item}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.flowArrow}>
          <Ionicons name="arrow-down" size={24} color="#075296" />
        </View>

        <Pressable
          onPress={() => router.push("/algorithms/adult-resuscitation/bls/step5")}
          style={({ pressed }) => [styles.nextCard, pressed && styles.pressed]}
        >
          <View style={styles.nextTextContainer}>
            <Text style={styles.nextTitle}>Ďalší krok</Text>
            <Text style={styles.nextDescription}>AED</Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
        </Pressable>
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
    gap: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5D7AC",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#F8EFCF",
  },
  cprHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  cprIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
    backgroundColor: "#ED1C24",
  },
  cprHeaderText: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  columns: {
    width: "100%",
    flexDirection: "column",
    gap: 14,
  },
  column: {
    flex: 1,
    gap: 12,
  },
  divider: {
    height: 1,
    alignSelf: "stretch",
    backgroundColor: "#075296",
    opacity: 0.35,
  },
  columnTitle: {
    color: "#075296",
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 20,
    textAlign: "center",
  },
  section: {
    gap: 7,
  },
  sectionTitle: {
    color: "#075296",
    fontSize: 13,
    fontStyle: "italic",
    fontWeight: "900",
    lineHeight: 18,
    textAlign: "center",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    gap: 8,
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 7,
  },
  itemText: {
    flex: 1,
    color: "#10243C",
    fontSize: 13,
    lineHeight: 18,
  },
  flowArrow: {
    width: "100%",
    alignItems: "center",
    marginVertical: -5,
  },
  nextCard: {
    width: "100%",
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nextTextContainer: {
    alignItems: "center",
    gap: 2,
  },
  nextTitle: {
    color: "#D7E9F8",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 16,
    textTransform: "uppercase",
  },
  nextDescription: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
