import { env } from "./config/env.js";
import { testarConexao } from "./config/database.js";
import app from "./app.js";

async function iniciar() {
    try {
        await testarConexao();
        console.log("Conectado ao MySQL com sucesso.");
    } catch (erro) {
        console.error("Falha ao conectar ao MySQL:", erro);
        process.exit(1);
    }

    app.listen(env.porta, () => {
        console.log(`Servidor executando em http://localhost:${env.porta}`);
    });
}

iniciar();