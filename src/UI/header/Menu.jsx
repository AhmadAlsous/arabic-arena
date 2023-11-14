import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: 0;
  padding: 10px 20px;
  font-size: 1.1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  &:hover::before {
    background-color: var(--primary-blue-500);
  }
`;

const Icon = styled(ArrowDropDownIcon)`
  position: absolute;
  top: 7px;
`;

function MenuComponent({ selectedValue, onChange, items }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    if (value) onChange(value);
  };

  return (
    <>
      <Button onClick={handleClick}>
        {selectedValue}
        <Icon>
          <ArrowDropDownIcon />
        </Icon>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        {items.map((item) => (
          <MenuItem key={item} onClick={() => handleClose(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default MenuComponent;
