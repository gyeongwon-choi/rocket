import React, { ReactNode } from 'react';

interface RowProps {
  top: string;
  height: string;
  children?: ReactNode;
}

export default function Row({top, height, children }: RowProps) {
  return (
    <tr className={`absolute left-0 right-0 ${top} ${height}`}>
      {children}
    </tr>
  );
}
