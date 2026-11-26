import {http, HttpResponse} from "msw";

const users = [{id: "1", name: "joao", email: "joao@gmail.com", password: "123"}];


export const handlers = [
    http.post("/api/auth/login", async ({request}) => {

        const { email, password } = await request.json() as {
            email: string;
            password: string;
        };

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
    })
];