import React from 'react';

interface ColumnsProps extends React.LiHTMLAttributes<HTMLLIElement> {
  count: number;
}

// 테트리스 한칸
export default function Matrix({ count, ...props }: ColumnsProps) {
  return (
    <>
      {Array.from({ length: count }, (_, j) => (
        <li {...props} key={j}></li>
      ))}
    </>
  );
}
