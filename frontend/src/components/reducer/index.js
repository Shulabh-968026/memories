
import { combineReducers } from 'redux'

import {
    fetchPostReducer,createPostReducer
} from "./reducer"

export default combineReducers({
    fetchPostReducer,
    createPostReducer,
})