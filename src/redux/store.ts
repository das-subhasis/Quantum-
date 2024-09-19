// store.ts
import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './courseSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
