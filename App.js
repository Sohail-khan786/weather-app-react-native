import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "./utils/index";
import * as Location from "expo-location";
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetails from "./components/WeatherDetails";

const WEATHER_API_KEY = "8b91738d8357598e7c70b11fe9d5bd07";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
  const dummmyData = {
    base: "stations",
    clouds: {
      all: 0,
    },
    cod: 200,
    coord: {
      lat: 19.97,
      lon: 72.75,
    },
    dt: 1603481274,
    id: 1273708,
    main: {
      feels_like: 83.73,
      grnd_level: 1008,
      humidity: 66,
      pressure: 1008,
      sea_level: 1008,
      temp: 80.28,
      temp_max: 80.28,
      temp_min: 80.28,
    },
    name: "Dāhānu",
    sys: {
      country: "IN",
      sunrise: 1603501613,
      sunset: 1603543151,
    },
    timezone: 19800,
    visibility: 10000,
    weather: [
      {
        description: "clear sky",
        icon: "01n",
        id: 800,
        main: "Clear",
      },
    ],
    wind: {
      deg: 93,
      speed: 5.55,
    },
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState("metric");

  useEffect(() => {
    load();
  }, [unitsSystem]);

  async function load() {
    setCurrentWeather(null);
    setErrorMessage(null);
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMessage("Access to location is needed to run the app");
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherUrl);

      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
        //console.log("Api Started Working");
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      //setErrorMessage(error.message);
      setCurrentWeather(dummmyData);
    }
  }

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker
            unitsSystem={unitsSystem}
            setUnitsSystem={setUnitsSystem}
          />
          <ReloadIcon load={load} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails currentWeather={currentWeather} />
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.main}>
          <ReloadIcon load={load} />
          <Text>Api Didnt Work </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
