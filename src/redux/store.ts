import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

import { persistReducer, persistStore } from 'redux-persist';
import generalReducer from './slices/generalSlice'


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, generalReducer)

const store = configureStore({
  reducer: {
    general: persistedReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware:[thunk]
})

const persistor = persistStore(store);

export { store, persistor };
