import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from './redux'
import API from '../../api/index'

const api = API.createBackendServer();

function* onLogin({ login }, { body }) {
    const res = yield call(login,  body);
    if (res.ok) {
        yield put({ type: AuthTypes.SET_USER, user: res.data });
    }
    console.log(res); 
}

function* onSignup({ signup }, { body }) {
    const res = yield call(signup,  body);
    console.log(res); 
}

export function* AuthSagas() {
    yield  all([
       takeLatest(AuthTypes.ON_LOGIN, onLogin, api),
       takeLatest(AuthTypes.ON_SIGNUP, onSignup, api) 
    ]);
}

