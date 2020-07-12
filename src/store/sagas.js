import { all, call } from 'redux-saga/effects';
/* import all individual sagas */
import { AuthSagas } from '../screens/Auth/sagas';


function* rootSaga() {
    yield all([
        /* all sagas go here */
        call(AuthSagas)
    ]);
}

export default rootSaga;