import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
/*import promise from 'redux-promise';
import createLogger from 'redux-logger';*/

import rootReducer from '../reducers'

export default function configStore (){
    /*const logger = createLogger();*/
    /*const enhancer = compose(
        applyMiddleware(thunk, promise, logger)
    );*/
    return createStore(rootReducer,  applyMiddleware(thunk));//, initialState, enhancer
}
/*import {createStore} from 'redux';

const rootReducer = () =>{
    
}
export default store = createStore(rootReducer);*/