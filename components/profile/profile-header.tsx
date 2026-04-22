"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ProfileData } from "@/lib/profile-data";

interface ProfileHeaderProps {
  data: ProfileData;
}

export function ProfileHeader({ data }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatar with border */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/40 to-white/10" />
        <Avatar className="relative size-24 ring-2 ring-white/20">
          <AvatarImage src={data.avatar} alt={data.name} className="object-cover" />
          <AvatarFallback className="bg-white/20 text-white text-xl">
            {data.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Name and title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">{data.name}</h1>
        <p className="mt-1 text-sm text-white/70">{data.title}</p>
      </div>

      {/* Bio card with glassmorphism */}
      <div className="w-full max-w-sm rounded-2xl bg-white/10 p-4 backdrop-blur-md">
        <p className="text-center text-sm leading-relaxed text-white/90">{data.bio}</p>
      </div>
    </div>
  );
}
