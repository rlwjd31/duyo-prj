import { useState, useEffect } from "react";
import Circle, { CircleProps } from "./atoms/Circle";
import Rectangle, { RectangleProps } from "./atoms/Rectangle";
import { useScale } from "../providers/Scale.provider";
import { useDropdownVisible } from "../providers/DropdownVisible.provider";

type Circle = CircleProps & {
  id: number;
  type: "circle";
};

type Rectangle = RectangleProps & {
  id: number;
  type: "rectangle";
};

type Shape = Circle | Rectangle;

export default function Body() {
  const { currentScale, setCurrentScale } = useScale();
  const [shapes] = useState<Shape[]>([
    { id: 1, type: "circle", x: 100, y: 100, size: 50 },
    { id: 2, type: "rectangle", x: 200, y: 150, width: 100, height: 60 },
  ]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.metaKey || event.ctrlKey) {
        event.preventDefault();
        setCurrentScale((prev) =>
          Math.min(Math.max(prev - event.deltaY * 0.001, 0.1), 1)
        );
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="size-full flex justify-center items-center bg-gray-100">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div
          className="duration-100 transition-all ease-out shadow-(--card-shadow) min-h-[900px] min-w-[1600px] w-[800px] h-[600px] bg-white border-[0.35px] rounded-lg border-neutral-300 transform-translate-50-50 transform-origin-center"
          style={{
            transform: `scale(${currentScale})`,
          }}
        >
          {shapes.map((shape) =>
            // TODO: circle, rectangle의 색상 임의의 색상으로 변경
            shape.type === "circle" ? (
              <Circle
                key={shape.id}
                x={shape.x}
                y={shape.y}
                size={shape.size}
              />
            ) : (
              <Rectangle
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
              />
            )
          )}
        </div>
      </div>
    </main>
  );
}

// export const pickerColors = [
//   "#FF8686",
//   "#FFC56F",
//   "#7AE698",
//   "#5EDFFC",
//   "#6979F8",
//   "#CB88FF",
//   "#FF88DE",
// ];
