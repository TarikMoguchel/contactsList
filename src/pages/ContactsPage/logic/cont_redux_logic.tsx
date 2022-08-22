import { legacy_createStore as createStore } from 'redux';
import { IContact, UserAction, UserActionsType } from './cont_redux_types';

interface IContactState {
    contacts: IContact[],
    loaded: boolean
}
const contactsState: IContactState = {
    contacts: [{
        Name: '',
        Phone: "",
        id: 0
    }],
    loaded: false
}




export const ContactsReducer = (state = contactsState, action: UserAction): IContactState => {
    switch (action.type) {
        case UserActionsType.ADD_CONTACT:
            return state
        case UserActionsType.ADD_CONTACT_SUCCES:
            return { loaded: true, contacts: [...state.contacts, action.payload] }
        case UserActionsType.DELETE_CONTACT:
            return { loaded: true, contacts: [...state.contacts.filter(item => item.id !== action.payload)] }
        case UserActionsType.EDIT_CONTACT:
            return state
        case UserActionsType.EDIT_CONTACT_SUCCES:
            return { loaded: true, contacts: [...state.contacts.filter(item => item.id !== action.payload.id), action.payload] }
        case UserActionsType.LOAD_CONTACTS:
            return state;
        case UserActionsType.LOAD_CONTACTS_SUCCES:
            return { loaded: true, contacts: action.payload }
        default:
            return state
    }
}
