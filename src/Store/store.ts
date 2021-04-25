import { createStore, combineReducers, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

const reducer = combineReducers({
  //nameOfReducer: pathToReducer
})

const persistConfig = {
  key: 'persisted',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
const persistor = persistStore(store)

export { store, persistor }