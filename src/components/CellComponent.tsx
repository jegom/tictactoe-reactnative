import React from "react";
import { StyleSheet, View, Image, ImagePropTypes } from "react-native";
import { Marker } from "../types";

interface Props {
  filledWith: Marker;
}

const cellSize = 100;

const styles = StyleSheet.create({
  image: {
    height: cellSize,
    width: cellSize,
  },
  imageBorder: {
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 3,
    padding: 5,
    height: cellSize + 10,
    width: cellSize + 10
  },
});

const heartImage = (
  <View style={styles.imageBorder}>
    <Image style={styles.image} source={require("../images/herz.png")} />
  </View>
);

const crossImage = (
  <View style={styles.imageBorder}>
    <Image style={styles.image} source={require("../images/cross.png")} />
  </View>
);

const emptyImage = (<View style={styles.imageBorder}/>);

const getMarker = (filledWith: Marker): JSX.Element => {
  if(filledWith === Marker.heart){
    return heartImage;
  }
  if(filledWith === Marker.cross){
    return crossImage;
  }
  return emptyImage;
};

const CellComponent = (props: Props) => {
  console.log(props);
  return <View>{getMarker(props.filledWith)}</View>;
};

export default CellComponent;
