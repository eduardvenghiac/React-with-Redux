import {put} from 'redux-saga/effects';
import getQuote from '../../Request/quote';
import * as actionTypes from '../actions'

export function* addTaskSaga(action){
    const quote = yield getQuote();
    yield put({
        type:actionTypes.ADD_TASK,
        taskName:action.taskName,
        quote:quote
    });
}