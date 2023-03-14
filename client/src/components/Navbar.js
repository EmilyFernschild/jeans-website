import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            The Jeans Project
            <ul>
                <li><NavLink to= "/">Home</NavLink></li>
                <li><NavLink to= "/Login">Login</NavLink></li>
                <li><NavLink to= "/Jeans">Jeans</NavLink></li>
                <li><NavLink to= "/NewJeansForm">New Jeans</NavLink></li>
            </ul>
        </div>
    )
}
export default NavBar;