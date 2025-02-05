import { ComponentProps } from "react";

export type CircleProps = ComponentProps<'div'> & {
  x: number;
  y: number;
  size: number;
};

export default function Circle({ x, y, size, ...others }: CircleProps) {
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
      {...others}
    />
  );
}
