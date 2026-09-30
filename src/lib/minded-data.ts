// Minded Technologies — curated data

export interface Member {
  id: string
  name: string
  role: string
  field: string
  bio: string
  extendedBio?: string
  initials: string
  image?: string
  isFounder?: boolean
  isCEO?: boolean
  location?: string
  education?: string
  skills?: string[]
  linkedIn?: string
  github?: string
  email?: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: 'app' | 'initiative' | 'charity' | 'research'
  status: 'live' | 'in-progress' | 'completed'
  year: number
  tags: string[]
}

export interface Venture {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  status: 'active' | 'coming-soon'
  url?: string
  kind: string
  summary: string
  year?: number
}

export interface ImpactItem {
  kind: string
  title: string
  text: string
}

export interface MilestoneItem {
  year: string
  title: string
  text: string
  description?: string
}

export const members: Member[] = [
  {
    id: 'Xekutor',
    name: 'Shuraim Issaka',
    role: '===================',
    field: 'Computer Science',
    bio: 'Visionary behind Minded Technologies. Founded the group to unite young tech-driven minds across disciplines into a powerhouse of innovation.',
    extendedBio:
      'Shuraim founded Minded Technologies with a mission to bring together ambitious young talent across engineering, finance, economics, and medicine. With a background in distributed systems and software architecture, he leads overall strategic direction, core infrastructure development, and venture expansion.',
    initials: 'IS',
    image:
      '/images/shuraim.jpg',
    isFounder: false,
    isCEO: false,
    location: 'Accra, Ghana',
    education: 'B.Sc. Computer Science',
    skills: ['Vision & Strategy', 'Distributed Systems', 'Full-Stack Development', 'Venture Building'],
    linkedIn: 'https://linkedin.com/in/shuraimissaka',
    github: 'https://github.com',
    email: 'isak@mindedtechnologies.org',
  },
  {
    id: 'sameer',
    name: 'Sameer M. Bello',
    role: '===================',
    field: 'Information Technology',
    bio: 'Specialises in systems architecture and enterprise IT infrastructure. Passionate about building scalable, reliable platforms.',
    extendedBio:
      'Alex specializes in high-availability enterprise IT architecture and cloud platforms. He ensures Minded infrastructure is robust, secure, and ready to scale across global deployment environments.',
    initials: 'AM',
    image:
      '/',
    isFounder: false,
    location: 'Sydney, Australia',
    education: 'B.IT Enterprise Systems & Cloud Security',
    skills: ['Cloud Infrastructure', 'DevOps & CI/CD', 'System Security', 'Kubernetes'],
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'alex@mindedtechnologies.org',
  },
  {
    id: 'prof',
    name: 'Mubarak Abiola',
    role: '===================',
    field: 'Computer Science',
    bio: 'Full-stack developer with a passion for creating seamless user experiences and robust backend systems.',
    extendedBio:
      'Jordan focuses on creating elegant, responsive interfaces and seamless web experiences. Driven by aesthetic precision and code quality, Jordan leads front-end architecture across all Minded digital products.',
    initials: 'JT',
    image:
      '/',
    isFounder: false,
    location: 'Melbourne, Australia',
    education: 'B.Sc. Computer Science & Human-Computer Interaction',
    skills: ['React & Next.js', 'UI/UX Design', 'API Design', 'Performance Optimization'],
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'jordan@mindedtechnologies.org',
  },
  {
    id: 'himan',
    name: 'Himan Zakaria',
    role: '===================',
    field: 'Economics',
    bio: 'Brings economic insight to every product decision. Focused on building ventures that create tangible value and sustainable growth.',
    extendedBio:
      'Sam brings deep economic research and market modeling to Minded Technologies. By evaluating business models and market dynamics, Sam ensures every venture created delivers long-term sustainable value.',
    initials: 'SR',
    image:
      '/',
    isFounder: false,
    location: 'Sydney, Australia',
    education: 'B.Econ. Microeconomics & Quantitative Analysis',
    skills: ['Econometrics', 'Market Modeling', 'Product Monetization', 'GTM Strategy'],
    linkedIn: 'https://linkedin.com',
    email: 'sam@mindedtechnologies.org',
  },
  {
    id: 'khidr',
    name: 'Khidr Baba Musah',
    role: '===================',
    field: 'Finance & Accounting',
    bio: 'Manages financial strategy and ensures our ventures are built on sound financial foundations from day one.',
    extendedBio:
      'Morgan oversees financial planning, capital allocation, and corporate compliance across all Minded ventures. With rigorous fiscal discipline, Morgan equips the team to scale sustainably.',
    initials: 'MK',
    image:
      '/',
    isFounder: false,
    location: 'Sydney, Australia',
    education: 'B.Com. Finance & Commercial Law',
    skills: ['Financial Modeling', 'Capital Allocation', 'Risk Management', 'Corporate Governance'],
    linkedIn: 'https://linkedin.com',
    email: 'morgan@mindedtechnologies.org',
  },
  {
    id: 'haneef',
    name: 'Haneef Alhassan',
    role: '===================',
    field: 'Biomedical Science',
    bio: 'Bridges the gap between healthcare and technology. Exploring how Minded can create meaningful impact in health-tech.',
    extendedBio:
      'Taylor bridges the gap between molecular biology and computational technology. Leading Minded bio-tech research initiatives, Taylor explores how digital tools can accelerate medical discoveries and healthcare access.',
    initials: 'TB',
    image:
      '/',
    isFounder: false,
    location: 'Brisbane, Australia',
    education: 'B.Biomed.Sc. Molecular Biology & Computational Genetics',
    skills: ['Bioinformatics', 'Health-Tech Innovation', 'Clinical Data', 'Research Strategy'],
    linkedIn: 'https://linkedin.com',
    email: 'taylor@mindedtechnologies.org',
  },
  {
    id: 'sifu',
    name: 'Yussuf Ibrahim',
    role: '===================',
    field: 'Information Technology',
    bio: 'Network and security specialist. Keeps our platforms safe, reliable, and ahead of emerging threats.',
    extendedBio:
      'Riley leads security audits and identity infrastructure for Minded ID. Dedicated to user privacy and data protection, Riley keeps our digital ecosystem resilient against cyber threats.',
    initials: 'RN',
    image:
      '/',
    location: 'Sydney, Australia',
    education: 'B.IT Cybersecurity & Network Engineering',
    skills: ['Penetration Testing', 'Zero Trust Auth', 'Network Security', 'Identity Systems'],
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'riley@mindedtechnologies.org',
  },
  {
    id: 'yussuf',
    name: 'Yussuf Kassim',
    role: '===================',
    field: 'Computer Science',
    bio: 'Data scientist and ML enthusiast. Turning raw data into actionable insights that power smarter decisions.',
    extendedBio:
      'Casey transforms complex datasets into actionable intelligence. Passionate about ethical AI, Casey works on intelligent data pipelines and predictive models that power Minded platform insights.',
    initials: 'CL',
    image:
      '/',
    location: 'Melbourne, Australia',
    education: 'B.Sc. Data Science & Machine Learning',
    skills: ['Machine Learning', 'Python & PyTorch', 'Data Pipelines', 'Predictive Analytics'],
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'casey@mindedtechnologies.org',
  },
]

export const ventures: Venture[] = [
  {
    id: 'minded-id',
    name: 'Minded ID',
    tagline: 'One account. Every Minded platform.',
    description:
      'Our universal single sign-on identity system. Create one Minded account and seamlessly access every product under the Minded Technologies umbrella — just like signing into any Google or Meta service.',
    category: 'Identity & Auth',
    kind: 'Identity & Auth',
    summary: 'Universal single sign-on identity system for all Minded platforms.',
    year: 2026,
    status: 'coming-soon',
  },
  {
    id: 'minded-hub',
    name: 'Minded Hub',
    tagline: 'The workspace for young innovators.',
    description:
      'A collaborative workspace platform for university students and young professionals to connect, share projects, and build together.',
    category: 'Collaboration',
    kind: 'Collaboration',
    summary: 'Collaborative workspace platform for university students & innovators.',
    year: 2026,
    status: 'coming-soon',
  },
  {
    id: 'minded-give',
    name: 'Minded Give',
    tagline: 'Technology-driven charitable giving.',
    description:
      'A transparent, tech-enabled platform for community donations and charitable initiatives organised by the Minded community.',
    category: 'Social Impact',
    kind: 'Social Impact',
    summary: 'Tech-enabled platform for transparent community donations & initiatives.',
    year: 2026,
    status: 'coming-soon',
  },
]

export const impactStats = [
  { label: 'Members', value: '8', suffix: '' },
  { label: 'Disciplines', value: '5', suffix: '+' },
  { label: 'Ventures in Pipeline', value: '3', suffix: '' },
  { label: 'Years Active', value: '1', suffix: '' },
]

export const impact: ImpactItem[] = [
  {
    kind: 'Community',
    title: 'University Tech Workshops',
    text: 'Hosted hands-on coding and tech literacy workshops for university peers and high school students.',
  },
  {
    kind: 'Donation',
    title: 'Student Equipment Fund',
    text: 'Contributed laptops and hardware resources to aspiring developers in need of computing power.',
  },
  {
    kind: 'Research',
    title: 'Biomedical & AI Initiative',
    text: 'Cross-disciplinary research combining computer science and biomedical science for health-tech innovation.',
  },
]

export const timeline: MilestoneItem[] = [
  {
    year: '2024',
    title: 'The Idea Sparks',
    text: 'A group of five like-minded university students come together with a shared vision: to build something bigger than themselves.',
    description: 'A group of five like-minded university students come together with a shared vision.',
  },
  {
    year: '2024',
    title: 'Growing to Six',
    text: 'The founding team expanded, bringing new disciplines and perspectives into the Minded family.',
    description: 'The founding team expanded, bringing new disciplines and perspectives into the Minded family.',
  },
  {
    year: '2025',
    title: 'Minded Technologies Founded',
    text: 'Formally incorporated as Minded Technologies. The mission: to be a home for ventures that matter.',
    description: 'Formally incorporated as Minded Technologies.',
  },
  {
    year: '2025',
    title: 'Eight Strong',
    text: 'The team grows to eight members spanning Computer Science, IT, Economics, Finance, and Biomedical Science.',
    description: 'The team grows to eight members spanning 5 major disciplines.',
  },
  {
    year: '2026',
    title: 'Platform Launches',
    text: 'Minded Technologies goes live. Our story, our people, our ventures — all in one place.',
    description: 'Minded Technologies goes live.',
  },
]

export const milestones = timeline;
