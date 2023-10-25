import { useState } from 'react';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuElement from './MenuElement';
import AccountInfo from './AccountInfo';

function AccountCircleList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AccountCircleIcon onClick={handleClick} sx={{ fontSize: '45px' }} />
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
        <MenuElement name='Log out' navTo='/' onClick={handleClose}>
          <Logout fontSize='small' />
        </MenuElement>
      </Menu>
    </Box>
  );
}
export default AccountCircleList;
