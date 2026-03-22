export interface CaseStudyImage {
  src?: string;
  alt: string;
  caption?: string;
  aspect?: "video" | "portrait" | "square" | "wide";
  placeholder: string;
}

export interface CaseStudyLink {
  label: string;
  url: string;
  variant?: "button" | "link";
}

export interface CaseStudySection {
  id: string;
  label: string;
  heading: string;
  body: string[];
  highlights?: string[];
  quote?: string;
  images?: CaseStudyImage[];
  links?: CaseStudyLink[];
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
  cardClass: string;
  imageUrl: string;
  details: {
    context: string;
    problem: string;
    goals: string[];
    outcome: string;
  };
  caseStudy: CaseStudySection[];
}

export const categories = ["All", "Product", "Web", "Experience"];

export const projects: Project[] = [
  // ─── 1. UF Program Directory ─────────────────────────────────────────
  {
    id: "1",
    slug: "uf-program-directory",
    title: "UF Program Directory",
    subtitle: "From Information Overload to Guided Discovery: Simplifying 100+ Program Offerings",
    shortDescription: "Redesigning how prospective students discover and compare 100+ academic programs at the University of Florida.",
    description: "The UF College of Education's program directory was a dense, hard-to-navigate list that pushed prospective students away. I redesigned the IA, built a smart filtering system, and shipped it end-to-end as both designer and developer.",
    role: "Web Designer & Developer",
    whatIDid: "Information Architecture, UX Design, Front-End Development, CMS/PHP",
    timeline: "3 months",
    team: "Solo — design + development",
    year: "2024",
    tags: ["Information Architecture", "Web Design", "Higher Ed", "Accessibility"],
    category: "Web",
    cardClass: "project-card-uf",
    imageUrl: `${import.meta.env.BASE_URL}images/project-uf.gif`,
    details: {
      context: "University of Florida's College of Education needed a way for prospective students to explore and compare its 100+ graduate and undergraduate programs.",
      problem: "The existing directory was a flat, unfiltered list of programs with no way to narrow by degree type, interest area, or delivery format. Bounce rates were high.",
      goals: [
        "Build a filtering system allowing users to find programs by degree level, modality, and subject area.",
        "Reduce time-to-discovery for prospective students.",
        "Create reusable WordPress/PHP templates maintainable by non-technical staff.",
        "Meet WCAG 2.1 AA accessibility standards throughout.",
      ],
      outcome: "Shipped a fully functional, filterable program directory used across the College of Education, with reusable CMS templates adopted for 5+ additional grant websites.",
    },
    caseStudy: [
      {
        id: "overview",
        label: "Overview",
        heading: "The Program Discovery Problem",
        body: [
          "Prospective graduate students arrive at a university website with a goal: find the right program for their career. At UF's College of Education, that process was broken. The existing directory was a wall of text — 100+ programs listed alphabetically with no way to filter, compare, or explore.",
          "I took on this project as designer and developer, owning everything from initial research and wireframes to building the production WordPress solution.",
        ],
        images: [
          {
            alt: "UF Program Directory — before and after comparison",
            caption: "Before: a flat alphabetical list with no filtering. After: a faceted directory with smart discovery.",
            aspect: "wide",
            placeholder: "Before/after comparison: old flat list vs. new filterable directory with card-based layout",
          },
        ],
      },
      {
        id: "research",
        label: "Research",
        heading: "Understanding How Students Search",
        body: [
          "I conducted informal interviews with prospective and current graduate students, supplemented by reviewing support ticket themes and analytics data. The patterns were clear: students arrived knowing their interest area but not knowing what degree type fit their goals.",
          "Most users didn't scroll past the first screen of results. The flat list failed the majority of visitors before they even engaged.",
        ],
        highlights: [
          "Most-used filter parameters: modality (online vs. in-person), degree level (master's, doctoral, certificate), and interest area",
          "High bounce rate traced to lack of filtering — users felt overwhelmed by volume",
          "Students often left the site to use Google to find the same programs",
          "Non-technical staff needed to update content without developer help",
        ],
        images: [
          {
            alt: "User flow diagram and key filter mental models",
            caption: "Key mental models driving the filtering system — aligned to how students actually think about programs.",
            aspect: "video",
            placeholder: "User flow and filter mental model map: degree level → modality → interest area",
          },
        ],
      },
      {
        id: "ia",
        label: "Information Architecture",
        heading: "Building a Filterable Structure",
        body: [
          "The core design decision was moving from a list to a card-based directory with layered filters. Programs were tagged across three dimensions: degree level, delivery modality, and subject area. Users could apply any combination of these to narrow results in real time.",
          "I defined the content model first — what data each program card needed, how it would be stored in the CMS, and how filters would map to those fields. This shaped both the design and the technical architecture.",
        ],
        highlights: [
          "Faceted filtering: 3 independent filter dimensions, combinable",
          "Consistent card structure: program name, degree, modality badge, CTA",
          "Results count dynamically updated as filters applied",
          "Empty state designed to guide users rather than dead-end them",
        ],
        images: [
          {
            alt: "IA diagram and content model for program cards",
            caption: "Content model driving the card layout and CMS structure.",
            aspect: "video",
            placeholder: "IA diagram: filter taxonomy tree + content model fields for each program card",
          },
          {
            alt: "Wireframes for filter panel and program card grid",
            caption: "Early wireframes exploring filter placement — sidebar vs. top bar.",
            aspect: "wide",
            placeholder: "Wireframe explorations: top-bar filter layout vs. sidebar — with card grid below",
          },
        ],
      },
      {
        id: "design",
        label: "Design",
        heading: "Designing for Clarity and Trust",
        body: [
          "The visual design needed to feel trustworthy and institution-appropriate while still being warm and approachable for prospective students making a major life decision. I used the UF brand system as a foundation, extending it with clearer typographic hierarchy and accessible color contrast.",
          "Each program card surfaces the most decision-relevant information: degree level, delivery format, and department — reducing the need to click into a page just to screen a program.",
        ],
        quote: "A prospective student shouldn't have to work hard to find the program that could change their career. That's a failure of the interface, not the student.",
        images: [
          {
            alt: "Final program directory design with filters active",
            caption: "Final filtered state — degree, modality, and subject filters active simultaneously.",
            aspect: "video",
            placeholder: "Final UI: program directory with active filters — card grid showing filtered results with modality and level badges",
          },
        ],
      },
      {
        id: "development",
        label: "Build & Delivery",
        heading: "Designing and Building It Myself",
        body: [
          "With the design approved, I moved into development — building the filtering system in JavaScript (jQuery), connecting it to a WordPress/PHP backend with custom post types and taxonomy fields. The filters query the CMS in real time without page reloads.",
          "I also built a set of reusable PHP page templates that non-technical staff could use to create new program pages and update content directly in the WordPress admin. The same template system was subsequently adopted for 5+ additional grant websites across the college.",
        ],
        highlights: [
          "Vanilla JS / jQuery filtering — no React, no heavy bundle",
          "Custom WordPress post type: `uf_program` with ACF taxonomy fields",
          "PHP template system usable without code changes",
          "WCAG 2.1 AA accessible: keyboard nav, ARIA labels, color contrast checked",
          "Deployed to production — in use by the UF College of Education",
        ],
        images: [
          {
            alt: "Code snippet showing PHP template and JavaScript filter logic",
            caption: "Reusable PHP template pattern — designed for maintainability by non-developers.",
            aspect: "wide",
            placeholder: "Code walkthrough: PHP template structure and JS filter logic side by side",
          },
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        heading: "Shipped, Used, and Reused",
        body: [
          "The redesigned directory launched within the project timeline and has been in use since. The reusable template system was adopted beyond the original brief — staff used it to spin up 5 additional grant sites without developer involvement.",
          "The most meaningful outcome: prospective students can now find a program that fits their life in under two minutes, instead of leaving the site in frustration.",
        ],
        highlights: [
          "Filterable directory live on UF College of Education website",
          "5+ additional sites built using the same reusable template system",
          "Accessibility audit passed: WCAG 2.1 AA compliant",
          "Staff autonomy — non-developers can create and update program pages",
        ],
      },
    ],
  },

  // ─── 2. Tapply Tutorial System ───────────────────────────────────────
  {
    id: "2",
    slug: "tapply",
    title: "Tapply",
    subtitle: "Boosting First-Time User Engagement: Building Tapply's Tutorial System",
    shortDescription: "Designing an onboarding and tutorial system that gets new users to their first success — fast.",
    description: "Tapply needed a way to get first-time users engaged before they churned. I designed the complete tutorial system from scratch — from onboarding flow to interactive tooltips to the design system components powering it all.",
    role: "UI/UX Designer",
    whatIDid: "Onboarding UX, Tutorial Flow Design, Design System Components, Prototyping",
    timeline: "6 months",
    team: "1 designer (me), 2 engineers, 1 PM",
    year: "2023",
    tags: ["Product Design", "Onboarding", "Design Systems", "Prototyping"],
    category: "Product",
    cardClass: "project-card-tapply",
    imageUrl: `${import.meta.env.BASE_URL}images/project-tapply.jpg`,
    details: {
      context: "Tapply was growing its user base but seeing high churn among first-time users who never reached their 'aha moment' with the product.",
      problem: "New users landed in a feature-rich product with no guidance, got overwhelmed, and left — often within the first session.",
      goals: [
        "Design an onboarding flow that walks users through core actions without feeling like a mandatory tutorial.",
        "Build interactive tooltip and spotlight patterns reusable across the product.",
        "Establish design system components for the tutorial system.",
        "Reduce first-session incompletion rate.",
      ],
      outcome: "Tutorial templates and design system components shipped. Onboarding patterns adopted product-wide.",
    },
    caseStudy: [
      {
        id: "overview",
        label: "Overview",
        heading: "Onboarding as a Design Problem",
        body: [
          "First impressions in software are everything. When a new user opens Tapply for the first time, they're making a rapid judgment: Is this worth my time? Tapply's data said the answer was often no — users were leaving before completing their first meaningful action.",
          "I joined the team as the sole designer with a clear mandate: design a tutorial system that gets users to their first success, without making the onboarding feel like homework.",
        ],
        images: [
          {
            alt: "Tapply tutorial system overview — onboarding flow and tooltip components",
            caption: "The complete tutorial system: progressive onboarding, contextual tooltips, and milestone celebrations.",
            aspect: "wide",
            placeholder: "Overview: onboarding flow diagram showing step-by-step progression from empty state to first success",
          },
        ],
      },
      {
        id: "research",
        label: "Research",
        heading: "Finding the Drop-Off Points",
        body: [
          "I audited the existing first-run experience and mapped it against analytics data to find exactly where users were leaving. I also reviewed session recordings of first-time users and ran short interviews with recent sign-ups who hadn't engaged after day one.",
          "The clearest finding: users didn't know what to do first. The product had a powerful feature set but no clear entry point. The empty state was a dead end.",
        ],
        highlights: [
          "Primary drop-off: 68% of users who hit the empty state never created their first item",
          "Users cited 'not knowing where to start' as the top reason for leaving",
          "Session recordings showed users opening and closing menus without taking action",
          "Competitor onboarding audit: Notion, Linear, and Figma all use progressive disclosure",
        ],
        images: [
          {
            alt: "Drop-off funnel analysis and session recording insights",
            caption: "Annotated drop-off funnel — identifying the empty state as the critical intervention point.",
            aspect: "video",
            placeholder: "Funnel chart: user drop-off at each step with annotations on key exit points",
          },
        ],
      },
      {
        id: "design",
        label: "Design",
        heading: "Progressive Guidance, Not Mandatory Tutorials",
        body: [
          "The core design principle: guidance should feel helpful, not intrusive. I rejected a traditional 'linear tutorial' in favor of a progressive disclosure model — surfacing the right tip at the right moment based on what the user was trying to do.",
          "I designed three layers of guidance: an interactive checklist for setup tasks, contextual tooltips triggered by user actions, and celebration moments when users hit key milestones. Together they created a scaffolded path without forcing a specific sequence.",
        ],
        quote: "The goal wasn't to teach users how to use the product. It was to help them see what they could do with it — as quickly as possible.",
        images: [
          {
            alt: "Tutorial system UX patterns — checklist, tooltips, and celebrations",
            caption: "Three guidance layers: setup checklist (persistent), contextual tooltips (triggered), milestone celebrations (momentary).",
            aspect: "video",
            placeholder: "Three-layer tutorial system: checklist panel, tooltip overlay, celebration animation — shown in context",
          },
          {
            alt: "Tooltip and spotlight component variants",
            caption: "Tooltip variants — standard, spotlight, and action-required — designed for reuse across the product.",
            aspect: "wide",
            placeholder: "Component library: tooltip variants with arrows, spotlight masks, and CTA button states",
          },
        ],
      },
      {
        id: "design-system",
        label: "Design System",
        heading: "Building Reusable Components",
        body: [
          "The tutorial system needed more than one-off screens — it needed a component library that engineers could implement consistently and that future designers could extend. I built a set of tutorial UI components in Figma with clearly documented variants, states, and usage guidelines.",
          "Components included: tooltip/popover, spotlight overlay, progress indicator, checklist item, and empty state. Each component was designed with accessibility in mind — keyboard navigable, screen reader labeled, and high-contrast by default.",
        ],
        highlights: [
          "6 core components built in Figma with documented variants and states",
          "Tooltip component: 4 directions × 3 types (info, action-required, celebration)",
          "Spotlight overlay with configurable cutout shape (rect, circle, rounded rect)",
          "All components keyboard navigable, ARIA-labeled, and WCAG AA contrast compliant",
        ],
        images: [
          {
            alt: "Design system component documentation for tutorial system",
            caption: "Component doc page for the Tooltip — variants, states, spacing specs, and usage guidance.",
            aspect: "video",
            placeholder: "Figma component page: tooltip component with variant matrix, do/don't examples, and spec annotations",
          },
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        heading: "Getting Users to 'I Get It'",
        body: [
          "The tutorial system shipped to production within the project timeline. The design patterns I established were adopted as the standard for new feature introductions across the product, giving the team a reusable framework rather than one-off solutions.",
          "The empty state redesign — guided by the checklist component — became the foundation for Tapply's entire onboarding experience.",
        ],
        highlights: [
          "Tutorial system shipped and adopted product-wide",
          "Design system components reused for new feature launches",
          "Empty state redesign became the template for new user onboarding",
          "Previous role at PicCollage: tutorial templates reduced first-user incompletion by 23%",
        ],
      },
    ],
  },

  // ─── 3. New Worlds Reading AR ─────────────────────────────────────────
  {
    id: "3",
    slug: "new-worlds-reading",
    title: "New Worlds Reading AR",
    subtitle: "Designing an Augmented Reality Learning Experience for Early Readers",
    shortDescription: "An AR-powered reading expedition experience that brings books to life for K–5 students.",
    description: "New Worlds Reading is a state literacy initiative at the University of Florida. The AR Expeditions feature was a bold new direction — bringing augmented reality into early childhood literacy in a way that was accessible, joyful, and educationally grounded.",
    role: "UX/UI Designer",
    whatIDid: "Experience Design, Interaction Design, UI Design",
    timeline: "5 months",
    team: "1 designer (me), 3 engineers, 1 literacy researcher, 1 PM",
    year: "2024",
    tags: ["AR Design", "EdTech", "Interaction Design"],
    category: "Experience",
    cardClass: "project-card-ar",
    imageUrl: `${import.meta.env.BASE_URL}images/project-ar.jpg`,
    details: {
      context: "New Worlds Reading — a state-funded literacy initiative — wanted to explore augmented reality as a way to increase engagement with books for K–5 students, particularly in underserved communities.",
      problem: "How do you design an AR experience that's magical and engaging for a 7-year-old, while remaining accessible across a range of devices, literacy levels, and tech comfort levels in households?",
      goals: [
        "Design an AR experience that meaningfully extends book reading, rather than distracting from it.",
        "Ensure the experience is accessible to students across device types and abilities.",
        "Create interaction patterns simple enough for young children to use independently.",
        "Ground design decisions in literacy research and educator feedback.",
      ],
      outcome: "AR Expeditions shipped as a feature within the New Worlds Reading app, reaching students across Florida through the state literacy program.",
    },
    caseStudy: [
      {
        id: "overview",
        label: "Overview",
        heading: "Books That Come to Life",
        body: [
          "New Worlds Reading is a Florida state literacy initiative that provides free books and digital resources to K–5 students. When the team approached me about AR Expeditions, the concept was exciting but the design challenge was significant: augmented reality for young children, across a range of devices, in service of literacy goals.",
          "I was the sole designer on this feature, working closely with engineers, a literacy researcher, and the program's education team.",
        ],
        images: [
          {
            src: `${import.meta.env.BASE_URL}images/ar/ar-02.png`, 
            alt: "AR Expeditions feature — child interacting with augmented reality book scene",
            caption: "AR Expeditions: interactive 3D scenes that extend the world of each book.",
            aspect: "wide",
            placeholder: "Hero illustration: child holding phone showing AR scene overlaid on book — characters and objects from the story appearing in their living room",
          },
        ],
        links: [
            { label: "View Demo", url: "https://player.vimeo.com/video/1066629586?h=68048087d2&dnt=1&app_id=122963", variant: "button" },
        ]

      },
      {
        id: "research",
        label: "The Challenge",
        heading: "How do we design an interface that encourages reading without overwhelming kids who struggle with reading?",
        body: [
          "The paradox at the heart of AR Expeditions",
          "We're building an app to motivate reluctant readers, but every piece of text on screen is a potential barrier.",
        ],
        highlights: [
          "Tested with students ages 6–9 across 3 literacy levels",
          "Device range: iPhone 12 to 4-year-old mid-range Android",
          "Students could operate the AR camera feature independently — but needed audio cues, not text instructions",
          "Caregivers needed to feel the AR feature was safe, not a distraction from reading",
        ],
        images: [
          {
            alt: "Research session photos and key insights from child testing",
            caption: "Key findings from research sessions — what confused young users, what delighted them.",
            aspect: "video",
            placeholder: "Research artifacts: observation notes, key quotes from kids, caregiver feedback themes, and device test results",
          },
        ],
      },
      {
        id: "design",
        label: "Design",
        heading: "Interaction Design for Tiny Hands",
        body: [
          "The core interaction model needed to be simple enough for a first-grader to use without help. I landed on a scan-and-discover pattern: students point the camera at a special page in their book, the AR scene appears, and they explore it by tapping characters and objects that trigger audio and animation.",
          "Text instructions were replaced with illustrated animated guides. All critical interactions were triggered by large, forgiving tap targets (minimum 64×64pt). I also designed a 'look-around' mechanic that rewarded natural physical movement — tilting and rotating the phone — making it feel genuinely magical.",
        ],
        quote: "If a 7-year-old can't figure it out in 10 seconds without reading, the design needs to change. That was our testing benchmark.",
        images: [
          {
            alt: "AR interaction flow — scan trigger, scene reveal, and explore mode",
            caption: "Core AR interaction loop: scan → scene appears → explore by tapping → hear story connection.",
            aspect: "video",
            placeholder: "Interaction flow storyboard: page scan animation → AR scene reveal → tap to trigger character audio → look-around mechanic",
          },
          {
            alt: "Tap target sizing and accessibility annotations for AR UI",
            caption: "Accessibility-first UI: minimum 64pt tap targets, high-contrast labels, audio-first instruction design.",
            aspect: "wide",
            placeholder: "Annotated UI spec: tap target sizing, color contrast ratios, audio cue trigger points, and fall-back non-AR mode",
          },
        ],
      },
      {
        id: "accessibility",
        label: "Accessibility",
        heading: "AR That Works for Everyone",
        body: [
          "Accessibility in AR is uniquely challenging — screen readers can't describe a 3D scene, and motion sickness is a real concern. I worked with the literacy researcher and engineers to implement several inclusive design decisions: a non-AR 2D mode for devices that couldn't support it, reduced-motion settings, audio descriptions of each scene, and high-contrast UI elements over the camera feed.",
          "We also made the caregiver experience a first-class concern — adding an 'about this activity' panel explaining the literacy goal behind each AR scene, so parents and teachers understood why it was there.",
        ],
        highlights: [
          "Full 2D fallback mode for non-AR-capable devices",
          "All scene interactions also triggered via audio (not just visual feedback)",
          "Reduced motion mode: disables parallax and camera movement",
          "Caregiver 'about this activity' panel with literacy goal explanation",
          "High contrast: all UI elements over camera feed at 4.5:1 minimum",
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        heading: "Learning That Feels Like Adventure",
        body: [
          "AR Expeditions shipped as a feature within the New Worlds Reading app, distributed to K–5 students across Florida through the state literacy program. It was one of the more technically and creatively ambitious projects I've worked on — and one of the most rewarding.",
          "Designing for children required a constant discipline of simplicity and empathy. Every decision had to be tested against the reality of a 7-year-old holding a phone at arm's length in their living room.",
        ],
        highlights: [
          "Feature shipped within the New Worlds Reading app, available statewide",
          "Works across a wide range of device capabilities with graceful degradation",
          "Educator feedback: 'students are more excited to open their books'",
        ],
      },
    ],
  },

  // ─── 4. Turbo Sales Platform ──────────────────────────────────────────
  {
    id: "4",
    slug: "turbo",
    title: "Turbo",
    subtitle: "Reimagining the Sales Ecosystem for Modern Revenue Teams",
    shortDescription: "End-to-end product design for a sales lead management platform built for speed and clarity.",
    description: "Turbo is a sales lead platform designed to help revenue teams move faster. I led the end-to-end product design — from initial research and IA through interaction design, prototyping, and component specifications.",
    role: "Product Designer",
    whatIDid: "End-to-End Product Design, UX Research, Interaction Design, Design System, Prototyping",
    timeline: "4 months",
    team: "1 designer (me), 3 engineers, 1 PM",
    year: "2023",
    tags: ["Product Design", "B2B", "Design Systems", "Interaction Design"],
    category: "Product",
    cardClass: "project-card-turbo",
    imageUrl: `${import.meta.env.BASE_URL}images/project-turbo.jpg`,
    details: {
      context: "Sales teams were managing leads across a patchwork of CRMs, spreadsheets, and Slack threads. Turbo was built to unify the workflow into one fast, opinionated tool.",
      problem: "Existing sales tools were either too complex (enterprise CRMs) or too limited (basic pipelines). Sales reps needed something that matched the speed of their work without requiring constant data entry.",
      goals: [
        "Design a lead pipeline that felt fast and intuitive — optimized for keyboard-first power users.",
        "Build a view system that let sales managers and reps see different things without separate tools.",
        "Establish a component system that could scale with new features.",
        "Reduce context-switching for reps working across multiple accounts.",
      ],
      outcome: "Core product shipped with a lead pipeline, contact detail view, and activity log. Design system adopted as the foundation for the product roadmap.",
    },
    caseStudy: [
      {
        id: "overview",
        label: "Overview",
        heading: "The Sales Tool Problem",
        body: [
          "Sales reps move fast. They're on calls, in meetings, updating notes on the go. Most CRM tools were designed by product teams who never watched a sales rep work in real time. The result: tools that demanded constant attention when reps' attention was already elsewhere.",
          "Turbo wanted to be different. I joined as the sole product designer to shape the core product from research through to shipped components.",
        ],
        images: [
          {
            alt: "Turbo sales platform — lead pipeline overview and contact detail view",
            caption: "The Turbo lead pipeline: fast, keyboard-navigable, built around the rep's workflow.",
            aspect: "wide",
            placeholder: "Hero overview: Turbo pipeline board showing lead cards, status columns, and right-panel contact detail",
          },
        ],
      },
      {
        id: "research",
        label: "Research",
        heading: "Shadowing the Sales Workflow",
        body: [
          "I conducted 6 contextual inquiry sessions with sales reps across two companies — sitting with them during their actual work, watching how they moved between tools, and documenting the friction. I also interviewed sales managers to understand the reporting and visibility layer.",
          "The most revealing moment: watching a rep update a lead status in a CRM, then immediately open Slack to tell their manager the same thing. Two tools, one update. The product had to collapse that.",
        ],
        highlights: [
          "Sales reps switched apps an average of 12× per hour during active selling",
          "Top complaints: slow load times, mandatory fields interrupting flow, no quick-add for notes",
          "Managers needed pipeline visibility without interrupting reps",
          "Power users wanted keyboard shortcuts — nobody on the team had built them in",
        ],
        images: [
          {
            alt: "Contextual inquiry session notes and workflow diagram",
            caption: "Workflow map from contextual inquiry — showing where the friction lives in a rep's typical day.",
            aspect: "video",
            placeholder: "Workflow diagram: a sales rep's day mapped across tools — with friction points annotated at each context switch",
          },
        ],
      },
      {
        id: "ia",
        label: "Structure",
        heading: "Designing Around the Rep's Mental Model",
        body: [
          "The pipeline metaphor — columns representing stages, cards representing leads — was right. What was wrong about most implementations was the density of information on each card and the number of clicks to update a status.",
          "I designed a compressed card format that showed only the four things reps needed to make a decision: company name, deal value, last activity, and next action. Status updates happened inline via drag or a single keyboard shortcut. Anything else was one click away in the side panel.",
        ],
        images: [
          {
            alt: "Lead card design explorations — information density iterations",
            caption: "Lead card explorations: testing different levels of information density with reps.",
            aspect: "wide",
            placeholder: "Card design iterations: 4 variants from data-dense to minimal — with user preference annotations",
          },
        ],
      },
      {
        id: "interaction",
        label: "Interaction Design",
        heading: "Built for Speed",
        body: [
          "The interaction model was built around two principles: the fastest path to completion, and no interruptions. Status updates triggered inline — no modal, no confirmation. Notes could be added from a persistent bottom bar. Keyboard shortcuts were first-class, not an afterthought.",
          "I also designed a manager view with the same pipeline but a different information hierarchy — showing team performance, deal velocity, and risk flags. Same data model, different perspective.",
        ],
        highlights: [
          "Inline status update: drag-and-drop + keyboard shortcut (no modal)",
          "Quick-note bar: add notes without leaving the pipeline view",
          "⌘K command palette for power-user navigation",
          "Manager view toggle: switches information hierarchy without losing context",
        ],
        images: [
          {
            alt: "Interaction prototypes — inline status update and keyboard shortcut patterns",
            caption: "Interaction prototype for inline status update — no modal, no friction.",
            aspect: "video",
            placeholder: "Prototype walkthrough: drag status update → quick note → keyboard shortcut sequence — shown in high-fidelity",
          },
        ],
      },
      {
        id: "design-system",
        label: "Design System",
        heading: "Components That Scale",
        body: [
          "With a small team moving fast, a shared component language was essential. I built Turbo's design system in Figma — establishing a token system for color, typography, and spacing, and building the 20 core components needed for the pipeline and detail views.",
          "The system was designed to be opinionated — fewer variants, clearer decisions — so engineers weren't making design calls and designers weren't rebuilding the same things.",
        ],
        highlights: [
          "Design token system: semantic color, type scale, spacing units",
          "20 core components: card, badge, sidebar panel, table row, input, button, modal",
          "Component documentation in Figma with usage guidelines and do/don't examples",
          "Token-to-CSS handoff: clear variable naming matching engineering conventions",
        ],
        images: [
          {
            alt: "Turbo design system — component library and token documentation",
            caption: "Core component library — tokens, buttons, cards, and pipeline-specific components.",
            aspect: "video",
            placeholder: "Design system overview: token page (colors, type, spacing) + component library page with pipeline components",
          },
        ],
      },
      {
        id: "outcome",
        label: "Outcome",
        heading: "A Tool Built for How People Actually Sell",
        body: [
          "The core Turbo product shipped with the lead pipeline, contact view, activity log, and manager view. The design system became the foundation for the product roadmap, giving the team a shared language as they added features.",
          "The most meaningful validation: reps who tested the prototype said it was the first sales tool that didn't feel like it was designed for someone else.",
        ],
        highlights: [
          "Core pipeline and contact detail views shipped to production",
          "Design system adopted for all subsequent feature development",
          "Keyboard shortcut system praised in early user testing",
          "Manager view enabled one tool to serve two distinct user types",
        ],
      },
    ],
  },
  // ─── 5. SPARC-P ──────────────────────────────────────────────────────
{
  id: "5",
  slug: "sparc-p",
  title: "SPARC-P",
  subtitle: "Designing a New Interaction Paradigm for AI-Powered Clinical Communication Training",
  shortDescription:
    "UX/UI design for a Unity + web platform that trains practicing clinicians to improve HPV vaccination conversations through AI avatar simulations.",
  description:
    "SPARC (Standardized Patient Avatar for Reflective Communication Practice) is a University of Florida grant-funded platform that replaces expensive, hard-to-scale live training with asynchronous AI simulation. I designed both the web LMS container and the Unity training interface — including a navigation system for a genuinely novel interaction: a turn-based conversation with a lifelike avatar.",
  role: "UI/UX Designer",
  whatIDid: "Web UI Design, Unity Interface Design, Interaction Design, Prototyping",
  timeline: "4 months (ongoing)",
  team: "1 designer (me), 2–3 engineers, 1 instructional designer, 1 PI/researcher",
  year: "2025",
  tags: ["Healthcare EdTech", "Unity UI", "Interaction Design", "AI Simulation", "Prototyping"],
  category: "Experience",
  cardClass: "project-card-sparc",
  imageUrl: `${import.meta.env.BASE_URL}images/project-sparcp.jpg`,
  details: {
    context:
      "Traditional clinician communication training depends on live standardized patients and facilitators — effective but impossible to scale. SPARC is a UF-funded platform that makes experiential communication practice available asynchronously, starting with HPV vaccination conversations.",
    problem:
      "How do you design a UI for a genuinely novel interaction — a turn-based avatar conversation — that feels natural, sets clear expectations, and surfaces reference material without breaking the simulation's sense of presence?",
    goals: [
      "Design a web LMS container that orients clinicians before and after each session.",
      "Design a Unity training interface where clinicians can converse with a 3D avatar without UI getting in the way.",
      "Surface patient info, communication guides, and transcripts without overwhelming users mid-conversation.",
      "Pace coaching feedback so clinicians can absorb it without feeling rushed or anxious.",
    ],
    outcome:
      "Working React + Tailwind prototype shipped and presented to PIs. Bottom Menu navigation pattern selected and implemented in Unity. Platform in active development.",
  },
  caseStudy: [
    {
      id: "overview",
      label: "Overview",
      heading: "Scaling Clinical Communication Training with AI",
      body: [
        "A strong clinician recommendation is the single most consistent predictor of HPV vaccine uptake — yet many clinicians struggle with the complexity of navigating parental hesitancy, misinformation, and emotionally charged conversations. Training helps, but traditional methods require live facilitators and standardized patients, making them costly and hard to scale.",
        "SPARC replaces that logistical overhead with an AI-driven simulation. Clinicians hold turn-based conversations with a lifelike 3D avatar patient or guardian, receive structured coaching feedback aligned to the validated C-LEAR framework (Counsel, Listen, Emphasize, Answer, Recommend), and practice entirely on their own schedule.",
        "My role spanned two distinct design surfaces: the web container — the LMS shell housing onboarding, navigation, resources, and progress tracking — and the Unity training interface, where the actual avatar conversations happen.",
      ],
      images: [
        {
          alt: "SPARC-P home page — web LMS container",
          caption: "Web container: home page built in React + Tailwind, orienting clinicians before they enter the Unity simulation.",
          aspect: "wide",
          placeholder:
            "SPARC-P home page showing Welcome message, 'About the training' section with video, 'Launch Training' and 'Go through resources first' CTAs, and sidebar navigation with Home, Learning Resources, AI Practice, Progress, Settings",
        },
      ],
    },
    {
      id: "role",
      label: "My Role",
      heading: "Designing Across Two Layers of One Experience",
      body: [
        "My scope covered the full experience surface — from the web-based LMS shell to the in-session Unity interface. These two layers serve very different purposes and have very different design constraints.",
        "The web container sets expectations, provides context, and gives clinicians a home base before and after each session. It's built in React and Tailwind, and I was responsible for design and front-end implementation. The Unity interface is where the high-stakes design work lives: UI elements that must coexist with a photorealistic 3D avatar without disrupting the simulation's sense of presence.",
      ],
      highlights: [
        "Web container: home, login, learning resources, progress tracking, session transitions",
        "Unity interface: navigation system, coach feedback overlay, transcript panel, progress label, bottom menu",
        "Built a working React prototype to present interaction flows to PIs and help the team visualize the platform",
        "Collaborated with instructional designer and PI on feedback pacing and rubric alignment",
      ],
      images: [
        {
          alt: "SPARC-P training session interface — Unity UI with bottom navigation",
          caption: "Training interface: avatar session with coach feedback overlay, transcript panel, and Bottom Menu navigation.",
          aspect: "wide",
          placeholder:
            "Training session UI showing 3D avatar (Dr. Sarah Williams, Pediatrician) in medical office environment, 'Training Session - Part 1/2' label top-left, yellow Coach Feedback 1 card top-right with Next button, Transcript panel at bottom, and Patient Info / Guide / Caption bottom navigation bar",
        },
      ],
    },
    {
      id: "challenges",
      label: "Design Challenges",
      heading: "Three Problems That Shaped the Entire Process",
      body: [
        "SPARC sits at an unusual intersection: medical training, conversational AI, and real-time avatar simulation. There's no established UI playbook for this. That made the design work genuinely exploratory — and surfaced three challenges that drove every major decision.",
      ],
      highlights: [
        "No established pattern: avatar-based conversational training doesn't map cleanly to any existing UI model",
        "Cognitive load: clinicians must speak, listen, process feedback, and reference materials — sometimes in rapid succession",
        "Expectation-setting: time-pressured clinicians need to understand where they are in the training arc before they commit",
      ],
    },
    {
      id: "exploration",
      label: "Navigation Exploration",
      heading: "Three Patterns for an Unconventional Interface",
      body: [
        "The central design question for the Unity interface was how to make three types of reference material — Patient Info, Communication Guide, and Transcript — accessible during a live avatar session without undermining presence. I explored three distinct navigation patterns, each optimized for a different cognitive engagement model.",
        "The Tooltip placed a fixed button in the corner that expanded to reveal tabbed content — minimal footprint, immediate dismissal, but limited content depth and poor scalability. The Sidebar used a collapsible right panel — better content capacity, but it competed with the avatar for horizontal space and visual attention even when closed. The Bottom Menu modeled itself on Zoom-style video call interfaces — items open as slide-up modals, creating a clear, deliberate shift between 'conversation mode' and 'reference mode.'",
        "The key reframe that drove the decision: the question wasn't 'does this interfere with the avatar?' It was 'what kind of attention does each moment in training actually require?' A clinician looking up a patient detail is already pausing the conversation — the interface should honor that intentional task switch, not try to hide it.",
      ],
      quote:
        "When a user opens reference material mid-session, they've already recognized a knowledge gap and made a conscious decision to pause. That's not a distraction — it's purposeful task-switching. The UI should support it, not fight it.",
      images: [
        {
          alt: "Three navigation pattern explorations — Tooltip, Sidebar, Bottom Menu",
          caption: "Navigation exploration deck presented to the team: three patterns mapped to three cognitive access models.",
          aspect: "video",
          placeholder:
            "Three-panel comparison: Tooltip (top-right expandable button with tabs), Sidebar (collapsible right panel), Bottom Menu (Zoom-style bar with slide-up modals) — each with pros/cons annotations",
        },
      ],
    },
    {
      id: "solution",
      label: "The Training Interface",
      heading: "Presence, Pacing, and Expectation-Setting",
      body: [
        "With the Bottom Menu selected, I designed the full training session UI around four interacting elements, each addressing a specific design challenge identified earlier in the process.",
        "The 'Training Session – Part 1/2' label addresses the expectation-setting problem directly: clinicians know where they are in the arc before they say their first word. The Coach Feedback overlay — a yellow-bordered card that appears after each clinician turn — addresses pacing: it's user-controlled via a 'Next' button rather than auto-advancing, so feedback is absorbed at the clinician's own speed. The Transcript panel addresses accessibility: it can be shown or hidden by the user, giving clinicians control over their own cognitive load. And the Bottom Menu gives Patient Info, Guide, and Caption a permanent home that's always accessible without cluttering the primary view.",
      ],
      highlights: [
        "Session label: 'Training Session – Part 1/2' sets temporal expectations before the first turn",
        "Coach feedback: appears after each turn, user-controlled 'Next' prevents rushing",
        "Transcript: persistent but hideable — clinicians choose their own cognitive load level",
        "Bottom Menu: always accessible, zero visual clutter in the default state",
      ],
      images: [
        {
          alt: "Training session annotated — session label, coach feedback, transcript, bottom menu",
          caption: "Annotated training session UI: four elements working together to balance presence, pacing, and access.",
          aspect: "wide",
          placeholder:
            "Annotated training session screenshot with callouts: A = Session Progress Label, B = Coach Feedback Card with Next button, C = Transcript panel with hide option, D = Bottom Menu (Patient Info, Guide, Caption)",
        },
      ],
    },
    {
      id: "prototype",
      label: "Prototype",
      heading: "Building It to Show It",
      body: [
        "Static mockups couldn't communicate what mattered most about this interface: how it feels in motion. How does the coach feedback card appear after a turn? How does the Bottom Menu modal animate in? Does the session label actually reduce anxiety, or is it just more text on screen?",
        "I built a working prototype in React and Tailwind — not just Figma screens — and presented it to the PIs and engineering team. The interactive prototype turned a conversation about 'what it could be' into a direct evaluation of 'what it will feel like.' It accelerated design alignment by several rounds of feedback.",
      ],
      highlights: [
        "Working prototype built in React + Tailwind",
        "Presented to PIs and team to visualize the full platform concept",
        "Prototype drove selection of Bottom Menu over Tooltip and Sidebar",
        "Demonstrated coach feedback pacing and Bottom Menu modal animation in context",
      ],
    },
    {
      id: "outcome",
      label: "Reflection",
      heading: "What Designing the Unknown Taught Me",
      body: [
        "SPARC was the most conceptually novel interface challenge I've worked on. There was no existing pattern to follow for 'turn-based AI avatar conversation training for medical professionals.' That forced a kind of first-principles design thinking I found genuinely energizing.",
        "The biggest lesson: reframing the problem unlocked better solutions. Shifting from 'how do we avoid interfering with the avatar?' to 'what kind of attention does each training moment require?' opened up three distinct design directions where there had previously been just one instinct toward minimalism.",
        "Working in Unity also required designing with hard constraints — layout flexibility, animation tooling, and component reuse all have real limits compared to the web. Learning to design within those limits while still advocating for the right interaction was an important part of this project's growth.",
      ],
      highlights: [
        "Bottom Menu pattern selected and in active Unity development",
        "Working prototype accelerated team alignment by replacing static mockups with interactive flows",
        "Next step: usability testing with practicing clinicians to validate the reference mode / conversation mode distinction under real conditions",
        "Platform designed as flexible — same architecture will extend to tobacco treatment, cancer screening, and other clinical communication contexts",
      ],
    },
  ],
},
];
