import { StyleSheet, Text, View } from "react-native";

type StepHeaderProps = {
  badge: string;
  title: string;
  description: string;
  urgent?: boolean;
};

export default function StepHeader({
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

const styles = StyleSheet.create({
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
});
