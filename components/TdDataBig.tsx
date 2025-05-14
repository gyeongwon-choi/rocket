import React, { ReactNode } from "react";

interface RowProps {
  left: string;
  width: string;
  bg: "transparent" | "black" | "green" | "red";
  children?: ReactNode;
}

export default function TdDataBig({ left, width, bg, children }: RowProps) {
  return (
    <td className={`absolute ${left} h-full ${width}`}>
      <p
        className={`flex justify-center items-center flex-col transform-center w-[80%] h-[80%] rounded-xl ${
          bg === "transparent"
            ? "bg-transparent text-[#2F2F2F] border-1 border-solid"
            : bg === "black"
            ? "bg-[#2F2F2F] text-white"
            : bg === "green"
            ? "bg-[#18868C] text-white"
            : "bg-[#C23030] text-white"
        }`}
      >
        {children}
      </p>
    </td>
  );
}
