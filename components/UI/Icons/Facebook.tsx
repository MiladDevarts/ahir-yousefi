import React from "react";

type Props = {
  color?: string;
};

const Facebook = ({ color = "white" }: Props) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 12.5C23 6.701 18.0751 2 12 2C5.92487 2 1 6.701 1 12.5C1 17.7409 5.02254 22.0847 10.2813 22.8724V15.5352H7.48829V12.5H10.2813V10.1867C10.2813 7.55516 11.9235 6.10157 14.4361 6.10157C15.6396 6.10157 16.8985 6.30664 16.8985 6.30664V8.89063H15.5114C14.1449 8.89063 13.7188 9.7 13.7188 10.5304V12.5H16.7695L16.2818 15.5352H13.7188V22.8724C18.9775 22.0847 23 17.7409 23 12.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Facebook;
