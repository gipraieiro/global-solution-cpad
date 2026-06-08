import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { MissionContext } from "../../context/MissionContext";
import InfoCard from "../../components/InfoCard";

export default function Home() {
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
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 20,
            letterSpacing: 1,
          }}
        >
          Space Predictive Analytics
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            fontSize: 16,
            marginTop: 4,
            marginBottom: 30,
          }}
        >
          Painel de Controle da Missão
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 15,
          }}
        >
          <InfoCard
            title="Energia"
            value={`${missionData.batteryLevel}%`}
          />

          <InfoCard
            title="Temperatura"
            value={`${missionData.internalTemperature}°C`}
          />

          <InfoCard
            title="Comunicação"
            value={`${missionData.signalStrength}%`}
          />

          <InfoCard
            title="Estabilidade Orbital"
            value={`${missionData.orbitalStability}%`}
          />
        </View>
      </View>
    </ScrollView>
  );
}