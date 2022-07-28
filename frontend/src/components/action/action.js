import * as api from "../apis/api"
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";

export const FETCH_POST_ERROR = "FETCH_POST_ERROR";
export const CREATE_POST_ERROR = "CREATE_POST_ERROR";

export const fetchPostAction = ()=> async(dispatch)=>{

    try {
        const { data } = await api.fetchPosts()
        dispatch({ type:FETCH_POST, posts:data })
    } catch (error) {
        dispatch({ type:FETCH_POST_ERROR, error:error})
    }
    
}

export const createPostAction = (post)=>{
    return {
        type:CREATE_POST,
        post:post
    }
}

export const createPostErrorAction = (error)=>{
    return {
        type:CREATE_POST_ERROR,
        error:error
    }
}