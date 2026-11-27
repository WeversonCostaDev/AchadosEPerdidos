import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "../services/authService";
import {login, logout} from "../services/authService";

export interface IUser {
    id: string;
    name: string;
    email: string;
}

export type Credentials = {
    email: string;
    password: string;
}

interface IAuthContext{
    logged: IUser | null;
    onLogin: (credentials: Credentials)=>Promise<void>;
    onLogout: ()=> void;
}

export const AuthContext = createContext<IAuthContext | null>(null);


interface IAuthProviderProps{
    children: React.ReactNode;
}

export function AuthProvider({children}: IAuthProviderProps){
    const [logged, setLogged] = useState<IUser | null>(null);
   
    
    useEffect(() => {
        async function verifyUser() {
            try {
                const user = await getCurrentUser();
                setLogged(user);
            }
            catch (error) {
                console.error("Erro ao verificar autenticação:", error);
                setLogged(null);
            }
        }

    verifyUser();
}, []);

    const onLogin = async (credentials: Credentials) =>{
        const response = await login(credentials);
        setLogged(response);
        console.log(logged);
    }
    const onLogout = async ()=>{
        await logout();
        setLogged(null);
    }

    return(
        <AuthContext.Provider value={{logged, onLogin, onLogout}}>
            {children}
        </AuthContext.Provider>
    );
}