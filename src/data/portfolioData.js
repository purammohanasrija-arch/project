// ============================================================
// PORTFOLIO DATA – Single source of truth
// Source: Mohana Srija Puram Resume
// ============================================================

export const personal = {
  name: "Mohana Srija Puram",
  initials: "MSP",
  title: "Computer Science Engineering Student | Aspiring Software Developer",
  tagline: "Turning Ideas into Real-World Solutions",
  bio: "Motivated third-year Computer Science Engineering student with a strong foundation in programming, data structures, and full-stack development, and a growing focus on machine learning and AI-driven applications. Seeking opportunities to apply technical and problem-solving skills to real-world projects, deepen ML expertise, and gain industry experience.",
  location: "Tenali, Andhra Pradesh, India",
  email: "purammohanasrija@gmail.com",
  phone: "+91-8074177416",
  linkedin: "https://linkedin.com/in/mohana-srija-puram-47b628336",
  github: "https://github.com/purammohanasrija-arch",
  resume: "/resume/Mohana-Srija-Puram-Resume.pdf",
};

export const stats = [
  { value: 8.15, suffix: "", label: "CGPA", sublabel: "B.Tech CSE", decimals: 2 },
  { value: 4, suffix: "+", label: "Projects", sublabel: "Real-World Apps", decimals: 0 },
  { value: 3, suffix: "", label: "Internships", sublabel: "Industry Experience", decimals: 0 },
  { value: 13, suffix: "+", label: "Certifications", sublabel: "Verified Skills", decimals: 0 },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Vignan's Foundation for Science, Technology and Research",
    period: "2024 – 2028 (Expected)",
    score: "CGPA: 8.15 / 10",
    type: "university",
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "Sri Chaitanya Junior College, Tenali",
    period: "2022 – 2024",
    score: "Percentage: 80.3%",
    type: "school",
  },
  {
    degree: "SSC (10th Grade)",
    institution: "Sri Chaitanya School, Tenali",
    period: "2021 – 2022",
    score: "Percentage: 93.8%",
    type: "school",
  },
];

export const skills = {
  "Programming Languages": ["C", "Python", "Java", "DSA", "OS"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "MERN Stack"],
  "Databases": ["MySQL", "MongoDB", "Firebase"],
  "Tools & Platforms": ["VS Code", "Git", "GitHub", "Linux (Ubuntu)"],
  "AI / ML": ["Machine Learning", "Artificial Intelligence", "AI Agents", "LLM Integration"],
  "APIs": ["OpenAI API", "Gemini API"],
  "UI/UX": ["Figma", "Framer Motion", "Responsive Design"],
};

export const skillNodes = [
  { id: "python", label: "Python", category: "Programming Languages", color: "#3b82f6", size: 1.4 },
  { id: "java", label: "Java", category: "Programming Languages", color: "#f59e0b", size: 1.2 },
  { id: "c", label: "C", category: "Programming Languages", color: "#6366f1", size: 1.0 },
  { id: "dsa", label: "DSA", category: "Programming Languages", color: "#8b5cf6", size: 1.3 },
  { id: "react", label: "React", category: "Web Technologies", color: "#06b6d4", size: 1.5 },
  { id: "nodejs", label: "Node.js", category: "Web Technologies", color: "#22c55e", size: 1.4 },
  { id: "js", label: "JavaScript", category: "Web Technologies", color: "#eab308", size: 1.5 },
  { id: "html", label: "HTML", category: "Web Technologies", color: "#f97316", size: 1.1 },
  { id: "css", label: "CSS", category: "Web Technologies", color: "#3b82f6", size: 1.1 },
  { id: "mongodb", label: "MongoDB", category: "Databases", color: "#22c55e", size: 1.3 },
  { id: "mysql", label: "MySQL", category: "Databases", color: "#06b6d4", size: 1.2 },
  { id: "firebase", label: "Firebase", category: "Databases", color: "#f59e0b", size: 1.1 },
  { id: "git", label: "Git/GitHub", category: "Tools & Platforms", color: "#f97316", size: 1.2 },
  { id: "linux", label: "Linux", category: "Tools & Platforms", color: "#a3a3a3", size: 1.0 },
  { id: "ml", label: "ML/AI", category: "AI / ML", color: "#ec4899", size: 1.5 },
  { id: "llm", label: "LLM/Agents", category: "AI / ML", color: "#7c3aed", size: 1.3 },
  { id: "openai", label: "OpenAI API", category: "APIs", color: "#10b981", size: 1.2 },
  { id: "gemini", label: "Gemini API", category: "APIs", color: "#3b82f6", size: 1.1 },
  { id: "figma", label: "Figma", category: "UI/UX", color: "#ec4899", size: 1.1 },
  { id: "express", label: "Express", category: "Web Technologies", color: "#6b7280", size: 1.2 },
];

export const projects = [
  {
    id: "disaster-response",
    title: "Autonomous Disaster Response Coordination System",
    shortTitle: "Disaster AI Allocator",
    tagline: "AI-powered real-time disaster management platform",
    tech: ["Flask", "MongoDB", "Groq Llama 3", "Python", "WhatsApp API", "OpenStreetMap"],
    techColors: { "Flask": "#22c55e", "MongoDB": "#22c55e", "Groq Llama 3": "#7c3aed", "Python": "#3b82f6" },
    description: "An AI-powered disaster management platform for real-time disaster analysis and response, featuring AI agents for severity assessment, resource allocation, and route optimization.",
    problem: "During disasters, resource allocation is slow and manual, leading to delayed response and loss of life.",
    solution: "An autonomous multi-agent AI system that analyzes disaster data in real-time, allocates resources intelligently, and optimizes evacuation routes automatically.",
    features: [
      "AI agents for severity assessment and resource allocation",
      "Route optimization for emergency response",
      "WhatsApp SOS alerts integration",
      "Live weather monitoring",
      "Interactive maps",
      "Bilingual (English/Telugu) AI chatbot",
      "OTP-based two-factor authentication",
      "Admin analytics dashboard",
    ],
    architecture: [
      { layer: "Frontend", items: ["HTML/CSS/JS", "Interactive Maps", "Admin Dashboard"] },
      { layer: "Backend", items: ["Flask (Python)", "REST API", "Auth (OTP 2FA)"] },
      { layer: "AI Agents", items: ["Groq Llama 3", "Severity Agent", "Resource Agent", "Route Agent"] },
      { layer: "Database", items: ["MongoDB", "User Data", "Incident Logs"] },
      { layer: "External APIs", items: ["WhatsApp API", "Weather API", "OpenStreetMap"] },
    ],
    github: "https://github.com/purammohanasrija-arch/Autonomous-Disaster-Response-Coordination-System",
    demo: "https://disaster-response-system-rta2.onrender.com/login",
    color: "#ef4444",
    gradient: "from-red-900/30 to-orange-900/20",
    icon: "🚨",
  },
  {
    id: "weather-travel",
    title: "Weather Travel Planner – Full Stack Web Application",
    shortTitle: "Weather Travel Planner",
    tagline: "Full-stack travel planner with AI chatbot and live weather",
    tech: ["MongoDB", "Express", "React", "Node.js", "OpenAI API", "JWT", "Recharts", "Framer Motion"],
    techColors: { "React": "#06b6d4", "Node.js": "#22c55e", "MongoDB": "#22c55e", "OpenAI API": "#10b981" },
    description: "A full-stack travel planning application with live weather lookup by city or GPS, 5-day forecast, JWT authentication, trip planner, and an AI-powered travel chatbot covering 105+ global landmarks.",
    problem: "Travelers need multiple apps to check weather, plan trips, and get destination recommendations.",
    solution: "A unified full-stack application combining real-time weather, AI-powered travel recommendations, and trip management in one responsive interface.",
    features: [
      "Live weather lookup by city or GPS",
      "5-day forecast visualized with Recharts",
      "Secure JWT + bcrypt authentication",
      "Trip planner with budget calculation",
      "MongoDB CRUD-based trip storage",
      "AI travel chatbot covering 105+ global landmarks",
      "Responsive UI with Framer Motion animations",
      "Dark mode and search history",
    ],
    architecture: [
      { layer: "Frontend", items: ["React", "Recharts", "Framer Motion", "Dark Mode UI"] },
      { layer: "Backend", items: ["Node.js", "Express", "JWT Auth", "bcrypt"] },
      { layer: "AI Layer", items: ["OpenAI API", "Travel Chatbot", "105+ Landmarks"] },
      { layer: "Database", items: ["MongoDB", "Trip Storage", "User Accounts"] },
      { layer: "External APIs", items: ["Weather API", "GPS/Geolocation"] },
    ],
    github: "https://github.com/purammohanasrija-arch/Weather-Travel-Planner-/tree/main/Weather-Travel-Planner",
    demo: "https://weather-travel-planner-client-qmsi.onrender.com/",
    color: "#06b6d4",
    gradient: "from-cyan-900/30 to-blue-900/20",
    icon: "✈️",
  },
  {
    id: "hamiltonian",
    title: "Hamiltonian Cycle Backtracking Visualizer",
    shortTitle: "Hamiltonian Visualizer",
    tagline: "Interactive algorithm visualization with backtracking",
    tech: ["HTML", "CSS", "JavaScript"],
    techColors: { "HTML": "#f97316", "CSS": "#3b82f6", "JavaScript": "#eab308" },
    description: "An interactive web application visualizing the Hamiltonian Cycle problem using backtracking, with live graph rendering, dynamic adjacency matrix, and state-space tree.",
    problem: "Understanding complex graph algorithms like Hamiltonian Cycle through static textbooks is difficult.",
    solution: "An interactive visual tool that animates the backtracking process step-by-step with controls and logs.",
    features: [
      "Interactive Hamiltonian Cycle visualization",
      "Backtracking algorithm with live graph rendering",
      "Dynamic adjacency matrix",
      "State-space tree visualization",
      "Animation controls and adjustable speed",
      "Step-by-step execution logs",
      "Multiple graph presets",
      "Responsive UI",
    ],
    architecture: [
      { layer: "Frontend", items: ["HTML5 Canvas", "CSS3 Animations", "Vanilla JavaScript"] },
      { layer: "Algorithm", items: ["Backtracking Engine", "State-Space Tree", "Path Finder"] },
      { layer: "Visualization", items: ["Graph Renderer", "Adjacency Matrix", "Execution Logger"] },
    ],
    github: "https://github.com/purammohanasrija-arch/Hamiltonian-Cycle",
    demo: "https://hamiltonian-cycle.onrender.com",
    color: "#8b5cf6",
    gradient: "from-purple-900/30 to-violet-900/20",
    icon: "🔄",
  },
  {
    id: "bridge-crossing",
    title: "Bridge Crossing Problem Visualizer",
    shortTitle: "Bridge Crossing",
    tagline: "Greedy algorithm simulation with interactive animations",
    tech: ["HTML", "CSS", "JavaScript"],
    techColors: { "HTML": "#f97316", "CSS": "#3b82f6", "JavaScript": "#eab308" },
    description: "An interactive simulation of the Bridge Crossing problem using a greedy strategy, featuring real-time animations, timer tracking, movement logs, dark/light mode, and sound effects.",
    problem: "Teaching greedy algorithms through theory alone doesn't convey the decision-making process clearly.",
    solution: "An animated simulation that visually walks through each step of the greedy approach with timing, logs, and audio feedback.",
    features: [
      "Bridge Crossing greedy algorithm simulation",
      "Real-time animations and timer tracking",
      "Movement logs",
      "Dark/light mode toggle",
      "Sound effects for enhanced learning",
      "Step-by-step visualization",
    ],
    architecture: [
      { layer: "Frontend", items: ["HTML5", "CSS3 Transitions", "Vanilla JavaScript"] },
      { layer: "Algorithm", items: ["Greedy Strategy", "Step Sequencer", "Timer Engine"] },
      { layer: "UX Layer", items: ["Sound Engine", "Theme Manager", "Movement Logger"] },
    ],
    github: "https://github.com/purammohanasrija-arch/Bridge-Crossing",
    demo: null,
    color: "#f59e0b",
    gradient: "from-amber-900/30 to-yellow-900/20",
    icon: "🌉",
  },
];

export const internships = [
  {
    id: "codealpha",
    company: "CodeAlpha",
    role: "Software Development Intern (App Development)",
    period: "2025",
    color: "#7c3aed",
    tasks: [
      {
        title: "Fitness Tracker App",
        tech: "Python, Flask, SQLite",
        description: "Built a fitness dashboard with progress tracking, goals, and workout visualizations.",
      },
      {
        title: "Language Learning App",
        tech: "Python, Flask, Firebase",
        description: "Developed a learning platform with flashcards, quizzes, and progress tracking.",
      },
      {
        title: "Smart Flashcard Learning Hub",
        tech: "HTML, CSS, JavaScript",
        description: "Created an interactive flashcard app with animations, CRUD, categories, and localStorage.",
      },
    ],
  },
  {
    id: "prodigy",
    company: "Prodigy InfoTech",
    role: "Full-Stack Web Development Intern",
    period: "2024",
    color: "#06b6d4",
    tasks: [
      {
        title: "Task 01: Responsive Landing Page",
        tech: "HTML, CSS, JavaScript",
        description: "Landing page with fixed, interactive navigation menu that changes style on scroll or hover.",
      },
      {
        title: "Task 02: Stopwatch Web Application",
        tech: "HTML, CSS, JavaScript",
        description: "Stopwatch app with start, pause, reset, and lap time tracking.",
      },
      {
        title: "Task 03: Tic-Tac-Toe Web Application",
        tech: "HTML, CSS, JavaScript",
        description: "Interactive Tic-Tac-Toe supporting player-vs-player and player-vs-AI with win-checking logic.",
      },
      {
        title: "Task 04: Personal Portfolio Website",
        tech: "HTML, CSS, JavaScript",
        description: "Portfolio site showcasing skills, projects, education, and experience.",
      },
      {
        title: "Task 05: Weather App",
        tech: "HTML, CSS, JavaScript",
        description: "Fetches and displays current weather conditions from a weather API based on user location.",
      },
    ],
  },
  {
    id: "unified",
    company: "Unified Mentor",
    role: "Intern",
    period: "Commencing June 2026",
    color: "#22c55e",
    tasks: [],
  },
];

export const extracurricular = [
  {
    role: "Coordinator",
    event: "62nd National Chess Championship",
    organization: "Vignan University",
    icon: "♟️",
  },
];

export const certifications = [
  // Cisco
  { id: "cisco-os", title: "Operating Systems Basics", issuer: "Cisco Networking Academy", category: "Cisco", color: "#0ea5e9" },
  { id: "cisco-js1", title: "JavaScript Essentials 1", issuer: "Cisco Networking Academy", category: "Cisco", color: "#0ea5e9" },
  { id: "cisco-js2", title: "JavaScript Essentials 2", issuer: "Cisco Networking Academy", category: "Cisco", color: "#0ea5e9" },
  { id: "cisco-py1", title: "Python Essentials 1", issuer: "Cisco Networking Academy", category: "Cisco", color: "#0ea5e9" },
  { id: "cisco-py2", title: "Python Essentials 2", issuer: "Cisco Networking Academy", category: "Cisco", color: "#0ea5e9" },
  // NPTEL
  { id: "nptel-mgmt", title: "Principles of Management", issuer: "NPTEL", category: "NPTEL", color: "#f59e0b" },
  // Unstop
  { id: "unstop-mongo", title: "MongoDB", issuer: "Unstop", category: "Unstop", color: "#22c55e" },
  { id: "unstop-jquery", title: "jQuery", issuer: "Unstop", category: "Unstop", color: "#22c55e" },
  // Tata
  { id: "tata-comm", title: "Communication Skills", issuer: "Tata", category: "Tata", color: "#ec4899" },
  { id: "tata-soft", title: "Introduction to Soft Skills", issuer: "Tata", category: "Tata", color: "#ec4899" },
  { id: "tata-interview", title: "Interview Skills", issuer: "Tata", category: "Tata", color: "#ec4899" },
  // CodeAlpha
  { id: "codealpha-cert", title: "App Development Internship", issuer: "CodeAlpha", category: "Internship", color: "#7c3aed" },
  // Prodigy
  { id: "prodigy-cert", title: "Full-Stack Web Development Internship", issuer: "Prodigy InfoTech", category: "Internship", color: "#06b6d4" },
];
