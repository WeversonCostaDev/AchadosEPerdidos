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

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>): void => {
        event.preventDefault();
        nextStep();
    };

    return (
        <form className="email-step" onSubmit={handleSubmit}>
            <h2 className="register-title">Informe seu e-mail</h2>

            <input
                className="register-input"
                onChange={emailHandler}
                value={email}
                type="email"
                placeholder="E-mail"
                required
            />

            <div className="register-actions">
                <button
                    className="register-back"
                    type="button"
                    onClick={onBack}
                >
                    Voltar
                </button>

                <button
                    className="register-submit"
                    type="submit"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
}

export default EmailStep;