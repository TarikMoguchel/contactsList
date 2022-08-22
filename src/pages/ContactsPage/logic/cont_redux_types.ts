export interface IContact {
    Name: string,
    Phone: string,
    id: number
}

export type UserAction = ILoadContacts
    | IAddContact
    | IDeleteContact
    | IEditContact
    | ILoadContactsSucces
    | IAddContactSucces
    | IEditContactSucces

interface ILoadContacts {
    type: UserActionsType.LOAD_CONTACTS
}
interface ILoadContactsSucces {
    type: UserActionsType.LOAD_CONTACTS_SUCCES
    payload: IContact[]
}

interface IAddContact {
    type: UserActionsType.ADD_CONTACT
}
interface IAddContactSucces {
    type: UserActionsType.ADD_CONTACT_SUCCES
    payload: IContact
}
interface IDeleteContact {
    type: UserActionsType.DELETE_CONTACT
    payload: number
}

interface IEditContact {
    type: UserActionsType.EDIT_CONTACT
    payload: IContact
}
interface IEditContactSucces {
    type: UserActionsType.EDIT_CONTACT_SUCCES
    payload: IContact
}


export enum UserActionsType {
    LOAD_CONTACTS = "LOAD_CONTACTS",
    ADD_CONTACT = "ADD_CONTACT",
    ADD_CONTACT_SUCCES = "ADD_CONTACT_SUCCES",
    DELETE_CONTACT = "DELETE_CONTACT",
    EDIT_CONTACT = "EDIT_CONTACT",
    EDIT_CONTACT_SUCCES = "EDIT_CONTACT_SUCCES",
    LOAD_CONTACTS_SUCCES = "LOAD_CONTACTS_SUCCES"
}