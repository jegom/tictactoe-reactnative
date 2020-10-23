import { Action } from "redux";
import { SET_MARKER } from "../actions/boardActions";
import { CellInfo, Marker, Player } from "../types";
import { clone } from "ramda";

export const INITIAL_STATE: GameState = {
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

export interface CellClickedAction extends Action {
    row: number;
    cell: number;
}

const getMarkerFor = (currentPlayer: Player): Marker => currentPlayer === Player.cross ? Marker.cross : Marker.heart

const getNextPlayer = (currentState: GameState) => currentState.currentPlayer === Player.heart ? Player.cross : Player.heart;

const isUnmarked = (cell: CellInfo) => cell.filledWith === Marker.unmarked;

const updateGame = (
    currentState: GameState,
    clickedCell: CellClickedAction
): GameState => {
    const cell = currentState.boardData[clickedCell.row][clickedCell.cell];
    if (isUnmarked(cell)) {
        currentState.boardData[clickedCell.row][clickedCell.cell].filledWith = getMarkerFor(currentState.currentPlayer);
    }
    currentState.currentPlayer = getNextPlayer(currentState);
    return currentState;
};

const gameReducer = (state = INITIAL_STATE, action: CellClickedAction) => {
    switch (action.type) {
        case SET_MARKER:
            const currentState = clone(state);
            return {
                ...updateGame(currentState, action),
            };
        default:
            return state;
    }
};

export default gameReducer;