"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IdentitySwitcher } from "./identity-switcher";
import { ProfileHeader } from "./profile-header";
import { WorksGrid } from "./works-grid";
import { SocialLinks } from "./social-links";
import { PERSONAL_DATA, GROUP_DATA } from "@/lib/profile-data";
import { Briefcase, Palette, MessageCircle } from "lucide-react";

export function ProfilePage() {
  const [identity, setIdentity] = useState<"personal" | "group">("personal");
  
  const data = identity === "personal" ? PERSONAL_DATA : GROUP_DATA;

  return (
    <div className="relative min-h-screen w-full">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/profile-bg.jpg')" }}
      />
      <div className="fixed inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col px-4 py-8">
        {/* Identity Switcher */}
        <div className="mb-8">
          <IdentitySwitcher identity={identity} onIdentityChange={setIdentity} />
        </div>

        {/* Profile Header */}
        <div className="mb-8">
          <ProfileHeader data={data} />
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="works" className="flex-1">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-md">
            <TabsTrigger 
              value="works" 
              className="gap-1.5 text-white/70 data-[state=active]:bg-white/20 data-[state=active]:text-white"
            >
              <Palette className="size-4" />
              <span className="hidden sm:inline">Works</span>
            </TabsTrigger>
            <TabsTrigger 
              value="commission" 
              className="gap-1.5 text-white/70 data-[state=active]:bg-white/20 data-[state=active]:text-white"
            >
              <Briefcase className="size-4" />
              <span className="hidden sm:inline">Commission</span>
            </TabsTrigger>
            <TabsTrigger 
              value="contact" 
              className="gap-1.5 text-white/70 data-[state=active]:bg-white/20 data-[state=active]:text-white"
            >
              <MessageCircle className="size-4" />
              <span className="hidden sm:inline">Contact</span>
            </TabsTrigger>
          </TabsList>

          {/* Content Canvas */}
          <div className="mt-4 rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
            <TabsContent value="works" className="mt-0">
              <WorksGrid items={data.works} />
            </TabsContent>
            
            <TabsContent value="commission" className="mt-0">
              <WorksGrid items={data.commissions} />
            </TabsContent>
            
            <TabsContent value="contact" className="mt-0">
              <SocialLinks links={data.socials} />
            </TabsContent>
          </div>
        </Tabs>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-white/40">Powered by Portaly</p>
        </div>
      </div>
    </div>
  );
}
