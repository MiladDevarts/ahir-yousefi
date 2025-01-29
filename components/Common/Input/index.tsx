import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, required, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={props.id} className="block mb-4 text-lg font-medium">
          {label}
          {required && (
            <span className="inline-block mx-2 font-semibold text-xl text-[#FF0000]">
              *
            </span>
          )}
        </label>
        <div className="rounded-2xl flex items-center w-full h-16 px-4 bg-[#1B1B1B]">
          {icon && icon}
          <input
            ref={ref}
            className={twMerge(
              "rounded-2xl w-10/12 h-full px-4 font-light text-lg bg-transparent text-white placeholder:text-[#A6A6A6] focus:border-none focus:outline-none",
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
