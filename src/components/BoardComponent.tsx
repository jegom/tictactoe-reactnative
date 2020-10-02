import React, { Component } from "react";
import { connect } from "react-redux";
import { Cell } from "../types";
import { View, StyleSheet, Text } from "react-native";
import CellComponent from "./CellComponent";
import { BoardState } from "../reducer";

interface Props {
  board: Cell[][];
}

class BoardComponent extends Component<Props> {
  public render() {  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Tic Tac Toe</Text>
        {this.props.board.map((row: Cell[]) => {
          return (
            <View key={this.props.board.indexOf(row)} style={styles.row}>
              <CellComponent key={this.props.board.indexOf(row) + "0"} filledWith={row[0].filledWith} />
              <CellComponent key={this.props.board.indexOf(row) + "1"} filledWith={row[1].filledWith} />
              <CellComponent key={this.props.board.indexOf(row) + "2"} filledWith={row[2].filledWith} />
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
    justifyContent: "center"
  },
  heading: {
    fontSize: 22,
    margin: 20
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const mapStateToProps = (state: {board: BoardState}): Props => {
    return {
        board: state.board.boardData
    };
};

export default connect(mapStateToProps)(BoardComponent);
