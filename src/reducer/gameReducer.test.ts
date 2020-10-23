import gameReducer, { INITIAL_STATE } from "./gameReducer";
import { RESET_GAME, SET_MARKER } from "../actions/boardActions";
import { Marker, Player } from "../types";

describe("GameReducer", () => {
  it("should not update anything if game is finished", () => {
    const initState = INITIAL_STATE;
    initState.gameFinished = true;
    const nextState = gameReducer(initState, {
      type: SET_MARKER,
      row: 0,
      cell: 0,
    });
    expect(nextState.boardData[0][0].filledWith).toEqual(Marker.unmarked);
  });

  it("should not update board if column is not unmarked", () => {
    const initState = INITIAL_STATE;
    initState.gameFinished = false;
    initState.boardData[0][0].filledWith = Marker.cross;

    const nextState = gameReducer(initState, {
      type: SET_MARKER,
      row: 0,
      cell: 0,
    });

    expect(nextState.boardData[0][0].filledWith).toEqual(Marker.cross);
  });

  it("should update board with marker of current player", () => {
    const initState = INITIAL_STATE;
    initState.gameFinished = false;
    initState.boardData[0][0].filledWith = Marker.unmarked;

    const nextState = gameReducer(initState, {
      type: SET_MARKER,
      row: 0,
      cell: 0,
    });

    expect(nextState.boardData[0][0].filledWith).toEqual(Marker.heart);
  });

  it("should switch current player", () => {
    const nextState = gameReducer(INITIAL_STATE, {
      type: SET_MARKER,
      row: 0,
      cell: 0,
    });
    expect(nextState.currentPlayer).toEqual(Player.cross);
  });

  it('should reset game', () => {
    const initialState = INITIAL_STATE;
    initialState.gameFinished = true;
    initialState.currentPlayer = Player.cross;
    initialState.boardData[0][0].filledWith = Marker.heart;

    const nextState = gameReducer(INITIAL_STATE, {type: RESET_GAME});

    expect(nextState).toEqual(INITIAL_STATE);
  });
});
