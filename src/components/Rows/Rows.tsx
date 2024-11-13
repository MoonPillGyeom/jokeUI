import React from 'react';
interface RowsProps extends React.LiHTMLAttributes<HTMLElement> {
  count: number;
}

// 테트리스 가로열
export default function Rows({ count, ...props }: RowsProps) {
  return (
    <>
      {Array.from({ length: count }, (_, j) => (
        <li {...props} key={j}>
          {props.children}
        </li>
      ))}
    </>
  );
}
