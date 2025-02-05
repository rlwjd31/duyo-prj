import { Dispatch, SetStateAction } from "react";
import { MIN_SCALE } from "../../contants/scaleRange";

type CustomInputRangeProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

export default function CustomInputRange({
  value,
  setValue,
}: CustomInputRangeProps) {
  return (
    <div className="flex w-24 items-center justify-center">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        step={1}
        onChange={(e) => {
          setValue(Math.max(+(+e.target.value / 100).toFixed(2), MIN_SCALE));
        }}
        className={`w-full h-1 rounded-lg appearance-none cursor-pointer bg-transparent
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-3
                   [&::-webkit-slider-thumb]:h-3
                   [&::-webkit-slider-thumb]:bg-neutral-500
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:shadow-md
                   [&::-moz-range-thumb]:w-3
                   [&::-moz-range-thumb]:h-3
                   [&::-moz-range-thumb]:bg-neutral-500
                   [&::-moz-range-thumb]:rounded-full`}
        style={{
          background: `linear-gradient(to right, #a1a1a1 ${value}%, #d4d4d4 ${value}%)`,
        }}
      />
    </div>
  );
}
