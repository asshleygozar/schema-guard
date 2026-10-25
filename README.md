<h1 align="center">
  <img src="./public/images/schema_guard_logo.png" alt="Schema Guard logo" width="72" height="72" align="center" />
  Schema Guard
</h1>

## Overview

Schema Guard is an AI-powered database schema intelligence platform. It is designed to detect breaking database schema changes and provide warnings, analysis, recommendations, and feedback to support safer schema updates.

## Features

- Detect potentially breaking database schema changes.
- Surface warnings and analysis to help assess schema changes.
- Provide recommendations and feedback for safer database updates.

## Tech Stack

### Web client

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

### Platform

- Python and FastAPI
- SQLAlchemy
- PostgreSQL
- Redis
- Docker
- OpenAI API

## Getting Started

### Setup

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

## Notes

- The web client and API are separate applications; run the API and its required services for connected functionality.
- Configure the API environment using its `.env.example` before starting the backend.
- The logo is stored at `public/images/schema_guard_logo.png`.
