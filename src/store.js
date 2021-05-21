import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../src/reducers/rootReducer';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(logger, sagaMiddleware)
)
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
