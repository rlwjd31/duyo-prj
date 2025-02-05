import { ComponentProps } from "react";
import cn from "../../utils/cn";
import Icon, { IconProps } from "../atoms/icons";

type IconsLabelProps = ComponentProps<"div"> &
  IconProps & {
    label?: string;
    containerStyle?: string;
    labelStyle?: string;
  };

export default function IconsLabel({
  iconType,
  label,
  containerStyle = "",
  labelStyle = "",
  ...ohters
}: IconsLabelProps) {
  return (
    <div
      className={cn(
        "animate-(--animate-fade-slide) flex cursor-not-allowed flex-col items-center gap-y-1 rounded px-1.5 py-0.5 transition-all duration-100 hover:bg-neutral-100 active:bg-neutral-200",
        containerStyle
      )}
      {...ohters}
    >
      <Icon iconType={iconType} />
      {label && (
        <span
          className={cn(
            "select-none text-[12.7px] font-medium text-neutral-600",
            labelStyle
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
