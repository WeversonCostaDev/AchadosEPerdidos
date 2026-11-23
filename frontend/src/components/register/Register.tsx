import { useState } from "react";
import EmailStep from "./steps/EmailStep";
import PasswordStep from "./steps/PasswordStep";
import "./Register.css";

interface IRegisterProps{
    onLogin: () => void;
}

function Register({onLogin}: IRegisterProps){
    const [step, setStep]= useState(1);
    const [email, setEmail] = useState("");

    return(
        <div className="register-form">
            {step === 1 && (
                <EmailStep
                    onBack={onLogin}
                    nextStep={() => setStep(2)}
                    setEmail={setEmail}
                    email={email}
                />
            )}

            {step === 2 && (
                <PasswordStep
                    onBack={()=> setStep(1)}
                    onNext={()=> null}
                />
            )}
        </div>
    );
}

export default Register;