# Job Tracker

A full-stack job application tracker built with React, Node.js, Express and PostgreSQL.

> Status: in development. The API server is in place; the database, auth, applications API and the React app are next.

## Tech stack

- **Client:** React, TypeScript, Vite
- **Server:** Node.js, Express 5, TypeScript, Zod
- **Database (planned):** PostgreSQL with Prisma
- **Tooling:** npm workspaces, ESLint, Prettier, GitHub Actions CI

## Project structure

```
job-tracker/
├── client/   # React app
├── server/   # Express API
└── .github/  # CI workflow and PR template
```

## Getting started

```bash
git clone https://github.com/fahim-sarker/job-tracker.git
cd job-tracker
npm install
cp server/.env.example server/.env
```

Start the API (http://localhost:4000/api/health) and the client (http://localhost:5173) in two terminals:

```bash
npm run dev:server
npm run dev:client
```

## Scripts

| Command                | What it does                  |
| ---------------------- | ----------------------------- |
| `npm run dev:server`   | Start the API in watch mode   |
| `npm run dev:client`   | Start the Vite dev server     |
| `npm run lint`         | Lint all workspaces           |
| `npm run build`        | Build all workspaces          |
| `npm run format`       | Format the code with Prettier |
| `npm run format:check` | Check formatting (used in CI) |

## Development workflow

Every change goes through an issue, a feature branch and a pull request. `main` is protected: a pull request and a passing CI run (lint, format check, build) are required to merge. Commits follow [Conventional Commits](https://www.conventionalcommits.org/).

## Roadmap

- [x] CI pipeline and protected `main`
- [x] Express and TypeScript server
- [ ] PostgreSQL schema and migrations
- [ ] Auth API (register, login, JWT)
- [ ] Applications API with filters and pagination
- [ ] API tests
- [ ] React app: auth, Kanban board, table, dashboard charts
- [ ] Deployment

## License

[MIT](LICENSE)
