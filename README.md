<div align="center">
  <img src="./public/images/schema_guard_logo.svg" alt="Schema Guard logo" width="150" height="150" />
  <h1>🛡️Schema Guard</h1>
</div>
<p align="center">
 Schema Guard is an AI-powered database schema intelligence platform. It is designed to detect breaking database schema changes and provide warnings, analysis, recommendations, and feedback to support safer schema updates.
</p>

## Features

- Detect potentially breaking database schema changes.
- Surface warnings and analysis to help assess schema changes.
- Provide recommendations and feedback for safer database updates.
- Provides historical data of migrations and revisions and previous analysis

## Tech Stack

### Web client

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

### API Server

- Python and FastAPI
- SQLAlchemy
- PostgreSQL
- Redis
- Docker
- OpenAI API

## Getting Started

### Setup

Setup your env variables environment and fill out the required variables before running the app

```bash
cp .env.example .env
```

Install dependencies and start the development server from the web client directory:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
bun run build
bun run start
```

<br />
<div align="center">
  <hr />
  <p>
    Made with ❤️ by Asshley Gozar
  </p>
</div>