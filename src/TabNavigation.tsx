import { useEffect, useRef, useState } from "react";
import cn from "./utils/cn";

const tabs = [
  { id: "tab1", content: "파일" },
  { id: "tab2", content: "홈" },
  { id: "tab3", content: "삽입" },
  { id: "tab4", content: "슬라이드쇼" },
  { id: "tab5", content: "도움말" },
];

const BUTTON_PADDING = 8;

export default function TabNavigation() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);

  const tabsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const currentTab = tabsRef.current[activeTabIndex];
    if (currentTab) {
      setUnderlineLeft(currentTab.offsetLeft - BUTTON_PADDING / 2);
      setUnderlineWidth(currentTab.clientWidth - BUTTON_PADDING);
    }
  }, [activeTabIndex]);

  return (
    <div>
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
                onClick={() => setActiveTabIndex(idx)}
                ref={(el) => (tabsRef.current[idx] = el as HTMLButtonElement)}
              >
                {content}
              </button>
            );
          })}
        <div className="absolute bottom-0 left-0 right-0 mx-2">
          <span
            className="absolute bottom-0 left-0 block h-0.5 bg-neutral-700 transition-all duration-250 ease-in"
            style={{ left: underlineLeft, width: underlineWidth }}
          />
        </div>
      </div>
    </div>
  );
}
