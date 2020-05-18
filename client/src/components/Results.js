import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRestaurants, selectCity } from '../state/slice';
import SearchResults from './SearchResults';
import Header from './Header';

const Results = () => {
  const restaurants = useSelector(selectRestaurants);
  const city = useSelector(selectCity);
  return (
    <>
      {!city && <Redirect to='/' />}
      <Header />
      <main>
        <SearchResults restaurants={restaurants} city={city} />
      </main>
    </>
  );
};

export default Results;
