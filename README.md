# Backend - Projeto de E-commerce para Processo Trainee da CJR

Este repositório hospeda a **API Core** do projeto Stock.io, um E-commerce Multi-Segmento, desenvolvido pelo grupo **Nereidas 💜** durante o Processo Trainee da CJR. A API é responsável pela lógica de negócios, persistência de dados e autenticação para o Frontend.

## Tecnologias
- **Node.js**
- **NestJS**
- **Prisma (ORM)**
- **PostgreSQL**

## Requisitos
- **Node:** Recomendado versão >= 16
- **npm:** Gerenciador de pacotes
- **Git:** Controle de versão.
- **PostgreSQL:** Rodando localmente

## Variáveis de ambiente
Crie um arquivo chamado **`.env`** na raiz do projeto, usando o `.env.example` como modelo.

| Variável | Descrição | Exemplo Padrão |
| :--- | :--- | :--- |
| `PORT` | Porta que o servidor NestJS irá rodar. | `3000` |
| `DATABASE_URL` | String de conexão completa com o PostgreSQL. | `postgresql://user:pass@localhost:5432/database?schema=public` |

## Setup (local)
Execute os seguintes comandos em sequência no terminal:

| Passo | Comando | Descrição |
| :--- | :--- | :--- |
| **1.** Instalar dependências | `npm install` | Baixa todos os pacotes definidos no `package.json`. |
| **2.** Criar Schema DB | `npx prisma migrate dev` | Aplica as migrações (modelagem) no banco de dados. |
| **3.** Iniciar a Aplicação | `npm run start:dev` | Roda o servidor NestJS em modo observador (watch mode). |

O servidor estará acessível em `http://localhost:3000`.