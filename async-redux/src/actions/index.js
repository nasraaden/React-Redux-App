import axios from 'axios';

export const FETCH_COUNTRY_START = 'FETCH_COUNTRY_START';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE';

export const getCountry = () => dispatch => {
    dispatch({type: FETCH_COUNTRY_START });
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
        dispatch({ type: FETCH_COUNTRY_SUCCESS, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: FETCH_COUNTRY_FAILURE, payload: error.response });
      });
}