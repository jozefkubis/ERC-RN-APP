import type { AppThemeMode } from "@/src/context/settings-context";
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
  themeMode?: AppThemeMode;
};

const cardColors = {
  light: {
    defaultBorder: "#CBD3DF",
    defaultBackground: "#FFFFFF",
    infoBorder: "#B9D7F2",
    infoBackground: "#D7EDFD",
    warningBorder: "#F0DEB4",
    warningBackground: "#FFF6DC",
    dangerBorder: "#F3B7BA",
    dangerBackground: "#FDE7E8",
    title: "#075296",
    dangerTitle: "#C8141B",
    lead: "#10243C",
    itemText: "#24425F",
    warningIcon: "#B45309",
    warningIconBorder: "#D97706",
  },
  dark: {
    defaultBorder: "#31435A",
    defaultBackground: "#101B2B",
    infoBorder: "#244E74",
    infoBackground: "#102C45",
    warningBorder: "#6A511D",
    warningBackground: "#2C2516",
    dangerBorder: "#743038",
    dangerBackground: "#33191D",
    title: "#77B7F2",
    dangerTitle: "#FF9AA1",
    lead: "#F5F8FC",
    itemText: "#D7E1EE",
    warningIcon: "#F7C66B",
    warningIconBorder: "#C9922E",
  },
};

export default function ContentCard({
  title,
  iconName,
  items,
  lead,
  tone = "default",
  themeMode = "light",
}: ContentCardProps) {
  const isDanger = tone === "danger";
  const colors = cardColors[themeMode];
  const cardStyle = {
    default: {
      borderColor: colors.defaultBorder,
      backgroundColor: colors.defaultBackground,
    },
    info: {
      borderColor: colors.infoBorder,
      backgroundColor: colors.infoBackground,
    },
    warning: {
      borderColor: colors.warningBorder,
      backgroundColor: colors.warningBackground,
    },
    danger: {
      borderColor: colors.dangerBorder,
      backgroundColor: colors.dangerBackground,
    },
  }[tone];

  return (
    <View
      style={[
        styles.contentCard,
        cardStyle,
      ]}
    >
      <View style={styles.cardHeader}>
        <View
          style={[
            styles.cardIcon,
            tone === "warning" && [
              styles.warningIcon,
              { borderColor: colors.warningIconBorder },
            ],
            isDanger && styles.dangerIcon,
          ]}
        >
          <Ionicons
            name={iconName}
            size={23}
            color={tone === "warning" ? colors.warningIcon : "#FFFFFF"}
          />
        </View>
        <Text
          selectable
          style={[
            styles.cardTitle,
            { color: isDanger ? colors.dangerTitle : colors.title },
          ]}
        >
          {title}
        </Text>
      </View>

      {lead ? (
        <Text selectable style={[styles.cardLead, { color: colors.lead }]}>
          {lead}
        </Text>
      ) : null}

      <View style={styles.itemList}>
        {items.map((item) => (
          <View key={item} style={styles.itemRow}>
            <View style={[styles.bullet, isDanger && styles.dangerBullet]} />
            <Text selectable style={[styles.itemText, { color: colors.itemText }]}>
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
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
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
    backgroundColor: "#FFFFFF",
  },
  dangerIcon: {
    backgroundColor: "#ED1C24",
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  cardLead: {
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
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
});
