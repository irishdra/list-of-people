import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import recordReducer from './store/reducer';

const persistConfig = {
  key: 'records',
  storage,
};
const pReducer = persistReducer(persistConfig, recordReducer);

const store = createStore(
    pReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persistor = persistStore(store);

export {store, persistor};
