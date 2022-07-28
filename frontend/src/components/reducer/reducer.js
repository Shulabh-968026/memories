
import {
    FETCH_POST,CREATE_POST,FETCH_POST_ERROR,CREATE_POST_ERROR
} from "../action/action";

const initialFetchPostState = {
    posts : {},
    error:""
}

export const fetchPostReducer = (state=initialFetchPostState,action)=>{
    switch(action.type)
    {
        case FETCH_POST:
            return { ...state,posts:action.posts}
        
        case FETCH_POST_ERROR:
            return { ...state,error:action.error}
        
        default:
            return state
    }
}

const initialCreatePostState = {
    post : {},
    error:""
}

export const createPostReducer = (state=initialCreatePostState,action)=>{
    switch(action.type)
    {
        case CREATE_POST:
            return { ...state,post:action.post}
        
        case CREATE_POST_ERROR:
            return { ...state,error:action.error}

        default:
            return state
    }
}