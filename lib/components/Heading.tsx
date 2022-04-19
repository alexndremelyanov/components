import { jsx } from '@theme-ui/core';
import { HTMLAttributes, ReactElement } from 'react';
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({ level = 1, ...rest }: HeadingProps) => {
  const Tag: any = `h${level}`;
  //TODO FIX any
  return (
    <Tag
      sx={{ fontWeight: 600, color: 'text_base', margin: 0, padding: 0 }}
      {...rest}
    />
  );
};
