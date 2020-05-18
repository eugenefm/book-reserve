import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slice';

export default configureStore({
  reducer: {
    bookSearch: bookReducer,
  },
});
