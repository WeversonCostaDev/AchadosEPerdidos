import { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";
import Dropdown from "../dropdown/Dropdown";

interface IAuthProps{
    dropdownName: string;
}

function Auth({dropdownName}: IAuthProps){
    const [screen, setScreen] = useState("login");
    const [showFormLogin, setShowFormLogin]= useState(false);

    return(

        <Dropdown dropdownName={dropdownName}>

            {screen === "login" ? 
                <Login
                    onRegister={()=> setScreen("register")}
                    onBack={()=>setShowFormLogin(false)}
                    onForm={()=>setShowFormLogin(true)}
                    showForm={showFormLogin}
                />
                :
                <Register
                    
                    onLogin={() => {
                        setScreen("login");
                        setShowFormLogin(true);
                    }}
                />
            } 
        </Dropdown>
    );
}

export default Auth;