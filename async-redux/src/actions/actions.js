import axios from 'axios';

export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

export const getAdvice = dispatch => {
    dispatch({type: FETCH_JOKE_START });
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
        dispatch({ type: FETCH_JOKE_SUCCESS, payload: response.data.slip });
    })
    .catch(error => {
        dispatch({ type: FETCH_JOKE_FAILURE, payload: error.response });
      });
}