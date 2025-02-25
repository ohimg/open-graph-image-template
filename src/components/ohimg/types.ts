// types.ts
// "use client";

// Layer 1 - Pattern configuration
export const patternTypes = ["none", "grid", "dots"] as const;
export type PatternType = (typeof patternTypes)[number];

// Layer 2 - Gradient configuration
export const gradientDirections = [
  "none",
  "to right",
  "to left",
  "to bottom",
  "to top",
  "to bottom right",
  "to bottom left",
  "to top right",
  "to top left",
] as const;
export type GradientDirection = (typeof gradientDirections)[number];

// Pattern mask directions
export const maskDirections = [
  "none",
  "circle at center",
  "circle at center top",
  "circle at top right",
  "circle at center right",
  "circle at bottom right",
  "circle at center bottom",
  "circle at bottom left",
  "circle at center left",
  "circle at top left",
] as const;
export type MaskDirection = (typeof maskDirections)[number];

// Layout position options
export const positionOptions = ["start", "center", "end"] as const;
export type PositionOption = (typeof positionOptions)[number];

// Text alignment options
export const alignmentOptions = ["left", "center", "right"] as const;
export type AlignmentOption = (typeof alignmentOptions)[number];

// Preset names
export const presetNames = [
  "solid",
  "modern",
  "classic",
  "minimal",
  "bold",
  "bg-image",
  "darkmode",
  "lightmode",
] as const;
export type PresetName = (typeof presetNames)[number];

// Helper functions to get type values
export function getPatternTypes(): PatternType[] {
  return [...patternTypes];
}

export function getGradientDirections(): GradientDirection[] {
  return [...gradientDirections];
}

export function getMaskDirections(): MaskDirection[] {
  return [...maskDirections];
}

export function getPositionOptions(): PositionOption[] {
  return [...positionOptions];
}

export function getAlignmentOptions(): AlignmentOption[] {
  return [...alignmentOptions];
}

export function getPresetNames(): PresetName[] {
  return [...presetNames];
}

// Layer-specific interfaces
export interface BackgroundImageLayer {
  imageSrc?: string;
}

export interface MaskLayer {
  enabled?: boolean;
  direction?: MaskDirection;
  visibleRadius?: number;
  fadeWidth?: number;
}

export interface PatternLayer {
  type?: PatternType; // none, dots, grid
  color?: string; // dots and grid
  opacity?: number; // dots and grid
  size?: number; // dots and grid
  backgroundSize?: number; // only dots
  lineThickness?: number; // only grid
  mask?: MaskLayer;
}

export interface GradientLayer {
  startColor?: string;
  endColor?: string;
  opacity?: number;
  direction?: GradientDirection;
  mask?: MaskLayer;
}

export interface PositionedElement {
  customClasses?: string;
  textColor?: string;
  bgColor?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  hPosition?: PositionOption;
  vPosition?: PositionOption;
  alignment?: AlignmentOption;
  autoMargin?: boolean;
}

export interface ContentLayout {
  layoutContainer?: string;
  logoContainer?: string;
  logo?: string;
  tagContainer?: string;
  contentContainer?: string;
  tag?: string;
  title?: string;
  subTitle?: string;
  website?: string;
}

// Main template interface
export interface OhImgBaseTemplateProps {
  // Required content
  content: {
    title: string;
    subTitle?: string;
    tags?: string[];
    website?: string;
    logoSrc?: string;
  };

  // Optional layers
  background?: BackgroundImageLayer;
  pattern?: PatternLayer;
  gradient?: GradientLayer;

  // Layout configuration
  layout?: ContentLayout;

  // Optional preset
  preset?: PresetName;

  // Override flag
  override?: boolean;
}

// Preset configurations
