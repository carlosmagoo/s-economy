import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnboardingScreen } from "../screens/OnboardingScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { CameraScreen } from "../screens/CameraScreen";

import { Routes } from "./routes";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.ONBOARDING_SCREEN}
        screenOptions={{ headerShown: false, presentation: "modal" }}
      >
        <Stack.Screen
          name={Routes.ONBOARDING_SCREEN}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name={Routes.LOGIN_SCREEN}
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.SIGN_IN_SCREEN}
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={Routes.CAMERA_SCREEN} component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
