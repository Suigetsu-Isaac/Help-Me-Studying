import React from "react";
import { View, Image } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ed1000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/splash.png")} />
    </View>
  );
}
