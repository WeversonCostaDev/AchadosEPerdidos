
import dotenvSafe from "dotenv-safe";
import express from "express";

dotenvSafe.config();

const porta = Number(process.env.PORT);
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.status(200).json({
        mensagem: "API Achados e Perdidos funcionando!",
        status: "online"
    });
});

app.listen(porta, () => {
    console.log(`Servidor executando em http://localhost:${porta}`);
});
