<!-- phoebe header -->

[![Open the live course](https://img.shields.io/badge/%E2%96%B6%20open%20the%20live%20course-1f6feb?style=for-the-badge)](https://phoebefu6.github.io/learn-ai-project-management-with-phoebe/)
[![Star this repo](https://img.shields.io/github/stars/phoebefu6/learn-ai-project-management-with-phoebe?style=for-the-badge&label=star%20this%20repo&color=444444)](https://github.com/phoebefu6/learn-ai-project-management-with-phoebe/stargazers)
[![Free courses](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fphoebefu6.github.io%2Flearn-with-phoebe%2Fstats.json&query=%24.courses_live&label=free%20courses&style=for-the-badge&color=111111)](https://phoebefu6.github.io/learn-with-phoebe/)

### ▶︎ [Open the live course →](https://phoebefu6.github.io/learn-ai-project-management-with-phoebe/)

Free, runs in your browser. No install, no login.

> 📚 Part of **[Learn with Phoebe](https://phoebefu6.github.io/learn-with-phoebe/)** - free, hands-on courses on AI, data, and the craft around them. **[Browse every course ↗](https://phoebefu6.github.io/learn-with-phoebe/)**

<!-- /phoebe header -->

# learn AI + project management with phoebe

Run a real programme with Claude sitting next to you - sixteen 45-minute sessions across two
tracks, all on one running project.

A **leader track** (6 sessions) for heads of delivery, PMO leads and sponsors: what AI actually
changes about delivery, the governed setup, how to review an AI-drafted plan, risk and
escalation, the reporting cadence, and rolling it out to a PMO. A **PM track** (10 sessions) for
PMs, TPMs and delivery leads: the programme workspace, charter, milestone architecture,
dependencies, risk register, the status report (with a live scoring simulator), meetings to
actions, escalations, the connected weekly pack, and a full delivery week as a capstone.

The running project is **Northwind**, a fictional retailer building a governed data platform -
the same case as the by-hand prequel, [learn tech project PMO with
phoebe](https://phoebefu6.github.io/learn-tech-project-pmo-with-phoebe/). Northwind and every
number in it are invented: a generic teaching case, no real company.

## The three rails

- **Context beats prompting.** A weak draft means a missing document, not a weak prompt.
- **The dates come from the team.** AI drafts the structure of a plan, never the commitments.
- **A named human signs it.** Every artifact leaving the workspace has one accountable reader.

## Sessions

**Leader track** - a1 what AI changes about delivery · a2 the governed setup · a3 plans you can
trust · a4 risk, dependencies and escalation · a5 the reporting cadence · a6 rolling it out to a PMO

**PM track** - b1 your programme workspace · b2 mandate to charter · b3 milestone architecture and
WBS · b4 dependencies and critical path · b5 a risk register that maintains itself · b6 the status
report (live simulator) · b7 meetings to actions · b8 stakeholders, escalations and hard messages ·
b9 connect the system · b10 capstone: one full delivery week

Each session ends with a build-along, a 3-question quiz, a sources-covered list, and a cheat sheet.

## The simulator

Session b6 carries `pm-live.js` - a status-report quality simulator. Feed it a messy week of
programme noise and toggle six levers (the RAG rule, owner and date per action, the decision log,
evidence links, the ask, the week-on-week delta) and watch the report score climb from 24 to 100.
A scorecard mode runs five real programme weeks and shows which come out steerco-ready. The
scoring rubric is real; the generated prose is a teaching simulation.

## Run locally

```bash
python3 -m http.server 8652
# open http://localhost:8652
```

Static HTML/CSS/JS, no build step.

Sources: PMI's *Standard for AI in Portfolio, Program and Project Management* (2026), PMBOK Guide 7,
PMI's AI-in-project-management reporting, and Anthropic's product documentation. Coverage and the
deliberate gaps are documented in [materials/official-course-map.md](materials/official-course-map.md).

by Phoebe Fu
