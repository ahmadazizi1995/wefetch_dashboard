import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* redux-persist config */
const persistConfig = {
    key: 'persist_key',
    storage
};

/* persist root reducer */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* create saga middleware */
const sagaMiddleware = createSagaMiddleware();

/* create store with persisted reducer and middleware */
const store = createStore(
    persistedReducer,
    /* all middlewares added here */
    compose(applyMiddleware(sagaMiddleware))
);

/* persist store */
const persistedStore = persistStore(store);

/* run the saga */
sagaMiddleware.run(rootSaga);

/* export redux store */
export default {
    store,
    persistedStore
};
