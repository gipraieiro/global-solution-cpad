import { createContext, useState, ReactNode } from "react";
import { MissionData } from "../types/mission";

interface MissionContextType {
  missionData: MissionData;
  updateMissionData: (data: MissionData) => void;
}

const initialData: MissionData = {
  internalTemperature: 22,
  externalTemperature: -120,
  radiation: 15,

  batteryLevel: 85,
  solarProduction: 72,
  energyConsumption: 65,

  signalStrength: 90,
  latency: 120,

  orbitalStability: 98,
};

export const MissionContext = createContext<MissionContextType>(
  {} as MissionContextType
);

interface ProviderProps {
  children: ReactNode;
}

export function MissionProvider({ children }: ProviderProps) {
  const [missionData, setMissionData] =
    useState<MissionData>(initialData);

  function updateMissionData(data: MissionData) {
    setMissionData(data);
  }

  return (
    <MissionContext.Provider
      value={{
        missionData,
        updateMissionData,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
}