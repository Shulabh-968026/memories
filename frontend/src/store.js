import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import reducer from "./components/reducer"
import thunk from 'redux-thunk'
export default configureStore({
    reducer
},compose(applyMiddleware(thunk)))