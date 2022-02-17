import {combineReducers} from 'redux';
import {taxTypeReducer} from './taxTypeReducer';
import {notificationReducer} from './notificationReducer';


const reducers = combineReducers({
   taxType: taxTypeReducer,
   notification: notificationReducer
})

export default reducers;