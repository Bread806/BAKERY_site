import { Instagram, Twitter, Github, Mail, Linkedin, Globe } from "lucide-react";

export interface WorkItem {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: typeof Instagram;
}

export interface ProfileData {
  avatar: string;
  name: string;
  title: string;
  bio: string;
  works: WorkItem[];
  commissions: WorkItem[];
  socials: SocialLink[];
}

export const PERSONAL_DATA: ProfileData = {
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face",
  name: "Alex Chen",
  title: "Digital Artist & Designer",
  bio: "Creating digital art and illustrations that blend surrealism with modern aesthetics. Open for commissions and collaborations. Based in Tokyo, Japan.",
  works: [
    {
      id: "p1",
      title: "Neon Dreams",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
      description: "Digital artwork exploring neon aesthetics",
    },
    {
      id: "p2",
      title: "Abstract Flow",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=400&fit=crop",
      description: "Fluid abstract composition",
    },
    {
      id: "p3",
      title: "Cyber Portrait",
      image: "https://images.unsplash.com/photo-1633186710895-309db2eca9e4?w=400&h=400&fit=crop",
      description: "Futuristic portrait series",
    },
    {
      id: "p4",
      title: "Urban Glow",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop",
      description: "City-inspired digital art",
    },
    {
      id: "p5",
      title: "Nature Blend",
      image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=400&fit=crop",
      description: "Organic digital compositions",
    },
    {
      id: "p6",
      title: "Geometric Dreams",
      image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=400&h=400&fit=crop",
      description: "Geometric abstract art",
    },
  ],
  commissions: [
    {
      id: "c1",
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop",
      description: "Custom brand design",
    },
    {
      id: "c2",
      title: "Album Cover",
      image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop",
      description: "Music album artwork",
    },
    {
      id: "c3",
      title: "Event Poster",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
      description: "Promotional poster design",
    },
  ],
  socials: [
    { id: "s1", label: "Instagram", url: "https://instagram.com", icon: Instagram },
    { id: "s2", label: "Twitter", url: "https://twitter.com", icon: Twitter },
    { id: "s3", label: "GitHub", url: "https://github.com", icon: Github },
    { id: "s4", label: "Email", url: "mailto:hello@example.com", icon: Mail },
  ],
};

export const GROUP_DATA: ProfileData = {
  avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop&crop=face",
  name: "Studio Collective",
  title: "Creative Design Agency",
  bio: "A collective of passionate designers and artists pushing the boundaries of visual storytelling. We specialize in branding, digital experiences, and immersive art installations.",
  works: [
    {
      id: "g1",
      title: "Tech Startup Rebrand",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
      description: "Complete brand overhaul",
    },
    {
      id: "g2",
      title: "Interactive Exhibition",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      description: "Immersive art installation",
    },
    {
      id: "g3",
      title: "Fashion Campaign",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=400&fit=crop",
      description: "Seasonal lookbook design",
    },
    {
      id: "g4",
      title: "App UI Design",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop",
      description: "Mobile app interface",
    },
  ],
  commissions: [
    {
      id: "gc1",
      title: "Corporate Identity",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop",
      description: "Full branding package",
    },
    {
      id: "gc2",
      title: "Web Experience",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop",
      description: "Interactive website design",
    },
  ],
  socials: [
    { id: "gs1", label: "Website", url: "https://example.com", icon: Globe },
    { id: "gs2", label: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { id: "gs3", label: "Instagram", url: "https://instagram.com", icon: Instagram },
    { id: "gs4", label: "Email", url: "mailto:studio@example.com", icon: Mail },
  ],
};
