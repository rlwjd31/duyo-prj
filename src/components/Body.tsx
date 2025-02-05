import { useState, useEffect, useRef } from "react";
import Circle from "./atoms/Circle";
import Rectangle from "./atoms/Rectangle";
import { useScale } from "../providers/Scale.provider";
import { useShapes } from "../providers/Shapes.provider";
import { randomColors } from "../contants/colors";

export default function Body() {
  const { currentScale, setCurrentScale } = useScale();
  const [draggingPolygon, setDraggingPolygon] = useState<number | null>(null);
  const { shapes, setShapes } = useShapes();

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
  }, [shapes, setCurrentScale]);

  useEffect(() => {
    const onMouseMoveHandler = (e: MouseEvent) => {
      e.preventDefault();
      if (draggingPolygon === null) return;

      setShapes((prev) =>
        prev.map((shape) =>
          shape.polygonID === draggingPolygon
            ? {
                ...shape,
                x: e.clientX - offsetRef.current.x,
                y: e.clientY - offsetRef.current.y,
              }
            : shape
        )
      );
      // console.log("mouse move x", e.clientX, "mouse move y", e.clientY);
    };

    const onMouseUpHandler = (e: MouseEvent) => {
      e.preventDefault();
      setDraggingPolygon(null);
      window.removeEventListener("mousemove", onMouseMoveHandler);
      window.removeEventListener("mouseup", onMouseUpHandler);
    };

    window.addEventListener("mousemove", onMouseMoveHandler);
    window.addEventListener("mouseup", onMouseUpHandler);
  }, [draggingPolygon, setShapes]);

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
            shape.type === "circle" ? (
              <Circle
                {...shape}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setDraggingPolygon(shape.polygonID);
                  offsetRef.current = {
                    x: e.clientX - shape.x,
                    y: e.clientY - shape.y,
                  };
                  // console.log(e.clientX, e.clientY);
                }}
              />
            ) : (
              <Rectangle
                {...shape}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setDraggingPolygon(shape.polygonID);
                  offsetRef.current = {
                    x: e.clientX - shape.x,
                    y: e.clientY - shape.y,
                  };
                  // console.log(e.clientX, e.clientY);
                }}
              />
            )
          )}
        </div>
      </div>
    </main>
  );
}
