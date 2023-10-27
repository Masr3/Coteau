import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ContratameScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/yo.jpg")} 
        style={styles.profileImage}
      />
      <Text style={styles.title}>Contrátame</Text>
      <Text style={styles.subtitle}>Datos de contacto:</Text>
      <View style={styles.contactContainer}>
        <Text style={styles.contactLabel}>Nombre</Text>
        <Text style={styles.contactInfo}>Manuel Alejandro Santana Ramirez</Text>

      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.contactLabel}>Email:</Text>
        <Text style={styles.contactInfo}>manuelsantanar03@gmail.com</Text>

      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.contactLabel}>Teléfono:</Text>
        <Text style={styles.contactInfo}>+1-829-257-8257</Text>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  contactLabel: {
    width: 100, 
    fontSize: 16,
    fontWeight: "bold",
  },
  contactInfo: {
    flex: 1, 
    fontSize: 16,
  },
});

export default ContratameScreen;
