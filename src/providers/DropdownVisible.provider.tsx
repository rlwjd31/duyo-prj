import { createContext, useContext, useState, ReactNode } from "react";

type DropdownContextType = {
  isDropdownVisible: boolean;
  isDropdownFixed: boolean;
  hideDropdown: () => void;
  showDropdown: () => void;
  toggleDropdown: () => void;
  toggleDropdownFixed: () => void;
};

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export function DropdownProvider({ children }: { children: ReactNode }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const [isDropdownFixed, setIsDropdownFixed] = useState(true);

  const showDropdown = () => setIsDropdownVisible(true);
  const hideDropdown = () => setIsDropdownVisible(false);
  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);
  const toggleDropdownFixed = () => setIsDropdownFixed((prev) => !prev);

  return (
    <DropdownContext.Provider
      value={{
        isDropdownVisible,
        showDropdown,
        hideDropdown,
        toggleDropdown,
        toggleDropdownFixed,
        isDropdownFixed,
      }}
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
