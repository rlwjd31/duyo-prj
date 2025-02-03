import { createContext, useContext, useState, ReactNode } from "react";

type DropdownContextType = {
  isDropdownVisible: boolean;
  hideDropdown: () => void;
  showDropdown: () => void;
  toggleDropdown: () => void;
};

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export function DropdownProvider({ children }: { children: ReactNode }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);

  const showDropdown = () => setIsDropdownVisible(true);
  const hideDropdown = () => setIsDropdownVisible(false);
  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);

  return (
    <DropdownContext.Provider
      value={{ isDropdownVisible, showDropdown, hideDropdown, toggleDropdown }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDropdownVisible() {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }

  return context;
}
