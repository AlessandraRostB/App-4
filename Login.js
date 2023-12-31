import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()


    const saveUseInfoLocalStorage = (token) =>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }

    
    const hadleSubmit = (e)=>{
        e.preventDefault()

        const credentials = {email, password}

        axios.post('http://localhost:8000/login', credentials,{
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(response =>{
            alert(response.data.message)
            saveUseInfoLocalStorage(response.data.token)
            navigate('home')
            
        })
        .catch(error => console.log(error))

    }

    return(
        <>
        <h1>Login</h1>
            <form onSubmit={hadleSubmit}>
                <label>E-mail:</label>
                <input type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label>Senha:</label>
                <input type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Entrar</button>
            </form>
        </>
    )
}

export default Login