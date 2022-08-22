export type AuthAction = ILogIn | ILogInSucces | ILogOut 

interface ILogIn {
    type: AuthActionsType.LOGIN
}
interface ILogInSucces {
    type: AuthActionsType.LOGIN_SUCCES
    name:string
}
interface ILogOut {
    type: AuthActionsType.LOGOUT
}


export enum AuthActionsType {
    LOGIN = "LOGIN",
    LOGIN_SUCCES="LOGIN_SUCCES",
    LOGOUT ="LOGOUT",
    LOGOUT_SUCCES = "LOGOUT_SUCCES"
}