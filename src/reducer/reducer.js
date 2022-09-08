import { SET_STATE } from "../constants/cosntants";

const initialState={
data:[]
};

const reducer= (state= initialState,action)=>{
    switch(action.type){
        case SET_STATE:
            return{
                ...state,
                data: action.payload
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer;