import React from "react";
import { Users } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import {
  CCF_MEMBERS,
  MEMBERS_DIRECTORY_INFO,
  sortMembersByHierarchy,
} from "@/lib/data/members";
import { MemberAvatar } from "./member-avatar";

export interface DbMember {
  id: string;
  name: string;
  position: string | null;
  department: {
    name: string;
  } | null;
  photoMedia?: {
    objectKey: string;
  } | null;
}

interface MembersDirectoryProps {
  members?: DbMember[];
  isError?: boolean;
}

export function MembersDirectory({ members, isError }: MembersDirectoryProps = {}) {
  if (isError) {
    return (
      <section id="directory" className="py-16 md:py-24 border-b border-border/30 bg-background">
        <Container className="space-y-4 text-center py-12">
          <p className="text-ccf-muted">Member information is temporarily unavailable. Please try again later.</p>
        </Container>
      </section>
    );
  }

  if (members !== undefined && members.length === 0) {
    return (
      <section id="directory" className="py-16 md:py-24 border-b border-border/30 bg-background">
        <Container className="space-y-4 text-center py-12">
          <p className="text-ccf-muted">Member profiles will be published here.</p>
        </Container>
      </section>
    );
  }

  let departmentGroups: {
    department: string;
    members: {
      id: string;
      name: string;
      designation: string;
      department: string;
      initials: string;
      photoObjectKey?: string;
    }[];
  }[] = [];

  if (members !== undefined) {
    const seen = new Set<string>();
    // Pre-calculate to ensure Admin Board is first
    const adminBoardMembers = members.filter(m => !m.department?.name);
    if (adminBoardMembers.length > 0) {
      seen.add("Admin Board");
      departmentGroups.push({
        department: "Admin Board",
        members: adminBoardMembers.map(m => {
          const initials = m.name.split(" ").map(n => n[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "M";
          return {
            id: m.id,
            name: m.name,
            designation: m.position || "Member",
            department: "Admin Board",
            initials,
            photoObjectKey: m.photoMedia?.objectKey,
          };
        }),
      });
    }
    for (const member of members) {
      const deptName = member.department?.name || "Admin Board";
      if (!seen.has(deptName)) {
        seen.add(deptName);
        const deptMembers = members.filter(
          (m) => (m.department?.name || "Admin Board") === deptName
        );
        departmentGroups.push({
          department: deptName,
          members: deptMembers.map((m) => {
            const initials = m.name
              .split(" ")
              .map((n) => n[0])
              .filter(Boolean)
              .slice(0, 2)
              .join("")
              .toUpperCase() || "M";
            return {
              id: m.id,
              name: m.name,
              designation: m.position || "Member",
              department: deptName,
              initials,
              photoObjectKey: m.photoMedia?.objectKey,
            };
          }),
        });
      }
    }
  } else {
    const seen = new Set<string>();
    for (const member of CCF_MEMBERS) {
      if (!seen.has(member.department)) {
        seen.add(member.department);
        const deptMembers = CCF_MEMBERS.filter(
          (m) => m.department === member.department
        );
        departmentGroups.push({
          department: member.department,
          members: sortMembersByHierarchy(deptMembers).map((m) => ({
            id: m.id,
            name: m.name,
            designation: m.designation,
            department: m.department,
            initials: m.initials,
            photoObjectKey: m.photoObjectKey,
          })),
        });
      }
    }
  }

  const countText =
    members !== undefined
      ? `${members.length} ${members.length === 1 ? "Member" : "Members"}`
      : MEMBERS_DIRECTORY_INFO.countText;

  return (
    <section id="directory" className="py-16 md:py-24 border-b border-border/30 bg-background">
      <Container className="space-y-16">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-[#E2DDD1]">
            <div className="space-y-1">
              <SectionHeading
                eyebrow="CRESCENT CLUB OF FINANCE"
                title={MEMBERS_DIRECTORY_INFO.heading}
                description={MEMBERS_DIRECTORY_INFO.description}
                align="left"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2DDD1] bg-white text-[#14243A] text-sm self-start md:self-auto shrink-0 shadow-xs">
              <Users className="h-4 w-4 text-[#B69A58]" aria-hidden="true" />
              <span className="font-semibold">{countText}</span>
            </div>
          </div>
        </FadeIn>

        {/* Department Groups */}
        <div className="space-y-16">
          {departmentGroups.map((group) => (
            <div key={group.department} className="space-y-6">
              {/* Group Header */}
              <FadeIn direction="up">
                <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#E2DDD1]">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#14243A] tracking-tight">
                    {group.department}
                  </h3>
                  <span className="px-3 py-1 rounded-full border border-[#E2DDD1] bg-white text-xs font-medium text-[#64748B]">
                    {group.members.length} {group.members.length === 1 ? "Member" : "Members"}
                  </span>
                </div>
              </FadeIn>

              {/* Members Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {group.members.map((member) => (
                  <div
                    key={member.id}
                    className="group h-full bg-white rounded-lg border border-[#E2DDD1] p-6 md:p-8 flex flex-col items-center text-center space-y-5 shadow-sm hover:shadow-md hover:border-[#B69A58]/60 transition-all duration-300"
                  >
                    {/* Primary visual element: 120-150px photo / initials avatar */}
                    <div className="relative p-1 rounded-full border border-[#E2DDD1] group-hover:border-[#B69A58] transition-colors">
                      <MemberAvatar
                        name={member.name}
                        initials={member.initials}
                        photoObjectKey={member.photoObjectKey}
                        sizeClassName="h-28 w-28 md:h-32 md:w-32"
                        textClassName="text-2xl md:text-3xl text-[#14243A]"
                      />
                    </div>

                    <div className="space-y-1.5 w-full">
                      <h4 className="font-serif text-lg md:text-xl font-bold text-[#14243A] tracking-tight">
                        {member.name}
                      </h4>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
                        {member.designation}
                      </div>
                    </div>

                    <div className="pt-2 w-full flex justify-center border-t border-[#E2DDD1]">
                      <span className="px-2.5 py-1 rounded-full border border-[#E2DDD1] bg-[#F7F5EF] text-[11px] font-medium text-[#64748B]">
                        {member.department}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
