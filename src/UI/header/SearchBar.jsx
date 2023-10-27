import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled.div`
  position: relative;
  border-radius: 50px;
  border: 2px solid #000000;
  margin-left: 0;
  width: 100%;
`;

const SearchIconWrapper = styled.div`
  padding: 0 16px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputBase = styled(InputBase)`
  color: inherit;
  & .MuiInputBase-input {
    padding: 8px 8px 8px 0;
    padding-left: calc(1em + 32px);
    width: 100%;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    @media (min-width: 1144px) {
      width: 12ch;
      &:focus {
        width: 20ch;
      }
    }
  }
`;

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder='Search…' />
    </Search>
  );
}
