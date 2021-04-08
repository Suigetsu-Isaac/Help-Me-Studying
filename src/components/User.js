import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login/Index";
import Cadastro from "../pages/Cadastro/Index";
const Stack = createStackNavigator();

export default function User() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            alignItems: "center",
            textAlign: "center",
            top: 15,
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            alignItems: "center",
            textAlign: "center",
            top: 15,
            color: "#fff",
            left: -20,
          },
        }}
      />
    </Stack.Navigator>
  );
}
