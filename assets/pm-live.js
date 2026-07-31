/* pm-live.js - the status-report quality simulator (learn-ai-project-management-with-phoebe).
   Reusable "watch the number climb" pattern (finance/marketing/brand/leadership/content/law-live family).
   Deterministic, offline, no dependencies. Renders into #pm-live.

   Teaching idea: a PM feeds a week of messy programme noise to Claude and asks for a status
   report. With every lever off, the output is fluent, confident and useless - "good progress,
   a few blockers, status amber" - the report that gets a steerco nodding at nothing. Each lever
   is one thing the PM supplies (the RAG rule, owners and dates, the decision log, evidence links,
   the ask, the week-on-week delta), and the report climbs from 24 to 100. The scoring rubric is
   real; the generated prose is a scripted teaching simulation. */
(function () {
  var host = document.getElementById("pm-live");
  if (!host) return;

  var LEVERS = [
    { id: "rag",        label: "Define the RAG rule",     hint: "what makes it amber, agreed up front", pts: 17 },
    { id: "owners",     label: "Owner + date per action", hint: "one name, one date, no 'the team'",    pts: 17 },
    { id: "decisions",  label: "Attach the decision log", hint: "what was decided, by whom",            pts: 14 },
    { id: "evidence",   label: "Link the evidence",       hint: "ticket ids, dates, the actual number", pts: 13 },
    { id: "escalation", label: "State the ask",           hint: "the decision you need, by when",       pts: 9 },
    { id: "delta",      label: "Show the delta",          hint: "what changed since last week",         pts: 6 }
  ];

  var state = { rag: false, owners: false, decisions: false, evidence: false, escalation: false, delta: false, mode: "live" };

  function score() {
    var s = 24;
    LEVERS.forEach(function (l) { if (state[l.id]) s += l.pts; });
    return Math.min(100, s);
  }
  function passed() {
    return LEVERS.filter(function (l) { return state[l.id]; }).length;
  }

  /* the golden set - five real weeks off the Northwind programme. A week is "steerco-ready"
     only when the report carries what that week actually needed. */
  var WEEKS = [
    { name: "Wk 4 · quiet week",      need: ["rag", "owners"],                                  why: "nothing burning - still needs a rule + owners" },
    { name: "Wk 9 · the ingest slip", need: ["rag", "owners", "delta"],                         why: "a slip is only legible against last week" },
    { name: "Wk 12 · hiring blocked", need: ["rag", "owners", "escalation"],                    why: "blocked = someone must be asked for something" },
    { name: "Wk 15 · steerco week",   need: ["rag", "owners", "decisions", "evidence"],         why: "decisions + evidence or it is opinion" },
    { name: "Wk 18 · recovery plan",  need: ["rag", "owners", "delta", "evidence", "escalation"], why: "a recovery claim must be provable" }
  ];
  function weekOk(w) { return w.need.every(function (k) { return state[k]; }); }
  function ready() { return WEEKS.filter(weekOk).length; }

  function report() {
    var parts = [];

    /* 1 - the headline */
    if (state.rag) {
      parts.push({ warn: false, label: "Status", t: "AMBER, by the rule agreed at kickoff: forecast finish is 2 or more weeks past a gate date, with a credible recovery plan. M3 (raw ingest signed off) now forecasts 24 Aug against a 10 Aug gate - 2 weeks late, recovery plan attached. Not red: no gate is unrecoverable and no scope has been dropped." });
    } else {
      parts.push({ warn: true, label: "Status", t: "Amber. Good progress overall, the team is working hard, a few blockers to work through." });
      parts.push({ warn: true, t: "⚠ Amber by whose rule? With no agreed RAG definition, the colour is the PM's mood. Two people read this and disagree about whether the programme is in trouble - so nobody acts." });
    }

    /* 2 - the movement */
    if (state.delta) {
      parts.push({ warn: false, label: "Change since last week", t: "M3 forecast moved 10 Aug -> 24 Aug (+14 days, first slip on this gate). Open criticals 3 -> 2. Ingest throughput 4 of 9 source systems -> 6 of 9. Risk R-07 (vendor SLA) escalated from medium to high." });
    } else {
      parts.push({ warn: true, label: "Change since last week", t: "Not stated." });
      parts.push({ warn: true, t: "⚠ Without a delta, a 14-day slip reads exactly like a stable plan. Steering committees do not track absolute dates in their heads - they track movement." });
    }

    /* 3 - actions */
    if (state.owners) {
      parts.push({ warn: false, label: "Actions", t: "1) Re-run the failed CDC load on the POS feed - Marcus L., by Fri 8 Aug. 2) Confirm the vendor's revised SLA in writing - Priya N., by Wed 6 Aug. 3) Re-baseline the M3 gate date with the sponsor - Phoebe (PM), at Thu steerco." });
    } else {
      parts.push({ warn: true, label: "Actions", t: "Follow up on the data-quality issue, chase the vendor, and re-plan the milestone." });
      parts.push({ warn: true, t: "⚠ No name, no date. An action owned by 'the team' is owned by nobody, and it arrives at next week's report untouched, reworded." });
    }

    /* 4 - decisions */
    if (state.decisions) {
      parts.push({ warn: false, label: "Decisions taken", t: "D-14 (31 Jul, sponsor): descope real-time POS to nightly batch for M3, revisit at M5 - protects the gate, costs same-day sales visibility. D-15 (30 Jul, data lead): keep the legacy warehouse running in parallel until M4 sign-off." });
    } else {
      parts.push({ warn: true, label: "Decisions taken", t: "Several decisions were made this week to keep things moving." });
      parts.push({ warn: true, t: "⚠ Undocumented decisions get relitigated. In eight weeks nobody remembers who agreed to drop real-time POS, and the argument runs again from zero." });
    }

    /* 5 - evidence */
    if (state.evidence) {
      parts.push({ warn: false, label: "Evidence", t: "Slip: NWD-412 CDC load failed 3 consecutive nights (28-30 Jul). Throughput: 6 of 9 sources landing, 812k rows/night, DQ pass rate 96.4% against a 99% gate. Vendor: ticket VN-2291 open 11 days, no written SLA response." });
    } else {
      parts.push({ warn: true, label: "Evidence", t: "Ingest is mostly working, quality is looking reasonable, the vendor has been slow." });
      parts.push({ warn: true, t: "⚠ 'Mostly' and 'reasonable' are unfalsifiable. Without ticket ids and the actual numbers, an exec cannot tell a 96.4% pass rate from a 60% one - so the report cannot be challenged, and cannot be trusted." });
    }

    /* 6 - the ask */
    if (state.escalation) {
      parts.push({ warn: false, label: "What I need from you", t: "Decision needed at Thu 7 Aug steerco: approve the M3 gate move to 24 Aug, OR fund 2 contract data engineers for 4 weeks to hold 10 Aug (~£38k). If neither lands by 8 Aug, M4 slips with it and the trigger for R-07 fires." });
    } else {
      parts.push({ warn: true, label: "What I need from you", t: "Nothing raised - we will keep pushing and update next week." });
      parts.push({ warn: true, t: "⚠ A status report with no ask is a broadcast. If the PM never names the decision, the escalation happens later, louder, and with less room to fix it." });
    }

    if (score() === 100) {
      parts.push({ warn: false, label: "Verdict", t: "Steerco-ready. A reader who missed the last month can tell what moved, what is true, who is doing what by when, and what you need from them - in under two minutes. You still read it before it goes out: the dates came from the team, not the model." });
    }
    return parts;
  }

  host.innerHTML =
    '<div class="pmw-shell">' +
      '<div class="pmw-controls">' +
        '<div class="pmw-ctitle">Feed the report</div>' +
        '<div class="pmw-q">Input: <b>one week of Northwind programme noise</b> - 40 Slack messages, a ticket export, two half-written meeting notes. Ask: "write the weekly exec status report."</div>' +
        '<div class="pmw-levers"></div>' +
        '<div class="pmw-modes">' +
          '<button type="button" class="pmw-mode pmw-on" data-mode="live">This week\'s report</button>' +
          '<button type="button" class="pmw-mode" data-mode="score">Scorecard · 5 weeks</button>' +
        '</div>' +
      '</div>' +
      '<div class="pmw-stage">' +
        '<div class="pmw-meters">' +
          '<div class="pmw-meter"><span class="pmw-mlabel">Exec report score</span><span class="pmw-mval" id="pmw-score">24</span><div class="pmw-bar"><i id="pmw-bar"></i></div></div>' +
          '<div class="pmw-meter"><span class="pmw-mlabel">Rubric checks passed</span><span class="pmw-mval" id="pmw-checks">0 / 6</span></div>' +
        '</div>' +
        '<div id="pmw-body"></div>' +
        '<p class="pmw-rail">The report prose here is a scripted teaching simulation - a real model words it differently every time. What is real is the rubric: these six checks are what separates a report a steerco can act on from one it can only nod at. And the rule that never moves - the dates come from the team, the model only drafts, a named human signs it.</p>' +
      '</div>' +
    '</div>';

  var leverWrap = host.querySelector(".pmw-levers");
  LEVERS.forEach(function (l) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "pmw-lever";
    b.setAttribute("data-lever", l.id);
    b.innerHTML = '<span class="pmw-sw"></span><span class="pmw-ltext"><b>' + l.label + '</b><span>' + l.hint + '</span></span>';
    b.addEventListener("click", function () { state[l.id] = !state[l.id]; render(); });
    leverWrap.appendChild(b);
  });
  host.querySelectorAll(".pmw-mode").forEach(function (m) {
    m.addEventListener("click", function () { state.mode = m.getAttribute("data-mode"); render(); });
  });

  function render() {
    host.querySelectorAll(".pmw-lever").forEach(function (b) {
      b.classList.toggle("pmw-active", !!state[b.getAttribute("data-lever")]);
    });
    host.querySelectorAll(".pmw-mode").forEach(function (m) {
      m.classList.toggle("pmw-on", m.getAttribute("data-mode") === state.mode);
    });
    var s = score();
    host.querySelector("#pmw-score").textContent = s;
    host.querySelector("#pmw-bar").style.width = s + "%";
    var p = passed();
    var pEl = host.querySelector("#pmw-checks");
    pEl.textContent = p + " / 6";
    pEl.className = "pmw-mval" + (p === 6 ? " pmw-good" : "");

    var body = host.querySelector("#pmw-body");
    if (state.mode === "score") {
      var r = ready();
      var rows = WEEKS.map(function (w) {
        var ok = weekOk(w);
        var missing = w.need.filter(function (k) { return !state[k]; }).map(function (k) {
          return LEVERS.filter(function (l) { return l.id === k; })[0].label.toLowerCase();
        });
        return '<tr class="' + (ok ? "pmw-r-ok" : "pmw-r-no") + '"><td>' + w.name + '</td><td>' +
          (ok ? w.why : "missing: " + missing.join(", ")) + '</td><td class="pmw-rmark">' + (ok ? "✓" : "✗") + '</td></tr>';
      }).join("");
      body.innerHTML =
        '<div class="pmw-scorehead">' + r + ' of 5 weeks come out steerco-ready <b>(' + Math.round((r / 5) * 100) + '%)</b></div>' +
        '<table class="pmw-table"><thead><tr><th>Programme week</th><th>Ready when</th><th>OK?</th></tr></thead><tbody>' + rows + '</tbody></table>' +
        '<p class="pmw-note">Every week needs the RAG rule and owners - those two are the floor. The rest depend on what the week actually was: a slip needs the delta, a block needs the ask, a steerco needs decisions and evidence. Run one lever at a time and watch which weeks flip.</p>';
    } else {
      var d = report();
      body.innerHTML =
        '<div class="pmw-draftlabel">Generated weekly status report · Northwind data platform · week 9</div>' +
        '<div class="pmw-draft">' + d.map(function (x) {
          var lab = x.label ? '<span class="pmw-tag">' + x.label + '</span> ' : '';
          return '<p class="pmw-line' + (x.warn ? " pmw-warn" : "") + '">' + lab + x.t + '</p>';
        }).join("") + '</div>';
    }
  }

  render();
})();
