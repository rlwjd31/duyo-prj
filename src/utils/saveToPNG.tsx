import html2canvas from "html2canvas-pro";
import { MutableRefObject } from "react";

const saveToPNG = async (
  boardRef: MutableRefObject<HTMLDivElement | null>
) => {
  if (!boardRef.current) return;

  try {
    const container = boardRef.current;
    const canvas = await html2canvas(container, {
      backgroundColor: null,
      useCORS: true,
      scale: 2,
      logging: true,
    });

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

export default saveToPNG;
