# Systems Fieldbook Google Stitch Handoff

- **Status:** Reset for Google Stitch design production
- **Current gate:** D0 pending
- **Reset date:** 1 August 2026
- **Implementation approval:** Not granted; Gate D5 remains pending
- **Design workspace:** Google Stitch MCP
- **Stitch project:** Not created or verified

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

Readiness check on 1 August 2026:

- The Stitch MCP endpoint is registered and enabled.
- The protocol handshake succeeds.
- Tool discovery succeeds.
- The verified catalog exposes project create/list/get, screen
  generate/list/get/edit, variant generation, and design-system
  upload/create/update/list/apply operations.
- Account-scoped `list_projects` currently returns HTTP 401 because a Google OAuth
  credential is not configured.
- Automatic `codex mcp login stitch` cannot complete because the server does not
  support dynamic OAuth client registration.

Task 1 and Gate D0 remain pending until authenticated account-scoped operations work.
No project or screen generation may begin through a substitute design tool.

## Gate record

### D0 — pending

D0 requires a clean `DESIGN.md` validation, authenticated Stitch MCP project access,
a created and inspectable **Systems Fieldbook** project, the complete screen-group
structure, and a cover brief matching both source documents.

### D1–D5 — pending

Later gates retain their original scope and order. None is implied by the design-tool
migration.
