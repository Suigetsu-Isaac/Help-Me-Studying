import React, { useState, useEffect } from "react";
import User from "./User";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "../config/firebaseconfig";
import NavApp from "./NavApp";
const Stack = createStackNavigator();

export default function Auth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("chegou no Auth");
    firebase.auth().onAuthStateChanged(function (useref) {
      if (useref) {
        setUser(useref);
      } else {
        console.log("nulo");
        setUser(null);
      }
    });
  }, []);

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="NavApp"
          component={NavApp}
          options={{ title: "", headerTransparent: true }}
        />
      ) : (
        <Stack.Screen
          name="User"
          component={User}
          options={{ title: "", headerTransparent: true }}
        />
      )}
    </Stack.Navigator>
  );
}
