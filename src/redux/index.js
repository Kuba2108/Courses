
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterBtnReducer } from './slices/fillterButton';

const rootReducer = combineReducers({
filters : filterBtnReducer,
})

const store = configureStore({
    reducer : rootReducer
})

export default store;