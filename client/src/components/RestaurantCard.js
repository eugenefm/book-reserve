import React from 'react';
import PropTypes from 'prop-types';
import { PRICES } from '../constants';

const RestaurantCard = ({ imgSrc, name, address, price = 1, reserveUrl }) => {
  return (
    <div className='card' aria-live='polite'>
      <img src={imgSrc} alt={`Preview of ${name}`}></img>
      <div className='card-content'>
        <h3>{name}</h3>
        <p>{address}</p>
        <p className='visually-hidden'>{`Pricing is ${PRICES[price - 1]}.`}</p>
        <p aria-hidden='true'>
          {'$'.repeat(price)}
          <span className='disabled'>{'$'.repeat(4 - price)}</span>
        </p>
      </div>
      <a href={reserveUrl} aria-label={`Reserve a table at ${name}.`}>
        Reserve a Table
      </a>
    </div>
  );
};

RestaurantCard.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  price: PropTypes.number,
  reserveUrl: PropTypes.string,
};

export default RestaurantCard;
