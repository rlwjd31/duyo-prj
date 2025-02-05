import { useState, useEffect, useRef } from "react";
import Circle, { CircleProps } from "./atoms/Circle";
import Rectangle, { RectangleProps } from "./atoms/Rectangle";
import { useScale } from "../providers/Scale.provider";

type Circle = Pick<CircleProps, "x" | "y" | "size"> & {
  id: number;
  type: "circle";
};

type Rectangle = Pick<RectangleProps, "x" | "y" | "width" | "height"> & {
  id: number;
  type: "rectangle";
};

type Shape = Circle | Rectangle;

export default function Body() {
  const { currentScale, setCurrentScale } = useScale();
  const [draggingPolygon, setDraggingPolygon] = useState<number | null>(null);
  const [shapes, setShapes] = useState<Shape[]>([
    { id: 1, type: "circle", x: -100, y: 100, size: 50 },
    { id: 2, type: "rectangle", x: 200, y: 150, width: 100, height: 60 },
  ]);
  const offsetRef = useRef({ x: 0, y: 0 });

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
  }, [shapes]);

  useEffect(() => {
    const onMouseMoveHandler = (e: MouseEvent) => {
      e.preventDefault();
      if (draggingPolygon === null) return;

      setShapes((prev) =>
        prev.map((shape) =>
          shape.id === draggingPolygon
            ? {
                ...shape,
                x: e.clientX - offsetRef.current.x,
                y: e.clientY - offsetRef.current.y,
              }
            : shape
        )
      );
      console.log("mouse move x", e.clientX, "mouse move y", e.clientY);
    };

    const onMouseUpHandler = (e: MouseEvent) => {
      e.preventDefault();
      setDraggingPolygon(null);
      window.removeEventListener("mousemove", onMouseMoveHandler);
      window.removeEventListener("mouseup", onMouseUpHandler);
    };

    window.addEventListener("mousemove", onMouseMoveHandler);
    window.addEventListener("mouseup", onMouseUpHandler);
  }, [draggingPolygon]);

  return (
    <main className="size-full flex justify-center items-center bg-gray-100">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div
          className="duration-200 transition-all ease-out shadow-(--card-shadow) min-h-[900px] min-w-[1600px] w-[800px] h-[600px] bg-white border-[0.35px] rounded-lg border-neutral-300 transform-translate-50-50 transform-origin-center"
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
                onMouseDown={(e) => {
                  e.preventDefault();
                  setDraggingPolygon(shape.id);
                  offsetRef.current = {
                    x: e.clientX - shape.x,
                    y: e.clientY - shape.y,
                  };
                  console.log(e.clientX, e.clientY);
                }}
              />
            ) : (
              <Rectangle
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setDraggingPolygon(shape.id);
                  offsetRef.current = {
                    x: e.clientX - shape.x,
                    y: e.clientY - shape.y,
                  };
                  console.log(e.clientX, e.clientY);
                }}
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
