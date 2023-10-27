import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "@rneui/base";

import HomeScreen from "./screens/HomeScreen";
import PredictGenderScreen from "./screens/PredictGenderScreen";
import PredictAgeScreen from "./screens/PredictAgeScreen";
import ClimateScreen from "./screens/ClimateScreen";
import UniversitiesScreen from "./screens/UniversitiesScreen";
import MozillaBlogScreen from "./screens/MozillaBlogScreen";
import ContratameScreen from "./screens/ContratameScreen";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Herramientas",
        }}
      />
      <Stack.Screen name="PredictGender" component={PredictGenderScreen} />
      <Stack.Screen name="PredictAge" component={PredictAgeScreen} />
      <Stack.Screen name="Climate" component={ClimateScreen} />
      <Stack.Screen name="Universities" component={UniversitiesScreen} />
      <Stack.Screen name="MozillaBlog" component={MozillaBlogScreen} />
      <Stack.Screen name="Contratame" component={ContratameScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
