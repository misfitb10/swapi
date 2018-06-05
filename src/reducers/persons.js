import { PERSONS_ERROR, PERSONS_LOADING, PERSONS_FETCH_DATA_SUCCESS, PERSONS_FILTERED } from '../actions/actionTypes';

// TODO: Return object in all reducers, and make it like so:
// export const initialState = {
//     isLoading: false,
//     hasError: false,
//     persons: [],
//     filteredItem: null
// };

export function personsAreLoading(state = false, action) {
    switch (action.type) {
    case PERSONS_LOADING:
        return action.isLoading;

    default:
        return state;
    }
}

export function personsHaveError(state = false, action) {
    switch (action.type) {
    case PERSONS_ERROR:
        return action.hasError;

    default:
        return state;
    }
}

export function persons(state = [], action) {
    switch (action.type) {
    case PERSONS_FETCH_DATA_SUCCESS:
        return action.persons;

    default:
        return state;
    }
}

export function personsFiltered(state = '', action) {
    switch (action.type) {
    case PERSONS_FILTERED:
        return action.filteredItem;

    default:
        return state;
    }
}
