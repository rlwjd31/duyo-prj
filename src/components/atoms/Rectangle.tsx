export type RectangleProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export default function Rectangle({ x, y, width, height }: RectangleProps) {
  return (
    <div
      className="absolute cursor-pointer border-[3px]"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        background: "red",
        borderColor: "black",
      }}
    />
  );
}
