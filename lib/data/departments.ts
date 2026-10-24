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
    id: "dept-events",
    slug: "events",
    name: "Events",
    shortDescription:
      "Plans and runs symposiums, quizzes, workshops and investment events.",
    description:
      "Plans and runs symposiums, quizzes, workshops and investment events.",
    focusAreas: ["Symposiums", "Quizzes", "Logistics"],
    tags: ["Symposiums", "Quizzes", "Logistics"],
    lead: "Lead · TBA",
    iconName: "CalendarDays",
  },
  {
    id: "dept-media-design",
    slug: "media-design",
    name: "Media & Design",
    shortDescription:
      "Posters, photography, video and the club's visual identity.",
    description:
      "Posters, photography, video and the club's visual identity.",
    focusAreas: ["Design", "Photo", "Video"],
    tags: ["Design", "Photo", "Video"],
    lead: "Lead · TBA",
    iconName: "Monitor",
  },
  {
    id: "dept-communications",
    slug: "communications",
    name: "Communications",
    shortDescription:
      "Social media, outreach, partnerships and keeping members informed.",
    description:
      "Social media, outreach, partnerships and keeping members informed.",
    focusAreas: ["Social", "Outreach", "PR"],
    tags: ["Social", "Outreach", "PR"],
    lead: "Lead · TBA",
    iconName: "Megaphone",
  },
  {
    id: "dept-finance",
    slug: "finance",
    name: "Finance",
    shortDescription:
      "Budgets, sponsorships and the club's own accounts, plus market research content for members.",
    description:
      "Budgets, sponsorships and the club's own accounts, plus market research content for members.",
    focusAreas: ["Budgeting", "Sponsors", "Research"],
    tags: ["Budgeting", "Sponsors", "Research"],
    lead: "Lead · TBA",
    iconName: "TrendingUp",
  },
  {
    id: "dept-operations",
    slug: "operations",
    name: "Operations",
    shortDescription:
      "Membership, recruitment, scheduling and day-to-day coordination across the club.",
    description:
      "Membership, recruitment, scheduling and day-to-day coordination across the club.",
    focusAreas: ["Recruitment", "Scheduling", "Coordination"],
    tags: ["Recruitment", "Scheduling", "Coordination"],
    lead: "Lead · TBA",
    iconName: "FolderKanban",
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
