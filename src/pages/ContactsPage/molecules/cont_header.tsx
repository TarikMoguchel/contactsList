import { Button } from "react-bootstrap"
import { useActions } from "../../../reducers/hooks/useActions"
import { useTypedSelector } from "../../../reducers/hooks/useTypedSelectore"
import { BiExit } from "react-icons/bi";
export const ContactsHeader=()=>{
    const {LogOutAuth} = useActions()
    const {name} = useTypedSelector(state=>state.authState)
    return(
        <div className="cont_header">
            <h1 style={{fontWeight: 700, color:"white"}}>Добро пожаловать, {name}</h1>
            <Button onClick={()=>LogOutAuth()} className="cont_button"><BiExit style={{fontSize:"18px"}}/> Выйти </Button>
        </div>
    )
}