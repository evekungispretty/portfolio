export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  role: string;
  timeline: string;
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
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "scholar",
    title: "Scholar",
    shortDescription: "Research & Learning Platform redesign for academia.",
    description: "A comprehensive redesign of a university academic tool aimed at graduate students to streamline their research, citation management, and collaborative learning processes.",
    role: "Lead Product Designer",
    timeline: "6 months",
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
    }
  },
  {
    id: "2",
    slug: "meridian",
    title: "Meridian",
    shortDescription: "Internal analytics dashboard for a fintech team.",
    description: "A dark-mode optimized, high-density data visualization dashboard empowering financial analysts to monitor real-time transaction anomalies.",
    role: "Product Designer",
    timeline: "4 months",
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
    }
  },
  {
    id: "3",
    slug: "canvas-lms",
    title: "Canvas LMS Redesign",
    shortDescription: "Conceptual redesign of a course management platform.",
    description: "A conceptual exploration aimed at decluttering the ubiquitous Canvas LMS, focusing on student anxiety reduction and clearer information hierarchy.",
    role: "UX Designer",
    timeline: "8 months",
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
    }
  },
  {
    id: "4",
    slug: "pulse",
    title: "Pulse",
    shortDescription: "Experimental interactive microsite exploring motion.",
    description: "A creative coding and prototyping exercise to push the boundaries of web motion, scroll-triggered animations, and data storytelling.",
    role: "Designer + Prototyper",
    timeline: "Ongoing",
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
    }
  }
];

export const categories = ["All", "Product", "Web", "Systems", "Experimental"];
