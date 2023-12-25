import { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuElement from './MenuElement';
import AccountInfo from './AccountInfo';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { Button } from '@mui/material';

function MobileMenu() {
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    instance.logoutRedirect({
      postLogoutRedirectUri: '/',
    });
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Button onClick={handleClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          aria-hidden='true'
          role='img'
          style={{ fill: 'white' }}
          className='component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva'
          width='2.5em'
          height='2.5em'
          viewBox='0 0 24 24'
        >
          <g transform='rotate(180 12 12)'>
            <circle cx='4' cy='12' r='1' fill='white'></circle>
            <rect
              width='14'
              height='2'
              x='7'
              y='11'
              fill='white'
              rx='.94'
              ry='.94'
            ></rect>
            <rect
              width='18'
              height='2'
              x='3'
              y='16'
              fill='white'
              rx='.94'
              ry='.94'
            ></rect>
            <rect
              width='18'
              height='2'
              x='3'
              y='6'
              fill='white'
              rx='.94'
              ry='.94'
            ></rect>
          </g>
        </svg>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 18,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            '@media (max-width: 1000px)': {
              '&:before': {
                right: 5,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <AccountInfo />
        <Divider />
        <MenuElement name='Home' navTo='/' onClick={handleClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z'
            />
            <path
              fill='currentColor'
              d='m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z'
            />
          </svg>
        </MenuElement>
        <MenuElement name='Lessons' navTo='/learn' onClick={handleClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M20.75 16.714a.755.755 0 0 1-.014.143a.75.75 0 0 1-.736.893H6a1.25 1.25 0 1 0 0 2.5h14a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 19V5A2.75 2.75 0 0 1 6 2.25h13.4c.746 0 1.35.604 1.35 1.35v13.114ZM9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z'
              clipRule='evenodd'
            />
          </svg>
        </MenuElement>
        <MenuElement name='Quizzes' navTo='/quiz' onClick={handleClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 48 48'
          >
            <g fill='none'>
              <path d='M20 24h24h-24Z' clipRule='evenodd' />
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='4'
                d='M20 24h24'
              />
              <path d='M20 38h24h-24Z' clipRule='evenodd' />
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='4'
                d='M20 38h24'
              />
              <path d='M20 10h24h-24Z' clipRule='evenodd' />
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='4'
                d='M20 10h24'
              />
              <path
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth='4'
                d='M4 34h8v8H4zm0-14h8v8H4zM4 6h8v8H4z'
              />
            </g>
          </svg>
        </MenuElement>
        <MenuElement name='Placement' navTo='/placement' onClick={handleClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z'
            />
          </svg>
        </MenuElement>
        <Divider />
        <MenuElement name='Settings' navTo='/Settings' onClick={handleClose}>
          <Settings fontSize='small' />
        </MenuElement>
        <MenuElement name='Log out' onClick={handleLogout}>
          <Logout fontSize='small' />
        </MenuElement>
      </Menu>
    </Box>
  );
}
export default MobileMenu;
