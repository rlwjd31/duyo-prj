import { FC } from "react";
import CancelIcon from "./Cancel";
import CopyFileIcon from "./CopyFileIcon";
import CopyTextIcon from "./CopyTextIcon";
import CutIcon from "./CutIcon";
import DeleteIcon from "./DeleteIcon";
import PasteIcon from "./PasteIcon";
import SavePng from "./savePng";
import SaveSvg from "./saveSvg";
import TemplateIcon from "./TemplateIcon";
import NewSlideIcon from "./NewSlideIcon";
import TextBoxIcon from "./TextBoxIcon";
import PictureIcon from "./PictureIcon";
import VideoIcon from "./VideoIcon";
import RectangleIcon from "./RectangleIcon";
import CircleIcon from "./CircleIcon";

export type IconType =
  | "saveSvg"
  | "savePng"
  | "cancel"
  | "paste"
  | "cut"
  | "copyfile"
  | "delete"
  | "copytext"
  | "template"
  | "newSlide"
  | "textBox"
  | "picture"
  | "video"
  | "rectangle"
  | "circle";

export type IconProps = {
  iconType: IconType;
};

export default function Icon({ iconType }: IconProps) {
  const iconMappedComponents: { [key in IconType]: FC } = {
    saveSvg: SaveSvg,
    savePng: SavePng,
    cancel: CancelIcon,
    paste: PasteIcon,
    cut: CutIcon,
    copyfile: CopyFileIcon,
    delete: DeleteIcon,
    copytext: CopyTextIcon,
    template: TemplateIcon,
    newSlide: NewSlideIcon,
    textBox: TextBoxIcon,
    picture: PictureIcon,
    video: VideoIcon,
    rectangle: RectangleIcon,
    circle: CircleIcon,
  };

  const SelectedIconComponent = iconMappedComponents[iconType];

  return <SelectedIconComponent />;
}
