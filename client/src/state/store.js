import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slice';

export default configureStore({
  reducer: {
    restaurantSearch: restaurantReducer,
  },
});
