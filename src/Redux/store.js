import {
    configureStore,
    createAction,
    createReducer,
    createSlice,
} from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
const slice = createSlice({
    name: 'USER',
    initialState: {
        user: null,
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
const store = configureStore({ reducer: slice.reducer });
export const { LOGIN, LOGOUT } = slice.actions;
export default store;
export const selectUser = (state) => state.user;
