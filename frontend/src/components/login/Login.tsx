import { useState } from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

interface ILoginProps{
    onRegister: () => void;
    onBack: () => void;
    onForm: () => void
    showForm: boolean;
}

function Login({onRegister, onBack, onForm, showForm}: ILoginProps){
    const [email, setEmail] = useState("");

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
         setEmail(event.target.value);
    };

    return(
        <div className="login-form">
            {!showForm ?
                <>
                    <button className="login-option">
                        Entrar com Google
                    </button>

                    <button className="login-option" onClick={onForm}>
                        Entrar com o e-mail
                    </button>   
                </>
                :
                <LoginForm
                    onBack={onBack}
                    onRegister={onRegister}
                    emailHandler={emailHandler}
                    email={email}
                />
            }
            

        </div>
    );
}

export default Login;