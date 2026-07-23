import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import FlowConnector from "../../ui/FlowConnector";

const escalationActions = [
  "Cievny prístup (umbilikálny katéter / IO)",
  "Zvážte lieky a tekutiny",
  "Zvážte ďalšie faktory",
];

const medicationActions = [
  "Adrenalín: 10-30 μg kg⁻¹ každé 4 minúty",
  "Intravaskulárny objem (krv / tekutiny): 10 ml kg⁻¹",
  "Glukóza 10 % (ak je hladina glukózy v krvi nízka): 2 ml kg⁻¹",
];

const reversibleCauses = [
  "Pneumotorax",
  "Hypovolémia",
  "Vrodená abnormalita",
  "Porucha vybavenia",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <View style={styles.list}>
      {items.map((item) => (
        <View key={item} style={styles.row}>
          <View style={styles.bullet} />
          <Text selectable style={styles.rowText}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default function Step5() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.stepHeader}>
          <View style={styles.stepBadge}>
            <Text selectable style={styles.stepBadgeText}>
              Krok 5
            </Text>
          </View>
          <Text selectable style={styles.stepTitle}>
            Lieky, tekutiny a príčiny
          </Text>
          <Text selectable style={styles.stepDescription}>
            Pri pretrvávajúcej srdcovej frekvencii pod 60/min pokračujte v
            resuscitácii, zaistite prístup a hľadajte reverzibilné príčiny.
          </Text>
        </View>

        <View style={styles.reassessmentCard}>
          <View style={styles.reassessmentIcon}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={29}
              color="#FFFFFF"
            />
          </View>
          <Text selectable style={styles.reassessmentText}>
            Prehodnoťte každých 30 sekúnd
          </Text>
        </View>

        <FlowConnector />

        <View style={styles.escalationCard}>
          <Text selectable style={styles.conditionText}>
            Ak srdcová frekvencia zostáva &lt; 60 min⁻¹:
          </Text>
          <BulletList items={escalationActions} />
        </View>

        <View style={styles.sideCards}>
          <View style={styles.infoCard}>
            <View style={styles.infoHeader}>
              <View style={styles.infoIcon}>
                <MaterialCommunityIcons
                  name="needle"
                  size={22}
                  color="#075296"
                />
              </View>
              <Text selectable style={styles.infoTitle}>
                Lieky a tekutiny
              </Text>
            </View>
            <BulletList items={medicationActions} />
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoHeader}>
              <View style={styles.infoIcon}>
                <Ionicons name="search" size={21} color="#075296" />
              </View>
              <Text selectable style={styles.infoTitle}>
                Faktory na zváženie
              </Text>
            </View>
            <BulletList items={reversibleCauses} />
          </View>
        </View>

        <FlowConnector />

        <View style={styles.finalCard}>
          <View style={styles.finalIcon}>
            <Ionicons name="people" size={24} color="#075296" />
          </View>
          <View style={styles.cardText}>
            <Text selectable style={styles.finalTitle}>
              Informujte rodičov
            </Text>
            <Text selectable style={styles.finalDescription}>
              Debriefing tímu
            </Text>
          </View>
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
  reassessmentCard: {
    width: "100%",
    minHeight: 92,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 2,
    borderColor: "#0877D1",
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  reassessmentIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#ED1C24",
  },
  reassessmentText: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
    textAlign: "left",
  },
  escalationCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  conditionText: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
    textAlign: "center",
  },
  sideCards: {
    width: "100%",
    gap: 12,
  },
  infoCard: {
    width: "100%",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  infoHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E6ED",
  },
  infoIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "#E4EFFD",
  },
  infoTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22,
  },
  list: {
    width: "100%",
    gap: 9,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#075296",
    marginTop: 8,
  },
  rowText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  finalCard: {
    width: "100%",
    minHeight: 98,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 49,
    backgroundColor: "#D7EDFD",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  finalIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
  },
  cardText: {
    flex: 1,
    gap: 4,
  },
  finalTitle: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
    textAlign: "center",
  },
  finalDescription: {
    color: "#075296",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 23,
    textAlign: "center",
  },
});
