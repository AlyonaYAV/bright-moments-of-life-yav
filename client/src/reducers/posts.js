const initialState = [];

const posts = (state = initialState, action)=>{
    switch(action.type){
        case "FETCH_ALL" : return action.payLoad;
        case "CREATE_POST" : return [ ...state, action.payLoad ];
        default: return state;
    }
}
export default posts;