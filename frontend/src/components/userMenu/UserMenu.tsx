import Dropdown from "../dropdown/Dropdown";
import { Link } from "react-router-dom";
import "./UserMenu.css";
import { useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface IUserMenuProps{
    userName: string;
}

export function UserMenu({userName}: IUserMenuProps){
    const context = useContext(AuthContext);
    const navigate = useNavigate();

    if(!context)
        throw new Error("UserMenu precisa estar dentro de um AuthProvider.");

    const handleLogout = () => {
        context.onLogout();
        navigate("/");
   }
   
    return(
        <Dropdown
            dropdownName={userName}
        >   
            <div className="user-menu-options">
                <Link to="/account">Minha conta</Link>
                    
                    <button type="button" onClick={handleLogout}>
                        Sair
                    </button>
            </div>
        </Dropdown>
   ); 
}

export default UserMenu;