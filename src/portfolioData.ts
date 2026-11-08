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
    period: 'Present',
    description: 'Exploring multimodal retrieval-augmented generation and retrieval approaches for information-rich AI systems.',
  },
  {
    role: 'AI Engineering Intern',
    organization: 'Solytics Partners',
    type: 'Industry',
    period: 'Jun 2026 — Aug 2026',
    description: 'Cut RAG reranking latency by up to 92%, built an agentic platform with 14 AI tools and 20+ REST APIs, and delivered 10+ RAG and agentic workflows across three LLM platforms.',
  },
  {
    role: 'Finance Administration Coordinator',
    organization: 'HackPSU',
    type: 'Leadership',
    period: 'Jan 2025 — Present',
    description: 'Coordinate hackathon operations for 1,500+ participants and have evaluated 500+ project submissions across four hackathons for technical merit and innovation.',
  },
  {
    role: 'Resident Assistant',
    organization: 'Penn State',
    type: 'Leadership',
    period: 'Aug 2026 — Present',
    description: 'Support and mentor 50 residents within a 300-resident hall, collaborate with the residence life team, and plan community-building programs that promote connection and belonging.',
  },
  {
    role: 'Mathematics Exam Review Leader',
    organization: 'Penn State',
    type: 'Teaching',
    period: 'Aug 2026 — Present',
    description: 'Lead mathematics exam review sessions that reinforce core concepts, structured problem solving, and effective preparation strategies.',
  },
  {
    role: 'Mathematics Tutor',
    organization: 'Penn State',
    type: 'Teaching',
    period: 'Aug 2025 — Present',
    description: 'Tutor undergraduate students in calculus and core mathematics courses from MATH 4 through MATH 141, emphasizing conceptual clarity and independent problem solving.',
  },
  {
    role: 'IST Proctor',
    organization: 'Penn State',
    type: 'Academic Support',
    period: 'Aug 2025 — Present',
    description: 'Proctor undergraduate IST exams, maintain academic integrity, and support faculty with the preparation and administration of exam materials.',
  },
  {
    role: 'Mathematics Proctor',
    organization: 'Penn State',
    type: 'Academic Support',
    period: 'Mar 2025 — Present',
    description: 'Invigilate undergraduate mathematics exams and assist faculty with exam setup, material distribution, and efficient administration.',
  },
  {
    role: 'LEAP Mentor',
    organization: 'Penn State',
    type: 'Mentorship',
    period: 'Apr 2026 — Aug 2026',
    description: 'Supported 120 incoming first-year students through their transition to Penn State, leading academic success sessions, individual check-ins, and community-building programs.',
  },
  {
    role: 'Mathematics Learning Assistant',
    organization: 'Penn State',
    type: 'Teaching',
    period: 'Jan 2025 — Dec 2025',
    description: 'Supported MATH 140 students in limits, derivatives, and integrals, mentoring 40+ students weekly and using performance tracking to identify learning gaps.',
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
