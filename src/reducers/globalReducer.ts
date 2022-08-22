import {combineReducers} from 'redux'
import { AuthReducer } from '../pages/AuthPage/logic/auth_redux_logic'
import { ContactsReducer } from '../pages/ContactsPage/logic/cont_redux_logic'

export const rootReducer = combineReducers({
    contactsState:ContactsReducer,
    authState:AuthReducer
})

export type RootState = ReturnType<typeof rootReducer>