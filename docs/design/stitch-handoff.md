# Systems Fieldbook Google Stitch Handoff

- **Status:** Plan 0 Tasks 1–4 complete; Task 5 high-fidelity design is unblocked
- **Current gate:** D2 passed; D3 is next
- **Reset date:** 1 August 2026
- **Implementation approval:** Not granted; Gate D5 remains pending
- **Design workspace:** Google Stitch MCP
- **Stitch project:** Systems Fieldbook (`projects/15622483747994955838`)
- **Design system:** Systems Fieldbook
  (`assets/df3ea9366e6949dda23f7e96e2f9cd85`, version 1)
- **Authoritative cover screen:** `00 Cover & brief`
  (`projects/15622483747994955838/screens/c9cd34ca116842d298129944eb346faf`)

## Design authority

Use these sources in order:

1. Root `DESIGN.md` for normative tokens, typography, shapes, components, motion,
   accessibility, and generation rules.
2. `docs/superpowers/specs/2026-07-19-systems-fieldbook-portfolio-design.md` for
   product, content, route, audience, and acceptance requirements.
3. The approved Google Stitch project for composition, responsive behaviour,
   component anatomy, annotated interaction flows, and implementation detail.
4. The public reference site for inspiration only.

No application implementation is approved by this handoff. Gate D5 must be recorded
before the foundation implementation plan begins.

## Design-tool reset

Google Stitch MCP is now the sole visual-design workspace for this repository. The
tool change does not alter the product specification, task sequence, gate sequence,
screen inventory, acceptance criteria, or implementation plan.

All design-production completion recorded before this reset is invalidated:

- Tasks 1 and 2 in Plan 0 are reset to pending.
- No prior design gate carries forward.
- No previous external design artifact is an approved composition or interaction
  authority.
- Design production restarts with Task 1 in the existing order.

## Planned Stitch screen-group inventory

The **Systems Fieldbook** Stitch project will use these ordered screen groups:

1. `00 Cover & brief`
2. `01 Foundations`
3. `02 Components`
4. `03 Low-fidelity flows`
5. `04 High-fidelity desktop`
6. `05 High-fidelity compact`
7. `06 Articles & system reports`
8. `07 Prototype & motion`
9. `08 Accessibility & review`
10. `09 Archive`

This naming preserves the approved design-production order while using Stitch's
project-and-screen model.

## Stitch MCP readiness

Readiness rechecked on 1 August 2026:

- The Stitch MCP endpoint is registered and enabled.
- The protocol handshake succeeds.
- Tool discovery succeeds.
- The verified catalog exposes project create/list/get, screen
  generate/list/get/edit, variant generation, and design-system
  upload/create/update/list/apply operations.
- Authenticated account-scoped `list_projects` succeeds and reports owner access.
- Project retrieval, screen listing, and design-system listing succeed against an
  existing private project.
- The private **Systems Fieldbook** project was created successfully as
  `projects/15622483747994955838`.
- The owner explicitly approved sending the complete local `DESIGN.md` and relevant
  portfolio specification content to this private Stitch project.
- `DESIGN.md` was uploaded as
  `projects/15622483747994955838/screens/13446868765597181650` and converted into
  `assets/df3ea9366e6949dda23f7e96e2f9cd85`.
- Text-to-screen generation and direct screen-edit operations completed successfully.

Task 1 is complete. All later design production remains in this Google Stitch project;
no substitute design tool is approved.

## Task 2 foundations record

The accepted `01 Foundations` authority is intentionally split into seven focused
Stitch review boards so every recurring value remains inspectable:

- Colour tokens: `projects/15622483747994955838/screens/8400782320044238a0cd804d419fafef`
- Colour treatments and semantic states:
  `projects/15622483747994955838/screens/9d1a1cf6a9d74a298729c93f3fd029cd`
- Typography:
  `projects/15622483747994955838/screens/79257a9fe1b0410bb27e1563d11804d3`
- Spacing, grid, and containment:
  `projects/15622483747994955838/screens/278739672c6049a99c170af6745ef5f9`
- Shape and stroke:
  `projects/15622483747994955838/screens/a4e904082b17488b8623a772820a743f`
- Depth, media, and fallbacks:
  `projects/15622483747994955838/screens/e14e058ed22b4bbb9e1175381e9d3b86`
- Icons, diagrams, and motion:
  `projects/15622483747994955838/screens/c5ffdad117f545ff802b606fc68ab5ac`

All seven resources are desktop screens with retrievable HTML and screenshot exports.
The boards cover the complete YAML palette and typography sets, the named spacing and
radius scales, approved layout widths and grids, the 900px composition change, four
depth levels, media and transparency fallbacks, icon and diagram grammar, motion
durations and easing curves, and reduced-motion substitutions.

The foundations audit checked 176 required visible items across these seven exports:
zero were missing, no visible hex value fell outside the ten YAML colours plus the two
approved keyline treatments, and no fake telemetry, dates, copyright, or rejected
status strings remained. The 2px focus specimen uses an inset/equal-size container,
so its outer dimensions match the adjacent 1px specimens.

Stitch's imported design-system resource remains
`assets/df3ea9366e6949dda23f7e96e2f9cd85`, version 1. Stitch expands an imported palette
into Material-style theme aliases inside generated HTML. Those generated aliases are
preview implementation details, not accepted Systems Fieldbook tokens. Three
`update_design_system` contract tests rejected both the listed resource payload and a
bare asset identifier as invalid arguments; the asset was therefore left unchanged.
The visible board specifications, this accepted-screen registry, and root `DESIGN.md`
are authoritative. No new recurring system value was accepted, so `DESIGN.md` did not
need a token change.

Rejected alternatives are indexed in
`projects/15622483747994955838/screens/0d7bb43f17c043f78f09e18fa2c03930`
as `09 Archive — Foundations explorations`. The connected API exposes no screen
rename, hide, move, or delete operation, so this numbered registry is the authoritative
archive classification and its rejected IDs must not be used for implementation.

Task 2 is complete. Its foundation evidence is incorporated into the D1 decision
recorded after Task 3.

## Task 3 component-library record

The accepted `02 Components` authority uses 20 focused inventory boards and 15 state
boards. The authoritative registry and Gate D1 audit are recorded in
`projects/15622483747994955838/screens/e99f4e6d0f0b49139f35a11bd4e91e7b`
as `02H Components — Gate D1 audit`.

The 20 inventory boards cover navigation and actions; portfolio cards, rows,
metadata, media, diagram primitives, and reading context; form controls, dialog and
Connect shells, and all four Connect actions; and code, tables, figures, accessible
diagrams, semantic callouts, and related content. Their accepted screen IDs are
listed on the Gate D1 audit board rather than inferred from duplicate screen titles.

The 15 state boards cover navigation destinations, text and back actions, the scroll
affordance, all three button levels, icon and copy actions, content-card and editorial
row families, labelled input and textarea, selection controls, tooltip, dialog, and
the shared Connect action family. Each rendered matrix includes Default, Hover,
Focus-visible, Active, Selected, Disabled, Loading, Success, Warning, and Error, or a
visible `N/A — not applicable` cell. The audit also records these inheritance rules:

- the active indicator inherits Navigation destinations;
- Reading header interaction inherits Back action;
- Related-content card inherits Content card family;
- Email, Calendar, Social, and Résumé inherit Connect action family; and
- code-copy affordances inherit Copy action.

All 35 accepted boards were visually inspected. The state audit confirms 44×44px
minimum and 48px standard targets, a 2px Signal Cyan focus ring with a 2px offset,
semantic feedback that never relies on colour alone, and neutral owner-supplied
placeholders where private content is not yet approved. Canonical visible tokens from
`DESIGN.md` remain authoritative; Stitch-generated theme aliases remain non-normative
preview details.

Rejected Task 3 explorations are indexed in
`projects/15622483747994955838/screens/6a0dbf3765b647848abcba80bce60d3b`
as `09 Archive — Component explorations`. The registry identifies 19 rejected screens
and their reasons. Only the 35 IDs named on the Gate D1 board may inform subsequent
screen design.

Task 3 is complete and Gate D1 is passed. This approves the common foundation and
component language for Task 4 screen composition only; application implementation
remains blocked until Gate D5.

## Task 4 low-fidelity review record

Task 4 Steps 1–5 are produced and audited in the `03 Low-fidelity flows` screen
group. The authoritative review registry is
`projects/15622483747994955838/screens/1ecfc38a77294c42aa7eb5bc6fcb59b7`
as `03F Low-fi — Gate D2 review`.

The registry names 21 accepted boards covering:

- all seven homepage hash scenes and the complete crawlable route tree;
- all seven homepage scenes at desktop and 390px compact compositions;
- Systems index/report, Engineering Notes index/article, and Life Notes
  index/article flows;
- empty collection, draft exclusion, missing optional image, invalid hash, 404,
  diagram text alternative, unavailable booking, long title, and long navigation
  label states; and
- separate Engineering-leader, potential-client, and technical-peer journeys.

Every required route and scene records an entry, next action, back or collection-return
path, programmatic focus path, and compact composition. The accepted flows also record
browser history, direct-route and direct-hash entry, Connect origin preservation and
focus restoration, mobile diagram fallbacks, nearby diagram text alternatives, and
owner-supplied placeholders where real portfolio content is not yet available.

Rejected low-fidelity explorations are indexed in
`projects/15622483747994955838/screens/6c30d66009f444d681731b617f6a9419`
as `09 Archive — Low-fi explorations`. The archive records 13 rejected screen IDs and
their reasons. Only the 21 IDs on the `03F` review board may inform high-fidelity
design.

The owner explicitly approved D2 on 2 August 2026. Task 4 Step 6 and Gate D2 are
therefore complete, and Task 5 high-fidelity design may begin. This approval is for
continued design production only; application implementation remains blocked until
Gate D5.

After approval, the active Stitch canvas was cleaned so superseded explorations and
obsolete archive boards no longer compete with the accepted authority. The cleanup
removed 52 obsolete boards and left 68 active screens. An ID-level comparison against
the cleanup manifest found no obsolete screen remaining.

Four accepted boards were inadvertently removed while disambiguating duplicate or
nearby titles in Stitch's coordinate-based canvas UI. Their original resources
remained retrievable, so faithful replacements were generated from those originals in
recovery session `16940801839603037374`. Title, desktop device type, width, and height
were verified pairwise:

- `02F1b1 States — Text link`:
  `1cbbb980e4244288b834ce2302cffe1f` → `63e202a6cff7435c8c31231d8e93b3ea`
- `02F1b2 States — Back action`:
  `4215ca1cb29448aeb7185dc59e6876a3` → `f432a898afa54eb7a737cc0c4a6a1c98`
- `02G2b States — Tooltip`:
  `8d06f77acc854c968977f87555884d18` → `8176af2e44b94b2a96703faa0b573e70`
- `02B3c2 Components — Editorial distinction`:
  `974583645c0444f982f40f0336f94187` → `0cd7f69383b54addb7ad6f487aaa0eb1`

The replacement IDs are the active-canvas authority for these four boards. The old
IDs are retained here only as recovery provenance; all other accepted IDs remain
unchanged.

## Task 1 screen record

The authoritative `00 Cover & brief` screen is
`projects/15622483747994955838/screens/c9cd34ca116842d298129944eb346faf`.
It records:

- the approved product statement, supporting narrative, and primary action;
- all three audiences and all seven primary areas;
- every launch-content minimum, design principle, and explicit non-goal;
- the ordered `00`–`09` design-production map;
- the source-authority order and reference-site restriction; and
- a neutral owner-photography placeholder instead of an invented portrait.

The screen is a long desktop review board. Stitch reports a 1280-pixel canvas instance
and a 2560-pixel exported image, consistent with a 2× desktop review render. The MCP
does not expose an empty-group creation operation, so the cover's ordered production
map is the group index and every subsequent screen will retain its numeric group prefix.

The initial compressed cover
`projects/15622483747994955838/screens/f0055fb20e214b37bb5b4a7d0ed847a6`
and generated portrait exploration
`projects/15622483747994955838/screens/f6afc7ad352a47309a9bb07e3a1b272e`
are rejected exploration and are not implementation authority.

## Gate record

### D0 — passed on 1 August 2026

Evidence:

- Root `DESIGN.md` validates with zero errors and zero warnings.
- Authenticated owner access to the private **Systems Fieldbook** project is verified.
- The imported Systems Fieldbook design-system asset is present and inspectable.
- The authoritative cover screen uses that design-system asset and matches the root
  design authority and approved portfolio PRD.
- The cover records the complete ordered screen-group structure and source hierarchy.
- The project, design system, cover screen, and generated HTML/image resources are
  retrievable through Stitch MCP.

### D1 — passed on 1 August 2026

Evidence:

- The seven accepted foundation boards remain complete against `DESIGN.md`.
- The 20 accepted component-inventory boards cover every Task 3 component.
- The 15 accepted state boards record every applicable state or an explicit N/A.
- All 35 Task 3 boards have retrievable HTML and screenshot evidence and were visually
  inspected.
- Component naming, token use, focus treatment, touch targets, semantic feedback,
  reduced-motion behaviour, and content-safety placeholders are recorded consistently.
- The Gate D1 registry is
  `projects/15622483747994955838/screens/e99f4e6d0f0b49139f35a11bd4e91e7b`.
- Rejected Task 3 explorations are quarantined by
  `projects/15622483747994955838/screens/6a0dbf3765b647848abcba80bce60d3b`.

### D2 — passed on 2 August 2026

Evidence:

- The `03F Low-fi — Gate D2 review` registry covers every required route, scene,
  fallback, audience journey, focus path, and compact composition.
- The owner explicitly responded `Approved D2.`
- The active Stitch canvas was cleaned against the rejection manifest: 52 obsolete
  boards were removed, 68 active screens remain, and no obsolete ID remains listed.
- Four accepted boards affected during cleanup were recovered from retrievable
  originals, and their replacement titles, device types, and dimensions match.

### D3–D5 — pending

Later gates retain their original scope and order. D2 permits Task 5 design production;
it does not grant application implementation approval. Gate D5 remains the
implementation boundary.
