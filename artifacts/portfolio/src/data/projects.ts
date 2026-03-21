export interface CaseStudySection {
  id: string;
  label: string;
  heading: string;
  body: string[];
  highlights?: string[];
  quote?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  role: string;
  whatIDid: string;
  timeline: string;
  team: string;
  year: string;
  tags: string[];
  category: string;
  imageUrl: string;
  details: {
    context: string;
    problem: string;
    goals: string[];
    outcome: string;
  };
  caseStudy: CaseStudySection[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "scholar",
    title: "Scholar",
    subtitle: "Research & Learning Platform Redesign",
    shortDescription: "Research & Learning Platform redesign for academia.",
    description: "A comprehensive redesign of a university academic tool aimed at graduate students to streamline their research, citation management, and collaborative learning processes.",
    role: "Lead Product Designer",
    whatIDid: "UX Research, Interaction Design, Design Systems, Accessibility Audit",
    timeline: "6 months",
    team: "2 designers, 4 engineers, 1 PM",
    year: "2023",
    tags: ["UX Research", "Design Systems", "Accessibility"],
    category: "Product",
    imageUrl: `${import.meta.env.BASE_URL}images/project-scholar.png`,
    details: {
      context: "Graduate students were struggling with a fragmented ecosystem of tools provided by the university. They needed a centralized hub.",
      problem: "The legacy system was built in the early 2010s, suffered from severe usability issues, and failed basic WCAG accessibility standards.",
      goals: [
        "Unify 3 distinct tools into one cohesive platform.",
        "Achieve AA WCAG compliance across all core flows.",
        "Establish a scalable design system for future academic tools."
      ],
      outcome: "Increased daily active usage by 45%. Reduced student onboarding time from 2 hours to 15 minutes. The new design system was adopted university-wide."
    },
    caseStudy: [
      {
        id: "overview",
        label: "Overview",
        heading: "Overview",
        body: [
          "Graduate students at a large research university were navigating three separate, siloed tools to manage citations, collaborate on papers, and track research milestones — none of which talked to each other.",
          "Scholar was the initiative to unify these experiences into a single, thoughtfully designed platform that respected how researchers actually work: non-linearly, in bursts, across devices."
        ]
      },
      {
        id: "challenge",
        label: "The Challenge",
        heading: "The Challenge",
        body: [
          "The legacy system was built in the early 2010s and reflected none of the progress in modern UX thinking. Students reported feeling anxious using it — a system supposed to support their most important academic work was actively getting in their way.",
          "Accessibility was a particular failure: the tool didn't meet basic WCAG AA standards, locking out students with visual or motor disabilities."
        ],
        highlights: [
          "70% of users had workarounds for core features",
          "Failed 34 of 48 WCAG AA criteria",
          "Average time-on-task was 3× the industry benchmark"
        ]
      },
      {
        id: "research",
        label: "Research & Approach",
        heading: "Research & Approach",
        body: [
          "I ran contextual inquiry sessions with 12 graduate students across disciplines, shadowing their actual research sessions. I also conducted a full accessibility audit and competitive analysis of tools like Notion, Zotero, and Mendeley.",
          "The core insight: students didn't want another tool — they wanted their existing habits to work better. Our job was to meet them where they were."
        ],
        highlights: [
          "12 contextual inquiry sessions",
          "Full WCAG accessibility audit",
          "Journey mapping across 4 user archetypes"
        ]
      },
      {
        id: "designing",
        label: "Designing the Experience",
        heading: "Designing the Experience",
        body: [
          "I established a new information architecture that collapsed the three tools into a single unified workspace. The navigation was rebuilt around tasks — not tool categories. A student working on a lit review should never have to think about which 'app' they're in.",
          "We introduced a persistent sidebar for active projects, inline citation creation, and a notification system tied directly to collaborator actions."
        ],
        quote: "The best interface is the one that disappears. We wanted Scholar to feel like an extension of how researchers already think."
      },
      {
        id: "iterations",
        label: "Design Iterations",
        heading: "Design Iterations",
        body: [
          "Early prototypes revealed that users were uncertain about the scope of their 'workspace.' We iterated through four rounds of usability testing, progressively refining the navigation, the document editor, and the search experience.",
          "Stakeholder constraints included maintaining compatibility with university authentication systems and preserving institutional branding — which required careful design system work to accommodate both needs without compromising quality."
        ],
        highlights: [
          "4 rounds of moderated usability testing",
          "Redesigned onboarding after round 2 based on first-use confusion",
          "Introduced progressive disclosure for advanced citation features"
        ]
      },
      {
        id: "outcome",
        label: "Outcome & Reflection",
        heading: "Outcome & Reflection",
        body: [
          "Daily active usage increased 45% in the first semester post-launch. Student onboarding time dropped from 2 hours to 15 minutes. The design system I built was adopted university-wide as the foundation for all future digital tools.",
          "Looking back, I'd push harder on the mobile experience earlier. Researchers often have ideas on the go, and we treated mobile as an afterthought until the final sprint. That's the thing I'd change."
        ]
      }
    ]
  },
  {
    id: "2",
    slug: "meridian",
    title: "Meridian",
    subtitle: "Internal Analytics Dashboard for Fintech",
    shortDescription: "Internal analytics dashboard for a fintech team.",
    description: "A dark-mode optimized, high-density data visualization dashboard empowering financial analysts to monitor real-time transaction anomalies.",
    role: "Product Designer",
    whatIDid: "UX Design, Data Visualization, Interaction Design, Component Library",
    timeline: "4 months",
    team: "1 designer, 3 engineers, 1 data scientist",
    year: "2024",
    tags: ["Data Visualization", "Dashboard Design", "Interaction"],
    category: "Systems",
    imageUrl: `${import.meta.env.BASE_URL}images/project-meridian.png`,
    details: {
      context: "A fast-growing fintech startup needed a bespoke internal tool to monitor transaction health and flag potential fraud faster.",
      problem: "Analysts were exporting CSVs and using Excel macros, creating a critical time-delay in fraud detection.",
      goals: [
        "Design high-density but legible data tables.",
        "Create an intuitive querying interface.",
        "Support multi-monitor dark-room environments (Dark Mode default)."
      ],
      outcome: "Decreased anomaly response time by 60%. The interface became the benchmark for all internal tools at the company."
    },
    caseStudy: [
      {
        id: "overview",
        label: "Overview",
        heading: "Overview",
        body: [
          "Meridian is a real-time transaction monitoring dashboard built for a fintech company's fraud and risk team. The goal was to give analysts a single surface to investigate anomalies, flag suspicious patterns, and take action — without ever leaving the tool.",
          "The environment was demanding: analysts worked in dark control rooms across multiple monitors, processing thousands of events per hour."
        ]
      },
      {
        id: "challenge",
        label: "The Challenge",
        heading: "The Challenge",
        body: [
          "The existing workflow relied on exported CSVs opened in Excel, with manual macro scripts that took hours to run. By the time an analyst could act on a flagged transaction, critical windows had already closed.",
          "The challenge wasn't just design — it was changing deeply ingrained habits for people who were extremely skeptical of new tools."
        ],
        highlights: [
          "Average fraud detection lag: 4.5 hours",
          "Analysts juggling 5+ separate tools per session",
          "High cognitive load from context-switching"
        ]
      },
      {
        id: "research",
        label: "Research & Approach",
        heading: "Research & Approach",
        body: [
          "I spent time embedded with the risk team — watching sessions, asking questions, mapping every decision point. The key finding was that analysts had brilliant mental models of fraud patterns; they just couldn't act on them fast enough.",
          "I studied financial terminal design (Bloomberg, Refinitiv) and applied those density principles to a more accessible, modern visual language."
        ],
        highlights: [
          "Embedded sessions with 6 senior analysts",
          "Decision tree mapping of fraud investigation flows",
          "Benchmarking of 8 financial data tools"
        ]
      },
      {
        id: "designing",
        label: "Designing the Experience",
        heading: "Designing the Experience",
        body: [
          "The core design challenge was information density without noise. Every column in every table had to earn its place. I introduced color-coded risk scores, one-click drill-down into transaction chains, and an inline annotation system so analysts could document findings without switching context.",
          "Dark mode wasn't just aesthetic — it was an accessibility and fatigue concern for people staring at screens for 8+ hour shifts."
        ],
        quote: "Density is not the enemy of clarity. But it demands more precision from the designer."
      },
      {
        id: "iterations",
        label: "Design Iterations",
        heading: "Design Iterations",
        body: [
          "The biggest iteration cycle was around the alerting system. Initial designs surfaced too many alerts, causing alarm fatigue. After two rounds of testing, we introduced a priority-tiered alert queue with smart grouping that reduced noise by 80%.",
          "Stakeholder pushback on the dark mode default led to us building a full theming system supporting both — a constraint that ultimately made the product more robust."
        ],
        highlights: [
          "Alert noise reduced 80% through priority tiering",
          "Full light/dark theme system built",
          "Query builder tested across 3 mental model frameworks"
        ]
      },
      {
        id: "outcome",
        label: "Outcome & Reflection",
        heading: "Outcome & Reflection",
        body: [
          "Meridian reduced average fraud detection response time by 60% in the first quarter. It became the internal benchmark for all subsequent tooling at the company.",
          "The project deepened my conviction that internal tools deserve the same design rigor as consumer products. The people using them daily are just as deserving of good design as any end user."
        ]
      }
    ]
  },
  {
    id: "3",
    slug: "canvas-lms",
    title: "Canvas LMS Redesign",
    subtitle: "Rethinking Course Management for Higher Ed",
    shortDescription: "Conceptual redesign of a course management platform.",
    description: "A conceptual exploration aimed at decluttering the ubiquitous Canvas LMS, focusing on student anxiety reduction and clearer information hierarchy.",
    role: "UX Designer",
    whatIDid: "Heuristic Evaluation, Information Architecture, UI Design, Concept Prototyping",
    timeline: "8 months",
    team: "Solo project",
    year: "2022",
    tags: ["Higher Education", "Product Design", "UI"],
    category: "Web",
    imageUrl: `${import.meta.env.BASE_URL}images/project-canvas.png`,
    details: {
      context: "As a widely used platform, Canvas often feels overwhelming. This was a self-initiated project to rethink its core UX.",
      problem: "Students frequently miss deadlines due to buried assignment information and complex navigation structures.",
      goals: [
        "Simplify the global navigation.",
        "Surface actionable, time-sensitive items immediately.",
        "Create a softer, more approachable visual language to reduce cognitive load."
      ],
      outcome: "The concept received over 10k views on Dribbble and sparked conversations with ed-tech product managers about cognitive load in LMS design."
    },
    caseStudy: [
      {
        id: "overview",
        label: "Overview",
        heading: "Overview",
        body: [
          "Canvas LMS is used by millions of students globally, yet consistently generates frustration. This was a self-initiated conceptual redesign exploring what a student-first LMS could look like if built from scratch with modern UX principles.",
          "The focus: reduce the cognitive load that causes students to miss deadlines, feel overwhelmed, and disengage from their coursework."
        ]
      },
      {
        id: "challenge",
        label: "The Challenge",
        heading: "The Challenge",
        body: [
          "Canvas wasn't designed for students — it was designed for administrators and faculty who needed maximum configurability. That flexibility created a system where students couldn't find what they needed without significant effort.",
          "Deadline anxiety, buried notifications, and a navigation structure that prioritized tool categories over tasks were the core pain points."
        ],
        highlights: [
          "67% of students report missing at least one deadline due to LMS confusion",
          "Global nav has 12+ top-level items with no clear hierarchy",
          "Mobile experience was an afterthought in the original design"
        ]
      },
      {
        id: "research",
        label: "Research & Approach",
        heading: "Research & Approach",
        body: [
          "I conducted a full heuristic evaluation against Nielsen's 10 usability principles and ran informal interviews with 20 students across different universities who used Canvas. I also reviewed academic research on cognitive load in educational technology.",
          "The core finding: students have a predictable weekly rhythm. Good design should anticipate that rhythm, not fight it."
        ],
        highlights: [
          "Heuristic evaluation against Nielsen's 10 principles",
          "20 informal student interviews",
          "Review of 8 academic papers on LMS usability"
        ]
      },
      {
        id: "designing",
        label: "Designing the Experience",
        heading: "Designing the Experience",
        body: [
          "The redesign introduced a 'Today' view as the default landing page — a prioritized feed of what actually matters right now: due assignments, unread feedback, upcoming events. Students no longer had to hunt.",
          "The global navigation was collapsed to 4 core items: Home, Courses, Calendar, and Messages. Everything else was accessible but not prominent."
        ],
        quote: "Students don't think in terms of 'tools.' They think in terms of 'what do I need to do today.'"
      },
      {
        id: "iterations",
        label: "Design Iterations",
        heading: "Design Iterations",
        body: [
          "The most contentious iteration was the course page redesign. Faculty-facing constraints meant I had to design a page that worked for both students navigating and instructors building — two very different mental models in the same space.",
          "I introduced a 'student view' toggle that showed exactly what students see, giving instructors the empathy tool they'd been missing."
        ],
        highlights: [
          "'Today' view concept tested with 15 students, 93% preferred it",
          "Introduced student/instructor view toggle",
          "Mobile-first redesign of assignment submission flow"
        ]
      },
      {
        id: "outcome",
        label: "Outcome & Reflection",
        heading: "Outcome & Reflection",
        body: [
          "The concept received over 10k views on Dribbble and sparked direct conversations with ed-tech PMs about cognitive load in LMS design. Several reached out about collaborating on real implementations.",
          "This project was a reminder that some of the most important design problems live in tools people are forced to use — not tools they choose. Those users deserve just as much care."
        ]
      }
    ]
  },
  {
    id: "4",
    slug: "pulse",
    title: "Pulse",
    subtitle: "Experimental Interactive Microsite",
    shortDescription: "Experimental interactive microsite exploring motion.",
    description: "A creative coding and prototyping exercise to push the boundaries of web motion, scroll-triggered animations, and data storytelling.",
    role: "Designer + Prototyper",
    whatIDid: "Concept Development, Motion Design, Creative Coding, Framer Motion",
    timeline: "Ongoing",
    team: "Solo project",
    year: "2024",
    tags: ["Motion Design", "Experimental", "Web GL"],
    category: "Experimental",
    imageUrl: `${import.meta.env.BASE_URL}images/project-pulse.png`,
    details: {
      context: "A playground to test new web technologies, specifically Framer Motion and WebGL integrations.",
      problem: "Traditional web experiences often lack a sense of tangible physical response. How can we make the web feel 'alive'?",
      goals: [
        "Experiment with non-linear scrolling.",
        "Test performance limits of complex SVG/canvas animations.",
        "Create a purely aesthetic experience that evokes emotion."
      ],
      outcome: "Developed a library of reusable animation hooks that I now deploy in commercial client work to add premium polish."
    },
    caseStudy: [
      {
        id: "overview",
        label: "Overview",
        heading: "Overview",
        body: [
          "Pulse is a personal laboratory — an ongoing experimental microsite that explores the boundaries of what interaction design can feel like on the web. No client brief, no constraints, just curiosity.",
          "The core question: can a webpage feel alive? Can scrolling feel physical? Can data have a heartbeat?"
        ]
      },
      {
        id: "challenge",
        label: "The Challenge",
        heading: "The Challenge",
        body: [
          "The challenge with experimental work is staying rigorous. It's easy for 'experimental' to become 'unfocused.' I set a constraint: every interaction had to have a clear emotional intention — delight, surprise, calm, momentum.",
          "Performance was the other constraint. Beautiful animations mean nothing if they drop frames on mid-range devices."
        ],
        highlights: [
          "Target: 60fps on all modern mid-range devices",
          "Each interaction must have a defined emotional intent",
          "All code must be extractable for production use"
        ]
      },
      {
        id: "research",
        label: "Research & Approach",
        heading: "Research & Approach",
        body: [
          "I studied award-winning interactive sites on Awwwards and CSS Design Awards, analyzing not just what they did but why it worked. I drew heavily from physical design — the way objects have weight, momentum, and give resistance.",
          "Disney's 12 principles of animation became a core reference, particularly 'squash and stretch,' 'anticipation,' and 'follow through.'"
        ],
        highlights: [
          "Analysis of 40+ award-winning interactive sites",
          "Study of Disney's 12 animation principles",
          "Performance benchmarking with Chrome DevTools"
        ]
      },
      {
        id: "designing",
        label: "Designing the Experience",
        heading: "Designing the Experience",
        body: [
          "Pulse is organized into 'chapters' — each exploring a different interaction concept. Chapter 1 focused on scroll velocity as a design variable: the faster you scroll, the more the page reacts. Chapter 2 explored magnetic interactions and cursor physics.",
          "Each chapter was built as a self-contained component with its own animation system, then refined until it felt genuinely satisfying to use."
        ],
        quote: "I wanted every interaction to feel like it had weight. Like the page was aware of you."
      },
      {
        id: "iterations",
        label: "Design Iterations",
        heading: "Design Iterations",
        body: [
          "The magnetic cursor effect went through 12 iterations before it felt right — not too sticky, not too loose, with an easing curve that felt physical without being slow.",
          "Performance optimization was a major iteration cycle. WebGL effects that looked stunning on a MacBook Pro were dropping frames on a 2021 Windows laptop. I rebuilt the rendering pipeline three times to hit the performance bar."
        ],
        highlights: [
          "12 iterations on magnetic cursor easing curve",
          "3 rendering pipeline rebuilds for performance",
          "Frame rate testing across 8 device profiles"
        ]
      },
      {
        id: "outcome",
        label: "Outcome & Reflection",
        heading: "Outcome & Reflection",
        body: [
          "Pulse became a direct source of production-ready animation patterns now used in client work. The magnetic button pattern, the scroll-velocity system, and the physics-based spring animations have all shipped in real products.",
          "The bigger lesson: constraints produce better experimental work. The performance requirement forced me to understand the technical foundations deeply enough to design with — not just for — them."
        ]
      }
    ]
  }
];

export const categories = ["All", "Product", "Web", "Systems", "Experimental"];
