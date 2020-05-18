import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import { useSelector } from 'react-redux';
import { selectBooks, selectAvailablePages, selectTerm } from '../store/slice';
import Pagination from './Pagination';

const SearchResults = () => {
  const books = useSelector(selectBooks);
  const availablePages = useSelector(selectAvailablePages);
  const term = useSelector(selectTerm);

  return (
    books.length > 0 && (
      <main aria-live='polite'>
        <h2>{`Search Results${
          term && term.length > 0 && ` for "${term}"`
        }`}</h2>
        <ul className='cards-container wrapper'>
          {books.map(({ title, author, quantity, reservedQuantity, _id }) => (
            <BookCard
              key={_id}
              title={title}
              author={author}
              quantity={quantity}
              reservedQuantity={reservedQuantity}
              id={_id}
            />
          ))}
        </ul>
        {availablePages > 1 && (
          <Pagination availablePages={availablePages} term={term} />
        )}
      </main>
    )
  );
};

SearchResults.protoTypes = {
  city: PropTypes.string,
  restaurants: PropTypes.array,
};

export default SearchResults;
