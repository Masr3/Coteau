import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Button, TextInput } from "react-native";
import { Text, Input } from "@rneui/base";

const getUniversities = async (country) => {
  const url = `http://universities.hipolabs.com/search?country=${country}`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const UniversitiesScreen = () => {
  const [name, setName] = useState("");
  const [universities, setUniversities] = useState([]);

  const handleSearch = async () => {
    if (name) {
      try {
        const data = await getUniversities(name);
        setUniversities(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Coloca el país"
        value={name}
        onChange={(e) => setName(e.nativeEvent.text)} 
        style={styles.input}
      />
      <Button title="Buscar Universidades" onPress={handleSearch} />
      {universities && (
        <View>
          {universities.map((data, index) => (
            <View key={index} style={styles.universityContainer}>
              <Text style={styles.universityName}>{data.name}</Text>
              <Text style={styles.domain}>Dominio: {data.domains[0]}</Text>
              <Text style={styles.webPage}>
                Página web: {data.web_pages[0]}
              </Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  universityContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
  },
  universityName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  domain: {
    fontSize: 16,
  },
  webPage: {
    fontSize: 14,
    color: "blue",
  },
});

export default UniversitiesScreen;
