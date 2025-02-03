import Divider from "../../atoms/Divider";
import IconsLabel from "../../molecules/IconsLabel";
import TabCard from "./TabCard";

export default function HomeTabDropdown() {
  return (
    <TabCard>
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel iconType="cancel" containerStyle="hover:bg-transparent" />
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          실행 취소
        </div>
      </div>
      <Divider />
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel
            iconType="paste"
            labelStyle="text-[12.7px]"
            label="붙여넣기"
          />
          <div className="flex flex-col gap-y-2">
            <IconsLabel
              containerStyle="flex flex-row gap-x-0.5"
              iconType="cut"
              label="자르기"
            />
            <IconsLabel
              containerStyle="flex flex-row gap-x-0.5"
              iconType="copyfile"
              label="복사"
            />
          </div>
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          클립보드
        </div>
      </div>
      <Divider />
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel
            iconType="delete"
            labelStyle="text-red-500"
            label="삭제"
          />
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          삭제
        </div>
      </div>
      <Divider />
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-2">
          <IconsLabel
            iconType="newSlide"
            labelStyle="text-[12.7px]"
            label="새 슬라이드"
          />
          <div className="flex flex-col gap-y-2">
            <IconsLabel
              containerStyle="flex flex-row gap-x-0.5"
              iconType="copytext"
              label="복사"
            />
            <IconsLabel
              containerStyle="flex flex-row gap-x-0.5"
              iconType="template"
              label="템플릿"
            />
          </div>
        </div>
        <div className="select-none text-xs text-neutral-600 opacity-90">
          새 슬라이드
        </div>
      </div>
      <Divider />
    </TabCard>
  );
}
