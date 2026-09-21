export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  category: 'systems' | 'hackathons' | 'backend' | 'opensource' | 'fullstack'
  tags: string[]
  image: string
  imageAlt: string
  links: {
    demo?: string
    code?: string
    caseStudy?: string
  }
  featured: boolean
  year: string
}

export const projects: Project[] = [
    {
    id: 1,
    title: 'DeployGuard',
    description:
      'A deployment-focused developer tool built to help validate and monitor application deployments before they reach production.',
    longDescription:
      'DeployGuard is a developer-focused project aimed at making deployment workflows safer and more predictable. It focuses on deployment validation, environment checks, and identifying common issues that can cause applications to fail after deployment.',
    category: 'systems',
    tags: ['Python', 'FastAPI', 'Deployment', 'DevOps', 'Validation'],
    image: '/Deployguard.png',
    imageAlt: 'DeployGuard deployment monitoring and validation system',
    links: {
      code: 'https://github.com/Ashmit-Aryan/Deploy-Guard',
    },
    featured: true,
    year: '2026',
  },

  {
    id: 2,
    title: 'WebSocket Chat Application',
    description:
      'A full-stack real-time messaging platform with private conversations, group chat, presence tracking, authentication, and persistent chat history.',
    longDescription:
      'Built a real-time communication platform using Socket.IO with a Node.js and Express backend and a React frontend. The application handles authenticated socket connections, private and group messaging, online/offline presence, typing indicators, media sharing, and persistent chat data.',
    category: 'fullstack',
    tags: [
      'React',
      'Node.js',
      'Express.js',
      'Socket.IO',
      'MongoDB',
      'JWT',
      'WebSockets',
    ],
    image: '/chatapp.png',
    imageAlt: 'Real-time WebSocket chat application',
    links: {
      code: 'https://github.com/Ashmit-Aryan/WebSocket-Chat-Application',
    },
    featured: true,
    year: '2026',
  },

  {
    id: 3,
    title: 'Hospital Management System',
    description:
      'A full-stack hospital administration system covering authentication, patients, doctors, appointments, billing, and operational dashboards.',
    longDescription:
      'Developed a MERN-based hospital management platform with a React frontend and Node.js/Express backend. The system includes JWT authentication, patient and doctor management, appointment scheduling, billing workflows, protected routes, and data-driven administrative interfaces built with Material UI and DataGrid.',
    category: 'fullstack',
    tags: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Material UI',
      'DataGrid',
    ],
    image: '/HMS.png',
    imageAlt: 'Hospital Management System dashboard',
    links: {
      code: 'https://github.com/Ashmit-Aryan/Hospital-Management',
    },
    featured: true,
    year: '2025',
  },

  {
    id: 4,
    title: 'Student Management System',
    description:
      'A Java web application implementing student CRUD operations, authentication, dashboard analytics, and database-driven management using MVC and DAO architecture.',
    longDescription:
      'Built a traditional Java web application using Servlets, JSP, JDBC, and MySQL. The project follows MVC and DAO patterns and includes session-based authentication, servlet filters, protected routes, student CRUD operations, course categorisation, search functionality, and an administrative dashboard.',
    category: 'backend',
    tags: [
      'Java',
      'Servlets',
      'JSP',
      'JDBC',
      'MySQL',
      'MVC',
      'DAO',
      'Apache Tomcat',
    ],
    image: '/SMS.png',
    imageAlt: 'Java Student Management System dashboard',
    links: {
      code: 'https://github.com/Ashmit-Aryan/Students-Management-System-JAVA',
    },
    featured: true,
    year: '2026',
  },

  {
    id: 5,
    title: 'Attendance Automation Dashboard',
    description:
      'A modern student attendance and analytics interface designed for managing attendance records and presenting academic data through an interactive dashboard.',
    longDescription:
      'Created a responsive attendance management interface using React and TypeScript with a component-driven UI. The project focuses on visualising attendance information, managing student records, and presenting analytics through a clean administrative dashboard.',
    category: 'fullstack',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Recharts',
    ],
    image: '/Attendance.png',
    imageAlt: 'Student attendance analytics dashboard',
    links: {
      code: 'https://github.com/Ashmit-Aryan/Attendance-Automation-Dashboard',
    },
    featured: true,
    year: '2026',
  },

  {
    id: 6,
    title: 'NASA APOD Photo Viewer',
    description:
      'An Android application that consumes NASA’s Astronomy Picture of the Day API to display daily space imagery and historical entries.',
    longDescription:
      'Built an Android application around NASA’s public APOD API. Users can browse the astronomy image or video released for a given day and search for historical dates, providing a simple interface for exploring NASA’s daily astronomy content.',
    category: 'opensource',
    tags: ['Android', 'Java', 'NASA API', 'REST API', 'Mobile'],
    image: '/nasaapod.png',
    imageAlt: 'NASA Astronomy Picture of the Day Android application',
    links: {
      code: 'https://github.com/Ashmit-Aryan/Nasa-Apod-Photo-Viewer',
    },
    featured: false,
    year: '2021',
  },
]

export const categories = [
  { value: 'all', label: 'All' },
  { value: 'systems', label: 'Systems' },
  { value: 'hackathons', label: 'Hackathons' },
  { value: 'backend', label: 'Backend/API' },
  { value: 'opensource', label: 'Open Source' },
  { value: 'fullstack', label: 'Full Stack' },
] as const