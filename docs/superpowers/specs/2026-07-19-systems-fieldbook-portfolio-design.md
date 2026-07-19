# Systems Fieldbook Portfolio — Product Requirements and Design Specification

- **Status:** Approved for implementation planning
- **Date:** 19 July 2026
- **Product:** Personal systems-engineering portfolio
- **Reference:** [James Akpan — Product Engineer](https://jamesakpan.com/)
- **Document type:** Product requirements and design specification

## 1. Executive summary

Systems Fieldbook is a cinematic, writing-led portfolio that positions its owner as a systems engineer with experience across the web and distributed systems.

The site must demonstrate expertise through selected system case studies, Engineering Notes, professional experience, and visible architectural reasoning. It must also document the author's broader journey through a separate Life Notes collection. The result should serve three audiences without becoming three different products:

- Engineering leaders evaluating a systems or platform engineer
- Potential clients looking for a technically credible collaborator
- Technical peers looking for useful writing, architecture insight, and shared experience

The reference site contributes the interaction premise: one memorable visual world, persistent navigation, full-viewport scene changes, oversized typography, restrained colours, personal details, and a theatrical contact experience. Systems Fieldbook will not copy its identity, assets, layouts, wording, or exact effects. It will reinterpret those principles through a distinct systems-engineering visual language.

The primary conversion is **Start a conversation**. Email is the most dependable contact path, with optional calendar booking. The résumé is a secondary action because the work and writing should establish credibility first.

## 2. Product positioning

### 2.1 Core statement

> A systems engineer working across the web and distributed systems—designing reliable software, understanding how its parts interact, and documenting what the work teaches.

### 2.2 Supporting narrative

The portfolio should communicate that the author:

- Thinks in boundaries, dependencies, flows, failure modes, and trade-offs
- Can connect user-facing software to the distributed systems beneath it
- Understands that production engineering includes operations, reliability, security, and maintainability
- Explains complex work clearly to technical and non-technical readers
- Learns in public through technical and personal writing
- Values outcomes and honest retrospectives over technology lists

### 2.3 Primary audiences

#### Engineering leaders

They need a fast view of scope, seniority, ownership, systems operated, outcomes, and decision quality. They should be able to reach a résumé or contact action without reading every detail.

#### Potential clients

They need evidence that the author understands business context, manages ambiguity, ships dependable work, and communicates trade-offs. Case studies must explain problems and outcomes before implementation details.

#### Technical peers

They need architecture depth, useful notes, failure analysis, decision records, and candid lessons. Detailed content should reward exploration without overwhelming the opening experience.

### 2.4 Primary conversion

The dominant CTA is **Start a conversation**.

The contact experience must present:

1. Email
2. Optional calendar booking
3. GitHub and LinkedIn
4. Résumé download as a secondary action

No contact-form backend is required for the first release.

## 3. Goals and non-goals

### 3.1 Product goals

- Establish a memorable systems-engineering identity within the first viewport.
- Demonstrate expertise through three complete system case studies at launch.
- Make Engineering Notes a first-class proof of technical depth.
- Give Life Notes a distinct but related space for documenting general learnings.
- Explain architecture and trade-offs in ways useful to all three audiences.
- Support direct links to every important scene, case study, and note.
- Provide a polished reading experience for long-form content.
- Meet WCAG 2.2 AA and current Core Web Vitals thresholds.
- Remain fast, statically renderable, portable, and maintainable without a CMS.
- Preserve personality through photography, copy, and small personal interactions.

### 3.2 Non-goals

- Recreating jamesakpan.com component for component
- Building a fake terminal or command-line interface
- Presenting a live production observability dashboard
- Publishing confidential system details
- Introducing authentication, accounts, comments, or community features
- Building a general-purpose CMS or diagram editor
- Making visitors wait through an intro sequence
- Using motion as a substitute for content

## 4. Reference-site research

The reference was reviewed across desktop and a 390 × 844 mobile viewport. The review covered Home, Work, Experience, Shelf, the dedicated Shelf index, an article page, Connect, internal panel scrolling, responsive composition, visible metadata, and animation rules.

### 4.1 Effective patterns to retain in principle

- A single full-screen portrait creates strong visual continuity.
- Persistent capsule navigation makes an unconventional interface understandable.
- Hash-addressable scenes produce fast transitions without losing linkability.
- A dark translucent workspace lets dense content coexist with cinematic photography.
- Large display headings give each scene a distinct identity.
- Concise project stories outperform feature inventories.
- Quantified outcomes make work commercially credible.
- Independent editorial routes allow writing to become deeper and calmer than the homepage.
- Personal-photo interactions add humanity without requiring a long biography.
- Contact is treated as a memorable conversion scene rather than a generic footer.
- Mobile is recomposed instead of merely scaled down.

### 4.2 Observed visual system

- Near-black ink background
- Warm cream foreground
- A single luminous yellow accent
- Clash Display for monumental type
- General Sans for interface and prose
- Caveat for handwritten annotations
- Grain, vignette, saturation reduction, contrast, and subtle sepia treatment
- Glass navigation with blur, inner highlights, thin borders, and deep shadow

### 4.3 Observed motion language

- A 2.4-second image settle through scale and exposure
- Masked heading reveal over approximately 1.4 seconds
- Delayed copy fade and rise
- Desktop portrait enlargement and lateral shift when a panel opens
- Mobile portrait scale, blur, darkening, and desaturation when a panel opens
- Shelf arrows that reveal and translate on hover
- Project CTA translation
- Hidden Polaroid memories revealed through opacity, translation, rotation, and scale
- A Connect CTA with perspective tilt, rotating rays, flicker, border light, idle glow, and press depth
- A sticky compact header on article scroll

The dominant easing curve is equivalent to `cubic-bezier(0.19, 1, 0.22, 1)`: a fast initial movement followed by a smooth finish.

### 4.4 Observed technical signals

- Next.js Pages Router
- React
- Static generation for five article records
- Styled JSX and CSS keyframes
- Fontshare-hosted typography
- Vercel Analytics
- No visible requirement for GSAP or a large animation framework

### 4.5 Reference risks to improve

- Independent panel scrolling needs a stronger affordance.
- A single repeated portrait can become visually repetitive.
- Every hover interaction requires touch and keyboard equivalents.
- Contrast must be validated against every responsive image crop.
- Reduced motion must apply to the whole experience, not only isolated scenes.
- The embedded Shelf CTA should be regression-tested against the dedicated Shelf route.
- Initial image and font delivery require explicit performance budgets.

## 5. Design principles

### 5.1 Human on the surface, rigorous underneath

The opening experience should feel approachable and personal. Technical depth appears progressively through case studies, diagrams, and notes.

### 5.2 Outcomes before tools

Project previews begin with the problem, scope, scale, and result. Technologies support the story rather than becoming the story.

### 5.3 Motion communicates state

Animation may explain entry, exit, active state, hierarchy, or system flow. Decorative movement must remain subordinate to reading and navigation.

### 5.4 One visual world

Home, Systems, Experience, both note collections, About, and Connect must feel like parts of the same fieldbook even when their density changes.

### 5.5 Progressive disclosure

Fast readers receive concise summaries. Deep readers can open architecture, decision, reliability, and retrospective detail.

### 5.6 Honest engineering

Case studies include constraints, failures, compromises, and what would change next time. The portfolio must not imply impossible certainty or ownership.

## 6. Information architecture

### 6.1 Primary areas

1. Home
2. Systems
3. Experience
4. Engineering Notes
5. Life Notes
6. About
7. Connect

### 6.2 Public routes

```text
/
├── /systems
│   └── /systems/[slug]
├── /engineering-notes
│   └── /engineering-notes/[slug]
├── /life-notes
│   └── /life-notes/[slug]
├── /experience
├── /about
└── /connect
```

The homepage may use hashes for immediate scene state, while every collection and detailed entry has a real crawlable route.

Recommended scene hashes:

```text
/#home
/#systems
/#experience
/#engineering-notes
/#life-notes
/#about
/#connect
```

### 6.3 Navigation rules

- The primary navigation remains visible on homepage scenes.
- The active scene is visually and semantically indicated.
- Browser back and forward restore the correct scene.
- Direct hash visits open the requested scene without replaying a blocking intro.
- Detailed routes expose a clear path back to the source collection.
- Connect remembers and returns to the preceding scene.
- Mobile navigation may scroll horizontally, but the active destination must remain visible.

## 7. Homepage scenes

### 7.1 Home — opening field note

Purpose: establish identity and invite exploration.

Required content:

- Name
- Systems-engineering positioning statement
- Current focus or availability indicator
- Primary navigation
- Primary Connect CTA
- Optional personal-memory interactions

Required behaviour:

- Full-viewport portrait or environmental image
- Controlled mobile crop
- Oversized responsive name
- Image settle and heading reveal when motion is enabled
- Immediate usable content when reduced motion is enabled
- Deep-link support through `#home`

### 7.2 Systems — selected projects

Purpose: provide the strongest evidence of expertise.

Required content per preview:

- System name
- Problem category
- Outcome-oriented summary
- Role
- Scale indicator
- Three or four technology labels
- `Open field report` CTA

Required behaviour:

- Three featured systems at launch
- Visible panel scroll affordance
- Project rows or cards usable through pointer, keyboard, and touch
- Dedicated case-study route for every preview
- No confidential information in previews

### 7.3 Experience — professional timeline

Required content per role:

- Organisation
- Role
- Dates
- Responsibility summary
- Systems or product areas owned
- One to three impact points
- Technologies and operating environment
- Optional related case study

The timeline prioritises ownership and impact over generic duty lists.

### 7.4 Engineering Notes preview

Purpose: demonstrate technical reasoning and lead into the complete collection.

Required content:

- Four or five recent or featured notes
- Title
- Summary
- Topic
- Publication date
- Reading time
- Link to the complete Engineering Notes index

### 7.5 Life Notes preview

Purpose: document the broader journey without mixing personal and technical taxonomies.

Required content:

- Three or more recent or featured notes
- Title
- Short summary
- Theme
- Publication date
- Reading time
- Link to the complete Life Notes index

### 7.6 About — person behind the systems

Required content:

- Concise biography
- Engineering philosophy
- Current interests and learning areas
- Personal values or principles
- A small selection of personal or working photographs
- Links to Experience, Systems, and Connect

### 7.7 Connect — start a conversation

Required content:

- Email
- Optional calendar link
- GitHub
- LinkedIn
- Résumé download
- Back action

Required behaviour:

- Opens as a focused overlay or dedicated scene
- Preserves the originating scene
- Maintains focus within the open scene
- Returns focus to the triggering control on close
- Email remains visible if booking is unavailable
- Social links have accessible names

## 8. System case-study model

Each launch case study must contain the following sections.

### 8.1 System snapshot

- Name
- One-sentence purpose
- Role
- Period
- Status
- Scale
- Principal technologies

### 8.2 Problem context

Explain who experienced the problem, why it mattered, and which constraints shaped the work.

### 8.3 System boundary

State what the author owned, what depended on external teams or services, and what remained outside scope.

### 8.4 Architecture

Provide an accessible topology diagram for relevant clients, services, databases, queues, caches, external systems, and trust boundaries.

### 8.5 Critical flows

Document one or two important request, event, or data flows step by step.

### 8.6 Engineering decisions

Record meaningful trade-offs such as:

- Consistency versus availability
- Synchronous versus asynchronous processing
- Relational versus document storage
- Build versus buy
- Latency versus operational complexity
- Simplicity versus anticipated scale

### 8.7 Reliability and operations

Where relevant, cover:

- Failure modes
- Timeouts
- Retries
- Idempotency
- Backpressure
- Observability
- Deployment and rollback
- Security boundaries
- Incident lessons

### 8.8 Outcome

Describe business and engineering outcomes using defensible measures such as latency, throughput, uptime, cost, adoption, revenue, deployment frequency, delivery speed, or operational simplicity.

### 8.9 Retrospective

Explain what worked, what did not, and what the author would change with present knowledge.

### 8.10 Related content

Link to Engineering Notes that explain concepts used in the system.

### 8.11 Confidentiality

Sensitive work may use anonymised names, relative measurements, ranges, simplified diagrams, and explicit disclosure boundaries. The site must not publish credentials, private endpoints, proprietary code, customer data, internal incidents, or security-sensitive topology.

## 9. Writing model

### 9.1 Engineering Notes

Suggested topic groups:

- Distributed systems
- Web architecture
- Backend engineering
- Reliability and observability
- Databases and data flow
- Performance
- Infrastructure and delivery
- Engineering practice

Required article features:

- Title and summary
- Publication and update dates
- Reading time
- Topic labels
- Assumed context when relevant
- Table of contents for long pieces
- Syntax-highlighted code
- Architecture and sequence diagrams
- Decision, failure-mode, and operational callouts
- Related systems and notes
- Canonical and social metadata

The index supports lightweight topic filtering. Full-text search is excluded from the first release.

### 9.2 Life Notes

Suggested themes:

- Career
- Growth
- Relationships
- Principles
- Mistakes
- Books
- Observations

Required article features:

- Title and summary
- Publication date
- Reading time
- Theme
- Optional imagery and pull quotes
- Related Life Notes
- Canonical and social metadata

Life Notes use more generous typography and fewer technical interface elements. They remain part of the same visual system.

### 9.3 Launch-content minimum

- Three complete system case studies
- Four Engineering Notes
- Three Life Notes
- Complete professional experience
- Concise About content
- Current résumé
- One professional portrait or environmental hero image
- A small supporting set of personal or working photographs

Draft content must not appear in production indexes, feeds, or metadata.

## 10. Visual system

### 10.1 Character

The visual direction is cinematic, technical, tactile, and personal. It should resemble a carefully maintained fieldbook, not a monitoring dashboard or terminal theme.

### 10.2 Colour tokens

```css
--colour-graphite: #0b0d10;
--colour-paper: #e8e2d3;
--colour-paper-muted: rgba(232, 226, 211, 0.68);
--colour-signal: #79d8e6;
--colour-incident: #ef8354;
--colour-border: rgba(232, 226, 211, 0.14);
```

Signal cyan indicates active state, system flow, and small emphasis. Incident orange is reserved for failure, warning, or retrospective content. Neither accent should become a dominant background colour.

### 10.3 Typography

Recommended roles:

- Bricolage Grotesque for monumental display headings
- Instrument Sans for navigation, prose, summaries, and interface copy
- IBM Plex Mono for system metadata, scale indicators, service names, diagram labels, and dates

The three font families will be self-hosted in the formats and weights required by the design, with their project licences retained in the repository.

Typography rules:

- Display headings use tight tracking and compressed line height.
- Body copy prioritises reading comfort over visual density.
- Mono typography remains a supporting voice and never becomes the body face.
- Articles retain comfortable line length and scale at 200% zoom.

### 10.4 Photography

- Use an original portrait or environmental image.
- Produce desktop and mobile crops intentionally.
- Apply grain, vignette, saturation, and contrast through lightweight treatments.
- Preserve recognisable skin tones and avoid excessive stylisation.
- Verify text contrast against every crop.
- Supporting photographs may appear as pinned field notes or within About and Life Notes.

### 10.5 Systems motif

Each major scene may include a compact contextual readout:

```text
SYSTEMS / 03 SELECTED
EXPERIENCE / PROFESSIONAL TIMELINE
ENGINEERING NOTES / DISTRIBUTED SYSTEMS
LIFE NOTES / FIELD OBSERVATIONS
```

Readouts provide context without simulating a terminal.

## 11. Layout and responsive behaviour

### 11.1 Desktop

- Full-viewport cinematic stage
- Persistent capsule navigation near the top
- Positioning statement near the lower-left
- Oversized name or scene title along the bottom
- Translucent right-side workspace for dense scenes
- Independent workspace scrolling with visible progress and affordance
- Stable background composition during panel navigation

### 11.2 Mobile

- Dedicated mobile portrait crop
- Compact horizontal navigation or bottom command bar
- Controlled two- or three-line display headings
- Workspace occupying most of the viewport
- Stronger background blur and contrast while reading panel content
- Vertical request or event flows instead of wide topology diagrams
- Tap equivalents for every hover interaction
- Stable safe-area spacing

### 11.3 Long-form routes

- Centred readable article column
- Compact sticky reading header after scrolling
- Back path to the source collection
- Responsive media without horizontal page overflow
- Diagram text alternative placed close to the visual

## 12. Motion and interaction

### 12.1 Motion principles

- Motion communicates state and hierarchy.
- Content remains usable before animation completes.
- No animation blocks navigation or reading.
- Page scrolling is native.
- Pointer movement never becomes mandatory input.
- Reduced motion produces the same information and state.

### 12.2 Required motion patterns

- Gentle hero image settle through scale and exposure
- Clipped vertical reveal for primary headings
- Short opacity and translation entrance for supporting copy
- Shared active indicator in primary navigation
- Workspace entrance through opacity, blur, and restrained lateral translation
- Optional flow illumination in system diagrams
- Pinned-photo reveal with pointer, keyboard, and touch support
- Focused Connect scene with restrained physical-depth feedback

### 12.3 Duration guidance

- Micro-interactions: 120–350 ms
- Panel transitions: 450–900 ms
- Initial cinematic settle: no longer than 1.8 seconds
- Ambient loops: slow, subtle, and paused or removed for reduced motion

The reference easing curve may guide the feel, but the implementation will define a project-specific motion token set.

### 12.4 Reduced motion

With `prefers-reduced-motion: reduce`:

- Remove image zoom and blur travel.
- Replace masked travel with immediate or short opacity changes.
- Stop ambient rotation, flicker, parallax, and path sequencing.
- Present architecture diagrams in their final state.
- Preserve focus movement and scene announcements.

## 13. Technical architecture

### 13.1 Recommended stack

- Current stable Next.js App Router
- TypeScript in strict mode
- React Server Components by default
- CSS Modules and global design tokens
- A lightweight React motion library only for coordinated scene transitions
- Local typed MDX for projects and notes
- Static generation for public content
- Vercel hosting and analytics
- `next/image` or the current framework image pipeline
- Playwright for browser coverage
- Automated accessibility checks using Axe or equivalent

### 13.2 Component boundaries

#### `CinematicStage`

Owns the hero image, scrims, grain, scene state, and responsive cropping.

#### `FieldbookNavigation`

Owns navigation state, active indication, focus behaviour, and mobile adaptation.

#### `SceneWorkspace`

Provides the shared panel behaviour for Systems, Experience, and note previews.

#### `SystemCard`

Presents concise, outcome-oriented project previews.

#### `SystemDiagram`

Renders accessible topology and flow visuals.

#### `NoteIndex`

Provides collection layout and lightweight topic filtering.

#### `ArticleLayout`

Provides long-form typography, media treatment, and sticky reading context.

#### `ConnectScene`

Owns contact actions, focus handling, booking, résumé, and social links.

#### `ContentRegistry`

Validates and exposes typed MDX content.

#### `MetadataFactory`

Produces canonical metadata, Open Graph fields, structured data, and social-image inputs.

### 13.3 Rendering policy

- Render public content statically.
- Use Server Components for content and layout by default.
- Limit client components to scene state, navigation, diagrams with interaction, filtering, and Connect behaviour.
- Keep core summaries and links available when JavaScript fails.

### 13.4 Content validation

The build must fail for:

- Invalid required metadata
- Duplicate slugs
- Broken internal content references
- Missing required images
- Invalid publication dates
- Published content that references a draft

External links should be checked in CI with retry-aware validation and an explicit allowlist for temporarily unavailable destinations.

## 14. Content schemas

### 14.1 System case study

Required metadata:

- `slug`
- `title`
- `summary`
- `role`
- `period`
- `status`
- `scale`
- `technologies`
- `featured`
- `order`
- `coverImage`
- `socialImage`
- `relatedNotes`
- `visibility`

### 14.2 Note

Required metadata:

- `collection`
- `slug`
- `title`
- `summary`
- `publishedAt`
- `updatedAt` when materially revised
- `topics` or `theme`
- `readingTime`
- `socialImage`
- `relatedContent`
- `draft`

Schemas must distinguish Engineering Notes from Life Notes so collection-specific metadata cannot leak across types.

## 15. Architecture diagrams

- Diagrams are SVG-based and art-directed.
- Topology maps show relevant boundaries rather than every component.
- Sequence diagrams explain critical requests, events, or data flows.
- Each complex diagram includes a title, description, and nearby text alternative.
- Mobile uses a vertical flow or simplified topology.
- Reduced motion uses a static final state.
- Printing preserves labels and relationships.
- Diagram source is committed with its case study.

A freeform editor and automatic diagram generation are excluded.

## 16. Scene-state model

```text
home → systems → experience → engineering-notes → life-notes → about
  └──────────────────────────────────────────────────────────→ connect
```

State requirements:

- Exactly one primary scene is active.
- Connect is an overlay state with an originating scene.
- Closing Connect restores the originating scene and focus.
- Browser history restores scene state.
- Direct hash visits open the requested scene.
- Each scrollable workspace preserves its position during the active session.
- Scene headings receive programmatic focus after user navigation.
- Reduced-motion users receive immediate or short-fade transitions.

## 17. Accessibility

Target: WCAG 2.2 AA.

Required acceptance conditions:

- Complete keyboard operation
- Visible project-specific focus styles
- Skip-to-content support
- Semantic headings and landmarks
- Accessible scene announcements
- Named icon-only links
- Touch and keyboard alternatives to hover
- Contrast validation over every responsive image crop
- System-wide reduced-motion support
- No flashing, forced smooth scrolling, or pointer-only navigation
- Sufficient touch-target sizing
- Accessible SVG titles, descriptions, and text alternatives
- Reading layouts usable at 200% zoom
- Logical focus order when Connect opens and closes
- Content remains understandable without colour

## 18. Performance

Target field thresholds at the 75th percentile:

- LCP at or below 2.5 seconds
- INP at or below 200 milliseconds
- CLS at or below 0.1

Implementation requirements:

- Responsive modern image formats
- Explicit media dimensions
- Preload only the critical hero image and one necessary font resource
- Lazy-load panel imagery and diagrams
- Keep client JavaScript limited to required interactions
- Avoid runtime animation libraries for simple CSS effects
- Use a compressed reusable grain texture or CSS treatment
- Do not delay content behind animation readiness
- Test constrained mobile networks before release

## 19. SEO and distribution

Required capabilities:

- Canonical URLs
- XML sitemap
- Separate RSS feeds for Engineering Notes and Life Notes
- Open Graph and social metadata
- Stable descriptive titles and summaries
- Robots configuration
- Publication and modification dates
- Social images for Home, case studies, and notes
- `Person` structured data
- `Article` structured data
- `BreadcrumbList` structured data
- Appropriate project-oriented structured data when supported by content

## 20. Analytics and success signals

Analytics must remain lightweight and privacy-conscious.

Track aggregate interactions for:

- System case-study opens
- Engineering Note opens
- Life Note opens
- Topic-filter use
- Email CTA activation
- Calendar CTA activation
- Résumé download
- GitHub and LinkedIn exits

Success is indicated by:

- Visitors reaching detailed systems content rather than stopping at Home
- Sustained reading of Engineering Notes and Life Notes
- Contact actions occurring after project or writing engagement
- Repeat visits to new notes
- Healthy field performance and accessibility metrics

No behavioural replay or invasive tracking is required.

## 21. Error and fallback behaviour

- Unknown routes use a designed fieldbook-style 404 page.
- Missing required content fails in CI.
- Failed optional imagery falls back to a neutral gradient without hiding text.
- Core navigation, summaries, and writing links remain server-rendered.
- Diagrams include readable text alternatives.
- Email remains available if booking is unavailable.
- Invalid hash states fall back to Home and replace the invalid URL state.
- External links open safely with appropriate relationship attributes.

## 22. Verification strategy

### 22.1 Automated checks

- Type checking
- Linting and formatting
- Content-schema validation
- Internal-link validation
- Retry-aware external-link validation
- Unit tests for content and scene-state utilities
- Playwright coverage for every scene and route
- Browser back and forward coverage
- Mobile panel and touch-interaction coverage
- Keyboard-navigation coverage
- Reduced-motion coverage
- Automated accessibility scans
- Desktop and mobile visual regression snapshots
- Performance checks in CI

### 22.2 Manual release checks

- Portrait crops
- Diagram readability
- Article typography
- Real-device touch behaviour
- Social-preview cards
- Résumé download
- Email and calendar actions
- Screen-reader navigation through scene changes
- Confidentiality review for every public system case study

## 23. Delivery phases

### Phase 1 — Foundation

- Design tokens
- Typography
- Routing
- Content schemas
- Metadata
- Static collection and article layouts

### Phase 2 — Core fieldbook

- Cinematic Home
- Scene navigation
- Systems preview
- Experience
- Engineering Notes preview
- Life Notes preview
- Responsive workspaces

### Phase 3 — Depth and personality

- Detailed system case studies
- Accessible architecture diagrams
- About scene
- Personal-photo interactions
- Connect scene
- Sticky article header
- Visual polish

### Phase 4 — Hardening and release

- Accessibility
- Reduced motion
- Performance
- SEO
- Link checking
- Visual regression
- Content and confidentiality review
- Production deployment

## 24. Dependencies and content readiness

Implementation depends on these inputs:

- Self-hosted Bricolage Grotesque, Instrument Sans, and IBM Plex Mono font files
- Original hero photography with desktop and mobile crop options
- Three systems suitable for public case studies
- Defensible outcomes or clearly labelled qualitative results
- Four Engineering Notes
- Three Life Notes
- Complete experience history
- About copy
- Current résumé
- Contact, calendar, GitHub, and LinkedIn destinations

The implementation plan may begin before all prose is final, but production release requires every launch-content minimum to be satisfied.

## 25. Risks and mitigations

### Style over substance

**Risk:** Cinematic presentation obscures technical depth.

**Mitigation:** Keep homepage summaries concise and make case-study depth immediately reachable.

### Repetitive hero composition

**Risk:** One image becomes visually monotonous across scenes.

**Mitigation:** Vary crops, scrims, panel balance, diagram accents, and supporting field-note imagery without changing the core world.

### Unclear panel scrolling

**Risk:** Visitors do not notice independent workspace scrolling.

**Mitigation:** Add visible progress, edge fade, scroll hint, and keyboard support.

### Motion cost

**Risk:** Animation harms performance or accessibility.

**Mitigation:** Prefer CSS, enforce budgets, test reduced motion, and remove nonessential client code.

### Confidentiality

**Risk:** Case studies expose private system details.

**Mitigation:** Require a pre-publication confidentiality review and support anonymised data.

### Content bottleneck

**Risk:** The interface is completed before credible content exists.

**Mitigation:** Treat three case studies and seven launch notes as release dependencies, not optional polish.

### Audience dilution

**Risk:** Serving leaders, clients, and peers creates an unfocused homepage.

**Mitigation:** Use progressive disclosure and one primary positioning statement rather than audience-specific landing pages.

## 26. Explicit first-release exclusions

- CMS
- Authentication
- Comments
- Newsletter infrastructure
- Full-text search service
- Visitor accounts
- Live operational dashboards
- Automatically generated architecture diagrams
- Artificial terminal navigation
- WebGL or 3D rendering
- Complex page-transition framework
- Contact-form backend
- Multiple themes
- Content recommendation engine
- Internationalisation

## 27. Product acceptance criteria

The first release is complete when:

- Home clearly positions the author as a systems engineer across web and distributed systems.
- All seven primary areas are reachable by keyboard, pointer, and touch.
- Direct scene links and browser history work correctly.
- Three complete system case studies are public.
- Four Engineering Notes and three Life Notes are public in separate collections.
- Every case study explains boundary, architecture, decisions, operations, outcome, and retrospective.
- Complex diagrams include accessible alternatives and mobile layouts.
- Connect offers email, optional booking, GitHub, LinkedIn, and résumé download.
- The site meets WCAG 2.2 AA acceptance checks.
- Reduced motion removes nonessential travel, blur, parallax, flicker, and ambient loops.
- Core Web Vitals meet the defined field targets or documented pre-launch lab budgets where field data is not yet available.
- Metadata, sitemap, RSS feeds, and structured data validate.
- Automated and manual release checks pass.
- A confidentiality review approves every public case study.

## 28. Approved decisions

- Product direction: Systems Fieldbook
- Positioning: systems engineer with web and distributed-systems experience
- Audiences: engineering leaders, potential clients, and technical peers
- Primary conversion: Start a conversation
- Writing architecture: separate Engineering Notes and Life Notes
- Visual direction: cinematic fieldbook with systems metadata and accessible diagrams
- Accent direction: signal cyan rather than the reference site's yellow
- Content source: typed local MDX for the first release
- Hosting direction: Vercel
- Release scope: three case studies, four Engineering Notes, and three Life Notes
- CMS, comments, accounts, search service, and contact backend: excluded

## 29. Decisions required before implementation

None. Font licensing, photography selection, public project selection, and content production are execution inputs governed by the requirements above; they do not change the approved product architecture.
