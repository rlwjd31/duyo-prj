import { ComponentProps } from "react";
import { CircleType } from "../../types/polygon";

export type CircleProps = ComponentProps<"div"> & CircleType;

export default function Circle({
  x,
  y,
  size,
  backgroundColor,
  borderColor,
  ...others
}: CircleProps) {
  return (
    <div
      className="absolute rounded-full cursor-pointer border-[3px]"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor,
        borderColor,
      }}
      {...others}
    />
  );
}
