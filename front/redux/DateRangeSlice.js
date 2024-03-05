import { createSlice } from "@reduxjs/toolkit";

const dateRangeInitialState = {
    token: null,
    user: null
}

export const UserSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.data;
        }
    }
})