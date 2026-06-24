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
          <Text style={styles.primaryOption}>Primárne Možnosti</Text>
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
});
