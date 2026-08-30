export const profile = {
  name: "Sheharzad Salahuddin",
  role: "Front-End Developer",
  taglines: [
    "Front-End Developer",
    "Full-Stack & AI Specialist",
    "AI Integrator",
    "React & Next.js Specialist",
  ],
  currentlyLearning: "DevOps",
  location: "Lahore, Pakistan",
  summary:
    "Front-End Developer at NETSOL building fast, responsive web apps with React, Vue & Nuxt — and self-taught across the full stack with Next.js & Python.",
  stats: [
    { label: "At NETSOL since", value: "2015" },
    { label: "Role", value: "Front-End Developer" },
    { label: "Degree", value: "BCS 2026" },
    { label: "Projects shipped", value: "15+" },
  ],
  email: "sheharzad.salahuddin9000@outlook.com",
  phone: "+92 339 0140466",
  whatsapp: "https://wa.me/923390140466",
  calendly: "https://calendly.com/sheharzad-salahuddin9000/new-meeting",
  resume: "/resume/Sheharzad-Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/sheharzad-developer" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sheharzad-salahuddin/",
    },
    { label: "X", href: "https://x.com/sheharzad_sala1" },
    { label: "Substack", href: "https://substack.com/@sheharzadsalahuddin" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCTYt7upl1YwBwdxGb8lmQwg",
    },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01264a0282005eca30" },
    { label: "Fiverr", href: "https://www.fiverr.com/sellers/sheharzad_1/" },
    { label: "LeetCode", href: "https://leetcode.com/u/sheharzad-developer/" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a Front-End Developer at NETSOL Technologies, where I've worked since 2015 — I joined through a disability-inclusion program as someone who is hard of hearing. I started in design and marketing, taught myself to code, and grew into a Software Engineer role building responsive apps with React, Vue, and Nuxt. I completed my Computer Science degree in 2026 while working full-time, and I've shipped 15+ personal projects across full-stack and AI.",
  ],
  blocks: [
    {
      title: "Experience",
      body: "I've been with NETSOL Technologies since 2015, starting in design and marketing before teaching myself to code and transitioning into development — a 2023 internship, then my current Software Engineer / Front-End Developer role in 2024 building responsive apps in React, Vue, and Nuxt. Alongside my job, I've shipped 15+ projects of my own across AI, FinTech, and healthcare — several live in production.",
    },
    {
      title: "What I build",
      body: "On the frontend I work across React, Next.js, Vue, and Nuxt with TypeScript and Tailwind; on the backend I reach into Node.js and Python (Flask, FastAPI) with PostgreSQL, Prisma, and Supabase. I integrate LLMs — Gemini, Groq, LangChain, and RAG pipelines — into real products, and I focus on performance, clean architecture, and interfaces that get out of the user's way.",
    },
    {
      title: "Selected impact",
      body: "At NETSOL I build responsive apps in React, Vue, and Nuxt from Figma handoff through deployment. My Vue.js features increased user engagement ~20% and conversions ~15%, and the GitHub Actions CI/CD pipeline I set up cut deployment time ~20%.",
    },
    {
      title: "How I work",
      body: "I believe great software should feel invisible — fast, intuitive, and reliable. I value clean code, continuous learning, and shipping work that actually reaches users.",
    },
  ],
  meta: [
    { label: "Role", value: "Software Engineer @ NETSOL" },
    { label: "Focus", value: "Frontend · Full-Stack · AI" },
    { label: "Based in", value: "Lahore, PK" },
  ],
};

export const experience = [
  {
    company: "NETSOL Technologies",
    role: "Front-End Developer",
    period: "2015 — Present",
    description: "With NETSOL since 2015, from design → development.",
  },
];

export const focusAreas = [
  {
    title: "Chatbot Development",
    description:
      "Creating conversational interfaces that provide natural, helpful interactions.",
    tags: ["LLM", "Web Chat", "Multi-modal", "Context Management"],
  },
  {
    title: "Full Stack Development",
    description:
      "Crafting end-to-end web applications with modern frameworks and tools.",
    tags: ["React/Next.js", "Vue/Nuxt", "Node.js", "Python", "TypeScript"],
  },
];

export const skillGroups = [
  { label: "Frontend", skills: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "Tailwind", "JavaScript"] },
  { label: "Backend", skills: ["Node.js", "Python", "FastAPI", "Flask", "Django", "GraphQL"] },
  { label: "AI", skills: ["OpenAI", "LLM", "Chatbot Development", "LangChain", "RAG"] },
  { label: "Database", skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Prisma"] },
  { label: "DevOps", skills: ["GitHub", "Docker", "GitHub Actions", "CI/CD", "Jenkins", "AWS", "Observability", "Infrastructure as Code", "Grafana"] },
  { label: "Collaboration", skills: ["JIRA", "Figma", "Agile/Scrum"] },
];

export type Project = {
  id: string;
  category: string;
  year: string;
  status?: "live";
  title: string;
  problem: string;
  credit: string;
  tags: string[];
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    id: "001",
    category: "AI / Healthcare",
    year: "2026",
    status: "live",
    title: "AuraAI — AI Wellness Companion",
    problem:
      "A mental-wellness chat app needs to feel calm and human — replies that adapt to the moment, not a rigid bot — while streaming responses without breaking the UI.",
    credit: "Solo project",
    tags: ["Next.js 16", "React 19", "TypeScript", "Streaming AI"],
    live: "https://ai-mental-health-chat-app.vercel.app/",
    code: "https://github.com/sheharzad-developer/Chatbot_Internship",
  },
  {
    id: "002",
    category: "AI / Machine Learning",
    year: "2025",
    title: "AI Chatbot Platform",
    problem:
      "Supporting several LLM providers and grounding answers in private documents usually devolves into scattered, one-off integrations with no tenant separation.",
    credit: "Solo project",
    tags: ["FastAPI", "Python", "LangChain", "Multi-tenant"],
  },
  {
    id: "013",
    category: "Real-Time Full-Stack",
    year: "2025",
    title: "Rideshare — Mobility App",
    problem:
      "A ride-hailing app has to match riders and drivers in real time, track them on a live map, and take payment — all without the UI stalling as locations stream in.",
    credit: "Solo project",
    tags: ["React Native", "FastAPI", "PostGIS", "Live Maps"],
  },
  {
    id: "014",
    category: "AI / Education",
    year: "2025",
    title: "Bilingual AI Study Companion",
    problem:
      "Learners studying in English and Urdu need a tutor that switches languages fluidly and stays grounded in sound pedagogy, not generic chatbot replies.",
    credit: "Solo project",
    tags: ["React Native", "Node.js", "Claude API"],
  },
  {
    id: "003",
    category: "Full-Stack Web Application",
    year: "2025",
    status: "live",
    title: "Eden Avenue Management",
    problem:
      "Property managers track maintenance requests, residents, and units across disconnected tools with no shared view.",
    credit: "Solo project",
    tags: ["Next.js (App Router)", "TypeScript", "Prisma", "PostgreSQL"],
    live: "https://edenavenue.vercel.app/",
    code: "https://github.com/sheharzad-developer/edenavenue",
  },
  {
    id: "004",
    category: "Full-Stack Web Application",
    year: "2025",
    status: "live",
    title: "Daggys Cafe",
    problem: "Health-conscious diners can't easily see the macros of what they're ordering.",
    credit: "Solo project",
    tags: ["Next.js", "TypeScript", "Supabase"],
    live: "https://daggys-cafe.vercel.app/",
    code: "https://github.com/sheharzad-developer/daggys-cafe",
  },
  {
    id: "005",
    category: "FinTech",
    year: "2026",
    status: "live",
    title: "Live Gold & Silver Prices",
    problem:
      "Buyers across Gulf and South-Asian markets need live precious-metal prices in their own currency and language.",
    credit: "Solo project",
    tags: ["Next.js 16", "React 19", "TypeScript", "Realtime data"],
    live: "https://www.thegoldprice.gold/",
  },
  {
    id: "006",
    category: "AI / Machine Learning",
    year: "2024",
    title: "ChatSmart AI",
    problem:
      "Finding one answer in long documents is slow, and generic chatbots hallucinate instead of citing the source.",
    credit: "Solo project",
    tags: ["Python", "Streamlit", "LangChain", "RAG"],
    code: "https://github.com/sheharzad-developer/chatsmart-ai",
  },
  {
    id: "007",
    category: "FinTech",
    year: "2025",
    status: "live",
    title: "FinPay — Crypto Wallet",
    problem: "Crypto newcomers need a simple way to track balances and transactions with live market context.",
    credit: "Solo project",
    tags: ["React", "React Router", "Tailwind CSS"],
    live: "https://fin-pay-crypto.vercel.app/",
  },
  {
    id: "008",
    category: "Healthcare",
    year: "2025",
    status: "live",
    title: "Dental Syndicate",
    problem: "A dental clinic needed online appointment booking with instant confirmation for both patients and staff.",
    credit: "Solo project",
    tags: ["Python (Flask)", "JavaScript", "CSS3 (Glassmorphism)"],
    live: "https://dental-syndicate.vercel.app/",
    code: "https://github.com/sheharzad-developer/dental-syndicate",
  },
  {
    id: "009",
    category: "Design Tools",
    year: "2024",
    status: "live",
    title: "Apartment Design Tool",
    problem: "Visualizing an apartment layout in 3D usually means heavy desktop software.",
    credit: "Solo project",
    tags: ["React", "Three.js", "WebGL"],
    live: "https://apartment-planner-eta.vercel.app/",
    code: "https://github.com/sheharzad-developer/Apartment-Planner",
  },
  {
    id: "010",
    category: "Full-Stack Web Application",
    year: "2025",
    status: "live",
    title: "LSLS School Management System",
    problem: "Schools manage students, teachers, attendance, and results across spreadsheets and disconnected silos.",
    credit: "Solo project",
    tags: ["Next.js", "TypeScript", "Prisma"],
    live: "https://lslsmanagementsystemschool.netlify.app/",
  },
  {
    id: "011",
    category: "Corporate",
    year: "2024",
    status: "live",
    title: "NETSOL Technologies — Web",
    problem: "NETSOL's corporate site needed fast, responsive marketing and product pages that rank and convert.",
    credit: "NETSOL Technologies — frontend",
    tags: ["Nuxt.js", "Vue", "JavaScript"],
    live: "https://netsoltech.com/",
  },
  {
    id: "012",
    category: "Full-Stack Web Application",
    year: "2023",
    title: "Hotel Management & Tourism (MERN)",
    problem: "Travelers need one place to book hotels, pay online, and hire local tour guides.",
    credit: "Team of 4 · my focus: Stripe payments & checkout",
    tags: ["MongoDB", "Express.js", "React", "Stripe"],
    code: "https://github.com/sheharzad-developer/CodeNinja-Project",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  image?: string;
  pdf?: string;
  credentialId?: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Python Programming Fundamentals",
    issuer: "Microsoft (via Coursera)",
    date: "2023",
    category: "Programming",
    image: "/certifications/Python-Certificate.png",
    pdf: "/certifications/Python-Certificate.pdf",
  },
  {
    title: "Front-End Web Development with React",
    issuer: "Hong Kong University of Science & Technology (via Coursera)",
    date: "2021",
    category: "Frontend",
    image: "/certifications/two.jpg",
    credentialId: "KD539HCFEYW7",
    verifyUrl: "https://coursera.org/verify/KD539HCFEYW7",
  },
  {
    title: "Server-Side Development with NodeJS, Express & MongoDB",
    issuer: "Hong Kong University of Science & Technology (via Coursera)",
    date: "2021",
    category: "Backend",
    image: "/certifications/four.jpg",
    credentialId: "V55RG4V75GAG",
    verifyUrl: "https://coursera.org/verify/V55RG4V75GAG",
  },
  {
    title: "Front-End Web UI Frameworks & Tools: Bootstrap 4",
    issuer: "Hong Kong University of Science & Technology (via Coursera)",
    date: "2021",
    category: "Frontend",
    image: "/certifications/three.jpg",
    credentialId: "RH5LV6MLCXS5",
    verifyUrl: "https://coursera.org/verify/RH5LV6MLCXS5",
  },
  {
    title: "Introduction to Front-End Development with ReactJS",
    issuer: "Coursera Project Network",
    date: "2021",
    category: "Frontend",
    image: "/certifications/one.jpg",
    credentialId: "G6S5BEMQDEHM",
    verifyUrl: "https://coursera.org/verify/G6S5BEMQDEHM",
  },
  {
    title: "Namaste JavaScript",
    issuer: "NamasteDev.com",
    date: "2024",
    category: "Programming",
    image: "/certifications/five.jpg",
    credentialId: "94OZIS",
  },
  {
    title: "Namaste DSA",
    issuer: "NamasteDev.com",
    date: "2026",
    category: "Programming",
    image: "/certifications/six.png",
    credentialId: "94OZIS",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
