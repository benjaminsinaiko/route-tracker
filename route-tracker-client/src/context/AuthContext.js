import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup': {
      return { userToken: action.payload, errorMessage: '' };
    }
    case 'signin': {
      return { userToken: action.payload, errorMessage: '' };
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

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('userToken', response.data.userToken);
    dispatch({ type: 'signup', payload: response.data.userToken });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('userToken', response.data.userToken);
    dispatch({ type: 'signin', payload: response.data.userToken });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const signout = dispatch => {
  return () => {
    // somehow sign out
  };
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage },
  { userToken: null, errorMessage: '' }
);
