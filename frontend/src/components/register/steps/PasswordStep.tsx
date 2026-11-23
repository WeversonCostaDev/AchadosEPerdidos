import "./PassworkStep.css";

interface IPasswordStepProps {
    onBack: () => void;
    onNext: () => void;
}

function PasswordStep({ onBack, onNext }: IPasswordStepProps) {

    const createHandler = (event: React.SubmitEvent<HTMLFormElement>)=> {
        event.preventDefault();
        onNext();
    } 

    return (
        <form onSubmit={createHandler}>
            <div className="password-step">
                <h2 className="register-title">Crie sua senha</h2>

                <input
                    className="register-input"
                    type="password"
                    placeholder="Digite sua senha"
                />

                <input
                    className="register-input"
                    type="password"
                    placeholder="Confirme sua senha"
                />

                <div className="register-actions">
                    <button className="register-back" onClick={onBack} type="button">
                        Voltar
                    </button>

                    <button className="register-submit" type="submit">
                        Criar
                    </button>
                </div>
            </div>
        </form>
    );
}

export default PasswordStep;