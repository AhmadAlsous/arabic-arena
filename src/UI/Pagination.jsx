import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

function Pagination({ pageCount }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <P>
        page <span>{currentPage}</span> of <span>{pageCount}</span>
      </P>

      <Buttons>
        {currentPage !== 1 && (
          <Button onClick={prevPage} disabled={currentPage === 1}>
            <span>Previous</span>
          </Button>
        )}

        <Button onClick={nextPage} disabled={currentPage === pageCount}>
          <span>Next</span>
        </Button>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
