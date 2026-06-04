import { useContext } from "react";
import { ScrollView, View, Text } from "react-native";
import { MissionContext } from "../../context/MissionContext";
import SensorCard from "../../components/SensorCard";

export default function Energia() {
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
          Energy Management
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            fontSize: 16,
            marginTop: 4,
            marginBottom: 25,
          }}
        >
          Real-time energy monitoring and prediction
        </Text>

        <SensorCard
          title="Battery Level"
          value={`${missionData.batteryLevel}%`}
          status="Optimal"
          prediction="Energy reserves support current mission operations."
          percentage={missionData.batteryLevel}
        />

        <SensorCard
          title="Solar Production"
          value={`${missionData.solarProduction}%`}
          status="Nominal"
          prediction="Solar generation remains sufficient."
          percentage={missionData.solarProduction}
        />

        <SensorCard
          title="Energy Consumption"
          value={`${missionData.energyConsumption}%`}
          status="Controlled"
          prediction="Current consumption does not threaten reserves."
          percentage={missionData.energyConsumption}
        />
      </View>
    </ScrollView>
  );
}