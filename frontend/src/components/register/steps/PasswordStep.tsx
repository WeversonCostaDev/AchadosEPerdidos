import { useState } from "react";
import "./PassworkStep.css";

interface IPasswordStepProps {
    onBack: () => void;
    onNext: (password:string) => void;
}

function PasswordStep({ onBack, onNext }: IPasswordStepProps) {

    const [password, setPassowrd] = useState("");
    const [confirm, setConfirm] = useState("");

    const createHandler = (event: React.SubmitEvent<HTMLFormElement>):void => {
        event.preventDefault();

        if(password !== confirm){
            alert("as senhas não coincidem!");
            return;
        }

        onNext(password);
    } 

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPassowrd(event.currentTarget.value);
    }
    const handleConfirm = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setConfirm(event.currentTarget.value);
    }


    return (
        <form onSubmit={createHandler}>
            <div className="password-step">
                <h2 className="register-title">Crie sua senha</h2>

                <input
                    className="register-input"
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={handlePassword}
                    value={password}
                />

                <input
                    className="register-input"
                    type="password"
                    placeholder="Confirme sua senha"
                    onChange={handleConfirm}
                    value={confirm}
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