import { useState } from "react";
import Login from "../Login";
import Register from "../register/Register";
import "./Dropdown.css";

interface DropdownProps{
    dropdownName: string;
}

function Dropdown({dropdownName}: DropdownProps){
    const [value, setValue] = useState(false);
    const [screen, setScreen] = useState("login");

    return(
        <div className="dropdown">
            <button onClick={()=>setValue(!value)}>{dropdownName}</button>

            {value ? (
            <div className="dropdown-content">
                {screen === "login" ? 
                    <Login
                        onRegister={()=> setScreen("register")}
                    />
                    :
                    <Register
                        onLogin={()=> setScreen("login")}
                    />
                } 

            </div>
            ) : null}
        </div>
    );
}

export default Dropdown;