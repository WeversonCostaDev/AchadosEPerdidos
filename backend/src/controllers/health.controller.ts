import type { Request, Response } from "express";
import { testarConexao } from "../config/database.js";

export async function verificarSaude(_request: Request, response: Response) {
    try {
        await testarConexao();
        response.status(200).json({
            mensagem: "API Achados e Perdidos funcionando!",
            status: "online",
            banco: "conectado",
        });
    } catch {
        response.status(503).json({
            mensagem: "API no ar, mas sem conexão com o banco de dados.",
            status: "online",
            banco: "desconectado",
        });
    }
}