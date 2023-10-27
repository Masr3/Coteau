import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Keyboard } from "react-native";
import { Input, Button, Text } from "@rneui/base";

export default function PredictAgeScreen() {
  const url = "https://api.agify.io/?name=";
  const [age, setAge] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState(
    null
  );

  useEffect(() => {
    // Lógica para traducir y cambiar la imagen aquí
    if (age !== null) {
      traducir(age);
    }
  }, [age]);



 const getAge = async (nombre) => {
       Keyboard.dismiss();

   const response = await fetch(url + nombre);
   const fetchedAge = await response.json();
   setAge(fetchedAge.age);
   console.log(fetchedAge);
   console.log(fetchedAge.age)
   console.log(traducir(fetchedAge.age));
   setImage(traducir(fetchedAge.age))
 };

const traducir = (age) => {
  if (age < 18) {
    return "https://parentingteensandtweens.com/wp-content/uploads/2022/11/9-things-teen-boys-need-scaled.jpg";
  } else if (age > 17 && age < 65) {
    return "https://www.fundacioncadah.org/j289eghfd7511986_uploads/TDAH%20EDAD%20ADULTA.jpg";
  } else if (age > 65) {
    return "https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2015/09/OlderMan-shutterstock_261302252-1024x683_SP.jpg";
  }
};


  return (
    <>
      {age != null && (
        <View>
            <Text h2 style={styles.none}>Edad: {age}</Text>
          {image&&
          <Image style={styles.image} source={{ uri: image }} />}
        </View>
      )}
      <Input
        value={inputValue}
        placeholder="Introduce tu nombre"
        onChangeText={(e) => setInputValue(e)}
      />
      <Button onPress={()=> getAge(inputValue)}>Mostrar Edad</Button>
    </>
  );
}

const styles = StyleSheet.create({
  none: {
    fontWeight: "500",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 20,
  },
});
