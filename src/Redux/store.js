import { combineReducers } from 'redux';
import {
    configureStore,
    createAction,
    createReducer,
    createSlice,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice';

const persistConfig = {
    key: 'root',
    // localStorage에 저장합니다.
    storage,
    // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
    whitelist: ['auth'],
    // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({
    auth: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    // reducer: slice.reducer,
});

export const persistor = persistStore(store);
export default store;
