import { ImageResponse } from "next/og";
import type { ImageResponseOptions } from "next/server";
import { Template } from "@/components/ohimg";
import type {
  GradientDirection,
  MaskDirection,
  PatternType,
} from "@/components/ohimg/types";

export const runtime = "edge";

export default async function GET() {
  const imageOptions: ImageResponseOptions = {
    width: 1200,
    height: 630,
  };

  return new ImageResponse(
    Template({
      content: {
        title: "Every webpage deserves it's own open graph image",
        subTitle:
          "Generate beautiful open graph images for your website with Ohimg. Customize the template to match your brand.",
      },
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
        layoutContainer:
          "relative w-full h-full flex flex-col items-center justify-center",
        contentContainer:
          "relative flex flex-col space-between w-full min-h-screen mx-auto px-[40px] py-[40px]",
        title:
          "flex-1 h-full text-[#ffffff] text-6xl font-semibold text-center w-[830px] mx-auto items-center justify-center leading-tight",
        subTitle:
          "flex h-56 items-center justify-center text-center text-2xl font-semibold text-gray-300 w-[830px] mx-auto",
      },
    }),
    imageOptions
  );
}
