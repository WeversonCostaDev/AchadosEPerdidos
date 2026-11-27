import {http, HttpResponse} from "msw";

const users = [{id: "1", name: "joao", email: "joao@gmail.com", password: "123"}];

type User = {
    id: string,
    name: string,
    email: string,
    password: string,
}

export const handlers = [
    http.post("/api/auth/login", async (httpcontext) => {

        const { email, password } = await httpcontext.request.json() as {
            email: string;
            password: string;
        };

        console.log("Usuários cadastrados:", users);
        console.log("E-mail recebido:", email);
        console.log("Senha recebida:", password);

        const user = users.find(u => u.email === email && u.password === password);

        if(!user) {
            return HttpResponse.json(
                {message: "E-mail ou senha incorretos"},
                {status: 401},
            )
        }

        const token = `${String(crypto.randomUUID())}.${btoa(JSON.stringify(user))}`;

        return HttpResponse.json(
            {
                id: user.id,
                name: user.name,
                email: user.email
            },
            {
                status: 200,
                headers: {
                    "Set-Cookie": `token=${token}; HttpOnly; Path=/;SameSite=Lax`
                }
            }
        );
        
    }),
    // RECUPERAÇÃO DA SESSÃO
    http.get("/api/auth/me", ({ cookies }) => {
        const token = cookies.token;

        if (!token) {
            return HttpResponse.json(
                { message: "Não autenticado" },
                { status: 401 }
            );
        }

        const [, payloadCodificado] = token.split(".");

        const payload = JSON.parse(atob(payloadCodificado));

        return HttpResponse.json(payload);
    }),

    http.post("/api/auth/logout", ()=>{
        return new HttpResponse(
            {message: "Logout realizado com sucesso!"},
            {
                status:204,
                headers: {
                    "Set-Cookie": "token=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0"
                }
            }
        );
    }),
    http.post("/api/auth/register", async(httpcontext)=> {
        const {email, password} = await httpcontext.request.json() as {email: string, password: string}; 

        const user: User = {
            id: Date.now().toString(),
            name: "UserName",
            email: email,
            password: password,
        }

        users.push(user);

        return HttpResponse.json({
            message: "Cadastro realizado!",
            user: user
        },
        {
            status: 201
        });
    })
];