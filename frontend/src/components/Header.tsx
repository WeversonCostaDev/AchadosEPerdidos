import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/login">Entrar</Link>
                <Link to="/register">Cadastrar</Link>
            </nav>
        </header>
    );
}

export default Header;