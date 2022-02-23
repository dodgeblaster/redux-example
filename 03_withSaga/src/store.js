import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const middleware = [applyMiddleware(sagaMiddleware)]
const store = createStore(rootReducer, initialState, compose(...middleware))
sagaMiddleware.run(mySaga)

export default store
