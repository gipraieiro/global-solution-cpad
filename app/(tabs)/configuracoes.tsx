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
          Configurações de Monitoramento
        </Text>

        <Text
          style={{
            color: "#38BDF8",
            marginBottom: 25,
          }}
        >
          Configurar limiares de alerta
        </Text>

        <Text style={{ color: "#FFFFFF" }}>
          Limite de Bateria (%)
        </Text>

        <TextInput
          value={batteryLimit}
          onChangeText={setBatteryLimit}
          style={{
            backgroundColor: "#1E293B",
            color: "#FFFFFF",
            padding: 12,
            borderRadius: 10,
            marginTop: 8,
            marginBottom: 20,
          }}
        />

        <Text style={{ color: "#FFFFFF" }}>
          Limite de Sinalização (%)
        </Text>

        <TextInput
          value={signalLimit}
          onChangeText={setSignalLimit}
          style={{
            backgroundColor: "#1E293B",
            color: "#FFFFFF",
            padding: 12,
            borderRadius: 10,
            marginTop: 8,
            marginBottom: 20,
          }}
        />

        <Text style={{ color: "#FFFFFF" }}>
          Limite de Radiação (mSv)
        </Text>

        <TextInput
          value={radiationLimit}
          onChangeText={setRadiationLimit}
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
            Configurações de Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}