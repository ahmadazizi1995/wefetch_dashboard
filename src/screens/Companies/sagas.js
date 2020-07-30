import { call, put, all, takeLatest } from 'redux-saga/effects';
import { CompanyTypes } from './redux';
import API from '../../api/index';

const api = API.createBackendServer();

function* onGetCompaniesAndFacilities({ getCompaniesAndFacilities }) {
    yield put({ type: CompanyTypes.SET_IS_LOADING, isLoading: true });
    const response = yield call(getCompaniesAndFacilities);

    if (response.ok) {
        yield put({ type: AuthTypes.SET_COMPANIES, companies: response.data.data });
        yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: false });
    } else {
        alert(response.data.message);
        yield put({ type: AuthTypes.SET_IS_LOADING, isLoading: false });
    }
}

export function* CompanySagas() {
    yield all([
        takeLatest(CompanyTypes.ON_GET_COMPANIES_AND_FACILITIES, onGetCompaniesAndFacilities, api),
    ]);
}

