import { createActions, createReducer } from 'reduxsauce';

/* types and actions creator */
const { Types, Creators } = createActions({
    onSignup: ['body'],
    onLogin: ['body'],
    onLogout: null,
    setSignupSuccessful: ['signupSuccessful'],
    setUser: ['user'],
    setIsUserLoggedIn: ['isUserLoggedIn'],
});

export const AuthTypes = Types;
export const AuthActions = Creators;

/* initial state */
const INITIAL_STATE = {
    signupSuccessful: false,
    user: {},
    isUserLoggedIn: false,
};

/* reducers */
const setSignupSuccessful = (state, { signupSuccessful }) => ({
    ...state,
    signupSuccessful
});

const setUser = (state, { user }) => ({
    ...state,
    user
});

const setIsUserLoggedIn = (state, { isUserLoggedIn }) => ({
    ...state,
    isUserLoggedIn
});

/* hookup reducers to types */
const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_SIGNUP_SUCCESSFUL]: setSignupSuccessful,
    [Types.SET_USER]: setUser,
    [Types.SET_IS_USER_LOGGED_IN]: setIsUserLoggedIn,
});

export const AuthReducer = reducer;