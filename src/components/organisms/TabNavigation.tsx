import { useEffect, useRef, useState } from "react";
import cn from "../../utils/cn";
import { tabs } from "../../contants/tabContents";
import TabDropdown from "./tabitems";
import { useDropdownVisible } from "../../providers/DropdownVisible.provider";

const BUTTON_PADDING = 8;

export default function TabNavigation() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const { toggleDropdown, showDropdown, isDropdownVisible, hideDropdown } =
    useDropdownVisible();

  const tabsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const currentTab = tabsRef.current[activeTabIndex];
    if (currentTab) {
      setUnderlineLeft(currentTab.offsetLeft - BUTTON_PADDING / 2);
      setUnderlineWidth(currentTab.clientWidth - BUTTON_PADDING);
    }
  }, [activeTabIndex]);

  return (
    <div className="relative">
      <div className="relative flex flex-row items-center justify-start gap-x-2">
        {tabs &&
          tabs.length > 0 &&
          tabs.map(({ id, content }, idx) => {
            return (
              <button
                key={id}
                className={cn(
                  `group relative flex cursor-pointer select-none flex-col items-center justify-center rounded py-1 text-sm transition-colors duration-100 hover:bg-gray-200`,
                  activeTabIndex === idx
                    ? "font-bold text-neutral-700"
                    : "font-medium text-neutral-500"
                )}
                style={{
                  paddingLeft: BUTTON_PADDING,
                  paddingRight: BUTTON_PADDING,
                }}
                onClick={() => {
                  showDropdown();
                  setActiveTabIndex(idx);
                }}
                onDoubleClick={() => {
                  toggleDropdown();
                }}
                ref={(el) => (tabsRef.current[idx] = el as HTMLButtonElement)}
              >
                {content}
              </button>
            );
          })}
        <TabUnderLine
          underlineLeft={underlineLeft}
          underlineWidth={underlineWidth}
        />
      </div>
      <TabDropdown tabContent={tabs[activeTabIndex].content} />
    </div>
  );
}

type TabUnderLineProps = {
  underlineLeft: number;
  underlineWidth: number;
};

function TabUnderLine({ underlineLeft, underlineWidth }: TabUnderLineProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 mx-2">
      <span
        className="absolute bottom-0 left-0 block h-0.5 bg-neutral-700 transition-all duration-250 ease-out"
        style={{ left: underlineLeft, width: underlineWidth }}
      />
    </div>
  );
}
