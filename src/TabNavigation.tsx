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
              >
                {content}
              </button>
            );
          })}
      </div>
    </div>
  );
}
