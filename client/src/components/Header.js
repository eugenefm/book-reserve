import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, selectError } from '../store/slice';
import SearchBar from './SearchBar';

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  return (
    <header className='hero'>
      <div className='card'>
        <h1>BookReserve</h1>
        <p>Search our library of coding books and reserve one for yourself.</p>
        <SearchBar
          name='term'
          label='Term'
          onSubmit={(value) => dispatch(fetchBooks(value, 0))}
          ctaText='Search'
          ariaLabel='Enter a search term to get a list of available books in our library.'
          placeholder='ie. Vue, Python'
        />
        {error && (
          <p className='error' aria-live='assertive'>
            {error}
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
