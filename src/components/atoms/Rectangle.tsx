import { ComponentProps } from "react";
import { RectangleType } from "../../types/polygon";

export type RectangleProps = ComponentProps<"div"> & RectangleType;

export default function Rectangle({
  x,
  y,
  width,
  height,
  backgroundColor,
  borderColor,
  ...others
}: RectangleProps) {
  return (
    <div
      className="absolute cursor-pointer border-[3px]"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      }}
      {...others}
    />
  );
}
