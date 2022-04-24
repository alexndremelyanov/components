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
      sx={{
        ...headingStyles[level],
        margin: 0,
        padding: 0
      }}
      {...rest}
    />
  );
};

export const headingStyles = {
  1: {
    fontSize: '26px',
    fontWeight: 600,
    color: 'text_base'
  },
  2: {
    fontSize: '22px',
    fontWeight: 600,
    color: 'text_base'
  },
  3: {
    fontSize: '18px',
    fontWeight: 600,
    color: 'text_base'
  },
  4: {
    fontSize: '16px',
    fontWeight: 600,
    color: 'text_base'
  },
  5: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'text_base'
  },
  6: {
    fontSize: '12px',
    fontWeight: 600,
    color: 'text_base'
  }
};
