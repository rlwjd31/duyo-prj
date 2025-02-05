import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { CircleType, RectangleType } from "../types/polygon";

type DropdownContextType = {
  shapes: Shape[];
  setShapes: Dispatch<SetStateAction<Shape[]>>;
};

type Shape = CircleType | RectangleType;
const ShapesProviderContext = createContext<DropdownContextType | undefined>(
  undefined
);

export function ShapesProvider({ children }: { children: ReactNode }) {
  const [shapes, setShapes] = useState<Shape[]>([]);
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
