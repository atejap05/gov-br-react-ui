import { useEffect } from "react";

export type UseClickOutsideProps = {
  onClickOutside: (value: boolean) => void;
  elementRef?: React.RefObject<HTMLElement>;
};

/**
 * Custom hook that detects clicks outside of a specified element.
 * @param onClickOutside - Callback function to be called when a click outside the element occurs.
 * @param elementRef - Ref object that references the element to be checked for clicks outside.
 */
export const useClickOutside = ({
  onClickOutside,
  elementRef,
}: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef?.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        onClickOutside(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside, elementRef]);
};
