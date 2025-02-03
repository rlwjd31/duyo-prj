export default function CancelIcon() {
  return (
    <div className="flex flex-row gap-x-0.5">
      <div className="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-undo2 size-8 cursor-not-allowed rounded stroke-neutral-600 p-2 transition-all duration-100 hover:bg-neutral-100 active:bg-neutral-200"
          data-state="closed"
        >
          <path d="M9 14 4 9l5-5"></path>
          <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-redo2 size-8 cursor-not-allowed rounded stroke-neutral-600 p-2 transition-all duration-100 hover:bg-neutral-100 active:bg-neutral-200"
          data-state="closed"
        >
          <path d="m15 14 5-5-5-5"></path>
          <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
        </svg>
      </div>
    </div>
  );
}
