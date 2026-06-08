import { useContext } from "react";
import { ScrollView, View, Text } from "react-native";
import { MissionContext } from "../../context/MissionContext";
import SensorCard from "../../components/SensorCard";

export default function Comunicacao() {
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
          Sistemas de Comunicação
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            fontSize: 16,
            marginTop: 4,
            marginBottom: 25,
          }}
        >
          Monitoramento de comunicação em tempo real
        </Text>

        <SensorCard
          title="Intensidade do Sinal"
          value={`${missionData.signalStrength}%`}
          status="Estável"
          prediction="A comunicação continua operacional."
          percentage={missionData.signalStrength}
        />

        <SensorCard
          title="Latência"
          value={`${missionData.latency} ms`}
          status="Nominal"
          prediction="O atraso na transmissão permanece aceitável."
          percentage={80}
        />
      </View>
    </ScrollView>
  );
}