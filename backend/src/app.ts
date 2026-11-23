import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

// Todas as rotas da API ficam sob o prefixo /api
app.use("/api", routes);

export default app;