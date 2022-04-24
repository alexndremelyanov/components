import { jsx } from '@theme-ui/core';
import { HTMLAttributes } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}
export const Paragraph = ({ ...rest }: ParagraphProps) => {
  return (
    <p sx={{ margin: 0, padding: 0, boxSizing: 'border-box' }} {...rest} />
  );
};
