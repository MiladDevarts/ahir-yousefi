"use client";

import SvgMenu from "~/assets/svg/menu.svg";
import SvgClose from "~/assets/svg/close.svg";
import { useMenu } from "@/hooks/useMenu";

export const MenuBtn = () => {
  const { open, close, state } = useMenu();

  return (
    <div
      className="h-[2.625rem] w-[2.625rem] min-md:hidden"
      onClick={() => {
        window.scrollTo(0, 0);
        if (state === "opened") {
          // @ts-expect-error
          window.lenis.isLocked = false;
          close();
        } else {
          // @ts-expect-error
          window.lenis.isLocked = true;
          open();
        }
      }}
    >
      <div className="absolute flex h-[2.625rem] w-[2.625rem] items-center justify-center rounded-full p-2">
        <div className="relative h-full w-full overflow-hidden">
          <div
            className={`absolute flex gap-1 items-center transition-transform ${
              state === "opened" ? "-translate-x-[60%]" : ""
            }`}
          >
            <svg
              width="38"
              height="9"
              viewBox="0 0 38 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 0H38V2H4V0ZM15.5 7H38V9H15.5V7Z" fill="white" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6 18 18 6M18 18 6 6"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
