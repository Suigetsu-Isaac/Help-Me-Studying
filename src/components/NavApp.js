import React from "react";
import Boletim from "../pages/Boletim/Index";
import Calculadora from "../pages/Calculadora/Index";
import Details from "../pages/Detalhes/index";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function App() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Boletim") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Calculadora") {
            iconName = focused ? "calculator" : "calculator";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#4b83f9",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="Boletim"
        component={Boletim}
        options={{
          headerTitleStyle: {
            alignItems: "center",
            textAlign: "center",
            top: 15,
          },
        }}
      />

      <Tabs.Screen
        name="Calculadora"
        component={Calculadora}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            alignItems: "center",
            textAlign: "center",
            top: 15,
            left: -14,
          },
        }}
      />
    </Tabs.Navigator>
  );
}

export default function NavApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        options={{
          headerTransparent: true,
          title: "",
        }}
      />

      <Stack.Screen
        name="Detalhes"
        component={Details}
        options={{
          headerTransparent: true,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}
