import React, { Component } from "react";
import { connect } from "react-redux";
import { Board, Player } from "../types";
import { StyleSheet, Text, View, Button } from "react-native";
import { GameState } from "../reducer/gameReducer";
import BoardComponent from "./BoardComponent";
import { RESET_GAME } from "../actions/boardActions";

interface DispatchProps {
  resetGame: () => void;
}

interface Props {
  boardData: Board;
  currentPlayer: Player;
  gameFinished: boolean;
}

class GameComponent extends Component<Props & DispatchProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Tic Tac Toe</Text>
        <Text style={styles.headerText}>
          {this.props.currentPlayer} ist dran!
        </Text>
        <BoardComponent boardData={this.props.boardData} />
        {this.props.gameFinished && (
          <View>
            <Text style={styles.headerText}>Gewonnen!</Text>
            <Button title="Nochmal spielen!" onPress={this.props.resetGame} />
          </View>
        )}
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

const mapDispatchToProps = (dispatch): DispatchProps => ({
  resetGame: () => dispatch({ type: RESET_GAME }),
});

const mapStateToProps = (state: GameState): Props => {
  return {
    boardData: state.boardData,
    currentPlayer: state.currentPlayer,
    gameFinished: state.gameFinished,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
