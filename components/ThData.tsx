import React, { ReactNode } from "react";

interface RowProps {
  left: string;
  width: string;
  children?: ReactNode;
}

export default function ThData({ left, width, children }: RowProps) {
  return (
    <th className={`absolute ${left} h-full ${width}`}>
      <p className="flex justify-center items-center flex-col transform-center">
        {children}
      </p>
    </th>
  );
}
