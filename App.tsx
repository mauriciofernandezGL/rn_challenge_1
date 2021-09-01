import { Box, NativeBaseProvider, View } from "native-base";
import React from "react";
import LoginScreen from "./src/components/screens/LoginScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen/>
    </NativeBaseProvider>
  );
}