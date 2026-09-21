export interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  tech: string[]
  type: 'leadership' | 'education' | 'work'
  logo?: string
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'TechStars Technical Society',
    role: 'Secretary',
    period: '2025 — 2026',
    description: 'Leading the premier technical society at KCC ITM with 200+ members. Responsible for organizing workshops, hackathons, coding competitions, and technical talks. Manages a core team of 15 coordinators across domains including Web Development, AI/ML, Competitive Programming, and Systems.',
    achievements: [
      'Organized Hack India KCC 2025: 300+ participants, 50+ project submissions',
      'Launched "CodeWeek" weekly coding sessions with 50+ regular attendees',
      'Mentored 100+ students in DSA, Web Dev, and Open Source',
    ],
    tech: ['Leadership', 'Event Management', 'Community Building', 'Mentorship', 'Sponsorship'],
    type: 'leadership',
    logo: '/TechStar.png'
  },
  {
    id: 2,
    company: 'I.I.M.U.N. (India\'s International Movement to Unite Nations)',
    role: 'Chair / Moderator',
    period: '2022 — 2025',
    description: 'Served as Chair and Moderator for Model United Nations conferences, facilitating debate and diplomacy simulations for 500+ delegates. Responsible for committee management, resolution drafting guidance, and maintaining parliamentary procedure.',
    achievements: [
      'Chaired committee with 50 delegates at IIMUN Championship 2023',
      'Moderated 5+ conferences across India with 2000+ total delegates',
      'Trained 100+ new delegates in MUN procedure and diplomacy',
      'Drafted background guides for 3 international committees',
    ],
    tech: ['Public Speaking', 'Diplomacy', 'Conflict Resolution', 'Parliamentary Procedure', 'Mentoring'],
    type: 'leadership',
    logo: '/IIMUN_logo.png'
  },
  {
    id: 3,
    company: 'KCC Institute of Technology and Management',
    role: 'B.Tech Computer Science & Engineering',
    period: '2021 — 2025',
    description: 'Pursuing Bachelor of Technology in Computer Science Engineering. Focus areas: Systems Programming, Compiler Design, Operating Systems, Computer Networks, and Algorithm Design. Active in competitive programming and open source contributions.',
    achievements: [
      'Ranked Top 5% in CodeChef Starters rated contests',
      'Contributed to 3 open source projects ',
      'Teaching Assistant for Data Structures & Algorithms course',
    ],
    tech: ['C', 'C++', 'Python', 'Operating Systems', 'Computer Networks', 'DBMS', 'System Design', 'DSA'],
    type: 'education',
    logo:'/kcc-logo-new.png'
  },
  {
  id: 3,

  company: 'Jharkhand Model United Nations (JHMUN)',

  role: 'Founder & Organiser',

  period: '2024 — Present',

  description: 'Founded and led JHMUN, an independent youth platform focused on Model United Nations, Youth Parliament, debates, and literary events. Built the organisation from the ground up, managing conference planning, team recruitment, delegate engagement, training, research, marketing, and event operations.',

  achievements: [
    'Built and managed teams across operations, research, marketing, social media, and conference management',

    'Designed and executed MUN and Youth Parliament conferences with structured committees, agendas, and rules of procedure',

    'Developed delegate training sessions focused on research, diplomacy, public speaking, and effective committee strategy',

    'Created organisational systems including recruitment workflows, internship programmes, Letters of Appointment, and departmental responsibilities',

    'Managed conference promotion, delegate outreach, registration campaigns, and social media operations',

    'Introduced delegate recognition initiatives including merit certificates, mementos, cash prizes, and social media recognition',

    'Worked on partnerships, event planning, committee research, background guides, and conference documentation',

    'Organised SwarBhoomi, a conventional debate initiative aimed at encouraging structured argumentation and public discourse'
  ],

  tech: [
    'Leadership',
    'Event Management',
    'Team Building',
    'Public Speaking',
    'Research',
    'Delegate Training',
    'Marketing',
    'Operations',
    'Content Strategy'
  ],

  type: 'leadership',
  logo: '/jhmun.png'
}
]

export const leadershipExperiences = experiences.filter(e => e.type === 'leadership')
export const educationExperiences = experiences.filter(e => e.type === 'education')