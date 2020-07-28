import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from './redux';
import API from '../../api/index';

const api = API.createBackendServer();

function* onLogin({ login }, { body }) {
    const response = yield call(login, body);

    if (response.ok) {
        yield put({ type: AuthTypes.SET_USER, user: response.data.data });
        yield put({ type: AuthTypes.SET_IS_USER_LOGGED_IN, isUserLoggedIn: true });
    } else {
        alert(response.data.message);
    }
}

function* onSignup({ signup }, { body }) {
    const response = yield call(signup, body);

    if (response.ok) {
        alert('Registered successfully');
        yield put({ type: AuthTypes.SET_SIGNUP_SUCCESSFUL, signupSuccessful: true });
    } else {
        alert(response.data.message);
    }
}

export function* AuthSagas() {
    yield all([
        takeLatest(AuthTypes.ON_LOGIN, onLogin, api),
        takeLatest(AuthTypes.ON_SIGNUP, onSignup, api)
    ]);
}

