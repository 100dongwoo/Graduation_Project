import {
    configureStore,
    createAction,
    createReducer,
    createSlice,
} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'USER',
    initialState: {
        user: null,
    },
    reducers: {
        LOGIN: (state, action) => {
            state.user = action.payload;
        },
    },
});
const store = configureStore({ reducer: slice.reducer });
export const { LOGIN } = slice.actions;
export default store;
