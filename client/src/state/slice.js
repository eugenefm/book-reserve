import { createSlice } from '@reduxjs/toolkit';
import { OPEN_TABLE_ROOT } from '../constants/';
import axios from 'axios';

export const restaurantSlice = createSlice({
  name: 'restaurantSearch',
  initialState: {
    availableRestaurants: [],
    filter: '',
    city: '',
    isFetching: false,
    error: '',
  },
  reducers: {
    setRestaurants: (state, action) => {
      state.availableRestaurants = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  setRestaurants,
  setError,
  setFetching,
  setFilter,
  setCity,
} = restaurantSlice.actions;

export const fetchRestaurants = (city, history) => async (dispatch) => {
  try {
    dispatch(setCity(''));
    dispatch(setFilter(''));
    dispatch(setError(''));
    dispatch(setFetching(true));

    const res = await axios.get(OPEN_TABLE_ROOT + '/restaurants', {
      params: {
        city,
      },
    });

    const { restaurants } = res.data;
    dispatch(setFetching(false));
    if (restaurants && restaurants.length > 0) {
      dispatch(setRestaurants(restaurants));
      dispatch(setCity(city));
      return history.push('/results');
    }
    return dispatch(setError(`No results found for "${city}".`));
  } catch {
    dispatch(
      setError(`Encountered a problem connecting with the OpenTable API.`)
    );
  }
};

export const selectRestaurants = (state) => {
  const { availableRestaurants, filter } = state.restaurantSearch;
  if (!filter) return availableRestaurants;
  return availableRestaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(filter.toLowerCase()) ||
      restaurant.address.toLowerCase().includes(filter.toLowerCase()) ||
      restaurant.area.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectError = (state) => state.restaurantSearch.error;

export const selectCity = (state) => state.restaurantSearch.city;

export default restaurantSlice.reducer;
