This is a DB AI Chat project to talk with your database in the chat which is serverless and only require one node server as we will be using models available on groq.

## Getting Started
Put below envs in .env file

```bash
NEXT_PUBLIC_COPILOTKIT_BACKEND_URL=http://localhost:3000/api/copilotkit
NEXT_PUBLIC_GROQ_CLOUD_API_KEY=<GROQ CLOUD API KEY>
NEXT_PUBLIC_RESTDB_API_KEY=<RESTDB_API_KEY>\n
NEXT_PUBLIC_RESTDB_BASE_URL=https://<db_specific_pre_domain>.restdb.io/rest/<table-name>\n
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
