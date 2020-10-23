import { Board, CellInfo, Marker, Player } from "../types";
import { all, equals } from "ramda";

export const getMarkerFor = (currentPlayer: Player): Marker =>
  currentPlayer === Player.cross ? Marker.cross : Marker.heart;

export const getNextPlayer = (currentPlayer: Player) =>
  currentPlayer === Player.heart ? Player.cross : Player.heart;

export const isUnmarked = (cell: CellInfo) =>
  cell.filledWith === Marker.unmarked;

export const hasThreeInRow = (boardData: Board, marker: Marker): boolean => {
  for (const row of boardData) {
    const allMarkerOfRow = row.map((r) => r.filledWith);
    const rowCompletelyMarked = all(equals(marker))(allMarkerOfRow);
    if (rowCompletelyMarked) {
      return true;
    }
  }
  return false;
};

export const hasThreeInColumn = (boardData: Board, marker: Marker): boolean => {
  const columns = boardData[0].map((cellInfo) => [
    boardData[0][cellInfo.column],
    boardData[1][cellInfo.column],
    boardData[2][cellInfo.column],
  ]);
  for (const column of columns) {
    const allMarkerOfColumn = column.map((c) => c.filledWith);
    const columnCompletelyMarked = all(equals(marker))(allMarkerOfColumn);
    if (columnCompletelyMarked) {
      return true;
    }
  }
  return false;
};

export const hasThreeDiagonal = (boardData: Board, marker: Marker): boolean => {
  const diagonal = [
    boardData[0][0].filledWith,
    boardData[1][1].filledWith,
    boardData[2][2].filledWith,
  ];
  const diagonalReverse = [
    boardData[2][0].filledWith,
    boardData[1][1].filledWith,
    boardData[0][2].filledWith,
  ];

  const diagonalCompletelyMarked = all(equals(marker))(diagonal);
  const diagonalReverseCompletelyMarked = all(equals(marker))(diagonalReverse);

  return diagonalCompletelyMarked || diagonalReverseCompletelyMarked;
};

export const isGameFinished = (
  boardData: Board,
  currentPlayer: Player
): boolean => {
  const markerForCurrentPlayer = getMarkerFor(currentPlayer);
  console.log(
    "hasThreeInRow(boardData, markerForCurrentPlayer)",
    hasThreeInRow(boardData, markerForCurrentPlayer)
  );
  return (
    hasThreeInRow(boardData, markerForCurrentPlayer) ||
    hasThreeInColumn(boardData, markerForCurrentPlayer) ||
    hasThreeDiagonal(boardData, markerForCurrentPlayer)
  );
};
