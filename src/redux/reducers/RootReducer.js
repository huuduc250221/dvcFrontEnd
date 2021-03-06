import {combineReducers} from 'redux'

import {loadDataReducer} from './FetchDataReducer'
import fetchRecordReducer from './FetchRecord'
import usersReducer from './FetchUserReducer'
import loginReducer from './LoginReducer'
import registrationReducer from './RegistrationReducer'


 export const rootReducer = combineReducers({
    loadData:loadDataReducer,
    user: loginReducer,
    users: usersReducer,
    registration:registrationReducer,
    records: fetchRecordReducer,
})