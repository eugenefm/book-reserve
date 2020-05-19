import { createSlice } from '@reduxjs/toolkit';
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

export const fetchBooks = (term, page) => async (dispatch) => {
  try {
    dispatch(setTerm(''));
    dispatch(setError(''));
    dispatch(setFetching(true));

    const res = await axios.get('/api', {
      params: {
        term,
        page,
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
    dispatch(setError(err.response.data.msg));
  }
};

export const selectError = (state) => state.bookSearch.error;

export const selectTerm = (state) => state.bookSearch.term;

export const selectPage = (state) => state.bookSearch.page;

export const selectAvailablePages = (state) => state.bookSearch.availablePages;

export const selectBooks = (state) => state.bookSearch.availableBooks;

export default bookSlice.reducer;
