# Project Agent Instructions

## Project Overview

This project is a Next.js application built with TypeScript, Tailwind CSS v4, shadcn/ui, and Lucide React.

The goal is to maintain a consistent, accessible, performant, and maintainable application while following the existing codebase conventions.

These instructions apply to AI coding agents working in this repository.

## 1. General Engineering Principles

- Inspect relevant existing code before implementing a solution.
- Follow established project patterns, naming conventions, and architecture.
- Prefer simple, readable, maintainable solutions over unnecessary abstractions.
- Avoid introducing new dependencies unless they provide a clear benefit.
- Do not rewrite unrelated code or perform unsolicited refactoring.
- Keep changes focused on the requested task.
- Do not assume that a library API exists; verify against its installed version or relevant documentation.
- Prefer existing utilities, hooks, and components before creating alternatives.

## 2. Next.js and React

- Follow the documentation matching the installed Next.js version.
- Use the existing routing architecture and conventions.
- If using the App Router, prefer Server Components by default.
- Add `"use client"` only when client-side interactivity or browser-specific functionality requires it.
- Keep client component boundaries as small as practical.
- Prefer server-side data access where appropriate.
- Follow the installed framework's conventions for data fetching, caching, rendering, and mutations.
- Use Next.js navigation, image, font, and metadata APIs where appropriate.
- Do not introduce deprecated APIs or outdated patterns.

## 3. TypeScript Standards

- Use TypeScript for application code.
- Prefer precise types and interfaces where they improve clarity.
- Avoid `any`; use `unknown` when the type is genuinely uncertain, followed by appropriate narrowing.
- Avoid unnecessary type assertions.
- Use existing shared types and schemas when available.
- Handle nullable and optional values explicitly.
- Keep functions focused and use descriptive names.
- Do not silence TypeScript or ESLint errors merely to make checks pass.

## 4. UI and Design System

### Required Technologies

- Tailwind CSS v4
- shadcn/ui (installed version)
- Lucide React (installed version)

### Styling Rules

- Treat `globals.css` as the source of truth for theme colors, typography, and design tokens.
- Inspect `components.json` to understand the installed shadcn/ui configuration.
- Reuse existing UI patterns before introducing new ones.
- Prefer shadcn/ui components for standard interface elements.
- Use Tailwind CSS utilities for styling and layout.
- Use Lucide React for icons.
- Prefer semantic theme classes such as `bg-background`, `text-foreground`, `bg-primary`, and `text-muted-foreground`.
- Avoid arbitrary color values and hardcoded design tokens when an existing token is suitable.
- Maintain consistent spacing, typography, border radii, shadows, and interaction states.
- Support the application's existing light and dark theme behavior.
- Do not introduce another UI library or icon system without an explicit requirement.

### Component Rules

- Check whether a suitable shadcn/ui or project component already exists.
- Compose existing primitives before building new reusable components.
- Build custom components when existing primitives cannot adequately represent the requested functionality.
- Keep component interfaces small and well typed.
- Use semantic HTML elements.
- Preserve keyboard accessibility, focus indicators, appropriate labels, and ARIA semantics.
- Avoid adding unnecessary animations or visual complexity.
- Ensure layouts are responsive across mobile, tablet, and desktop viewports.

## 5. Project Architecture

Respect the current repository structure.

When corresponding directories exist, follow these responsibilities:

- `app/`: Routes, layouts, pages, loading states, and route-level boundaries.
- `components/ui/`: Reusable shadcn/ui primitives.
- `components/`: Shared application components.
- `lib/`: Shared utilities, integrations, and framework-independent logic.
- `hooks/`: Reusable React hooks.
- `types/`: Shared TypeScript types, when applicable.

Architecture guidelines:

- Organize feature-specific implementations near their owning features when appropriate.
- Separate business logic from presentation when this improves maintainability.
- Avoid creating abstractions for single-use implementations without a clear benefit.
- Avoid circular dependencies.
- Follow existing import aliases.
- Do not reorganize directories without an explicit reason.

## 6. Data Handling and Security

- Treat client-provided input and external API responses as untrusted.
- Validate data at appropriate application boundaries.
- Keep secrets, credentials, and privileged operations on the server.
- Never expose private environment variables to client-side code.
- Avoid logging sensitive information.
- Preserve existing authentication and authorization boundaries.
- Handle loading, empty, error, and success states appropriately.
- Do not introduce mock data into production flows unless explicitly requested.

## Code Style

- Ensure conciseness of code generation with proper comment regarding its purpose and why it was implemented
- Use lowerCase for variables, parameters, functions, methods, properties and module aliases.
- Use UpperCamelCase for classes, interfaces, types, enums, decorators, and type parameters.
- Use CONSTANT_CASE for global, immutable constants and enum values.
- Indentation: Use 2 spaces for block indentation (no tabs).
- File Encoding: Every file must be encoded in UTF-8.
- Whitespace: Use the ASCII horizontal space character (0x20) as the only valid whitespace character.
- Semicolons: Explicit semicolons are required at the end of every statement.
- Quotes: Prefer single quotes (') over double quotes unless escaping a string.
- Relative Imports: Use relative paths (./foo) for internal workspace files rather than absolute paths.
- Named Exports: Ban default exports in favor of explicit named exports to ensure uniform module structures across codebases.
- Type Imports: Separate and explicitly declare import type for type-only imports so compiler systems can safely erase them during tree-shaking.
- Object Shapes: Prefer interface over type aliases for standard object definitions. Use type primarily for unions and aliases.
- Avoid any: Do not use the any escape hatch. Opt for unknown and narrow down the type safely using custom type guards.
- Explicit Returns: Annotate return types explicitly on all public APIs; do not rely on implicit compiler inference for exported functions.
- Access Modifiers: Properties and methods default to public, so writing the public keyword explicitly is discouraged as redundant.

## 7. Performance

- Minimize unnecessary client-side JavaScript.
- Avoid redundant network requests.
- Prevent unnecessary rerenders when there is a demonstrated performance concern.
- Use appropriate image optimization and loading strategies.
- Avoid adding heavyweight dependencies for trivial functionality.
- Apply caching or memoization when supported by actual requirements or measured benefit.
- Preserve existing streaming and Suspense boundaries where applicable.

## 8. Agent Workflow

For every implementation task:

1. **Inspect:** Read the relevant files, configuration, and existing implementation.
2. **Verify:** Consult installed framework or library documentation when necessary.
3. **Plan:** Identify the smallest coherent set of changes. For complex tasks, briefly communicate the implementation approach.
4. **Implement:** Follow established patterns and keep changes scoped.
5. **Validate:** Run relevant available checks and inspect their results.
6. **Report:** Summarize changes, verification performed, and any remaining limitations.

Additional behavior:

- Do not modify unrelated files.
- Do not invent APIs, packages, or project conventions.
- Do not install dependencies without a justified need.
- Do not overwrite user changes or perform destructive operations without authorization.
- Do not automatically commit or push changes unless explicitly requested.
- Do not claim tests passed unless they were executed successfully.
- When a requirement is ambiguous, make a reasonable, reversible assumption if the risk is low; otherwise ask for clarification.
- Explain important architectural tradeoffs when they materially affect maintainability or functionality.

## 9. Verification

After implementing changes, use the project's available scripts and tooling as appropriate.

- Run TypeScript checks when relevant.
- Run lint checks when relevant.
- Run applicable tests, if configured.
- Verify affected routes and UI behavior when runtime tooling is available.
- Check responsive behavior and interaction states for UI changes.
- Avoid changing project configuration solely to bypass failing checks.
- Report failures, blocked checks, and untested behavior accurately.

## 10. Priority of Instructions

When implementing changes, follow this order:

1. The user's explicit task requirements.
2. Applicable safety, security, and repository constraints.
3. Current project architecture and established conventions.
4. Installed framework and library documentation.
5. General engineering best practices.

Do not interpret a general preference in this file as permission to ignore higher-priority instructions or verified framework requirements.

---

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
