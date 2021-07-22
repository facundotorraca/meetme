import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from '../reducers/index.js';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['usuario'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor };
};
