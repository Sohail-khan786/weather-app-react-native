import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main, description } = details;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x`;

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image
        style={styles.weatherIcon}
        source={{ uri: `https://simpleicon.com/wp-content/uploads/rain.png` }}
      />
      <Text style={styles.textPrimary}>{temp}</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSeconday}>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    color: PRIMARY_COLOR,
    fontSize: 40,
  },
  textSeconday: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: "500",
    marginTop: 10,
  },
});
