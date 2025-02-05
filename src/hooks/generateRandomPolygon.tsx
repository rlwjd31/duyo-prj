import { randomColors } from "../contants/colors";
import { useShapes } from "../providers/Shapes.provider";

export default function useGenerateRandomPolygon() {
  const { setShapes } = useShapes();

  const generateRandomCircle = () => {
    const x = Math.floor(Math.random() * (1800 - -200 + 1)) - 200; // (max - (-min) + 1) - min
    const y = Math.floor(Math.random() * (1200 - -200 + 1)) - 200;
    const size = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
    const borderColor =
      randomColors[Math.floor(Math.random() * randomColors.length)];
    const backgroundColor =
      randomColors[Math.floor(Math.random() * randomColors.length)];
    setShapes((prev) => [
      ...prev,
      {
        polygonID: prev.length + 1,
        type: "circle",
        x,
        y,
        size,
        backgroundColor,
        borderColor,
      },
    ]);
  };
  const generateRandomRectangle = () => {
    const x = Math.floor(Math.random() * (1400 - -300 + 1)) - 300; // (max - (-min) + 1) - min
    const y = Math.floor(Math.random() * (1000 - -300 + 1)) - 300;
    const width = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
    const height = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
    const borderColor =
      randomColors[Math.floor(Math.random() * randomColors.length)];
    const backgroundColor =
      randomColors[Math.floor(Math.random() * randomColors.length)];

    setShapes((prev) => [
      ...prev,
      {
        polygonID: prev.length + 1,
        type: "rectangle",
        x,
        y,
        width,
        height,
        backgroundColor,
        borderColor,
      },
    ]);
  };

  return { generateRandomCircle, generateRandomRectangle };
}
