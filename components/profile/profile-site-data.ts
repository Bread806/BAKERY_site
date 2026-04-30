"use client";

import type { StaticImageData } from "next/image";

import bakeryAvatar from "@/assets/BAKERY標準字/白/(白)logo.png";
import bakerywhitetype from "@/assets/BAKERY標準字/白/white_bakery_type.png";
import bakeryWorkOne from "@/assets/BAKERY標準字/白/白bakery logo-01.png";
import bakeryWorkTwo from "@/assets/BAKERY標準字/白/白bakery logo-02.png";
import bakeryWorkThree from "@/assets/BAKERY標準字/白/白bakery logo-03.png";
import bakeryCommissionOne from "@/assets/BAKERY標準字/黑/黑bakery logo-01.png";
import bakeryCommissionTwo from "@/assets/BAKERY標準字/黑/黑bakery logo-02.png";
import bakeryCommissionThree from "@/assets/BAKERY標準字/黑/黑bakery logo-03.png";
import personalAvatar from "@/assets/二號柴柴2.png";
import personalWorkOne from "@/assets/Bread_work/work_karas.jpg";
import personalWorkTwo from "@/assets/Bread_work/work_rain.jpeg";
import personalWorkthree from "@/assets/Bread_work/love_sick.png";
import personalWorkfour from "@/assets/Bread_work/work_between_us.jpg";
import personalCommissionOne from "@/assets/Bread_commission/work_narciss.jpg";
import personalCommissionTwo from "@/assets/Bread_commission/work_sparky.jpg";
import personalCommissionThree from "@/assets/Bread_commission/work_want.jpg";
import personalCommissionFour from "@/assets/Bread_commission/work_yukichan.png";
import personalWordmarkDark from "@/assets/卡蚯蚓標準字/黑字.png";
import personalWordmarkLight from "@/assets/卡蚯蚓標準字/白字.png";
import personalwhitetype from "@/assets/卡蚯蚓標準字/white_type.png";

export const PROFILE_SITE_DATA = {
  personal: {
    // Main hero content: edit the avatar and text under the avatar here.
    // Visual size is controlled in profile-page.tsx, not in this data file.
    name: "",
    title: "撰寫台本、短篇語音、文字創作",
    avatar: {
      image: personalAvatar, //personalAvatar
      alt: "卡蚯蚓個人角色主視覺",
      fit: "cover",
    },
    // Wordmark image shown under the title.
    // Swap the image here; adjust the rendered size in profile-page.tsx.
    wordmark: {
      image: personalwhitetype,
      alt: "卡蚯蚓白色標準字",
    },
    // Editable tab content: Works / Commission / Contact.
    sections: {
      works: {
        label: "Works",
        eyebrow: "Selected Artwork",
        heading: "發表作品",
        description:
          "節錄部分合作與創作。 <a href='https://youtu.be/H5BQIZOmnuE'>連結</a>",
        items: [
          {
            id: "personal-work-main",
            title: "居酒屋的姊姊似乎討厭下雨天",
            description:
              "Project:Limnos｜Voice:黑銀夜烏｜Script:卡蚯蚓 <a target=\"_blank\" href='https://youtu.be/H5BQIZOmnuE?si=BiW56GAkF6bJaNJk'>連結</a>" ,
            image: personalWorkOne,
            alt: "居酒屋的姊姊似乎討厭下雨天",
            fit: "contain",
          },
          {
            id: "personal-work-shiba",
            title: "雨季與畢業季",
            description:
              "雨季與畢業季",
            image: personalWorkTwo,
            alt: "雨季與畢業季",
            fit: "contain",
          },
          {
            id: "personal-work-photo",
            title: "Love Sick",
            description:
              "Project:晚晚配音中｜Voice:晚晚｜Script:卡蚯蚓",
            image: personalWorkthree,
            alt: "Love Sick",
            fit: "contain",
          },
          {
            id: "personal-work-photo",
            title: "我們的事",
            description:
              "Project:晚晚配音中｜Voice:晚晚｜Script:卡蚯蚓",
            image: personalWorkfour,
            alt: "我們的事",
            fit: "contain",
          },
        ],
      },
      commission: {
        label: "Commission",
        eyebrow: "Selected Commission",
        heading: "委託內容",
        description:
          "過往委託內容，可能包含全年齡或成人向。",
        items: [
          {
            id: "personal-commission-photo",
            title: "我才是最特別的納一位",
            description:
              "Project:納希斯Narciss｜Voice:納希斯Narciss｜Script:卡蚯蚓",
            image: personalCommissionOne,
            alt: "我才是最特別的納一位",
            fit: "contain",
          },
          {
            id: "personal-commission-wordmark-light",
            title: "鼠在不想離開你",
            description:
              "Project:咲鼠｜Voice:咲鼠｜Script:卡蚯蚓",
            image: personalCommissionTwo,
            alt: "鼠在不想離開你",
            fit: "contain",
          },
          {
            id: "personal-commission-wordmark-dark",
            title: "只想要你聽著我",
            description:
              "Project:晚晚配音中｜Voice:晚晚｜Script:卡蚯蚓 youtube: https://www.youtube.com/watch?v=Zt2h8sQyXqA",
            image: personalCommissionThree,
            alt: "只想要你聽著我",
            fit: "contain",
          },
          {
            id: "personal-commission-four",
            title: "羞澀的新婚之夜～小雪在你懷中低聲呢喃的愛",
            description:
              "Project:雪白薄紗｜voice:小雪Yukichan｜Script:卡蚯蚓",
            image: personalCommissionFour,
            alt: "羞澀的新婚之夜～小雪在你懷中低聲呢喃的愛",
            fit: "contain",
          },
        ],
      },
      contact: {
        label: "Contact",
        eyebrow: "Start A Project",
        heading: "聯繫",
        description:
          "目前關閉委託，但仍歡迎與我聯繫。",
        note: "",
        links: [
          {
            id: "personal-twitter",
            label: "Twitter",
            value: "@bread_sk8",
            href: "https://x.com/bread_sk8",
            icon: "twitter",
          },
          {
            id: "personal-discord",
            label: "Discord",
            value: "@bread_sk8",
            href: "https://discord.gg/7SkGeDsUWu",
            icon: "discord",
          },
          {
            id: "personal-email",
            label: "Mail",
            value: "wormbakery@gmail.com",
            href: "mailto:wormbakery@gmail.com",
            icon: "mail",
          },
        ],
      },
    },
  },
  group: {
    // Main hero content: edit the avatar and text under the avatar here.
    // Visual size is controlled in profile-page.tsx, not in this data file.
    name: "",
    title: "為了烘焙美好文字而發表任性的音聲作品。",
    bio: "",
    avatar: {
      image: bakeryAvatar,
      alt: "BAKERY 社團標誌",
      fit: "cover",
    },
    // Wordmark image shown under the title.
    // Swap the image here; adjust the rendered size in profile-page.tsx.
    wordmark: {
      image: bakerywhitetype,
      alt: "BAKERY 白色標準字",
    },
    // Editable tab content: Works / Commission / Contact.
    sections: {
      works: {
        label: "Works",
        eyebrow: "released works",
        heading: "敬請期待",
        description:
          "",
        items: [
          {
            id: "group-work-main",
            title: "敬請期待",
            description: "敬請期待",
            image: bakeryWorkOne,
            alt: "敬請期待",
            fit: "contain",
          },
          
        ],
      },
      commission: {
        label: "",
        eyebrow: "Collaboration",
        heading: "敬請期待",
        description:
          "",
        items: [
          {
            id: "group-commission-main",
            title: "Primary Black Lockup",
            description: "對比強、辨識高，適合正式簡報、活動主海報與印刷品。",
            image: bakeryCommissionOne,
            alt: "BAKERY 黑色主標誌",
            fit: "contain",
          },
          {
            id: "group-commission-secondary",
            title: "Secondary Black Mark",
            description:
              "適合作為聯名視覺中的輔助識別，在不搶戲的前提下留下品牌記憶點。",
            image: bakeryCommissionTwo,
            alt: "BAKERY 黑色次標誌",
            fit: "contain",
          },
          {
            id: "group-commission-compact",
            title: "Compact Black Variant",
            description:
              "適合資訊密度較高的版面，讓 logo 仍然清楚又不會壓過內容。",
            image: bakeryCommissionThree,
            alt: "BAKERY 黑色延伸標誌",
            fit: "contain",
          },
        ],
      },
      contact: {
        label: "Contact",
        eyebrow: "Contact Us",
        heading: "聯絡方式",
        description:
          "合作案件敬請使用 Emaill 聯繫。若三個工作日未回覆請多提醒我幾次。",
        note:
          "特別適合需要一套視覺語言、但又不想做得過度正式的文化或學生向專案。",
        links: [
          {
            id: "group-twitter",
            label: "Twitter",
            value: "@wormbakery",
            href: "https://x.com/wormbakery",
            icon: "twitter",
          },
          {
            id: "group-discord",
            label: "Discord",
            value: "@bread_sk8",
            href: "https://discord.gg/7SkGeDsUWu",
            icon: "discord",
          },
          {
            id: "group-email",
            label: "Mail",
            value: "wormbakery@gmail.com",
            href: "mailto:wormbakery@gmail.com",
            icon: "mail",
          },
        ],
      },
    },
  },
} satisfies ProfileContentMap;

export type ProfileContentMap = Record<"personal" | "group", ProfileContentEntry>;

export type ProfileContentEntry = {
  name: string;
  title: string;
  bio?: string;
  avatar: {
    image: StaticImageData;
    alt: string;
    fit: GalleryFit;
  };
  wordmark: {
    image: StaticImageData;
    alt: string;
  };
  sections: {
    works: GallerySection;
    commission: GallerySection;
    contact: ContactSection;
  };
};

export type GallerySection = {
  label: string;
  eyebrow: string;
  heading: string;
  description: string;
  items: GalleryItem[];
};

export type ContactSection = {
  label: string;
  eyebrow: string;
  heading: string;
  description: string;
  note: string;
  links: SocialLink[];
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  fit: GalleryFit;
};

export type SocialLink = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: SocialIconKey;
};

export type GalleryFit = "contain" | "cover";
export type SocialIconKey = "twitter" | "discord" | "mail";
