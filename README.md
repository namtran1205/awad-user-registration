# IA03 — User Registration (monorepo)

Short instructions to install and run the backend and frontend locally.

## Layout
- Backend (Nest + Mongoose): `server/user-reg` — see [server package.json].  
- Frontend (React + Vite): `client/user-reg-client` — see [client package.json] and [main.tsx].

## Prerequisites
- Node.js (>=18 recommended)
- npm (or yarn)
- A running MongoDB instance (local or cloud)

## Environment variables

Backend (`server/user-reg`):
- MONGODB_URI — MongoDB connection string (required)
- PORT — optional (default 3000)
- BCRYPT_SALT_ROUNDS — optional (default 10)
- CORS_ORGIN — optional, comma-separated allowed origins

Frontend (`client/user-reg-client`):
- VITE_API_URL — base URL for backend (see `client/.env`)

## Clone the repository:

```powershell
git clone https://github.com/namtran1205/awad-user-registration.git
```

## Install

Open PowerShell and run:

```powershell
cd .\server\user-reg
npm install

cd .\client\user-reg-client
npm install
```

(Or run both installs in parallel using separate terminals.)

## Run (development)

Start backend (Nest):
```powershell
cd .\server\user-reg
# ensure MONGODB_URI is set in environment
npm run start:dev
```

Start frontend (Vite):
```powershell
cd .\client\user-reg-client
npm run dev
```

Frontend expects the API base URL at `VITE_API_URL` (default in `client/.env` is `http://localhost:3000`).

## API (quick)
- Register: POST {baseURL}/user/register  
  Body: { "email": "...", "password": "..." }  
  Controller: [user.controller.ts](d:\HCMUS\1Web