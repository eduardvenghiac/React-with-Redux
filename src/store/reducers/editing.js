import * as actionTypes from '../actions'

const initialState = {
    editing:false
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.SAVE_TASK:
            return{
                ...state,
                editing:state.editing=false
            }
        case actionTypes.CANCEL_TASK:
            return{
                ...state,
                editing:state.editing=false
            };
        case actionTypes.EDIT_TASK:
            return{
                ...state,
                editing:state.editing=true
            }
    }
    return state;
}

export default reducer;
