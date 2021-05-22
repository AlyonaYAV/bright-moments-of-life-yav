import * as api from './../api';
/*
//Action creator without 'redux-thunk'
const getPosts = () => {
    const action = { type: 'FETCH_ALL', payload: [] };
    return action;
}
//With 'redux-thunk'
const getPosts = () => async (dispatch)=>{
    const action = { type: 'FETCH_ALL', payload: [] };
    return action;
}
The problem is we are working with asynchronous data to actually fetch all
the posts that's why we should use 'redux-thunk'
    'redux-thunk'allows us to use the 'async / await' capabilities, it wraps
the content of the 'action creator' with a function, this function contains 'dispatch'
*/
// Action Creators
export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch(e){
        console.log(e.message);
    }
}
export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE_POST', payload: data });
    }catch(e){
        console.log(e.message);
    }
}