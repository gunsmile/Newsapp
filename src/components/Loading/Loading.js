import { View, ActivityIndicator } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#991B1B" />
    </View>
  );
}
