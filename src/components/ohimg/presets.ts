import { cn } from "./helpers";
import type {
  ContentLayout,
  ImageTemplate,
  PresetName,
  PatternType,
  GradientDirection,
  MaskDirection,
} from "./types";

export const defaultLayout: ContentLayout = {
  layoutContainer:
    "relative w-full h-full flex flex-col items-center justify-center",
  contentContainer:
    "relative flex flex-col space-between w-full min-h-screen mx-auto px-[40px] py-[40px]",
  logoContainer: "flex items-center justify-center mx-auto",
  logo: "h-[70px] mt-3",
  tagContainer: "flex justify-between mx-auto w-[800px] mt-6 items-center",
  tag: "px-3 py-2 rounded-full text-white bg-gray-700 text-base font-medium",
  title:
    "flex-1 h-full text-[#ffffff] text-6xl font-semibold text-center w-[830px] mx-auto items-center justify-center leading-tight",
  subTitle:
    "flex h-56 items-center justify-center text-center text-2xl font-semibold text-gray-300 w-[830px] mx-auto",
  website:
    "flex h-16 items-center justify-center text-3xl font-semibold text-gray-50 w-[830px]",
};

export const darkmode = {
  gradient: {
    startColor: "#0F172A", // Very dark blue
    endColor: "#1E293B", // Dark slate blue
    direction: "to bottom" as GradientDirection,
    opacity: 0.95,
  },
  pattern: {
    type: "dots" as PatternType,
    color: "#ffffff", // Slate blue for subtle dots
    opacity: 0.15,
    size: 15,
    backgroundSize: 30,
    mask: {
      enabled: true,
      direction: "circle at center" as MaskDirection,
      visibleRadius: 55,
      fadeWidth: 20,
    },
  },
  layout: {
    ...defaultLayout,
    // title: cn(defaultLayout.title, "text-white"),
    // subTitle: cn(defaultLayout.subTitle, "text-center"),
    // tagContainer: cn(defaultLayout.tagContainer, "w-[300px]"),
  },
};

export const lightmode = {
  gradient: {
    startColor: "#e2e8f0", // Very dark blue
    endColor: "#f1f5f9", // Dark slate blue
    direction: "to bottom" as GradientDirection,
    opacity: 0.95,
  },
  pattern: {
    type: "dots" as PatternType,
    color: "#000000", // Slate blue for subtle dots
    opacity: 0.15,
    size: 15,
    backgroundSize: 30,
    mask: {
      enabled: true,
      direction: "circle at center" as MaskDirection,
      visibleRadius: 55,
      fadeWidth: 20,
    },
  },
  layout: {
    ...defaultLayout,
    // title: cn(defaultLayout.title, "text-gray-900"),
    // subTitle: cn(defaultLayout.subTitle, "text-center text-gray-800"),
    // website: cn(defaultLayout.website, "text-gray-700"),
    // tagContainer: cn(defaultLayout.tagContainer, "w-[300px]"),
  },
};

export const presets: Record<
  PresetName,
  Partial<Omit<ImageTemplate, "content" | "preset" | "override">>
> = {
  darkmode: darkmode,
  lightmode: lightmode,
  solid: {
    gradient: {
      startColor: "#000000",
      endColor: "#000000",
      direction: "to bottom right",
      opacity: 1,
    },
    pattern: {
      type: "none",
    },
    layout: defaultLayout,
  },
  modern: {
    gradient: {
      startColor: "#4F46E5",
      endColor: "#0EA5E9",
      direction: "to bottom right",
      opacity: 0.9,
    },
    pattern: {
      type: "dots",
      color: "#000000",
      opacity: 0.5,
      size: 20,
      backgroundSize: 18,
      lineThickness: 1,
      mask: {
        enabled: true,
        direction: "circle at center",
        visibleRadius: 50,
        fadeWidth: 20,
      },
    },
  },
  classic: {
    gradient: {
      startColor: "#1E293B",
      endColor: "#0F172A",
      opacity: 0.7,
    },
  },
  minimal: {
    gradient: {
      startColor: "#F8FAFC",
      endColor: "#E2E8F0",
      direction: "to bottom",
    },
  },
  bold: {
    gradient: {
      startColor: "#7C3AED",
      endColor: "#DB2777",
      direction: "to top left",
    },
    pattern: {
      type: "grid",
      opacity: 0.3,
    },
  },
  "bg-image": {
    layout: {
      ...defaultLayout,
      // title: cn(defaultLayout.title, "text-gray-800"),
      // subTitle: cn(
      //   defaultLayout.subTitle,
      //   "text-gray-700 text-3xl text-center"
      // ),
      // website: cn(defaultLayout.website, "text-gray-800"),
    },
    gradient: {
      direction: "none",
    },
    pattern: {
      type: "grid",
      color: "#000000",
      opacity: 0.3,
      size: 10,
      lineThickness: 1,
      mask: {
        enabled: true,
        visibleRadius: 30,
        fadeWidth: 20,
      },
    },
  },
};
