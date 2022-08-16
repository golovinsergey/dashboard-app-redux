import { combineReducers } from 'redux';
import { positionReduser } from './positions/position-reducer';
import { filterReducer } from './filters/filter-reduser';

export const rootReducer = combineReducers({
    positions: positionReduser,
    filters: filterReducer,
});
