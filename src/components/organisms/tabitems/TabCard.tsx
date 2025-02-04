import { ReactNode } from "react";
import { useDropdownVisible } from "../../../providers/DropdownVisible.provider";
import cn from "../../../utils/cn";

export default function TabCard({ children }: { children: ReactNode }) {
  const { isDropdownVisible } = useDropdownVisible();

  return (
    <div className="relative h-0">
      <div
        className={cn(
          "overflow-hidden mt-3 shadow-(--card-shadow) bg-white h-26 flex w-full duration-150 ease-in transition-all items-center gap-x-1.5 rounded-lg px-1.5 py-2",
          isDropdownVisible
            ? "h-[104px] opacity-100 [&_*]:opacity-100 [&_*]:transition-opacity"
            : "h-0 opacity-0 [&_*]:opacity-0 [&_*]:transition-opacity "
        )}
      >
        {isDropdownVisible && children}
      </div>
    </div>
  );
}
