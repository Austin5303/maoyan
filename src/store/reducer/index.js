import {
    combineReducers
} from "redux"
import comingreducer from './movie/comingindex'
import search from './search/index'
import movie from './movie/onindex'
import common from './common/index'
export default combineReducers({
    comingreducer,
    search,
    movie,
    common
}) 