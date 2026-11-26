import "./LoginForm.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import type { credentials } from "../../contexts/AuthContext";

interface ILoginFormProps{
    onBack: () => void;
    onRegister: () => void;
    handleEmail: (event: React.ChangeEvent<HTMLInputElement>)=>void;
    handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
    email: string;
    password: string;
}

function LoginForm({ onRegister, onBack, handleEmail, email, handlePassword, password}: ILoginFormProps) {
    const context = useContext(AuthContext);

    if(!context) throw new Error ("LoginForm precisa estar dentro de um Authprovider.");

    const handleLogin = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.target);

        const email: string = String(data.get("email"));
        const password: string = String(data.get("password"));
        const credentials: credentials = {
            email, password
        };
        context.onLogin(credentials);
    }
    
    return (
        <form className="login-form" onSubmit={handleLogin}>
            <h2 className="login-form-title">
                Iniciar sessão com email e senha:
            </h2>

            <input
                className="login-input"
                onChange={handleEmail}
                value={email}
                type="email"
                placeholder="E-mail"
                name="email"
                required
            />

            <input
                className="login-input"
                onChange={handlePassword}
                value={password}
                type="password"
                placeholder="Senha"
                name="password"
                required
            />

            <div className="login-actions">
                <button className="login-back" onClick={onBack}>
                    Voltar
                </button>

                <button className="login-submit" type="submit">
                    Entrar
                </button>
            </div>

            <p className="login-register-text">
                Não tem uma conta?
                <button className="login-register-button" onClick={onRegister}>
                    Cadastre-se
                </button>
            </p>
        </form>
    );
}
export default LoginForm;