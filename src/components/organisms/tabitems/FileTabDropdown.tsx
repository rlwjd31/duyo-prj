import Divider from "../../atoms/Divider";
import IconsLabel from "../../molecules/IconsLabel";
import TabCard from "./TabCard";

export default function FileTabDropdown() {
  return (
    <TabCard>
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel
            containerStyle="cursor-pointer"
            iconType="saveSvg"
            label="SVG로 저장"
          />
          <IconsLabel
            containerStyle="cursor-pointer"
            iconType="savePng"
            label="PNG로 저장"
          />
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          저장
        </div>
      </div>
      <Divider />
    </TabCard>
  );
}
