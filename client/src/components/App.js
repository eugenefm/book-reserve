import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, selectBooks } from '../store/slice';
import Header from './Header';
import Footer from './Footer';
import SearchResults from './SearchResults';

const App = (props) => {
  const books = useSelector(selectBooks);
  return (
    <div>
      <Header />
      {books.length > 0 && <SearchResults books={books} />}
      <Footer />
    </div>
  );
};

App.propTypes = {};

export default App;
