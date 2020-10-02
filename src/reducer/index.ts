import { combineReducers, Action } from "redux";
import { CellInfo, Marker } from "../types";

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

const boardReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  board: boardReducer,
});
