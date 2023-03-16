import { NavLink } from "react-router-dom";

function NavBar({updateUser, user}){

    const handleLogOut = () => {
            fetch(`/logout`, {
              method:"DELETE"
            })
            .then(res =>{
              if(res.ok){
                updateUser(false)
              }
            })
          }

    return(
        <div>
            The Jeans Project
            <ul>
                <li><NavLink to= "/">Home</NavLink></li>
                {!user?<li><NavLink to= "/Login">Login</NavLink></li>:
                <li><NavLink to = "/" onClick={handleLogOut}>Logout</NavLink></li>}
                <li><NavLink to= "/Jeans">Jeans</NavLink></li>
                <li><NavLink to= "/NewJeansForm">New Jeans</NavLink></li>
                {user?<li><NavLink to= {`/user/${user.id}`}>Account</NavLink></li>:null}
            </ul>
        </div>
    )
}
export default NavBar;