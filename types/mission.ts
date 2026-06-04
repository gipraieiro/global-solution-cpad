export interface MissionData {
  internalTemperature: number;
  externalTemperature: number;
  radiation: number;

  batteryLevel: number;
  solarProduction: number;
  energyConsumption: number;

  signalStrength: number;
  latency: number;

  orbitalStability: number;
}