import { useContext } from "react";
import { ScrollView, View, Text } from "react-native";
import { MissionContext } from "../../context/MissionContext";
import SensorCard from "../../components/SensorCard";

export default function Energia() {
  const { missionData } = useContext(MissionContext);

  const batteryStatus =
    missionData.batteryLevel > 70
      ? "Ótimo"
      : missionData.batteryLevel > 40
      ? "Moderado"
      : "Crítico";

  const solarStatus =
    missionData.solarProduction > 60
      ? "Nominal"
      : missionData.solarProduction > 30
      ? "Reduzida"
      : "Baixa";

  const consumptionStatus =
    missionData.energyConsumption < 70
      ? "Controlado"
      : "Alto";

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
          Gestão de Energia
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            fontSize: 16,
            marginTop: 4,
            marginBottom: 25,
          }}
        >
          Monitoramento e previsão de energia em tempo real
        </Text>

        <SensorCard
          title="Nível da Bateria"
          value={`${missionData.batteryLevel}%`}
          status={batteryStatus}
          prediction="Reservas de energia apoiam as operações atuais da missão."
          percentage={missionData.batteryLevel}
        />

        <SensorCard
          title="Produção Solar"
          value={`${missionData.solarProduction}%`}
          status={solarStatus}
          prediction="A geração solar continua sendo suficiente."
          percentage={missionData.solarProduction}
        />

        <SensorCard
          title="Consumo de Energia"
          value={`${missionData.energyConsumption}%`}
          status={consumptionStatus}
          prediction="O consumo atual não compromete as reservas energéticas."
          percentage={missionData.energyConsumption}
        />
      </View>
    </ScrollView>
  );
}