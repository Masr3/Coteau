import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "@rneui/base";

const HomeScreen = ({ navigation }) => {
  const handleOpenToolsMenu = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={handleOpenToolsMenu}>
        <Image
          source={{
            uri: "https://www.belenrd.com/tiendaonline/wp-content/uploads/2020/04/4200.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
      <Text h1>Herramientas</Text>
    </View>
  );
};

export default HomeScreen;
