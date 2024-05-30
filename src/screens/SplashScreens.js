import { View, Text, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreens() {
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require("../fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskMedium: require("../fonts/SpaceGrotesk-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }

    setTimeout(() => {
      navigation.navigate("Welcome"); 
    }, 3000); 
  });

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground
      className="flex-1 justify-center items-center"
    >
      <LinearGradient
        colors={["#991B1B", "black"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <View
        onLayout={onLayoutRootView}
        className=" "
        entering={FadeInDown.delay(200).duration(700).springify().damping(12)}
      >
        <Text className="text-white text-3xl font-extrabold uppercase">
          news
        </Text>
      </View>
    </ImageBackground>
  );
}
