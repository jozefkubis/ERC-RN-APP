import type { ReactNode } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

type AlgorithmScreenProps = {
  children: ReactNode;
};

export default function AlgorithmScreen({ children }: AlgorithmScreenProps) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        {children}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    paddingBottom: 30,
    gap: 15,
  },
});
