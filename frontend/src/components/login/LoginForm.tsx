import "./LoginForm.css";

interface ILoginFormProps{
    onBack: () => void;
    onRegister: () => void;
    emailHandler: (event: React.ChangeEvent<HTMLInputElement>)=>void;
    email: string;
}

function LoginForm({ onRegister, onBack, emailHandler, email }: ILoginFormProps) {
    return (
        <div className="login-form">
            <h2 className="login-form-title">
                Iniciar sessão com email e senha:
            </h2>

            <input
                className="login-input"
                onChange={emailHandler}
                value={email}
                type="email"
                placeholder="E-mail"
            />

            <input
                className="login-input"
                type="password"
                placeholder="Senha"
            />

            <div className="login-actions">
                <button className="login-back" onClick={onBack}>
                    Voltar
                </button>

                <button className="login-submit">
                    Entrar
                </button>
            </div>

            <p className="login-register-text">
                Não tem uma conta?
                <button className="login-register-button" onClick={onRegister}>
                    Cadastre-se
                </button>
            </p>
        </div>
    );
}
export default LoginForm;