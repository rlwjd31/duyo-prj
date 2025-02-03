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
        // @FIXME: double click이 아닌 click 이벤트 발생에도 animate-fade-in-slide-down이 발생함.
        isDropdownVisible
          ? "animate-(--animate-fade-in-slide-down)"
          : "animate-(--animate-fade-out-slide-up)"
      )}
    >
      {children}
    </div>
  );
}
