import dotenvSafe from "dotenv-safe";

dotenvSafe.config();

function obrigatoria(nome: string): string {
    const valor = process.env[nome];
    if (valor === undefined || valor === "") {
        throw new Error(`Variável de ambiente ausente: ${nome}`);
    }
    return valor;
}

export const env = {
    porta: Number(obrigatoria("PORT")),
    frontendUrl: obrigatoria("FRONTEND_URL"),
    db: {
        host: obrigatoria("DB_HOST"),
        porta: Number(obrigatoria("DB_PORT")),
        usuario: obrigatoria("DB_USER"),
        senha: obrigatoria("DB_PASSWORD"),
        nome: obrigatoria("DB_NAME"),
    },
    jwt: {
        segredo: obrigatoria("JWT_SECRET"),
        expiracao: obrigatoria("JWT_EXPIRES_IN"),
    },
};