import { createContext, useContext, useRef } from "react";

const BoardRefContext = createContext<{
  boardRef: React.RefObject<HTMLDivElement> | null;
}>({
  boardRef: null,
});

export const BoardRefProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const boardRef = useRef<HTMLDivElement | null>(null);

  return (
    <BoardRefContext.Provider value={{ boardRef }}>
      {children}
    </BoardRefContext.Provider>
  );
};

export const useBoardRef = () => useContext(BoardRefContext);
