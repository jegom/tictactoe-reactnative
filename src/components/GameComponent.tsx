import React, { Component } from "react";
import { connect } from "react-redux";
import { CellInfo, Player } from "../types";
import { StyleSheet, Text, View } from "react-native";
import { GameState } from "../reducer/gameReducer";
import BoardComponent from "./BoardComponent";

interface Props {
  boardData: CellInfo[][];
  currentPlayer: Player;
}

class GameComponent extends Component<Props> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Tic Tac Toe</Text>
        <Text style={styles.headerText}>
          {this.props.currentPlayer} ist dran!
        </Text>
        <BoardComponent boardData={this.props.boardData} />
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
  headerText: {
    fontSize: 22,
    margin: 20,
  },
});

const mapStateToProps = (state: GameState): Props => {
  return {
    boardData: state.boardData,
    currentPlayer: state.currentPlayer,
  };
};

export default connect(mapStateToProps)(GameComponent);
