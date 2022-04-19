import { jsx } from '@theme-ui/core';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Fragment, useContext } from 'react';
import { List, WindowScroller } from 'react-virtualized';
import {
  EllipsisText,
  LayoutContext,
  LAYOUT_BODY_PADDING,
  LAYOUT_HEADER_HEIGHT,
  ResizableBox,
  Switch,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  useDebounce,
  useDefaultColumns,
  Anchor
} from '../../../../lib';
import { getData } from '../../../utils';
import { PreLayout } from '../../_app';
const data = getData();
const id = 'aboba-collection-table';
const Page = () => {
  const columns = useDefaultColumns([
    {
      renderTitle: title => (
        <TableHeadCell>
          <span>{title}</span>
        </TableHeadCell>
      ),
      title: 'Id',
      accessor: 'id',
      minWidth: 40,
      render: datum => (
        <TableCell sx={{ width: '100%' }}>
          <Link passHref href="/exploration/tasks/3">
            <Anchor sx={{ color: 'inherit', width: '100%' }}>
              <EllipsisText>{datum.id + 831092}</EllipsisText>
            </Anchor>
          </Link>
        </TableCell>
      )
    },
    {
      title: 'Active',
      accessor: 'isActive',
      minWidth: 70,
      render: datum => {
        return (
          <TableCell>
            <Switch checked={false} />
          </TableCell>
        );
      }
    },
    { title: 'Name', accessor: 'first_name' },
    { title: 'Last name', accessor: 'last_name', width: 300 },
    { title: 'Email', accessor: 'email' },
    { title: 'gender', accessor: 'gender' },
    { title: 'Id address', accessor: 'ip_address' }
  ]);
  return (
    <Fragment>
      <Table data={data} id={id} columns={columns} />
      <WindowScroller>
        {value => (
          <LayoutContext.Provider value={value}>
            <PageTable id="hard" data={data} columns={columns} />
          </LayoutContext.Provider>
        )}
      </WindowScroller>
    </Fragment>
  );
};
Page.getLayout = page => {
  return (
    <PreLayout
      conversion={{
        '/exploration': 'Exploration',
        '/exploration/tasks': 'Tasks'
      }}
    >
      {page}
    </PreLayout>
  );
};

const PageTable = ({ data, columns, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const listener = useDebounce(() => {
    if (
      (ref.current?.getBoundingClientRect().top ?? 0) <= LAYOUT_HEADER_HEIGHT
    ) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, 5);
  useLayoutEffect(() => {
    listener();
    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);
  const { height, isScrolling, scrollTop } = useContext(LayoutContext);
  const rowRenderer = ({ index, style }) => {
    return (
      <TableRow key={index} style={style}>
        {columns.map(c => (
          <div key={c.accessor} className={`${id}-${c.accessor}`}>
            {c.render?.(data[index]) ?? (
              <TableCell>{data[index][c.accessor]}</TableCell>
            )}
          </div>
        ))}
      </TableRow>
    );
  };
  return (
    <div sx={{}}>
      <TableHead
        ref={ref}
        sx={{
          backgroundColor: isSticky ? '#181818' : 'transparent',
          position: 'sticky',
          zIndex: 2,
          paddingY: '10px',
          width: `100%`,
          top: LAYOUT_HEADER_HEIGHT,
          ...(isSticky && {
            paddingLeft: `${LAYOUT_BODY_PADDING}px`,
            marginLeft: `-${LAYOUT_BODY_PADDING}px`
          })
        }}
      >
        {columns.map(column => (
          <div key={column.accessor} sx={{ paddingX: '8px' }}>
            {column.title}
          </div>
        ))}
      </TableHead>
      <div sx={{ minWidth: 0, overflowX: 'scroll' }}>
        <List
          autoHeight
          height={height}
          isScrolling={isScrolling}
          rowCount={data.length}
          rowHeight={50}
          width={1200}
          rowRenderer={rowRenderer}
          scrollTop={scrollTop}
        />
      </div>
    </div>
  );
};
const Table = ({ data, columns, id, ...rest }) => {
  return (
    <div
      role="table"
      sx={{
        width: '100%',
        minWidth: 0,
        overflowX: 'scroll',
        '& > div > div': Object.assign(
          {},
          ...columns.map(column => ({
            [`.${id}-${column.accessor}`]: {
              width: column.width
            }
          }))
        )
      }}
      {...rest}
    >
      <TableHead sx={{ width: 'fit-content' }}>
        {columns.map(column => {
          const onResize = useCallback(width => {
            document
              .querySelectorAll(`.${id}-${column.accessor}`)
              .forEach(i =>
                i.setAttribute(
                  'style',
                  `min-width: ${width}px; width: ${width}px; max-width: ${width}px`
                )
              );
          }, []);
          return (
            <ResizableBox
              key={column.accessor}
              minWidth={column.minWidth}
              onResize={onResize}
              maxWidth={column.maxWidth}
              width={column.width}
            >
              {column.renderTitle?.(column.title) ?? (
                <TableHeadCell>{column.title}</TableHeadCell>
              )}
            </ResizableBox>
          );
        })}
      </TableHead>
      <div>
        {data.slice(0, 10).map(datum => (
          <TableRow key={datum.id}>
            {columns.map(c => (
              <div key={c.accessor} className={`${id}-${c.accessor}`}>
                {c.render?.(datum) ?? (
                  <TableCell>{datum[c.accessor]}</TableCell>
                )}
              </div>
            ))}
          </TableRow>
        ))}
      </div>
    </div>
  );
};
export default Page;
export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
