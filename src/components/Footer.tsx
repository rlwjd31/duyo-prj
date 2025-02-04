import CustomInputRange from "./atoms/CustomInputRange";
import Icon from "./atoms/icons";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 z-20 justify-end flex h-6 w-full flex-row items-center border-t border-neutral-300 px-4">
      <div className="flex h-full flex-row items-center gap-x-2">
        <div className="flex flex-row gap-x-1.5">
          <button className="h-full px-3 outline-none hover:bg-neutral-200">
            <Icon iconType="minus" />
          </button>
          <CustomInputRange />
          <button className="h-full px-3 outline-none hover:bg-neutral-200">
            <Icon iconType="plus" />
          </button>
        </div>
        {/* 퍼센트 */}
        <div
          className="w-10 select-none text-center text-xs font-medium tracking-tight text-neutral-500"
          data-state="closed"
        >
          48%
        </div>
      </div>
    </footer>
  );
}
