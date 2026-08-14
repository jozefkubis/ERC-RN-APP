import type { AppThemeMode } from "@/src/context/settings-context";
import { Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AlgorithmCardBaseProps = {
  title: string;
  description: string;
  subtitle?: string;
  badgeText?: string;
  badgeVariant?: "critical" | "warning";
  onPress?: () => void;
  themeMode?: AppThemeMode;
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
    })
  | (AlgorithmCardBaseProps & {
      iconFamily?: "fontawesome6";
      iconName: ComponentProps<typeof FontAwesome6>["name"];
    });

const cardColors = {
  light: {
    background: "#F9FAFE",
    border: "#D2D9E6",
    title: "#10243C",
    subtitle: "#172A43",
    description: "#4F5867",
    icon: "#E3EBF4",
  },
  dark: {
    background: "#101B2B",
    border: "#31435A",
    title: "#F5F8FC",
    subtitle: "#E7EEF8",
    description: "#AAB6C7",
    icon: "#34506F",
  },
};

export default function AlgorithmCard(props: AlgorithmCardProps) {
  const {
    title,
    description,
    subtitle,
    badgeText,
    badgeVariant = "critical",
    onPress,
    themeMode = "light",
  } = props;
  const colors = cardColors[themeMode];
  const isWarningBadge = badgeVariant === "warning";

  return (
    <Pressable
      style={({ pressed }) => [styles.cardPressable, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View
        style={[
          styles.card,
          {
            borderColor: colors.border,
            backgroundColor: colors.background,
          },
        ]}
      >
        <View style={styles.cardTopRow}>
          <View style={styles.cardHeaderText}>
            {badgeText ? (
              <View
                style={
                  isWarningBadge ? styles.warningBadge : styles.criticalRow
                }
              >
                <Text
                  style={
                    isWarningBadge
                      ? styles.warningBadgeText
                      : styles.criticalText
                  }
                >
                  {badgeText}
                </Text>
              </View>
            ) : null}

            <Text style={[styles.cardTitle, { color: colors.title }]}>
              {title}
            </Text>
          </View>

          <View style={styles.iconContainer}>
            {props.iconFamily === "material-community" ? (
              <MaterialCommunityIcons
                name={props.iconName}
                size={50}
                color={colors.icon}
              />
            ) : props.iconFamily === "fontisto" ? (
              <Fontisto name={props.iconName} size={38} color={colors.icon} />
            ) : props.iconFamily === "fontawesome6" ? (
              <FontAwesome6
                name={props.iconName}
                size={38}
                color={colors.icon}
              />
            ) : (
              <Ionicons name={props.iconName} size={50} color={colors.icon} />
            )}
          </View>
        </View>

        <View style={styles.cardBody}>
          {subtitle ? (
            <Text style={[styles.cardSubtitle, { color: colors.subtitle }]}>
              {subtitle}
            </Text>
          ) : null}

          <Text
            style={[styles.cardDescription, { color: colors.description }]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardPressable: {
    width: "100%",
  },
  card: {
    width: "100%",
    height: 184,
    justifyContent: "space-between",
    gap: 12,
    padding: 21,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
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
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: "#D40000",
  },
  criticalText: {
    color: "#FAFAFA",
    fontSize: 12,
    fontWeight: "800",
  },
  warningBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: "#F6D38A",
  },
  warningBadgeText: {
    color: "#8B6500",
    fontSize: 12,
    fontWeight: "800",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "800",
  },
  cardDescription: {
    fontSize: 12,
    lineHeight: 22,
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
});
