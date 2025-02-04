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
  const {
    toggleDropdown,
    isDropdownFixed,
    toggleDropdownFixed,
    showDropdown,
    isDropdownVisible,
  } = useDropdownVisible();

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
                onClick={(e) => {
                  const isDoubleClicked = e.detail === 2;
                  setActiveTabIndex(idx);

                  if (isDoubleClicked) {
                    // double click까지 총 3번의 event가 발생하므로 한 번을 더 토글시켜 원하는 dropdown visible상태를 유지
                    toggleDropdown();
                    toggleDropdownFixed();
                  }

                  // 리본 고정 모드일 때는 dropdown visible toggle을 하지 않음.
                  // 이전 활성화된 tabIndex와 이전 tabIndex가 같다면 toggleDropdown 실행
                  // 리본 고정이 해제된 상태에서는 다른 탭을 클릭할 시 toggoleDropdown으로 인해 visible값이 true -> false -> true -> false와 같은 현상이 일어남.
                  if (!isDropdownFixed)
                    return activeTabIndex === idx
                      ? toggleDropdown()
                      : showDropdown();

                  // isDropdownFixed가 true일 때는 dropdown visible toggle을 하지 않음.
                  // 처음에 isDropdownFixed = true & isDropdownVisible = true이며,
                  // 이전 isDropdownVisible 상태가 true이기 때문에 총 두 번이 일어나 dropdown이 사라지지 않아 !isDropdownVisible일 때만 dropdown을 보여줌
                  if (!isDropdownVisible) showDropdown();
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
