import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './globalReducer';

export  const store = createStore(rootReducer, applyMiddleware(thunk))