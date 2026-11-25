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

        const token = crypto.randomUUID();

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
];