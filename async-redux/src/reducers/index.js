import {FETCH_COUNTRY_START, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAILURE} from "../actions/index"

const initialState = {
    data: [],
    isFetching: false,
    error: ""
};

export const countryReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_COUNTRY_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_COUNTRY_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ""
            }
        case FETCH_COUNTRY_FAILURE: 
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};