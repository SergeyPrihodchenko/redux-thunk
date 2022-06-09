import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import getApi from './component/reducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    combineReducers({
        component: getApi
    }),
    composeEnhancers(applyMiddleware(thunk))
    );
    