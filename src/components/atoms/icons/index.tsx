import SavePng from "./savePng";
import SaveSvg from "./saveSvg";

export type IconType = "saveSvg" | "savePng";

export type IconProps = {
  iconType: IconType;
};

export default function Icon({ iconType }: IconProps) {
  const iconMappedComponents = {
    saveSvg: SaveSvg,
    savePng: SavePng,
  };

  const SelectedIconComponent = iconMappedComponents[iconType];

  return <SelectedIconComponent />;
}
