import React from "react";
import { StyleSheet, View } from "react-native";
import { Board, CellInfo } from "../types";
import CellComponent from "./CellComponent";

interface Props {
  boardData: Board;
}

const BoardComponent = (props: Props) => {
  return (
    <View>
      {props.boardData.map((row: CellInfo[]) => {
        return (
          <View key={props.boardData.indexOf(row)} style={styles.row}>
            <CellComponent
              key={props.boardData.indexOf(row) + "0"}
              cellInfo={row[0]}
            />
            <CellComponent
              key={props.boardData.indexOf(row) + "1"}
              cellInfo={row[1]}
            />
            <CellComponent
              key={props.boardData.indexOf(row) + "2"}
              cellInfo={row[2]}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default BoardComponent;
