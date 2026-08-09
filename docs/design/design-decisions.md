# Systems Fieldbook Design Decisions

This log records accepted decisions that affect Google Stitch screen patterns, design
tokens, accessibility, or implementation handoff. Rejected exploration is recorded by
ID and reason in repository documentation, then deleted from the active Stitch board.
Historical `09 Archive` decisions below are superseded by the 3 August 2026
active-board cleanup decision.

## 2026-08-01 — Use Google Stitch MCP as the design workspace

- **Decision:** Use Google Stitch MCP as the sole visual-design workspace and restart
  Plan 0 from Task 1.
- **Context:** The owner changed the design-production tool before application
  implementation began. Existing product requirements, gates, task order, and
  implementation sequencing remain valid.
- **Alternatives:** Continue with the former design workspace; mix multiple design
  tools; translate completed visual artifacts into Stitch and retain their approvals.
- **Rationale:** A clean restart gives Google Stitch one authoritative project and
  prevents stale external artifacts or tool-specific mechanics from carrying hidden
  approval into the new workflow.
- **Affected screens:** All ten planned screen groups from `00 Cover & brief` through
  `09 Archive`.
- **Token impact:** None. Root `DESIGN.md` remains the normative token authority.
- **Accessibility impact:** None. All contrast, focus, keyboard, touch, zoom,
  reduced-motion, reduced-transparency, and diagram-alternative requirements remain
  unchanged.
- **Plan impact:** None. Tasks and gates retain their existing order and scope; Tasks
  1 and 2 are reset to pending because their prior evidence does not come from Stitch.
- **Approval:** Directed by the owner on 1 August 2026.

## 2026-08-01 — Represent ordered design sections as Stitch screen groups

- **Decision:** Preserve the numbered Plan 0 sections as Google Stitch screen-group
  names and screen labels inside one **Systems Fieldbook** project.
- **Context:** Stitch exposes projects and screens rather than page-and-artboard
  primitives.
- **Alternatives:** Flatten every design into an ungrouped screen list; create one
  project per plan section; renumber or reorder the plan.
- **Rationale:** Named screen groups preserve review order and gate traceability
  without altering the plan to imitate another tool's document model.
- **Affected screens:** All planned Stitch screens.
- **Token impact:** None.
- **Accessibility impact:** Annotation screens must retain all existing focus,
  interaction, motion, and text-alternative requirements.
- **Approval:** Included in the owner-directed Google Stitch migration on 1 August
  2026.

## 2026-08-01 — Use the cover production map as the Stitch group index

- **Decision:** Treat the ordered `00`–`09` Design Production Map on the authoritative
  cover screen as the project group index, and prefix every later screen title with
  its group number.
- **Context:** The connected Stitch MCP exposes project and screen generation but no
  operation for creating empty screen groups before their screens exist.
- **Alternatives:** Create placeholder designs for all nine later groups; flatten the
  project into unnumbered screens; split the design into ten projects.
- **Rationale:** A literal group index plus numbered screen labels preserves the
  approved review order without generating disposable placeholder compositions or
  changing the plan structure.
- **Affected screens:** `00 Cover & brief` and every later Plan 0 screen.
- **Token impact:** None.
- **Accessibility impact:** None; the index is rendered as text and does not rely on
  colour or spatial position alone.
- **Evidence:**
  `projects/15622483747994955838/screens/c9cd34ca116842d298129944eb346faf`.
- **Approval:** This is the execution convention already established by the
  owner-directed Google Stitch migration on 1 August 2026.

## 2026-08-01 — Keep generated people out of approved design authority

- **Decision:** Use a labeled owner-photography placeholder until original photography
  is supplied; generated people are rejected exploration.
- **Context:** The first cover generation produced a generic environmental portrait,
  but the product specification requires original photography and authentic personal
  identity.
- **Alternatives:** Retain the generated person as a temporary hero; omit the
  photography region; use a neutral placeholder.
- **Rationale:** A neutral placeholder preserves the intended composition without
  implying that an invented person represents the portfolio owner.
- **Affected screens:** `00 Cover & brief`; later Home, About, and compact photography
  compositions.
- **Token impact:** None.
- **Accessibility impact:** The placeholder includes visible status and crop
  requirements rather than an empty image region.
- **Evidence:** Authoritative cover
  `projects/15622483747994955838/screens/c9cd34ca116842d298129944eb346faf`;
  rejected image exploration
  `projects/15622483747994955838/screens/f6afc7ad352a47309a9bb07e3a1b272e`.
- **Approval:** Required by the approved product and design authority.

## 2026-08-01 — Split foundations into focused review boards

- **Decision:** Use separate accepted boards for colour tokens and treatments, and for
  shape/stroke and depth/media, instead of forcing every foundation into one long
  generated screen.
- **Context:** Early combined generations omitted required sections, substituted token
  roles, or introduced invented content when too many independent specifications were
  composed at once.
- **Alternatives:** Keep correcting one overloaded board; accept incomplete combined
  screens; reduce the Task 2 scope.
- **Rationale:** Focused boards make exact values, roles, fallbacks, and accessibility
  annotations inspectable without changing the approved task scope or review order.
- **Affected screens:** Accepted `01A`, `01A2`, `01D1`, and `01D2` foundation screens.
- **Token impact:** None. The split changes presentation only.
- **Accessibility impact:** Positive. Focus, semantic-state, reduced-transparency, and
  media-fallback evidence remain explicit instead of being compressed or omitted.
- **Evidence:** Accepted foundations registry in `docs/design/stitch-handoff.md`.
- **Approval:** Required to satisfy the approved Task 2 checklist without accepting
  generator drift.

## 2026-08-01 — Treat Stitch theme aliases as preview internals

- **Decision:** Root `DESIGN.md`, the accepted visible foundation specifications, and
  the accepted-screen registry remain authoritative; Material-style aliases embedded
  by Stitch in generated HTML are not Systems Fieldbook tokens.
- **Context:** The imported design-system asset expands the ten-colour YAML palette
  into generator-specific theme aliases. The connected update operation rejected the
  listed asset payload and bare asset identifier as invalid arguments, leaving the
  version-1 resource unchanged.
- **Alternatives:** Add the generated aliases to `DESIGN.md`; silently accept them as
  new tokens; keep retrying an undocumented mutation contract.
- **Rationale:** Adding tool-generated aliases would weaken the deliberate palette and
  violate the source hierarchy. Stopping after repeated invalid-argument responses
  preserves the working imported asset and makes the limitation explicit.
- **Affected screens:** All generated Stitch screens; especially `01 Foundations`.
- **Token impact:** None. No generated alias is accepted as a token.
- **Accessibility impact:** Accepted boards visibly specify the canonical contrast
  pairings, focus treatment, icon-plus-label semantic states, and readable surfaces.
- **Evidence:** The Task 2 visible-value audit checked 176 requirements with zero
  missing items and zero unexpected visible hex values.
- **Approval:** Execution decision required by the normative source order.

## 2026-08-01 — Archive rejected screens through a numbered registry

- **Decision:** Use `09 Archive — Foundations explorations` as the authoritative list
  of rejected and accepted Task 2 screen IDs.
- **Context:** The connected Stitch API can generate and edit screens but exposes no
  rename, hide, move, or delete operation for superseded screens.
- **Alternatives:** Leave rejection status implicit; treat every same-title screen as
  active; create another project.
- **Rationale:** A numbered, inspectable registry preserves review traceability and
  prevents superseded generations from becoming accidental implementation authority.
- **Affected screens:** All Task 2 explorations and the accepted `01 Foundations`
  screens.
- **Token impact:** None.
- **Accessibility impact:** None; acceptance and rejection reasons are visible text.
- **Evidence:**
  `projects/15622483747994955838/screens/0d7bb43f17c043f78f09e18fa2c03930`.
- **Approval:** Follows the existing cover-as-group-index convention.

## 2026-08-01 — Split the component library into focused review boards

- **Decision:** Represent Task 3 with 20 focused component-inventory boards instead of
  seven overloaded category boards.
- **Context:** Initial category boards omitted required primitives, introduced fake
  portfolio or operational content, added product chrome, or drifted into a light
  theme when too many independent components shared one generation prompt.
- **Alternatives:** Accept incomplete category boards; repeatedly edit the same dense
  boards; reduce the approved component inventory.
- **Rationale:** Boards containing one to six related specimens make every component,
  placeholder, semantic contract, and token annotation inspectable without changing
  Task 3 scope.
- **Affected screens:** The 20 accepted inventory IDs recorded on
  `02H Components — Gate D1 audit`.
- **Token impact:** None. Canonical `DESIGN.md` values remain authoritative.
- **Accessibility impact:** Positive. Component-specific keyboard, focus, touch,
  reduced-motion, heading, and semantic annotations are no longer compressed away.
- **Evidence:**
  `projects/15622483747994955838/screens/e99f4e6d0f0b49139f35a11bd4e91e7b`.
- **Approval:** Required to satisfy the complete approved Task 3 inventory.

## 2026-08-01 — Use explicit state matrices and documented inheritance

- **Decision:** Use 15 state boards for interactive component families, display all
  ten state labels on every board, and show `N/A — not applicable` instead of omitting
  structurally invalid states.
- **Context:** Early combined matrices visibly covered only a subset of their named
  families and silently dropped loading or semantic feedback states.
- **Alternatives:** Treat one partial matrix as representative; duplicate identical
  rows for every named variant; leave inapplicable states undocumented.
- **Rationale:** Explicit N/A cells produce an auditable state contract. Documented
  inheritance avoids redundant matrices while preserving coverage for active
  indicators, reading headers, related-content cards, Connect variants, and code copy.
- **Affected screens:** Accepted `02F1a` through `02G4` state boards named on the Gate
  D1 registry.
- **Token impact:** None.
- **Accessibility impact:** Positive. The accepted matrices record keyboard focus,
  44×44px minimum and 48px standard targets, busy naming, non-colour semantic cues,
  and reduced-motion substitutions.
- **Evidence:**
  `projects/15622483747994955838/screens/e99f4e6d0f0b49139f35a11bd4e91e7b`.
- **Approval:** Required by Task 3 Step 5 and Gate D1.

## 2026-08-01 — Quarantine rejected component explorations by ID

- **Decision:** Only the 35 screen IDs on `02H Components — Gate D1 audit` may inform
  later screen composition; 19 rejected Task 3 screens are non-authoritative.
- **Context:** Stitch exposes no connected screen delete, hide, move, or rename
  operation, and duplicate titles cannot communicate approval status reliably.
- **Alternatives:** Infer the newest screen by title; leave rejected screens
  unclassified; create another project.
- **Rationale:** An ID-level acceptance registry and a separate rejection index make
  design authority deterministic and preserve the audit trail.
- **Affected screens:** All generated `02 Components` explorations.
- **Token impact:** None.
- **Accessibility impact:** None; acceptance and rejection are explicit text.
- **Evidence:** Gate registry
  `projects/15622483747994955838/screens/e99f4e6d0f0b49139f35a11bd4e91e7b`;
  archive registry
  `projects/15622483747994955838/screens/6a0dbf3765b647848abcba80bce60d3b`.
- **Approval:** Recorded by the Gate D1 audit.

## 2026-08-01 — Split low-fidelity flows at inspectable boundaries

- **Decision:** Use 21 focused low-fidelity boards for Task 4 rather than compressing
  all scenes, routes, fallbacks, and audiences into a few multi-frame canvases.
- **Context:** Initial four-frame and three-lane generations cropped Connect, omitted
  journeys, fragmented the Life Notes flow, or rendered an empty board.
- **Alternatives:** Accept incomplete combined boards; reduce Task 4 scope; infer
  missing paths from prompts rather than rendered evidence.
- **Rationale:** One or two scenes per board and one audience per journey preserve the
  complete requirement while making entry, next, back, focus, and compact annotations
  visually inspectable.
- **Affected screens:** The 21 accepted IDs on `03F Low-fi — Gate D2 review`.
- **Token impact:** None. These are schematic compositions using existing tokens.
- **Accessibility impact:** Positive. Focus movement, collection return, compact
  behavior, diagram alternatives, and Connect restoration remain explicit.
- **Evidence:**
  `projects/15622483747994955838/screens/1ecfc38a77294c42aa7eb5bc6fcb59b7`.
- **Approval:** Execution decision required to satisfy Task 4 Steps 1–5.

## 2026-08-01 — Keep low-fidelity content schematic and owner-supplied

- **Decision:** Reject low-fidelity screens that invent dates, project or note titles,
  admin navigation, metrics, or portfolio facts; use owner-supplied placeholders.
- **Context:** Several generated explorations introduced sample years, fake editorial
  content, or generic dashboard/task navigation despite the approved fieldbook scope.
- **Alternatives:** Treat invented content as harmless wireframe filler; allow
  high-fidelity work to decide which content is real; omit content regions entirely.
- **Rationale:** Neutral placeholders preserve layout pressure and information
  architecture without allowing generated details to become accidental product
  requirements or public claims.
- **Affected screens:** All `03 Low-fidelity flows`; especially Experience, note
  previews, Life Notes index, and compact navigation.
- **Token impact:** None.
- **Accessibility impact:** Neutral. Semantic labels, focus destinations, and state
  messages remain visible even where final copy is unavailable.
- **Evidence:** Accepted registry
  `projects/15622483747994955838/screens/1ecfc38a77294c42aa7eb5bc6fcb59b7`;
  rejected registry
  `projects/15622483747994955838/screens/6c30d66009f444d681731b617f6a9419`.
- **Approval:** Required by the source hierarchy and content-safety rules.

## 2026-08-01 — Require the owner decision before passing D2

- **Decision:** Record the low-fidelity structure as audited but keep D2 pending until
  the owner explicitly selects `APPROVE D2` or requests identified changes.
- **Context:** Task 4 Step 6 requires owner approval, and the gate summary states that
  no approval is implied by silence.
- **Alternatives:** Treat a request to begin Task 4 as approval of its later output;
  let the design agent self-approve; begin high-fidelity work while approval is open.
- **Rationale:** Separating production evidence from the owner decision preserves the
  approved gate model and prevents unresolved structural preferences from reaching
  high-fidelity design.
- **Affected screens:** `03F Low-fi — Gate D2 review` and all later Task 5 screens.
- **Token impact:** None.
- **Accessibility impact:** None.
- **Evidence:**
  `projects/15622483747994955838/screens/1ecfc38a77294c42aa7eb5bc6fcb59b7`.
- **Approval:** Superseded by the explicit owner approval recorded on 2 August 2026.

## 2026-08-02 — Pass Gate D2 and clean the active Stitch canvas

- **Decision:** Record Gate D2 as passed and remove every board classified as rejected,
  superseded, exploratory, or obsolete from the active Stitch canvas before Task 5.
- **Context:** The owner explicitly responded `Approved D2.` and then directed that
  boards no longer needed or relevant be deleted before design production continued.
- **Alternatives:** Preserve obsolete boards on the active canvas; postpone cleanup
  until D5; begin Task 5 without recording the owner decision.
- **Rationale:** D2 confirms the low-fidelity structure, while a clean active canvas
  makes the accepted design authority easier to inspect and reduces accidental reuse
  of rejected explorations.
- **Affected screens:** 52 obsolete boards were removed. The active project now lists
  68 screens, with no ID from the cleanup manifest remaining.
- **Recovery:** Four accepted boards were inadvertently removed during duplicate-title
  disambiguation. Their original resources remained retrievable and were used to
  generate faithful replacements in recovery session `16940801839603037374`:
  `1cbbb980e4244288b834ce2302cffe1f` → `63e202a6cff7435c8c31231d8e93b3ea`,
  `4215ca1cb29448aeb7185dc59e6876a3` → `f432a898afa54eb7a737cc0c4a6a1c98`,
  `8d06f77acc854c968977f87555884d18` → `8176af2e44b94b2a96703faa0b573e70`,
  and `974583645c0444f982f40f0336f94187` →
  `0cd7f69383b54addb7ad6f487aaa0eb1`. Pairwise title, device type, width,
  and height checks match.
- **Token impact:** None.
- **Accessibility impact:** None. Accepted state and component coverage is preserved.
- **Evidence:** Gate D2 registry
  `projects/15622483747994955838/screens/1ecfc38a77294c42aa7eb5bc6fcb59b7`,
  final `list_screens` inventory, and the recovery mappings above.
- **Approval:** Explicit owner approval and cleanup direction on 2 August 2026.

## 2026-08-02 — Use a Task 5 registry as the high-fidelity review authority

- **Decision:** Keep related high-fidelity generation batches on shared canvas rows
  and publish `06Z Task 5 — Gate D3 review registry` as the authoritative map from
  functional group to final review-candidate screen ID and canvas coordinate.
- **Context:** Stitch generations produced useful compositions alongside superseded
  variants, and its MCP surface does not provide a reliable screen move, hide, or
  delete operation. Several generated screens also required factual-safety
  replacements after introducing sample content or imagery.
- **Alternatives:** Treat nearby titles as sufficient authority; delete or drag every
  superseded screen through the coordinate-based UI; allow generated sample content
  to stand as harmless filler.
- **Rationale:** An ID-level registry makes the review set deterministic, preserves
  traceability, and prevents invented copy, generated photography, or stale previews
  from becoming implementation authority.
- **Affected screens:** The Task 5 candidate IDs listed in
  `docs/design/stitch-handoff.md`. The temporary registry was removed from the active
  canvas after its evidence was copied into that handoff.
- **Compact limitation:** Stitch retained a 1280×1024 export frame after explicit
  1280×832 resize requests. The compact candidates were reflowed and reviewed for the
  832px above-the-fold target, and the registry exposes the metadata limitation.
- **Token impact:** None. All candidates use the existing Systems Fieldbook design
  system; no recurring visual value was added.
- **Accessibility impact:** Positive. The final candidates preserve visible focus,
  44px controls, diagram text alternatives, and owner-supplied content placeholders.
- **Evidence:** Historical Gate D3 registry
  `projects/15622483747994955838/screens/b3d25437fb5640cf83cdbc4e635906be`
  and the durable screen/position inventory in `docs/design/stitch-handoff.md`.
- **Approval:** Production decision only. Superseded by the explicit Gate D3 approval
  recorded on 9 August 2026.

## 2026-08-03 — Delete non-build screens after every design task

- **Decision:** Treat cleanup as part of design completion. At the end of each task
  and before its gate, preserve rejected or superseded IDs and reasons in repository
  documentation, delete the corresponding Stitch screens, delete obsolete archive or
  review boards, and verify the remaining inventory against an explicit keep manifest.
- **Context:** The owner requires the board to be left with only the screens that will
  inform what is actually built. Persistent explorations and review registries make
  the active authority harder to inspect and increase the risk of implementing stale
  or fabricated content.
- **Alternatives:** Keep a permanent `09 Archive` group; retain all generations for
  visual history; rely on titles or a registry to distinguish final screens.
- **Rationale:** Git-tracked documentation provides durable history without allowing
  obsolete screens to compete with approved implementation authority.
- **Operational rule:** Temporary explorations may exist only while a task is active.
  A gate cannot pass until the keep-manifest comparison reports zero unexplained
  screens. If MCP cannot delete screens, cleanup must use the authenticated Stitch UI;
  inability to delete safely blocks the gate.
- **Task 5 impact:** Completed on 4 August 2026. Thirty rejected, superseded, or
  temporary instances were removed through the Stitch UI, including the Gate D3
  registry. Fresh project retrieval confirmed all 30 as hidden, all 23 keep-manifest
  IDs as visible, and exactly 23 visible Task 5 screens.
- **Token impact:** None.
- **Accessibility impact:** Positive. Reviewers and implementers are less likely to
  select stale screens with incomplete focus, contrast, or content-safety treatment.
- **Evidence:** Active-board cleanliness policy, complete Task 5 delete manifest, and
  verified post-cleanup counts in `docs/design/stitch-handoff.md`, plus the execution
  rule in the Google Stitch production plan.
- **Approval:** Explicit owner direction on 3 August 2026.

## 2026-08-09 — Replace ambiguous Gate D3 exports instead of relying on canvas edits

- **Decision:** Replace the four viewport-ambiguous desktop candidates and the
  canvas-edited Life Note with durable, independently audited Stitch variants. Treat
  canvas-layer edits as non-authoritative unless the retrieved export reflects them.
- **Context:** The Gate D3 audit found that four accepted desktop resources exported
  at 1280×1024 despite the required 1440×1024 composition. It also found that the
  Life Note's retrieved HTML still contained repeated content after a successful
  canvas edit event.
- **Rationale:** Implementation must be grounded in retrievable exports, not transient
  canvas state or handoff assertions. Source-preserving variants produced exact
  viewport evidence and a durable article contract without changing approved content.
- **Affected screens:** The five replacement and ten superseded/rejected screen IDs,
  plus one recovery-only text instance, recorded in the 9 August 2026 correction audit
  in `docs/design/stitch-handoff.md`.
- **Token impact:** None. The canonical Systems Fieldbook palette and existing design
  system remain unchanged.
- **Accessibility impact:** Positive. The final Life Note applies the required focus
  ring to every interactive element and retains 44px targets plus a 48px CTA.
- **Evidence:** Retrieved HTML and screenshots, source-normalized desktop diffs,
  independent audits of all five replacement candidates, and final keep/delete
  reconciliation with zero unexplained Task 5 instances.
- **Approval:** Production correction accepted by the explicit Gate D3 approval on
  9 August 2026.

## 2026-08-09 — Pass Gate D3 and begin responsive design production

- **Decision:** Record Gate D3 as passed and begin Task 6 mobile/tablet recomposition.
- **Context:** The owner explicitly responded `Approve D3` after the final 23-screen
  high-fidelity manifest, correction audit, independent reviews, and clean-board
  reconciliation were presented.
- **Rationale:** The desktop authority is durable, factually safe, independently
  audited, and free of unexplained Task 5 instances. Responsive design can now proceed
  without inheriting the rejected viewport or Life Note exports.
- **Affected screens:** The corrected 23-screen Task 5 keep manifest in
  `docs/design/stitch-handoff.md` and all Task 6 responsive compositions derived from
  it.
- **Token impact:** None.
- **Accessibility impact:** Positive. Task 6 inherits the audited focus, target-size,
  content-safety, and canonical-colour requirements.
- **Evidence:** Gate D3 correction audit, live keep/delete reconciliation, independent
  audits, and the owner's explicit approval on 9 August 2026.
- **Approval:** Explicit owner approval on 9 August 2026.
