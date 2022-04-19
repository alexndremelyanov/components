import { jsx } from '@theme-ui/core';
import FocusTrap from 'focus-trap-react';
import { HTMLAttributes } from 'react';
export interface TrapFocusProps extends HTMLAttributes<HTMLDivElement> {}

export const TrapFocus = ({ children }) => {
  return <FocusTrap>{children}</FocusTrap>;
};
