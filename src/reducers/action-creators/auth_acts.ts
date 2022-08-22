import axios from "axios"
import { Dispatch } from "redux"
import { AuthAction, AuthActionsType } from "../../pages/AuthPage/logic/auth_redux_types"
import { toast } from 'react-toastify';

export const LogInAuth =(login:string,password:string)=>{
    return async (dispatch: Dispatch<AuthAction>)=>{
        
        try{            
            dispatch({type:AuthActionsType.LOGIN})            
            const response = await axios.get(`http://localhost:3001/profile?login=${login}&password=${password}`)
            if(response.data.length>0){
                console.log("Есть данные",response.data)
                dispatch({type:AuthActionsType.LOGIN_SUCCES, name:response.data[0].name})
            }else{
                toast.error("Неверно введены данные")
            }
            
            
        }catch(e){
            toast.error("Неверно введены данные")
        }

    }
}
export const LogOutAuth =()=>{
    return async (dispatch: Dispatch<AuthAction>)=>{
        try{            
            dispatch({type:AuthActionsType.LOGOUT})
        }catch(e){
            toast.error("Неверно введены данные")
        }

    }
}