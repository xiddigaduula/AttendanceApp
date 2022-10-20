import { Students } from "../Components/Attendance/Attendance.info";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar } from "react-native";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { SearchBar } from "../Components/Attendance/SearchBar";
import { Title } from "../Components/Attendance/Title";
import { ToggleSwitch } from "../Components/Attendance/ToggleSwitch";

export function StudentsScreen() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Title />
        <View style={styles.div}>
          <SearchBar />
        </View>
        <FlatList
          data={Students}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.toggle}>
                  <ToggleSwitch />
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  div: {
    marginBottom: 50,
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    paddingLeft: 15,
  },
  toggle: {
    flex: 1,
    paddingRight: 15,
    width: 50,
    height: 50,
    alignItems: "flex-end",
  },
});
