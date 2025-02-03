import { ReactNode } from "react";

export default function TabCard({ children }: { children: ReactNode }) {
  return (
    <div className="absolute mt-3 shadow-(--card-shadow) bg-white h-26 flex w-full items-center gap-x-1.5 rounded-lg px-1.5 py-2">
      {children}
    </div>
  );
}
