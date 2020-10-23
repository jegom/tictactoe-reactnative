import gameReducer, { INITIAL_STATE } from './gameReducer';
import { SET_MARKER } from '../actions/boardActions';
import { Marker, Player } from '../types';

describe('GameReducer', () => {
    it('should not update board if cell is not unmarked', () => {
        const initState = INITIAL_STATE;
        initState.boardData[0][0].filledWith = Marker.cross;

        const nextState = gameReducer(initState, {type: SET_MARKER, row: 0, cell: 0});

        expect(nextState.boardData[0][0].filledWith).toEqual(Marker.cross);
    });

    it('should update board with marker of current player', () => {
        const initState = INITIAL_STATE;
        initState.boardData[0][0].filledWith = Marker.unmarked;

        const nextState = gameReducer(initState, {type: SET_MARKER, row: 0, cell: 0});

        expect(nextState.boardData[0][0].filledWith).toEqual(Marker.heart);
    });

    it('should switch current player', () => {
        const nextState = gameReducer(INITIAL_STATE, {type: SET_MARKER, row: 0, cell: 0});
        expect(nextState.currentPlayer).toEqual(Player.cross);
    });
});