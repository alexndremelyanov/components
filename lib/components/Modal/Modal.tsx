import { jsx } from '@theme-ui/core';
import { HTMLAttributes, useCallback, useLayoutEffect, useRef } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { ICON_MEDIUM_SIZE, MODAL_PADDING } from '../../variables';
import { AsButton } from '../AsButton';
import { Box } from '../Box';
import { Portal } from './../Portal';
import { TrapFocus } from './../TrapFocus';
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  size?: 'small' | 'medium' | 'large';
  onClose: () => any;
}
export const Modal = (props: ModalProps) => {
  return props.isOpen ? <RenderedModal {...props} /> : null;
};

const RenderedModal = ({
  onClose,
  size = 'medium',
  isOpen,
  children,
  ...rest
}: ModalProps) => {
  const modalRef = useRef<any>(null);
  const closeModalRef = useRef<any>(null);
  const keyDownHandler = useCallback(
    e => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [modalRef]
  );
  useLayoutEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
  return (
    <Portal {...rest}>
      <TrapFocus>
        <Box
          ref={modalRef}
          onMouseDown={onClose}
          sx={{
            background: 'rgba(0,0,0,0.7)',
            position: 'fixed',
            height: '100%',
            width: '100%',
            top: '0',
            left: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            onMouseDown={e => e.stopPropagation()}
            sx={{
              backgroundColor: 'decorative_subdued',
              display: 'flex',
              width: { small: '600px', medium: '700px', large: '900px' }[size],
              maxHeight: '100%',
              overflow: 'auto',
              position: 'relative',
              borderWidth: '0.1px',
              borderStyle: 'solid',
              borderColor: 'border_base',
              flexDirection: 'column',
              borderRadius: 4
            }}
          >
            <AsButton
              onClick={onClose}
              ref={closeModalRef}
              sx={{
                position: 'absolute',
                right: `${MODAL_PADDING}px`,
                top: `${MODAL_PADDING}px`
              }}
            >
              <IoCloseOutline size={ICON_MEDIUM_SIZE} />
            </AsButton>
            {children}
          </Box>
        </Box>
      </TrapFocus>
    </Portal>
  );
};
