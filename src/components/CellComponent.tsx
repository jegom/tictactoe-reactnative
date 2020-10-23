import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { CellInfo, Marker } from "../types";
import { useDispatch } from "react-redux";
import { SET_MARKER } from "../actions/boardActions";

interface Props {
  cellInfo: CellInfo;
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
    width: cellSize + 10,
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

const emptyImage = <View style={styles.imageBorder} />;

const CellComponent = (props: Props) => {
  const dispatch = useDispatch();

  const setMarker = () => {
    if (props.cellInfo.filledWith === Marker.unmarked) {
      dispatch({
        type: SET_MARKER,
        row: props.cellInfo.row,
        cell: props.cellInfo.column,
      });
    }
  };

  const getMarker = (filledWith: Marker): JSX.Element => {
    if (filledWith === Marker.heart) {
      return heartImage;
    }
    if (filledWith === Marker.cross) {
      return crossImage;
    }
    return emptyImage;
  };

  return (
    <View onTouchStart={setMarker}>{getMarker(props.cellInfo.filledWith)}</View>
  );
};

export default CellComponent;
