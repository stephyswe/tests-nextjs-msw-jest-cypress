This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Devlog

## 2023-06-30

### MSW
Update MSW files & package
npx msw init ./public --save


### Jest, Cypress & App MSW enable/disable

#### App MSW
- [x] Enable MSW in dev mode

if (true) {
  require("../mocks/");
}

#### Jest - version "^27.3.1
- [x] Enable MSW in test mode
// jest.setup.js
if (process.env.JEST_WORKER_ID !== undefined) {
  const { server } = require("./src/mocks/server");
  server.listen();
}

// jest.config.js
```js
...
const customJestConfig = {
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js", "..."],
};
```

#### Cypress - version ^9.1.0
- [x] Enable MSW in test mode
package.json
```
"cypress:open": "CYPRESS_TEST_RUNNER=true npx cypress open",
"cypress:run": "CYPRESS_TEST_RUNNER=true npx cypress run"
```

cypress/tsconfig.json
```json
{
  "compilerOptions": {
    "types": ["node", "..."]
...
```

cypress/support/commands.ts
```js
if (Cypress.env("TEST_RUNNER")) {
  require("../../src/mocks");
}
```

### Cypress Update - version ^12.16.0

#### Install & Migrate
npm install cypress@latest --save-dev
npx cypress open

"""
Inside Cypress: migrate with automatic code changes
"""

#### MSW Fails. Fix MSW steps.
npm install cypress-msw-interceptor msw --save-dev --force

cypress/support/e2e.ts
import 'cypress-msw-interceptor'
import './commands'


