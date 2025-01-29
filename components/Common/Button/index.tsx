import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  href: string;
  className?: string;
}

const index: React.FC<ButtonProps> = ({ label, href, className = "" }) => {
  const baseStyles = `
    inline-flex items-center justify-center 
    w-auto px-8 py-4 rounded-lg
    bg-[#27272A]
    text-white text-sm font-medium 
    transition-all duration-200 
    hover:bg-zinc-700/90 active:bg-zinc-900/90 
    backdrop-blur-sm
  `;

  // Apply text shadow effect matching the specs
  const textEffect = `
    [text-shadow:_0_0_14px_rgba(255,255,255,0.75)]
  `;

  return (
    <Link
      href={href}
      className={`${baseStyles} ${textEffect}   ${className}`.replace(
        /\s+/g,
        " "
      )}
    >
      {label}
    </Link>
  );
};

export default index;
