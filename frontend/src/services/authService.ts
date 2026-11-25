import type {IUser} from "../contexts/AuthContext";

export async function login(email: string, password:string): Promise<IUser>{
    const response = await fetch ("api/auth/login", {
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