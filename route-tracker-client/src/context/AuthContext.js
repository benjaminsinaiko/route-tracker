import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin': {
      return { isLoading: false, userToken: action.payload, errorMessage: '' };
    }
    case 'signout': {
      return { ...state, userToken: null };
    }
    case 'load_no_token': {
      return { ...state, isLoading: false };
    }
    case 'add_error': {
      return { ...state, errorMessage: action.payload };
    }
    case 'clear_error_message': {
      return { ...state, errorMessage: '' };
    }
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const userToken = await AsyncStorage.getItem('userToken');

  if (userToken) {
    dispatch({ type: 'signin', payload: userToken });
  } else {
    dispatch({ type: 'load_no_token' });
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('userToken', response.data.userToken);
    dispatch({ type: 'signin', payload: response.data.userToken });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Invalid Email or Password' });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('userToken', response.data.userToken);
    dispatch({ type: 'signin', payload: response.data.userToken });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Invalid Email or Password' });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('userToken');
  dispatch({ type: 'signout' });
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, signup, signin, signout, clearErrorMessage },
  { isLoading: true, userToken: null, errorMessage: '' }
);
