"use client";

import type { SocialLink } from "@/lib/profile-data";

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-col gap-3">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-[1.02]"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
              <Icon className="size-5 text-white" />
            </div>
            <span className="font-medium text-white">{link.label}</span>
            <svg
              className="ml-auto size-5 text-white/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
