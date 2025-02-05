import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { CircleProps } from "../components/atoms/Circle";
import { RectangleProps } from "../components/atoms/Rectangle";

type DropdownContextType = {
  shapes: Shape[];
  setShapes: Dispatch<SetStateAction<Shape[]>>;
};

type Circle = Pick<CircleProps, "x" | "y" | "size"> & {
  id: number;
  type: "circle";
};

type Rectangle = Pick<RectangleProps, "x" | "y" | "width" | "height"> & {
  id: number;
  type: "rectangle";
};

type Shape = Circle | Rectangle;
const ShapesProviderContext = createContext<DropdownContextType | undefined>(
  undefined
);

export function ShapesProvider({ children }: { children: ReactNode }) {
  const [shapes, setShapes] = useState<Shape[]>([
    { id: 1, type: "circle", x: -100, y: 100, size: 50 },
    { id: 2, type: "rectangle", x: 200, y: 150, width: 100, height: 60 },
  ]);
  return (
    <ShapesProviderContext.Provider
      value={{
        shapes,
        setShapes,
      }}
    >
      {children}
    </ShapesProviderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useShapes() {
  const context = useContext(ShapesProviderContext);

  if (!context) {
    throw new Error("useShapes must be used within a ShapesProvider");
  }

  return context;
}
