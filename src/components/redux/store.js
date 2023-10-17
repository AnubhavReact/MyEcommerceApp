import {configureStore,applyMiddleware} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import SagaData from './saga';

const SagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: rootReducer,
  middleware:()=>[SagaMiddleware]
});

SagaMiddleware.run(SagaData)

export default Store;