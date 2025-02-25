import { getAllPosts, getPostBySlug } from "@/app/blog/lib/posts";
import { ImageResponse } from "next/og";
import type { ImageResponseOptions } from "next/server";
import {
  OhImgBaseTemplate,
  GradientDirection,
  MaskDirection,
  OhImgBaseTemplateProps,
  PatternType,
} from "@/components/ohimg";

// export const runtime = "edge";

// export const contentType = "image/png";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  const imageOptions: ImageResponseOptions = {
    width: 1200,
    height: 630,
  };

  const ohImgOptions: OhImgBaseTemplateProps = {
    content: {
      title: "Every webpage deserves it's own open graph image",
      subTitle:
        "Generate beautiful open graph images for your website with Ohimg. Customize the template to match your brand.",
    },
    gradient: {
      startColor: "#0F172A",
      endColor: "#1E293B",
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
        "relative flex flex-col w-full min-h-screen mx-auto px-[40px] py-[40px]",
      title:
        "flex-1 h-full text-[#ffffff] text-6xl font-semibold text-center w-[830px] mx-auto items-center justify-center leading-tight",
      subTitle:
        "flex h-48 items-start justify-center text-center text-2xl font-semibold text-gray-300 w-[830px] mx-auto",
    },
  };

  if (!post) {
    return new ImageResponse(OhImgBaseTemplate(ohImgOptions), imageOptions);
  }

  const { slug, ...postWithoutSlug } = post;

  const templateConfig: OhImgBaseTemplateProps = {
    ...postWithoutSlug,
    content: {
      ...postWithoutSlug.content,
      title: `${slug} - ${postWithoutSlug.content.title}`,
    },
  };

  return new ImageResponse(OhImgBaseTemplate(templateConfig), imageOptions);
}
