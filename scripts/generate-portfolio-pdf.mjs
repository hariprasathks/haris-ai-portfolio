/**
 * Generates the Hari Prasath portfolio as a print-quality PDF.
 * Mirrors the live site's content (src/data/portfolio.ts) and its dark cinematic theme.
 *
 * Run:  bun scripts/generate-portfolio-pdf.mjs
 * Output: dist/Hari-Prasath-Portfolio.pdf
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public");
const OUT_PATH = path.join(OUT_DIR, "Hari-Prasath-Portfolio.pdf");

// ---------- Theme (mirrors src/index.css) ----------
const C = {
  bg: "#050315",
  panel: "#0D0A24",
  panelBorder: "#221C4A",
  fg: "#FBFBFE",
  soft: "#DEDcff",
  softMuted: "#A9A3D9",
  accent: "#433BFF",
  accentSoft: "#7A72FF",
  hairline: "#2A2455",
};

const FONT = "Helvetica";
const FONT_BOLD = "Helvetica-Bold";
const FONT_MONO = "Courier";
const M = 56; // page margin

const doc = new PDFDocument({
  size: "A4",
  margins: { top: M, bottom: M, left: M, right: M },
  info: {
    Title: "Hari Prasath's Portfolio — AI & Machine Learning Developer",
    Author: "Hari Prasath",
    Subject: "Portfolio — AI/ML projects, skills, education, contact",
    Keywords: "AI, Machine Learning, RAG, LLM, Full-Stack, Portfolio",
  },
});

fs.mkdirSync(OUT_DIR, { recursive: true });
doc.pipe(fs.createWriteStream(OUT_PATH));

// ---------- Content (mirrors src/data/portfolio.ts) ----------
const profile = {
  name: "Hari Prasath",
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
};

const projects = [
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
    live: "https://studymate-ai-frontend-m903.onrender.com",
    repo: "https://github.com/hariprasathks/StudyMate-Al",
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
    repo: "https://github.com/hariprasathks/WORKSKILLS_AIRA",
    highlights: [
      "Claude API integration with env-var-based key protection",
      "Node.js/Express backend",
      "English/Tamil bilingual interface",
      "Responsive chat UI with suggested prompts, typing indicators & theme support",
    ],
  },
];

const skillGroups = [
  { label: "AI & LLM Engineering", skills: ["RAG pipelines", "LLM APIs", "Semantic retrieval", "Prompt engineering", "Embeddings", "Vector search"] },
  { label: "Backend", skills: ["FastAPI", "Node.js", "Express.js", "REST APIs"] },
  { label: "Vector & Data", skills: ["ChromaDB", "Text extraction", "Document chunking"] },
  { label: "Frontend", skills: ["React", "TypeScript", "Vite", "Tailwind CSS"] },
];

const capabilities = [
  ["RAG Pipelines", "Ingest documents, extract and chunk text, generate embeddings, and index everything into a vector store for retrieval."],
  ["Grounded LLM Responses", "Answers constrained to the retrieved context, with citations that point back to the source document."],
  ["Vector Search", "Semantic retrieval over embedded document chunks using a vector database such as ChromaDB."],
  ["LLM API Integration", "Integrating the Google Gemini and Anthropic Claude APIs with secure, environment-variable-based key handling."],
  ["REST API Backends", "FastAPI and Express.js services that expose AI features to production frontends."],
  ["Full-Stack Product Shipping", "React and TypeScript frontends deployed separately from AI backends — shipped, not prototyped."],
];

// ---------- Helpers ----------
const PAGE_W = doc.page.width;
const CONTENT_W = PAGE_W - M * 2;

let y = 0;

function sectionTitle(text) {
  doc
    .moveTo(M, y + 12)
    .lineTo(M + CONTENT_W, y + 12)
    .lineWidth(0.75)
    .strokeColor(C.hairline)
    .stroke();
  doc
    .font(FONT_MONO)
    .fontSize(8.5)
    .fillColor(C.accentSoft)
    .text(text.toUpperCase().split("").join(" "), M, y + 24, {
      characterSpacing: 2,
    });
  doc.font(FONT_BOLD).fontSize(22).fillColor(C.fg);
  y = doc.y + 8;
  return y;
}

function headingAfter(rule) {
  // positions the big heading under a kicker rule
  y += 34;
}

function pageBackground() {
  doc.rect(0, 0, PAGE_W, doc.page.height).fill(C.bg);
}

function newPage() {
  doc.addPage();
  pageBackground();
  y = M;
}

function ensureSpace(needed) {
  if (y + needed > doc.page.height - M) newPage();
}

function panel(x, w, h, radius = 8) {
  doc
    .roundedRect(x, y, w, h, radius)
    .lineWidth(1)
    .fillAndStroke(C.panel, C.panelBorder);
}

function wrapped(text, font, size, color, opts = {}) {
  doc.font(font).fontSize(size).fillColor(color);
  doc.text(text, opts.x ?? M, opts.y ?? y, {
    width: opts.width ?? CONTENT_W,
    lineGap: opts.lineGap ?? 3,
    ...(opts.align ? { align: opts.align } : {}),
  });
  y = doc.y + (opts.after ?? 0);
}

// ---------- Page 1: Cover ----------
pageBackground();

// Horizon glow (radial-ish approximation with layered translucent rects)
doc.save();
const glow = doc.linearGradient(0, 0, 0, 340);
glow.stop(0, "#2F27CE").stop(1, C.bg);
doc.opacity = 0.28;
doc.rect(0, 0, PAGE_W, 340).fill(glow);
doc.opacity = 1;
doc.restore();

// Grid dots for texture
doc.save();
doc.opacity = 0.14;
for (let gx = M; gx < PAGE_W - M; gx += 26) {
  for (let gy = 90; gy < 300; gy += 26) {
    doc.circle(gx, gy, 0.7).fill(C.soft);
  }
}
doc.restore();

y = 150;
wrapped("OPEN TO INTERNSHIPS & COLLABORATIONS", FONT_MONO, 8.5, C.accentSoft, {
  after: 18,
});
wrapped("HARI PRASATH", FONT_BOLD, 54, C.fg, { lineGap: 2 });
wrapped("AI & MACHINE LEARNING DEVELOPER", FONT_MONO, 11, C.accentSoft, {
  after: 22,
});
wrapped(
  "I build and ship full-stack AI products — LLM applications, RAG pipelines, and vector search — on top of modern web technologies.",
  FONT,
  13.5,
  C.softMuted,
  { after: 30, width: CONTENT_W - 80 }
);

// Contact chips row
const chips = [
  ["GitHub", profile.github],
  ["LinkedIn", profile.linkedin],
  [profile.email, `mailto:${profile.email}`],
];
let cx = M;
for (const [label, url] of chips) {
  doc.font(FONT).fontSize(9.5);
  const w = doc.widthOfString(label) + 24;
  doc.roundedRect(cx, y, w, 24, 12).lineWidth(1).stroke(C.panelBorder).fill(C.panel);
  doc.fillColor(C.soft).text(label, cx + 12, y + 8, { link: url, underline: false });
  cx += w + 10;
}
y += 44;

// Meta line
wrapped(
  `${profile.location}   ·   ${profile.education.graduation.replace("Expected ", "B.Sc. AI & ML — expected graduation ")}   ·   ${new Date().getFullYear()}`,
  FONT_MONO,
  8.5,
  C.softMuted,
  { after: 0 }
);

// Footer note
doc
  .font(FONT_MONO)
  .fontSize(7.5)
  .fillColor(C.softMuted)
  .text(
    "This document mirrors Hari Prasath's live portfolio site. All links are clickable.",
    M,
    doc.page.height - M + 10,
    { width: CONTENT_W, align: "center" }
  );

// ---------- Page 2: About ----------
newPage();

sectionTitle("01 — About");
wrapped("Building practical AI products, not demos.", FONT_BOLD, 26, C.fg, {
  after: 16,
});

const aboutParas = [
  "I'm Hari Prasath, an AI & Machine Learning developer based in Pollachi, Tamil Nadu. I'm pursuing a B.Sc. in Artificial Intelligence and Machine Learning at Shri Nehru Maha Vidyalaya College of Arts and Science, graduating in 2028 — but most of what I ship comes from building real products end to end.",
  "My work sits at the intersection of applied AI and web engineering: taking an LLM from an API call to a production feature — document ingestion, chunking, embeddings, vector indexing, semantic retrieval, and grounded answers users can actually trust.",
  "Right now I'm focused on RAG systems, LLM API integrations, and the full-stack craft that turns them into tools people use — like StudyMate AI, a deployed RAG study assistant, and WorkSkills AIRA, a bilingual career guidance chatbot.",
];
for (const p of aboutParas) {
  wrapped(p, FONT, 10.5, C.softMuted, { after: 12, lineGap: 4 });
}

// Terminal-style snapshot panel
ensureSpace(240);
const boxTop = y + 6;
const boxH = 190;
doc.roundedRect(M, boxTop, CONTENT_W, boxH, 8).lineWidth(1).fillAndStroke(C.panel, C.panelBorder);
// window dots
for (let i = 0; i < 3; i++) {
  doc.circle(M + 16 + i * 14, boxTop + 16, 3).fill(["#F87171", "#FBBF24", "#4ADE80"][i]);
}
doc.font(FONT_MONO).fontSize(8).fillColor(C.softMuted).text("hari — profile", M + 64, boxTop + 12);

const rows = [
  ["role", "AI & ML Developer"],
  ["location", profile.location],
  ["education", "B.Sc. Artificial Intelligence & Machine Learning — 2028"],
  ["focus", "RAG · LLMs · Vector Search"],
  ["status", "open to internships & collaborations"],
];
let ry = boxTop + 40;
for (const [k, v] of rows) {
  doc.font(FONT_MONO).fontSize(9).fillColor(C.accentSoft).text(k, M + 16, ry);
  doc.font(FONT_MONO).fontSize(9).fillColor(C.fg).text(v, M + 110, ry, { width: CONTENT_W - 130 });
  ry += 26;
}
y = boxTop + boxH + 20;

// ---------- Page 3: Featured Projects ----------
newPage();
sectionTitle("02 — Featured Projects");
wrapped("Shipped, deployed, in production.", FONT_BOLD, 26, C.fg, { after: 8 });
wrapped(
  "Two full-stack AI products — from document ingestion to grounded answers, from the Claude API to a bilingual chat interface.",
  FONT,
  10.5,
  C.softMuted,
  { after: 20 }
);

for (const p of projects) {
  ensureSpace(280);
  const cardTop = y + 4;
  // measure
  doc.font(FONT).fontSize(9.5);
  const techStr = p.tech.join("   ·   ");
  const sumH = doc.heightOfString(p.summary, { width: CONTENT_W - 48 });
  const highH = p.highlights.reduce(
    (acc, h) => acc + doc.font(FONT).fontSize(9.5).heightOfString(h, { width: CONTENT_W - 96 }),
    0
  );
  const techH = doc.font(FONT).fontSize(9.5).heightOfString(techStr, { width: CONTENT_W - 48 });
  const cardH = 96 + sumH + highH + p.highlights.length * 6 + techH + 56;

  panel(M, CONTENT_W, cardH);
  y = cardTop + 20;

  // index number + name
  doc.font(FONT_BOLD).fontSize(24).fillColor("#3A326E").text(p.index, M + 24, y);
  doc.font(FONT_BOLD).fontSize(15).fillColor(C.fg).text(p.name, M + 84, y + 4);
  doc.font(FONT_MONO).fontSize(8.5).fillColor(C.accentSoft).text(
    p.subtitle.toUpperCase(), M + 84, y + 24, { characterSpacing: 1 }
  );
  y += 52;

  // links row
  let lx = M + 24;
  const linkChips = p.live ? [["Live Demo ↗", p.live], ["Source ↗", p.repo]] : [["Source ↗", p.repo]];
  for (const [label, url] of linkChips) {
    doc.font(FONT_BOLD).fontSize(8.5);
    const w = doc.widthOfString(label) + 20;
    doc.roundedRect(lx, y, w, 20, 6).lineWidth(1).stroke(C.accent);
    doc.fillColor(C.accentSoft).text(label, lx + 10, y + 6, { link: url });
    lx += w + 8;
  }
  y += 32;

  wrapped(p.summary, FONT, 9.5, C.softMuted, { x: M + 24, width: CONTENT_W - 48, after: 8 });

  for (const h of p.highlights) {
    doc.circle(M + 28, y + 5, 1.5).fill(C.accentSoft);
    wrapped(h, FONT, 9.5, C.soft, { x: M + 40, width: CONTENT_W - 64, after: 4 });
  }

  doc
    .moveTo(M + 24, y + 2)
    .lineTo(M + CONTENT_W - 24, y + 2)
    .lineWidth(0.5)
    .strokeColor(C.panelBorder)
    .stroke();
  y += 10;
  wrapped(techStr, FONT_MONO, 8.5, C.softMuted, { x: M + 24, width: CONTENT_W - 48, after: 16 });
  y += 6;
}

// ---------- Page 4: Skills ----------
newPage();
sectionTitle("03 — Technical Skills");
wrapped("The stack behind the systems.", FONT_BOLD, 26, C.fg, { after: 18 });

const colW = (CONTENT_W - 16) / 2;
for (let i = 0; i < skillGroups.length; i++) {
  const g = skillGroups[i];
  const col = i % 2;
  if (col === 0) ensureSpace(150);
  const gx = M + col * (colW + 16);
  const gy = col === 0 ? y : y;
  doc.roundedRect(gx, gy, colW, 118, 8).lineWidth(1).fillAndStroke(C.panel, C.panelBorder);
  doc.font(FONT_MONO).fontSize(8).fillColor(C.accentSoft).text(
    g.label.toUpperCase(), gx + 16, gy + 16, { characterSpacing: 1.5 }
  );
  // chips
  let chx = gx + 16;
  let chy = gy + 40;
  for (const s of g.skills) {
    doc.font(FONT).fontSize(9);
    const w = doc.widthOfString(s) + 18;
    if (chx + w > gx + colW - 12) {
      chx = gx + 16;
      chy += 26;
    }
    doc.roundedRect(chx, chy, w, 21, 5).lineWidth(1).stroke(C.panelBorder);
    doc.fillColor(C.soft).text(s, chx + 9, chy + 6);
    chx += w + 7;
  }
  if (col === 1) y += 134;
}

// ---------- Page 5: AI Capabilities ----------
newPage();
sectionTitle("04 — AI Engineering Capabilities");
wrapped("From document to grounded answer.", FONT_BOLD, 26, C.fg, { after: 18 });

const capCols = 2;
const capColW = (CONTENT_W - 16) / capCols;
const capCardH = 108;
capabilities.forEach(([title, desc], i) => {
  if (i % capCols === 0) ensureSpace(capCardH + 16);
  const cx0 = M + (i % capCols) * (capColW + 16);
  const cy0 = y;
  doc.roundedRect(cx0, cy0, capColW, capCardH, 8).lineWidth(1).fillAndStroke(C.panel, C.panelBorder);
  doc.font(FONT_MONO).fontSize(8).fillColor(C.softMuted).text(
    String(i + 1).padStart(2, "0"), cx0 + 16, cy0 + 14
  );
  doc.font(FONT_BOLD).fontSize(12).fillColor(C.fg).text(title, cx0 + 16, cy0 + 34, { width: capColW - 32 });
  doc.font(FONT).fontSize(8.5).fillColor(C.softMuted).text(desc, cx0 + 16, cy0 + 54, {
    width: capColW - 32,
    lineGap: 2,
  });
  if (i % capCols === 1) y += capCardH + 16;
});

// ---------- Page 6: Education + GitHub ----------
newPage();
sectionTitle("05 — Education");
const eduTop = y + 6;
const eduH = 150;
doc.roundedRect(M, eduTop, CONTENT_W, eduH, 8).lineWidth(1).fillAndStroke(C.panel, C.panelBorder);
doc.font(FONT_BOLD).fontSize(16).fillColor(C.fg).text(profile.education.degree, M + 24, eduTop + 24, { width: CONTENT_W - 180 });
doc.font(FONT).fontSize(10).fillColor(C.softMuted).text(profile.education.college, M + 24, eduTop + 52, { width: CONTENT_W - 180 });
doc.font(FONT_MONO).fontSize(8.5).fillColor(C.accentSoft).text(profile.location.toUpperCase(), M + 24, eduTop + 72, { characterSpacing: 1 });
// Class of 2028
doc.font(FONT_MONO).fontSize(8).fillColor(C.softMuted).text("CLASS OF", M + CONTENT_W - 120, eduTop + 24);
doc.font(FONT_BOLD).fontSize(30).fillColor(C.fg).text("2028", M + CONTENT_W - 120, eduTop + 38);
doc.font(FONT_MONO).fontSize(7.5).fillColor(C.softMuted).text("EXPECTED GRADUATION", M + CONTENT_W - 120, eduTop + 74);
y = eduTop + eduH + 28;

sectionTitle("06 — GitHub");
wrapped("Code lives in the open.", FONT_BOLD, 26, C.fg, { after: 14 });
wrapped(
  "Every project starts as a public repository — explore the source, the commits, and how each system is structured.",
  FONT,
  10.5,
  C.softMuted,
  { after: 16 }
);
for (const p of projects) {
  const ghTop = y;
  const ghH = 64;
  doc.roundedRect(M, ghTop, CONTENT_W, ghH, 8).lineWidth(1).fillAndStroke(C.panel, C.panelBorder);
  doc.font(FONT_MONO).fontSize(9.5).fillColor(C.fg).text(
    `hariprasathks/${p.repo.split("/").pop()}`, M + 20, ghTop + 14, { link: p.repo }
  );
  doc.font(FONT).fontSize(9).fillColor(C.softMuted).text(p.subtitle, M + 20, ghTop + 36);
  y += ghH + 12;
}
// all repos link
doc.roundedRect(M, y, CONTENT_W, 40, 8).lineWidth(1).stroke(C.panelBorder);
doc.font(FONT).fontSize(9.5).fillColor(C.softMuted).text(
  "See all repositories on GitHub ↗", M + 20, y + 13, { link: `${profile.github}?tab=repositories` }
);
y += 56;

// ---------- Page 7: Contact ----------
newPage();
// bottom glow
doc.save();
doc.opacity = 0.2;
const cg = doc.linearGradient(0, doc.page.height - 300, 0, doc.page.height);
cg.stop(0, C.bg).stop(1, "#2F27CE");
doc.rect(0, doc.page.height - 300, PAGE_W, 300).fill(cg);
doc.restore();

y = 170;
sectionTitle("07 — Contact");
wrapped("Let's build something intelligent.", FONT_BOLD, 28, C.fg, { after: 14, align: "center" });
wrapped(
  "Open to internships, AI engineering roles, and collaborations on LLM-powered products. The fastest way to reach me is email.",
  FONT,
  11,
  C.softMuted,
  { after: 34, align: "center", width: CONTENT_W - 120, x: M + 60 }
);

// Email panel
const emailPanelW = 380;
const emailPanelX = (PAGE_W - emailPanelW) / 2;
doc.roundedRect(emailPanelX, y, emailPanelW, 52, 10).lineWidth(1).fillAndStroke(C.panel, C.panelBorder);
doc.font(FONT_BOLD).fontSize(11.5).fillColor(C.fg).text(
  profile.email, emailPanelX, y + 18, { width: emailPanelW, align: "center", link: `mailto:${profile.email}` }
);
y += 68;

// Social row
const socials = [
  ["GitHub", profile.github],
  ["LinkedIn", profile.linkedin],
];
let sx = (PAGE_W - (2 * 150 + 12)) / 2;
for (const [label, url] of socials) {
  doc.roundedRect(sx, y, 150, 40, 10).lineWidth(1).stroke(C.panelBorder);
  doc.font(FONT_BOLD).fontSize(10).fillColor(C.soft).text(label, sx, y + 14, {
    width: 150, align: "center", link: url,
  });
  sx += 162;
}
y += 64;

wrapped(
  profile.location.toUpperCase(),
  FONT_MONO,
  8.5,
  C.softMuted,
  { align: "center", characterSpacing: 2 }
);

// ---------- Page 8: Technical Implementation (Appendix) ----------
newPage();
sectionTitle("Appendix — Technical Implementation");
wrapped("How the site is built.", FONT_BOLD, 26, C.fg, { after: 16 });

const techNotes = [
  ["Stack", "React 19 + TypeScript on Vite, styled with Tailwind CSS v4 and shadcn/ui primitives. Motion via Framer Motion. Deployed from this repository with Convex handling backend/auth scaffolding."],
  ["Design system", "Dark cinematic theme on a deep-space background (#050315) with a single violet accent family (#2F27CE / #433BFF), Inter for text and JetBrains Mono for technical labels."],
  ["Sections", "Sticky navigation · Hero · About · Featured Projects · Technical Skills · AI Engineering Capabilities · Education · GitHub · Contact · Footer."],
  ["Motion", "Restrained Framer Motion: staggered hero entrance, scroll-triggered reveals, hover states and navigation transitions. No decorative animation loops."],
  ["Accessibility & SEO", "Semantic landmarks, labeled navigation, keyboard-focusable links, descriptive meta/Open Graph tags and a PWA manifest."],
  ["Links", "All project, GitHub, LinkedIn and email actions are live — nothing on the site is a static mockup."],
];
let tny = y + 4;
for (const [k, v] of techNotes) {
  doc.font(FONT_BOLD).fontSize(10.5).fillColor(C.fg).text(k, M, tny, { width: 140 });
  doc.font(FONT).fontSize(9.5).fillColor(C.softMuted).text(v, M + 150, tny, { width: CONTENT_W - 150, lineGap: 3 });
  tny = Math.max(doc.y, tny) + 22;
}
y = tny;

// ---------- Footer on every page ----------
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);
  pageBackgroundless();
  doc
    .font(FONT_MONO)
    .fontSize(7.5)
    .fillColor(C.softMuted)
    .text(
      `HARI PRASATH — PORTFOLIO      ·      ${profile.github.replace("https://", "")}      ·      PAGE ${i + 1} / ${range.count}`,
      M,
      doc.page.height - 28,
      { width: CONTENT_W, align: "center" }
    );
}

function pageBackgroundless() {
  // placeholder to keep footer pass simple
}

doc.end();
console.log(`✅ PDF written to ${OUT_PATH}`);
