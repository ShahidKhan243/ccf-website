/**
 * CCF About Page Static & Structured Data
 *
 * NOTE: All facts adhere strictly to verified Crescent Club of Finance information
 * and the CCF visual system (Ivory #F7F5EF, Deep Navy #14243A, Gold #B69A58, Slate #64748B).
 *
 * Conservative content rules:
 * - No unverified marketing superlatives (e.g. premier, leading, flagship, largest).
 * - No fabricated historical claims (e.g. member counts, fake rankings).
 * - Verified institutional details: Crescent College, Vandalur (B.S. Abdur Rahman Crescent Institute of Science and Technology).
 * - Confirmed executive board only (Remi Kayalvizhi, Fizza Fathima, Zayan Ahmed) with no invented biographies.
 */

import { CCF_EYEBROW } from "@/components/site/navigation-data";
import { CCF_LEADERSHIP, type CcfLeader } from "@/lib/data/members";

export type AboutLeader = CcfLeader;

/**
 * Confirmed CCF executive leadership board shared from canonical members data.
 */
export const ABOUT_LEADERSHIP: readonly AboutLeader[] = CCF_LEADERSHIP;

export interface AboutPillar {
  id: string;
  title: string;
  description: string;
  iconName: "BookOpen" | "LineChart" | "Lightbulb" | "Users";
}

export interface AboutActivity {
  id: string;
  title: string;
  description: string;
  iconName: "Presentation" | "TrendingUp" | "Trophy" | "GraduationCap";
}

export interface AboutObjective {
  id: string;
  title: string;
  description: string;
}

export interface AboutVisionMission {
  vision: string;
  mission: string;
  objectives: readonly AboutObjective[];
}

/**
 * Redesigned Hero copy matching user specification
 */
export const ABOUT_HERO = {
  eyebrow: "ABOUT US",
  institution: CCF_EYEBROW,
  title: "More Than a Club, A Financial Community.",
  titleLine1: "More Than a Club,",
  titleLine2: "A Financial Community.",
  subtitle:
    "The Crescent Club of Finance is a student-driven initiative at Crescent College, Vandalur, committed to building financial literacy, fostering critical thinking, and creating opportunities for growth in the world of finance.",
  features: [
    {
      id: "feature-learning",
      title: "Learning & Growth",
      icon: "BookOpen",
      description: "Foundational education and personal financial skills.",
    },
    {
      id: "feature-networking",
      title: "Networking & Collaboration",
      icon: "Users",
      description: "Interdisciplinary peer and faculty connections.",
    },
    {
      id: "feature-exposure",
      title: "Real-World Exposure",
      icon: "TrendingUp",
      description: "Market awareness and practical finance sessions.",
    },
  ],
  floatingPanel: {
    tagline: "Finance Builds Better Futures",
    campus: "Crescent College, Vandalur",
  },
} as const;

/**
 * Our Story Section Structured Data
 */
export const ABOUT_STORY = {
  eyebrow: "OUR STORY",
  title: "Rooted in Knowledge, Driven by Impact.",
  paragraphs: [
    "The Crescent Club of Finance was founded at Crescent College, Vandalur, to create an inclusive and dynamic platform where students from all academic disciplines can demystify finance, explore capital markets, and cultivate critical analytical thinking.",
    "By connecting core financial concepts with practical market analysis, collaborative workshops, and student-led initiatives, CCF bridges classroom theory with practical application. We champion financial education as an indispensable life skill that equips students for enduring personal and professional success.",
    "Through open discourse, innovation in learning, and interdisciplinary collaboration across engineering, business, sciences, and arts, CCF continues to foster a community of confident, forward-thinking leaders ready to shape their futures.",
  ],
  timeline: [
    {
      year: "2019",
      title: "Club Founded",
      description:
        "Initiated by ambitious Crescent College students with a shared vision to democratize financial literacy and build a dedicated campus community.",
    },
    {
      year: "Today",
      title: "Growing Community",
      description:
        "An active multidisciplinary ecosystem hosting interactive sessions, student activities, campus symposiums, and practical finance learning.",
    },
    {
      year: "The Future",
      title: "Greater Impact",
      description:
        "Expanding student outreach, institutional collaborations, practical workshops, and lasting career preparedness for all members.",
    },
  ],
} as const;

/**
 * Mission, Vision and Values Section
 */
export const ABOUT_PRINCIPLES = {
  heading: "Guided by Principles, Driven by Purpose.",
  mission: {
    title: "Our Mission",
    description:
      "To enhance financial literacy and provide practical exposure through events, workshops, and collaborative initiatives.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To become a leading student finance community that inspires innovation, leadership, and long-term impact.",
  },
  values: {
    title: "Our Values",
    description:
      "Integrity, curiosity, collaboration, excellence, and responsible financial thinking.",
  },
} as const;

/**
 * What We Do Section Structured Data
 */
export const ABOUT_WHAT_WE_DO = {
  heading: "Creating Opportunities. Building Skills.",
  description:
    "Through practical sessions, guest lectures, collaborative projects, and student events, CCF equips members with real-world financial literacy and market awareness.",
  cards: [
    {
      id: "card-workshops",
      title: "Workshops & Sessions",
      description:
        "Hands-on seminars covering budgeting, personal financial planning, market indicators, and essential financial toolkits.",
      icon: "GraduationCap",
    },
    {
      id: "card-lectures",
      title: "Guest Lectures",
      description:
        "Direct interactions with financial educators, industry professionals, and alumni sharing real-world perspectives.",
    icon: "Presentation",
    },
    {
      id: "card-networking",
      title: "Networking",
      description:
        "Collaborative forums connecting ambitious students across departments with peer mentors and professional guidance.",
      icon: "Users",
    },
    {
      id: "card-opportunities",
      title: "Opportunities",
      description:
        "Active involvement in organizing campus events, analytical competitions, team leadership, and practical skill-building.",
      icon: "Briefcase",
    },
  ],
} as const;

/**
 * Join Our Journey Banner Data
 */
export const ABOUT_JOIN_JOURNEY = {
  eyebrow: "JOIN OUR JOURNEY",
  title: "Be a Part of Something Bigger.",
  description:
    "Whether you are looking to build foundational financial literacy, participate in campus events, or develop leadership skills, the Crescent Club of Finance welcomes you.",
  ctaText: "Join Us",
  ctaHref: "/join-us",
} as const;

/**
 * Verified organizational overview (backward compatibility)
 */
export const ABOUT_OVERVIEW = {
  summary:
    "The Crescent Club of Finance (CCF) is a student-driven initiative at B.S. Abdur Rahman Crescent Institute of Science and Technology, located in Vandalur, Chennai.",
  paragraphs: [
    "The Crescent Club of Finance (CCF) is the student finance organization of B.S. Abdur Rahman Crescent Institute of Science and Technology in Vandalur. Established as an inclusive campus platform, CCF brings together students from diverse academic disciplines—both undergraduate and postgraduate—to explore the principles of finance, fiscal management, and economic awareness.",
    "Our focus is practical learning. By connecting core economic concepts with practical applications, CCF encourages students, including those from non-finance backgrounds, to develop foundational money-management skills, understand market dynamics, and cultivate informed decision-making habits that endure beyond graduation.",
    "Through student-organized symposiums, investment events, interactive sessions, and collaborative projects, CCF provides a structured environment where students can collaborate, participate in academic activities, and build meaningful professional readiness.",
  ],
} as const;

/**
 * Stated Vision, Mission, and Objectives from Section 7 of the CCF Product Engineering Handbook (backward compatibility).
 */
export const ABOUT_VISION_MISSION: AboutVisionMission = {
  vision:
    "To create a financially literate community in which students from all backgrounds gain confidence to make informed financial decisions for life.",
  mission:
    "To equip students, including non-finance majors, with essential financial knowledge and money-management skills through interactive learning and practical experiences.",
  objectives: [
    {
      id: "obj-skill-dev",
      title: "Holistic Skill Development",
      description:
        "Fostering financial competencies through workshops, interactive sessions, and practical learning exercises designed for all academic streams.",
    },
    {
      id: "obj-interdisciplinary",
      title: "Interdisciplinary Collaboration",
      description:
        "Integrating diverse perspectives across engineering, business, arts, and sciences through collaborative finance initiatives.",
    },
    {
      id: "obj-learning-hub",
      title: "Lifelong Financial Learning Hub",
      description:
        "Cultivating a durable campus environment that creates positive impact through financial literacy outreach and peer education.",
    },
  ],
} as const;

/**
 * Core Purpose Pillars (backward compatibility)
 */
export const ABOUT_PILLARS: readonly AboutPillar[] = [
  {
    id: "pillar-literacy",
    title: "Financial Literacy",
    description:
      "Demystifying personal budgeting, saving strategies, debt awareness, and fundamental financial concepts for students of all disciplines.",
    iconName: "BookOpen",
  },
  {
    id: "pillar-market",
    title: "Market Awareness",
    description:
      "Building structured understanding of economic indicators, capital market principles, corporate structures, and fiscal developments.",
    iconName: "LineChart",
  },
  {
    id: "pillar-practical",
    title: "Practical Learning",
    description:
      "Connecting academic concepts to practical applications through discussions, analysis, and student-led exercises.",
    iconName: "Lightbulb",
  },
  {
    id: "pillar-initiatives",
    title: "Student Initiatives",
    description:
      "Encouraging students to organize club events, collaborate across academic departments, and develop teamwork skills.",
    iconName: "Users",
  },
] as const;

/**
 * What CCF Does (backward compatibility)
 */
export const ABOUT_ACTIVITIES: readonly AboutActivity[] = [
  {
    id: "act-symposiums",
    title: "Finance & Business Symposiums",
    description:
      "Conferences and multi-event symposiums organized by CCF at Crescent Campus, bringing students together for academic discussions and structured competitions.",
    iconName: "Presentation",
  },
  {
    id: "act-investment",
    title: "Finance & Investment Events",
    description:
      "Sessions and discussions focused on understanding investment instruments, financial analysis, and broader economic perspectives.",
    iconName: "TrendingUp",
  },
  {
    id: "act-competitions",
    title: "Student Activities & Competitions",
    description:
      "Interactive finance challenges, quizzes, and problem-solving events that foster teamwork and critical thinking among participants.",
    iconName: "Trophy",
  },
  {
    id: "act-workshops",
    title: "Workshops & Learning Sessions",
    description:
      "Skill-building seminars and introductory discussions covering personal finance, fiscal awareness, and core business tools.",
    iconName: "GraduationCap",
  },
] as const;

/**
 * Present-focused narrative: Foundation & Purpose (backward compatibility)
 */
export const ABOUT_FOUNDATION = {
  title: "Our Foundation & Focus",
  subtitle: "A student-driven initiative grounded in accessible financial education.",
  content: [
    "The Crescent Club of Finance was established at B.S. Abdur Rahman Crescent Institute of Science and Technology with a direct purpose: to make financial understanding accessible, practical, and engaging for every student on campus.",
    "Recognizing that financial literacy is an essential life skill regardless of whether a student studies engineering, computer science, architecture, or commerce, CCF operates as an open, interdisciplinary society.",
    "Rather than treating finance solely as an academic discipline, CCF approaches it as a foundational toolkit for everyday decision-making, professional readiness, and informed citizenship.",
    "Today, CCF continues to operate under student governance with institutional coordination, organizing events, symposiums, and collaborative projects that welcome both Crescent students and external participants.",
  ],
} as const;
