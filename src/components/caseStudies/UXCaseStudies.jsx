import React from "react";
import "./uxCaseStudies.css";
import BAYAD from "../../assets/bayad.jpg";
import KAIN from "../../assets/kain-everyone.jpg";
import SPEND from "../../assets/spend-master.jpg";
import FRAUD from "../../assets/fraud-master.jpg";
import GALAW from "../../assets/galaw-preview.webp";
import DESENSITIZER from "../../assets/desensitizer-preview.svg";

// Case-study narratives describe observable product features and the decisions
// those flows are designed to support. They intentionally do not claim
// interviews, usability testing, commercial impact, or metrics without evidence.
const caseStudies = [
  {
    number: "01",
    id: "desensitizer-case-study",
    category: "AI governance · Local-first privacy · Experimental",
    title: "Desensitizer & AI Desensitizer",
    subtitle: "Protect identifying details without erasing the rules people need to analyze.",
    image: DESENSITIZER,
    alt: "Synthetic Desensitizer product illustration showing replacement tokens and readable business rules, with no real document data",
    url: "https://github.com/josephvillanueva/Desensitizer",
    linkLabel: "Explore the source",
    status: "Experimental Windows applications. Not an anonymity or compliance guarantee.",
    format: "Source-based product and AI-governance walkthrough",
    audience: "Analysts preparing approved business documents for later AI-assisted review",
    scope: "Privacy workflow · Human review · Local AI orchestration · Document preservation",
    challenge:
      "Removing every number or business term makes a document less useful. Leaving names, company references or contact details in place can expose identifying information. The product has to distinguish those spans while retaining the conditions, quantities and table relationships that explain how the business works.",
    goal:
      "Make document preparation a deliberate local workflow: suggest identifying spans, let the analyst decide, preserve useful context and check the protected copy before it is released. Uploading to a cloud service remains a separate, user-controlled action.",
    flow: [
      "Open an encrypted project",
      "Scan and review locally",
      "Choose Replace, Keep or Review",
      "Validate the protected copy",
      "Retain the project to restore tokens",
    ],
    decisions: [
      {
        title: "Keep sensitive processing local",
        detail:
          "Both applications combine deterministic checks with local detector workers. The base version uses Qwen for contextual review; AI Desensitizer adds NuExtract and Gemma reviewers. More reviewers introduce latency and disagreement, so agreement is not presented as proven accuracy.",
      },
      {
        title: "Preserve context, not identifying spans",
        detail:
          "Replacement tokens and encrypted mapping decisions support later rehydration. The document pipeline aims to retain business rules and native table context, while removing unsupported pictures and embedded content rather than claiming to analyze them.",
      },
      {
        title: "Make uncertainty actionable",
        detail:
          "Replace, Keep and Review states leave the analyst in control. Incomplete checks and detected residue block export. Recovery guidance explains the next step, and a final local safety check does not turn the result into an anonymity certification.",
      },
    ],
    outcome:
      "The implementation demonstrates two offline Windows document-preparation tools, local model orchestration, encrypted project mappings, token restoration and fail-closed export checks. Synthetic benchmarks and regression tests inform iteration; their results are not a measured guarantee for an unseen document or proof of cloud-model parity.",
    next:
      "Evaluate held-out documents for missed identifiers, false positives, alias consistency and business-rule preservation. Validate end-to-end recovery, accessibility, runtime and memory on the intended work laptop, and review model-use and document-handling requirements before organizational distribution.",
  },
  {
    number: "02",
    id: "galaw-case-study",
    category: "Mobile wellness · Adaptive routines · In development",
    title: "Galaw",
    subtitle: "A phone-first routine for training, fasting and life beyond the gym.",
    image: GALAW,
    alt: "Screenshot of Galaw's live Today dashboard with its official logo, green workout panel and dumbbell mascot, weekly activity and fasting overview",
    url: "https://galaw-na.vercel.app/",
    linkLabel: "Explore Galaw",
    status: "Live with guest mode and Google sign-in. Calendar authorization is verified; appointment synchronization and phone flows remain under validation. Push reminders are not configured.",
    format: "Development walkthrough",
    audience: "Adults planning and recording workouts, sports and voluntary fasting on their phones",
    scope: "Mobile interaction design · Adaptive flows · Full-stack implementation",
    challenge:
      "People bring their phones to different gyms, train at home and fit exercise around sports and other commitments. A useful routine has to match the available equipment and time, make logging quick and respect what each person chooses to share.",
    goal:
      "Connect equipment-aware workouts, first-class fasting and OMAD tracking, badminton and imported activity summaries, and group encouragement in a routine people can manage from their phones.",
    flow: [
      "Choose a gym or home profile",
      "Review a manageable workout",
      "Log sets and adjust remaining work",
      "Track fasting or add sports and imports",
      "Choose what to share",
    ],
    decisions: [
      {
        title: "Start with the place and the phone",
        detail:
          "Saved gym and home profiles use searchable equipment choices. Short setup steps and large workout controls keep the phone flow focused. Plans include warm-up, rest and transitions, and only unfinished work changes when time runs short.",
      },
      {
        title: "Give fasting its own place",
        detail:
          "A dedicated fasting area records planned and actual timing, meals and notes, including OMAD. It is part of the main navigation. Ending early is supported without rewarding longer restriction.",
      },
      {
        title: "Let accountability respect boundaries",
        detail:
          "People choose which check-ins to share. Personal training loads stay private, while temporary photos have limited openings and a clear explanation that web screenshots cannot be reliably blocked.",
      },
    ],
    outcome:
      "The live implementation brings together phone-focused workout logging, gym and home equipment profiles, fasting and OMAD records, badminton and other activity logs, CSV import with duplicate review, and community check-ins. Google sign-in and separate Calendar authorization have been verified; appointment synchronization and physical-phone flows still need validation. Push reminders are not configured in production.",
    next:
      "Validate setup and one-handed logging on phones, activity-import review, fasting timer recovery, Google consent and two-way Calendar changes, reminder delivery, offline recovery and community photo permissions before public release.",
  },
  {
    number: "03",
    id: "bayad-case-study",
    category: "Personal finance · Multi-person workflows",
    title: "Bayad",
    subtitle: "Making shared expenses understandable from purchase to payment.",
    image: BAYAD,
    alt: "Bayad expense-sharing application preview",
    url: "https://bayad-na.vercel.app/",
    linkLabel: "Explore Bayad",
    audience: "People sharing bills, expenses, and settlements",
    scope: "Product flow · Interaction design · Full-stack delivery",
    challenge:
      "Splitting an expense is rarely just dividing a total. Item-level shares, discounts, service charges, reimbursements, and payment status can all change what each person owes.",
    goal:
      "Help every participant answer two questions without reconstructing the math: what is my share, and what has actually been paid?",
    flow: [
      "Record an expense",
      "Allocate items and adjustments",
      "Review individual shares",
      "Record or approve payment",
      "Reconcile balances",
    ],
    decisions: [
      {
        title: "Keep calculation and settlement distinct",
        detail:
          "An amount owed is not the same as an amount settled. Separate payment recording and approval make the progression explicit.",
      },
      {
        title: "Preserve the details behind a total",
        detail:
          "Itemized costs, service charges, and discounts are part of the expense model so people can understand where their share came from.",
      },
      {
        title: "Surface changes across participants",
        detail:
          "Shared data and realtime updates keep balances consistent when another person records a payment or changes an expense.",
      },
    ],
    outcome:
      "The application includes itemized expense splitting, payment records and approvals, account tracking, proof storage, reminders, and shared updates.",
    next:
      "Test whether a first-time participant can verify a complex bill and confirm a settlement without asking the expense creator for help.",
  },
  {
    number: "04",
    id: "kain-case-study",
    category: "Team tools · Coordination and fairness",
    title: "Kain @everyone",
    subtitle: "Turning small team rituals into a clearer, shared experience.",
    image: KAIN,
    alt: "Kain at everyone lunch and QR-sharing application preview",
    url: "https://kain-everyone.vercel.app/",
    linkLabel: "Explore Kain @everyone",
    audience: "Workplace teams coordinating lunches and shared QR claims",
    scope: "Interaction flows · State design · Product engineering",
    challenge:
      "A shared lunch plan or one-time QR claim becomes confusing when several people act at once. The interface needs to communicate who has acted and which options are still available.",
    goal:
      "Give team members a quick way to participate while keeping claims, polls, and shared activity reliable.",
    flow: [
      "Share a QR or start a poll",
      "Notify teammates",
      "Claim or vote",
      "Sync shared state",
      "Review activity",
    ],
    decisions: [
      {
        title: "Make one-time actions authoritative",
        detail:
          "An atomic QR claim at the database layer prevents two people from successfully claiming the same item, even when they tap simultaneously.",
      },
      {
        title: "Design around changing group state",
        detail:
          "Realtime updates and an in-app notification inbox reflect new shares and poll changes without requiring a manual refresh.",
      },
      {
        title: "Treat private activity as private",
        detail:
          "Claim history is scoped to the participant, with a defined retention window rather than an indefinitely public activity feed.",
      },
    ],
    outcome:
      "The product connects QR sharing, lunch polls, notifications, private history, and lightweight team games in one experience.",
    next:
      "Observe how first-time users interpret unavailable QRs, poll status, and notifications during a busy lunch period.",
  },
  {
    number: "05",
    id: "spend-case-study",
    category: "Enterprise UX · Decision support",
    title: "Spend Master",
    subtitle: "Helping people move from procurement data to a useful question.",
    image: SPEND,
    alt: "Spend Master procurement analytics dashboard preview",
    url: "https://spend-master-demo.netlify.app/",
    linkLabel: "Explore Spend Master demo",
    audience: "Procurement and business users exploring spend patterns",
    scope: "Information architecture · Dashboard flows · Prototype",
    challenge:
      "A dashboard can show many numbers without helping someone decide where to investigate. Different roles also need different levels of detail.",
    goal:
      "Create a path from an overview of spend to a focused analysis and a clear explanation of the resulting findings.",
    flow: [
      "Open a role-scoped view",
      "Scan spend patterns",
      "Choose an analysis",
      "Review findings",
      "Investigate details",
    ],
    decisions: [
      {
        title: "Use progressive disclosure",
        detail:
          "The dashboard gives an overview first; an analysis wizard provides a separate, more deliberate path into deeper questions.",
      },
      {
        title: "Respect the viewer's data scope",
        detail:
          "Role scoping applies before transactions reach dashboard, analysis, or chat surfaces.",
      },
      {
        title: "Make AI an enhancement, not a dependency",
        detail:
          "Local findings remain available without AI. The optional AI route receives summaries and a limited sample rather than unrestricted raw data.",
      },
    ],
    outcome:
      "A working prototype demonstrates a procurement dashboard, guided analysis, role-scoped data, and optional AI-assisted findings.",
    next:
      "Give users realistic investigation tasks and check whether they can identify the next action, not just interpret a chart.",
  },
  {
    number: "06",
    id: "fraud-case-study",
    category: "Enterprise UX · Explainable review",
    title: "Fraud Master",
    subtitle: "Making a risk signal actionable without hiding the reasoning.",
    image: FRAUD,
    alt: "Fraud Master credit memo risk review interface preview",
    url: "https://fraud-master-demo.netlify.app/",
    linkLabel: "Explore Fraud Master demo",
    audience: "Reviewers triaging credit-memo risk",
    scope: "Decision-support flow · Review states · Prototype",
    challenge:
      "A risk score alone can encourage overconfidence. Reviewers need a usable queue, a clear reason for a flag, and a route to a human decision.",
    goal:
      "Translate risk signals into understandable review priorities while preserving the ability to investigate.",
    flow: [
      "Score a credit memo",
      "Route by review status",
      "Read the reason",
      "Investigate the case",
      "Make a reviewer decision",
    ],
    decisions: [
      {
        title: "Connect scores to review states",
        detail:
          "Rules route generated cases to Investigate, Review, or Straight-through instead of leaving every record as an undifferentiated score.",
      },
      {
        title: "Give explanations a defined place",
        detail:
          "Case-level reasoning accompanies the triage, while optional AI explanations supplement the underlying rules.",
      },
      {
        title: "Reduce unnecessary exposure",
        detail:
          "Case information is masked locally before it is sent to any optional AI proxy.",
      },
    ],
    outcome:
      "The prototype demonstrates rule-based credit-memo scoring, triage queues, case explanations, and privacy-conscious AI assistance.",
    next:
      "Test whether reviewers understand why a case was flagged and can override or investigate a recommendation appropriately.",
  },
];

const UXCaseStudies = () => (
  <section id="case-studies" className="ux_cases" aria-labelledby="ux_cases_title">
    <div className="container ux_cases_header">
      <span className="ux_cases_eyebrow">FEATURED WORK / PRODUCT THINKING</span>
      <h2 id="ux_cases_title">The thinking behind the interface.</h2>
      <p className="ux_cases_intro">
        A product is more than its final screen. These walkthroughs connect the
        user problem, task flow, interaction choices, and what was implemented.
        Where outcomes haven&apos;t been measured, I show what I&apos;d validate next.
      </p>
      <div className="ux_cases_guide" aria-label="How to read these case studies">
        <span>01 / Problem</span>
        <span>02 / User flow</span>
        <span>03 / Design choices</span>
        <span>04 / Next validation</span>
      </div>
    </div>

    <div className="container ux_cases_list">
      {caseStudies.map((study, index) => (
        <details
          className="ux_case"
          id={study.id}
          key={study.id}
          open={index === 0}
        >
          <summary className="ux_case_summary">
            <div className="ux_case_image">
              <img src={study.image} alt={study.alt} loading="lazy" />
              <span className="ux_case_number">{study.number} / {String(caseStudies.length).padStart(2, "0")}</span>
            </div>
            <div className="ux_case_teaser">
              <p className="ux_case_category">{study.category}</p>
              <h3>{study.title}</h3>
              <p className="ux_case_subtitle">{study.subtitle}</p>
              <span className="ux_case_expand">
                <span className="ux_case_read">Read the case study</span>
                <span className="ux_case_chevron" aria-hidden="true">↓</span>
              </span>
            </div>
          </summary>

          <div className="ux_case_body">
            <div className="ux_case_meta" aria-label="Project context">
              <div>
                <span className="ux_case_meta_label">Designed for</span>
                <p>{study.audience}</p>
              </div>
              <div>
                <span className="ux_case_meta_label">Work showcased</span>
                <p>{study.scope}</p>
              </div>
              <div>
                <span className="ux_case_meta_label">Format</span>
                <p>{study.format || "Product and interaction walkthrough"}</p>
              </div>
            </div>

            <div className="ux_case_two_columns">
              <div>
                <h4>01 / The design challenge</h4>
                <p>{study.challenge}</p>
              </div>
              <div>
                <h4>The experience to design</h4>
                <p>{study.goal}</p>
              </div>
            </div>

            <div className="ux_case_flow_block">
              <h4>02 / The main task flow</h4>
              <ol className="ux_case_flow">
                {study.flow.map((step, stepIndex) => (
                  <li key={step}>
                    <span className="ux_case_step_number">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="ux_case_flow_note">
                A simplified interaction map of the current product, not a
                reproduced research artifact.
              </p>
            </div>

            <div className="ux_case_decisions">
              <h4>03 / Decisions and trade-offs</h4>
              <div className="ux_case_decision_grid">
                {study.decisions.map((decision) => (
                  <div className="ux_case_decision" key={decision.title}>
                    <h5>{decision.title}</h5>
                    <p>{decision.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ux_case_two_columns ux_case_conclusion">
              <div>
                <h4>What the product demonstrates</h4>
                <p>{study.outcome}</p>
              </div>
              <div>
                <h4>04 / What I would validate next</h4>
                <p>{study.next}</p>
              </div>
            </div>

            <div className="ux_case_actions">
              {study.url && <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {study.linkLabel} ↗
              </a>}
              {study.status && <p className="ux_case_category">{study.status}</p>}
              <a href="#contact" className="ux_case_contact_link">
                Discuss this project →
              </a>
            </div>
          </div>
        </details>
      ))}
    </div>
    <p className="container ux_cases_note">
      These stories describe implemented experiences and design rationale, not
      unverified research findings or claimed performance improvements.
    </p>
  </section>
);

export default UXCaseStudies;
