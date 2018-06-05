import axios from 'axios';
import { PERSONS_ERROR, PERSONS_LOADING, PERSONS_FETCH_DATA_SUCCESS, PERSONS_FILTERED } from './actionTypes';

export function personsAreLoading(bool) {
    return {
        type: PERSONS_LOADING,
        isLoading: bool,
    };
}

export function personsHaveError(bool) {
    return {
        type: PERSONS_ERROR,
        hasError: bool,
    };
}

export function personsFetchDataSuccess(persons) {
    return {
        type: PERSONS_FETCH_DATA_SUCCESS,
        persons,
    };
}

export function personsFetchData(url) {
    return (dispatch) => {
        dispatch(personsAreLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(personsAreLoading(false));

                return response;
            })
            .then(response => dispatch(personsFetchDataSuccess(response.data.results)))
            .catch(() => dispatch(personsHaveError(true)));
    };
}

// export function personsFilter(keyword) {
//     return (dispatch) => {
//         dispatch(personsFiltered(keyword));
//     }
// }

export function personsFiltered(keyword) {
    return {
        type: PERSONS_FILTERED,
        keyword,
    };
}
