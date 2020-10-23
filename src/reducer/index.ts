import { combineReducers, Action } from "redux";
import { SET_MARKER } from "../actions/boardActions";
import { CellInfo, Marker } from "../types";
import {clone} from 'ramda';

const INITIAL_STATE = {
  boardData: [
    [
      { filledWith: Marker.unmarked, row: 0, cell: 0 },
      { filledWith: Marker.unmarked, row: 0, cell: 1 },
      { filledWith: Marker.unmarked, row: 0, cell: 2 },
    ],
    [
      { filledWith: Marker.unmarked, row: 1, cell: 0 },
      { filledWith: Marker.unmarked, row: 1, cell: 1 },
      { filledWith: Marker.unmarked, row: 1, cell: 2 },
    ],
    [
      { filledWith: Marker.unmarked, row: 2, cell: 0 },
      { filledWith: Marker.unmarked, row: 2, cell: 1 },
      { filledWith: Marker.unmarked, row: 2, cell: 2 },
    ],
  ],
};

export interface BoardState {
  boardData: CellInfo[][];
}

export interface BoardAction extends Action {
  cellInfo: CellInfo;
}

const updateBoardData = (boardData: CellInfo[][], clickedCell: CellInfo) => {
    const cell = boardData[clickedCell.row][clickedCell.cell];
    if(cell.filledWith == Marker.unmarked){
      boardData[clickedCell.row][clickedCell.cell].filledWith = Marker.heart;
    }
    return boardData;
};

const boardReducer = (state = INITIAL_STATE, action: BoardAction) => {
  switch (action.type) {
    case SET_MARKER:
      const currentBoard = clone(state.boardData);
      return {
        boardData: updateBoardData(currentBoard, action.cellInfo)
      }
    default:
      return state;
  }
};

export default combineReducers({
  board: boardReducer,
});
