import { View, Text } from "react-native";

interface SensorCardProps {
  title: string;
  value: string;
  status: string;
  prediction: string;
  percentage: number;
}

export default function SensorCard({
  title,
  value,
  status,
  prediction,
  percentage,
}: SensorCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#1E293B",
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: "#38BDF8",
          fontSize: 26,
          fontWeight: "bold",
          marginTop: 8,
        }}
      >
        {value}
      </Text>

      <Text
        style={{
          color: "#94A3B8",
          marginTop: 4,
        }}
      >
        Status: {status}
      </Text>

      <Text
        style={{
          color: "#CBD5E1",
          marginTop: 6,
          marginBottom: 12,
          fontSize: 13,
          lineHeight: 18,
        }}
      >
        Prediction: {prediction}
      </Text>

      <View
        style={{
          height: 8,
          backgroundColor: "#334155",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "#38BDF8",
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}