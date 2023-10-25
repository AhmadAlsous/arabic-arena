import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled.div`
  position: relative;
  border-radius: 50px;
  background-color: var(--primary-green-900);
  &:focus-within {
    background-color: var(--primary-green-700);
  }
  margin-left: 0;
  width: 100%;
  @media (min-width: 600px)  {
    margin-left: 8px
    width: auto;
  }
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
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
    @media (min-width: 600px) {
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
