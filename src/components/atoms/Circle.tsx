export type CircleProps = {
  x: number;
  y: number;
  size: number;
};

export default function Circle({ x, y, size }: CircleProps) {
  return (
    <div
      className="absolute rounded-full cursor-pointer border-[3px]"
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        background: "blue",
        borderRadius: "50%",
        borderColor: "black",
      }}
    />
  );
}
