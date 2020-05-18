import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/slice';
import SearchBar from './SearchBar';

const SearchResults = ({ books }) => {
  const dispatch = useDispatch();

  return (
    <div aria-live='polite'>
      <h2>Results</h2>
      <div className='cards-container wrapper'>
        {books.length > 0 &&
          books.map(({ title, author, quantity, reservedQuantity, _id }) => (
            <BookCard
              key={_id}
              title={title}
              author={author}
              quantity={quantity}
              reservedQuantity={reservedQuantity}
              id={_id}
            />
          ))}
      </div>
    </div>
  );
};

SearchResults.protoTypes = {
  city: PropTypes.string,
  restaurants: PropTypes.array,
};

export default SearchResults;
