import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Vyhľadaj postup, algoritmus..."
          />
        </View>

        <View style={styles.primaryOptionsContainer}>
          <Ionicons
            name="shapes-outline"
            size={24}
            color="black"
            weight="bold"
          />
          <Text style={styles.primaryOption}>Primárne možnosti</Text>
        </View>

        <View style={[styles.cardBase, styles.card]}>
          <View style={styles.cardTopRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Algoritmus</Text>
            </View>
            <View style={styles.cardIconContainer}>
              <Ionicons name="pulse" size={44} color="#4D86BC" />
            </View>
          </View>

          <Text style={styles.cardTitle} numberOfLines={1}>
            Resuscitácia dospelých
          </Text>

          <View style={styles.cardRow}>
            <Text style={styles.cardDescription}>
              ALS, BLS, Post-resuscitačná starostlivosť
            </Text>
            <Ionicons name="arrow-forward" size={25} color="#FFFFFF" />
          </View>
        </View>

        <View style={[styles.cardBase, styles.lightCard]}>
          <View style={styles.cardTopRow}>
            <View style={styles.lightBadge}>
              <Text style={styles.lightBadgeText}>Algoritmus</Text>
            </View>
            <View style={styles.cardIconContainer}>
              <Ionicons name="happy-outline" size={50} color="#E3EBF4" />
            </View>
          </View>

          <Text style={styles.lightCardTitle}>Pediatrická resuscitácia</Text>

          <View style={styles.cardRow}>
            <Text style={styles.lightCardDescription}>EPALS, PBLS</Text>
            <Ionicons name="arrow-forward" size={23} color="#075296" />
          </View>
        </View>

        <View style={[styles.cardBase, styles.lightCard]}>
          <View style={styles.cardTopRow}>
            <View style={styles.lightBadge}>
              <Text style={styles.lightBadgeText}>Algoritmus</Text>
            </View>
            <View style={styles.cardIconContainer}>
              <Ionicons name="medical-outline" size={48} color="#E3EBF4" />
            </View>
          </View>

          <Text style={styles.lightCardTitle} numberOfLines={1}>
            Resuscitácia novorodencov
          </Text>

          <View style={styles.cardRow}>
            <Text style={styles.lightCardDescription}>NLS algoritmy</Text>
            <Ionicons name="arrow-forward" size={23} color="#075296" />
          </View>
        </View>

        <View style={[styles.cardBase, styles.lightCard]}>
          <View style={styles.cardTopRow}>
            <View style={styles.lightBadge}>
              <Text style={styles.lightBadgeText}>Algoritmus</Text>
            </View>
            <View style={styles.warningTriangle}>
              <View style={styles.warningTriangleShape} />
              <Ionicons name="alert" size={32} color="#FFFFFF" />
            </View>
          </View>

          <Text style={styles.lightCardTitle} numberOfLines={1}>
            Špeciálne okolnosti
          </Text>

          <View style={styles.cardRow}>
            <Text style={styles.lightCardDescription}>
              Trauma, tehotenstvo, anafylaxia
            </Text>
            <Ionicons name="arrow-forward" size={23} color="#075296" />
          </View>
        </View>

        <View style={styles.listSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="time-outline" size={22} color="#6B7483" />
              <Text style={styles.sectionTitle}>História</Text>
            </View>
            <Text style={styles.sectionAction}>Zobraziť všetko</Text>
          </View>

          <View style={styles.smallCard}>
            <View style={[styles.smallCardIcon, styles.algorithmIcon]}>
              <Ionicons name="git-network" size={23} color="#FFFFFF" />
            </View>
            <View style={styles.smallCardText}>
              <Text style={styles.smallCardTitle}>
                ALS náhle zastavenie obehu
              </Text>
              <Text style={styles.smallCardSubtitle}>
                Resuscitácia dospelých
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={19} color="#7A8492" />
          </View>

          <View style={styles.smallCard}>
            <View style={[styles.smallCardIcon, styles.algorithmIcon]}>
              <Ionicons name="git-network" size={23} color="#FFFFFF" />
            </View>
            <View style={styles.smallCardText}>
              <Text style={styles.smallCardTitle}>Algoritmus anafylaxie</Text>
              <Text style={styles.smallCardSubtitle}>Špeciálne okolnosti</Text>
            </View>
            <Ionicons name="chevron-forward" size={19} color="#7A8492" />
          </View>
        </View>

        <View style={styles.listSection}>
          <View style={styles.sectionTitleRow}>
            <Ionicons name="star" size={22} color="#FFB000" />
            <Text style={styles.sectionTitle}>Obľúbené</Text>
          </View>

          <View style={styles.smallCard}>
            <View style={[styles.smallCardIcon, styles.medicineIcon]}>
              <Ionicons name="medkit" size={22} color="#FFFFFF" />
            </View>
            <View style={styles.smallCardText}>
              <Text style={styles.smallCardTitle}>Dávkovanie adrenalínu</Text>
              <Text style={styles.smallCardSubtitle}>Databáza liekov</Text>
            </View>
            <Ionicons name="star" size={23} color="#FFB000" />
          </View>

          <View style={styles.smallCard}>
            <View style={[styles.smallCardIcon, styles.timerIcon]}>
              <Ionicons name="timer" size={23} color="#FFFFFF" />
            </View>
            <View style={styles.smallCardText}>
              <Text style={styles.smallCardTitle}>KPR metronóm</Text>
              <Text style={styles.smallCardSubtitle}>Časovače</Text>
            </View>
            <Ionicons name="star" size={23} color="#FFB000" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    gap: 15,
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 60,
  },
  inputStyle: {
    flex: 1,
    height: 60,
    fontSize: 16,
  },
  primaryOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  primaryOption: {
    padding: 15,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  cardBase: {
    width: "100%",
    height: 180,
    justifyContent: "space-between",
    gap: 10,
    padding: 22,
    borderRadius: 12,
    borderCurve: "continuous",
    overflow: "hidden",
  },
  card: {
    backgroundColor: "#075296",
  },
  cardRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  cardTopRow: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  cardIconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#0877D1",
  },
  badgeText: {
    color: "#B9DDFF",
    fontSize: 13,
    fontWeight: "700",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "800",
  },
  cardDescription: {
    flex: 1,
    color: "#D7E9F8",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  lightCard: {
    borderWidth: 1,
    borderColor: "#CBD3DF",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  lightBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#E4EFFD",
  },
  lightBadgeText: {
    color: "#637083",
    fontSize: 13,
    fontWeight: "700",
  },
  lightCardTitle: {
    flexShrink: 1,
    color: "#10243C",
    fontSize: 21,
    fontWeight: "800",
  },
  lightCardDescription: {
    flex: 1,
    color: "#5C6574",
    fontSize: 14,
    fontWeight: "700",
  },
  warningTriangle: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  warningTriangleShape: {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 43,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#F9DFE0",
  },
  listSection: {
    width: "100%",
    gap: 8,
    paddingTop: 14,
  },
  sectionHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sectionTitle: {
    color: "#10243C",
    fontSize: 20,
    fontWeight: "800",
  },
  sectionAction: {
    color: "#075296",
    fontSize: 13,
    fontWeight: "700",
  },
  smallCard: {
    width: "100%",
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
  },
  smallCardIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
  },
  algorithmIcon: {
    backgroundColor: "#0868C4",
  },
  medicineIcon: {
    backgroundColor: "#8B6500",
  },
  timerIcon: {
    backgroundColor: "#ED1C24",
  },
  smallCardText: {
    flex: 1,
    gap: 2,
  },
  smallCardTitle: {
    color: "#172A43",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
  },
  smallCardSubtitle: {
    color: "#626B79",
    fontSize: 14,
  },
});
