import { NextResponse } from "next/server";

const profile = {
  name: "ALI IMNDOUST",
  title: "Frontend Engineer (React, Next.js, TypeScript)",

  contact: {
    email: "imndst@gmail.com",
    linkedin: "linkedin.com/in/imndust",
    portfolio: "https://imndust.github.io/ali-imandoust-portfolio/",
    location: "Open to Relocation (Germany, Netherlands, Austria, EU)",
    visa: "Requires Visa Sponsorship"
  },

  summary:
    "Senior Frontend Engineer with 10+ years of experience building scalable and high-performance web applications. Specialized in React, Next.js (App Router), and TypeScript with enterprise-level systems and global teams.",

  skills: {
    frontend: ["React.js", "Next.js (SSR, SSG, ISR)", "TypeScript"],
    state: ["Zustand", "Redux Toolkit", "TanStack Query"],
    ui: ["Tailwind CSS", "Design Systems", "Theming"],
    backend: ["REST APIs", ".NET Core Integration", "Entity Framework (Basic)"],
    performance: ["Code Splitting", "Lazy Loading", "Core Web Vitals"],
    testing: ["Jest", "RTL", "Cypress", "Playwright (Basic)"],
    tools: ["Git", "CI/CD", "Vercel", "Docker (Basic)"]
  },

  experience: [
    {
      title: "Frontend Engineer (Remote)",
      company: "Enterprise Projects (Sanofi, Mattamy Homes)",
      period: "2022 – 2026",
      details: [
        "Built scalable data-intensive dashboards using React + TypeScript",
        "Implemented advanced filtering & search systems",
        "Built data visualizations (charts, heatmaps)",
        "Optimized performance (~30% load time improvement)",
        "Implemented export systems (PDF, Excel, Word)"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Construction Engineering Organization",
      period: "2019 – 2026",
      details: [
        "Built responsive booking platform",
        "Created reusable component architecture",
        "Integrated .NET backend APIs",
        "Improved UX across devices"
      ]
    },
    {
      title: "Web Developer",
      company: "Gishot",
      period: "2014 – 2026",
      details: [
        "Redesigned high-traffic ticketing platform",
        "Migrated legacy JavaScript to modern stack",
        "Improved conversion & user flow"
      ]
    }
  ],

  projects: [
    {
      name: "Event Platform (Next.js App Router)",
      period: "2024",
      details: [
        "Scalable Next.js + TypeScript architecture",
        "SEO-friendly dynamic routing",
        "Advanced filtering system (debounce + URL sync)",
        "Reusable components (EventCard, FilterBar)"
      ]
    }
  ],

  education: "Bachelor of Software Engineering - IUM Mashhad University",

  languages: [
    "English (Professional Working Proficiency)",
    "German (Basic)"
  ]
};

export async function POST(req: Request) {
  const { message } = await req.json();
  const text = message.toLowerCase();

  // 👤 INTRO
  if (
    text.includes("who are you") ||
    text.includes("introduce") ||
    text.includes("about you")
  ) {
    return NextResponse.json({
      reply: `👋 Hi, I'm ${profile.name}
💼 ${profile.title}

🧠 Summary:
${profile.summary}`
    });
  }

  // 💻 SKILLS (FIXED)
  if (text.includes("skill") || text.includes("stack")) {
    return NextResponse.json({
      reply:
`💻 Technical Skills:

Frontend:
${profile.skills.frontend.map(s => "• " + s).join("\n")}

State Management:
${profile.skills.state.map(s => "• " + s).join("\n")}

UI / Styling:
${profile.skills.ui.map(s => "• " + s).join("\n")}

Backend Integration:
${profile.skills.backend.map(s => "• " + s).join("\n")}

Performance:
${profile.skills.performance.map(s => "• " + s).join("\n")}

Testing:
${profile.skills.testing.map(s => "• " + s).join("\n")}

Tools:
${profile.skills.tools.map(s => "• " + s).join("\n")}`
    });
  }

  // 💼 EXPERIENCE (FIXED + CLEAN FORMAT)
  if (text.includes("experience") || text.includes("work")) {
    return NextResponse.json({
      reply:
`💼 Professional Experience:

${profile.experience
  .map(
    (e) =>
`• ${e.title}
  ${e.company} (${e.period})
${e.details.map(d => "  - " + d).join("\n")}`
  )
  .join("\n\n")}`
    });
  }

  // 📁 PROJECTS (FIXED)
  if (text.includes("project") || text.includes("built")) {
    return NextResponse.json({
      reply:
`📁 Projects:

${profile.projects
  .map(
    (p) =>
`• ${p.name} (${p.period})
${p.details.map(d => "  - " + d).join("\n")}`
  )
  .join("\n\n")}`
    });
  }

  // 📧 CONTACT (FULL INFO)
  if (text.includes("contact") || text.includes("email")) {
    return NextResponse.json({
      reply:
`📧 Contact Information:

Email: ${profile.contact.email}
LinkedIn: ${profile.contact.linkedin}
Portfolio: ${profile.contact.portfolio}

📍 Location:
${profile.contact.location}

🛂 Visa:
${profile.contact.visa}`
    });
  }

  // 🚫 SMART FALLBACK (IMPROVED)
  return NextResponse.json({
    reply: `I'm the AI resume assistant for ${profile.name}.

You can ask me about:

• Professional experience
• Technical skills
• Projects
• Contact information
• Education

Try asking naturally like:
"What experience does he have?"`
    });
}