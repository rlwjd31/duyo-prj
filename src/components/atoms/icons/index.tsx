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
import FromStartIcon from "./FromStartIcon";
import FromNowSlideIcon from "./FromNowSlideIcon";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";

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
  | "circle"
  | "fromStart"
  | "fromNowSlide"
  | "minus"
  | "plus";

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
    fromStart: FromStartIcon,
    fromNowSlide: FromNowSlideIcon,
    minus: MinusIcon,
    plus: PlusIcon,
  };

  const SelectedIconComponent = iconMappedComponents[iconType];

  return <SelectedIconComponent />;
}
