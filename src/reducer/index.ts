import { combineReducers, Action } from "redux";
import { Cell, Marker } from "../types";

const INITIAL_STATE = {
  boardData: [
    [{ filledWith: Marker.unmarked }, { filledWith: Marker.unmarked }, { filledWith: Marker.unmarked }],
    [{ filledWith: Marker.unmarked }, { filledWith: Marker.unmarked }, { filledWith: Marker.unmarked }],
    [{ filledWith: Marker.unmarked }, { filledWith: Marker.unmarked }, { filledWith: Marker.unmarked }],
  ],
};

export interface BoardState {
    boardData: Cell[][];
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
