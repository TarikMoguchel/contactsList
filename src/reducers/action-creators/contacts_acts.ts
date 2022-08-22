import axios from 'axios'
import {Dispatch} from 'redux'
import { UserAction, UserActionsType } from '../../pages/ContactsPage/logic/cont_redux_types'
import { toast } from 'react-toastify';

export const fetchContacts =()=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try{            
            dispatch({type:UserActionsType.LOAD_CONTACTS})            
            const response = await axios.get('http://localhost:3001/contacts')
            dispatch({type:UserActionsType.LOAD_CONTACTS_SUCCES, payload:response.data})
        }catch(e){
            toast.error("Не удалось загрузить контакты")
        }

    }
}
export const AddContact =(Name:string, Phone:string)=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try{            
            dispatch({type:UserActionsType.ADD_CONTACT})            
            const response = await axios.post('http://localhost:3001/contacts',{Name:Name,Phone:Phone})
            dispatch({type:UserActionsType.ADD_CONTACT_SUCCES, payload:response.data})
        }catch(e){
            toast.error("Не удалось добавить контакт")
        }

    }
}
export const EditContact=(id:number, Name:string, Phone:string)=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try{            
            dispatch({type:UserActionsType.EDIT_CONTACT, payload:{id:id,Name:Name,Phone:Phone}})            
            const response = await axios.put(`http://localhost:3001/contacts/${id}`,{Name:Name,Phone:Phone})
            dispatch({type:UserActionsType.EDIT_CONTACT_SUCCES, payload:response.data})   
        }catch(e){
            toast.error("Не удалось изменить контакт")
        }

    }
}
export const DeleteContact=(id:number)=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try{            
            dispatch({type:UserActionsType.DELETE_CONTACT, payload:id})            
            await axios.delete(`http://localhost:3001/contacts/${id}`)
        }catch(e){
            toast.error("Не удалось удалить контакт")
        }

    }
}