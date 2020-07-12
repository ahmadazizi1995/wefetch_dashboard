import { createActions, createReducer } from 'reduxsauce';

/* types and actions creator */
const { Types, Creators } = createActions({
    onLogin: ['body'],
    onSignup: ['body'],
    setUser: ['user']
});

export const AuthTypes = Types;
export const AuthActions = Creators;

/* initial state */
const INITIAL_STATE = {
    user: {}
};

/* reducers */
const setUser = (state, {user}) => ({
    ...state,
    user
});

/* hookup reducers to types */
const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_USER]: setUser
});

export const AuthReducer = reducer;