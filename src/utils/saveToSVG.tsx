import { MutableRefObject } from "react";
import { Shape } from "../providers/Shapes.provider";

const saveToSVG = (
  boardRef: MutableRefObject<HTMLDivElement | null>,
  shapes: Shape[]
) => {
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

export default saveToSVG;
