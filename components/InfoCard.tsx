import { View, Text } from "react-native";

interface InfoCardProps {
  title: string;
  value: string;
}

export default function InfoCard({
  title,
  value,
}: InfoCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#1E293B",
        padding: 20,
        borderRadius: 16,
        width: "45%",

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        elevation: 5,
      }}
    >
      <Text
        style={{
          color: "#94A3B8",
          fontSize: 14,
          marginBottom: 8,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {value}
      </Text>
    </View>
  );
}