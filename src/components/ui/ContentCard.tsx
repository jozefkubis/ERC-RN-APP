import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];
type CardTone = "default" | "info" | "warning" | "danger";

type ContentCardProps = {
  title: string;
  iconName: IconName;
  items: string[];
  lead?: string;
  tone?: CardTone;
};

export default function ContentCard({
  title,
  iconName,
  items,
  lead,
  tone = "default",
}: ContentCardProps) {
  const isDanger = tone === "danger";

  return (
    <View
      style={[
        styles.contentCard,
        tone === "info" && styles.infoCard,
        tone === "warning" && styles.warningCard,
        isDanger && styles.dangerCard,
      ]}
    >
      <View style={styles.cardHeader}>
        <View
          style={[
            styles.cardIcon,
            tone === "warning" && styles.warningIcon,
            isDanger && styles.dangerIcon,
          ]}
        >
          <Ionicons
            name={iconName}
            size={23}
            color={tone === "warning" ? "#B45309" : "#FFFFFF"}
          />
        </View>
        <Text selectable style={[styles.cardTitle, isDanger && styles.dangerTitle]}>
          {title}
        </Text>
      </View>

      {lead ? (
        <Text selectable style={styles.cardLead}>
          {lead}
        </Text>
      ) : null}

      <View style={styles.itemList}>
        {items.map((item) => (
          <View key={item} style={styles.itemRow}>
            <View style={[styles.bullet, isDanger && styles.dangerBullet]} />
            <Text selectable style={styles.itemText}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentCard: {
    width: "100%",
    gap: 14,
    padding: 17,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  infoCard: {
    borderColor: "#B9D7F2",
    backgroundColor: "#D7EDFD",
  },
  warningCard: {
    borderColor: "#F0DEB4",
    backgroundColor: "#FFF6DC",
  },
  dangerCard: {
    borderColor: "#F3B7BA",
    backgroundColor: "#FDE7E8",
  },
  cardHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#075296",
  },
  warningIcon: {
    borderWidth: 2,
    borderColor: "#D97706",
    backgroundColor: "#FFFFFF",
  },
  dangerIcon: {
    backgroundColor: "#ED1C24",
  },
  cardTitle: {
    flex: 1,
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  dangerTitle: {
    color: "#C8141B",
  },
  cardLead: {
    color: "#10243C",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 21,
  },
  itemList: {
    width: "100%",
    gap: 9,
  },
  itemRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    marginTop: 7,
    borderRadius: 3,
    backgroundColor: "#075296",
  },
  dangerBullet: {
    backgroundColor: "#ED1C24",
  },
  itemText: {
    flex: 1,
    color: "#24425F",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
});
