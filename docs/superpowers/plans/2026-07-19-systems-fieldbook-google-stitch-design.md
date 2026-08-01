# Systems Fieldbook Google Stitch Design Production Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this plan task-by-task. Do not begin application implementation until the owner approves the annotated Google Stitch prototype screens at Gate D5.

**Goal:** Produce and approve the complete responsive visual design for Systems Fieldbook in Google Stitch, using the root `DESIGN.md` as the normative token and component authority, before any application code is written.

**Architecture:** Google Stitch is the visual design workspace; `DESIGN.md` is the machine-readable design-system source; the approved PRD is the product source; repository handoff documents preserve links, decisions, states, and implementation annotations. Design proceeds from foundations to low-fidelity structure, components, high-fidelity compositions, responsive variants, motion, accessibility, and owner approval. Each stage has an explicit gate so visual uncertainty is resolved before engineering begins.

**Design tools:** Google Stitch MCP, the `DESIGN.md` schema and official validator,
repository Markdown documentation

---

## Non-negotiable execution rule

This is Plan 0. It must be completed before the foundation implementation plan.

Google Stitch MCP is a required execution dependency. The active session must have
authenticated access to project, screen-generation, screen-editing, variant, and
design-system operations before Task 1 can pass. If account-scoped Stitch operations
are unavailable, pause this plan at Task 1. Do not substitute code, HTML mockups,
another design tool, or untracked image generation.

The tool names exposed by Google Stitch MCP may change. Use the connected operations
that correspond to the actions in this plan; do not invent unsupported method names.
The currently verified catalog provides project listing and retrieval, screen listing
and retrieval, text-to-screen generation, screen editing, variant generation, and
design-system upload/create/update/list/apply operations.

Google Stitch organises the work as projects and screens rather than page-and-artboard
documents. Preserve the numbered design order with screen group names and screen
labels. Where a gate requires interaction or review evidence beyond native Stitch
wiring, create the evidence as generated Stitch screens with explicit trigger, state,
focus, history, interruption, and reduced-motion annotations. This changes tool
mechanics only; it does not change scope, task order, or approval requirements.

## Design authority and conflict order

Use these sources in order:

1. `DESIGN.md` — normative tokens, typography, shapes, components, motion, and AI
   generation rules.
2. `docs/superpowers/specs/2026-07-19-systems-fieldbook-portfolio-design.md` — product,
   content, route, audience, and acceptance requirements.
3. The approved Google Stitch project — composition, responsive behaviour, component anatomy,
   and prototype detail.
4. `https://jamesakpan.com/` — inspiration only; never a source for copied assets,
   identity, wording, or exact effects.

When Google Stitch exploration reveals a better recurring rule, update `DESIGN.md`, validate
it, and record the decision before applying the change across screens. Do not allow a
one-off Google Stitch value to silently become the design system.

## Required repository handoff files

This plan creates these durable documents during execution:

```text
docs/design/
├── stitch-handoff.md
├── design-decisions.md
├── design-review-checklist.md
└── references/
    ├── desktop-overview.png
    ├── compact-overview.png
    └── prototype-flow.png
```

Google Stitch remains the editable source. Retrieved screen images support review and
history; they are not substitutes for inspectable Google Stitch screen resources.

## Google Stitch project structure

Create one Google Stitch project named **Systems Fieldbook** with this screen-group
order:

```text
00 Cover & brief
01 Foundations
02 Components
03 Low-fidelity flows
04 High-fidelity desktop
05 High-fidelity compact
06 Articles & system reports
07 Prototype & motion
08 Accessibility & review
09 Archive
```

Use these baseline viewports:

- Desktop: 1440 × 1024
- Compact laptop validation: 1280 × 832
- Tablet: 768 × 1024
- Mobile: 390 × 844

Long-form screens may extend vertically. Keep their width fixed to the viewport under
review and annotate the intended sticky regions.

## Gate summary

| Gate | Required approval |
|---|---|
| D0 | `DESIGN.md` validates and source rules are understood |
| D1 | Foundations and component anatomy match the design authority |
| D2 | Low-fidelity information architecture and user flows are complete |
| D3 | High-fidelity desktop and compact screens cover the release scope |
| D4 | Prototype, motion, accessibility, and edge-state review pass |
| D5 | Owner explicitly approves the Google Stitch design for implementation |

No gate is implied by silence. Record approval and any conditions in
`docs/design/stitch-handoff.md`.

## Task 1: Validate the design authority and initialise Google Stitch

**Files:**
- Verify: `DESIGN.md`
- Read: `docs/superpowers/specs/2026-07-19-systems-fieldbook-portfolio-design.md`
- Create during execution: `docs/design/stitch-handoff.md`
- Create during execution: `docs/design/design-decisions.md`

- [ ] **Step 1: Validate the root design system**

Run:

```bash
npx @google/design.md lint DESIGN.md --format text
```

Expected: zero errors and zero warnings. Informational token-summary output is
acceptable.

- [ ] **Step 2: Confirm Google Stitch MCP readiness**

List the available Google Stitch MCP tools and confirm authenticated account access.
Verify project create/list/get, screen generate/list/get/edit, variant generation, and
design-system upload/create/update/list/apply operations.

Expected: the MCP endpoint, credentials, and account-scoped operations work. Record
any catalog limitation and its Stitch-native evidence convention in the decision log.
If a required operation or authentication is absent, stop and record it; do not begin
a partial design in another tool.

- [ ] **Step 3: Create the project and screen-group structure**

Create the **Systems Fieldbook** Google Stitch project and the ten numbered screen
groups listed above. In the `00 Cover & brief` screen, include:

- Product statement and primary CTA
- Three audiences
- Seven primary areas
- Launch-content minimum
- Design principles
- Explicit non-goals: no fake terminal, dashboard, copied identity, WebGL, or motion
  gate
- Links or references to `DESIGN.md` and the approved PRD

- [ ] **Step 4: Seed Google Stitch with the design context**

Provide Google Stitch this generation brief together with the complete `DESIGN.md` content:

> Design Systems Fieldbook, a cinematic and writing-led portfolio for a systems
> engineer working across web and distributed systems. Treat the supplied DESIGN.md
> tokens as normative. Use dark graphite stages, warm paper text, signal cyan for
> active flow and the primary action, and incident orange only for warnings and honest
> retrospectives. Combine monumental editorial headings, precise mono metadata,
> translucent workspaces, original photography placeholders, and accessible
> architecture diagrams. The result must feel human, rigorous, tactile, calm, and
> technically credible—not like a terminal, monitoring dashboard, or generic developer
> template. Design desktop and compact compositions as related art direction rather
> than scaled copies.

- [ ] **Step 5: Start the handoff and decision logs**

In `docs/design/stitch-handoff.md`, record the Google Stitch project title, stable
project resource name or link, screen-group inventory, current gate, date, and
approval status. In
`docs/design/design-decisions.md`, use entries with: decision, context, alternatives,
rationale, affected screens, token impact, accessibility impact, and date.

- [ ] **Step 6: Pass Gate D0**

Verify that the validator is clean, the Google Stitch project is inspectable, and the cover
brief matches both source documents. Record `D0: passed` in the handoff.

## Task 2: Build and approve the visual foundations

**Google Stitch screen group:** `01 Foundations`

- [ ] **Step 1: Create the colour board**

Show every YAML colour token as a named swatch with hex value, intended usage, and at
least one valid text/background pairing. Add separate examples for the default 1px
keyline, strong keyline, photography scrim, Primary focus ring, and semantic states.
Clearly label Primary as Signal and Secondary as Incident.

- [ ] **Step 2: Create the typography specimen**

Show all twelve typography tokens with family, weight, size, line height, tracking,
role, and realistic Systems Fieldbook copy. Include desktop and compact display
scaling, article measure, mono readouts, code, and a 200% zoom reading example.

- [ ] **Step 3: Create spacing, grid, and containment boards**

Visualise the complete spacing scale, 12-column desktop grid, 4-column compact grid,
outer margins, gutters, 720px article measure, 960px diagram width, 1200px content
width, and 1440px page maximum. Show the 900px composition breakpoint as a structural
change, not a shrink operation.

- [ ] **Step 4: Create shape, stroke, and depth boards**

Show every radius token, 1px and 2px strokes, stage/workspace/raised/overlay depth
levels, blur fallback, grain, vignette, and image treatment. Include a reduced-
transparency example with an opaque workspace.

- [ ] **Step 5: Create iconography, diagram, and motion boards**

Define the 24px outline icon grid, 1.5–2px strokes, diagram nodes and connectors,
normal-flow and incident-flow examples, motion durations, easing curves, and reduced-
motion substitutions.

- [ ] **Step 6: Audit foundations against `DESIGN.md`**

Use Stitch design-system resources and retrieved screen details to compare every
repeated value with the YAML front matter. Move exploration-only alternatives to the
`09 Archive` screen group. Any accepted new system value must be added to `DESIGN.md`,
linted, and logged before further use.

Expected: no unexplained colours, type styles, radii, spacing values, or shadows remain
in the active foundations screen group.

## Task 3: Design the component library and states

**Google Stitch screen group:** `02 Components`

- [ ] **Step 1: Build navigation and action components**

Create reusable components for the product mark, desktop navigation capsule, compact
navigation, active indicator, text link, Primary button, Secondary button, quiet
button, icon button, and back action.

- [ ] **Step 2: Build portfolio content components**

Create system card, experience entry, Engineering Note row, Life Note row, collection
header, metadata readout, technology label, semantic badge, metric, callout, image
field note, scroll affordance, diagram node, diagram connector, and reading header.

- [ ] **Step 3: Build form and overlay components**

Create labelled input, textarea, checkbox, radio, tooltip, dialog shell, Connect scene,
email action, calendar action, social action, and résumé action. The release does not
need a contact-form backend, but the system must define accessible inputs for future
editorial or filtering use.

- [ ] **Step 4: Build technical reading components**

Create code block, inline code, table, figure, caption, topology diagram, sequence
diagram, decision callout, failure-mode callout, and related-content card.

- [ ] **Step 5: Complete the state matrix**

For each interactive component, show applicable default, hover, focus-visible, active,
selected, disabled, loading, success, warning, and error states. Add touch annotations
where hover is not available. Confirm 44×44px minimum targets and 48px standard button
height.

- [ ] **Step 6: Pass Gate D1**

Review component consistency, contrast, naming, state coverage, and token usage. Record
exceptions as decisions or remove them. Record `D1: passed` only after the foundations
and component library are approved as the common visual language.

## Task 4: Produce low-fidelity information architecture and flows

**Google Stitch screen group:** `03 Low-fidelity flows`

- [ ] **Step 1: Map the route and scene architecture**

Create a sitemap for Home, Systems, Experience, Engineering Notes, Life Notes, About,
Connect, system reports, collection indexes, and article details. Distinguish homepage
hash scenes from crawlable routes.

- [ ] **Step 2: Wireframe the homepage scene sequence**

At desktop and mobile widths, wireframe:

1. Home
2. Systems
3. Experience
4. Engineering Notes preview
5. Life Notes preview
6. About
7. Connect overlay and return path

Show stage, navigation, workspace boundaries, independent-scroll affordance, primary
CTA, focus destination, and originating scene for Connect.

- [ ] **Step 3: Wireframe deep-reading flows**

Create low-fidelity index and detail flows for a system report, Engineering Notes, and
Life Notes. Include filters, table of contents, article header, related content,
diagrams, code, mobile fallbacks, and collection return paths.

- [ ] **Step 4: Wireframe state and failure flows**

Include empty collection, draft-excluded collection, missing optional image, invalid
hash fallback, 404, unavailable booking, long title, long navigation label, and diagram
text-alternative states.

- [ ] **Step 5: Validate the three audience journeys**

Trace and annotate:

- Engineering leader: Home → Systems → report → résumé or Connect
- Potential client: Home → outcome-led system card → report → Start a conversation
- Technical peer: Home → Engineering Notes → article → related system

- [ ] **Step 6: Pass Gate D2**

Confirm that every required route and scene has a clear entry, next action, back path,
focus path, and compact composition. Record `D2: passed` after owner approval of the
low-fidelity structure.

## Task 5: Design the high-fidelity desktop experience

**Google Stitch screen groups:** `04 High-fidelity desktop`, `06 Articles & system reports`

- [ ] **Step 1: Design the 1440px Home scene**

Use an original-photography placeholder with explicit crop-safe zones, oversized
name, positioning statement, availability context, navigation capsule, Primary
Connect action, and restrained personal field-note detail. Also create the no-image
fallback using a neutral gradient.

- [ ] **Step 2: Design all dense homepage scenes**

Create Systems, Experience, Engineering Notes preview, Life Notes preview, and About
at 1440×1024. Preserve the stage while varying workspace density, title balance,
context readout, diagram accent, and supporting imagery. Show visible independent-
scroll affordance where required.

- [ ] **Step 3: Design the Connect scene**

Show entry from another scene, email as the dependable first action, optional calendar,
GitHub, LinkedIn, résumé, close/back behaviour, keyboard focus order, and unavailable-
booking fallback. Keep theatrical depth restrained and readable.

- [ ] **Step 4: Design collection indexes**

Create desktop indexes for Systems, Engineering Notes, and Life Notes. Engineering
Notes includes lightweight topic filtering; Life Notes uses themes and a calmer
editorial density. Do not add first-release full-text search.

- [ ] **Step 5: Design a complete system field report**

Include snapshot, problem context, system boundary, topology, critical flow, decisions,
reliability and operations, outcome, retrospective, confidentiality notation, and
related notes. Show long content, code, table, metric, callout, and accessible diagram
patterns in realistic sequence.

- [ ] **Step 6: Design Engineering and Life article details**

Create one long-form example for each collection. Engineering uses a table of contents,
technical figures, code, and operational callouts. Life uses more open spacing,
supporting imagery, and pull quotes while retaining the same product shell.

- [ ] **Step 7: Validate compact-laptop pressure**

Generate representative Home, Systems, Connect, report, and article variants at
1280×832. Resolve collisions and above-the-fold pressure without creating a separate
visual system.

## Task 6: Design mobile and tablet recompositions

**Google Stitch screen group:** `05 High-fidelity compact`

- [ ] **Step 1: Recompose all homepage scenes at 390×844**

Use a dedicated mobile image crop, compact navigation, two- or three-line headings,
near-full-viewport workspaces, stronger reading scrims, safe-area spacing, visible
scroll cues, and tap-first interactions. Do not merely scale the desktop screens.

- [ ] **Step 2: Recompose deep routes at 390px**

Create Systems index, system report, Engineering Notes index and detail, Life Notes
index and detail, About, Connect, and 404. Replace wide topology with vertical flows or
an intentionally contained horizontal region plus nearby text alternative.

- [ ] **Step 3: Validate 768×1024 tablet layouts**

Test navigation, stage/workspace balance, diagrams, table overflow, sticky reading
header, and Connect. Choose either compact or desktop composition per screen based on
content behaviour rather than device naming.

- [ ] **Step 4: Stress-test content**

Create variants for 200% zoom, longest plausible project title, six technology labels,
multi-line role names, long summaries, missing optional image, and a 12-step sequence
flow. Resolve truncation, overlap, and hidden actions.

## Task 7: Build the interaction and motion prototype

**Google Stitch screen group:** `07 Prototype & motion`

- [ ] **Step 1: Connect primary navigation flows**

Prototype Home through all six sibling scenes, active navigation movement, browser-
history intent annotations, direct-link entry, and heading focus destination.

- [ ] **Step 2: Prototype workspace behaviour**

Show workspace entry, independent scrolling and its affordance, card hover/focus,
touch activation, note-row transitions, and return from deep routes.

- [ ] **Step 3: Prototype Connect**

Demonstrate opening, focus order, Primary email action, optional calendar action,
closing, and restoration to the originating scene. Include the unavailable-booking
branch.

- [ ] **Step 4: Annotate motion timing**

For each transition, record trigger, properties, start and end values, duration,
easing, interruption behaviour, and reduced-motion substitution. Keep the initial
settle below 1.8 seconds and all content usable before it completes.

- [ ] **Step 5: Create the reduced-motion prototype path**

Replace travel, blur, zoom, parallax, flicker, rotation, and path sequencing with final
states or a maximum 120ms opacity transition. Verify that information and focus order
are identical.

## Task 8: Run accessibility, consistency, and edge-state review

**Google Stitch screen group:** `08 Accessibility & review`

- [ ] **Step 1: Create the accessibility annotation layer**

Annotate heading order, landmarks, focus order, focus trap and restoration, accessible
names, touch targets, diagram alternatives, table captions, reading order, sticky
regions, and skip-link destination for each screen family.

- [ ] **Step 2: Verify contrast and image crops**

Check every solid token pairing and every text-over-image placement at desktop, tablet,
and mobile crops. Record numerical contrast for text, controls, focus, and meaningful
icons. Add or adjust scrims instead of relying on one favourable crop.

- [ ] **Step 3: Review design-system consistency**

Inspect active screens for colours, type styles, spacing, radii, shadows, icon
strokes, and motion values. Move rejected exploration to the `09 Archive` screen
group. Update `DESIGN.md` for approved recurring changes, lint it, and resynchronise
the foundations screen group.

- [ ] **Step 4: Review all release states**

Confirm default, hover, focus, active, disabled, loading, success, warning, error,
empty, offline, 404, unavailable booking, reduced motion, reduced transparency, long
content, missing image, and 200% zoom coverage where applicable.

- [ ] **Step 5: Export review overviews**

Retrieve desktop, compact, and prototype overview screen images to the three exact
paths under `docs/design/references/`. Record their Stitch screen resource names and
links in the handoff.

- [ ] **Step 6: Complete the design review checklist**

Create `docs/design/design-review-checklist.md` with pass/fail evidence for product
scope, content coverage, responsiveness, component states, accessibility, motion,
contrast, design-token consistency, confidentiality presentation, and handoff quality.

- [ ] **Step 7: Pass Gate D4**

Gate D4 passes only when no blocking review finding remains. Record non-blocking polish
as explicit implementation notes, not as undefined visual work.

## Task 9: Obtain owner approval and lock the handoff

**Files:**
- Finalise: `docs/design/stitch-handoff.md`
- Finalise: `docs/design/design-decisions.md`
- Finalise: `docs/design/design-review-checklist.md`
- Modify if needed: `DESIGN.md`
- Modify if needed: `docs/superpowers/plans/2026-07-19-systems-fieldbook-foundation.md`

- [ ] **Step 1: Present the final Google Stitch walkthrough**

Walk through the foundations, components, three audience flows, every route family,
desktop and compact compositions, Connect, prototype, reduced-motion path, and edge
states. Present unresolved trade-offs explicitly.

- [ ] **Step 2: Capture explicit owner feedback**

Classify each item as blocking, approved follow-up, rejected, or accepted. Apply
blocking changes in Google Stitch, update any affected tokens and documents, and rerun the
relevant checks.

- [ ] **Step 3: Revalidate the final `DESIGN.md`**

Run:

```bash
npx @google/design.md lint DESIGN.md --format text
```

Expected: zero errors and zero warnings.

- [ ] **Step 4: Record Gate D5**

In `docs/design/stitch-handoff.md`, record:

- `Status: Approved for implementation`
- Approval date
- Owner approval statement
- Google Stitch project and annotated prototype-screen resource names or links
- Approved screen groups and screen resource names
- Known implementation notes
- Explicitly deferred ideas
- Final `DESIGN.md` commit

- [ ] **Step 5: Reconcile the foundation plan**

Confirm its token examples, screen assumptions, tests, and component boundaries match
the approved Google Stitch handoff. Edit the plan before coding if any accepted Google Stitch decision
changed those details.

- [ ] **Step 6: Commit the design handoff**

```bash
git add DESIGN.md docs/design docs/superpowers/plans
git commit -m "docs(design): approve stitch handoff"
```

## Design-plan completion criteria

This plan is complete only when:

- `DESIGN.md` passes the official validator without errors or warnings.
- The Google Stitch project contains every ordered screen group and required screen.
- Foundations and component states use the normative tokens consistently.
- Desktop, laptop, tablet, and mobile compositions cover the complete first-release
  route and scene inventory.
- The three audience journeys are prototyped and understandable.
- Connect, error, empty, loading, long-content, missing-image, and 404 states exist.
- Motion and reduced-motion behaviour are annotated.
- Accessibility, contrast, focus, touch, zoom, and diagram alternatives pass review.
- The repository contains the completed handoff, decision log, review checklist, and
  overview exports.
- The owner explicitly records `Approved for implementation` at Gate D5.
- The foundation plan is reconciled with the final design.

Only then may the application foundation plan begin.
