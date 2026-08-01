# Systems Fieldbook Design Decisions

This log records accepted decisions that affect Google Stitch screen patterns, design
tokens, accessibility, or implementation handoff. Rejected exploration belongs in the
Stitch `09 Archive` screen group.

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
