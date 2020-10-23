export interface CellInfo {
  filledWith: Marker;
  row: number;
  column: number;
}

export enum Marker {
  heart,
  cross,
  unmarked,
}

export enum Player {
  heart = "Herz",
  cross = "Kreuz",
}

export type Board = CellInfo[][];
