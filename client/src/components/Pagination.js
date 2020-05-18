import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, fetchBooks } from '../store/slice';

const Pagination = ({ availablePages, term }) => {
  const page = useSelector(selectPage);
  console.log(page);
  const dispatch = useDispatch();

  return (
    <div className='pagination-container'>
      <button
        onClick={() => dispatch(fetchBooks(term, page - 1))}
        disabled={page < 1}
        aria-label='Go to previous search result page.'
      >
        Previous
      </button>
      <span>{`${page + 1} of ${availablePages}`}</span>
      <button
        onClick={() => dispatch(fetchBooks(term, page + 1))}
        disabled={page >= availablePages - 1}
        aria-label='Go to next search result page.'
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {};

export default Pagination;
