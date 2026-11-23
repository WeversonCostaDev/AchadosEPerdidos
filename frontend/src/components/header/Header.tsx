import Logo from "../logo/Logo";
import Auth from "../auth/Auth";
import SearchBar from "../searchBar/SearchBar";
import imagemLogo from "../../assets/logo.png";
import "./Header.css";

function Header(){
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
                <Auth
                    dropdownName="Entrar ou Cadastrar"
                />
            </div>
        </header>
    );
}

export default Header;