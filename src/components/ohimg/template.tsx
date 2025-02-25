/* eslint-disable react/no-unknown-property */
import {
  type GradientLayer,
  type ImageTemplate,
  type PatternLayer,
} from "./types";
import {
  cn,
  getDefaultLayout,
  getGradientStyle,
  getPatternStyle,
  mergeGradientWithPreset,
  mergeLayouts,
  mergePatternWithPreset,
} from "./helpers";
import { presets } from "./presets";

export function Template({
  content,
  background,
  pattern,
  gradient,
  layout,
  preset = "modern",
}: ImageTemplate) {
  const presetValues = presets[preset];
  const defaultLayout = getDefaultLayout();
  const mergedLayout = mergeLayouts(defaultLayout, presetValues.layout, layout);

  // const maxWidth: number = calculateMaxWidth(mergedLayout.padding?.x);

  const mergedGradient = mergeGradientWithPreset(
    gradient,
    presetValues.gradient
  );

  const mergedPattern = mergePatternWithPreset(pattern, presetValues.pattern);

  return (
    <div
      tw={cn(
        "relative flex w-full h-full",
        "flex flex-col",
        mergedLayout.layoutContainer
      )}
    >
      {background?.imageSrc && (
        <img
          tw="absolute inset-0"
          alt=""
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
      <div tw={cn("flex", mergedLayout.contentContainer)}>
        {content?.logoSrc && (
          <div tw={cn("flex", mergedLayout.logoContainer)}>
            <img
              alt={content.title || "Logo"}
              src={content.logoSrc}
              // height={`${mergedLayout.logo?.height}`}
              tw={mergedLayout.logo}
            />
          </div>
        )}

        {content.tags && content.tags?.length > 0 && (
          <div tw={cn("flex", mergedLayout.tagContainer)}>
            {content.tags.map((tag, index) => (
              <div key={index} tw={mergedLayout.tag}>
                {tag}
              </div>
            ))}
          </div>
        )}

        <div
          tw={cn("flex-1", mergedLayout.title)}
          style={{
            fontFamily: "Inter_18pt-Regular",
          }}
        >
          {content.title}
        </div>

        {content.subTitle && (
          <div
            tw={mergedLayout.subTitle}
            style={{
              fontFamily: "Inter_18pt-Regular",
            }}
          >
            {content.subTitle}
          </div>
        )}

        {content.website && (
          <div
            tw={mergedLayout.website}
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
