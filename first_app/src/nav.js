import { Link } from "react-router-dom";
import  logo  from "./Allimage/logo.jpeg";

import './App.css';
function Navbar(){
    return(
        <div className="abc">
            <div>
                <img src="logo.jpeg" alt="sdfg" />
            </div>
            <div>
                <Link className="xyz" to="/">Home</Link>
                <Link className="xyz" to="/menu">Menu</Link>
                <Link className="xyz" to="/contact">Contact</Link>
            </div>
        </div>
    );
};
export default Navbar;