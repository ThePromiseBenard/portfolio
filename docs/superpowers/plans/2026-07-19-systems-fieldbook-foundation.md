# Systems Fieldbook Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a runnable, accessible Next.js foundation with typed local content, base collection routes, metadata, feeds, and automated quality gates for the Systems Fieldbook portfolio.

**Architecture:** The App Router statically renders public content from validated MDX files. Server Components own content and metadata; client-side code is deferred to the later cinematic-experience plan. The foundation exposes focused content, shell, metadata, and styling modules that later plans can extend without rewriting infrastructure.

**Tech Stack:** pnpm, current stable Next.js App Router, React, TypeScript strict mode, CSS Modules/global tokens, Zod, gray-matter, Vitest, Testing Library, Playwright, Axe, ESLint, Prettier

---

## Scope boundary and plan sequence

The approved PRD contains several independently testable systems and should not be executed as one oversized change. This is Plan 1 of four:

1. **Foundation — this plan:** application shell, design tokens, content validation, collection routes, metadata, feeds, accessibility smoke tests, and CI.
2. **Core cinematic experience:** full-viewport stage, scene state, navigation, workspaces, responsive composition, About, Experience, and Connect.
3. **Case studies and publishing:** detailed system reports, MDX rendering, architecture diagrams, Engineering Notes, Life Notes, and related-content navigation.
4. **Release hardening:** final content integration, imagery, SEO validation, visual regression, performance budgets, confidentiality review, and deployment.

This plan intentionally ships honest empty states instead of invented personal content. Plans 2–4 require the owner photography, biography, experience, systems, notes, résumé, and contact destinations listed in the approved PRD.

## File structure locked by this plan

```text
.
├── .github/workflows/ci.yml
├── content/README.md
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── connect/page.tsx
│   │   ├── engineering-notes/
│   │   │   ├── page.tsx
│   │   │   └── rss.xml/route.ts
│   │   ├── experience/page.tsx
│   │   ├── life-notes/
│   │   │   ├── page.tsx
│   │   │   └── rss.xml/route.ts
│   │   ├── systems/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── route-holding-page/route-holding-page.tsx
│   │   └── site-shell/
│   │       ├── site-shell.test.tsx
│   │       └── site-shell.tsx
│   ├── features/
│   │   ├── content/
│   │   │   ├── __fixtures__/
│   │   │   ├── collection-index.test.tsx
│   │   │   ├── collection-index.tsx
│   │   │   ├── content-registry.test.ts
│   │   │   ├── content-registry.ts
│   │   │   ├── schemas.test.ts
│   │   │   └── schemas.ts
│   │   └── metadata/
│   │       ├── feed.test.ts
│   │       ├── feed.ts
│   │       ├── metadata.test.ts
│   │       ├── metadata.ts
│   │       └── site-config.ts
│   ├── styles/
│   │   ├── base.css
│   │   └── tokens.css
│   └── test/setup.ts
├── tests/e2e/
│   ├── accessibility.spec.ts
│   ├── foundation.spec.ts
│   └── routes.spec.ts
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── playwright.config.ts
├── prettier.config.mjs
├── tsconfig.json
└── vitest.config.ts
```

## Task 1: Scaffold the application and framework configuration

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next-env.d.ts`
- Create: `next.config.ts`
- Create: `eslint.config.mjs`
- Create: `prettier.config.mjs`
- Create: `.gitignore`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

- [ ] **Step 1: Create the package manifest**

```json
{
  "name": "systems-fieldbook",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "verify": "pnpm lint && pnpm format:check && pnpm typecheck && pnpm test && NEXT_PUBLIC_SITE_URL=https://systems-fieldbook.test pnpm build && pnpm test:e2e"
  }
}
```

- [ ] **Step 2: Install runtime dependencies**

Run:

```bash
pnpm add next react react-dom gray-matter reading-time zod @fontsource-variable/bricolage-grotesque @fontsource-variable/instrument-sans @fontsource/ibm-plex-mono
```

Expected: dependencies are recorded in `package.json` and an exact `pnpm-lock.yaml` is created.

- [ ] **Step 3: Install development and test dependencies**

Run:

```bash
pnpm add -D typescript @types/node @types/react @types/react-dom eslint eslint-config-next prettier vitest vite @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @playwright/test @axe-core/playwright
```

Expected: the command exits successfully and the lockfile contains every package.

- [ ] **Step 4: Add strict TypeScript and Next.js configuration**

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": [
    "next-env.d.ts",
    ".next/types/**/*.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": ["node_modules"]
}
```

Create `next-env.d.ts`:

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// This file is generated by Next.js and must not be edited manually.
```

Create `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 5: Add linting, formatting, and ignore configuration**

Create `eslint.config.mjs`:

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    ".next/**",
    "coverage/**",
    "out/**",
    "playwright-report/**",
    "test-results/**",
    "next-env.d.ts",
  ]),
]);
```

Create `prettier.config.mjs`:

```js
/** @type {import("prettier").Config} */
const config = {
  proseWrap: "always",
  trailingComma: "all",
};

export default config;
```

Create `.gitignore`:

```gitignore
node_modules/
.next/
out/
coverage/
playwright-report/
test-results/
.env
.env.local
.DS_Store
```

- [ ] **Step 6: Create the smallest runnable App Router shell**

Create `src/app/layout.tsx`:

```tsx
import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Create `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <main>
      <h1>Systems Fieldbook</h1>
      <p>Web and distributed systems, documented with clarity.</p>
    </main>
  );
}
```

Create `src/app/globals.css`:

```css
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  background: #0b0d10;
  color: #e8e2d3;
  font-family: system-ui, sans-serif;
}
```

- [ ] **Step 7: Verify the scaffold**

Run:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Expected: all three commands exit successfully and Next.js reports a statically generated `/` route.

- [ ] **Step 8: Commit the scaffold**

```bash
git add package.json pnpm-lock.yaml tsconfig.json next-env.d.ts next.config.ts eslint.config.mjs prettier.config.mjs .gitignore src/app
git commit -m "chore(app): scaffold next application"
```

## Task 2: Add the accessible site shell and test harness

**Files:**
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `playwright.config.ts`
- Create: `src/components/site-shell/site-shell.test.tsx`
- Create: `src/components/site-shell/site-shell.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Create: `tests/e2e/foundation.spec.ts`

- [ ] **Step 1: Configure Vitest and Testing Library**

Create `vitest.config.ts`:

```ts
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(currentDirectory, "src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
```

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 2: Write the failing shell test**

Create `src/components/site-shell/site-shell.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteShell } from "./site-shell";

describe("SiteShell", () => {
  it("provides a skip link, primary navigation, and main landmark", () => {
    render(
      <SiteShell>
        <h1>Systems Fieldbook</h1>
      </SiteShell>,
    );

    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#main-content",
    );
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeVisible();
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
  });
});
```

- [ ] **Step 3: Run the test and verify failure**

Run:

```bash
pnpm test -- src/components/site-shell/site-shell.test.tsx
```

Expected: FAIL because `./site-shell` does not exist.

- [ ] **Step 4: Implement the site shell**

Create `src/components/site-shell/site-shell.tsx`:

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/systems", label: "Systems" },
  { href: "/experience", label: "Experience" },
  { href: "/engineering-notes", label: "Engineering Notes" },
  { href: "/life-notes", label: "Life Notes" },
  { href: "/about", label: "About" },
  { href: "/connect", label: "Connect" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="site-mark" href="/" aria-label="Systems Fieldbook home">
          SF
        </Link>
        <nav aria-label="Primary">
          <ul className="site-navigation">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
```

Update `src/app/layout.tsx`:

```tsx
import { SiteShell } from "@/components/site-shell/site-shell";
import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
```

Update `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <section aria-labelledby="home-title">
      <p>Field note 001</p>
      <h1 id="home-title">Systems Fieldbook</h1>
      <p>Web and distributed systems, documented with clarity.</p>
    </section>
  );
}
```

- [ ] **Step 5: Run the unit test and verify success**

Run:

```bash
pnpm test -- src/components/site-shell/site-shell.test.tsx
```

Expected: PASS with one test.

- [ ] **Step 6: Configure Playwright**

Create `playwright.config.ts`:

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
  },
  webServer: {
    command: "pnpm dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-chromium", use: { ...devices["Pixel 7"] } },
  ],
});
```

Create `tests/e2e/foundation.spec.ts`:

```ts
import { expect, test } from "@playwright/test";

test("home exposes the foundation navigation and positioning", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Systems Fieldbook",
  );
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Connect" })).toBeVisible();
});
```

- [ ] **Step 7: Install Chromium and run the smoke journey**

Run:

```bash
pnpm exec playwright install chromium
pnpm test:e2e -- tests/e2e/foundation.spec.ts --project=chromium
```

Expected: PASS on the desktop Chromium project.

- [ ] **Step 8: Commit the shell and test harness**

```bash
git add vitest.config.ts playwright.config.ts src/test src/components src/app tests/e2e/foundation.spec.ts
git commit -m "test(app): add accessible shell coverage"
```

## Task 3: Establish design tokens and typography

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/base.css`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `tests/e2e/foundation.spec.ts`

- [ ] **Step 1: Add failing token and typography assertions**

Append to `tests/e2e/foundation.spec.ts`:

```ts
test("home applies the approved visual foundation", async ({ page }) => {
  await page.goto("/");

  const tokens = await page.locator("html").evaluate((element) => {
    const styles = getComputedStyle(element);
    return {
      graphite: styles.getPropertyValue("--colour-graphite").trim(),
      paper: styles.getPropertyValue("--colour-paper").trim(),
      signal: styles.getPropertyValue("--colour-signal").trim(),
    };
  });

  expect(tokens).toEqual({
    graphite: "#0b0d10",
    paper: "#e8e2d3",
    signal: "#79d8e6",
  });

  await expect(page.getByRole("heading", { level: 1 })).toHaveCSS(
    "font-family",
    /Bricolage Grotesque/,
  );
});
```

- [ ] **Step 2: Run the visual-foundation test and verify failure**

Run:

```bash
pnpm test:e2e -- tests/e2e/foundation.spec.ts --project=chromium
```

Expected: FAIL because the custom properties and approved font are absent.

- [ ] **Step 3: Create the design tokens**

Create `src/styles/tokens.css`:

```css
:root {
  --colour-graphite: #0b0d10;
  --colour-paper: #e8e2d3;
  --colour-paper-muted: rgba(232, 226, 211, 0.68);
  --colour-signal: #79d8e6;
  --colour-incident: #ef8354;
  --colour-border: rgba(232, 226, 211, 0.14);
  --font-display: "Bricolage Grotesque Variable";
  --font-body: "Instrument Sans Variable";
  --font-mono: "IBM Plex Mono";
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --radius-pill: 999px;
  --motion-fast: 180ms;
  --motion-standard: 480ms;
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
}
```

- [ ] **Step 4: Configure locally bundled font packages**

Replace `src/app/layout.tsx` with:

```tsx
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import { SiteShell } from "@/components/site-shell/site-shell";
import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
```

Fontsource packages ship the font files with the application, so production rendering does not depend on Google Fonts or Fontshare.

- [ ] **Step 5: Add base styles**

Create `src/styles/base.css`:

```css
* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background: var(--colour-graphite);
  color: var(--colour-paper);
  color-scheme: dark;
}

body {
  min-height: 100%;
  margin: 0;
  background: var(--colour-graphite);
  color: var(--colour-paper);
  font-family: var(--font-body), sans-serif;
  line-height: 1.55;
}

a {
  color: inherit;
}

:focus-visible {
  outline: 2px solid var(--colour-signal);
  outline-offset: 4px;
}

.skip-link {
  position: fixed;
  z-index: 100;
  top: var(--space-4);
  left: var(--space-4);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-pill);
  background: var(--colour-paper);
  color: var(--colour-graphite);
  transform: translateY(-200%);
  transition: transform var(--motion-fast) var(--ease-out-expo);
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-4);
}

.site-mark {
  font-family: var(--font-display), sans-serif;
  font-weight: 700;
  text-decoration: none;
}

.site-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-navigation a {
  color: var(--colour-paper-muted);
  text-decoration: none;
}

main {
  padding: clamp(1rem, 4vw, 4rem);
}

h1,
h2,
h3 {
  font-family: var(--font-display), sans-serif;
  line-height: 0.95;
  text-wrap: balance;
}

h1 {
  font-size: clamp(3.5rem, 12vw, 10rem);
  letter-spacing: -0.055em;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Replace `src/app/globals.css` with:

```css
@import "../styles/tokens.css";
@import "../styles/base.css";
```

- [ ] **Step 6: Run visual and static checks**

Run:

```bash
pnpm test:e2e -- tests/e2e/foundation.spec.ts --project=chromium
pnpm typecheck
pnpm lint
```

Expected: all commands PASS.

- [ ] **Step 7: Commit the visual foundation**

```bash
git add src/styles src/app tests/e2e/foundation.spec.ts
git commit -m "feat(styles): add fieldbook visual foundation"
```

## Task 4: Define and validate typed content schemas

**Files:**
- Create: `src/features/content/schemas.test.ts`
- Create: `src/features/content/schemas.ts`

- [ ] **Step 1: Write failing schema tests**

Create `src/features/content/schemas.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { noteSchema, systemCaseStudySchema } from "./schemas";

describe("systemCaseStudySchema", () => {
  const validSystem = {
    slug: "queue-relay",
    title: "Queue Relay",
    summary: "A durable event relay that isolates producers from downstream failure.",
    role: "Systems Engineer",
    period: "2025",
    status: "operational",
    scale: [{ label: "Events per day", value: "2M" }],
    technologies: ["TypeScript", "PostgreSQL", "NATS"],
    featured: true,
    order: 1,
    coverImage: { src: "/images/systems/queue-relay.jpg", alt: "Queue relay topology" },
    socialImage: { src: "/images/social/queue-relay.jpg", alt: "Queue Relay" },
    relatedNotes: ["idempotent-consumers"],
    visibility: "public",
  };

  it("accepts a complete system record", () => {
    expect(systemCaseStudySchema.parse(validSystem)).toEqual(validSystem);
  });

  it("rejects an unsafe slug", () => {
    expect(() =>
      systemCaseStudySchema.parse({ ...validSystem, slug: "Queue Relay" }),
    ).toThrow();
  });
});

describe("noteSchema", () => {
  it("accepts engineering-note topics", () => {
    const note = noteSchema.parse({
      collection: "engineering",
      slug: "idempotent-consumers",
      title: "Idempotent Consumers",
      summary: "A practical model for safely retrying distributed event handlers.",
      publishedAt: "2026-07-19",
      readingTime: "6 min read",
      topics: ["Distributed systems", "Reliability"],
      socialImage: { src: "/images/social/idempotent-consumers.jpg", alt: "Idempotent Consumers" },
      relatedContent: ["queue-relay"],
      draft: false,
    });

    expect(note.collection).toBe("engineering");
  });

  it("requires a theme for a life note", () => {
    expect(() =>
      noteSchema.parse({
        collection: "life",
        slug: "learning-in-seasons",
        title: "Learning in Seasons",
        summary: "A reflection on choosing depth without treating every season alike.",
        publishedAt: "2026-07-19",
        readingTime: "4 min read",
        socialImage: { src: "/images/social/learning-in-seasons.jpg", alt: "Learning in Seasons" },
        relatedContent: [],
        draft: false,
      }),
    ).toThrow();
  });
});
```

- [ ] **Step 2: Run schema tests and verify failure**

Run:

```bash
pnpm test -- src/features/content/schemas.test.ts
```

Expected: FAIL because `./schemas` does not exist.

- [ ] **Step 3: Implement the schemas**

Create `src/features/content/schemas.ts`:

```ts
import { z } from "zod";

const slugSchema = z
  .string()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase kebab-case slug");

const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Use an ISO date in YYYY-MM-DD format");

const imageSchema = z.object({
  src: z.string().startsWith("/"),
  alt: z.string().min(1),
});

export const systemCaseStudySchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  summary: z.string().min(30),
  role: z.string().min(1),
  period: z.string().min(1),
  status: z.string().min(1),
  scale: z.array(z.object({ label: z.string().min(1), value: z.string().min(1) })).min(1),
  technologies: z.array(z.string().min(1)).min(1),
  featured: z.boolean(),
  order: z.number().int().nonnegative(),
  coverImage: imageSchema,
  socialImage: imageSchema,
  relatedNotes: z.array(slugSchema),
  visibility: z.enum(["public", "draft"]),
});

const noteCommonSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1),
  summary: z.string().min(30),
  publishedAt: dateSchema,
  updatedAt: dateSchema.optional(),
  readingTime: z.string().min(1),
  socialImage: imageSchema,
  relatedContent: z.array(slugSchema),
  draft: z.boolean(),
});

export const engineeringNoteSchema = noteCommonSchema.extend({
  collection: z.literal("engineering"),
  topics: z.array(z.string().min(1)).min(1),
});

export const lifeNoteSchema = noteCommonSchema.extend({
  collection: z.literal("life"),
  theme: z.string().min(1),
});

export const noteSchema = z.discriminatedUnion("collection", [
  engineeringNoteSchema,
  lifeNoteSchema,
]);

export type SystemCaseStudy = z.infer<typeof systemCaseStudySchema>;
export type Note = z.infer<typeof noteSchema>;
export type EngineeringNote = z.infer<typeof engineeringNoteSchema>;
export type LifeNote = z.infer<typeof lifeNoteSchema>;
```

- [ ] **Step 4: Run schema tests and verify success**

Run:

```bash
pnpm test -- src/features/content/schemas.test.ts
```

Expected: PASS with four tests.

- [ ] **Step 5: Commit the content domain**

```bash
git add src/features/content/schemas.ts src/features/content/schemas.test.ts
git commit -m "feat(content): define fieldbook content schemas"
```

## Task 5: Build the local content registry

**Files:**
- Create: `src/features/content/content-registry.test.ts`
- Create: `src/features/content/content-registry.ts`
- Create: `src/features/content/__fixtures__/valid/systems/queue-relay.mdx`
- Create: `src/features/content/__fixtures__/valid/engineering-notes/idempotent-consumers.mdx`
- Create: `src/features/content/__fixtures__/valid/life-notes/learning-in-seasons.mdx`
- Create: `src/features/content/__fixtures__/invalid/systems/broken-system.mdx`
- Create: `content/README.md`

- [ ] **Step 1: Add deterministic MDX fixtures**

Create `src/features/content/__fixtures__/valid/systems/queue-relay.mdx`:

```mdx
---
slug: queue-relay
title: Queue Relay
summary: A durable event relay that isolates producers from downstream failure.
role: Systems Engineer
period: "2025"
status: operational
scale:
  - label: Events per day
    value: 2M
technologies:
  - TypeScript
  - PostgreSQL
  - NATS
featured: true
order: 1
coverImage:
  src: /images/systems/queue-relay.jpg
  alt: Queue relay topology
socialImage:
  src: /images/social/queue-relay.jpg
  alt: Queue Relay
relatedNotes:
  - idempotent-consumers
visibility: public
---

The relay accepts events, records delivery intent, and isolates retries from producers.
```

Create `src/features/content/__fixtures__/valid/engineering-notes/idempotent-consumers.mdx`:

```mdx
---
collection: engineering
slug: idempotent-consumers
title: Idempotent Consumers
summary: A practical model for safely retrying distributed event handlers.
publishedAt: "2026-07-19"
readingTime: 6 min read
topics:
  - Distributed systems
  - Reliability
socialImage:
  src: /images/social/idempotent-consumers.jpg
  alt: Idempotent Consumers
relatedContent:
  - queue-relay
draft: false
---

Retries are only safe when repeated processing preserves the intended state.
```

Create `src/features/content/__fixtures__/valid/life-notes/learning-in-seasons.mdx`:

```mdx
---
collection: life
slug: learning-in-seasons
title: Learning in Seasons
summary: A reflection on choosing depth without treating every season alike.
publishedAt: "2026-07-18"
readingTime: 4 min read
theme: Growth
socialImage:
  src: /images/social/learning-in-seasons.jpg
  alt: Learning in Seasons
relatedContent: []
draft: false
---

Not every season needs the same pace, output, or definition of progress.
```

Create `src/features/content/__fixtures__/invalid/systems/broken-system.mdx`:

```mdx
---
slug: Broken System
title: Broken System
---

This fixture intentionally violates the system schema.
```

- [ ] **Step 2: Write failing registry tests**

Create `src/features/content/content-registry.test.ts`:

```ts
import path from "node:path";
import { describe, expect, it } from "vitest";
import { createContentRegistry } from "./content-registry";

const fixtures = path.join(process.cwd(), "src/features/content/__fixtures__");

describe("createContentRegistry", () => {
  it("loads and orders public systems", async () => {
    const registry = createContentRegistry(path.join(fixtures, "valid"));
    const systems = await registry.getSystems();

    expect(systems).toHaveLength(1);
    expect(systems[0]?.metadata.slug).toBe("queue-relay");
    expect(systems[0]?.body).toContain("isolates retries");
  });

  it("separates Engineering Notes from Life Notes", async () => {
    const registry = createContentRegistry(path.join(fixtures, "valid"));

    const engineering = await registry.getNotes("engineering");
    const life = await registry.getNotes("life");

    expect(engineering.map((document) => document.metadata.slug)).toEqual([
      "idempotent-consumers",
    ]);
    expect(life.map((document) => document.metadata.slug)).toEqual([
      "learning-in-seasons",
    ]);
  });

  it("returns empty collections when a content directory is absent", async () => {
    const registry = createContentRegistry(path.join(fixtures, "missing"));

    await expect(registry.getSystems()).resolves.toEqual([]);
    await expect(registry.getNotes("engineering")).resolves.toEqual([]);
  });

  it("reports the invalid source path", async () => {
    const registry = createContentRegistry(path.join(fixtures, "invalid"));

    await expect(registry.getSystems()).rejects.toThrow("broken-system.mdx");
  });
});
```

- [ ] **Step 3: Run registry tests and verify failure**

Run:

```bash
pnpm test -- src/features/content/content-registry.test.ts
```

Expected: FAIL because `./content-registry` does not exist.

- [ ] **Step 4: Implement the registry**

Create `src/features/content/content-registry.ts`:

```ts
import matter from "gray-matter";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { ZodType } from "zod";
import {
  type Note,
  noteSchema,
  type SystemCaseStudy,
  systemCaseStudySchema,
} from "./schemas";

export type ContentDocument<T> = {
  metadata: T;
  body: string;
  filePath: string;
};

async function listMdxFiles(directory: string): Promise<string[]> {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry) => path.join(directory, entry.name))
      .sort();
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function readDocuments<T>(
  directory: string,
  schema: ZodType<T>,
): Promise<ContentDocument<T>[]> {
  const files = await listMdxFiles(directory);
  const documents = await Promise.all(
    files.map(async (filePath) => {
      const source = await readFile(filePath, "utf8");
      const parsed = matter(source);
      const result = schema.safeParse(parsed.data);

      if (!result.success) {
        throw new Error(
          `Invalid content in ${filePath}: ${result.error.issues
            .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
            .join("; ")}`,
        );
      }

      return { metadata: result.data, body: parsed.content.trim(), filePath };
    }),
  );

  const seen = new Set<string>();
  for (const document of documents) {
    const slug = (document.metadata as { slug: string }).slug;
    if (seen.has(slug)) throw new Error(`Duplicate slug "${slug}" in ${directory}`);
    seen.add(slug);
  }

  return documents;
}

export function createContentRegistry(
  contentRoot = path.join(process.cwd(), "content"),
) {
  return {
    async getSystems({ includeDrafts = false } = {}) {
      const documents = await readDocuments<SystemCaseStudy>(
        path.join(contentRoot, "systems"),
        systemCaseStudySchema,
      );
      return documents
        .filter((document) => includeDrafts || document.metadata.visibility === "public")
        .sort((left, right) => left.metadata.order - right.metadata.order);
    },

    async getNotes(collection: "engineering" | "life", { includeDrafts = false } = {}) {
      const documents = await readDocuments<Note>(
        path.join(contentRoot, `${collection}-notes`),
        noteSchema,
      );
      return documents
        .map((document) => {
          if (document.metadata.collection !== collection) {
            throw new Error(
              `Expected ${collection} note in ${document.filePath}, received ${document.metadata.collection}`,
            );
          }
          return document;
        })
        .filter((document) => includeDrafts || !document.metadata.draft)
        .sort((left, right) =>
          right.metadata.publishedAt.localeCompare(left.metadata.publishedAt),
        );
    },
  };
}

export const contentRegistry = createContentRegistry();
```

- [ ] **Step 5: Document the production content boundary**

Create `content/README.md`:

```markdown
# Systems Fieldbook content

Production MDX belongs in three directories:

- `content/systems`
- `content/engineering-notes`
- `content/life-notes`

Do not copy the test fixtures into production. Every file must use the schemas in
`src/features/content/schemas.ts`. Draft notes and draft systems are excluded from public
indexes. The build must fail when published content is invalid.
```

- [ ] **Step 6: Run registry and schema tests**

Run:

```bash
pnpm test -- src/features/content
```

Expected: PASS with all schema and registry tests.

- [ ] **Step 7: Commit the content registry**

```bash
git add content src/features/content
git commit -m "feat(content): add validated local registry"
```

## Task 6: Add collection and profile route shells

**Files:**
- Create: `src/features/content/collection-index.test.tsx`
- Create: `src/features/content/collection-index.tsx`
- Create: `src/components/route-holding-page/route-holding-page.tsx`
- Create: `src/app/systems/page.tsx`
- Create: `src/app/engineering-notes/page.tsx`
- Create: `src/app/life-notes/page.tsx`
- Create: `src/app/experience/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/connect/page.tsx`
- Create: `tests/e2e/routes.spec.ts`

- [ ] **Step 1: Write failing collection-index tests**

Create `src/features/content/collection-index.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CollectionIndex } from "./collection-index";

describe("CollectionIndex", () => {
  it("renders an honest empty state", () => {
    render(
      <CollectionIndex
        description="Selected systems and the decisions behind them."
        emptyMessage="No public system reports are available yet."
        items={[]}
        title="Systems"
      />,
    );

    expect(screen.getByRole("heading", { level: 1, name: "Systems" })).toBeVisible();
    expect(screen.getByText("No public system reports are available yet.")).toBeVisible();
  });

  it("links published items", () => {
    render(
      <CollectionIndex
        description="Selected systems and the decisions behind them."
        emptyMessage="No public system reports are available yet."
        items={[
          {
            href: "/systems/queue-relay",
            meta: "Systems Engineer · 2025",
            summary: "A durable event relay that isolates producers from downstream failure.",
            title: "Queue Relay",
          },
        ]}
        title="Systems"
      />,
    );

    expect(screen.getByRole("link", { name: /Queue Relay/ })).toHaveAttribute(
      "href",
      "/systems/queue-relay",
    );
  });
});
```

- [ ] **Step 2: Run the component test and verify failure**

Run:

```bash
pnpm test -- src/features/content/collection-index.test.tsx
```

Expected: FAIL because `./collection-index` does not exist.

- [ ] **Step 3: Implement the collection index**

Create `src/features/content/collection-index.tsx`:

```tsx
import Link from "next/link";

type CollectionItem = {
  href: string;
  title: string;
  summary: string;
  meta: string;
};

type CollectionIndexProps = {
  title: string;
  description: string;
  emptyMessage: string;
  items: CollectionItem[];
};

export function CollectionIndex({
  title,
  description,
  emptyMessage,
  items,
}: CollectionIndexProps) {
  const titleId = `${title.toLowerCase().replaceAll(" ", "-")}-title`;

  return (
    <section aria-labelledby={titleId}>
      <p>Systems Fieldbook</p>
      <h1 id={titleId}>{title}</h1>
      <p>{description}</p>
      {items.length === 0 ? (
        <p role="status">{emptyMessage}</p>
      ) : (
        <ol>
          {items.map((item) => (
            <li key={item.href}>
              <article>
                <p>{item.meta}</p>
                <h2>
                  <Link href={item.href}>{item.title}</Link>
                </h2>
                <p>{item.summary}</p>
              </article>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
```

- [ ] **Step 4: Add the content-backed collection routes**

Create `src/app/systems/page.tsx`:

```tsx
import { CollectionIndex } from "@/features/content/collection-index";
import { contentRegistry } from "@/features/content/content-registry";

export default async function SystemsPage() {
  const systems = await contentRegistry.getSystems();
  return (
    <CollectionIndex
      title="Systems"
      description="Selected systems and the decisions, constraints, and outcomes behind them."
      emptyMessage="No public system reports are available yet."
      items={systems.map(({ metadata }) => ({
        href: `/systems/${metadata.slug}`,
        title: metadata.title,
        summary: metadata.summary,
        meta: `${metadata.role} · ${metadata.period}`,
      }))}
    />
  );
}
```

Create `src/app/engineering-notes/page.tsx`:

```tsx
import { CollectionIndex } from "@/features/content/collection-index";
import { contentRegistry } from "@/features/content/content-registry";

export default async function EngineeringNotesPage() {
  const notes = await contentRegistry.getNotes("engineering");
  return (
    <CollectionIndex
      title="Engineering Notes"
      description="Distributed systems, web architecture, reliability, and engineering practice."
      emptyMessage="No Engineering Notes are published yet."
      items={notes.map(({ metadata }) => ({
        href: `/engineering-notes/${metadata.slug}`,
        title: metadata.title,
        summary: metadata.summary,
        meta: `${metadata.publishedAt} · ${metadata.readingTime}`,
      }))}
    />
  );
}
```

Create `src/app/life-notes/page.tsx`:

```tsx
import { CollectionIndex } from "@/features/content/collection-index";
import { contentRegistry } from "@/features/content/content-registry";

export default async function LifeNotesPage() {
  const notes = await contentRegistry.getNotes("life");
  return (
    <CollectionIndex
      title="Life Notes"
      description="Field observations about growth, work, relationships, and the journey around engineering."
      emptyMessage="No Life Notes are published yet."
      items={notes.map(({ metadata }) => ({
        href: `/life-notes/${metadata.slug}`,
        title: metadata.title,
        summary: metadata.summary,
        meta: `${metadata.publishedAt} · ${metadata.readingTime}`,
      }))}
    />
  );
}
```

- [ ] **Step 5: Add explicit profile-route holding pages**

Create `src/components/route-holding-page/route-holding-page.tsx`:

```tsx
export function RouteHoldingPage({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <section aria-labelledby="route-title">
      <p>Systems Fieldbook</p>
      <h1 id="route-title">{title}</h1>
      <p role="status">{message}</p>
    </section>
  );
}
```

Create `src/app/experience/page.tsx`:

```tsx
import { RouteHoldingPage } from "@/components/route-holding-page/route-holding-page";

export default function ExperiencePage() {
  return (
    <RouteHoldingPage
      title="Experience"
      message="Verified professional experience has not been published yet."
    />
  );
}
```

Create `src/app/about/page.tsx`:

```tsx
import { RouteHoldingPage } from "@/components/route-holding-page/route-holding-page";

export default function AboutPage() {
  return (
    <RouteHoldingPage
      title="About"
      message="The owner biography and field notes have not been published yet."
    />
  );
}
```

Create `src/app/connect/page.tsx`:

```tsx
import { RouteHoldingPage } from "@/components/route-holding-page/route-holding-page";

export default function ConnectPage() {
  return (
    <RouteHoldingPage
      title="Start a conversation"
      message="Verified contact destinations have not been published yet."
    />
  );
}
```

- [ ] **Step 6: Run component and build checks**

Run:

```bash
pnpm test -- src/features/content/collection-index.test.tsx
pnpm build
```

Expected: the component tests PASS and all seven base routes build successfully.

- [ ] **Step 7: Add the route journey test**

Create `tests/e2e/routes.spec.ts`:

```ts
import { expect, test } from "@playwright/test";

const routes = [
  ["/systems", "Systems"],
  ["/experience", "Experience"],
  ["/engineering-notes", "Engineering Notes"],
  ["/life-notes", "Life Notes"],
  ["/about", "About"],
  ["/connect", "Start a conversation"],
] as const;

for (const [route, heading] of routes) {
  test(`${route} renders its primary heading`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
  });
}
```

Run:

```bash
pnpm test:e2e -- tests/e2e/routes.spec.ts --project=chromium
```

Expected: PASS for all six routes.

- [ ] **Step 8: Commit the route foundation**

```bash
git add src/app src/components/route-holding-page src/features/content tests/e2e/routes.spec.ts
git commit -m "feat(routes): add fieldbook collection shells"
```

## Task 7: Add metadata, sitemap, robots, and RSS feeds

**Files:**
- Create: `src/features/metadata/site-config.ts`
- Create: `src/features/metadata/metadata.test.ts`
- Create: `src/features/metadata/metadata.ts`
- Create: `src/features/metadata/feed.test.ts`
- Create: `src/features/metadata/feed.ts`
- Modify: `src/app/layout.tsx`
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/engineering-notes/rss.xml/route.ts`
- Create: `src/app/life-notes/rss.xml/route.ts`

- [ ] **Step 1: Write failing metadata tests**

Create `src/features/metadata/metadata.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { createPageMetadata, resolveSiteUrl } from "./metadata";

describe("resolveSiteUrl", () => {
  it("uses the explicit public URL", () => {
    expect(resolveSiteUrl("https://example.com").href).toBe("https://example.com/");
  });

  it("uses localhost during development", () => {
    expect(resolveSiteUrl(undefined, "development").href).toBe(
      "http://localhost:3000/",
    );
  });

  it("rejects a missing production URL", () => {
    expect(() => resolveSiteUrl(undefined, "production")).toThrow(
      "NEXT_PUBLIC_SITE_URL",
    );
  });
});

describe("createPageMetadata", () => {
  it("creates canonical and social metadata", () => {
    const metadata = createPageMetadata({
      title: "Systems",
      description: "Selected systems and the decisions behind them.",
      pathname: "/systems",
      baseUrl: new URL("https://example.com"),
    });

    expect(metadata.alternates?.canonical).toBe("https://example.com/systems");
    expect(metadata.openGraph?.title).toBe("Systems — Systems Fieldbook");
  });
});
```

- [ ] **Step 2: Write failing feed tests**

Create `src/features/metadata/feed.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { createRssFeed } from "./feed";

describe("createRssFeed", () => {
  it("escapes content and emits an RSS document", () => {
    const xml = createRssFeed({
      title: "Engineering Notes",
      description: "Systems & reliability",
      url: new URL("https://example.com/engineering-notes"),
      items: [
        {
          title: "Queues & retries",
          description: "Safe delivery <without> duplication.",
          publishedAt: "2026-07-19",
          url: new URL("https://example.com/engineering-notes/queues-and-retries"),
        },
      ],
    });

    expect(xml).toContain("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    expect(xml).toContain("Systems &amp; reliability");
    expect(xml).toContain("Safe delivery &lt;without&gt; duplication.");
  });
});
```

- [ ] **Step 3: Run metadata tests and verify failure**

Run:

```bash
pnpm test -- src/features/metadata
```

Expected: FAIL because the metadata modules do not exist.

- [ ] **Step 4: Implement site configuration and metadata**

Create `src/features/metadata/site-config.ts`:

```ts
export const siteConfig = {
  name: "Systems Fieldbook",
  title: "Systems Fieldbook — Web and Distributed Systems",
  description:
    "Systems engineering across the web and distributed systems, documented through projects and field notes.",
  themeColor: "#0b0d10",
} as const;
```

Create `src/features/metadata/metadata.ts`:

```ts
import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export function resolveSiteUrl(
  value = process.env.NEXT_PUBLIC_SITE_URL,
  environment = process.env.NODE_ENV,
) {
  if (value) return new URL(value);
  if (environment === "production") {
    throw new Error("NEXT_PUBLIC_SITE_URL is required for production builds");
  }
  return new URL("http://localhost:3000");
}

export function createPageMetadata({
  title,
  description,
  pathname,
  baseUrl = resolveSiteUrl(),
}: {
  title: string;
  description: string;
  pathname: string;
  baseUrl?: URL;
}): Metadata {
  const canonical = new URL(pathname, baseUrl).href;
  const fullTitle = `${title} — ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
```

Replace `src/app/layout.tsx` with:

```tsx
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import { SiteShell } from "@/components/site-shell/site-shell";
import { resolveSiteUrl } from "@/features/metadata/metadata";
import { siteConfig } from "@/features/metadata/site-config";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: resolveSiteUrl(),
  title: siteConfig.title,
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Implement the RSS builder**

Create `src/features/metadata/feed.ts`:

```ts
type FeedItem = {
  title: string;
  description: string;
  publishedAt: string;
  url: URL;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function createRssFeed({
  title,
  description,
  url,
  items,
}: {
  title: string;
  description: string;
  url: URL;
  items: FeedItem[];
}) {
  const entries = items
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.description)}</description>
      <link>${escapeXml(item.url.href)}</link>
      <guid>${escapeXml(item.url.href)}</guid>
      <pubDate>${new Date(`${item.publishedAt}T00:00:00.000Z`).toUTCString()}</pubDate>
    </item>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(title)}</title>
    <description>${escapeXml(description)}</description>
    <link>${escapeXml(url.href)}</link>${entries}
  </channel>
</rss>`;
}
```

- [ ] **Step 6: Add sitemap, robots, and separate feed routes**

Create `src/app/sitemap.ts`:

```ts
import { contentRegistry } from "@/features/content/content-registry";
import { resolveSiteUrl } from "@/features/metadata/metadata";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = resolveSiteUrl();
  const systems = await contentRegistry.getSystems();
  const engineering = await contentRegistry.getNotes("engineering");
  const life = await contentRegistry.getNotes("life");
  const baseRoutes = [
    "",
    "/systems",
    "/experience",
    "/engineering-notes",
    "/life-notes",
    "/about",
    "/connect",
  ];

  return [
    ...baseRoutes.map((route) => ({ url: new URL(route, baseUrl).href })),
    ...systems.map(({ metadata }) => ({
      url: new URL(`/systems/${metadata.slug}`, baseUrl).href,
    })),
    ...engineering.map(({ metadata }) => ({
      url: new URL(`/engineering-notes/${metadata.slug}`, baseUrl).href,
      lastModified: metadata.updatedAt ?? metadata.publishedAt,
    })),
    ...life.map(({ metadata }) => ({
      url: new URL(`/life-notes/${metadata.slug}`, baseUrl).href,
      lastModified: metadata.updatedAt ?? metadata.publishedAt,
    })),
  ];
}
```

Create `src/app/robots.ts`:

```ts
import { resolveSiteUrl } from "@/features/metadata/metadata";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = resolveSiteUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", baseUrl).href,
  };
}
```

Create `src/app/engineering-notes/rss.xml/route.ts`:

```ts
import { contentRegistry } from "@/features/content/content-registry";
import { createRssFeed } from "@/features/metadata/feed";
import { resolveSiteUrl } from "@/features/metadata/metadata";

export async function GET() {
  const baseUrl = resolveSiteUrl();
  const notes = await contentRegistry.getNotes("engineering");
  const xml = createRssFeed({
    title: "Systems Fieldbook — Engineering Notes",
    description: "Distributed systems, web architecture, reliability, and engineering practice.",
    url: new URL("/engineering-notes", baseUrl),
    items: notes.map(({ metadata }) => ({
      title: metadata.title,
      description: metadata.summary,
      publishedAt: metadata.publishedAt,
      url: new URL(`/engineering-notes/${metadata.slug}`, baseUrl),
    })),
  });
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
```

Create `src/app/life-notes/rss.xml/route.ts` with the same structure and these changed values:

```ts
import { contentRegistry } from "@/features/content/content-registry";
import { createRssFeed } from "@/features/metadata/feed";
import { resolveSiteUrl } from "@/features/metadata/metadata";

export async function GET() {
  const baseUrl = resolveSiteUrl();
  const notes = await contentRegistry.getNotes("life");
  const xml = createRssFeed({
    title: "Systems Fieldbook — Life Notes",
    description: "Field observations about growth, work, relationships, and the journey around engineering.",
    url: new URL("/life-notes", baseUrl),
    items: notes.map(({ metadata }) => ({
      title: metadata.title,
      description: metadata.summary,
      publishedAt: metadata.publishedAt,
      url: new URL(`/life-notes/${metadata.slug}`, baseUrl),
    })),
  });
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
```

- [ ] **Step 7: Run metadata and build checks**

Run:

```bash
pnpm test -- src/features/metadata
NEXT_PUBLIC_SITE_URL=https://systems-fieldbook.test pnpm build
```

Expected: metadata and feed tests PASS; build emits `/robots.txt`, `/sitemap.xml`, and both RSS routes.

- [ ] **Step 8: Commit discoverability infrastructure**

```bash
git add src/features/metadata src/app
git commit -m "feat(metadata): add sitemap and collection feeds"
```

## Task 8: Add accessibility gates, CI, and contributor documentation

**Files:**
- Create: `tests/e2e/accessibility.spec.ts`
- Create: `.github/workflows/ci.yml`
- Create: `README.md`

- [ ] **Step 1: Add automated accessibility coverage**

Create `tests/e2e/accessibility.spec.ts`:

```ts
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/systems",
  "/experience",
  "/engineering-notes",
  "/life-notes",
  "/about",
  "/connect",
] as const;

for (const route of routes) {
  test(`${route} has no automatically detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
```

- [ ] **Step 2: Run accessibility checks**

Run:

```bash
pnpm test:e2e -- tests/e2e/accessibility.spec.ts --project=chromium
```

Expected: PASS for all seven routes. If Axe reports a violation, fix the exact semantic or contrast issue in the owning component before continuing.

- [ ] **Step 3: Add continuous integration**

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  pull_request:
  push:
    branches: [main]

jobs:
  verify:
    runs-on: ubuntu-latest
    timeout-minutes: 20
    env:
      NEXT_PUBLIC_SITE_URL: https://systems-fieldbook.test
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm exec playwright install --with-deps chromium
      - run: pnpm lint
      - run: pnpm format:check
      - run: pnpm typecheck
      - run: pnpm test
      - run: pnpm build
      - run: pnpm test:e2e --project=chromium
```

The reserved `.test` domain keeps foundation CI deterministic without implying a production destination. Deployment configuration is outside this plan.

- [ ] **Step 4: Document the foundation workflow**

Create `README.md`:

```markdown
# Systems Fieldbook

A systems-engineering portfolio for selected projects, Engineering Notes, Life Notes,
professional experience, and contact.

## Requirements

- Node.js 22
- pnpm 10

## Local development

```bash
pnpm install
pnpm exec playwright install chromium
pnpm dev
```

Open <http://localhost:3000>.

## Verification

```bash
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
NEXT_PUBLIC_SITE_URL=https://systems-fieldbook.test pnpm build
pnpm test:e2e
```

## Content

Read `content/README.md` before adding MDX. Production content must pass the schemas in
`src/features/content/schemas.ts`. Test fixtures are not production copy.

## Design authority

The approved PRD is
`docs/superpowers/specs/2026-07-19-systems-fieldbook-portfolio-design.md`.
```

- [ ] **Step 5: Run the full foundation verification**

Run:

```bash
pnpm format
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
NEXT_PUBLIC_SITE_URL=https://systems-fieldbook.test pnpm build
pnpm test:e2e --project=chromium
pnpm test:e2e --project=mobile-chromium
```

Expected:

- ESLint exits with no errors.
- Prettier reports all files formatted.
- TypeScript reports no errors.
- All unit tests pass.
- Next.js builds all base routes, sitemap, robots, and feeds.
- Desktop and mobile Playwright suites pass.
- Axe reports no automatically detectable violations.

- [ ] **Step 6: Confirm the plan milestone**

Manually verify:

- `/` is usable with JavaScript disabled.
- Tab reaches the skip link, brand link, and every primary destination.
- Every base route has one visible `h1`.
- Empty collections describe the absence of published content without fabricated work.
- `robots.txt`, `sitemap.xml`, and both RSS routes return successful responses.
- The mobile viewport has no horizontal page overflow.
- Reduced-motion emulation removes transition duration.

- [ ] **Step 7: Commit the quality gate**

```bash
git add .github README.md tests package.json pnpm-lock.yaml
git commit -m "ci(portfolio): add foundation quality gates"
```

## Foundation completion criteria

This plan is complete only when:

- A clean checkout installs with `pnpm install --frozen-lockfile`.
- All base routes build and return successful responses.
- Invalid production MDX fails with a source-path error.
- Empty content directories render honest empty states.
- Sitemap, robots, and separate RSS feeds are generated.
- Desktop and mobile browser tests pass.
- Automated accessibility checks pass.
- The full verification sequence passes from a clean working tree.
- The working tree is committed using the conventional commits specified above.

After this milestone, create the Core Cinematic Experience plan from Sections 7, 10, 11, 12, and 16 of the approved PRD. Do not begin that implementation until owner photography and the preferred hero crop are available.
