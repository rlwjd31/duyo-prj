import TabCard from "./TabCard";

export default function HelpTabDropdown() {
  return (
    <TabCard>
      <div className="flex h-full w-full select-none flex-col items-start justify-start gap-y-1 px-1.5 py-1">
        <h1 className="text-lg font-bold">2025년 2월 두요 인턴 과제 테스트</h1>
        <div className="flex w-full flex-col items-start justify-start gap-y-0.5">
          <p className="text-sm text-neutral-700">
            이 과제 테스트에서는 React로 웹 애플리케이션을 만드는 능력을
            살펴봅니다.{" "}
            <span className="cursor-not-allowed text-red-500 font-bold">
              금지 마우스 커서
            </span>
            로 된 항목은 구현하지 않는 기능입니다.
          </p>
          <p className="text-sm text-neutral-700">
            마감일은 <strong>2025년 2월 5일 23시 00분</strong>입니다😀
          </p>
        </div>
      </div>
    </TabCard>
  );
}
