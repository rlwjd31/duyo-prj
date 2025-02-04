import { useEffect } from "react";

const useCloseOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const onClickOutsideClose = ({ target }: MouseEvent) => {
      console.log("ref.current", ref.current);
      console.log(
        "ref.current.contains(target as Node)",
        !ref.current!.contains(target as Node)
      );
      if (ref.current && !ref.current.contains(target as Node)) {
        console.log("콜백 실행됨?");
        callback();
      }
    };

    document.addEventListener("click", onClickOutsideClose);

    return () => document.removeEventListener("click", onClickOutsideClose);
  }, [ref, callback]);
};

export default useCloseOnClickOutside;
