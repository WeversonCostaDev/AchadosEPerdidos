import "./PassworkStep.css";

interface IPasswordStepProps {
    onBack: () => void;
    onNext: () => void;
}

function PasswordStep({ onBack, onNext }: IPasswordStepProps) {
    return (
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
                <button className="register-back" onClick={onBack}>
                    Voltar
                </button>

                <button className="register-submit" onClick={onNext}>
                    Criar
                </button>
            </div>
        </div>
    );
}

export default PasswordStep;