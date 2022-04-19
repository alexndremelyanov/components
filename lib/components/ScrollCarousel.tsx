import { jsx } from '@theme-ui/core';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Box, BoxProps } from './Box';

export interface ScrollCarousel extends BoxProps {}
export const ScrollCarousel = ({ children, ...rest }: ScrollCarousel) => {
  let scrl = useRef<any>(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const slide = shift => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  useEffect(() => {
    scrollCheck();
  }, [scrl.current?.scrollWidth]);
  return (
    <Box sx={{ position: 'relative', width: '100%' }} {...rest}>
      {scrollX !== 0 && (
        <button
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            height: 'calc(100% + 2px)',
            backdropFilter: 'blur(2px)',
            aspectRatio: '1/1',
            display: 'flex',
            width: '30px',
            alignItems: 'center',
            transform: 'translateY(-50%)'
          }}
          onClick={() => slide(-50)}
        >
          <MdKeyboardArrowLeft
            sx={{ marginLeft: 'auto', '& > *': { color: 'text_base' } }}
            size={32}
          />
        </button>
      )}
      <Box
        ref={scrl}
        onScroll={scrollCheck}
        sx={{
          overflow: 'scroll',
          maxWidth: '100%',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
        {...rest}
      >
        {children}
      </Box>
      {!scrolEnd && (
        <button
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            height: 'calc(100% + 2px)',
            display: 'flex',
            width: '30px',
            alignItems: 'center',
            backdropFilter: 'blur(2px)',
            aspectRatio: '1/1',
            justifyContent: 'flex-start',
            transform: 'translateY(-50%)'
          }}
          onClick={() => slide(+50)}
        >
          <MdKeyboardArrowRight
            sx={{ '& > *': { color: 'text_base' } }}
            size={32}
          />
        </button>
      )}
    </Box>
  );
};
