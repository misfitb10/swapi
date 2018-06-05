import { combineReducers } from 'redux';
import { personsAreLoading, personsHaveError, persons, personsFiltered } from './persons';

export default combineReducers({
    personsAreLoading,
    personsHaveError,
    persons,
    personsFiltered,
});
