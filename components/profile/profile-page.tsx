"use client";

import Image, { type StaticImageData } from "next/image";
import { type ReactNode, startTransition, useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Instagram,
  Mail,
  X,
  GalleryVerticalEnd,
  type LucideIcon,
} from "lucide-react";

import bakeryAvatar from "@/assets/BAKERY標準字/白/(白)logo.png";
import bakeryWorkOne from "@/assets/BAKERY標準字/白/白bakery logo-01.png";
import bakeryWorkTwo from "@/assets/BAKERY標準字/白/白bakery logo-02.png";
import bakeryWorkThree from "@/assets/BAKERY標準字/白/白bakery logo-03.png";
import bakeryCommissionOne from "@/assets/BAKERY標準字/黑/黑bakery logo-01.png";
import bakeryCommissionTwo from "@/assets/BAKERY標準字/黑/黑bakery logo-02.png";
import bakeryCommissionThree from "@/assets/BAKERY標準字/黑/黑bakery logo-03.png";
import personalAvatar from "@/assets/卡蚯蚓_完稿.png";
import personalWorkOne from "@/assets/二號柴柴2.png";
import personalWorkTwo from "@/assets/IMG_4907.jpeg";
import personalCommissionOne from "@/assets/IMG_4905.jpg";
import personalWordmarkDark from "@/assets/卡蚯蚓標準字/黑字.png";
import personalWordmarkLight from "@/assets/卡蚯蚓標準字/白字.png";
import { cn } from "@/lib/utils";

const SITE_DATA = {
  personal: {
    toggleLabel: "Personal",
    name: "卡蚯蚓",
    title: "Character Illustrator & Visual Storyteller",
    bio: "把角色感、幽默感和可讀性揉進同一張圖裡，讓作品既能作為插畫，也能延伸成封面、主視覺和個人識別。現在開放插畫委託、角色設計與小型品牌合作。",
    chips: ["Taipei based", "Open for commissions", "Character-driven visuals"],
    avatar: {
      image: personalAvatar,
      alt: "卡蚯蚓個人角色主視覺",
      fit: "cover",
    },
    wordmark: {
      image: personalWordmarkLight,
      alt: "卡蚯蚓標準字",
    },
    theme: {
      background: "from-[#1b110d] via-[#140d0a] to-[#080607]",
      orbPrimary: "bg-[#f9c58c]/20",
      orbSecondary: "bg-[#ff8f5c]/18",
      accentText: "text-[#ffe2c5]",
      accentSurface: "bg-[#f7c89b]",
      accentBorder: "border-[#f7c89b]/40",
      badge: "bg-[#f7c89b]/12 text-[#ffe6ce]",
      glow: "shadow-[0_0_90px_rgba(255,216,184,0.28)]",
    },
    sections: {
      works: {
        label: "Works",
        eyebrow: "Selected Artwork",
        heading: "柔軟、荒謬、但很有記憶點的角色畫面",
        description: "主軸放在角色輪廓、表情節奏和畫面色塊的控制，讓每張圖都能獨立成立，也能延伸成一個完整的小宇宙。",
        items: [
          {
            id: "personal-work-main",
            title: "卡蚯蚓 Character Key Visual",
            description: "作為個人代表角色的完稿，重點在辨識度、姿態與透明背景下的可延展性。",
            image: personalAvatar,
            alt: "卡蚯蚓角色主視覺插畫",
            fit: "contain",
          },
          {
            id: "personal-work-shiba",
            title: "二號柴柴",
            description: "以更圓潤的輪廓和留白去測試角色親和力，適合社群貼文與周邊延伸。",
            image: personalWorkOne,
            alt: "二號柴柴角色插畫",
            fit: "contain",
          },
          {
            id: "personal-work-photo",
            title: "Studio Snapshot",
            description: "透過實拍保留筆觸與材質細節，讓數位作品在展示時多一點溫度和真實感。",
            image: personalWorkTwo,
            alt: "個人作品展示實拍照",
            fit: "cover",
          },
        ],
      },
      commission: {
        label: "Commission",
        eyebrow: "Ways To Collaborate",
        heading: "可被整理成委託案與提案版型的視覺語言",
        description: "從單張角色委託，到封面圖、活動主視覺和個人識別，我會把畫面保留得夠有特色，同時讓交付格式足夠實用。",
        items: [
          {
            id: "personal-commission-photo",
            title: "Campaign Mood Frame",
            description: "以氛圍照和插畫語氣對齊專案方向，適合在提案初期建立共同想像。",
            image: personalCommissionOne,
            alt: "個人委託作品展示照",
            fit: "cover",
          },
          {
            id: "personal-commission-wordmark-light",
            title: "Signature Wordmark",
            description: "白字版本可以直接放進首頁、封面和大面積留白的展示環境。",
            image: personalWordmarkLight,
            alt: "卡蚯蚓白字標準字",
            fit: "contain",
          },
          {
            id: "personal-commission-wordmark-dark",
            title: "High-Contrast System",
            description: "黑字版本更適合印刷和標籤型版面，能保留識別的一致性。",
            image: personalWordmarkDark,
            alt: "卡蚯蚓黑字標準字",
            fit: "contain",
          },
        ],
      },
      contact: {
        label: "Contact",
        eyebrow: "Start A Project",
        heading: "插畫委託、角色合作和視覺聊天都歡迎",
        description: "如果你已經有大致方向，可以直接把時程、預算和用途一起丟來，回覆會更快也更精準。",
        note: "目前適合單角色、雙角色、社群封面、活動視覺與個人識別延伸。",
        links: [
          {
            id: "personal-instagram",
            label: "Instagram",
            value: "@yourhandle",
            href: "https://instagram.com/",
            icon: "instagram",
          },
          {
            id: "personal-portfolio",
            label: "Portfolio",
            value: "Selected artwork deck",
            href: "https://example.com/",
            icon: "gallery",
          },
          {
            id: "personal-email",
            label: "Email",
            value: "hello@example.com",
            href: "mailto:hello@example.com",
            icon: "mail",
          },
        ],
      },
    },
  },
  group: {
    toggleLabel: "Group",
    name: "BAKERY",
    title: "Visual Club / Creative Collective",
    bio: "BAKERY 把社團視覺做得像一套可以持續生長的系統，從標準字、主識別到宣傳版面都保留一致語氣，也保留足夠的玩心。適合展演、活動和聯名合作。",
    chips: ["Collective identity", "Event visuals", "Open to collaborations"],
    avatar: {
      image: bakeryAvatar,
      alt: "BAKERY 社團標誌",
      fit: "cover",
    },
    wordmark: {
      image: bakeryWorkOne,
      alt: "BAKERY 標準字",
    },
    theme: {
      background: "from-[#17110d] via-[#110d0a] to-[#070606]",
      orbPrimary: "bg-[#f6d493]/18",
      orbSecondary: "bg-[#b36a35]/20",
      accentText: "text-[#fbe7bf]",
      accentSurface: "bg-[#f0d29e]",
      accentBorder: "border-[#f0d29e]/40",
      badge: "bg-[#f0d29e]/12 text-[#f8e7c4]",
      glow: "shadow-[0_0_90px_rgba(248,220,165,0.22)]",
    },
    sections: {
      works: {
        label: "Works",
        eyebrow: "Identity System",
        heading: "把社團語氣做成一套能延伸的標誌系統",
        description: "這些是 BAKERY 目前最有辨識度的主視覺版本，適合放進海報、投影片封面與社群宣傳，維持一眼就記得住的節奏。",
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
            description: "適合作為版面中的中型焦點，保留品牌感也方便搭配其他資訊層。",
            image: bakeryWorkTwo,
            alt: "BAKERY 白色次標誌",
            fit: "contain",
          },
          {
            id: "group-work-experimental",
            title: "Expanded White Variant",
            description: "更適合用在展演、貼文封面或標題式畫面，帶出較強的空間感。",
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
        description: "黑色系統比較適合淺底、印刷和大量文字併排的場景，能讓 BAKERY 的語氣在不同合作案裡保持一致。",
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
            description: "適合作為聯名視覺中的輔助識別，在不搶戲的前提下留下品牌記憶點。",
            image: bakeryCommissionTwo,
            alt: "BAKERY 黑色次標誌",
            fit: "contain",
          },
          {
            id: "group-commission-compact",
            title: "Compact Black Variant",
            description: "適合資訊密度較高的版面，讓 logo 仍然清楚又不會壓過內容。",
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
        description: "BAKERY 目前適合展演海報、社群主視覺、聯名頁面和活動識別延伸。把需求先整理成幾句話，我們就能很快切進重點。",
        note: "特別適合需要一套視覺語言、但又不想做得過度正式的文化或學生向專案。",
        links: [
          {
            id: "group-instagram",
            label: "Instagram",
            value: "@yourclub",
            href: "https://instagram.com/",
            icon: "instagram",
          },
          {
            id: "group-website",
            label: "Website",
            value: "Project archive",
            href: "https://example.com/",
            icon: "globe",
          },
          {
            id: "group-email",
            label: "Email",
            value: "studio@example.com",
            href: "mailto:studio@example.com",
            icon: "mail",
          },
        ],
      },
    },
  },
} satisfies SiteDataMap;

const SOCIAL_ICONS = {
  instagram: Instagram,
  gallery: GalleryVerticalEnd,
  mail: Mail,
  globe: Globe,
} satisfies Record<SocialIconKey, LucideIcon>;

const GALLERY_TABS = ["works", "commission"] as const;
const TAB_ORDER = ["works", "commission", "contact"] as const;
const INITIAL_SLIDE_STATE: SlideState = {
  personal: { works: 0, commission: 0 },
  group: { works: 0, commission: 0 },
};
const QUICK_EASE: BezierEase = [0.25, 0.1, 0.25, 1];
const LUXE_EASE: BezierEase = [0.22, 1, 0.36, 1];

export function ProfilePage() {
  const [identity, setIdentity] = useState<IdentityKey>("personal");
  const [activeTab, setActiveTab] = useState<TabKey>("works");
  const [slideState, setSlideState] = useState<SlideState>(INITIAL_SLIDE_STATE);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const reduceMotion = Boolean(useReducedMotion());
  const profile = SITE_DATA[identity];
  const currentGalleryIndex =
    activeTab === "contact" ? 0 : slideState[identity][activeTab];
  const currentSection =
    activeTab === "contact" ? null : profile.sections[activeTab];
  const currentItem = currentSection?.items[currentGalleryIndex] ?? null;

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen || activeTab === "contact" || !currentSection) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        updateSlide(activeTab, 1);
      }

      if (event.key === "ArrowLeft") {
        updateSlide(activeTab, -1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, currentSection, identity, lightboxOpen]);

  const updateSlide = (tab: GalleryTab, step: -1 | 1) => {
    const items = SITE_DATA[identity].sections[tab].items;
    if (items.length <= 1) {
      return;
    }

    setSlideState((previous) => ({
      ...previous,
      [identity]: {
        ...previous[identity],
        [tab]: wrapIndex(previous[identity][tab] + step, items.length),
      },
    }));
  };

  const jumpToSlide = (tab: GalleryTab, index: number) => {
    setSlideState((previous) => ({
      ...previous,
      [identity]: {
        ...previous[identity],
        [tab]: index,
      },
    }));
  };

  const handleIdentityChange = (nextIdentity: IdentityKey) => {
    if (nextIdentity === identity) {
      return;
    }

    startTransition(() => {
      setIdentity(nextIdentity);
      setLightboxOpen(false);
    });
  };

  const handleTabChange = (tab: TabKey) => {
    if (tab === activeTab) {
      return;
    }

    startTransition(() => {
      setActiveTab(tab);
      setLightboxOpen(false);
    });
  };

  const sectionTransition: MotionTransition = {
    duration: reduceMotion ? 0.18 : 0.55,
    ease: reduceMotion ? QUICK_EASE : LUXE_EASE,
  };

  const imageTransition: MotionTransition = {
    duration: reduceMotion ? 0.18 : 0.45,
    ease: reduceMotion ? QUICK_EASE : LUXE_EASE,
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#080607] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/profile-bg.jpg')] bg-cover bg-center opacity-[0.12] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${identity}-background`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={sectionTransition}
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-b",
            profile.theme.background,
          )}
        >
          <div
            className={cn(
              "absolute -left-20 top-16 h-72 w-72 rounded-full blur-3xl md:h-[26rem] md:w-[26rem]",
              profile.theme.orbPrimary,
            )}
          />
          <div
            className={cn(
              "absolute bottom-0 right-[-10%] h-80 w-80 rounded-full blur-3xl md:h-[30rem] md:w-[30rem]",
              profile.theme.orbSecondary,
            )}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <IdentityToggle
          identity={identity}
          labels={{
            personal: SITE_DATA.personal.toggleLabel,
            group: SITE_DATA.group.toggleLabel,
          }}
          onChange={handleIdentityChange}
        />

        <AnimatePresence mode="wait">
          <motion.section
            key={identity}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.015 }}
            transition={sectionTransition}
            className="mx-auto mt-10 w-full max-w-5xl space-y-10 md:mt-14 md:space-y-14"
          >
            <header className="space-y-8 text-center md:space-y-10">
              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={sectionTransition}
                className="mx-auto flex flex-col items-center"
              >
                <div className="relative">
                  <div
                    className={cn(
                      "absolute inset-0 rounded-full bg-white/20 blur-3xl",
                      profile.theme.glow,
                    )}
                  />
                  <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28),transparent_70%)] blur-2xl" />
                  <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-white/90 bg-white/10 backdrop-blur-2xl sm:h-48 sm:w-48 md:h-56 md:w-56">
                    <Image
                      src={profile.avatar.image}
                      alt={profile.avatar.alt}
                      priority
                      sizes="(min-width: 768px) 224px, 192px"
                      className="h-full w-full scale-110 object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...sectionTransition, delay: reduceMotion ? 0 : 0.06 }}
                className="space-y-5"
              >
                <div className="mx-auto inline-flex items-center rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.28em] text-white/70 backdrop-blur-2xl">
                  {profile.toggleLabel}
                </div>

                <div className="space-y-3">
                  <h1 className="font-serif text-5xl tracking-tight text-white sm:text-6xl md:text-7xl">
                    {profile.name}
                  </h1>
                  <p className={cn("text-sm uppercase tracking-[0.24em] sm:text-base", profile.theme.accentText)}>
                    {profile.title}
                  </p>
                </div>

                <div className="mx-auto flex w-full max-w-sm items-center justify-center rounded-[24px] border border-white/20 bg-white/8 p-4 backdrop-blur-2xl">
                  <Image
                    src={profile.wordmark.image}
                    alt={profile.wordmark.alt}
                    sizes="(min-width: 640px) 320px, 280px"
                    className="h-auto max-h-24 w-auto object-contain"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {profile.chips.map((chip) => (
                    <span
                      key={chip}
                      className={cn(
                        "rounded-full border border-white/12 px-3 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur-2xl",
                        profile.theme.badge,
                      )}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...sectionTransition, delay: reduceMotion ? 0 : 0.1 }}
                className="mx-auto max-w-3xl rounded-[32px] border border-white/20 bg-white/8 px-6 py-6 backdrop-blur-2xl sm:px-8 sm:py-7"
              >
                <p className="text-sm leading-8 text-white/78 sm:text-base">
                  {profile.bio}
                </p>
              </motion.div>
            </header>

            <section className="mx-auto w-full max-w-[42rem] rounded-[30px] border border-white/20 bg-white/8 p-4 backdrop-blur-2xl sm:p-5 md:p-6">
              <SectionTabs
                sections={profile.sections}
                activeTab={activeTab}
                onChange={handleTabChange}
                accentClass={profile.theme.accentSurface}
              />

              <div className="mt-8 md:mt-10">
                <AnimatePresence mode="wait" initial={false}>
                  {activeTab === "contact" ? (
                    <motion.div
                      key={`${identity}-contact`}
                      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                      transition={sectionTransition}
                    >
                      <ContactPanel profile={profile} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${identity}-${activeTab}`}
                      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                      transition={sectionTransition}
                    >
                      <GalleryPanel
                        section={profile.sections[activeTab]}
                        currentIndex={currentGalleryIndex}
                        onPrevious={() => updateSlide(activeTab, -1)}
                        onNext={() => updateSlide(activeTab, 1)}
                        onSelect={(index) => jumpToSlide(activeTab, index)}
                        onOpenLightbox={() => setLightboxOpen(true)}
                        reduceMotion={reduceMotion}
                        accentBorder={profile.theme.accentBorder}
                        accentText={profile.theme.accentText}
                        imageTransition={imageTransition}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>
          </motion.section>
        </AnimatePresence>
      </div>

      <Lightbox
        open={lightboxOpen}
        item={currentItem}
        items={currentSection?.items ?? []}
        activeIndex={currentGalleryIndex}
        onClose={() => setLightboxOpen(false)}
        onPrevious={
          activeTab === "contact" ? undefined : () => updateSlide(activeTab, -1)
        }
        onNext={
          activeTab === "contact" ? undefined : () => updateSlide(activeTab, 1)
        }
        onSelect={(index) => {
          if (activeTab !== "contact") {
            jumpToSlide(activeTab, index);
          }
        }}
        reduceMotion={reduceMotion}
      />
    </div>
  );
}

function IdentityToggle({
  identity,
  labels,
  onChange,
}: {
  identity: IdentityKey;
  labels: Record<IdentityKey, string>;
  onChange: (identity: IdentityKey) => void;
}) {
  return (
    <LayoutGroup id="identity-toggle">
      <div className="mx-auto inline-flex items-center rounded-full border border-white/15 bg-white/8 p-1.5 backdrop-blur-2xl">
        {(["personal", "group"] as const).map((value) => {
          const isActive = identity === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange(value)}
              className="relative min-w-28 px-5 py-2.5 text-sm uppercase tracking-[0.24em] text-white/72 transition-colors hover:text-white"
            >
              {isActive && (
                <motion.span
                  layoutId="identity-pill"
                  className="absolute inset-0 rounded-full border border-white/20 bg-white/15"
                  transition={{ type: "spring", stiffness: 360, damping: 30 }}
                />
              )}
              <span className={cn("relative z-10", isActive && "text-white")}>
                {labels[value]}
              </span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

function SectionTabs({
  sections,
  activeTab,
  onChange,
  accentClass,
}: {
  sections: ProfileEntry["sections"];
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
  accentClass: string;
}) {
  return (
    <LayoutGroup id="content-tabs">
      <div className="flex flex-wrap items-center justify-center gap-5 border-b border-white/10 pb-3 sm:gap-8">
        {TAB_ORDER.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onChange(tab)}
              className="relative pb-3 text-sm uppercase tracking-[0.28em] text-white/55 transition-colors hover:text-white"
            >
              <span className={cn(isActive && "text-white")}>
                {sections[tab].label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="content-tab-underline"
                  className={cn("absolute inset-x-0 bottom-0 h-px", accentClass)}
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

function GalleryPanel({
  section,
  currentIndex,
  onPrevious,
  onNext,
  onSelect,
  onOpenLightbox,
  reduceMotion,
  accentBorder,
  accentText,
  imageTransition,
}: {
  section: GallerySection;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  onOpenLightbox: () => void;
  reduceMotion: boolean;
  accentBorder: string;
  accentText: string;
  imageTransition: MotionTransition;
}) {
  const item = section.items[currentIndex];

  return (
    <div className="space-y-7 md:space-y-9">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            {section.eyebrow}
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-white sm:text-4xl md:text-[2.9rem]">
            {section.heading}
          </h2>
          <p className="text-sm leading-8 text-white/68 sm:text-base">
            {section.description}
          </p>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <IconButton label="Previous image" onClick={onPrevious}>
            <ChevronLeft className="size-4" />
          </IconButton>
          <IconButton label="Next image" onClick={onNext}>
            <ChevronRight className="size-4" />
          </IconButton>
        </div>
      </div>

      <div className="overflow-hidden rounded-[26px] border border-white/20 bg-white/6 p-2.5 backdrop-blur-2xl">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.72fr)]">
          <motion.button
            type="button"
            onClick={onOpenLightbox}
            whileHover={reduceMotion ? undefined : { scale: 1.01 }}
            whileTap={reduceMotion ? undefined : { scale: 0.995 }}
            className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-black/30 text-left"
          >
            <div className="relative aspect-[4/5] min-h-[14rem] sm:min-h-[18rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.id}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                  transition={imageTransition}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className={cn(
                      item.fit === "contain"
                        ? "object-contain p-5 sm:p-6 md:p-7"
                        : "object-cover",
                    )}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-white/5" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/35 px-2.5 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl">
              Open Lightbox
            </div>
          </motion.button>

          <div className="flex flex-col justify-between rounded-[22px] border border-white/10 bg-black/25 p-4 sm:p-5">
            <div className="space-y-3">
              <p className={cn("text-xs uppercase tracking-[0.32em]", accentText)}>
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(section.items.length).padStart(2, "0")}
              </p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.id}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={imageTransition}
                  className="space-y-3"
                >
                  <h3 className="font-serif text-xl tracking-tight text-white sm:text-[1.6rem]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-6 text-white/68 sm:text-sm">
                    {item.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-2 md:hidden">
                <IconButton label="Previous image" onClick={onPrevious}>
                  <ChevronLeft className="size-4" />
                </IconButton>
                <IconButton label="Next image" onClick={onNext}>
                  <ChevronRight className="size-4" />
                </IconButton>
              </div>

              <div className={cn("rounded-[18px] border bg-white/6 p-3", accentBorder)}>
                <p className="text-[0.72rem] uppercase tracking-[0.26em] text-white/45">
                  Presentation
                </p>
                <p className="mt-2 text-xs leading-6 text-white/72 sm:text-sm">
                  單圖展示把注意力留給當下這張作品，不讓內容在縮圖網格裡被快速消耗。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {section.items.map((slide, index) => {
            const isActive = currentIndex === index;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => onSelect(index)}
                className="group p-1"
                aria-label={`Go to image ${index + 1}`}
              >
                <motion.span
                  animate={{
                    width: isActive ? 24 : 8,
                    opacity: isActive ? 1 : 0.45,
                  }}
                  transition={imageTransition}
                  className={cn(
                    "block h-2 rounded-full bg-white",
                    isActive && "bg-white",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ContactPanel({ profile }: { profile: ProfileEntry }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
      <div className="rounded-[28px] border border-white/20 bg-white/6 p-6 backdrop-blur-2xl sm:p-7">
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          {profile.sections.contact.eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-white sm:text-4xl">
          {profile.sections.contact.heading}
        </h2>
        <p className="mt-4 text-sm leading-8 text-white/70 sm:text-base">
          {profile.sections.contact.description}
        </p>
        <div className="mt-8 rounded-[24px] border border-white/12 bg-black/25 p-5">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/45">
            Availability
          </p>
          <p className="mt-3 text-sm leading-7 text-white/72">
            {profile.sections.contact.note}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {profile.sections.contact.links.map((link, index) => {
          const Icon = SOCIAL_ICONS[link.icon];

          return (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: LUXE_EASE, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="group flex items-center gap-4 rounded-[24px] border border-white/20 bg-white/8 px-5 py-4 backdrop-blur-2xl"
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-white/12 bg-black/25">
                <Icon className="size-5 text-white" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  {link.label}
                </p>
                <p className="mt-1 truncate text-sm text-white/85 sm:text-base">
                  {link.value}
                </p>
              </div>

              <ArrowUpRight className="size-4 text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

function Lightbox({
  open,
  item,
  items,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
  onSelect,
  reduceMotion,
}: {
  open: boolean;
  item: GalleryItem | null;
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  onSelect: (index: number) => void;
  reduceMotion: boolean;
}) {
  if (!item) {
    return null;
  }

  const transition: MotionTransition = {
    duration: reduceMotion ? 0.18 : 0.4,
    ease: reduceMotion ? QUICK_EASE : LUXE_EASE,
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-xl sm:px-6"
          onClick={onClose}
        >
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.01 }}
            transition={transition}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            className="w-full max-w-6xl"
          >
            <div className="mb-4 flex items-center justify-between gap-4 text-white/80">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Expanded View
                </p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight text-white sm:text-3xl">
                  {item.title}
                </h3>
              </div>

              <IconButton label="Close lightbox" onClick={onClose}>
                <X className="size-4" />
              </IconButton>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/6 p-3 backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[28px] bg-black/35">
                <div className="relative aspect-[16/10] min-h-[22rem] sm:min-h-[30rem]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={item.id}
                      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.015 }}
                      transition={transition}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="100vw"
                        className={cn(
                          item.fit === "contain"
                            ? "object-contain p-8 sm:p-10"
                            : "object-cover",
                        )}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_55%)]" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute inset-y-0 left-3 flex items-center">
                  <IconButton label="Previous image" onClick={onPrevious}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                </div>

                <div className="absolute inset-y-0 right-3 flex items-center">
                  <IconButton label="Next image" onClick={onNext}>
                    <ChevronRight className="size-4" />
                  </IconButton>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                  {item.description}
                </p>

                <div className="flex items-center justify-center gap-2">
                  {items.map((slide, index) => {
                    const isActive = activeIndex === index;

                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => onSelect(index)}
                        className="group p-1"
                        aria-label={`Show image ${index + 1}`}
                      >
                        <motion.span
                          animate={{
                            width: isActive ? 24 : 8,
                            opacity: isActive ? 1 : 0.45,
                          }}
                          transition={transition}
                          className="block h-2 rounded-full bg-white"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-2xl transition-colors hover:bg-white/14"
    >
      {children}
    </motion.button>
  );
}

function wrapIndex(index: number, total: number) {
  if (total === 0) {
    return 0;
  }

  return (index + total) % total;
}

type SiteDataMap = Record<"personal" | "group", ProfileEntry>;
type BezierEase = [number, number, number, number];
type MotionTransition = {
  duration: number;
  ease: BezierEase;
};

type ProfileEntry = {
  toggleLabel: string;
  name: string;
  title: string;
  bio: string;
  chips: string[];
  avatar: {
    image: StaticImageData;
    alt: string;
    fit: GalleryFit;
  };
  wordmark: {
    image: StaticImageData;
    alt: string;
  };
  theme: {
    background: string;
    orbPrimary: string;
    orbSecondary: string;
    accentText: string;
    accentSurface: string;
    accentBorder: string;
    badge: string;
    glow: string;
  };
  sections: {
    works: GallerySection;
    commission: GallerySection;
    contact: ContactSection;
  };
};

type GallerySection = {
  label: string;
  eyebrow: string;
  heading: string;
  description: string;
  items: GalleryItem[];
};

type ContactSection = {
  label: string;
  eyebrow: string;
  heading: string;
  description: string;
  note: string;
  links: SocialLink[];
};

type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  fit: GalleryFit;
};

type SocialLink = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: SocialIconKey;
};

type GalleryFit = "contain" | "cover";
type IdentityKey = keyof typeof SITE_DATA;
type GalleryTab = (typeof GALLERY_TABS)[number];
type TabKey = (typeof TAB_ORDER)[number];
type SocialIconKey = "instagram" | "gallery" | "mail" | "globe";
type SlideState = Record<IdentityKey, Record<GalleryTab, number>>;
