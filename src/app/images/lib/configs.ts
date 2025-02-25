import type { OhImgBaseTemplateProps } from "@/components/ohimg";

type Config = OhImgBaseTemplateProps & {
  slug: string;
};

const imageConfigs: Config[] = [
  {
    slug: "image-1",
    content: {
      title: "Every webpage deserves its own open graph image",
      subTitle:
        "Generate beautiful open graph images for your website with Ohimg.",
    },
    gradient: {
      startColor: "#0F172A",
      endColor: "#1E293B",
      direction: "to bottom",
      opacity: 0.95,
    },
    pattern: {
      type: "dots",
      color: "#ffffff",
      opacity: 0.15,
      size: 15,
      backgroundSize: 30,
      mask: {
        enabled: true,
        direction: "circle at center",
        visibleRadius: 55,
        fadeWidth: 20,
      },
    },
    layout: {
      layoutContainer:
        "relative w-full h-full flex flex-col items-center justify-center",
      contentContainer:
        "relative flex flex-col w-full min-h-screen mx-auto px-[40px] py-[40px]",
      title:
        "flex-1 h-full text-[#ffffff] text-6xl font-semibold text-center w-[830px] mx-auto items-center justify-center leading-tight",
      subTitle:
        "flex h-48 items-start justify-center text-center text-2xl font-semibold text-gray-300 w-[830px] mx-auto",
    },
  },
  {
    slug: "image-2",
    content: {
      title: "Purple theme with diagonal gradient",
      subTitle: "Create eye-catching social media cards with minimal effort",
    },
    gradient: {
      startColor: "#4A148C",
      endColor: "#7B1FA2",
      direction: "to right",
      opacity: 0.9,
    },
    pattern: {
      type: "dots",
      color: "#E1BEE7",
      opacity: 0.2,
      size: 12,
      backgroundSize: 24,
      mask: {
        enabled: true,
        direction: "circle at center",
        visibleRadius: 60,
        fadeWidth: 15,
      },
    },
    layout: {
      layoutContainer:
        "relative w-full h-full flex flex-col items-center justify-center",
      contentContainer:
        "relative flex flex-col w-full min-h-screen mx-auto px-[40px] py-[40px]",
      title:
        "flex-1 h-full text-[#ffffff] text-6xl font-bold text-center w-[830px] mx-auto items-center justify-center leading-tight",
      subTitle:
        "flex h-48 items-start justify-center text-center text-2xl font-medium text-purple-100 w-[830px] mx-auto",
    },
  },
];

export function getConfigBySlug(slug: string): Config | undefined {
  return imageConfigs.find((config) => config.slug === slug);
}

export function getAllConfigs(): Config[] {
  return imageConfigs;
}
