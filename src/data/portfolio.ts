export const profile = {
  name: "Hari Prasath",
  firstName: "Hari",
  role: "AI & Machine Learning Developer",
  location: "Pollachi, Tamil Nadu, India",
  tagline:
    "I build and ship full-stack AI products using LLMs, RAG, vector search, and modern web technologies.",
  email: "hariprasathks22@gmail.com",
  github: "https://github.com/hariprasathks",
  linkedin: "https://www.linkedin.com/in/hari-prasath-ks-8bb860379/",
  education: {
    degree: "B.Sc. Artificial Intelligence and Machine Learning",
    college: "Shri Nehru Maha Vidyalaya College of Arts and Science",
    graduation: "Expected 2028",
  },
} as const;

export type Project = {
  index: string;
  name: string;
  subtitle: string;
  summary: string;
  tech: readonly string[];
  liveUrl?: string;
  repoUrl: string;
  highlights: readonly string[];
};

export const projects: Project[] = [
  {
    index: "01",
    name: "StudyMate AI",
    subtitle: "Full-Stack RAG Study Assistant",
    summary:
      "Students upload PDF/DOCX study material, ask grounded questions, generate quizzes, and create flashcards from their own documents.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Google Gemini",
      "ChromaDB",
    ],
    liveUrl: "https://studymate-ai-frontend-m903.onrender.com",
    repoUrl: "https://github.com/hariprasathks/StudyMate-Al",
    highlights: [
      "PDF/DOCX ingestion & text extraction",
      "Document chunking → Gemini embeddings → ChromaDB vector index",
      "Semantic retrieval with grounded, citation-backed LLM answers",
      "FastAPI REST backend with a separate React + TypeScript + Tailwind frontend",
    ],
  },
  {
    index: "02",
    name: "WorkSkills Aira",
    subtitle: "AI Career Guidance Chatbot",
    summary:
      "A bilingual career guidance chatbot built on the Anthropic Claude API with a polished, responsive chat experience.",
    tech: ["Node.js", "Express.js", "Anthropic Claude API"],
    repoUrl: "https://github.com/hariprasathks/WORKSKILLS_AIRA",
    highlights: [
      "Claude API integration with env-var-based key protection",
      "Node.js/Express backend",
      "English/Tamil bilingual interface",
      "Responsive chat UI with suggested prompts, typing indicators & theme support",
    ],
  },
];

export const skillGroups = [
  {
    label: "AI & LLM Engineering",
    skills: [
      "RAG pipelines",
      "LLM APIs",
      "Semantic retrieval",
      "Prompt engineering",
      "Embeddings",
      "Vector search",
    ],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Vector & Data",
    skills: ["ChromaDB", "Text extraction", "Document chunking"],
  },
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
] as const;

export const capabilities = [
  {
    title: "RAG Pipelines",
    description:
      "Ingest documents, extract and chunk text, embed with LLM models, and index into vector stores for retrieval.",
  },
  {
    title: "Grounded LLM Responses",
    description:
      "Answers constrained to retrieved context with citations back to the source document.",
  },
  {
    title: "Vector Search",
    description:
      "Semantic retrieval over embedded document chunks using vector databases like ChromaDB.",
  },
  {
    title: "LLM API Integration",
    description:
      "Building on Google Gemini and Anthropic Claude APIs with secure, env-var based key handling.",
  },
  {
    title: "REST API Backends",
    description:
      "FastAPI and Express.js services that expose AI features to production frontends.",
  },
  {
    title: "Full-Stack Product Shipping",
    description:
      "React + TypeScript frontends deployed separately from AI backends — live, not prototypes.",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
