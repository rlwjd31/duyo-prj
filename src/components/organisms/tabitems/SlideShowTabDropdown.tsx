import Divider from "../../atoms/Divider";
import IconsLabel from "../../molecules/IconsLabel";
import TabCard from "./TabCard";

export default function SlideShowTabDropdown() {
  return (
    <TabCard>
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel iconType="fromStart" label="처음부터" />
          <IconsLabel iconType="fromNowSlide" label="현재 슬라이드부터" />
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          슬라이드 쇼
        </div>
      </div>
      <Divider />
    </TabCard>
  );
}
