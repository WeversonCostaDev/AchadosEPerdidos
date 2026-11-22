import mysql from "mysql2/promise";
import { env } from "./env.js";

// Pool de conexões: reaproveita conexões abertas em vez de abrir uma por requisição.
export const pool = mysql.createPool({
    host: env.db.host,
    port: env.db.porta,
    user: env.db.usuario,
    password: env.db.senha,
    database: env.db.nome,
    waitForConnections: true,
    connectionLimit: 10,
});

// Usada na inicialização e no health check para confirmar que o MySQL responde.
export async function testarConexao(): Promise<void> {
    const conexao = await pool.getConnection();
    try {
        await conexao.ping();
    } finally {
        conexao.release();
    }
}