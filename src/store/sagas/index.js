import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions'
import {addTaskSaga} from '../sagas/taskList'

export function* watchAddTask() {
    yield takeEvery(actionTypes.ADD_TASK_SAGA,addTaskSaga);
}
