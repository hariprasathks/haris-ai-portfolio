// Central content source for the portfolio — update copy here.
export const profile = {
  name: "Hari Prasath",
  firstName: "Hari",
  role: "AI & Machine Learning Developer",
  location: "Pollachi, Tamil Nadu, India",
  tagline:
    "I build and ship full-stack AI products: LLM applications, RAG pipelines, and vector search on modern web technologies.",
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
      "A study assistant that lets students upload PDF or DOCX material and get grounded answers, quizzes, and flashcards generated from their own documents.",
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
    name: "WorkSkills AIRA",
    subtitle: "AI Career Guidance Chatbot",
    summary:
      "A bilingual career guidance chatbot powered by the Anthropic Claude API, delivered through a polished, responsive chat experience in English and Tamil.",
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
      "Ingest documents, extract and chunk text, generate embeddings, and index everything into a vector store for retrieval.",
  },
  {
    title: "Grounded LLM Responses",
    description:
      "Answers constrained to the retrieved context, with citations that point back to the source document.",
  },
  {
    title: "Vector Search",
    description:
      "Semantic retrieval over embedded document chunks using a vector database such as ChromaDB.",
  },
  {
    title: "LLM API Integration",
    description:
      "Integrating the Google Gemini and Anthropic Claude APIs with secure, environment-variable-based key handling.",
  },
  {
    title: "REST API Backends",
    description:
      "FastAPI and Express.js services that expose AI features to production frontends.",
  },
  {
    title: "Full-Stack Product Shipping",
    description:
      "React and TypeScript frontends deployed separately from AI backends — shipped, not prototyped.",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
