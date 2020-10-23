import { Action, combineReducers } from "redux";
import { SET_MARKER } from "../actions/boardActions";
import { CellInfo, Marker, Player } from "../types";
import { clone } from "ramda";

const INITIAL_STATE: GameState = {
    currentPlayer: Player.heart,
    boardData: [
        [
            {filledWith: Marker.unmarked, row: 0, cell: 0},
            {filledWith: Marker.unmarked, row: 0, cell: 1},
            {filledWith: Marker.unmarked, row: 0, cell: 2},
        ],
        [
            {filledWith: Marker.unmarked, row: 1, cell: 0},
            {filledWith: Marker.unmarked, row: 1, cell: 1},
            {filledWith: Marker.unmarked, row: 1, cell: 2},
        ],
        [
            {filledWith: Marker.unmarked, row: 2, cell: 0},
            {filledWith: Marker.unmarked, row: 2, cell: 1},
            {filledWith: Marker.unmarked, row: 2, cell: 2},
        ],
    ],
};

export interface GameState {
    currentPlayer: Player;
    boardData: CellInfo[][];
}

export interface BoardAction extends Action {
    cellInfo: CellInfo;
}

const getMarkerFor = (currentPlayer: Player): Marker => currentPlayer === Player.cross ? Marker.cross : Marker.heart

const getNextPlayer = (currentState: GameState) => currentState.currentPlayer === Player.heart ? Player.cross : Player.heart;

const isUnmarked = (cell: CellInfo) => cell.filledWith == Marker.unmarked;

const updateGame = (
    currentState: GameState,
    clickedCell: CellInfo
): GameState => {
    const cell = currentState.boardData[clickedCell.row][clickedCell.cell];
    if (isUnmarked(cell)) {
        currentState.boardData[clickedCell.row][clickedCell.cell].filledWith = getMarkerFor(currentState.currentPlayer);
    }
    currentState.currentPlayer = getNextPlayer(currentState);
    return currentState;
};

const gameReducer = (state = INITIAL_STATE, action: BoardAction) => {
    switch (action.type) {
        case SET_MARKER:
            const currentState = clone(state);
            return {
                ...updateGame(currentState, action.cellInfo),
            };
        default:
            return state;
    }
};

export default combineReducers({
    gameInfo: gameReducer,
});
