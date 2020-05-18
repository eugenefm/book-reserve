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
    setReserved: (state, action) => {
      const i = state.availableBooks.findIndex(
        (book) => book._id === action.payload._id
      );
      state.availableBooks[i].reservedQuantity =
        action.payload.reservedQuantity;
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
  setReserved,
} = bookSlice.actions;

export const fetchBooks = (term, page, reserved, history) => async (
  dispatch
) => {
  try {
    dispatch(setTerm(''));
    dispatch(setBooks([]));
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

export const updateReservation = (type, id) => async (dispatch) => {
  try {
    dispatch(setError(''));

    const res = await axios.patch('/api', {
      id,
      type,
    });

    const book = res.data;
    if (book) return dispatch(setReserved(book));
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

export const selectTerm = (state) => state.bookSearch.term;

export const selectPage = (state) => state.bookSearch.page;

export const selectAvailablePages = (state) => state.bookSearch.availablePages;

export const selectBooks = (state) => state.bookSearch.availableBooks;

// export const selectCity = (state) => state.restaurantSearch.city;

export default bookSlice.reducer;
