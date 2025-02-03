import { ReactNode } from "react";
import { useDropdownVisible } from "../../../providers/DropdownVisible.provider";
import cn from "../../../utils/cn";

export default function TabCard({ children }: { children: ReactNode }) {
  const { isDropdownVisible } = useDropdownVisible();

  console.log("isDropdownVisible", isDropdownVisible);
  return (
    <div
      className={cn(
        "absolute mt-3 shadow-(--card-shadow) bg-white h-26 flex w-full items-center gap-x-1.5 rounded-lg px-1.5 py-2",
        isDropdownVisible
          ? "animate-(--animate-fade-in-slide-down)"
          : "animate-(--animate-fade-out-slide-up)"
      )}
    >
      {children}
    </div>
  );
}
