# Official course map - learn AI + project management with phoebe

What this course teaches, mapped to the sources it is built from, and what it deliberately does
not cover. Written before the pages, verified against public sources on 2026-07-31.

**Fast-moving warning:** the Claude product surface (Projects, Skills, connectors/MCP, scheduled
tasks, subagents) changes month to month. Re-verify the feature names and limits against
Anthropic's docs and changelog before delivering this course live. The PM discipline half of the
course (charters, gates, RAG, RAID, escalation) is stable.

---

## Source universe

| # | Source | What it anchors | Status |
|---|--------|-----------------|--------|
| S1 | PMI - *The Standard for Artificial Intelligence in Portfolio, Program, and Project Management*, 1st ed. (2026) | 8 principles, 5 performance domains, human-in-the-loop as a value source not a safety net, governance inside GRC | Verified (public summaries; the standard itself is paywalled to PMI members) |
| S2 | PMI - *Artificial Intelligence in Project Management* hub + *Shaping the Future of Project Management with AI* | adoption reality, the practitioner skill gap, where AI lands first in delivery | Verified via public reporting; pmi.org returned 403 to automated fetch, figures cross-checked against secondary coverage |
| S3 | PMBOK Guide 7th ed. - principles + performance domains | the underlying delivery canon: stewardship, planning, uncertainty, measurement | Standard reference, unchanged |
| S4 | Anthropic docs - Claude Projects, Skills, connectors/MCP, subagents, scheduled tasks | the tool half: how the PM workspace is actually built | Verified 2026-07; re-check before delivery |
| S5 | Model Context Protocol spec (2025-11-25, revised 2026-07-28) | what a connector is, what it can and cannot see, auth posture | Verified 2026-07 |
| S6 | `learn-tech-project-pmo-with-phoebe` (the prequel course) | the Northwind running case, charter / milestone / dependency / risk / RACI / tracker artifacts | Internal, live |
| S7 | Public incident + audit reporting on AI-generated work product (fabricated citations, invented figures) | why every artifact needs a named human owner | Verified pattern, not a single source |

### Verified facts used on the pages

- PMI published the first edition of its AI standard in 2026; it is technology-agnostic (names no
  vendors), human-centered, and built on 8 equally weighted principles and 5 performance domains.
- The standard requires "clear structures, roles, authority, and guardrails" inside existing
  governance, and human oversight with real intervention triggers and escalation paths - not
  perfunctory review. This is the source of the course's "a named human signs it" rail.
- Public survey reporting puts AI's practical impact on PM around 47% of respondents, with roughly
  a fifth of project managers claiming good practical AI experience and about half claiming little
  or none. The course quotes the shape of this gap, not a precise decimal.
- The first three places AI lands in delivery teams, consistently: status reporting, task/owner
  suggestions, and early-warning signals on risk and slip. The course builds all three.
- Claude concepts used: a Project as a persistent workspace with its own context; Skills as
  reusable instruction files; connectors/MCP as the bridge to Jira/Notion/Sheets; subagents for
  fan-out; scheduled tasks for recurring runs. Availability varies by plan - stated on the pages.

---

## Coverage by session

✓ = taught to working depth · ◐ = introduced, depth lives elsewhere

### Leader track (6 x 45 min) - heads of delivery, PMO leads, sponsors

| # | Session | S1 | S2 | S3 | S4 | S5 | S6 | S7 |
|---|---------|----|----|----|----|----|----|----|
| a1 | What AI changes about delivery, and what it does not | ✓ | ✓ | ◐ | ◐ | | ◐ | ✓ |
| a2 | The governed setup - context, permissions, what never goes in | ✓ | | | ✓ | ✓ | | ◐ |
| a3 | Plans you can trust - the review rubric for AI-drafted plans | ◐ | | ✓ | ◐ | | ✓ | ✓ |
| a4 | Risk, dependencies, and an escalation you can defend | ✓ | ◐ | ✓ | | | ✓ | |
| a5 | The reporting cadence a machine can maintain | ◐ | ✓ | ✓ | ◐ | | ✓ | |
| a6 | Rolling it out to a PMO - pilot, quality bar, adoption | ✓ | ✓ | | ◐ | | ◐ | ◐ |

### Builder track (10 x 45 min) - PMs, TPMs, delivery leads

| # | Session | S1 | S3 | S4 | S5 | S6 | S7 |
|---|---------|----|----|----|----|----|----|
| b1 | Your programme workspace - Project, context pack, house rules | ◐ | | ✓ | ◐ | ✓ | ✓ |
| b2 | Mandate to charter - a vague email becomes a scoped charter | | ✓ | ◐ | | ✓ | |
| b3 | Milestone architecture and the WBS | | ✓ | ◐ | | ✓ | |
| b4 | Dependencies, gates, and the critical path | | ✓ | ◐ | | ✓ | |
| b5 | A risk register that maintains itself | ✓ | ✓ | ◐ | | ✓ | |
| b6 | **The status report - live simulator** | ◐ | ✓ | ◐ | | ✓ | ✓ |
| b7 | Meetings to actions - decision log and RAID hygiene | ◐ | ✓ | ✓ | | ✓ | ✓ |
| b8 | Stakeholder comms, escalations, and hard messages | ◐ | ✓ | ◐ | | ✓ | |
| b9 | Connect the system - MCP, skills, scheduled runs | | | ✓ | ✓ | ◐ | ◐ |
| b10 | Capstone - one full delivery week, end to end | ✓ | ✓ | ✓ | ◐ | ✓ | ✓ |

The 80% bar: each session teaches roughly 80% of its mapped sources' working content. PMI
certification (PMP, PMI-ACP), the AI standard's full normative text, and Anthropic's own product
training stay with their official providers - the pages say so.

---

## The running project - Northwind, week by week

Reused deliberately from `learn-tech-project-pmo-with-phoebe`, so the same programme can be run by
hand there and with Claude here. Northwind is a fictional retailer; every number is invented.

| Session | Where the programme is |
|---------|------------------------|
| b1 | Week 0 - the mandate email lands, workspace built |
| b2 | Week 1 - charter drafted, priorities and non-goals fixed |
| b3 | Week 2 - M1-M6 laddered with gate criteria |
| b4 | Week 3 - dependency map, the hiring hard gate found |
| b5 | Week 5 - risk register live, R-07 (vendor SLA) opened |
| b6 | Week 9 - the ingest slip; the status report that has to carry it |
| b7 | Week 10 - a messy steerco becomes decisions and actions |
| b8 | Week 12 - the escalation, and the message to the sponsor |
| b9 | Week 14 - the weekly pack runs itself off Jira + Sheets |
| b10 | Week 18 - recovery week, run end to end |

---

## Not covered, by design

- **PMP / PMI-ACP exam preparation.** This is a working course, not exam cramming. PMI's own
  material owns the certification path.
- **A specific PM tool's admin.** Jira, Asana, MS Project, Monday - configuration and licensing
  are the vendor's docs. The course connects to them, it does not administer them.
- **Agile ceremony coaching.** Scrum/SAFe practice is a separate discipline; this course is
  method-neutral and works on the artifacts both worlds still produce.
- **Legal or procurement review of AI vendor terms.** Flagged as a real gate in a2, then handed to
  legal and procurement where it belongs.
- **Autonomous project management.** No session ends with the model deciding, committing a date,
  or sending a message unsupervised. That is a deliberate boundary, not a gap.
- **Model internals.** Why the model produces what it produces is `learn-ai-literacy` and
  `learn-prompt-engineering` territory; this course cross-links rather than repeats.

## Honest coverage note for delivery

Say this out loud in a1 and again in b1: the tool half of this course ages in months, the delivery
half does not. If a feature named here has moved by the time you run it, the exercise still works -
the artifact is the point, the button is not.

by Phoebe Fu
