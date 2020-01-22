import * as actionTypes from '../actions'

const initialState = {
    taskNames:[],
    taskName:''
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_TASK:
            return{
                ...state,
                taskNames:state.taskNames.concat({id:new Date(), taskName:action.taskName, quote:action.quote.value[0].joke}),
                taskName:''
            }
        case actionTypes.REMOVE_TASK:
            const updatedTasks = state.taskNames.filter(taskName => taskName.id!==action.id)
            return{
                 ...state,
                 taskNames:updatedTasks
            };
        case actionTypes.EDIT_TASK:
            const updatedTaskNames = state.taskNames.filter(() => true)
            updatedTaskNames[action.index].taskName=action.newName;
            return{
                ...state,
                taskNames:updatedTaskNames
            };
        case actionTypes.ADD_TASK_NAME:
            if(action.taskName.length===0)
            {
                return;
            }
            return{
                ...state,
                taskName:action.taskName
            };
    }
    return state;
}

export default reducer;