import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
    },
    reducers: {
        LOGIN: (state, action) => {
            state.user = action.payload;
        },
        LOGOUT: (state) => {
            state.user = null;
        },
    },
});

export const selectUser = (state) => state.user;

export const { LOGIN, LOGOUT } = userSlice.actions;
export default userSlice.reducer;
