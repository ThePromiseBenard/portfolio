# Repository Guidelines

## Project Structure & Module Organization

This repository is currently design- and planning-first. Treat these documents as the
source hierarchy:

- `DESIGN.md`: normative visual tokens, components, motion, and accessibility rules.
- `docs/superpowers/specs/`: approved product requirements.
- `docs/superpowers/plans/`: Paper design and implementation plans.

The approved foundation plan will introduce `src/app/` for routes, `src/components/`
for shared UI, `src/features/` for content and metadata logic, `src/styles/` for CSS
tokens, `content/` for typed MDX, and `tests/e2e/` for browser coverage. Do not begin
application implementation until the Paper handoff records Gate D5 approval.

## Build, Test, and Development Commands

Currently available:

- `npx @google/design.md lint DESIGN.md --format text` validates design tokens and
  references.
- `git diff --check` detects whitespace errors before committing.

After `package.json` is created by the foundation plan:

- `pnpm dev` runs the local Next.js server.
- `pnpm lint`, `pnpm typecheck`, and `pnpm test` run static and unit checks.
- `pnpm build` verifies the production build.
- `pnpm test:e2e` runs Playwright and accessibility journeys.
- `pnpm verify` runs the complete quality gate.

## Coding Style & Naming Conventions

Use strict TypeScript, React Server Components by default, two-space indentation,
double quotes, and trailing commas. Prettier and ESLint are authoritative once
configured. Use kebab-case for directories and non-component filenames, PascalCase
for React components, and camelCase for functions and variables. Keep client
components narrowly scoped. Reuse `DESIGN.md` tokens; do not introduce unexplained
colours, spacing, radii, fonts, or motion values.

## Testing Guidelines

Use Vitest and Testing Library for utilities and components; name tests
`*.test.ts(x)`. Use Playwright with Axe for routes and interaction journeys; name
files `*.spec.ts`. No numeric coverage threshold is defined, but every behaviour
change needs focused coverage. Validate keyboard, mobile, reduced-motion, and error
states for affected UI.

## Commit & Pull Request Guidelines

Use Conventional Commits: `type(scope): imperative subject`, for example
`feat(navigation): add active scene indicator`. Keep commits scoped and never bypass
hooks. Pull requests must explain the change, link relevant issues or plans, list
verification performed, and include desktop/mobile screenshots for visual work.
Call out `DESIGN.md` or Paper deviations explicitly.

## Security & Content Safety

Never commit credentials, private endpoints, customer data, or confidential system
topology. Use anonymised names and defensible ranges in public case studies. Keep local
configuration in ignored `.env.local` files.
