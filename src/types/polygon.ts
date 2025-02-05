export type CircleType = {
  polygonID: number;
  type: "circle";
  x: number;
  y: number;
  size: number;
  borderColor: string;
  backgroundColor: string;
};

export type RectangleType = {
  polygonID: number;
  type: "rectangle";
  x: number;
  y: number;
  width: number;
  height: number;
  borderColor: string;
  backgroundColor: string;
};
