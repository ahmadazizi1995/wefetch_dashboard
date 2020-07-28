import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from './redux';
import API from '../../api/index';

const api = API.createBackendServer();

function* onSignup({ signup }, { body }) {
    yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: true });
    const response = yield call(signup, body);

    if (response.ok) {
        yield put({ type: AuthTypes.SET_SIGNUP_SUCCESSFUL, signupSuccessful: true });
        yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: false });
        alert('Registered successfully, please login');
    } else {
        alert(response.data.message);
        yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: false });
    }
}

function* onLogin({ login }, { body }) {
    yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: true });
    const response = yield call(login, body);

    if (response.ok) {
        yield put({ type: AuthTypes.SET_USER, user: response.data.data });
        yield put({ type: AuthTypes.SET_IS_USER_LOGGED_IN, isUserLoggedIn: true });
        yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: false });
    } else {
        yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: false });
        alert(response.data.message);
    }
}

function* onUpdatePassword({ updatePassword }, { body }) {
    yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: true });
    const response = yield call(updatePassword, body);

    if (response.ok) {
        yield put({ type: AuthTypes.ON_LOGOUT });
        yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: false });
        alert('Updated password successfully, please login.');
    } else {
        yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: false });
        alert(response.data.message);
    }
}

export function* AuthSagas() {
    yield all([
        takeLatest(AuthTypes.ON_SIGNUP, onSignup, api),
        takeLatest(AuthTypes.ON_LOGIN, onLogin, api),
        takeLatest(AuthTypes.ON_UPDATE_PASSWORD, onUpdatePassword, api),
    ]);
}

