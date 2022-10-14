import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../pages/counter/counterSlice';
import sortingReducer from '../pages/sorting/sorting-redux/sortingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sorting: sortingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
