---
version: alpha
name: Systems Fieldbook
description: A cinematic, writing-led portfolio for a systems engineer working across web and distributed systems.
colors:
  primary: "#79D8E6"
  secondary: "#EF8354"
  neutral: "#0B0D10"
  surface: "#12161B"
  surface-raised: "#1A2027"
  on-surface: "#E8E2D3"
  on-surface-muted: "#A19E95"
  success: "#77C593"
  warning: "#F4C95D"
  error: "#F06A6A"
typography:
  headline-display:
    fontFamily: Bricolage Grotesque
    fontSize: 112px
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: -0.055em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 72px
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: -0.045em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: -0.035em
  headline-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: -0.025em
  body-lg:
    fontFamily: Instrument Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.01em
  body-md:
    fontFamily: Instrument Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: Instrument Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-lg:
    fontFamily: Instrument Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.01em
  label-md:
    fontFamily: Instrument Sans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Instrument Sans
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.08em
  mono-md:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.02em
  mono-sm:
    fontFamily: IBM Plex Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.06em
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  none: 0px
  micro: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  xxxl: 48px
  section: 64px
  scene: 96px
  gutter: 24px
  margin: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.lg}"
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.lg}"
    height: 48px
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.lg}"
    height: 48px
  card-system:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card-system-hover:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  metadata-readout:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  badge-incident:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  callout-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  callout-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  callout-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
---

# Systems Fieldbook Design System

This document is the normative visual authority for Systems Fieldbook. The YAML
front matter contains the values design and implementation tools must consume. The
prose explains how to apply those values. It consolidates the approved product
specification and the recurring patterns identified in the portfolio reference
research; isolated reference-site effects are not part of this system.

## Overview

Systems Fieldbook is a cinematic, technical, tactile, and personal portfolio for a
systems engineer working across web and distributed systems. It should feel like a
carefully maintained engineering fieldbook: human and inviting at first glance,
rigorous when opened, and calm enough for sustained reading.

The primary audiences are engineering leaders, potential clients, and technical
peers. The interface should evoke curiosity, confidence, and depth without resembling
a fake terminal, a production dashboard, or a generic developer template.

The visual identity combines five recurring ideas:

- A near-black cinematic stage with warm paper-coloured text.
- Monumental editorial headings paired with restrained technical metadata.
- Translucent workspaces that reveal detailed systems thinking progressively.
- Original photography, subtle grain, and architecture diagrams that keep the work
  both human and concrete.
- Signal cyan for active flow and incident orange for caution, failure, and honest
  retrospectives.

Use the name **Systems Fieldbook** for the product identity. The primary product
statement is: “A systems engineer working across the web and distributed systems.”
The primary action is **Start a conversation**.

## Colors

The palette is intentionally small. Dark neutrals carry most surfaces; warm paper
tones carry content; accents communicate meaning rather than decoration.

- **Primary / Signal (`#79D8E6`):** Active navigation, focus, links, system flow, and
  the single most important action. Do not use it as a large page background.
- **Secondary / Incident (`#EF8354`):** Retrospectives, degraded states, warnings,
  and failure-oriented annotations. It is not a second general CTA colour.
- **Neutral / Graphite (`#0B0D10`):** The root canvas and default text colour on
  light or semantic fills.
- **Surface (`#12161B`):** Standard cards, reading workspaces, inputs, and overlays.
- **Surface raised (`#1A2027`):** Hovered cards, selected panels, menus, and dialogs.
- **On surface / Paper (`#E8E2D3`):** Primary text, keyline highlights, and icons on
  dark surfaces.
- **On surface muted (`#A19E95`):** Secondary copy and metadata. This is the opaque,
  portable equivalent of warm paper at 68% over graphite.
- **Success (`#77C593`):** Confirmed, healthy, or completed system states.
- **Warning (`#F4C95D`):** Caution requiring attention but not failure.
- **Error (`#F06A6A`):** Errors, destructive consequences, and failed validation.

For strokes, use warm paper composited over graphite: `#2A2B2B` for the default
1px keyline and `#40403F` for a strong or hovered keyline. These stroke values are
layout treatments, not additional brand colours. Focus rings are 2px Primary with a
minimum 2px offset. Text placed over photography always needs a tested scrim; never
assume a crop has sufficient contrast.

Semantic colours communicate state alongside an icon and label. Colour must never be
the only carrier of information. Normal text and meaningful icons must meet at least
WCAG AA contrast; aim for 7:1 on sustained reading surfaces.

## Typography

Typography is the product’s strongest visual signature. Use three families with
strictly separated jobs:

- **Bricolage Grotesque:** Display headlines, scene titles, the owner’s name, and
  short editorial statements. Use weights 650–700, tight tracking, and compressed
  leading. Never use it for long paragraphs.
- **Instrument Sans:** Navigation, body copy, buttons, summaries, labels, and all
  long-form reading. Use 400 for prose and 600 for interface emphasis.
- **IBM Plex Mono:** Dates, scale indicators, service names, tags, diagram labels,
  code, and contextual readouts. It is a supporting technical voice, not the default
  body face.

The token sizes are desktop reference sizes. Responsive display headings interpolate
fluidly and preserve their semantic hierarchy: `headline-display` may scale from
56px on compact screens to 112px on wide screens; `headline-lg` may scale from 44px
to 72px. Body sizes do not shrink below their token value.

Article prose uses `body-lg` for introductions and `body-md` for the main text. Keep
measure between 62 and 72 characters. Life Notes may use a slightly wider leading
and more whitespace; Engineering Notes may introduce `mono-md` for technical data,
but both collections retain Instrument Sans for prose.

Use no more than two font weights within one compact component. Use sentence case for
headings and controls. Uppercase is reserved for short mono readouts such as
`SYSTEMS / 03 SELECTED`; it must not be applied to paragraphs.

## Layout

The system uses a 4px base scale with an 8px dominant rhythm. Prefer the named spacing
tokens; arbitrary gaps are exceptions that require a documented optical reason.

Desktop uses a full-viewport cinematic stage with a fixed-max content grid:

- Maximum page width: 1440px.
- Standard content width: 1200px.
- Long-form reading width: 720px.
- Wide technical content and diagrams: 960px.
- Desktop grid: 12 columns, 24px gutters, 32px outer margins.
- Compact grid: 4 columns, 16px gutters, 16px outer margins.
- Primary composition breakpoint: 900px. Below it, side workspaces become stacked or
  near-full-viewport reading surfaces rather than scaled-down desktop panels.

On wide screens, the cinematic identity occupies the stage while dense content sits
in a right-side workspace. The workspace may scroll independently only when it has a
visible scroll hint, edge fade or progress cue, keyboard support, and no scroll trap.
Persistent capsule navigation sits near the top edge and respects safe areas.

On compact screens, use a dedicated image crop, keep important faces and contrast in
the safe area, and allow display headings to wrap to two or three deliberate lines.
Navigation may scroll horizontally if the active destination remains visible. System
flows change from wide topologies to vertical sequences. Minimum interactive target
size is 44×44px; primary buttons use a 48px height.

Vertical page scrolling remains native. Avoid nested scrolling on long-form routes.
Use container queries or fluid rules for reusable components, and use viewport
breakpoints only when the whole composition changes.

## Elevation & Depth

Depth comes primarily from tonal layering, photography, blur, borders, and controlled
overlap—not from heavy floating shadows.

- **Stage (level 0):** Neutral canvas with photography, vignette, and grain.
- **Workspace (level 1):** Surface at 88–94% opacity, 1px default keyline, and
  16–24px backdrop blur where supported.
- **Raised control (level 2):** Surface raised, strong keyline, and a restrained
  `0 12px 40px rgba(0, 0, 0, 0.32)` shadow.
- **Focused overlay (level 3):** Surface raised with a
  `0 24px 80px rgba(0, 0, 0, 0.46)` shadow and a stage scrim.

The navigation capsule may use a soft inner highlight to clarify its glass edge.
Cards remain flat by default and gain tonal contrast before they gain shadow. Grain
is fine, monochromatic, and subtle; it must not make text shimmer or reduce legibility.
When blur is unsupported or reduced-transparency preferences are present, replace it
with a more opaque Surface fill.

## Shapes

The shape language balances engineered structure with a small number of soft,
humanising forms.

- Use `rounded.full` for persistent navigation, pills, compact tags, and primary CTA
  controls.
- Use `rounded.lg` for system cards, reading workspaces, dialogs, and large media.
- Use `rounded.md` for inputs, callouts, code blocks, and compact cards.
- Use `rounded.sm` for metadata readouts and small technical labels.
- Use square or `rounded.xs` geometry for diagram nodes where precise alignment is
  more important than friendliness.

Default strokes are 1px. Active, focused, or selected controls may use a 2px stroke
without changing their outer dimensions. Divider lines should terminate cleanly and
align to the grid. Do not mix unrelated corner radii within one component family.

Organic exceptions are limited to original photographs, hand-positioned field-note
media, and the restrained physical tilt of the Connect interaction. These exceptions
must not alter content order or hit areas.

## Components

All interactive components expose default, hover, focus-visible, active, disabled,
loading, and error states where those states are meaningful. Hover styling is always
paired with keyboard and touch behaviour.

- **Persistent navigation:** A translucent full-radius capsule. It contains the
  product mark and primary destinations, keeps the active item visible, and uses a
  shared Primary indicator. On compact screens it may become a bottom command bar or
  horizontally scrolling top capsule.
- **Buttons:** Primary uses Primary fill with Neutral text. Secondary uses a dark fill,
  1px paper keyline, and On Surface text. Quiet buttons use no permanent fill. Every
  button is at least 44px tall; the standard height is 48px. Use one dominant Primary
  action per view.
- **System cards:** Surface panels with `rounded.lg`, 1px keyline, and 24px padding.
  They lead with problem and outcome, then role, scale, and restrained mono metadata.
  Hover and focus use Surface Raised plus a translated arrow; the entire labelled card
  may be interactive only when it has one destination.
- **Note rows and cards:** Editorial, low-elevation items with title, summary, theme or
  topic, date, and reading time. Engineering Notes may show stronger mono metadata;
  Life Notes use more open spacing and less instrumentation.
- **Badges and readouts:** Full-radius badges are semantic and short. Rectangular mono
  readouts provide context such as collection, count, date, or system scale. Avoid a
  cloud of decorative technology pills.
- **Inputs:** Surface fill, 1px default keyline, `rounded.md`, 12px vertical and 16px
  horizontal padding, and a persistent visible label. Focus uses a 2px Primary ring.
  Errors pair Error colour with explanatory text. Placeholder text is never the label.
- **Checkboxes and radio buttons:** Native semantics with a custom 20px control,
  Primary selected state, visible focus ring, and a minimum 44px labelled hit area.
- **Dialogs and Connect scene:** Focused overlays use level-3 depth, `rounded.lg`, a
  visible close control, focus trapping, Escape support, origin-state restoration, and
  a readable email fallback. Connect may use restrained press depth and perspective,
  but never continuous distracting movement.
- **Tables:** Use only for genuinely relational technical data. Provide a caption,
  left-aligned headers, horizontal overflow containment, 1px row separators, and a
  stacked key/value alternative when compact width makes comparison impossible.
- **Architecture diagrams:** Art-directed accessible SVG. Nodes use structured dark
  surfaces and mono labels; Primary communicates normal flow, Secondary indicates an
  incident or trade-off boundary. Every diagram includes a title, description, nearby
  text alternative, static reduced-motion state, and vertical compact layout.
- **Tooltips:** Supplement visible labels; never contain essential or interactive
  content. They appear on hover and focus, use Surface Raised, and remain dismissible.
- **Reading header:** A compact sticky header appears after article scroll, preserving
  collection context, title, and back navigation without reducing reading width.

Empty, loading, error, and offline states use plain language and preserve the next
available action. Do not invent fake telemetry or project data to make a component
look complete.

## Do's and Don'ts

- **Do** lead with the human problem, system boundary, scale, outcome, and trade-off.
- **Do** use Primary for active flow, focus, links, and one dominant action per view.
- **Do** reserve Secondary for incidents, cautions, and retrospectives.
- **Do** retain warm paper text, dark neutral surfaces, and clear tested contrast.
- **Do** make every scene, case study, and note directly addressable.
- **Do** provide touch, keyboard, reduced-motion, and reduced-transparency equivalents.
- **Do** use original photography and art-directed accessible diagrams.
- **Do** keep Engineering Notes and Life Notes visually related but editorially
  distinct.
- **Don't** copy the reference portfolio’s identity, imagery, wording, or signature
  yellow accent.
- **Don't** imitate a terminal, monitoring dashboard, or live observability console.
- **Don't** use motion as a loading gate or a substitute for hierarchy.
- **Don't** allow more than one independently scrolling panel on a view.
- **Don't** use accents as large decorative backgrounds or colour alone as status.
- **Don't** fill screens with technology badges, fake metrics, or confidential detail.
- **Don't** mix arbitrary radii, shadows, typefaces, or one-off spacing values.
- **Don't** hide navigation, contact details, or article context behind pointer-only
  interactions.

## Iconography & Illustration

Use a consistent outline icon family with simple geometry, rounded joins, and a
1.5–2px stroke at a 24px base size. Icons inherit text colour; Primary is reserved for
active or meaningful states. Pair unfamiliar icons with visible labels and give every
icon-only control an accessible name. Do not use emoji as interface icons.

Illustration is grounded in systems artefacts: topology maps, sequence flows, boundary
boxes, incident annotations, and original photography. Diagram connectors are
orthogonal where practical, arrow direction is explicit, and line crossings are
minimised. Avoid generic isometric server art, stock 3D blobs, neon cyberpunk motifs,
and decorative code screenshots.

Photography uses intentional desktop and compact crops, preserved skin tones, reduced
saturation, gentle contrast, vignette, and subtle grain. Supporting images may appear
as pinned field notes, but their rotation and overlap must remain decorative and must
not obscure reading order.

## Motion & Interaction

Motion explains entry, exit, hierarchy, active state, and system flow. It never delays
access to content.

- Micro feedback: 160–240ms.
- Component state change: 240–350ms.
- Workspace or scene transition: 480–720ms.
- Initial image settle: 1200–1800ms maximum.
- Primary easing: `cubic-bezier(0.19, 1, 0.22, 1)`.
- Exit easing: `cubic-bezier(0.4, 0, 1, 1)`.

The opening image may settle through slight scale and exposure change. Primary
headings may reveal through a clipped vertical mask. Supporting copy enters through a
short opacity and vertical translation. Workspaces enter through opacity, restrained
lateral travel, and optional blur. Diagram paths may illuminate to explain sequence.
Connect may respond with short press depth or perspective.

Avoid ambient motion in reading views. Never require pointer movement, precise timing,
or drag to reach information. Browser back and forward must restore scene state, and
focus must move to the new scene heading after deliberate navigation.

With `prefers-reduced-motion: reduce`, remove image zoom, blur travel, parallax,
rotation, flicker, path sequencing, and ambient loops. Show final states immediately
or with a short opacity change no longer than 120ms. Preserve focus movement and scene
announcements. Reduced motion must not remove information.

## Accessibility

Target WCAG 2.2 AA from the first design review. Paper mockups and implementation must
show visible focus states, keyboard order, 44px targets, safe-area behaviour, and text
alternatives for diagrams. All layouts must remain understandable at 200% zoom and
without colour.

Use one visible `h1` per public route, semantic landmarks, a skip link, descriptive
link text, named icon controls, and logical heading order. Connect traps focus while
open and restores it to its trigger when closed. Sticky headers must not obscure
focused content. Horizontal technical content must not force the page itself to
overflow.

Validate body text at 4.5:1 minimum and large text at 3:1 minimum against every solid
surface and every responsive image crop. Test keyboard, touch, screen-reader scene
changes, forced colours, reduced motion, and reduced transparency before design
approval and again before release.

## AI Generation Guidance

When generating Systems Fieldbook interfaces, begin with the canonical tokens and
components in this document. Prefer a small number of strong, repeatable decisions to
new variants. Generate desktop and compact compositions as related art direction, not
as the same frame scaled down.

Every generated screen must answer three questions: where am I, what evidence is here,
and what can I do next? Preserve the cinematic stage for orientation, move dense
material into a legible workspace or article column, and reveal technical depth
progressively. If a needed value is not defined, choose the nearest named token and
record a proposed design-system change rather than silently creating a one-off.
