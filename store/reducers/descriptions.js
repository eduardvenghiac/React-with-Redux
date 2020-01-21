import * as actionTypes from '../actions'

const initialState = {
    descriptions:[]
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_TASK:
            return{
                ...state,
                descriptions:state.descriptions.concat({id:new Date(),value: action.value})
            }
        case actionTypes.REMOVE_TASK:
            const updatedDescriptions = state.descriptions.filter(descripton => descripton.id!==action.taskId)
            return{
                 ...state,
                 descriptions:updatedDescriptions
            };
    }
    return state;
}

export default reducer;