import { useState, useEffect, useRef } from "react";
import Circle from "./atoms/Circle";
import Rectangle from "./atoms/Rectangle";
import { useScale } from "../providers/Scale.provider";
import { useShapes } from "../providers/Shapes.provider";
import { MAX_SCALE, MIN_SCALE } from "../contants/scaleRange";
import html2canvas from "html2canvas";

export default function Body() {
  const { currentScale, setCurrentScale } = useScale();
  const [draggingPolygon, setDraggingPolygon] = useState<number | null>(null);
  const { shapes, setShapes } = useShapes();
  const boardRef = useRef<HTMLDivElement | null>(null);

  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.metaKey || event.ctrlKey) {
        event.preventDefault();
        setCurrentScale((prev) =>
          Math.min(Math.max(prev - event.deltaY * 0.001, MIN_SCALE), MAX_SCALE)
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

      const deltaX = (e.clientX - offsetRef.current.x) / currentScale;
      const deltaY = (e.clientY - offsetRef.current.y) / currentScale;

      setShapes((prev) =>
        prev.map((shape) =>
          shape.polygonID === draggingPolygon
            ? {
                ...shape,
                x: shape.x + deltaX,
                y: shape.y + deltaY,
              }
            : shape
        )
      );
      offsetRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const onMouseUpHandler = (e: MouseEvent) => {
      e.preventDefault();
      setDraggingPolygon(null);
      window.removeEventListener("mousemove", onMouseMoveHandler);
      window.removeEventListener("mouseup", onMouseUpHandler);
    };

    window.addEventListener("mousemove", onMouseMoveHandler);
    window.addEventListener("mouseup", onMouseUpHandler);
  }, [draggingPolygon, setShapes, currentScale]);

  const handleExportSVG = () => {
    if (!boardRef.current) return;

    const container = boardRef.current;
    const { width, height } = container.getBoundingClientRect();

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width.toString());
    svg.setAttribute("height", height.toString());
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.style.background = "transparent";

    shapes.forEach((shape) => {
      if (shape.type === "rectangle") {
        const rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        rect.setAttribute("x", shape.x.toString());
        rect.setAttribute("y", shape.y.toString());
        rect.setAttribute("width", shape.width.toString());
        rect.setAttribute("height", shape.height.toString());
        rect.setAttribute("fill", shape.backgroundColor);
        rect.setAttribute("stroke", shape.borderColor);
        rect.setAttribute("stroke-width", "3");
        svg.appendChild(rect);
      } else if (shape.type === "circle") {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("cx", shape.x.toString()); // 중심 좌표 그대로 사용
        circle.setAttribute("cy", shape.y.toString()); // 중심 좌표 그대로 사용
        circle.setAttribute("r", (shape.size / 2).toString());
        circle.setAttribute("fill", shape.backgroundColor);
        circle.setAttribute("stroke", shape.borderColor);
        circle.setAttribute("stroke-width", "3");
        svg.appendChild(circle);
      }
    });

    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svg)], {
      type: "image/svg+xml",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(svgBlob);
    link.download = "paper.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // @FIXME: html2canvas를 사용하면 브라우저 또는 CSS 파서가 oklch() 색상 함수를 지원하지 않기 때문에 canvas 생성 시 오류 발생함
  const handleExportPNG = async () => {
    if (!boardRef.current) return;

    try {
      const container = boardRef.current;
      const canvas = await html2canvas(container, {
        backgroundColor: null,
        useCORS: true,
        scale: 2,
        logging: true,
      });
      console.log("실행됨");

      console.log("canvas", canvas);

      const { width, height, left, top } = container.getBoundingClientRect();

      const croppedCanvas = document.createElement("canvas");
      croppedCanvas.width = width * 2;
      croppedCanvas.height = height * 2;
      document.body.appendChild(croppedCanvas);
      const ctx = croppedCanvas.getContext("2d")!;

      ctx.drawImage(
        canvas,
        left * 2,
        top * 2,
        width * 2,
        height * 2,
        0,
        0,
        width * 2,
        height * 2
      );

      const image = croppedCanvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "paper.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Export Error:", error);
    }
  };
  return (
    <main className="size-full flex justify-center items-center bg-gray-100">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div
          className="duration-200 transition-all ease-out shadow-(--card-shadow) min-h-[900px] min-w-[1600px] w-[800px] h-[600px] bg-white border-[0.35px] rounded-lg border-neutral-300 transform-translate-50-50 transform-origin-center"
          style={{
            transform: `scale(${currentScale})`,
          }}
          ref={boardRef}
        >
          {shapes.map((shape) =>
            shape.type === "circle" ? (
              <Circle
                {...shape}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setDraggingPolygon(shape.polygonID);
                  offsetRef.current = {
                    x: e.clientX,
                    y: e.clientY,
                  };
                }}
              />
            ) : (
              <Rectangle
                {...shape}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setDraggingPolygon(shape.polygonID);
                  offsetRef.current = {
                    x: e.clientX,
                    y: e.clientY,
                  };
                }}
              />
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button
          className="size-32 bg-black text-white cursor-pointer"
          onClick={handleExportSVG}
        >
          svg저장
        </button>
        <button
          className="size-32 bg-black text-white cursor-pointer"
          onClick={handleExportPNG}
        >
          png저장
        </button>
      </div>
    </main>
  );
}
