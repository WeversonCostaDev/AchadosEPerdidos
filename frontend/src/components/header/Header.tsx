import Logo from "../logo/Logo";
import Auth from "../auth/Auth";
import SearchBar from "../searchBar/SearchBar";
import imagemLogo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import UserMenu from "../userMenu/UserMenu";

import "./Header.css";

function Header(){
    const context = useContext(AuthContext);
    
    if (!context) {
    throw new Error("Header precisa estar dentro de AuthProvider");
    }

    if (context.logged) {
        console.log(`Usuário: ${context.logged.name}`);
    } else {
        console.log("Nenhum usuário autenticado");
    }

    return(
        <header className="header">
            <Logo
                src={imagemLogo}
                alt="logo do site"
            />
            
            <SearchBar
                placeholder="O que você quer pesquisar?"
            />

            <div className="header-actions">

                {context.logged ?
                 
                    <UserMenu
                        userName={context.logged.name}
                    />
                :
                    <Auth
                        dropdownName="Entrar ou Cadastrar"
                    />
                 }
            </div>
        </header>
    );
}

export default Header;