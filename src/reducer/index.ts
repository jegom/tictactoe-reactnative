import { combineReducers, Action } from "redux";
import { Cell } from "../types";

const INITIAL_STATE = {
  data: [
    [{ isMarked: false, row: 0 }, { isMarked: true, row: 0}, { isMarked: true, row: 0 }],
    [{ isMarked: true, row: 1 }, { isMarked: false, row: 1}, { isMarked: true, row: 1 }],
    [{ isMarked: true, row: 2 }, { isMarked: true, row: 2 }, { isMarked: true, row: 2 }],
  ],
};

export interface BoardState {
    data: Cell[][];
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
