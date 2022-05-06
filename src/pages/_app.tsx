import { Global } from '@emotion/react';
import { jsx } from '@theme-ui/core';
import Cookies from 'js-cookie';
import App from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect } from 'react';
import { Fragment, useCallback, useState } from 'react';
import { BiDevices, BiWater } from 'react-icons/bi';
import { BsServer } from 'react-icons/bs';
import { GiSlicedBread } from 'react-icons/gi';
import { ImUsers } from 'react-icons/im';
import { IoSettings } from 'react-icons/io5';
import {
  MdOutlineSpaceDashboard,
  MdOutlineTravelExplore
} from 'react-icons/md';
import {
  EllipsisText,
  LayoutNavbarHeader,
  LayoutNavbarBody,
  Container,
  Layout,
  LayoutNavbar,
  LayoutBody,
  GradientTransition,
  LayoutBodyHeader,
  LayoutBodyMain,
  LAYOUT_HEADER_HEIGHT,
  BreadCrumbs,
  BreadCrumb,
  LAYOUT_BODY_PADDING,
  LAYOUT_HEADER_HEX_COLOR,
  ScrollCarousel,
  Anchor,
  Heading,
  encoreDarkScheme
} from '../../lib';
import 'simplebar/dist/simplebar.min.css';
import 'react-virtualized/styles.css';

export const HeadItemsContext = createContext({} as any);
const CustomApp = ({ Component, pageProps, ui }) => {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <Container>
      <Global
        styles={{
          'html, body': {
            colorScheme: 'dark',
            overscrollBehaviorY: 'none',
            margin: 0,
            padding: 0,
            fontSize: '14px'
          },
          '*': {
            boxSizing: 'border-box',
            fontFamily: 'Montserrat, sans-serif',
            color: encoreDarkScheme.colors.text_subdued
          }
        }}
      />
      <Layout>
        <LayoutNavbar
          width={ui.sidebarWidth}
          maxWidth={390}
          minWidth={140}
          onResize={w => Cookies.set('sidebarWidth', w)}
        >
          <LayoutNavbarHeader>
            <Link href="/" passHref>
              <Anchor>
                <Heading level={1}>Testing</Heading>
              </Anchor>
            </Link>
          </LayoutNavbarHeader>
          <LayoutNavbarBody>
            <AppLayoutMenu />
          </LayoutNavbarBody>
        </LayoutNavbar>
        <LayoutBody>{getLayout(<Component {...pageProps} />)}</LayoutBody>
      </Layout>
    </Container>
  );
};
export const PreLayout = ({ children, conversion }) => {
  const router = useRouter();
  const asPath = router.asPath;
  const getActiveIdsFromPathname = useCallback((asPath: string) => {
    const leafs = asPath.split('/');
    leafs.shift();
    return leafs
      .map(i => '/' + i)
      .map((_, index, array) => array.slice(0, index + 1).join(''));
  }, []);

  const [activeIds, setActiveIds] = useState<string[]>(
    getActiveIdsFromPathname(asPath)
  );
  useEffect(() => {
    setActiveIds(getActiveIdsFromPathname(asPath));
  }, [asPath]);
  return (
    <Fragment>
      <LayoutBodyHeader>
        <GradientTransition
          sx={{
            alignItems: 'center',
            display: 'flex',
            gap: 2,
            paddingX: `${LAYOUT_BODY_PADDING}px`
          }}
          start={0}
          end={LAYOUT_HEADER_HEIGHT + 30}
          hexColor={LAYOUT_HEADER_HEX_COLOR}
        >
          <ScrollCarousel>
            <BreadCrumbs activeId={asPath}>
              {activeIds.map(id => (
                <BreadCrumb key={id} id={id}>
                  <Link href={id} passHref>
                    <Anchor>{conversion[id]}</Anchor>
                  </Link>
                </BreadCrumb>
              ))}
            </BreadCrumbs>
          </ScrollCarousel>
          <EllipsisText
            sx={{
              color: 'white',
              fontWeight: 700,
              marginLeft: 'auto'
            }}
            width={120}
          >
            Alexander Emelyanov
          </EllipsisText>
        </GradientTransition>
      </LayoutBodyHeader>
      <LayoutBodyMain>{children}</LayoutBodyMain>
    </Fragment>
  );
};

export const AppLayoutMenu = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const getActiveIdsFromPathname = useCallback((pathname: string) => {
    const leafs = pathname.split('/');
    leafs.shift();
    return leafs
      .map(i => '/' + i)
      .map((_, index, array) => array.slice(0, index + 1).join(''));
  }, []);

  const [activeIds, setActiveIds] = useState<string[]>(
    getActiveIdsFromPathname(pathname)
  );
  useEffect(() => {
    setActiveIds(getActiveIdsFromPathname(pathname));
  }, [pathname]);
  return (
    <Fragment>
      {[...menu].map((section, index, arr) => (
        <div
          sx={{
            paddingTop: section.title ? '8px' : '12px',
            paddingBottom: '12px',
            ...(index !== arr.length - 1 && {
              borderBottom: '1px rgba(255, 255, 255, 0.07) solid'
            })
          }}
          key={index}
        >
          <ul sx={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {section.title && (
              <li
                sx={{
                  padding: '8px 0 8px 24px'
                }}
              >
                <EllipsisText
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    fontSize: 12,
                    color: 'text_subdued'
                  }}
                >
                  {section.title}
                </EllipsisText>
              </li>
            )}

            {section.items.map(i => (
              <li
                key={i.title}
                sx={{
                  '& > a': {
                    paddingLeft: '24px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none !important',
                    fontSize: '14px',
                    color: activeIds.includes(i.href)
                      ? 'white'
                      : 'text_subdued',
                    position: 'relative',
                    gap: '16px',
                    ...(activeIds.includes(i.href) && {
                      backgroundColor: 'rgba(255, 255,255,0.06)'
                    }),
                    transition: 'color .12s ease-out',
                    letterSpacing: '0.03em',
                    fontWeight: 500,
                    '& > svg': {
                      height: '24px',
                      width: '24px',
                      minWidth: '24px',
                      minHeight: '24px',
                      '& > *': {
                        color: activeIds.includes(i.href)
                          ? 'white'
                          : 'text_subdued'
                      },
                      alignItems: 'center'
                    },
                    '&:hover, &:active, &:focus-visible': {
                      color: 'white',
                      '& > svg': {
                        '& > *': {
                          color: 'white'
                        },
                        alignItems: 'center'
                      }
                    }
                  }
                }}
              >
                <Link passHref href={i.href}>
                  <Anchor>
                    {i.icon}
                    <EllipsisText>{i.title}</EllipsisText>
                  </Anchor>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Fragment>
  );
};
const menu = [
  {
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: <MdOutlineSpaceDashboard />
      },
      { title: 'Datacenters', href: '/datacenters', icon: <BsServer /> },
      { title: 'Devices', href: '/devices', icon: <BiDevices /> }
    ]
  },
  {
    title: 'Scanning',
    items: [
      {
        title: 'Exploration',
        href: '/exploration',
        icon: <MdOutlineTravelExplore />
      },
      { title: 'Hydration', href: '/hydration', icon: <BiWater /> },
      { title: 'Harvest', href: '/harvest', icon: <GiSlicedBread /> }
    ]
  },
  {
    items: [
      { title: 'Users', href: '/users', icon: <ImUsers /> },
      { title: 'Settings', href: '/settings', icon: <IoSettings /> }
    ]
  }
];
CustomApp.getInitialProps = async context => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
    ui: { sidebarWidth: context.ctx?.req?.cookies?.sidebarWidth }
  };
};

export default CustomApp;
