export interface Cell {
  filledWith: Marker;
  row: number;
}

export enum Marker {
  heart,
  cross,
  unmarked
}
