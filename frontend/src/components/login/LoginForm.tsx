import "./LoginForm.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {login} from "../../services/authService";

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
    if(!context) throw new Error ("AuthProvider não fornecido!");

    const handleLogin = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.target);

        const response = await login(String(data.get("email")), String(data.get("password")));
        
        context.onLogin(response);
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