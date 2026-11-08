export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const experience = [
  {
    role: 'Undergraduate Research Assistant',
    organization: 'Penn State',
    type: 'Research',
    description: 'Exploring multimodal retrieval-augmented generation and retrieval approaches for information-rich AI systems.',
  },
  {
    role: 'AI Engineering Intern',
    organization: 'Solytics Partners',
    type: 'Industry',
    description: 'Contributed to AI engineering work and gained industry experience building software around intelligent systems.',
  },
  {
    role: 'LEAP Mentor',
    organization: 'Penn State',
    type: 'Mentorship',
    description: 'Supported students through Penn State’s LEAP program and helped them navigate the transition to university life.',
  },
  {
    role: 'Mathematics Tutor',
    organization: 'Penn State',
    type: 'Teaching',
    description: 'Helped students develop mathematical understanding through clear, structured problem solving.',
  },
]

export const projects = [
  {
    number: '01',
    title: 'AI-Powered Document Editor',
    eyebrow: 'Applied AI',
    description: 'An intelligent document workspace that brings AI-assisted workflows directly into the editing experience.',
    tags: ['AI applications', 'Document systems', 'Software engineering'],
    link: null,
  },
  {
    number: '02',
    title: 'MyCord Terminal Chat System',
    eyebrow: 'Systems engineering',
    description: 'A deployable C client-server chat system with real-time messaging, a custom TCP protocol, multithreaded server handling, and an interactive terminal UI.',
    tags: ['C', 'POSIX sockets', 'pthreads', 'Docker'],
    link: 'https://github.com/romeirranjan/MyCord-TUI-Command-Line-Agent',
  },
  {
    number: '03',
    title: 'Multimodal Course Knowledge Retrieval',
    eyebrow: 'AI research',
    description: 'A course-knowledge retrieval direction centered on multimodal RAG, retrieval fusion, and an API for accessing structured course information.',
    tags: ['Multimodal RAG', 'Retrieval fusion', 'Course Knowledge API'],
    link: null,
  },
]

export const skillGroups = [
  { label: 'Programming', values: ['Python', 'TypeScript', 'JavaScript', 'C'] },
  { label: 'AI / ML', values: ['Multimodal RAG', 'BGE-M3', 'ColQwen', 'LightRAG', 'LLM applications'] },
  { label: 'Data Science', values: ['Data analysis', 'Data visualization', 'Retrieval evaluation', 'Experimentation'] },
  { label: 'Frameworks', values: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Streamlit'] },
  { label: 'Developer Tools', values: ['Git', 'GitHub', 'Docker', 'Terminal'] },
  { label: 'Mathematics', values: ['Calculus', 'Linear algebra', 'Probability', 'Statistics'] },
]

export const researchTopics = ['BGE-M3', 'ColQwen', 'LightRAG', 'Retrieval fusion', 'Course Knowledge API']

export const socialLinks = {
  github: 'https://github.com/romeirranjan',
  linkedin: 'https://www.linkedin.com/in/romeir-ranjan/',
  email: 'mailto:romeirranjan@gmail.com',
}
