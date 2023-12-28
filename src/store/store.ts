import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch as useReduxDispatch, useSelector as useReduxSelector} from 'react-redux';
import type {ThunkAction} from 'redux-thunk';
import type {Action} from '@reduxjs/toolkit';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as adminUserReducer} from "../admin/data/redux/slices/user.slice";
import {reducer as adminGameInstanceReducer} from "../admin/data/redux/slices/game-instance.slice";
// import {reducer as userReducer} from "./ad";
// import {reducer as gameInstanceSlice} from "./slices/game-instance.slice";

export const rootReducer = combineReducers({
    adminUser: adminUserReducer,
    adminGameInstance: adminGameInstanceReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true'
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
