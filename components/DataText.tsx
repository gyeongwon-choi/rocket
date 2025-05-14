import React, { ReactNode } from "react";

interface RowProps {
  textSize: string;
  children?: ReactNode;
  className?: string;
}

export default function DataText({ textSize, children, className }: RowProps) {
  return <span className={`${textSize} ${className}`.trim()}>{children}</span>;
}
