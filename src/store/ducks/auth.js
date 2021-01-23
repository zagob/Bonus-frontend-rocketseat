import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  signInRequest: ['dataPassed'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_SATE = Immutable({
  signedIn: false,
  token: null,
});

export const success = (state, { token }) => {
  state.merge({ signedIn: true, token });
};

export const reducer = createReducer(INITIAL_SATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
