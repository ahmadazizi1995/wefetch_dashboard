import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
/* import all individual reducers */
import { AuthReducer } from '../screens/Auth/redux'


/* reset state on action type 'ON_LOGOUT' */
const resettable = resettableReducer('ON_LOGOUT');

/* combine all reducers */
const rootReducer = combineReducers({
    auth: resettable(AuthReducer)
});

export default rootReducer;