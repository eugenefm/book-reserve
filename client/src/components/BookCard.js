import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateReservation } from '../store/slice';

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
      <div className='cta'>
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
      </div>
    </li>
  );
};

RestaurantCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  quantity: PropTypes.number,
  reservedQuantity: PropTypes.number,
  id: PropTypes.string,
};

export default RestaurantCard;
