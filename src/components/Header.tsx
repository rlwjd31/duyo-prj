import { useRef } from "react";
import TabNavigation from "./organisms/TabNavigation";
import useCloseOnClickOutside from "../hooks/useCloseOnClickOutside";
import { useDropdownVisible } from "../providers/DropdownVisible.provider";

export default function Header() {
  const { isDropdownVisible, isDropdownFixed, hideDropdown } =
    useDropdownVisible();
  const dropDownRef = useRef<HTMLDivElement>(null);
  useCloseOnClickOutside(
    dropDownRef,
    () => isDropdownVisible && !isDropdownFixed && hideDropdown()
  );

  return (
    <header
      ref={dropDownRef}
      className="bg-gray-100 z-[120] flex w-full flex-col gap-y-2 px-6 pt-4"
    >
      <div className="flex w-full items-center justify-start gap-x-3 py-0.5">
        <div className="left-0 flex items-center justify-start gap-x-3">
          <div className="flex size-7 items-center justify-center rounded-md bg-neutral-700 text-base font-bold text-neutral-50 transition-all duration-100 ease-out hover:bg-neutral-800 active:scale-90 active:bg-neutral-800 cursor-pointer select-none">
            D
          </div>
          <h1
            className="duration-50 min-w-8 rounded bg-transparent px-2 py-0.5 text-base font-medium text-neutral-500 outline-nonering -transparent transition-colors delay-0 selection:bg-neutral-700 select-none"
            data-state="closed"
          >
            Duyo Test
          </h1>
        </div>
      </div>
      <TabNavigation />
    </header>
  );
}
