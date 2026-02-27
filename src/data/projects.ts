export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  real?: boolean;
  dunderMifflin?: boolean;
  featured: boolean; // Appears on Home page
  showInProjects: boolean; // Appears on Projects page
}

export const projects: Project[] = [
  {
    title: "Autonomous Agent Swarm",
    description: "A multi-agent system built to research, summarize, and write code automatically. Utilizes parallel processing and robust prompt chaining to accomplish complex tasks.",
    tags: ["Python", "LangChain", "OpenAI", "Celery"],
    github: "https://github.com",
    live: "#",
    real: true,
    featured: true,
    showInProjects: true,
  },
  {
    title: "RAG Document Engine",
    description: "Retrieval-Augmented Generation system for querying massive internal knowledge bases. Features sub-second latency and semantic caching.",
    tags: ["Next.js", "Weaviate", "FastAPI", "React"],
    github: "https://github.com",
    live: "#",
    real: true,
    featured: true,
    showInProjects: true,
  },
  {
    title: "Semantic Code Search",
    description: "AI-powered tool that understands code semantics to find snippets via natural language, trained on a fine-tuned CodeBERT model.",
    tags: ["PyTorch", "Transformers", "React"],
    github: "https://github.com",
    live: "#",
    real: true,
    dunderMifflin: true,
    featured: true,
    showInProjects: true,
  },
  {
    title: "Vision Analysis Pipeline",
    description: "Real-time object detection and classification pipeline for manufacturing defects.",
    tags: ["TensorFlow", "OpenCV", "Docker"],
    github: "#",
    live: "#",
    real: true,
    featured: true,
    showInProjects: false,
  },
  {
    title: "Águila Desarrolladora",
    description: "Proyecto Homenaje: Algoritmo predictivo de partidos del América basado en sentimiento de afición.",
    tags: ["Sentiment Analysis", "Twitter API", "América Core"],
    github: "#",
    live: "#",
    real: false,
    featured: true,
    showInProjects: false,
  },
  {
    title: "Vision-Language Processor",
    description: "Multimodal application capable of analyzing images and providing detailed technical metadata and captioning for accessibility.",
    tags: ["LLaVA", "Gradio", "Docker"],
    github: "https://github.com",
    featured: false,
    showInProjects: true,
  },
  {
    title: "Trading Bot Simulation",
    description: "Reinforcement learning agent optimized to identify high-frequency trading patterns on crypto exchanges.",
    tags: ["Stable Baselines3", "Gymnasium", "Pandas"],
    github: "https://github.com",
    featured: false,
    showInProjects: true,
  },
  {
    title: "Personal AI Assistant UI",
    description: "Sleek chatbot interface featuring real-time streaming, chat history, and markdown rendering. Built purely with standard React and Tailwind.",
    tags: ["TypeScript", "Tailwind CSS", "Vercel AI SDK"],
    github: "https://github.com",
    featured: false,
    showInProjects: true,
  },
];
