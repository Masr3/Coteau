import { View, StyleSheet, TextInput, Keyboard,  } from "react-native";
import { Input, Button, Text } from "@rneui/base";
import React, { useEffect, useState } from "react"; // Importa useState y useEffect

export default function PredictGenderScreen() {
  const url = "https://api.genderize.io/?name=";
  const [gender, setGender] = useState(null); // Utiliza un estado para guardar el género

  const [inputValue, setInputValue] = useState('')

  const getGender = async (nombre) => {
    try {
      const response = await fetch(url + nombre);
      if (!response.ok) {
        throw new Error("Error en la solicitud HTTP");
      }
      
     
      const fetchedGender = await response.json();
      console.log(fetchedGender);
      setGender(fetchedGender.gender); 
            Keyboard.dismiss();

    } catch (error) {
      console.error("Error al obtener el género:", error);
      Keyboard.dismiss();

    }
  };

  const getStyle = (gender='')=>{
    if (gender ==='male'){
      return styles.male;
    }
    else if (gender === 'female'){
      return styles.female
    }
    else return styles.none;
    
  }
  
  

  useEffect(() => {
    
    getGender("");
  }, []); 


   return (
     <>
       <Text h1 style={getStyle(gender ? gender : "")}>
         {gender ? gender : "Esperando nombre..."}
       </Text>
       <Input
         value={inputValue}
         placeholder="Introduce tu nombre"
         onChangeText={(e) => setInputValue(e)}
       />
       <Button onPress={() => getGender(inputValue)}>Mostrar Genero</Button>
     </>
   );

}


const styles = StyleSheet.create({
  none:{
    marginBottom:100,
    fontWeight: "500",
  },
  male: {
    marginBottom: 50,
    backgroundColor: "dodgerblue",
 
    fontWeight: "500",
  },
  female: {
    backgroundColor: "pink",

    fontWeight: "500",
  },
});
;