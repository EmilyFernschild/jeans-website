import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({updateUser}){
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [waist, setWaist] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [age, setAge] = useState("")
    const [size, setSize] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // maybe dropzone?
    // const [picture, setPicture] = useState("")

    let navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch(`/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                username: username, 
                password: password,
                email: email,
                waist: parseInt(waist),
                height: parseInt(height),
                weight: parseInt(weight),
                age: parseInt(age),
                usual_size: size
            }),
        }).then((r) => {
            setIsLoading(false);
            if(r.ok){
                r.json().then((user)=> {
                    updateUser(user)
                    navigate(`/`)
                })
            } else {
                r.json().then((err) => setErrors(err.errors));
              }
        })
    }

    function onLogin(e){
        e.preventDefault()
        navigate(`/login`)
      }

    return(
        <div>
            <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input 
                     type="text"
                     name="name" 
                     id="name" 
                     placeholder="Name" 
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     />
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
                     <label>Email</label>
                     <input 
                     type="email"
                     name="email" 
                     id="email" 
                     placeholder="Email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                     <br/>
                     <label>Waist</label>
                     <input 
                     type="waist"
                     name="waist" 
                     id="waist" 
                     placeholder="Waist" 
                     value={waist}
                     onChange={(e) => setWaist(e.target.value)}
                     />
                     <label>Height</label>
                     <input 
                     type="height"
                     name="height" 
                     id="height" 
                     placeholder="Height" 
                     value={height}
                     onChange={(e) => setHeight(e.target.value)}
                     />
                     <label>Weight</label>
                     <input 
                     type="weight"
                     name="weight" 
                     id="weight" 
                     placeholder="Weight" 
                     value={weight}
                     onChange={(e) => setWeight(e.target.value)}
                     />
                     <label>Age</label>
                     <input 
                     type="age"
                     name="age" 
                     id="age" 
                     placeholder="Age" 
                     value={age}
                     onChange={(e) => setAge(e.target.value)}
                     />
                     <label>size</label>
                     <input 
                     type="size"
                     name="size" 
                     id="size" 
                     placeholder="Size" 
                     value={size}
                     onChange={(e) => setSize(e.target.value)}
                     />
                     <button type='submit' value='Sign up!'> Sign Up!</button>
                </form>
                {errors? <div className='errors'>{errors} </div>:null}
                <div> Already have an account? </div>
                <label>{isLoading ? "Loading..." : null }</label>
                <button className='primary-btn' onClick={onLogin}> Log in! </button>
        </div>
    )
}
export default Signup;