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
          Monitoramento de Sensores
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            fontSize: 16,
            marginTop: 4,
            marginBottom: 25,
          }}
        >
          Diagnóstico em tempo real dos sensores
        </Text>

        <SensorCard
          title="Temperatura Interna"
          value={`${missionData.internalTemperature}°C`}
          status="Normal"
          prediction="As condições térmicas permanecem estáveis."
          percentage={75}
        />

        <SensorCard
          title="Temperatura Externa"
          value={`${missionData.externalTemperature}°C`}
          status="Estável"
          prediction="Nenhuma anomalia térmica externa foi detectada."
          percentage={55}
        />

        <SensorCard
          title="Radiação"
          value={`${missionData.radiation} mSv`}
          status="Seguro"
          prediction="Os níveis de radiação permanecem dentro dos limites seguros."
          percentage={35}
        />
      </View>
    </ScrollView>
  );
}