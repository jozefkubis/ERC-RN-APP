import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import InfoCard from "../../ui/info-card";

const polymorphicSteps = [
  "Podajte Mg2+ 8 mmol intravenózne počas 10 minút",
  "Zvážte izoprenalín alebo dočasnú kardiostimuláciu na zvýšenie srdcovej frekvencie",
  "Vyhnite sa použitiu amiodarónu",
];

export default function Step4WideIrregular() {
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
          <Text style={styles.stepTitle}>Nepravidelný široký QRS komplex</Text>
          <Text style={styles.stepDescription}>
            Pri nepravidelnej širokokomplexovej tachykardii zhodnoťte možné
            príčiny a vyberte liečbu podľa najpravdepodobnejšieho mechanizmu.
          </Text>
        </View>

        <View style={styles.stablePanel}>
          <Text style={styles.panelTitle}>NEPRAVIDELNÝ</Text>

          <View style={styles.decisionCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIcon}>
                <Ionicons name="git-branch" size={23} color="#FFFFFF" />
              </View>
              <Text style={styles.cardTitle}>Možnosti zahŕňajú:</Text>
            </View>

            <View style={styles.recommendationBlock}>
              <View style={styles.recommendationHeader}>
                <View style={styles.recommendationIcon}>
                  <Ionicons name="flash" size={22} color="#075296" />
                </View>
                <Text style={styles.recommendationTitle}>
                  Fibrilácia predsiení s preexcitáciou
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.dot} />
                <Text style={styles.recommendationDescription}>
                  Zvážte prokaínamid alebo kardioverziu.
                </Text>
              </View>
            </View>

            <View style={styles.recommendationBlock}>
              <View style={styles.recommendationHeader}>
                <View style={styles.recommendationIcon}>
                  <Ionicons name="pulse" size={22} color="#075296" />
                </View>
                <Text style={styles.recommendationTitle}>
                  Polymorfná KT s predĺženým QT intervalom
                </Text>
              </View>
              <View style={styles.list}>
                {polymorphicSteps.map((item) => (
                  <View key={item} style={styles.listItem}>
                    <View style={styles.dot} />
                    <Text style={styles.recommendationText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <InfoCard
          title="Pripomienka"
          description="Ak je pacient nestabilný alebo sa stav zhoršuje, pripravte synchronizovanú kardioverziu a postupujte podľa nestabilnej tachykardie."
          iconName="information-circle-outline"
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
  stablePanel: {
    width: "100%",
    gap: 16,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#D7F2F5",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  panelTitle: {
    alignSelf: "center",
    color: "#075296",
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 26,
  },
  decisionCard: {
    width: "100%",
    gap: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 28,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#075296",
  },
  cardTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
  },
  recommendationBlock: {
    gap: 10,
    padding: 14,
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#F5FAFF",
  },
  recommendationIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "#E4EFFD",
  },
  recommendationHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  recommendationTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 21,
  },
  recommendationText: {
    flex: 1,
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  recommendationDescription: {
    color: "#10243C",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  list: {
    gap: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  dot: {
    width: 7,
    height: 7,
    marginTop: 7,
    borderRadius: 4,
    backgroundColor: "#075296",
  },
});
