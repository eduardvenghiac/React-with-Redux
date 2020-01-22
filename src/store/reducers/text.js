import * as actionTypes from '../actions'

const initialState={
    text:''
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_TASK_NAME:
            return{
                ...state,
                text:action.value
            };
        case actionTypes.ADD_TASK:
            return{
                ...state,
                text:''  
            };
    }
    return state;
}

export default reducer;