import { jsx } from '@theme-ui/core';
import FocusTrapReact from 'focus-trap-react';
import { HTMLAttributes } from 'react';
export interface FocusTrap extends HTMLAttributes<HTMLDivElement> {}
export const FocusTrap = ({ ...rest }: FocusTrap) => {
  return <FocusTrapReact {...rest} />;
};
