import { useBoardRef } from "../../../providers/BoardRef.provider";
import { useShapes } from "../../../providers/Shapes.provider";
import saveToPNG from "../../../utils/saveToPNG";
import saveToSVG from "../../../utils/saveToSVG";
import Divider from "../../atoms/Divider";
import IconsLabel from "../../molecules/IconsLabel";
import TabCard from "./TabCard";

export default function FileTabDropdown() {
  const { boardRef } = useBoardRef();
  const { shapes } = useShapes();

  return (
    <TabCard>
      <div className="animate-(--animate-fade-slide) flex h-full w-fit px-0.5 flex-col items-center justify-between opacity-100 transform-none">
        <div className="flex flex-row gap-x-0.5">
          <IconsLabel
            containerStyle="cursor-pointer"
            iconType="saveSvg"
            label="SVG로 저장"
            onClick={() => saveToSVG(boardRef!, shapes)}
          />
          <IconsLabel
            containerStyle="cursor-pointer"
            iconType="savePng"
            label="PNG로 저장"
            onClick={() => saveToPNG(boardRef!)}
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
