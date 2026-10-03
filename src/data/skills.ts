export interface SkillItem {
  name: string
  icon?: string
}

export interface SkillCategory {
  id: string
  label: string
  emoji: string
  color: string
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Front-End',
    emoji: '🖥️',
    color: '#61DAFB',
    skills: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Bootstrap 5' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 & CSS3' },
    ],
  },
  {
    id: 'backend',
    label: 'Back-End',
    emoji: '⚙️',
    color: '#68A063',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Laravel' },
      { name: 'REST API' },
      { name: 'JWT Auth' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    emoji: '📱',
    color: '#54C5F8',
    skills: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Provider' },
      { name: 'Riverpod' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    emoji: '🗄️',
    color: '#F05032',
    skills: [
      { name: 'MongoDB' },
      { name: 'Mongoose' },
      { name: 'Firebase Firestore' },
      { name: 'Firebase Auth' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    emoji: '🛠️',
    color: '#E5B94E',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'CI/CD' },
      { name: 'Cloudinary' },
      { name: 'Postman' },
      { name: 'Vercel' },
    ],
  },
]

export const allTechStack = [
  'Next.js', 'React', 'TypeScript', 'Flutter', 'Dart',
  'Node.js', 'Express.js', 'Laravel', 'MongoDB', 'Firebase',
  'Bootstrap 5', 'Tailwind CSS', 'REST API', 'JWT',
  'Cloudinary', 'Git', 'GitHub', 'Vercel', 'Postman',
  'Provider', 'Riverpod', 'Firestore', 'Mongoose', 'CI/CD',
]
