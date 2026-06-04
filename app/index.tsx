import { useContext } from "react";
import { View, Text } from "react-native";
import { MissionContext } from "../context/MissionContext";

export default function Home() {
  const { missionData } = useContext(MissionContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Space Predictive Analytics</Text>

      <Text>
        Temperatura Interna: {missionData.internalTemperature}°C
      </Text>

      <Text>
        Nível da Bateria: {missionData.batteryLevel}%
      </Text>

      <Text>
        Intensidade do Sinal: {missionData.signalStrength}%
      </Text>
    </View>
  );
}