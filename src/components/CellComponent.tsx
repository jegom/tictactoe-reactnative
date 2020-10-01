import React from "react";
import { StyleSheet, View, Image } from "react-native";
interface Props {
  isMarked: boolean;
}

const cellSize = 100;

const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",
    height: cellSize,
    width: cellSize,
  },
  image: {
    height: cellSize,
    width: cellSize,
  },
});

const CellComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.isMarked ? (
        <Image style={styles.image} source={require("../images/herz.png")} />
      ) : (
        <Image style={styles.image} source={require("../images/kreuz.png")} />
      )}
    </View>
  );
};

export default CellComponent;
