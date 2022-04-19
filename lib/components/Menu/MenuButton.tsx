import { jsx } from '@theme-ui/core';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { BUTTON_BORDER_RADIUS, ICON_SMALL_SIZE } from '../../variables';
import { AsButton } from '../AsButton';

export interface MenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  manager: any;
}
export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, manager, disabled, ...rest }: MenuButtonProps, __) => {
    const { display, reference, hide, show } = manager;
    const isOpen = display === 'visible';
    return (
      <AsButton
        ref={reference}
        onClick={() => (isOpen ? hide() : show())}
        disabled={disabled}
        sx={{
          width: 'fit-content',
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
