import {
  type GradientLayer,
  type OhImgBaseTemplateProps,
  type PatternLayer,
} from "./types";
import { cn, getGradientStyle, getPatternStyle } from "./helpers";

export function OhImgBaseTemplate({
  content,
  background,
  pattern,
  gradient,
  layout,
}: OhImgBaseTemplateProps) {
  const mergedLayout = layout;
  const mergedGradient = gradient;
  const mergedPattern = pattern;

  return (
    <div
      tw={cn(
        "relative flex w-full h-full",
        "flex flex-col",
        mergedLayout?.layoutContainer
      )}
    >
      {background?.imageSrc && (
        <img
          tw="absolute inset-0"
          alt="Background image"
          src={background.imageSrc}
          width={1200}
          height={630}
        />
      )}

      {/* Background Gradient layer */}
      {mergedGradient && mergedGradient.direction !== "none" && (
        <div
          tw="absolute inset-0"
          style={getGradientStyle(mergedGradient as GradientLayer)}
        />
      )}

      {/* Pattern Overlay layer */}
      {mergedPattern && mergedPattern.type !== "none" && (
        <div
          tw="absolute inset-0"
          style={getPatternStyle(mergedPattern as PatternLayer)}
        />
      )}

      {/* Content container */}
      <div tw={cn("flex", mergedLayout?.contentContainer)}>
        {content?.logoSrc && (
          <div tw={cn("flex", mergedLayout?.logoContainer)}>
            <img
              alt={content.title || "Logo"}
              src={content.logoSrc}
              tw={mergedLayout?.logo}
            />
          </div>
        )}

        {content.tags && content.tags?.length > 0 && (
          <div tw={cn("flex", mergedLayout?.tagContainer)}>
            {content.tags.map((tag, index) => (
              <div key={index} tw={mergedLayout?.tag}>
                {tag}
              </div>
            ))}
          </div>
        )}

        <div
          tw={cn("flex-1", mergedLayout?.title)}
          style={{
            fontFamily: "Inter_18pt-Bold",
          }}
        >
          {content.title}
        </div>

        {content.subTitle && (
          <div
            tw={mergedLayout?.subTitle}
            style={{
              fontFamily: "Inter_18pt-Regular",
            }}
          >
            {content.subTitle}
          </div>
        )}

        {content.website && (
          <div
            tw={mergedLayout?.website}
            style={{
              fontFamily: "Inter_18pt-Regular",
            }}
          >
            {content.website}
          </div>
        )}
      </div>
    </div>
  );
}
