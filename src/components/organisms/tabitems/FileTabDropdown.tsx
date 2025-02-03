import IconsLabel from "../../molecules/IconsLabel";

export default function FileTabDropdown() {
  return (
    // TODO: Container는 다른 atomic pattern level에서 분리.
    <div className="absolute mt-3 shadow-(--card-shadow) bg-white h-26 flex w-full items-center gap-x-1.5 rounded-lg px-1.5 py-2">
      <div className="flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel iconType="saveSvg" label="SVG로 저장" />
          <IconsLabel iconType="savePng" label="PNG로 저장" />
        </div>
        <div className="select-none text-xs text-neutral-600">저장</div>
      </div>
      <div className="h-full w-px bg-neutral-300"></div>
    </div>
  );
}
