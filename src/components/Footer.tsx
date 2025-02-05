import { useScale } from "../providers/Scale.provider";
import CustomInputRange from "./atoms/CustomInputRange";
import Icon from "./atoms/icons";

export default function Footer() {
  const { currentScale, setCurrentScale } = useScale();

  return (
    <footer className="z-20 justify-end flex h-6 w-full flex-row bg-neutral-100 items-center border-t border-neutral-300 px-4">
      <div className="flex h-full flex-row items-center gap-x-2">
        <div className="flex flex-row gap-x-1.5">
          <button
            className="h-full px-3 outline-none hover:bg-neutral-200 cursor-pointer"
            onClick={() =>
              setCurrentScale((prev) =>
                prev - 0.02 <= 0.1 ? 0.1 : prev - 0.02
              )
            }
          >
            <Icon iconType="minus" />
          </button>
          <CustomInputRange
            value={+(currentScale * 100).toFixed(0)}
            setValue={setCurrentScale}
          />
          <button
            className="h-full px-3 outline-none hover:bg-neutral-200 cursor-pointer"
            onClick={() =>
              setCurrentScale((prev) => (prev + 0.02 >= 1 ? 1 : prev + 0.02))
            }
          >
            <Icon iconType="plus" />
          </button>
        </div>
        <div
          className="w-10 select-none text-center text-xs font-medium tracking-tight text-neutral-500"
          data-state="closed"
        >
          {`${(currentScale * 100).toFixed(0)}%`}
        </div>
      </div>
    </footer>
  );
}
