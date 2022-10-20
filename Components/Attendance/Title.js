import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function Title() {
  return (
    <View style={styles.container}>
      <Text>Attendance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 15,
  },
});
