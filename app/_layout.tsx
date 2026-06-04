import { Stack } from "expo-router";
import { MissionProvider } from "../context/MissionContext";

export default function Layout() {
  return (
    <MissionProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </MissionProvider>
  );
}