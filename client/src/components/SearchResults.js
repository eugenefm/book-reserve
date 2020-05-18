import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks, selectAvailablePages, selectTerm } from '../store/slice';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const SearchResults = () => {
  const books = useSelector(selectBooks);
  const availablePages = useSelector(selectAvailablePages);
  const term = useSelector(selectTerm);

  return (
    <div aria-live='polite'>
      <h2>{`Search Results${term && term.length > 0 && ` for "${term}"`}`}</h2>
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
      <Pagination availablePages={availablePages} term={term} />
    </div>
  );
};

SearchResults.protoTypes = {
  city: PropTypes.string,
  restaurants: PropTypes.array,
};

export default SearchResults;
