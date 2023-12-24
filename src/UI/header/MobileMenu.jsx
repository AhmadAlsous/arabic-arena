import { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuElement from './MenuElement';
import AccountInfo from './AccountInfo';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';

function MobileMenu({ isHomepage }) {
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
      <div onClick={handleClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          aria-hidden='true'
          role='img'
          className='component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva'
          width='1.7em'
          height='1.7em'
          viewBox='0 0 24 24'
        >
          <g transform='rotate(180 12 12)'>
            <circle cx='4' cy='12' r='1' fill='currentColor'></circle>
            <rect
              width='14'
              height='2'
              x='7'
              y='11'
              fill='currentColor'
              rx='.94'
              ry='.94'
            ></rect>
            <rect
              width='18'
              height='2'
              x='3'
              y='16'
              fill='currentColor'
              rx='.94'
              ry='.94'
            ></rect>
            <rect
              width='18'
              height='2'
              x='3'
              y='6'
              fill='currentColor'
              rx='.94'
              ry='.94'
            ></rect>
          </g>
        </svg>
      </div>
      {isAuthenticated && (
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
          <MenuElement name='Settings' navTo='/Settings' onClick={handleClose}>
            <Settings fontSize='small' />
          </MenuElement>
          <MenuElement name='Log out' onClick={handleLogout}>
            <Logout fontSize='small' />
          </MenuElement>
        </Menu>
      )}
    </Box>
  );
}
export default MobileMenu;
