import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Asegúrate de importar el conjunto de íconos que prefieras

import HomeScreen from "./screens/HomeScreen";
import PredictGenderScreen from "./screens/PredictGenderScreen";
import PredictAgeScreen from "./screens/PredictAgeScreen";
import ClimateScreen from "./screens/ClimateScreen";
import UniversitiesScreen from "./screens/UniversitiesScreen";
import WordpressScreen from "./screens/WordpressScreen";
import ContratameScreen from "./screens/ContratameScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "blue", 
          inactiveTintColor: "gray", 
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="PredictGender"
          component={PredictGenderScreen}
          options={{
            tabBarLabel: "Predict Gender",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="PredictAge"
          component={PredictAgeScreen}
          options={{
            tabBarLabel: "Predict Age",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Climate"
          component={ClimateScreen}
          options={{
            tabBarLabel: "Climate",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cloud" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Universities"
          component={UniversitiesScreen}
          options={{
            tabBarLabel: "Universities",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="school" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MozillaBlog"
          component={WordpressScreen}
          options={{
            tabBarLabel: "Mozilla Blog",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="globe" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contratame"
          component={ContratameScreen}
          options={{
            tabBarLabel: "Contrátame",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="briefcase" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
