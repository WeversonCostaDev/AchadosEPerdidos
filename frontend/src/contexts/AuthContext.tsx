import { createContext, useState } from "react";

export interface IUser {
    id: string;
    name: string;
    email: string;
}

interface IAuthContext{
    logged: IUser | null;
    onLogin: (user: IUser)=>void;
}

export const AuthContext = createContext<IAuthContext | null>(null);


interface IAuthProviderProps{
    children: React.ReactNode;
}

export function AuthProvider({children}: IAuthProviderProps){
    const [logged, setLogged] = useState<IUser | null>(null);
    
    const onLogin = (user: IUser) =>{
        setLogged(user);
        console.log(logged);
    }

    return(
        <AuthContext.Provider value={{logged, onLogin}}>
            {children}
        </AuthContext.Provider>
    );
}