import {
  getMarkerFor,
  getNextPlayer,
  hasThreeDiagonal,
  hasThreeInColumn,
  hasThreeInRow,
  isUnmarked
} from './gameUtils';
import { Marker, Player } from '../types';
import { INITIAL_STATE } from '../reducer/gameReducer';

describe('GameUtils', () => {
  describe('getMarkerFor', () => {
    it('should return cross if current player is cross', () => {
      expect(getMarkerFor(Player.cross)).toEqual(Marker.cross);
    });

    it('should return heart if current player is heart', () => {
      expect(getMarkerFor(Player.heart)).toEqual(Marker.heart);
    });
  });

  describe('getNextPlayer', () => {
    it('should return cross if current player is heart', () => {
      expect(getNextPlayer(Player.heart)).toEqual(Player.cross);
    });

    it('should return heart if current player is cross', () => {
      expect(getNextPlayer(Player.cross)).toEqual(Player.heart);
    });
  });

  describe('isUnmarked', () => {
    it('should return true if column is unmarked', () => {
      expect(isUnmarked({row: 0, column: 0, filledWith: Marker.unmarked})).toBeTruthy();
    });

    it('should return false if column is filled with heart', () => {
      expect(isUnmarked({row: 0, column: 0, filledWith: Marker.heart})).toBeFalsy();
    });

    it('should return false if column is filled with heart', () => {
      expect(isUnmarked({row: 0, column: 0, filledWith: Marker.cross})).toBeFalsy();
    });
  });

  describe('hasThreeInRow', () => {
    it('should be false if all cells of board are unmarked', () => {
      const initialBoard = INITIAL_STATE.boardData;
      expect(hasThreeInRow(initialBoard, Marker.heart)).toBeFalsy();
    });

    it('should be true for heart if first row has three hearts', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[0][0].filledWith = Marker.heart;
      initialBoard[0][1].filledWith = Marker.heart;
      initialBoard[0][2].filledWith = Marker.heart;
      expect(hasThreeInRow(initialBoard, Marker.heart)).toBeTruthy();
    });

    it('should be false for cross if first row has three hearts', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[0][0].filledWith = Marker.heart;
      initialBoard[0][1].filledWith = Marker.heart;
      initialBoard[0][2].filledWith = Marker.heart;
      expect(hasThreeInRow(initialBoard, Marker.cross)).toBeFalsy();
    });

    it('should be false if first row has two hearts', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[0][0].filledWith = Marker.heart;
      initialBoard[0][1].filledWith = Marker.heart;
      initialBoard[0][2].filledWith = Marker.cross;
      expect(hasThreeInRow(initialBoard, Marker.heart)).toBeFalsy();
    });
  });

  describe('hasThreeInColumn', () => {
    it('should be false if all cells of board are unmarked', () => {
      const initialBoard = INITIAL_STATE.boardData;
      expect(hasThreeInColumn(initialBoard, Marker.heart)).toBeFalsy();
    });

    it('should be true for heart if first column has three hearts', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[0][0].filledWith = Marker.heart;
      initialBoard[1][0].filledWith = Marker.heart;
      initialBoard[2][0].filledWith = Marker.heart;
      expect(hasThreeInColumn(initialBoard, Marker.heart)).toBeTruthy();
    });

    it('should be false for cross if first column has three hearts', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[0][0].filledWith = Marker.heart;
      initialBoard[1][0].filledWith = Marker.heart;
      initialBoard[2][0].filledWith = Marker.heart;
      expect(hasThreeInColumn(initialBoard, Marker.cross)).toBeFalsy();
    });

    it('should should be false if first column has two hearts', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[0][0].filledWith = Marker.heart;
      initialBoard[1][0].filledWith = Marker.heart;
      initialBoard[2][0].filledWith = Marker.cross;
      expect(hasThreeInColumn(initialBoard, Marker.heart)).toBeFalsy();
    });
  });

  describe('hasThreeDiagonal', () => {
    it('should be false if all cells of board are unmarked', () => {
      const initialBoard = INITIAL_STATE.boardData;
      expect(hasThreeDiagonal(initialBoard, Marker.heart)).toBeFalsy();
    });

    it('should be true for heart for three hearts in diagonal', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[0][0].filledWith = Marker.heart;
      initialBoard[1][1].filledWith = Marker.heart;
      initialBoard[2][2].filledWith = Marker.heart;
      expect(hasThreeDiagonal(initialBoard, Marker.heart)).toBeTruthy();
    });

    it('should be false for cross for three hearts in diagonal', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[0][0].filledWith = Marker.heart;
      initialBoard[1][1].filledWith = Marker.heart;
      initialBoard[2][2].filledWith = Marker.heart;
      expect(hasThreeDiagonal(initialBoard, Marker.cross)).toBeFalsy();
    });

    it('should be false for heart for two hearts in diagonal', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[0][0].filledWith = Marker.heart;
      initialBoard[1][1].filledWith = Marker.heart;
      initialBoard[2][2].filledWith = Marker.cross;
      expect(hasThreeDiagonal(initialBoard, Marker.heart)).toBeFalsy();
    });

    it('should be true for heart for three hearts in diagonal reverse', () => {
      const initialBoard = INITIAL_STATE.boardData;
      initialBoard[2][0].filledWith = Marker.heart;
      initialBoard[1][1].filledWith = Marker.heart;
      initialBoard[0][2].filledWith = Marker.heart;
      expect(hasThreeDiagonal(initialBoard, Marker.heart)).toBeTruthy();
    });
  });
});