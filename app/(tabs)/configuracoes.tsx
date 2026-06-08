import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Configuracoes() {
  const [batteryLimit, setBatteryLimit] = useState("");
  const [signalLimit, setSignalLimit] = useState("");
  const [radiationLimit, setRadiationLimit] = useState("");

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const data = await AsyncStorage.getItem("settings");

    if (data) {
      const settings = JSON.parse(data);

      setBatteryLimit(settings.batteryLimit);
      setSignalLimit(settings.signalLimit);
      setRadiationLimit(settings.radiationLimit);
    }
  }

  async function saveSettings() {
  if (
    batteryLimit.trim() === "" ||
    signalLimit.trim() === "" ||
    radiationLimit.trim() === ""
  ) {
    Alert.alert(
      "Erro",
      "Preencha todos os campos antes de salvar."
    );
    return;
  }

  if (
    isNaN(Number(batteryLimit)) ||
    isNaN(Number(signalLimit)) ||
    isNaN(Number(radiationLimit))
  ) {
    Alert.alert(
      "Erro",
      "Os valores devem ser numéricos."
    );
    return;
  }

  await AsyncStorage.setItem(
    "settings",
    JSON.stringify({
      batteryLimit,
      signalLimit,
      radiationLimit,
    })
  );

  Alert.alert(
    "Configurações salvas",
    "Os limites foram atualizados com sucesso."
  );
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
          Configurações de Monitoramento
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            fontSize: 16,
            marginTop: 4,
            marginBottom: 25,
          }}
        >
          Defina os limites para geração automática de alertas
        </Text>

        <Text
          style={{
            color: "#FFFFFF",
          }}
        >
          Limite de Bateria (%)
        </Text>

        <TextInput
          value={batteryLimit}
          onChangeText={setBatteryLimit}
          keyboardType="numeric"
          style={{
            backgroundColor: "#1E293B",
            color: "#FFFFFF",
            padding: 12,
            borderRadius: 10,
            marginTop: 8,
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            color: "#FFFFFF",
          }}
        >
          Limite de Sinal (%)
        </Text>

        <TextInput
          value={signalLimit}
          onChangeText={setSignalLimit}
          keyboardType="numeric"
          style={{
            backgroundColor: "#1E293B",
            color: "#FFFFFF",
            padding: 12,
            borderRadius: 10,
            marginTop: 8,
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            color: "#FFFFFF",
          }}
        >
          Limite de Radiação (mSv)
        </Text>

        <TextInput
          value={radiationLimit}
          onChangeText={setRadiationLimit}
          keyboardType="numeric"
          style={{
            backgroundColor: "#1E293B",
            color: "#FFFFFF",
            padding: 12,
            borderRadius: 10,
            marginTop: 8,
            marginBottom: 25,
          }}
        />

        <TouchableOpacity
          onPress={saveSettings}
          style={{
            backgroundColor: "#38BDF8",
            padding: 15,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Salvar Configurações
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}