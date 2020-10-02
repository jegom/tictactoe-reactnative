import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from 'react-redux'
import { StyleSheet, View, Text } from "react-native";
import BoardComponent from "./src/components/BoardComponent";
import { createStore } from 'redux'
import reducer from './src/reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
});

export default function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <BoardComponent />
      <StatusBar style="auto" />
    </View>
  </Provider>
  );
}
