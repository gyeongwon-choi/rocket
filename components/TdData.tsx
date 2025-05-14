import React, { ReactNode } from "react";

interface RowProps {
  left: string;
  width: string;
  children?: ReactNode;
}

export default function TdData({ left, width, children }: RowProps) {
  return (
    <td className={`absolute ${left} h-full ${width}`}>
      <p className="flex justify-center items-center flex-col transform-center">
        {children}
      </p>
    </td>
  );
}
