import React from "react";
import { twMerge } from "tailwind-merge";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, required, className, ...props }, ref) => {
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
        <textarea
          ref={ref}
          className={twMerge(
            "rounded-2xl text-white flex text-sm font-light items-center w-full h-32 p-4 placeholder:text-[#A6A6A6] bg-[#1B1B1B] focus:outline-none",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
