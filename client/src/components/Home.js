import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants, selectError } from '../state/slice';
import SearchBar from './SearchBar';

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  return (
    <header className='hero'>
      <div className='card'>
        <h1>RestoFinder</h1>
        <p>A search engine for local restaurants using the Open Table API.</p>
        <SearchBar
          name='city'
          label='City'
          onSubmit={(value) => dispatch(fetchRestaurants(value, history))}
          ctaText='Search'
          ariaLabel='Enter a city to get a list of available restaurants.'
          placeholder='ie. Toronto'
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

export default Home;
