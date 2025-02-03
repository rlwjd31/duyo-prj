import Divider from "../../atoms/Divider";
import IconsLabel from "../../molecules/IconsLabel";
import TabCard from "./TabCard";

export default function InsertTabDropdown() {
  return (
    <TabCard>
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel iconType="newSlide" label="새 슬라이드" />
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          슬라이드
        </div>
      </div>
      <Divider />
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel iconType="textBox" label="텍스트 상자" />
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          텍스트
        </div>
      </div>
      <Divider />
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel iconType="picture" label="그림" />
          <IconsLabel iconType="video" label="비디오" />
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          미디어
        </div>
      </div>
      <Divider />
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel
            containerStyle="cursor-pointer"
            iconType="rectangle"
            label="사각형"
          />
          <IconsLabel
            containerStyle="cursor-pointer"
            iconType="circle"
            label="원"
          />
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          도형
        </div>
      </div>
      <Divider />
    </TabCard>
  );
}
