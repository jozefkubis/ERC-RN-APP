import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps, ReactNode } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];
type CardTone = "default" | "info" | "warning" | "danger";

export function AlgorithmScreen({ children }: { children: ReactNode }) {
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

type StepHeaderProps = {
  badge: string;
  title: string;
  description: string;
  urgent?: boolean;
};

export function StepHeader({
  badge,
  title,
  description,
  urgent = false,
}: StepHeaderProps) {
  return (
    <View style={styles.stepHeader}>
      <View style={[styles.stepBadge, urgent && styles.urgentStepBadge]}>
        <Text
          selectable
          style={[
            styles.stepBadgeText,
            urgent && styles.urgentStepBadgeText,
          ]}
        >
          {badge}
        </Text>
      </View>
      <Text selectable style={styles.stepTitle}>
        {title}
      </Text>
      <Text selectable style={styles.stepDescription}>
        {description}
      </Text>
    </View>
  );
}

type ContentCardProps = {
  title: string;
  iconName: IconName;
  items: string[];
  lead?: string;
  tone?: CardTone;
};

export function ContentCard({
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
        <Text
          selectable
          style={[styles.cardTitle, isDanger && styles.dangerTitle]}
        >
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
            <View
              style={[styles.bullet, isDanger && styles.dangerBullet]}
            />
            <Text selectable style={styles.itemText}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

type HeroCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  iconName: IconName;
  danger?: boolean;
};

export function HeroCard({
  eyebrow,
  title,
  description,
  iconName,
  danger = false,
}: HeroCardProps) {
  return (
    <View style={[styles.heroCard, danger && styles.dangerHeroCard]}>
      <View style={[styles.heroIcon, danger && styles.dangerHeroIcon]}>
        <Ionicons name={iconName} size={29} color="#FFFFFF" />
      </View>
      <View style={styles.heroTextContainer}>
        <Text selectable style={styles.heroEyebrow}>
          {eyebrow}
        </Text>
        <Text selectable style={styles.heroTitle}>
          {title}
        </Text>
        <Text selectable style={styles.heroDescription}>
          {description}
        </Text>
      </View>
    </View>
  );
}

export function DecisionCard({
  question,
  description,
}: {
  question: string;
  description?: string;
}) {
  return (
    <View style={styles.decisionCard}>
      <View style={styles.decisionIcon}>
        <Ionicons name="help" size={25} color="#FFFFFF" />
      </View>
      <View style={styles.decisionTextContainer}>
        <Text selectable style={styles.decisionText}>
          {question}
        </Text>
        {description ? (
          <Text selectable style={styles.decisionDescription}>
            {description}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

type FlowActionButtonProps = {
  title: string;
  description: string;
  iconName: IconName;
  onPress: () => void;
  variant?: "primary" | "danger" | "light";
};

export function FlowActionButton({
  title,
  description,
  iconName,
  onPress,
  variant = "primary",
}: FlowActionButtonProps) {
  const isLight = variant === "light";
  const isDanger = variant === "danger";

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionButton,
        isLight && styles.lightActionButton,
        isDanger && styles.dangerActionButton,
        pressed && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.actionIcon,
          isLight && styles.lightActionIcon,
          isDanger && styles.dangerActionIcon,
        ]}
      >
        <Ionicons
          name={iconName}
          size={23}
          color={isLight ? "#075296" : "#FFFFFF"}
        />
      </View>
      <View style={styles.actionTextContainer}>
        <Text
          selectable
          style={[styles.actionTitle, isLight && styles.lightActionTitle]}
        >
          {title}
        </Text>
        <Text
          selectable
          style={[
            styles.actionDescription,
            isLight && styles.lightActionDescription,
          ]}
        >
          {description}
        </Text>
      </View>
      <Ionicons
        name="arrow-forward"
        size={22}
        color={isLight ? "#075296" : "#FFFFFF"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    paddingBottom: 30,
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
  urgentStepBadge: {
    backgroundColor: "#FDE7E8",
  },
  stepBadgeText: {
    color: "#075296",
    fontSize: 20,
    fontWeight: "800",
  },
  urgentStepBadgeText: {
    color: "#C8141B",
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
  heroCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  dangerHeroCard: {
    backgroundColor: "#C8141B",
  },
  heroIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
    backgroundColor: "#ED1C24",
  },
  dangerHeroIcon: {
    backgroundColor: "#8D0E13",
  },
  heroTextContainer: {
    flex: 1,
    gap: 4,
  },
  heroEyebrow: {
    color: "#B9DDFF",
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "900",
    lineHeight: 29,
  },
  heroDescription: {
    color: "#EAF4FC",
    fontSize: 13,
    lineHeight: 19,
  },
  decisionCard: {
    width: "100%",
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
  decisionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  decisionTextContainer: {
    flex: 1,
    gap: 4,
  },
  decisionText: {
    color: "#075296",
    fontSize: 19,
    fontWeight: "900",
    lineHeight: 25,
  },
  decisionDescription: {
    color: "#5C6574",
    fontSize: 12,
    lineHeight: 17,
  },
  actionButton: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  dangerActionButton: {
    borderColor: "#C8141B",
    backgroundColor: "#C8141B",
  },
  lightActionButton: {
    borderColor: "#CBD3DF",
    backgroundColor: "#FFFFFF",
  },
  actionIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#0877D1",
  },
  dangerActionIcon: {
    backgroundColor: "#8D0E13",
  },
  lightActionIcon: {
    backgroundColor: "#E4EFFD",
  },
  actionTextContainer: {
    flex: 1,
    gap: 3,
  },
  actionTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  lightActionTitle: {
    color: "#10243C",
  },
  actionDescription: {
    color: "#D7E9F8",
    fontSize: 12,
    lineHeight: 17,
  },
  lightActionDescription: {
    color: "#5C6574",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
