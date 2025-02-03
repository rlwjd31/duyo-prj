import { FC } from "react";

import FileTabDropdown from "./FileTabDropdown";
import HomeTabDropdown from "./HomeTabDropdown";
import InsertTabDropdown from "./InsertTabDropdown";
import SlideShowTabDropdown from "./SlideShowTabDropdown";
import HelpTabDropdown from "./HelpTabDropdown";
import { tabs } from "../../../contants/tabContents";

type TabContentsType = (typeof tabs)[number]["content"];
type TabDropdownProps = {
  tabContent: TabContentsType;
};

export default function TabDropdown({ tabContent }: TabDropdownProps) {
  const TabDropdownMappedComponents: { [key in TabContentsType]: FC } = {
    파일: FileTabDropdown,
    홈: HomeTabDropdown,
    삽입: InsertTabDropdown,
    슬라이드쇼: SlideShowTabDropdown,
    도움말: HelpTabDropdown,
  };

  const SelectedTabDropdownComponent = TabDropdownMappedComponents[tabContent];

  return <SelectedTabDropdownComponent />;
}
