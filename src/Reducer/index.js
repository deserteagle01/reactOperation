// Wherever you build your reducers
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import getAlbumReducers from './getAlbumReducer';
import addOperationReducer from './addOperationReducer.js';


const AppReducers = combineReducers({
    getAlbumReducers,
    addOperationReducer,
});

const rootReducer = (state, action) => {
	   return AppReducers(state,action);
}

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
