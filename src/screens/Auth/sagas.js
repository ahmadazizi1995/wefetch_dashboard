import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from './redux';
import API from '../../api/index';

const api = API.createBackendServer();

function* onLogin({ login }, { body }) {
    // const res = yield call(login,  body);
    // if (res.ok) {
    //     yield put({ type: AuthTypes.SET_USER, user: res.data });
    // }
    if (body.email === 'admin@admin.com' && body.password === '12345') {
        yield put({ type: AuthTypes.SET_IS_USER_LOGGED_IN, isUserLoggedIn: true });
        yield put({ type: AuthTypes.SET_USER, user: { role: 'admin' } });
    } else if (body.email === 'client@client.com' && body.password === '12345') {
        yield put({ type: AuthTypes.SET_IS_USER_LOGGED_IN, isUserLoggedIn: true });
        yield put({ type: AuthTypes.SET_USER, user: { role: 'client' } });

    } else {
        yield put({ type: AuthTypes.SET_IS_USER_LOGGED_IN, isUserLoggedIn: false });
        alert('Incorrect email or password')
    }
}

function* onSignup({ signup }, { body }) {
    // const res = yield call(signup, body);
}

export function* AuthSagas() {
    yield all([
        takeLatest(AuthTypes.ON_LOGIN, onLogin, api),
        takeLatest(AuthTypes.ON_SIGNUP, onSignup, api)
    ]);
}

