import userPhoto from '../assets/images/syed_hassan_shah_original.jpeg';
import cppImg from '../assets/images/c_and_cpp_language_logos_1790268774823.jpg';
import javaImg from '../assets/images/java_oop_logo_1790268792355.jpg';
import webImg from '../assets/images/web_react_frontend_1790268807111.jpg';
import flutterImg from '../assets/images/flutter_mobile_app_1790268835035.jpg';
import figmaImg from '../assets/images/figma_design_uiux_1790268821106.jpg';
import firebaseSqlImg from '../assets/images/firebase_sql_database_1790268855787.jpg';
import linuxImg from '../assets/images/linux_kali_ubuntu_1790268875090.jpg';
import officeImg from '../assets/images/ms_office_suite_logos_1790268641104.jpg';
import aiImg from '../assets/images/project_ai_workspace_1790266346118.jpg';

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  score?: string;
  details?: string;
}

export interface SkillItem {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  tools: string[];
  points: string[];
}

export const RESUME_DATA = {
  name: 'SYED HASSAN SHAH',
  title: 'FRONTEND & WEB DEVELOPER · APP DEVELOPER · FIGMA DESIGNER',
  contact: {
    location: 'Rawalpindi, Islamabad, Pakistan',
    phone: '0311-5365367',
    formattedPhone: '+92 311 5365367',
    email: 'hassanshah02005@gmail.com',
    studentEmail: '65912@students.riphah.edu.pk',
  },
  personalInfo: {
    age: '20 Years',
    nationality: 'Pakistani',
    maritalStatus: 'Single',
  },
  image: userPhoto,
  careerObjective:
    'Motivated Computer Science undergraduate (4th semester, Riphah International University, Islamabad). Possesses foundational knowledge in Web & Frontend Development (HTML5, CSS3, JavaScript, React) and Mobile App Development (Flutter), alongside UI/UX design in Figma and Firebase. Proficient in core programming (C, C++, Java OOP), basic Linux (Kali Linux, Ubuntu), expert in Microsoft Office (Word, Excel, PowerPoint), and adept with AI tools and prompt engineering.',
  
  skillsList: [
    {
      id: 'web-frontend',
      title: 'Web & Frontend Development (Basic Knowledge)',
      badge: 'Basic Level · HTML · CSS · JS · React',
      image: webImg,
      description: 'Foundational knowledge of building responsive web layouts using semantic HTML5, CSS3, JavaScript, and basic React components.',
      tools: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'React.js (Basics)', 'Responsive Web Design'],
      points: [
        'Basic understanding of component structure in modern React',
        'Semantic HTML5 page structuring and modern CSS3 styling',
        'Interactive client-side web scripting with fundamental JavaScript',
      ],
    },
    {
      id: 'app-dev',
      title: 'Mobile App Development (Basic Knowledge)',
      badge: 'Basic Knowledge · Flutter · Dart',
      image: flutterImg,
      description: 'Basic knowledge of cross-platform mobile app development concepts using Flutter and Dart.',
      tools: ['Flutter (Basics)', 'Dart', 'Mobile UI Layouts', 'Widget Structure'],
      points: [
        'Fundamental understanding of Flutter cross-platform architecture',
        'Basic mobile screen layouts and common UI widget implementation',
        'Exploration of navigation and state handling in Flutter apps',
      ],
    },
    {
      id: 'figma-design',
      title: 'UI/UX & Figma Design',
      badge: 'Figma Designer · Wireframing · Prototyping',
      image: figmaImg,
      description: 'Designing intuitive, aesthetically polished user interfaces and design systems.',
      tools: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototypes', 'Design Systems'],
      points: [
        'Creating modern web and mobile UI layouts and interactive prototypes',
        'Consistent typography, color palettes, spacing, and icon hierarchies',
        'Bridging the gap between Figma designs and developer handoff',
      ],
    },
    {
      id: 'firebase-sql',
      title: 'Firebase Expert & SQL Basics',
      badge: 'Firebase Backend · Relational SQL',
      image: firebaseSqlImg,
      description: 'Implementing real-time databases, user authentication, and relational SQL queries.',
      tools: ['Firebase Firestore', 'Firebase Auth', 'Firebase Hosting', 'SQL Basics'],
      points: [
        'Firebase expert: Firestore NoSQL database setup and real-time syncing',
        'User authentication with Firebase Auth and secure rule management',
        'Relational database fundamentals and basic SQL queries (SELECT, INSERT, UPDATE, JOIN)',
      ],
    },
    {
      id: 'core-cpp',
      title: 'C & C++ Programming',
      badge: 'C Language · C++ · Algorithms',
      image: cppImg,
      description: 'Foundational programming concepts, procedural programming, structured logic, and pointers.',
      tools: ['C Language', 'C++', 'Data Structures', 'Pointers & Memory', 'Structured Logic'],
      points: [
        'Core fundamentals: Data types, control structures, loops, and functions',
        'Arrays, string manipulation, and pointer memory concepts',
        'Algorithmic problem solving and structured logic implementation',
      ],
    },
    {
      id: 'core-java',
      title: 'Java (Object-Oriented Programming)',
      badge: 'Java · OOP Concepts',
      image: javaImg,
      description: 'Robust Object-Oriented principles for clean, reusable, and maintainable software architecture.',
      tools: ['Java', 'OOP', 'Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation'],
      points: [
        'Class hierarchies, object instantiation, and method overriding/overloading',
        'Inheritance and polymorphic behavior across codebases',
        'Data hiding and encapsulation with access specifiers (public, private, protected)',
      ],
    },
    {
      id: 'linux-systems',
      title: 'Linux Systems (Basic Use)',
      badge: 'Kali Linux · Ubuntu · Terminal',
      image: linuxImg,
      description: 'Working with Linux distributions, bash terminal commands, and system navigation.',
      tools: ['Kali Linux', 'Ubuntu', 'Bash CLI', 'File Systems', 'Package Managers'],
      points: [
        'Hands-on experience with Kali Linux and Ubuntu desktop environments',
        'Terminal commands for directory navigation, file permissions, and processes',
        'Package management (apt/apt-get) and fundamental environment setup',
      ],
    },
    {
      id: 'ms-office',
      title: 'Microsoft Office Suite (Expert)',
      badge: 'Word · Excel · PowerPoint',
      image: officeImg,
      description: 'Expertise in official documentation, analytical spreadsheets, formulas, and presentations.',
      tools: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
      points: [
        'MS Word: Advanced document formatting, official reports, and structured typography',
        'MS Excel: Data entry, formulas, arithmetic models, conditional formatting, and charts',
        'MS PowerPoint: Professional slide deck preparation and visual presentations',
      ],
    },
    {
      id: 'ai-prompting',
      title: 'AI Tools & Prompt Engineering',
      badge: 'ChatGPT · Claude · Productivity',
      image: aiImg,
      description: 'Leveraging cutting-edge AI models and prompt techniques for accelerated workflow.',
      tools: ['ChatGPT', 'Claude', 'Prompt Engineering', 'Research Workflows'],
      points: [
        'Crafting clear, contextual prompts for coding assistance and debugging',
        'Accelerating academic research and technical documentation drafting',
        'Streamlining development workflows through AI-assisted reasoning',
      ],
    },
  ],

  education: [
    {
      degree: 'BS Computer Science (BSCS)',
      institution: 'Riphah International University, Islamabad',
      status: 'In Progress (4th Semester)',
      score: 'Ongoing Degree',
      details:
        'Core curriculum in Object-Oriented Programming, Data Structures, Algorithms, Software Engineering, Database Systems, and Web Technologies.',
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Federal Board (FBISE)',
      status: 'Completed',
      score: 'Grade: B',
      details: 'Studied Computer Science, Mathematics, and Physics with foundational programming principles.',
    },
    {
      degree: 'Matriculation (Computer Science)',
      institution: 'Federal Board (FBISE)',
      status: 'Completed',
      score: 'Grade: A',
      details: 'Foundational secondary education with emphasis on Computer Science and Mathematics.',
    },
  ],

  academicCoursework: [
    'Object-Oriented Programming (OOP) in Java',
    'Programming Fundamentals & Algorithms in C/C++',
    'Web Technologies (HTML, CSS, JavaScript, React)',
    'Mobile Application Development (Flutter)',
    'Database Systems & Basics of SQL',
    'UI/UX Design Systems in Figma',
    'Operating Systems & Linux Environments (Kali, Ubuntu)',
  ],

  softSkills: [
    { name: 'Problem Solving', desc: 'Analytical approach to structured software troubleshooting' },
    { name: 'Quick Learner', desc: 'Fast adaptation to new frameworks, libraries, and tools' },
    { name: 'Attention to Detail', desc: 'Clean UI layouts, precision typography, and organized code' },
    { name: 'Communication', desc: 'Effective team coordination, technical writing, and reporting' },
    { name: 'Time Management', desc: 'Meeting academic deadlines and structured sprint milestones' },
  ],

  languages: [
    { name: 'Urdu', level: 'Native / Bilingual' },
    { name: 'English', level: 'Professional Working Proficiency' },
  ],

  keyStrengths: [
    'Practical experience across full-stack: React frontend, Flutter apps, and Firebase backends',
    'Strong command of UI/UX design in Figma from concept to developer handoff',
    'Solid programming foundation in C, C++, and Java OOP',
    'Expert proficiency in Microsoft Office (Word, Excel, PowerPoint) for technical reports & presentations',
    'Familiarity with basic Linux system administration in Kali Linux & Ubuntu',
    'Efficient use of AI tools (ChatGPT, Claude) and prompt engineering for rapid problem-solving',
  ],

  declaration:
    'I solemnly declare that all the information provided above is accurate and true to the best of my knowledge and professional experience.',
};
