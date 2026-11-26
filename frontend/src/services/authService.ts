import type {IUser} from "../contexts/AuthContext";
import type { credentials } from "../contexts/AuthContext";


export async function login(credentials:credentials): Promise<IUser>{
    const email = credentials.email;
    const password = credentials.password;

    const response = await fetch ("/api/auth/login", {
       "method": "POST",
       "headers": {
            "Content-Type": "application/json"
       },
       credentials: "include",
       body: JSON.stringify({email, password})
    }); 

    if(!response.ok)
        throw new Error("Falha ao realizar login");

    return await response.json();
}

export async function getCurrentUser():Promise<IUser | null>{
    const response = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "include"
    });

    if(response.status === 401)
        return null;

    if (!response.ok)
        throw new Error("Falha ao recuperar sessão");

    const user: IUser = await response.json();
    
    return user;
}

export async function logout(): Promise<void>{
    const reponse = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
    });

    if(!reponse.ok) throw new Error("Erro ao tentar deslogar!");

}