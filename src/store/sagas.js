import { all, call } from 'redux-saga/effects';
/* import all individual sagas */
import { AuthSagas } from '../screens/Auth/sagas';
import { CompanySagas } from '../screens/Companies/sagas';


function* rootSaga() {
    yield all([
        /* all sagas go here */
        call(AuthSagas),
        call(CompanySagas),
    ]);
}

export default rootSaga;