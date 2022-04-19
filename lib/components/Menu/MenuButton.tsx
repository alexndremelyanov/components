import { jsx } from '@theme-ui/core';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import {
  BUTTON_BORDER_RADIUS,
  ICON_MEDIUM_SIZE,
  ICON_SMALL_SIZE
} from '../../variables';
import { AsButton } from '../AsButton';
import { Box } from '../Box';
export interface MenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
}

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, disabled, isOpen, ...rest }: MenuButtonProps, ref) => {
    return (
      <AsButton
        ref={ref}
        disabled={disabled}
        sx={{
          backgroundColor: isOpen
            ? 'background_elevated_highlight'
            : 'text_negative',
          borderRadius: `${BUTTON_BORDER_RADIUS}px`,
          padding: '3px 6px 3px 12px',
          gap: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(!disabled && {
            '&:hover, &:focus-visible, &:active': {
              backgroundColor: 'background_elevated_highlight'
            }
          })
        }}
        {...rest}
      >
        {children}
        {isOpen ? (
          <MdOutlineArrowDropUp
            sx={{ '& > *': { color: 'text_base' } }}
            size={ICON_SMALL_SIZE}
          />
        ) : (
          <MdOutlineArrowDropDown
            sx={{ '& > *': { color: 'text_base' } }}
            size={ICON_SMALL_SIZE}
          />
        )}
      </AsButton>
    );
  }
);
