import * as AuthActionCreators from './auth_acts'
import * as ContactsActionCreators from './contacts_acts'

export default {
    ...AuthActionCreators,
    ...ContactsActionCreators
}