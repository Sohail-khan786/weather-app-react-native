import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function ReloadIcon({ load }) {
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        name="md-refresh"
        size={24}
        color="black"
        color={PRIMARY_COLOR}
        onPress={load}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 30,
    right: 20,
  },
});
