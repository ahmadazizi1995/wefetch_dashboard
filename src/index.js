import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stores from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './theme/index.scss';
import Navigation from './navigation'

const { store, persistedStore } = stores;

function App() {
  return (
    <div className="App">
      <Navigation/>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);