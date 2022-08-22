import { useNavigate } from 'react-router-dom';
import { AuthAction, AuthActionsType} from './auth_redux_types';

interface IAuthState {
    logedIn: boolean
    name:string
}
const authState: IAuthState = {
    logedIn: false,
    name:''
}

export const AuthReducer = (state = authState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case AuthActionsType.LOGIN:
            return state
        case AuthActionsType.LOGIN_SUCCES:   
            return { logedIn: true, name:action.name}
        case AuthActionsType.LOGOUT:
            return { logedIn: false, name:"" }
        default:
            return state
    }
}
