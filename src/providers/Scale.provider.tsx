import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type DropdownContextType = {
  currentScale: number;
  setCurrentScale: Dispatch<SetStateAction<number>>;
};

const ScaleProviderContext = createContext<DropdownContextType | undefined>(
  undefined
);

export function ScaleProvider({ children }: { children: ReactNode }) {
  const [currentScale, setCurrentScale] = useState<number>(0.93);

  return (
    <ScaleProviderContext.Provider
      value={{
        currentScale,
        setCurrentScale,
      }}
    >
      {children}
    </ScaleProviderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useScale() {
  const context = useContext(ScaleProviderContext);

  if (!context) {
    throw new Error("useDropdown must be used within a ScaleProvider");
  }

  return context;
}
