import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({updateUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch(`/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(r => {
            setIsLoading(false)
            if(r.ok){
                r.json().then(user => {
                    navigate(`/`)
                    updateUser(user)
                })
            } else {
                r.json().then(json => setErrors(json.errors))
            }
        })
    }

    function onSignup(e){
        e.preventDefault()
        navigate(`/signup`)
    }

    return(
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <label>Username</label>
                    <input 
                     type="text"
                     name="username" 
                     id="username" 
                     placeholder="Username" 
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     />
                     <label>Password</label>
                     <input 
                     type="password"
                     name="password" 
                     id="password" 
                     placeholder="Password" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     />
                     <button type='submit' value='Log in!'>Log In!</button>
                </form>
                {errors? <div className='errors'>{errors}</div>:null} 
                <div>{isLoading ? "Loading..." : null }</div>
                <div> Are You a New user? 
                    <br/>
                    <button onClick = {onSignup}> Sign up!</button>
                </div>
            </div>
        </div>
    )
}
export default Login;