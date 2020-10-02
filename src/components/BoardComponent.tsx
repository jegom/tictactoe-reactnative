import React, { Component } from "react";
import { connect } from "react-redux";
import { CellInfo } from "../types";
import { View, StyleSheet, Text } from "react-native";
import CellComponent from "./CellComponent";
import { BoardState } from "../reducer";

interface Props {
  board: CellInfo[][];
}

class BoardComponent extends Component<Props> {
  public render() {  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Tic Tac Toe</Text>
        {this.props.board.map((row: CellInfo[]) => {
          return (
            <View key={this.props.board.indexOf(row)} style={styles.row}>
              <CellComponent key={this.props.board.indexOf(row) + "0"} cell={row[0]} />
              <CellComponent key={this.props.board.indexOf(row) + "1"} cell={row[1]} />
              <CellComponent key={this.props.board.indexOf(row) + "2"} cell={row[2]} />
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
