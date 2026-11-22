import { useState } from "react";

interface IRegisterProps{
    onLogin: () => void;
}

function Register({onLogin}: IRegisterProps){
    const [step, setStep]= useState(1);

    return(
        <div className="register-form">
            {step === 1 && (
                <>
                    <input type="e-mail" placeholder="E-mail"/>
                    <button onClick={onLogin}>Voltar</button>
                    <button onClick={()=>{setStep(2)}}>Enviar</button>
                </>
            )}

            {step === 2 && (
                <>
                    <input type="password" placeholder="Enter your password"/>
                    <input type="password" placeholder="Confirm your password"/>
                    <button onClick={()=>{setStep(1)}}>Voltar</button>
                    <button>Criar</button>
                </>
            )}
        </div>
    );
}

export default Register;