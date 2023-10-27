import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/base';

const getClimateData = async () => {
  try {
    const apiId = "14b65fc356511e4c2393534563f2b978";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,do&appid=${apiId}`;

    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching climate data", error);
  }
};

export default function ClimateScreen() {
  const [climateData, setClimateData] = useState(null);

  useEffect(() => {
    getClimateData().then((data) => {
      setClimateData(data);
    });
  }, []);

  return (
    <View>
      <Text h1>Clima en RD</Text>
      {climateData && (
        <Text h3>Temperatura: {Math.floor( climateData.main.temp-273)}°C</Text>
      )}
    </View>
  );
}
