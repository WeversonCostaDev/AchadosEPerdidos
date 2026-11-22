import { useState } from "react";
import { Link } from "react-router-dom";


interface ILoginProps{
    onRegister: () => void;
}

function Login({onRegister}: ILoginProps){
    const [showForm, setShowForm]= useState(false);

    return(
        <div className="login-form">
            {!showForm ?
                <>
                    <button>
                        Entrar com Google
                    </button>

                    <button onClick={() => setShowForm(!showForm)}>
                        Entrar com o e-mail
                    </button>   
                </>
                :
                <>  
                    <h2>Iniciar sessão com email e senha:</h2>
                    <input type="email" placeholder="E-mail" />

                    <input type="password" placeholder="Password" />
                    
                    <button onClick={()=> setShowForm(!showForm)}>Voltar</button>
                    <button>Entrar</button>

                    <p>
                        Não tem uma conta?
                        <button onClick={onRegister}>
                            Cadastre-se
                        </button>
                    </p>
                </>
            }
            

        </div>
    );
}

export default Login;