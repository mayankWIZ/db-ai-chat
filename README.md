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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
