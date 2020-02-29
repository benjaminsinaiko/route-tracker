import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error': {
      return { ...state, errorMessage: action.payload };
    }
    case 'signup': {
      return { userToken: action.payload, errorMessage: '' };
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

const signin = dispatch => {
  return ({ email, password }) => {
    // try to signin user
    // handle success by updating state
    // handle failure by showing error message
  };
};

const signout = dispatch => {
  return () => {
    // somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { userToken: null, errorMessage: '' }
);
