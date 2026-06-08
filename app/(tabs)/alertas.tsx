import { useContext } from "react";
import { ScrollView, View, Text } from "react-native";
import { MissionContext } from "../../context/MissionContext";

export default function Alertas() {
  const { missionData } = useContext(MissionContext);

  const alerts = [];

  if (missionData.batteryLevel < 30) {
    alerts.push("Bateria Baixa");
  }

  if (missionData.signalStrength < 40) {
    alerts.push("Sinal Fraco");
  }

  if (missionData.radiation > 80) {
    alerts.push("Radiação Elevada");
  }

  if (missionData.orbitalStability < 60) {
    alerts.push("Instabilidade Orbital");
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0F172A" }}>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Alertas da Missão
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            marginTop: 4,
            marginBottom: 25,
          }}
        >
          Sistema automático de monitoramento
        </Text>

        {alerts.length === 0 ? (
          <View
            style={{
              backgroundColor: "#1E293B",
              padding: 20,
              borderRadius: 16,
            }}
          >
            <Text
              style={{
                color: "#22C55E",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Sem alertas ativos
            </Text>

            <Text
              style={{
                color: "#CBD5E1",
                marginTop: 10,
              }}
            >
              Todos os sistemas da missão estão funcionando normalmente.
            </Text>
          </View>
        ) : (
          alerts.map((alert, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#1E293B",
                padding: 20,
                borderRadius: 16,
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  color: "#F59E0B",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {alert}
              </Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}