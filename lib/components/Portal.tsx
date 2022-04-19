import { FC, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
export interface PortalProps {
  targetId?: string;
}
export const Portal: FC<PortalProps> = ({
  children,
  targetId = 'modal-root'
}) => {
  const root = document.getElementById(targetId);
  const el = document.createElement('div');
  useLayoutEffect(() => {
    root?.appendChild(el);
    return () => {
      root?.removeChild(el);
    };
  }, []);
  return ReactDOM.createPortal(children, el);
};
