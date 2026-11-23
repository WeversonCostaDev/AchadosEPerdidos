import "./EmailStep.css";


interface IEmailStepPros {
    onBack: () => void;
    nextStep: () => void;
    setEmail: (text: string) => void;
    email: string;
}   

function EmailStep({ onBack, nextStep, setEmail, email }: IEmailStepPros) {
    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const text = event.target.value;
        setEmail(text);
    };

    return (
        <div className="email-step">
            <h2 className="register-title">Informe seu e-mail</h2>

            <input
                className="register-input"
                onChange={emailHandler}
                value={email}
                type="email"
                placeholder="E-mail"
            />

            <div className="register-actions">
                <button className="register-back" onClick={onBack}>
                    Voltar
                </button>

                <button className="register-submit" onClick={nextStep}>
                    Enviar
                </button>
            </div>
        </div>
    );
}

export default EmailStep;