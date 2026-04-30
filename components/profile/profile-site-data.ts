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
import personalAvatar from "@/assets/卡蚯蚓_完稿.png";
import personalWorkOne from "@/assets/Bread_work/work_karas.jpg";
import personalWorkTwo from "@/assets/Bread_work/work_rain.jpeg";
import personalWorkthree from "@/assets/Bread_work/love_sick.png";
import personalWorkfour from "@/assets/Bread_work/love_sick.png";
import personalCommissionOne from "@/assets/Bread_commission/work_narciss.jpg";
import personalCommissionTwo from "@/assets/Bread_commission/work_sparky.jpg";
import personalCommissionThree from "@/assets/Bread_commission/work_want.jpg";
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
        heading: "過往發表內容",
        description:
          "節錄部分合作與創作。",
        items: [
          {
            id: "personal-work-main",
            title: "卡蚯蚓 Character Key Visual",
            description:
              "作為個人代表角色的完稿，重點在辨識度、姿態與透明背景下的可延展性。",
            image: personalWorkOne,
            alt: "卡蚯蚓角色主視覺插畫",
            fit: "contain",
          },
          {
            id: "personal-work-shiba",
            title: "二號柴柴",
            description:
              "以更圓潤的輪廓和留白去測試角色親和力，適合社群貼文與周邊延伸。",
            image: personalWorkTwo,
            alt: "二號柴柴角色插畫",
            fit: "contain",
          },
          {
            id: "personal-work-photo",
            title: "Studio Snapshot",
            description:
              "透過實拍保留筆觸與材質細節，讓數位作品在展示時多一點溫度和真實感。",
            image: personalWorkthree,
            alt: "個人作品展示實拍照",
            fit: "contain",
          },
          {
            id: "personal-work-photo",
            title: "Studio Snapshot",
            description:
              "透過實拍保留筆觸與材質細節，讓數位作品在展示時多一點溫度和真實感。",
            image: personalWorkfour,
            alt: "個人作品展示實拍照",
            fit: "cover",
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
            title: "Campaign Mood Frame",
            description:
              "以氛圍照和插畫語氣對齊專案方向，適合在提案初期建立共同想像。",
            image: personalCommissionOne,
            alt: "個人委託作品展示照",
            fit: "cover",
          },
          {
            id: "personal-commission-wordmark-light",
            title: "Signature Wordmark",
            description:
              "白字版本可以直接放進首頁、封面和大面積留白的展示環境。",
            image: personalCommissionTwo,
            alt: "卡蚯蚓白字標準字",
            fit: "contain",
          },
          {
            id: "personal-commission-wordmark-dark",
            title: "High-Contrast System",
            description:
              "黑字版本更適合印刷和標籤型版面，能保留識別的一致性。",
            image: personalCommissionThree,
            alt: "卡蚯蚓黑字標準字",
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
        note: "目前適合單角色、雙角色、社群封面、活動視覺與個人識別延伸。",
        links: [
          {
            id: "personal-twitter",
            label: "Twitter",
            value: "@yourhandle",
            href: "https://x.com/",
            icon: "twitter",
          },
          {
            id: "personal-discord",
            label: "Discord",
            value: "yourname#0000",
            href: "https://discord.com/",
            icon: "discord",
          },
          {
            id: "personal-email",
            label: "Mail",
            value: "hello@example.com",
            href: "mailto:hello@example.com",
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
        eyebrow: "Identity System",
        heading: "把社團語氣做成一套能延伸的標誌系統",
        description:
          "這些是 BAKERY 目前最有辨識度的主視覺版本，適合放進海報、投影片封面與社群宣傳，維持一眼就記得住的節奏。",
        items: [
          {
            id: "group-work-main",
            title: "Primary White Lockup",
            description: "最完整的白色主標版本，適合深色背景與主宣傳視覺。",
            image: bakeryWorkOne,
            alt: "BAKERY 白色主標誌",
            fit: "contain",
          },
          {
            id: "group-work-secondary",
            title: "Secondary White Mark",
            description:
              "適合作為版面中的中型焦點，保留品牌感也方便搭配其他資訊層。",
            image: bakeryWorkTwo,
            alt: "BAKERY 白色次標誌",
            fit: "contain",
          },
          {
            id: "group-work-experimental",
            title: "Expanded White Variant",
            description:
              "更適合用在展演、貼文封面或標題式畫面，帶出較強的空間感。",
            image: bakeryWorkThree,
            alt: "BAKERY 白色延伸標誌",
            fit: "contain",
          },
        ],
      },
      commission: {
        label: "Commission",
        eyebrow: "Collaboration Format",
        heading: "可快速套進聯名、海報與活動版面的識別版本",
        description:
          "黑色系統比較適合淺底、印刷和大量文字併排的場景，能讓 BAKERY 的語氣在不同合作案裡保持一致。",
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
        eyebrow: "Reach The Collective",
        heading: "如果想聊活動、聯名或社團合作，這裡最直接",
        description:
          "BAKERY 目前適合展演海報、社群主視覺、聯名頁面和活動識別延伸。把需求先整理成幾句話，我們就能很快切進重點。",
        note:
          "特別適合需要一套視覺語言、但又不想做得過度正式的文化或學生向專案。",
        links: [
          {
            id: "group-twitter",
            label: "Twitter",
            value: "@bread_sk8",
            href: "https://x.com/bread_sk8",
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
