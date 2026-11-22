# AchadosEPerdidos
Projeto de um site de achados e perdidos criado com React, typescript e Express. 

## Como rodar o backend

### Pré-requisitos
- Node.js
- MySQL Server 8.x em execução

### Passo a passo
1. Entre na pasta do backend e instale as dependências:
   ```bash
   cd backend
   npm install
   ```
2. Crie o banco de dados e as tabelas (o MySQL vai pedir sua senha):
   ```bash
   mysql -u root -p -e "source database/schema.sql"
   ```
   OBS: O comando acima pode apresentar erro não reconhecendo o "mysql". Muito provavelmente deve ser a falta da configuração da variável de ambiente mostrando onde encontra-se o arquivo mysql.exe (ao menos foi o que aconteceu comigo). Tem então duas opções para lidar com isso:
   - Adicionar a variável de ambiente: basta encontrar onde está o executável, copiar o caminho e adicionar;
   - Rodar o comando que está no arquivo ./database/schema.sql pelo próprio MySQL,
3. Crie o seu `.env` a partir do modelo e preencha os valores:
   ```bash
   cp .env.example .env
   ```
   (no CMD do Windows: `copy .env.example .env`)
4. Inicie a API:
   ```bash
   npm run dev
   ```
5. Teste em `http://localhost:3000/api/health`.