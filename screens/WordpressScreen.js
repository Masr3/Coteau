import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from 'react'

export default function WordpressScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://blog.mozilla.org/wp-content/themes/foxtail/assets/images/distilled-logo.png",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Mozilla Blog</Text>

      <View style={styles.articleContainer}>
        <Text style={styles.articleTitle}>Reclama la Expresión</Text>
        <Text style={styles.articleText}>
          En el evento "Reclama Internet" de Mozilla en Berlín, se presenta la
          instalación "Reclama la Expresión". Los visitantes pueden personalizar
          el espacio proyectando sus imágenes y creando un ambiente interactivo.
          Los creadores, Sebastian Kraus y Christine Mayerhofer, buscan
          empoderar a las personas para que moldeen su experiencia en línea y
          promueven la idea de un internet centrado en el individuo y la
          colaboración. Quieren que la gente se una para hacer que la tecnología
          sea más transparente, responsable y accesible.
        </Text>
      </View>

      <View style={styles.articleContainer}>
        <Text style={styles.articleTitle}>Reclama la Inspiración</Text>
        <Text style={styles.articleText}>
          El evento "Reclama Internet" de Mozilla en Berlín presenta la
          instalación "Reclama la Inspiración". Esta obra de arte espacial
          celebra un internet libre y abierto, inspirando la creatividad e
          innovación. La sala está dividida en dos partes: la "Nube de Impulsos"
          representa flujos constantes de información en internet, y la
          "Manifestación de Impulsos" refleja los principios de Mozilla. Los
          creadores, Wolf Moritz Cramer y Pavel der Schleifer, han sido
          inspirados por el internet en sus vidas y desean mantenerlo como
          fuente de conocimiento y creatividad abierta para todos. La
          instalación se concibe como un "jardín digital Zen" que permite a los
          visitantes explorar y encontrar inspiración de forma libre y
          aleatoria.
        </Text>
      </View>

      <View style={styles.articleContainer}>
        <Text style={styles.articleTitle}>Reclama la Maravilla</Text>
        <Text style={styles.articleText}>
          El evento "Reclama Internet" de Mozilla en Berlín presenta la
          instalación "Reclama la Maravilla", creada por el Colectivo Spatial
          Media Lab liderado por Stefan Kraus. Esta exhibición inmersiva refleja
          la belleza invisible de un internet abierto y destaca la importancia
          de mantener viva la capacidad de asombrarnos en línea. Los visitantes
          ingresarán a una sala con niebla y 16 pantallas LED transparentes que
          muestran fragmentos de una escultura virtual. La luz y el sonido se
          sincronizan con las interacciones humanas, recordando que, a pesar de
          la tecnología, el internet es un producto de la contribución humana.
          Stefan Kraus, miembro del colectivo y educador, busca inspirar a las
          personas a mirar más allá de sus pantallas y reconectar de manera más
          significativa en la web. Su visión para el futuro del internet es que
          siga siendo un lugar de asombro, curiosidad y descubrimiento, incluso
          de cosas no preseleccionadas y personalizadas.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#333", // Fondo oscuro
    color: "#fff", // Color de texto blanco
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff", // Color de texto blanco
  },
  articleContainer: {
    backgroundColor: "#222", // Fondo de tarjeta oscuro
    padding: 20,
    marginTop: 10,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff", // Color de texto blanco
  },
  articleText: {
    fontSize: 16,
    color: "#fff", // Color de texto blanco
  },
});
