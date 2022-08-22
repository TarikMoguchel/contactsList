import { useEffect, useState } from "react"
import { Button, FormControl } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../reducers/hooks/useActions";
import { useTypedSelector } from "../../../reducers/hooks/useTypedSelectore";
import '../styles/AuthPage.css'

export const AuthPage = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('')

    const { LogInAuth } = useActions();
    const {logedIn} = useTypedSelector(state=>state.authState)
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(logedIn)
        if(logedIn)
            navigate("/contacts")
    },[logedIn])
    return (
        <div className='auth_main'>
            <div className='auth_card'>
                <span className="auth_title">Вход в приложение</span>
                <hr />
                <FormControl value={login} className="auth_form" placeholder="Логин" onChange={(e) => setLogin(e.target.value)} />
                <FormControl type='password' value={password} className="auth_form" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
                <hr />
                <Button className="auth_button" disabled={login.length === 0 || password.length === 0} onClick={() => LogInAuth(login, password)}>Войти</Button>
            </div>

        </div>
    )
}