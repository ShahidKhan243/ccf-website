import { CCF_EYEBROW } from "@/components/site/navigation-data";

export interface CcfDepartment {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  focusAreas: readonly string[];
  tags: readonly string[];
  lead: string;
  iconName: "TrendingUp" | "Monitor" | "Megaphone" | "FolderKanban" | "CalendarDays";
}

/**
 * Five confirmed CCF departments in canonical order matching the navbar dropdown.
 * Fallback data with specified copy, tags, and leads.
 */
export const CCF_DEPARTMENTS: readonly CcfDepartment[] = [
  {
    id: "dept-finance",
    slug: "finance-management",
    name: "Finance Management",
    shortDescription:
      "Manages the club's budgets, sponsorships and accounts, and shares money-management learning with members.",
    description:
      "Manages the club's budgets, sponsorships and accounts, and shares money-management learning with members.",
    focusAreas: ["Budgeting", "Sponsors", "Research"],
    tags: ["Budgeting", "Sponsors", "Research"],
    lead: "Lead · TBA",
    iconName: "TrendingUp",
  },
  {
    id: "dept-it-media",
    slug: "it-media",
    name: "IT & Media",
    shortDescription:
      "Runs the website and digital tools, plus photography, video and design for the club.",
    description:
      "Runs the website and digital tools, plus photography, video and design for the club.",
    focusAreas: ["Web", "Design", "Video"],
    tags: ["Web", "Design", "Video"],
    lead: "Lead · TBA",
    iconName: "Monitor",
  },
  {
    id: "dept-marketing",
    slug: "marketing-pr",
    name: "Marketing & PR",
    shortDescription:
      "Social media, outreach and partnerships that spread the word about CCF.",
    description:
      "Social media, outreach and partnerships that spread the word about CCF.",
    focusAreas: ["Social", "Outreach", "Partners"],
    tags: ["Social", "Outreach", "Partners"],
    lead: "Lead · TBA",
    iconName: "Megaphone",
  },
  {
    id: "dept-projects",
    slug: "project-department",
    name: "Project Department",
    shortDescription:
      "Plans and delivers student-led finance projects, from first idea to launch.",
    description:
      "Plans and delivers student-led finance projects, from first idea to launch.",
    focusAreas: ["Planning", "Research", "Delivery"],
    tags: ["Planning", "Research", "Delivery"],
    lead: "Lead · TBA",
    iconName: "FolderKanban",
  },
  {
    id: "dept-events",
    slug: "event-management",
    name: "Event Management",
    shortDescription:
      "Plans and runs symposiums, quizzes, workshops and investment events.",
    description:
      "Plans and runs symposiums, quizzes, workshops and investment events.",
    focusAreas: ["Symposiums", "Quizzes", "Logistics"],
    tags: ["Symposiums", "Quizzes", "Logistics"],
    lead: "Lead · TBA",
    iconName: "CalendarDays",
  },
] as const;

export const DEPARTMENTS_HERO = {
  eyebrow: CCF_EYEBROW,
  title: "Departments",
  subtitle:
    "The five operational departments of the Crescent Club of Finance at B.S. Abdur Rahman Crescent Institute of Science and Technology.",
} as const;

export const DEPARTMENTS_OVERVIEW = {
  eyebrow: "Structure",
  heading: "Organizational Structure",
  description:
    "CCF includes five departments covering different areas of club activity at B.S. Abdur Rahman Crescent Institute of Science and Technology.",
  pillars: [
    {
      title: "Functional Roles",
      description:
        "Each department focuses on specific club responsibilities, including events, media, communications, and finances.",
    },
    {
      title: "Campus Community",
      description:
        "Open to students from all academic disciplines at Crescent College who share an interest in finance.",
    },
    {
      title: "Practical Learning",
      description:
        "Provides opportunities for students to participate in club activities, workshops, and student events.",
    },
  ],
} as const;
