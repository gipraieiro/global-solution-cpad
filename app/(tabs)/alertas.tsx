import { useContext } from "react";
import { ScrollView, View, Text } from "react-native";
import { MissionContext } from "../../context/MissionContext";

export default function Alertas() {
  const { missionData } = useContext(MissionContext);

  const alerts = [];

  if (missionData.batteryLevel < 30) {
    alerts.push({
      title: "Bateria Baixa",
      recommendation:
        "Priorizar a recarga dos sistemas para evitar interrupções operacionais.",
    });
  }

  if (missionData.signalStrength < 40) {
    alerts.push({
      title: "Sinal Fraco",
      recommendation:
        "Verificar a comunicação com a estação de controle e antenas auxiliares.",
    });
  }

  if (missionData.radiation > 80) {
    alerts.push({
      title: "Radiação Elevada",
      recommendation:
        "Ativar protocolos de proteção para equipamentos sensíveis.",
    });
  }

  if (missionData.orbitalStability < 60) {
    alerts.push({
      title: "Instabilidade Orbital",
      recommendation:
        "Avaliar correções de trajetória para manter a estabilidade da missão.",
    });
  }

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
          Alertas da Missão
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            fontSize: 16,
            marginTop: 4,
            marginBottom: 25,
          }}
        >
          Sistema inteligente de monitoramento e análise preditiva
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
              Todos os sistemas da missão operam dentro dos parâmetros previstos.
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
                {alert.title}
              </Text>

              <Text
                style={{
                  color: "#CBD5E1",
                  marginTop: 10,
                }}
              >
                {alert.recommendation}
              </Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}