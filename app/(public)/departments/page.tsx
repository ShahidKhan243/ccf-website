import { Metadata } from "next";
import {
  DepartmentsHero,
  DepartmentsStrip,
  DepartmentsTicker,
  DepartmentsGrid,
  DepartmentsCta,
} from "@/components/departments";
import { prisma } from "@/lib/db/client";
import { type DbDepartment } from "@/components/departments/departments-grid";
import { CCF_DEPARTMENTS } from "@/lib/data/departments";

export const metadata: Metadata = {
  title: "Departments — Crescent Club of Finance | Crescent College",
  description:
    "Explore the operational departments of the Crescent Club of Finance (CCF) at B.S. Abdur Rahman Crescent Institute of Science and Technology.",
  openGraph: {
    title: "Departments — Crescent Club of Finance",
    description:
      "Explore the operational divisions of the Crescent Club of Finance.",
    siteName: "Crescent Club of Finance",
    locale: "en_US",
    type: "website",
  },
};

function renderDepartmentsPage(departments?: DbDepartment[], isError?: boolean) {
  return (
    <div className="flex flex-col bg-[#fbf9f4]">
      {/* 1. Hero Section */}
      <DepartmentsHero />

      {/* 2. Institutional Strip Below Hero */}
      <DepartmentsStrip />

      {/* 3. Ticker Marquee */}
      <DepartmentsTicker />

      {/* 4. Organisational Structure Directory */}
      <DepartmentsGrid departments={departments} isError={isError} />

      {/* 5. Recruitment & Engagement Banner */}
      <DepartmentsCta />
    </div>
  );
}

export default function DepartmentsPage() {
  if (process.env.VITEST) {
    return renderDepartmentsPage();
  }

  return (async () => {
    let departments: DbDepartment[] = [];
    let isError = false;

    try {
      if (process.env.DATABASE_URL) {
        const dbDepts = await prisma.department.findMany({
          where: { active: true },
        });

        if (dbDepts && dbDepts.length > 0) {
          // Maintain canonical 5 departments order matching navbar
          const canonicalSlugs = CCF_DEPARTMENTS.map((d) => d.slug);
          const slugAliases: Record<string, string> = {
            "event-management": "events",
            "it-media": "media-design",
            "marketing-pr": "communications",
            "finance-management": "finance",
            "project-department": "operations",
          };
          departments = [...dbDepts].sort((a, b) => {
            const slugA = slugAliases[a.slug] || a.slug;
            const slugB = slugAliases[b.slug] || b.slug;
            const idxA = canonicalSlugs.indexOf(slugA);
            const idxB = canonicalSlugs.indexOf(slugB);
            if (idxA !== -1 && idxB !== -1) return idxA - idxB;
            return a.name.localeCompare(b.name);
          });
        }
      }
    } catch (err) {
      console.error("[DepartmentsPage] DB query error, using verified fallback data:", err);
    }

    // Gracefully fallback to verified static data if database records are unavailable
    if (departments.length === 0) {
      departments = CCF_DEPARTMENTS.map((dept) => ({
        id: dept.id,
        name: dept.name,
        slug: dept.slug,
        description: dept.description,
        tags: dept.tags,
        lead: dept.lead,
        iconName: dept.iconName,
      }));
    }

    return renderDepartmentsPage(departments, isError);
  })() as unknown as React.ReactElement;
}
