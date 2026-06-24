import { Ionicons } from "@expo/vector-icons";
import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Vyhľadaj postup, algoritmus..."
          />
        </View>

        <View style={styles.primaryOptionsContainer}>
          <Ionicons name="trail-sign-outline" size={24} color="black" />
          <Text style={styles.primaryOption}>Primárne možnosti</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardCopy}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Základné</Text>
            </View>

            <Text style={styles.cardTitle}>Resuscitácia dospelých</Text>
            <Text style={styles.cardDescription}>
              ALS, BLS, Post-resuscitačná starostlivosť
            </Text>
          </View>

          <View style={styles.cardIcons}>
            <Ionicons name="pulse" size={62} color="#4D86BC" />
            <Ionicons name="arrow-forward" size={25} color="#FFFFFF" />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 30,
    alignItems: "center",
    flex: 1,
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
    marginTop: 20,
    width: "100%",
  },
  primaryOption: {
    padding: 15,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    minHeight: 164,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 22,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    overflow: "hidden",
  },
  cardCopy: {
    flex: 1,
    alignItems: "flex-start",
    gap: 10,
    paddingRight: 12,
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
    maxWidth: 220,
    color: "#D7E9F8",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  cardIcons: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});
