import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;
import {
  FontAwesome5,
  Entypo,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function WeatherDetails({ currentWeather }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed: windSpeed },
  } = currentWeather;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightColor: BORDER_COLOR,
            borderRightWidth: 1,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels : Like</Text>
              <Text style={styles.textSecondary}>{feels_like}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <Entypo name="drop" size={25} color={PRIMARY_COLOR} />

            <View style={styles.weatherDetailsItems}>
              <Text>Humidity :</Text>
              <Text style={styles.textSecondary}>{humidity}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightColor: BORDER_COLOR,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderTopColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <Feather name="wind" size={25} size={25} color={PRIMARY_COLOR} />

            <View style={styles.weatherDetailsItems}>
              <Text>Wind Speed :</Text>
              <Text style={styles.textSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderTopWidth: 1,
            borderTopColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={25}
              color={PRIMARY_COLOR}
            />

            <View style={styles.weatherDetailsItems}>
              <Text>Pressure :</Text>
              <Text style={styles.textSecondary}>{pressure}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  textSecondary: {
    fontSize: 15,
    fontWeight: "700",
    color: SECONDARY_COLOR,
  },
});
