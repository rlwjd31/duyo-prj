import { useState, useEffect } from "react";

export default function Body() {
  const [scale, setScale] = useState(1);
  const [shapes] = useState([
    { id: 1, type: "circle", x: 100, y: 100, size: 50 },
    { id: 2, type: "rectangle", x: 200, y: 150, width: 100, height: 60 },
  ]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.metaKey || event.ctrlKey) {
        event.preventDefault();
        setScale((prev) =>
          Math.min(Math.max(prev - event.deltaY * 0.001, 0.5), 3)
        );
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="w-dvw h-dvh flex justify-center items-center bg-gray-100">
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 800,
          height: 600,
          background: "#fff",
          border: "2px solid #ccc",
          transform: `translate(-50%, -50%) scale(${scale})`, // ✅ 중앙 기준 확대/축소
          transformOrigin: "center", // ✅ Board 중심 기준
        }}
      >
        {shapes.map((shape) =>
          shape.type === "circle" ? (
            <div
              key={shape.id}
              style={{
                position: "absolute",
                left: `${shape.x}px`,
                top: `${shape.y}px`,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                background: "blue",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          ) : (
            <div
              key={shape.id}
              style={{
                position: "absolute",
                left: `${shape.x}px`,
                top: `${shape.y}px`,
                width: `${shape.width}px`,
                height: `${shape.height}px`,
                background: "red",
                cursor: "pointer",
              }}
            />
          )
        )}
      </div>
    </div>
  );
}
