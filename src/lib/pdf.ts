import jsPDF from "jspdf";

const profile = {
  name: "ALI IMANDOUST",
  title: "Frontend Engineer (React, Next.js, TypeScript)",

  contact: {
    email: "imndst@gmail.com",
    linkedin: "linkedin.com/in/imndst",
    portfolio: "https://imndoust.github.io/ali-imandoust-portfolio/",
    location: "Open to Relocation (Germany, Netherlands, Austria, EU)",
    visa: "Requires Visa Sponsorship"
  },

  summary:
    "Senior Frontend Engineer with 10+ years of experience building scalable and high-performance web applications. Specialized in React, Next.js (App Router), and TypeScript.",

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
        "Built scalable dashboards using React + TypeScript",
        "Advanced filtering & search systems",
        "Data visualizations (charts, heatmaps)",
        "Performance optimization (~30% improvement)",
        "Export features (PDF, Excel, Word)"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Construction Engineering Organization",
      period: "2019 – 2026",
      details: [
        "Booking platform development",
        "Reusable component architecture",
        ".NET API integration",
        "UX improvements"
      ]
    },
    {
      title: "Web Developer",
      company: "Gishot",
      period: "2014 – 2026",
      details: [
        "Ticketing platform redesign",
        "Legacy migration",
        "User flow optimization"
      ]
    }
  ],

  projects: [
    {
      name: "Event Platform (Next.js App Router)",
      period: "2024",
      details: [
        "Scalable Next.js architecture",
        "SEO dynamic routing",
        "Advanced filtering system",
        "Reusable components"
      ]
    }
  ],

  education: "Bachelor of Software Engineering - IUM Mashhad University",

  languages: [
    "English (Professional Working Proficiency)",
    "German (Basic)"
  ]
};

export function downloadFullResumePDF() {
  const doc = new jsPDF();
  let y = 10;

  const line = (text: string) => {
    doc.text(text, 10, y);
    y += 7;
  };

  const section = (title: string) => {
    y += 5;
    line(title.toUpperCase());
    y += 2;
  };

  // HEADER
  doc.setFontSize(14);
  line(profile.name);
  line(profile.title);

  doc.setFontSize(10);
  line(profile.contact.email);
  line(profile.contact.linkedin);
  line(profile.contact.portfolio);
  line(profile.contact.location);
  line(profile.contact.visa);

  // SUMMARY
  section("Profile");
  line(profile.summary);

  // SKILLS
  section("Technical Skills");
  Object.entries(profile.skills).forEach(([key, values]) => {
    line(`${key.toUpperCase()}: ${values.join(", ")}`);
  });

  // EXPERIENCE
  section("Professional Experience");
  profile.experience.forEach((e) => {
    line(`${e.title} - ${e.company} (${e.period})`);
    e.details.forEach((d) => line(`- ${d}`));
    y += 2;
  });

  // PROJECTS
  section("Projects");
  profile.projects.forEach((p) => {
    line(`${p.name} (${p.period})`);
    p.details.forEach((d) => line(`- ${d}`));
    y += 2;
  });

  // EDUCATION
  section("Education");
  line(profile.education);

  // LANGUAGES
  section("Languages");
  line(profile.languages.join(", "));

  doc.save("ALI_IMANDOUST_CV.pdf");
}