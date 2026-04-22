"use client";

import Image from "next/image";
import type { WorkItem } from "@/lib/profile-data";

interface WorksGridProps {
  items: WorkItem[];
}

export function WorksGrid({ items }: WorksGridProps) {
  if (items.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center">
        <p className="text-white/50">No items to display</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative aspect-square overflow-hidden rounded-xl bg-white/5"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="p-3">
              <p className="text-sm font-medium text-white">{item.title}</p>
              {item.description && (
                <p className="mt-0.5 text-xs text-white/70">{item.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
