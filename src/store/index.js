import {
    createStore,
    applyMiddleware
} from "redux"
import thunk from 'redux-thunk'
import Rootreducer from "../store/reducer/index"
export default createStore(Rootreducer, applyMiddleware(thunk))
