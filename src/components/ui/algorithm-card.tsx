import { Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AlgorithmCardBaseProps = {
  title: string;
  description: string;
  subtitle?: string;
  badgeText?: string;
  badgeVariant?: "critical" | "warning";
  onPress?: () => void;
};

type AlgorithmCardProps =
  | (AlgorithmCardBaseProps & {
      iconFamily?: "ionicons";
      iconName: ComponentProps<typeof Ionicons>["name"];
    })
  | (AlgorithmCardBaseProps & {
      iconFamily: "material-community";
      iconName: ComponentProps<typeof MaterialCommunityIcons>["name"];
    })
  | (AlgorithmCardBaseProps & {
      iconFamily: "fontisto";
      iconName: ComponentProps<typeof Fontisto>["name"];
    });

export default function AlgorithmCard(props: AlgorithmCardProps) {
  const {
    title,
    description,
    subtitle,
    badgeText,
    badgeVariant = "critical",
    onPress,
  } = props;
  const isWarningBadge = badgeVariant === "warning";

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.cardTopRow}>
        <View style={styles.cardHeaderText}>
          {badgeText ? (
            <View
              style={isWarningBadge ? styles.warningBadge : styles.criticalRow}
            >
              {/* {!isWarningBadge ? <View style={styles.criticalDot} /> : null} */}
              <Text
                style={
                  isWarningBadge ? styles.warningBadgeText : styles.criticalText
                }
              >
                {badgeText}
              </Text>
            </View>
          ) : null}

          <Text style={styles.cardTitle}>{title}</Text>
        </View>

        <View style={styles.iconContainer}>
          {props.iconFamily === "material-community" ? (
            <MaterialCommunityIcons
              name={props.iconName}
              size={50}
              color="#E3EBF4"
            />
          ) : props.iconFamily === "fontisto" ? (
            <Fontisto name={props.iconName} size={38} color="#E3EBF4" />
          ) : (
            <Ionicons name={props.iconName} size={50} color="#E3EBF4" />
          )}
        </View>
      </View>

      <View style={styles.cardBody}>
        {subtitle ? <Text style={styles.cardSubtitle}>{subtitle}</Text> : null}

        <Text style={styles.cardDescription} numberOfLines={3}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 172,
    justifyContent: "space-between",
    gap: 12,
    padding: 21,
    borderWidth: 1,
    borderColor: "#D2D9E6",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#F9FAFE",
  },
  cardTopRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 14,
  },
  cardHeaderText: {
    flex: 1,
    gap: 9,
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: {
    width: "100%",
    gap: 9,
  },
  criticalRow: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: "#D40000",
    alignSelf: "flex-start",
  },
  // criticalDot: {
  //   width: 7,
  //   height: 7,
  //   borderRadius: 4,
  //   backgroundColor: "#D40000",
  // },
  criticalText: {
    color: "#fafafa",
    fontSize: 12,
    fontWeight: "800",
  },
  warningBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: "#F6D38A",
    alignSelf: "flex-start",
  },
  warningBadgeText: {
    color: "#8B6500",
    fontSize: 12,
    fontWeight: "800",
  },
  cardTitle: {
    color: "#10243C",
    fontSize: 18,
    fontWeight: "800",
  },
  cardSubtitle: {
    color: "#172A43",
    fontSize: 14,
    fontWeight: "800",
  },
  cardDescription: {
    color: "#4F5867",
    fontSize: 12,
    lineHeight: 22,
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
});
