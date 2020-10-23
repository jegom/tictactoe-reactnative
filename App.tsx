import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import { StyleSheet, View } from "react-native";
import BoardComponent from "./src/components/GameComponent";
import reducer from './src/reducer/gameReducer';
import logger from "redux-logger";

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
  const store = createStore(reducer, applyMiddleware(logger));
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <BoardComponent />
      <StatusBar style="auto" />
    </View>
  </Provider>
  );
}
