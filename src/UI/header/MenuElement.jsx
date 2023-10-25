import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';

function MenuElement({ children, onClick, name, navTo }) {
  return (
    <Link to={navTo}>
      <MenuItem onClick={onClick}>
        <ListItemIcon>{children}</ListItemIcon>
        {name}
      </MenuItem>
    </Link>
  );
}

export default MenuElement;
