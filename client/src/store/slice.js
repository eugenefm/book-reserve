import { createSlice } from '@reduxjs/toolkit';
// import { OPEN_TABLE_ROOT } from '../constants';
import axios from 'axios';

export const bookSlice = createSlice({
  name: 'bookSearch',
  initialState: {
    term: '',
    availableBooks: [],
    page: 0,
    availablePages: 0,
    isFetching: false,
    error: '',
  },
  reducers: {
    setBooks: (state, action) => {
      state.availableBooks = action.payload;
    },
    setTerm: (state, action) => {
      state.term = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setAvailablePages: (state, action) => {
      state.availablePages = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  },
});

export const {
  setBooks,
  setTerm,
  setAvailablePages,
  setError,
  setFetching,
  setPage,
} = bookSlice.actions;

export const fetchBooks = (term, page, reserved, history) => async (
  dispatch
) => {
  try {
    dispatch(setTerm(''));
    dispatch(setError(''));
    dispatch(setFetching(true));

    const res = await axios.get('/api', {
      params: {
        term,
        page,
        reserved,
      },
    });

    const { books, pages } = res.data;
    dispatch(setFetching(false));
    if (books && books.length > 0) {
      dispatch(setBooks(books));
      dispatch(setTerm(term));
      dispatch(setAvailablePages(pages));
      dispatch(setPage(page));
      return;
    }
    return dispatch(setError(`No matching books found.`));
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch(setError(err.response.data.msg));
  }
};

// export const selectRestaurants = (state) => {
//   const { availableRestaurants, filter } = state.restaurantSearch;
//   if (!filter) return availableRestaurants;
//   return availableRestaurants.filter(
//     (restaurant) =>
//       restaurant.name.toLowerCase().includes(filter.toLowerCase()) ||
//       restaurant.address.toLowerCase().includes(filter.toLowerCase()) ||
//       restaurant.area.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const selectError = (state) => state.bookSearch.error;

export const selectBooks = (state) => state.bookSearch.availableBooks;

// export const selectCity = (state) => state.restaurantSearch.city;

export default bookSlice.reducer;
