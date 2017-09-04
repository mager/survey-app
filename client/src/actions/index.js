import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';

export const fetchUser = () => async dispatch => {
  try {
    let response = await axios.get('/api/current_user');
    dispatch({
      type: FETCH_USER,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const handleToken = token => async dispatch => {
  try {
    let response = await axios.post('/api/stripe', token);
    dispatch({
      type: FETCH_USER,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};
