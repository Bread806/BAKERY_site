"use client";

import { cn } from "@/lib/utils";

interface IdentitySwitcherProps {
  identity: "personal" | "group";
  onIdentityChange: (identity: "personal" | "group") => void;
}

export function IdentitySwitcher({ identity, onIdentityChange }: IdentitySwitcherProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex rounded-full bg-white/10 p-1 backdrop-blur-md">
        {/* Sliding indicator */}
        <div
          className={cn(
            "absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-white/90 shadow-lg transition-transform duration-300 ease-out",
            identity === "group" && "translate-x-[calc(100%+4px)]"
          )}
        />
        
        <button
          onClick={() => onIdentityChange("personal")}
          className={cn(
            "relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-200",
            identity === "personal" ? "text-gray-900" : "text-white/70 hover:text-white"
          )}
        >
          Personal
        </button>
        <button
          onClick={() => onIdentityChange("group")}
          className={cn(
            "relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-200",
            identity === "group" ? "text-gray-900" : "text-white/70 hover:text-white"
          )}
        >
          Group
        </button>
      </div>
    </div>
  );
}
