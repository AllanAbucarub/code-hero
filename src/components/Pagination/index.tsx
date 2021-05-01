import React, { useMemo, useState } from 'react';

import { Container, Button, NumberButton } from './styles';

interface IProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalRacords: number;
  pageLimit: number;
  buttonsShown?: number;
  loading: boolean;
}

const first_page = 1;

const Pagination: React.FC<IProps> = ({
  currentPage,
  setCurrentPage,
  totalRacords,
  pageLimit,
  buttonsShown = 5,
  loading,
}) => {
  const [firstPage, setFirstPage] = useState(currentPage);
  const [lastPage, setLastPage] = useState(currentPage + buttonsShown - 1);
  const totalPages = useMemo(() => {
    const rest = totalRacords % pageLimit;
    const result = Math.trunc(totalRacords / pageLimit) + (rest > 0 ? 1 : 0);
    return result;
  }, [pageLimit, totalRacords]);

  const handleDirectionClick = (page: number, direct: 'prior' | 'next'): void => {
    const operator = direct === 'prior' ? -1 : 1;
    const newPage = page + operator;

    setCurrentPage(page + operator);

    if (direct === 'next' && page >= lastPage) {
      const move = newPage - lastPage;
      setFirstPage(prev => prev + move);
      setLastPage(prev => prev + move);
    }
    if (direct === 'prior' && page <= firstPage) {
      const move = newPage - firstPage;
      setFirstPage(prev => prev + move);
      setLastPage(prev => prev + move);
    }
  };

  return (
    <Container>
      <Button
        visible={currentPage > first_page + 1}
        onClick={() => handleDirectionClick(first_page + 1, 'prior')}
      >
        {'<<'}
      </Button>
      <Button visible={currentPage > first_page} onClick={() => handleDirectionClick(currentPage, 'prior')}>
        {'<'}
      </Button>
      {Array(loading || totalPages > buttonsShown ? buttonsShown : totalPages)
        .fill('')
        .map((_, index) => {
          const buttonNumber =
            currentPage - firstPage >= buttonsShown ? index + lastPage - buttonsShown + 1 : index + firstPage;

          return (
            <NumberButton
              key={index}
              onClick={() => setCurrentPage(buttonNumber)}
              selected={currentPage === buttonNumber}
            >
              {buttonNumber}
            </NumberButton>
          );
        })}
      <Button visible={currentPage < totalPages} onClick={() => handleDirectionClick(currentPage, 'next')}>
        {'>'}
      </Button>
      <Button
        visible={currentPage + 1 < totalPages}
        onClick={() => handleDirectionClick(totalPages - 1, 'next')}
      >
        {'>>'}
      </Button>
    </Container>
  );
};

export default Pagination;
