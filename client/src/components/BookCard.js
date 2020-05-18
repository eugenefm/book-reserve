import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, updateReservation } from '../store/slice';

const RestaurantCard = ({ title, author, quantity, reservedQuantity, id }) => {
  const dispatch = useDispatch();
  const copies = (amount) => (amount === 1 ? 'copy' : 'copies');
  return (
    <li className='card' aria-live='polite'>
      <div className='card-content'>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{`${quantity} ${copies(quantity)} in stock.`}</p>
        <p>{`${reservedQuantity} ${copies(reservedQuantity)} reserved.`}</p>
      </div>
      <button
        disabled={reservedQuantity >= quantity}
        onClick={() => dispatch(updateReservation('reserve', id))}
      >
        Reserve
      </button>
      <button
        disabled={reservedQuantity < 1}
        onClick={() => dispatch(updateReservation('return', id))}
      >
        Return
      </button>
      {/* <a href={reserveUrl} aria-label={`Reserve a table at ${name}.`}>
        Reserve a Table
      </a> */}
    </li>
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
