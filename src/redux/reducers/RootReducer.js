import {combineReducers} from 'redux'

import {loadDataReducer} from './FetchDataReducer'


 export const rootReducer = combineReducers({
    loadData:loadDataReducer
})