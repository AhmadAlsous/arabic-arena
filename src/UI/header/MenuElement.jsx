import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';

function MenuElement({ children, onClick, name, navTo }) {
  return navTo ? (
    <Link to={navTo}>
      <MenuItem onClick={onClick} sx={{ fontFamily: 'Din-round' }}>
        <ListItemIcon>{children}</ListItemIcon>
        {name}
      </MenuItem>
    </Link>
  ) : (
    <MenuItem onClick={onClick} sx={{ fontFamily: 'Din-round' }}>
      <ListItemIcon>{children}</ListItemIcon>
      {name}
    </MenuItem>
  );
}

export default MenuElement;
