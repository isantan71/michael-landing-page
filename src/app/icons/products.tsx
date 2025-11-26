"use client";

import React from "react";

// Simple per-product icons. These can be replaced with richer SVGs later.

export const MovieFansIcon: React.FC = () => (
  <span className="text-sm font-semibold">MF</span>
);

export const SwissIcon: React.FC = () => (
  <span className="text-sm font-semibold">SW</span>
);

export const OneYumiIcon: React.FC = () => (
  <span className="text-sm font-semibold">OY</span>
);

export const AIChatSandboxIcon: React.FC = () => (
  <span className="text-sm font-semibold">AC</span>
);

export const DesignSystemIcon: React.FC = () => (
  <span className="text-sm font-semibold">DS</span>
);

export const DataPipelineIcon: React.FC = () => (
  <span className="text-sm font-semibold">DP</span>
);

// Mapping from product names to icons
export const productIcons: Record<string, React.FC | string | undefined> = {
  MovieFans: MovieFansIcon,
  "Super Swiss": SwissIcon,
  OneYumi: "/icons/oneyumi.svg",
  "AI Chat Sandbox": AIChatSandboxIcon,
  "Design System": DesignSystemIcon,
  "Data Pipeline": DataPipelineIcon,
};
