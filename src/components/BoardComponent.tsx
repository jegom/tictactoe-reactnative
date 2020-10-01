import React, { Component } from "react";
import { connect } from "react-redux";
import { Cell } from "../types";
import { View, StyleSheet } from "react-native";
import CellComponent from "./CellComponent";
import { BoardState } from "../reducer";

interface Props {
  board: Cell[][];
}

class BoardComponent extends Component<Props> {
  public render() {  
    return (
      <View style={styles.container}>
        {this.props.board.map((row: Cell[]) => {
          return (
            <View key={this.props.board.indexOf(row)} style={styles.row}>
              <CellComponent key={this.props.board.indexOf(row) + "0"} isMarked={row[0].isMarked} />
              <CellComponent key={this.props.board.indexOf(row) + "1"} isMarked={row[1].isMarked} />
              <CellComponent key={this.props.board.indexOf(row) + "2"} isMarked={row[2].isMarked} />
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const mapStateToProps = (state: {board: BoardState}): Props => {
    return {
        board: state.board.data
    };
};

export default connect(mapStateToProps)(BoardComponent);
