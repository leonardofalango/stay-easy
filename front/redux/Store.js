import { configureStore } from '@reduxjs/toolkit';
import { UserSlice } from './UserSlice';

export const Store = configureStore({
    reducer: {
        user: UserSlice.reducer,
    }
});