import React from 'react';
import PropTypes from 'prop-types';

const RestaurantCard = ({ title, author, quantity, reservedQuantity }) => {
  return (
    <div className='card' aria-live='polite'>
      <div className='card-content'>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
      {/* <a href={reserveUrl} aria-label={`Reserve a table at ${name}.`}>
        Reserve a Table
      </a> */}
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
