import { useContext } from "react";
import { ScrollView, View, Text } from "react-native";
import { MissionContext } from "../../context/MissionContext";
import SensorCard from "../../components/SensorCard";

export default function Sensores() {
  const { missionData } = useContext(MissionContext);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#0F172A",
      }}
    >
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Sensors Monitoring
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            fontSize: 16,
            marginTop: 4,
            marginBottom: 25,
          }}
        >
          Real-time sensor diagnostics
        </Text>

        <SensorCard
          title="Internal Temperature"
          value={`${missionData.internalTemperature}°C`}
          status="Normal"
          prediction="Thermal conditions remain stable."
          percentage={75}
        />

        <SensorCard
          title="External Temperature"
          value={`${missionData.externalTemperature}°C`}
          status="Stable"
          prediction="No external thermal anomaly detected."
          percentage={55}
        />

        <SensorCard
          title="Radiation"
          value={`${missionData.radiation} mSv`}
          status="Safe"
          prediction="Radiation levels remain within safe limits."
          percentage={35}
        />
      </View>
    </ScrollView>
  );
}