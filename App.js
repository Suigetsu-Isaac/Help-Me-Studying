import React, { useState, useEffect } from "react";
import Loading from "./src/tools/Loading";
import Auth from "./src/components/Auth";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="loading"
            component={Loading}
            options={{ title: "", headerTransparent: true }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ title: "", headerTransparent: true }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
